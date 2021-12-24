use chrono::{Local, NaiveDateTime};
use poem::{error::BadRequest, http::StatusCode, web::Json, Error, Result};
use sea_orm::{
    ActiveModelTrait, ColumnTrait, ConnectionTrait, DatabaseConnection, EntityTrait, Order,
    PaginatorTrait, QueryFilter, QueryOrder, Set,
};

use super::super::entities::{prelude::SysDictData, sys_dict_data};
use super::super::models::{
    sys_dict_data::{AddReq, DeleteReq, EditReq, Resp, SearchReq},
    PageParams,
};

/// get_list 获取列表
/// page_params 分页参数
/// db 数据库连接 使用db.0
pub async fn get_sort_list(
    db: &DatabaseConnection,
    page_params: PageParams,
    search_req: SearchReq,
) -> Result<Json<serde_json::Value>> {
    let page_num = page_params.page_num.unwrap_or(1);
    let page_per_size = page_params.page_size.unwrap_or(10);
    //  生成查询条件
    let mut s = SysDictData::find();

    if let Some(x) = search_req.dict_type {
        s = s.filter(sys_dict_data::Column::DictType.eq(x));
    }

    if let Some(x) = search_req.dict_label {
        s = s.filter(sys_dict_data::Column::DictLabel.eq(x));
    }
    if let Some(x) = search_req.status {
        s = s.filter(sys_dict_data::Column::Status.eq(x));
    }
    if let Some(x) = search_req.begin_time {
        s = s.filter(sys_dict_data::Column::CreatedAt.gte(x));
    }
    if let Some(x) = search_req.end_time {
        s = s.filter(sys_dict_data::Column::CreatedAt.lte(x));
    }
    // 获取全部数据条数
    let total = s.clone().count(db).await.map_err(BadRequest)?;
    // 分页获取数据
    let paginator = s
        .order_by_asc(sys_dict_data::Column::DictDataId)
        .paginate(db, page_per_size);
    let num_pages = paginator.num_pages().await.map_err(BadRequest)?;
    let list = paginator
        .fetch_page(page_num - 1)
        .await
        .expect("could not retrieve posts");

    Ok(Json(serde_json::json!({

            "list": list,
            "total": total,
            "total_pages": num_pages,
            "page_num": page_num,

    })))
}

pub async fn check_dict_data_is_exist(req: AddReq, db: &DatabaseConnection) -> Result<bool> {
    let s = SysDictData::find().filter(sys_dict_data::Column::DictType.eq(req.dict_type));
    let s1 = s
        .clone()
        .filter(sys_dict_data::Column::DictValue.eq(req.dict_value));
    let s2 = s
        .clone()
        .filter(sys_dict_data::Column::DictLabel.eq(req.dict_label));
    let count1 = s1.count(db).await.map_err(BadRequest)?;
    let count2 = s2.count(db).await.map_err(BadRequest)?;
    Ok(count1 > 0 || count2 > 0)
}

/// add 添加
pub async fn add(db: &DatabaseConnection, add_req: AddReq) -> Result<Json<serde_json::Value>> {
    //  检查字典类型是否存在
    if check_dict_data_is_exist(add_req.clone(), db).await? {
        return Err(Error::from_string(
            "字典类型或者字典值或者字典标签已经存在",
            StatusCode::BAD_REQUEST,
        ));
    }

    let uid = scru128::scru128().to_string();
    let now: NaiveDateTime = Local::now().naive_local();
    let user = sys_dict_data::ActiveModel {
        dict_data_id: Set(uid.clone()),
        dict_label: Set(add_req.dict_label),
        dict_type: Set(add_req.dict_type),
        dict_sort: Set(add_req.dict_sort),
        is_default: Set(add_req.is_default),
        status: Set(add_req.status.unwrap_or(1)),
        remark: Set(Some(add_req.remark.unwrap_or_else(|| "".to_string()))),
        created_at: Set(Some(now)),
        ..Default::default()
    };
    let txn = db.begin().await.map_err(BadRequest)?;
    //  let re =   user.insert(db).await?; 这个多查询一次结果
    let _ = SysDictData::insert(user)
        .exec(&txn)
        .await
        .map_err(BadRequest)?;
    txn.commit().await.map_err(BadRequest)?;
    let resp = Json(serde_json::json!({ "id": uid }));
    Ok(resp)
}

