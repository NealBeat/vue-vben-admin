import{d as e,aJ as s,aQ as t,a1 as a,bU as i,h as r,o,i as p,j as n,w as d,b4 as m,aR as l,aS as u,aH as c,bA as f}from"./index.0fe5b4aa.js";import{I as g}from"./index.e0e15a7a.js";import{_ as j}from"./index.65a34c2d.js";import"./LeftOutlined.fc8fb06d.js";import"./RightOutlined.41d2778b.js";import"./index.5e23d9bb.js";import"./index.db17a88d.js";import"./types.6e0f3d6a.js";import"./isEqual.68d23930.js";import"./toInteger.44429000.js";import"./DownOutlined.18f1db32.js";import"./index.8d91dadc.js";import"./index.323d7b75.js";import"./usePageContext.26b49328.js";import"./transButton.4dcaf1a5.js";var b=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:a((()=>{const{imageList:s}=e;return s?s.map((e=>i(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,a,i,g){const j=r("Image"),b=r("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(b,null,{default:d((()=>[!e.imageList||e.$slots.default?m(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},u(e.getImageList,(e=>(o(),p(j,c({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:d((()=>[n(j,c(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const h=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var v=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:h})});v.render=function(e,s,t,a,i,m){const l=r("ImagePreview"),u=r("PageWrapper");return o(),p(u,{title:"图片预览示例"},{default:d((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default v;