let t=document.createElement("style");t.innerHTML=".step1-form[data-v-686dc77c]{width:450px;margin:0 auto}.step1 h3[data-v-686dc77c]{margin:0 0 12px;font-size:16px;line-height:32px;color:rgba(0,0,0,.45)}.step1 h4[data-v-686dc77c]{margin:0 0 4px;font-size:14px;line-height:22px;color:rgba(0,0,0,.45)}.step1 p[data-v-686dc77c]{color:rgba(0,0,0,.45)}.pay-select[data-v-686dc77c]{width:20%}.pay-input[data-v-686dc77c]{width:70%}",document.head.appendChild(t);import{a as e,cR as a,cS as s,i,o,j as d,k as p,aR as r,p as n}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import{s as c}from"./index.a5bb273d.js";import"./colors.5745025a.js";import"./RightOutlined.0becd0a0.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.dfac5dac.js";import"./index.5869ffa6.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import{u as l}from"./useForm.ba76dbfd.js";import{step1Schemas as m}from"./data.d4997fc1.js";var u=e({components:{BasicForm:c},emits:["next"],setup(t,{emit:e}){const[a,{validate:s}]=l({labelWidth:100,schemas:m,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const t=await s();e("next",t)}catch(t){}}});return{register:a}}});const f=r("data-v-686dc77c");a("data-v-686dc77c");const j={class:"step1"},b={class:"step1-form"},x=n(" 支付宝 "),v=n(" 银联 "),h=p("h3",null,"说明",-1),g=p("h4",null,"转账到支付宝账户",-1),y=p("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),_=p("h4",null,"转账到银行卡",-1),w=p("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);s();const O=f(((t,e,a,s,r,n)=>{const c=i("a-select-option"),l=i("a-select"),m=i("a-input"),u=i("a-input-group"),O=i("BasicForm"),R=i("a-divider");return o(),d("div",j,[p("div",b,[p(O,{onRegister:t.register},{fac:f((({model:t,field:e})=>[p(u,{compact:""},{default:f((()=>[p(l,{value:t.pay,"onUpdate:value":e=>t.pay=e,class:"pay-select"},{default:f((()=>[p(c,{value:"zfb"},{default:f((()=>[x])),_:1}),p(c,{value:"yl"},{default:f((()=>[v])),_:1})])),_:2},1032,["value","onUpdate:value"]),p(m,{class:"pay-input",value:t[e],"onUpdate:value":a=>t[e]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),p(R),h,g,y,_,w])}));u.render=O,u.__scopeId="data-v-686dc77c";export default u;