/// delete 完全删除
pub async fn ddelete(
    db: &DatabaseConnection,
    delete_req: DeleteReq,
) -> Result<Json<serde_json::Value>> {
    let mut s = SysDictData::delete_many();

    s = s.filter(sys_dict_data::Column::DictDataId.is_in(delete_req.dict_ids));

    //开始删除
    let d = s.exec(db).await.map_err(BadRequest)?;

    match d.rows_affected {
        0 => Err(Error::from_string(
            "你要删除的字典类型不存在",
            StatusCode::BAD_REQUEST,
        )),
        i => {
            return Ok(Json(serde_json::json!({
                "msg": format!("成功删除{}条数据", i)
            })))
        }
    }
}

// edit 修改
pub async fn edit(db: &DatabaseConnection, edit_req: EditReq) -> Result<Json<serde_json::Value>> {
    let uid = edit_req.dict_data_id;
    let s_s = SysDictData::find_by_id(uid.clone())
        .one(db)
        .await
        .map_err(BadRequest)?;
    let s_r: sys_dict_data::ActiveModel = s_s.unwrap().into();
    let now: NaiveDateTime = Local::now().naive_local();
    let act = sys_dict_data::ActiveModel {
        dict_label: Set(edit_req.dict_label),
        dict_type: Set(edit_req.dict_type),
        dict_sort: Set(edit_req.dict_sort),
        is_default: Set(edit_req.is_default),
        status: Set(edit_req.status),
        remark: Set(Some(edit_req.remark)),
        updated_at: Set(Some(now)),
        ..s_r
    };
    // 更新
    let _aa = act.update(db).await.map_err(BadRequest); //这个两种方式一样 都要多查询一次

    return Ok(Json(serde_json::json!({
        "msg": format!("用户<{}>数据更新成功", uid)
    })));
}

/// get_user_by_id 获取用户Id获取用户   
/// db 数据库连接 使用db.0

pub async fn get_by_id(
    db: &DatabaseConnection,
    search_req: SearchReq,
) -> Result<Json<serde_json::Value>> {
    let mut s = SysDictData::find();
    s = s.filter(sys_dict_data::Column::DeletedAt.is_null());
    //
    if let Some(x) = search_req.dict_data_id {
        s = s.filter(sys_dict_data::Column::DictDataId.eq(x));
    } else {
        return Err(Error::from_string(
            "请输入字典类型id",
            StatusCode::BAD_REQUEST,
        ));
    }

    let res = match s.one(db).await.map_err(BadRequest)? {
        Some(m) => m,
        None => {
            return Err(Error::from_string(
                "字典类型不存在",
                StatusCode::BAD_REQUEST,
            ))
        }
    };

    let result: Resp = serde_json::from_value(serde_json::json!(res)).map_err(BadRequest)?; //这种数据转换效率不知道怎么样

    Ok(Json(serde_json::json!({ "result": result })))
}

/// get_all 获取全部   
/// db 数据库连接 使用db.0
pub async fn get_all(db: &DatabaseConnection) -> Result<Json<serde_json::Value>> {
    let s = SysDictData::find()
        .filter(sys_dict_data::Column::DeletedAt.is_null())
        .filter(sys_dict_data::Column::Status.eq(1))
        .order_by(sys_dict_data::Column::DictDataId, Order::Asc)
        .all(db)
        .await
        .map_err(BadRequest)?;
    let result: Vec<Resp> = serde_json::from_value(serde_json::json!(s)).map_err(BadRequest)?; //这种数据转换效率不知道怎么样
    Ok(Json(serde_json::json!({ "result": result })))
}