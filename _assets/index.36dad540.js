import{r as e,f as t,bG as a,cD as r,a as o,i as n,o as s,j as i,k as l,w as c,p as d}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7ad475f3.js";import{a as m}from"./index.aa1eff48.js";import"./RightOutlined.03811c7b.js";import"./useTimeout.04d2c2bd.js";import"./tsxHelper.d9af66ea.js";import"./index.4ac354fa.js";import"./domUtils.697d239b.js";import"./index.b93bb98e.js";import"./animation.e1ae5215.js";import"./useScrollTo.5921c7fb.js";const p=Symbol("watermark-dom");var u=o({components:{CollapseContainer:m},setup(){const o=e(null),{setWatermark:n,clear:s}=function(o=e(document.body)){let n=()=>{};const s=p.toString(),i=()=>{const e=document.getElementById(s);if(e){const a=t(o);a&&a.removeChild(e)}window.removeEventListener("resize",n)},l=e=>{i();const a=document.createElement("canvas");a.width=300,a.height=240;const r=a.getContext("2d");r&&(r.rotate(-20*Math.PI/120),r.font="15px Vedana",r.fillStyle="rgba(0, 0, 0, 0.15)",r.textAlign="left",r.textBaseline="middle",r.fillText(e,a.width/20,a.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+a.toDataURL("image/png")+") left top repeat";const l=t(o);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),r()&&a((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:o}}});const f={class:"p-4"},x=d(" Create "),b=d("Clear"),h=d(" Reset ");u.render=function(e,t,a,r,o,d){const m=n("a-button"),p=n("CollapseContainer");return s(),i("div",f,[l(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:c((()=>[l(m,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:c((()=>[x])),_:1}),l(m,{color:"error",class:"mr-2",onClick:e.clear},{default:c((()=>[b])),_:1},8,["onClick"]),l(m,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:c((()=>[h])),_:1})])),_:1})])};export default u;