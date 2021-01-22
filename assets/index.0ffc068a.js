import{d as e,r as o,cr as t,cs as r,h as i,o as s,i as n,bz as d,j as p,m as a}from"./index.0fe5b4aa.js";import{C as l}from"./index.157581f0.js";import"./index.1041a43b.js";import"./index.00ebb736.js";import{_ as c}from"./index.02b6349c.js";import m from"./PersonTable.e6f30676.js";import{_ as f}from"./index.65a34c2d.js";import{u}from"./useForm.93a8670c.js";import"./index.8eca1466.js";import"./UpOutlined.1d909d7c.js";import"./DownOutlined.18f1db32.js";import"./LeftOutlined.fc8fb06d.js";import"./RightOutlined.41d2778b.js";import"./responsiveObserve.c545f1cc.js";import"./index.eba2a025.js";import"./findIndex.9d450757.js";import"./isEqual.68d23930.js";import"./_baseProperty.74f89655.js";import"./toInteger.44429000.js";import"./index.b727e5d5.js";import"./SearchOutlined.bb6cb6d1.js";import"./CheckOutlined.46767306.js";import"./index.cc18ea0c.js";import"./index.086a754e.js";import"./index.eb0e0f34.js";import"./EyeOutlined.8230c2e2.js";import"./index.10b50b58.js";import"./colors.fc0812f0.js";import"./index.db17a88d.js";import"./types.6e0f3d6a.js";import"./Tree.250abd7f.js";import"./util.0e07cdc5.js";import"./useAttrs.47c04b5d.js";import"./index.8d91dadc.js";import"./index.d639cb97.js";import"./uuid.91c49fda.js";import"./index.cfbbf76c.js";import"./index.a593d1c4.js";import"./useTimeout.7518e08e.js";import"./useWindowSizeFn.d1a35182.js";import"./index.78d3227f.js";import"./index.31dd779b.js";import"./domUtils.38af2ce7.js";import"./_stringToArray.ec312786.js";import"./RightOutlined.51c6a3b9.js";import"./useScrollTo.da2c7ca7.js";import"./animation.40f56c40.js";import"./FullscreenOutlined.23d5b3f8.js";import"./index.38c23a97.js";import"./index.509d0e58.js";import"./index.e0e15a7a.js";import"./download.7d04639a.js";import"./index.ec1a29c7.js";import"./index.39d37653.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.f5db50f2.js";import"./scrollTo.c9242ea7.js";import"./transButton.4dcaf1a5.js";import"./clickOutside.1ff8778e.js";import"./useSortable.2acb421c.js";import"./CheckOutlined.9a1027dc.js";import"./SettingOutlined.443c9015.js";import"./useExpose.34134d49.js";import"./useTable.edb6335e.js";import"./index.5e23d9bb.js";import"./index.323d7b75.js";import"./usePageContext.26b49328.js";const j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],b=[{label:"私密",value:"1"},{label:"公开",value:"2"}],x=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:b},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:b},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:c,PersonTable:m,PageWrapper:f,[l.name]:l},setup(){const e=o(null),[t,{validate:r}]=u({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1}),[i,{validate:s}]=u({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:t,registerTask:i,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([r(),s()])}catch(o){}},tableRef:e}}});const h=d("data-v-85ff7730");t("data-v-85ff7730");const q=a("提交");r();const v=h(((e,o,t,r,d,a)=>{const l=i("BasicForm"),c=i("a-card"),m=i("PersonTable"),f=i("a-button"),u=i("PageWrapper");return s(),n(u,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:h((()=>[p(f,{type:"primary",onClick:e.submitAll},{default:h((()=>[q])),_:1},8,["onClick"])])),default:h((()=>[p(c,{title:"仓库管理",bordered:!1},{default:h((()=>[p(l,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:h((()=>[p(l,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),p(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:h((()=>[p(m,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=v,g.__scopeId="data-v-85ff7730";export default g;