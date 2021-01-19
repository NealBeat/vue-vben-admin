import{_ as e}from"./index.60510fc2.js";import{a as o}from"./index.803cad5c.js";import{_ as l}from"./index.5b50fd31.js";import{d as n,i,o as p,j as t,w as s,k as a}from"./index.a0c9d414.js";import{u as r}from"./useForm.0c31c5a9.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.d4af3e38.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.4b5d41a1.js";import"./useTimeout.81dc2a45.js";import"./useWindowSizeFn.3ffc3951.js";import"./FullscreenOutlined.a24d6272.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./domUtils.dc6d2a29.js";import"./index.34eb3473.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.21816986.js";var d=n({components:{BasicForm:e,CollapseContainer:o,PageWrapper:l},setup(){const[e]=r({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=r({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});d.render=function(e,o,l,n,r,d){const c=i("BasicForm"),m=i("CollapseContainer"),f=i("PageWrapper");return p(),t(f,{title:"可折叠表单示例"},{default:s((()=>[a(m,{title:"基础收缩示例"},{default:s((()=>[a(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(m,{title:"超过3行自动收起",class:"mt-4"},{default:s((()=>[a(c,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;