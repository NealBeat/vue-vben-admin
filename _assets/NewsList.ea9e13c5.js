let t=document.createElement("style");t.innerHTML=".news-list__item-avatar[data-v-1006fc50]{width:35px;height:35px;border-radius:50%}.news-list__item-title[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.65}.news-list__item-time[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.45}.news-list__item-light[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.85}.news-list__item-cnte[data-v-1006fc50]{background:#eef3fb;border-radius:2px;opacity:.6}.news-list__item-cnte__title[data-v-1006fc50]{font-size:14px;line-height:22px;color:rgba(0,0,0,.85)}",document.head.appendChild(t);import{a as e,d0 as s,d1 as i,i as a,o as l,j as n,k as o,aM as r,b9 as c,n as m,p as d,bi as p}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./index.caabb9a0.js";import"./Trigger.85e0c6c3.js";import"./omit.55ec7501.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.985f7fcf.js";import"./CheckOutlined.68db086c.js";import"./RightOutlined.dc9b87b8.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7ad475f3.js";import"./LeftOutlined.c6092702.js";import"./index.6c2d10f1.js";import"./zh_CN.0242bd16.js";import{L as _}from"./index.e6eb86f8.js";import{a as f,s as u}from"./index.aa1eff48.js";import"./RightOutlined.03811c7b.js";import"./useTimeout.04d2c2bd.js";import"./tsxHelper.d9af66ea.js";import"./index.4ac354fa.js";import"./domUtils.697d239b.js";import"./index.b93bb98e.js";import"./animation.e1ae5215.js";import"./useScrollTo.5921c7fb.js";import{n as b}from"./data.edc06832.js";import{_ as j}from"./header.0299ae16.js";var x=e({components:{List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,CollapseContainer:f,ScrollContainer:u},setup:()=>({newList:b})});const h=p("data-v-1006fc50");s("data-v-1006fc50");const w=o("img",{src:j,class:"news-list__item-avatar"},null,-1),v={class:"news-list__item-desc"},g={class:"news-list__item-time mb-1"},L={class:"news-list__item-title mb-1"},C={class:"news-list__item-light"},y=d("申请迭代 "),I={class:"news-list__item-light"},S=d("发布 "),T={class:"news-list__item-cnte p-2"},z={class:"news-list__item-cnte__title"},M=o("br",null,null,-1),O=o("br",null,null,-1),k=o("br",null,null,-1);i();const R=h(((t,e,s,i,p,_)=>{const f=a("ListItemMeta"),u=a("ListItem"),b=a("List"),j=a("ScrollContainer"),x=a("CollapseContainer");return l(),n(x,{class:"news-list",title:"动态",canExpan:!1},{default:h((()=>[o(j,null,{default:h((()=>[o(b,null,{default:h((()=>[(l(!0),n(r,null,c(t.newList,(t=>(l(),n(u,{key:t.id,class:"news-list__item"},{default:h((()=>[o(f,null,{avatar:h((()=>[w])),description:h((()=>[o("div",v,[o("div",g,m(t.sendTime),1),o("div",L,[o("span",C,m(t.sender)+" ",1),y,o("span",I," "+m(t.title)+" ",1),S]),o("div",T,[o("span",z,m(t.cnteId),1),M,d(" Status: "+m(t.cnteStas)+" ",1),O,d(" Repository: "+m(t.cnteRepo)+" ",1),k])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}));x.render=R,x.__scopeId="data-v-1006fc50";export default x;