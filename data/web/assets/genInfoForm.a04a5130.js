import{g as h,R as E,r as u,o as d,c as g,w as l,j as e,l as T,i as V,W as L,X as Q,z as N,C,A as o,p as w,Q as R}from"./vendor.dda3acc4.js";import{l as X}from"./menu.ee422d77.js";import"./index.6a9993b0.js";const $=o("\u751F\u6210\u6A21\u677F"),G=o(" \u751F\u6210\u5305\u8DEF\u5F84 "),H=o(" \u751F\u6210\u6A21\u5757\u540D "),J=o(" \u751F\u6210\u4E1A\u52A1\u540D "),K=o(" \u751F\u6210\u529F\u80FD\u540D "),Y=o(" \u4E0A\u7EA7\u83DC\u5355 "),Z=o(" \u751F\u6210\u4EE3\u7801\u65B9\u5F0F "),ee=o("zip\u538B\u7F29\u5305"),le=o("\u81EA\u5B9A\u4E49\u8DEF\u5F84"),te=o(" \u81EA\u5B9A\u4E49\u8DEF\u5F84 "),ne=o(" \u6700\u8FD1\u8DEF\u5F84\u5FEB\u901F\u9009\u62E9 "),ae=w("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),oe=o("\u6062\u590D\u9ED8\u8BA4\u7684\u751F\u6210\u57FA\u7840\u8DEF\u5F84"),ue=w("h4",{class:"form-header"},"\u5176\u4ED6\u4FE1\u606F",-1),de=o(" \u6811\u7F16\u7801\u5B57\u6BB5 "),me=o(" \u6811\u7236\u7F16\u7801\u5B57\u6BB5 "),se=o(" \u6811\u540D\u79F0\u5B57\u6BB5 "),fe=w("h4",{class:"form-header"},"\u5173\u8054\u4FE1\u606F",-1),ie=o(" \u5173\u8054\u5B50\u8868\u7684\u8868\u540D "),re=o(" \u5B50\u8868\u5173\u8054\u7684\u5916\u952E\u540D "),_e={props:{info:{type:Object,default:null},tables:{type:Array,default:null}},setup(n){const _=n,U=h([]),j=h({}),{proxy:I}=R(),F=h({tplCategory:[{required:!0,message:"\u8BF7\u9009\u62E9\u751F\u6210\u6A21\u677F",trigger:"blur"}],packageName:[{required:!0,message:"\u8BF7\u8F93\u5165\u751F\u6210\u5305\u8DEF\u5F84",trigger:"blur"}],moduleName:[{required:!0,message:"\u8BF7\u8F93\u5165\u751F\u6210\u6A21\u5757\u540D",trigger:"blur"}],businessName:[{required:!0,message:"\u8BF7\u8F93\u5165\u751F\u6210\u4E1A\u52A1\u540D",trigger:"blur"}],functionName:[{required:!0,message:"\u8BF7\u8F93\u5165\u751F\u6210\u529F\u80FD\u540D",trigger:"blur"}]});function P(b){_.info.subTableFkName=""}function q(b){b!=="sub"&&(_.info.subTableName="",_.info.subTableFkName="")}function M(b){for(var a in _.tables){const c=_.tables[a].tableName;if(b===c){U.value=_.tables[a].columns;break}}}function B(){X().then(b=>{j.value=I.handleTree(b.data,"menuId")})}return E(()=>_.info.subTableName,b=>{M(b)}),B(),(b,a)=>{const c=u("el-option"),y=u("el-select"),m=u("el-form-item"),s=u("el-col"),f=u("info-filled"),i=u("el-icon"),r=u("el-tooltip"),v=u("el-input"),S=u("tree-select"),x=u("el-radio"),z=u("el-button"),A=u("el-dropdown-item"),O=u("el-dropdown-menu"),W=u("el-dropdown"),k=u("el-row"),D=u("el-form");return d(),g(D,{ref:"genInfoForm",model:n.info,rules:F.value,"label-width":"150px"},{default:l(()=>[e(k,null,{default:l(()=>[e(s,{span:12},{default:l(()=>[e(m,{prop:"tplCategory"},{label:l(()=>[$]),default:l(()=>[e(y,{modelValue:n.info.tplCategory,"onUpdate:modelValue":a[0]||(a[0]=t=>n.info.tplCategory=t),onChange:q},{default:l(()=>[e(c,{label:"\u5355\u8868\uFF08\u589E\u5220\u6539\u67E5\uFF09",value:"crud"}),e(c,{label:"\u6811\u8868\uFF08\u589E\u5220\u6539\u67E5\uFF09",value:"tree"}),e(c,{label:"\u4E3B\u5B50\u8868\uFF08\u589E\u5220\u6539\u67E5\uFF09",value:"sub"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,{prop:"packageName"},{label:l(()=>[G,e(r,{content:"\u751F\u6210\u5728\u54EA\u4E2Ajava\u5305\u4E0B\uFF0C\u4F8B\u5982 com.ruoyi.system",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:n.info.packageName,"onUpdate:modelValue":a[1]||(a[1]=t=>n.info.packageName=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,{prop:"moduleName"},{label:l(()=>[H,e(r,{content:"\u53EF\u7406\u89E3\u4E3A\u5B50\u7CFB\u7EDF\u540D\uFF0C\u4F8B\u5982 system",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:n.info.moduleName,"onUpdate:modelValue":a[2]||(a[2]=t=>n.info.moduleName=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,{prop:"businessName"},{label:l(()=>[J,e(r,{content:"\u53EF\u7406\u89E3\u4E3A\u529F\u80FD\u82F1\u6587\u540D\uFF0C\u4F8B\u5982 user",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:n.info.businessName,"onUpdate:modelValue":a[3]||(a[3]=t=>n.info.businessName=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,{prop:"functionName"},{label:l(()=>[K,e(r,{content:"\u7528\u4F5C\u7C7B\u63CF\u8FF0\uFF0C\u4F8B\u5982 \u7528\u6237",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:n.info.functionName,"onUpdate:modelValue":a[4]||(a[4]=t=>n.info.functionName=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[Y,e(r,{content:"\u5206\u914D\u5230\u6307\u5B9A\u83DC\u5355\u4E0B\uFF0C\u4F8B\u5982 \u7CFB\u7EDF\u7BA1\u7406",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(S,{value:n.info.parentMenuId,"onUpdate:value":a[5]||(a[5]=t=>n.info.parentMenuId=t),options:j.value,objMap:{value:"menuId",label:"menuName",children:"children"},placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u83DC\u5355"},null,8,["value","options"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,{prop:"genType"},{label:l(()=>[Z,e(r,{content:"\u9ED8\u8BA4\u4E3Azip\u538B\u7F29\u5305\u4E0B\u8F7D\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u751F\u6210\u8DEF\u5F84",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(x,{modelValue:n.info.genType,"onUpdate:modelValue":a[6]||(a[6]=t=>n.info.genType=t),label:"0"},{default:l(()=>[ee]),_:1},8,["modelValue"]),e(x,{modelValue:n.info.genType,"onUpdate:modelValue":a[7]||(a[7]=t=>n.info.genType=t),label:"1"},{default:l(()=>[le]),_:1},8,["modelValue"])]),_:1})]),_:1}),n.info.genType=="1"?(d(),g(s,{key:0,span:24},{default:l(()=>[e(m,{prop:"genPath"},{label:l(()=>[te,e(r,{content:"\u586B\u5199\u78C1\u76D8\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u82E5\u4E0D\u586B\u5199\uFF0C\u5219\u751F\u6210\u5230\u5F53\u524DWeb\u9879\u76EE\u4E0B",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:n.info.genPath,"onUpdate:modelValue":a[9]||(a[9]=t=>n.info.genPath=t)},{append:l(()=>[e(W,null,{dropdown:l(()=>[e(O,null,{default:l(()=>[e(A,{onClick:a[8]||(a[8]=t=>n.info.genPath="/")},{default:l(()=>[oe]),_:1})]),_:1})]),default:l(()=>[e(z,{type:"primary"},{default:l(()=>[ne,ae]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):T("",!0)]),_:1}),n.info.tplCategory=="tree"?(d(),V(N,{key:0},[ue,L(e(k,null,{default:l(()=>[e(s,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[de,e(r,{content:"\u6811\u663E\u793A\u7684\u7F16\u7801\u5B57\u6BB5\u540D\uFF0C \u5982\uFF1Adept_id",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(y,{modelValue:n.info.treeCode,"onUpdate:modelValue":a[10]||(a[10]=t=>n.info.treeCode=t),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(d(!0),V(N,null,C(n.info.columns,(t,p)=>(d(),g(c,{key:p,label:t.columnName+"\uFF1A"+t.columnComment,value:t.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[me,e(r,{content:"\u6811\u663E\u793A\u7684\u7236\u7F16\u7801\u5B57\u6BB5\u540D\uFF0C \u5982\uFF1Aparent_Id",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(y,{modelValue:n.info.treeParentCode,"onUpdate:modelValue":a[11]||(a[11]=t=>n.info.treeParentCode=t),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(d(!0),V(N,null,C(n.info.columns,(t,p)=>(d(),g(c,{key:p,label:t.columnName+"\uFF1A"+t.columnComment,value:t.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[se,e(r,{content:"\u6811\u8282\u70B9\u7684\u663E\u793A\u540D\u79F0\u5B57\u6BB5\u540D\uFF0C \u5982\uFF1Adept_name",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(y,{modelValue:n.info.treeName,"onUpdate:modelValue":a[12]||(a[12]=t=>n.info.treeName=t),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(d(!0),V(N,null,C(n.info.columns,(t,p)=>(d(),g(c,{key:p,label:t.columnName+"\uFF1A"+t.columnComment,value:t.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},512),[[Q,n.info.tplCategory=="tree"]])],64)):T("",!0),n.info.tplCategory=="sub"?(d(),V(N,{key:1},[fe,e(k,null,{default:l(()=>[e(s,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[ie,e(r,{content:"\u5173\u8054\u5B50\u8868\u7684\u8868\u540D\uFF0C \u5982\uFF1Asys_user",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(y,{modelValue:n.info.subTableName,"onUpdate:modelValue":a[13]||(a[13]=t=>n.info.subTableName=t),placeholder:"\u8BF7\u9009\u62E9",onChange:P},{default:l(()=>[(d(!0),V(N,null,C(n.tables,(t,p)=>(d(),g(c,{key:p,label:t.tableName+"\uFF1A"+t.tableComment,value:t.tableName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[re,e(r,{content:"\u5B50\u8868\u5173\u8054\u7684\u5916\u952E\u540D\uFF0C \u5982\uFF1Auser_id",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(f)]),_:1})]),_:1})]),default:l(()=>[e(y,{modelValue:n.info.subTableFkName,"onUpdate:modelValue":a[14]||(a[14]=t=>n.info.subTableFkName=t),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(d(!0),V(N,null,C(U.value,(t,p)=>(d(),g(c,{key:p,label:t.columnName+"\uFF1A"+t.columnComment,value:t.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)):T("",!0)]),_:1},8,["model","rules"])}}};export{_e as default};