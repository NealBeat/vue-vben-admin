import{a as e,r as t,i,o as s,j as o,k as r,w as a,aM as d,b9 as m,p}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./useSortable.74a4edee.js";import"./index.caabb9a0.js";import"./Trigger.85e0c6c3.js";import"./omit.55ec7501.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.985f7fcf.js";import"./CheckOutlined.68db086c.js";import"./index.8b69d756.js";import"./colors.2c198061.js";import"./index.7db77d01.js";import"./RightOutlined.dc9b87b8.js";import"./index.c2ba9c2f.js";import"./types.6032647f.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7ad475f3.js";import"./_baseFor.f4e5f03f.js";import"./index.d7e6258a.js";import"./index.a172b251.js";import"./index.6227aee6.js";import"./index.151bd698.js";import"./UpOutlined.350ee0d8.js";import"./LeftOutlined.c6092702.js";import"./index.3a133817.js";import"./index.828aec9e.js";import"./index.5e4fc368.js";import"./index.9a4837a6.js";import"./index.6c2d10f1.js";import"./zh_CN.0242bd16.js";import"./index.4d632f1c.js";import"./index.3cc37455.js";import"./CaretDownFilled.6b8fd509.js";import"./index.aa1eff48.js";import"./CheckOutlined.c08442ed.js";import"./CloseOutlined.a385804b.js";import{s as c}from"./index.b6dbf657.js";import"./FullscreenOutlined.182bcb88.js";import"./LeftOutlined.60f39dee.js";import"./LoadingOutlined.fcd9fc2e.js";import"./TableAction.1b63178c.js";import"./RightOutlined.03811c7b.js";import"./SettingOutlined.fe954433.js";import"./useTimeout.04d2c2bd.js";import"./tsxHelper.d9af66ea.js";import"./index.4ac354fa.js";import"./domUtils.697d239b.js";import"./index.b93bb98e.js";import"./animation.e1ae5215.js";import"./useScrollTo.5921c7fb.js";import"./useAttrs.cbcfaf76.js";import"./index.30f1e688.js";import"./useForm.e934175a.js";import"./index.b419ef5c.js";import"./useWindowSizeFn.f8841ec5.js";import"./uuid.40269c00.js";import"./useExpose.37e055d0.js";import"./index.b8771aff.js";import{I as n}from"./index.aa5448ef.js";var j=e({components:{BasicTable:c,ImpExcel:n},setup(){const e=t([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const l={class:"m-4"},u=p("导入Excel");j.render=function(e,t,p,c,n,j){const f=i("a-button"),b=i("ImpExcel"),x=i("BasicTable");return s(),o("div",l,[r(b,{onSuccess:e.loadDataSuccess},{default:a((()=>[r(f,{class:"m-3"},{default:a((()=>[u])),_:1})])),_:1},8,["onSuccess"]),(s(!0),o(d,null,m(e.tableListRef,((e,t)=>(s(),o(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])};export default j;