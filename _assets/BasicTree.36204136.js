let e=document.createElement("style");e.innerHTML=".basic-tree{position:relative}.basic-tree-title{position:relative;display:inline-block;width:100%;padding-right:10px}.basic-tree-title:hover .basic-tree__action{visibility:visible}.basic-tree__content{display:inline-block;overflow:hidden}.basic-tree__actions{position:absolute;top:0;right:0;display:flex}.basic-tree__action{margin-left:4px;visibility:hidden}",document.head.appendChild(e);import{f as t,cM as s,cN as n,a as i,b as a,r as d,s as c,cH as r,ae as l,R as o}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./Trigger.9f179c61.js";import{o as y}from"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./index.39160d78.js";import"./types.c19bf052.js";import"./index.a172b251.js";import"./index.3d154f97.js";import"./index.2a5e56d5.js";import"./index.b96a1214.js";import"./CaretDownFilled.9914b908.js";import"./FileOutlined.a51aea6c.js";import{T as p}from"./index.dc739911.js";import{D as u}from"./DownOutlined.56cf5734.js";import{e as f}from"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import{u as K}from"./useExpose.5bc091f5.js";import{u as h}from"./useContextMenu.8666cb6e.js";var b=i({name:"BasicTree",props:{replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array}},emits:["update:expandedKeys","update:selectedKeys","update:value"],setup(e,{attrs:i,slots:b,emit:m}){const x=a({expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),k=d([]),[g]=h(),j=c((()=>{const{replaceFields:t}=e;return{children:"children",title:"title",key:"key",...t}})),v=c((()=>{const{actionList:t}=e;return{width:`calc(100% - ${18*t.length}px)`}})),_=c((()=>{let s={blockNode:!0,...i,...e,expandedKeys:x.expandedKeys,selectedKeys:x.selectedKeys,checkedKeys:x.checkedKeys,replaceFields:t(j),"onUpdate:expandedKeys":e=>{x.expandedKeys=e,m("update:expandedKeys",e)},"onUpdate:selectedKeys":e=>{x.selectedKeys=e,m("update:selectedKeys",e)},onCheck:e=>{x.checkedKeys=e,m("update:value",e)},onRightClick:D};return s=y(s,"treeData"),s})),B=c((()=>t(k))),{deleteNodeByKey:N,insertNodeByKey:C,filterByLevel:L,updateNodeByKey:w}=function(e,i){return{deleteNodeByKey:function s(n,a){if(!n)return;const d=a||t(e),{key:c,children:r}=t(i);if(r&&c)for(let e=0;e<d.length;e++){const t=d[e],i=t[r];if(t[c]===n){d.splice(e,1);break}i&&i.length&&s(n,t[r])}},insertNodeByKey:function({parentKey:a=null,node:d,push:c="push"}){const r=s(t(e));if(!a)return r[c](d),void(e.value=r);const{key:l,children:o}=t(i);o&&l&&(n(r,(e=>{e[l]===a&&(e[o]=e[o]||[],e[o][c](d))})),e.value=r)},filterByLevel:function s(n=1,a,d=1){if(!n)return[];const c=[],r=a||t(e)||[];for(let e=0;e<r.length;e++){const a=r[e],{key:l,children:o}=t(i),y=l?a[l]:"",p=o?a[o]:[];c.push(y),p&&p.length&&d<n&&(d+=1,c.push(...s(n,p,d)))}return c},updateNodeByKey:function s(n,a,d){if(!n)return;const c=d||t(e),{key:r,children:l}=t(i);if(l&&r)for(let e=0;e<c.length;e++){const t=c[e],i=t[l];if(t[r]===n){c[e]={...c[e],...a};break}i&&i.length&&s(n,a,t[l])}}}}(k,j);function A({data:s}){return s?s.map((s=>{const{title:n,key:i,children:a}=t(j),d=y(s,"title"),c=s;return o(p.TreeNode,{...d,key:null==c?void 0:c[i]},{title:()=>o("span",{class:"basic-tree-title"},o("span",{class:"basic-tree__content",style:t(v)},n&&c[n]),o("span",{class:"basic-tree__actions"}," ",function(t){const{actionList:s}=e;if(s&&0!==s.length)return s.map(((e,s)=>o("span",{key:s,class:"basic-tree__action"},e.render(t))))}(s))),default:()=>A({data:a?c[a]:[]})})})):null}async function D({event:t,node:s}){const{rightMenuList:n=[],beforeRightClick:i}=e;let a=[];a=i&&r(i)?await i(s):n,a.length&&g({event:t,items:a})}return l((()=>{k.value=e.treeData,x.expandedKeys=e.expandedKeys,x.selectedKeys=e.selectedKeys,x.checkedKeys=e.checkedKeys})),K({setExpandedKeys:function(e){x.expandedKeys=e},getExpandedKeys:function(){return x.expandedKeys},setSelectedKeys:function(e){x.selectedKeys=e},getSelectedKeys:function(){return x.selectedKeys},setCheckedKeys:function(e){x.checkedKeys=e},getCheckedKeys:function(){return x.checkedKeys},insertNodeByKey:C,deleteNodeByKey:N,updateNodeByKey:w,filterByLevel:e=>{x.expandedKeys=L(e)}}),()=>o(p,{...t(_),class:"basic-tree"},{switcherIcon:()=>o(u,null),default:()=>A({data:t(B)}),...f(b)})}});export default b;