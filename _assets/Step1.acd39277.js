let e=document.createElement("style");e.innerHTML=".step1-form[data-v-686dc77c]{width:450px;margin:0 auto}.step1 h3[data-v-686dc77c]{margin:0 0 12px;font-size:16px;line-height:32px;color:rgba(0,0,0,.45)}.step1 h4[data-v-686dc77c]{margin:0 0 4px;font-size:14px;line-height:22px;color:rgba(0,0,0,.45)}.step1 p[data-v-686dc77c]{color:rgba(0,0,0,.45)}.pay-select[data-v-686dc77c]{width:20%}.pay-input[data-v-686dc77c]{width:70%}",document.head.appendChild(e);import{a as t,O as a,Q as i,i as s,o,j as n,k as d,R as p,p as r}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import"./index.caa9c205.js";import"./omit.e1a1ead6.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.cd4888b0.js";import"./CheckOutlined.8996393f.js";import{s as c}from"./index.54ad7dca.js";import"./index.e160a50a.js";import"./colors.f10ffa37.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.e195d265.js";import"./index.419327a5.js";import"./UpOutlined.de078ead.js";import"./DownOutlined.aa15d04e.js";import"./index.19eec487.js";import"./index.750cd074.js";import"./index.1b9dbfc8.js";import"./CloseOutlined.09b38309.js";import"./index.b83eb5e2.js";import"./index.243e732a.js";import"./LeftOutlined.a332afde.js";import"./functional.b99ed96c.js";import"./RightOutlined.5716f2a4.js";import"./useTimeout.7f3ab19b.js";import"./useDebounce.388ff7a2.js";import"./useEventListener.056eaf86.js";import"./useBreakpoint.c3bb46ed.js";import"./resizeEvent.374e9514.js";import"./index.0e9d4f93.js";import"./useWindowSizeFn.6fb915be.js";import"./uuid.40269c00.js";import"./download.9a124c3a.js";import{u as l}from"./useForm.b39f2118.js";import{step1Schemas as m}from"./data.19933d75.js";var u=t({components:{BasicForm:c},emits:["next"],setup(e,{emit:t}){const[a,{validate:i}]=l({labelWidth:100,schemas:m,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await i();t("next",e)}catch(e){}}});return{register:a}}});const j=p("data-v-686dc77c");a("data-v-686dc77c");const f={class:"step1"},v={class:"step1-form"},b=r(" 支付宝 "),x=r(" 银联 "),h=d("h3",null,"说明",-1),g=d("h4",null,"转账到支付宝账户",-1),y=d("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),O=d("h4",null,"转账到银行卡",-1),w=d("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const _=j(((e,t,a,i,p,r)=>{const c=s("a-select-option"),l=s("a-select"),m=s("a-input"),u=s("a-input-group"),_=s("BasicForm"),F=s("a-divider");return o(),n("div",f,[d("div",v,[d(_,{onRegister:e.register},{fac:j((({model:e,field:t})=>[d(u,{compact:""},{default:j((()=>[d(l,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:j((()=>[d(c,{value:"zfb"},{default:j((()=>[b])),_:1}),d(c,{value:"yl"},{default:j((()=>[x])),_:1})])),_:2},1032,["value","onUpdate:value"]),d(m,{class:"pay-input",value:e[t],"onUpdate:value":a=>e[t]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),d(F),h,g,y,O,w])}));u.render=_,u.__scopeId="data-v-686dc77c";export default u;