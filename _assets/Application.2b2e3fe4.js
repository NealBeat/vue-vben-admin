let a=document.createElement("style");a.innerHTML=".account-center-application__card{width:100%;margin-bottom:-12px}.account-center-application__card .ant-card-body{padding:16px}.account-center-application__card-title{margin-bottom:5px;font-size:16px;font-weight:500;color:rgba(0,0,0,.85)}.account-center-application__card-title .icon{margin-top:-5px;font-size:22px}.account-center-application__card-num{margin-left:24px;line-height:36px;color:#7d7a7a}.account-center-application__card-num span{margin-left:5px;font-size:18px;color:#000}.account-center-application__card-download{float:right;font-size:20px!important;color:#1890ff}",document.head.appendChild(a);import{a as t,i,o as e,j as o,w as c,k as n,aM as r,b9 as s,m as l,p,n as d}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./index.caabb9a0.js";import"./Trigger.85e0c6c3.js";import"./omit.55ec7501.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.985f7fcf.js";import"./CheckOutlined.68db086c.js";import"./RightOutlined.dc9b87b8.js";import"./index.7c3063c3.js";import"./UpOutlined.350ee0d8.js";import"./LeftOutlined.c6092702.js";import{C as m}from"./index.e2d0aa7e.js";import"./index.6c2d10f1.js";import"./zh_CN.0242bd16.js";import{L as f}from"./index.e6eb86f8.js";import{s as u}from"./index.30f1e688.js";import{applicationList as _}from"./data.fd58e07f.js";var x=t({components:{List:f,ListItem:f.Item,Card:m,Icon:u},setup:()=>({prefixCls:"account-center-application",list:_})});const j=p(" 活跃用户："),b=p(" 万 "),g=p(" 新增用户：");x.render=function(a,t,m,f,u,_){const x=i("Icon"),C=i("Card"),h=i("ListItem"),w=i("a-col"),v=i("a-row"),L=i("List");return e(),o(L,{class:a.prefixCls},{default:c((()=>[n(v,{gutter:16},{default:c((()=>[(e(!0),o(r,null,s(a.list,((t,i)=>(e(),o(w,{key:i,span:6},{default:c((()=>[n(h,null,{default:c((()=>[n(C,{hoverable:!0,class:`${a.prefixCls}__card`},{default:c((()=>[n("div",{class:`${a.prefixCls}__card-title`},[t.icon?(e(),o(x,{key:0,class:"icon",icon:t.icon,color:t.color},null,8,["icon","color"])):l("v-if",!0),p(" "+d(t.title),1)],2),n("div",{class:`${a.prefixCls}__card-num`},[j,n("span",null,d(t.active),1),b],2),n("div",{class:`${a.prefixCls}__card-num`},[g,n("span",null,d(t.new),1)],2),t.download?(e(),o(x,{key:0,class:`${a.prefixCls}__card-download`,icon:t.download},null,8,["class","icon"])):l("v-if",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default x;