import{s as _,b as s,t as b,_ as f}from"./@varlet-7ae03b61.js";import{r as g}from"./request-a0f91418.js";import{u as h}from"./vue-router-bac0c6f6.js";import{q as v,h as x,r as y,M as V,s as a,I as l,R as k,S as w,J as I,z as C,Q as S}from"./@vue-64dd07d0.js";import{a as L}from"./index-87596f9d.js";import"./decimal.js-d133ee8e.js";import"./dayjs-ee28432e.js";import"./@popperjs-974c24ae.js";import"./axios-aba6f0e0.js";import"./pinia-2579c363.js";import"./vue-demi-71ba0ef2.js";import"./amfe-flexible-ec0a06bf.js";import"./highlight.js-9e946018.js";const z=t=>g.post("/v1_0/authorizations",t),B=t=>(k("data-v-66b84baa"),t=t(),w(),t),N={id:"login-page"},q=B(()=>I("div",{id:"title"},"蓝客资讯",-1)),R=v({__name:"Login",setup(t){const i=x(!1),m=h(),o=y({code:"246810",mobile:"13888888888"});async function c(){if(o.mobile.length!=11&&!+o.mobile){s.warning({content:"手机号格式错误!",duration:1e3});return}o.code!=="246810"&&s.warning({content:"验证码必须为246810!",duration:1e3});try{const{data:e}=await z(o);localStorage.setItem("token",e==null?void 0:e.token),localStorage.setItem("refresh_token",e==null?void 0:e.refresh_token),i.value=!0,s.success({content:"登录成功!",duration:1e3,onClose:()=>m.push("/home/user")})}catch{}}return(e,n)=>{const p=b,d=f,u=_;return C(),V("div",N,[q,a(u,{style:{width:"100%",padding:"0 20px","box-sizing":"border-box"}},{default:l(()=>[a(p,{placeholder:"请输入手机号",modelValue:o.mobile,"onUpdate:modelValue":n[0]||(n[0]=r=>o.mobile=r)},null,8,["modelValue"]),a(p,{type:"password",placeholder:"请输入密码",modelValue:o.code,"onUpdate:modelValue":n[1]||(n[1]=r=>o.code=r)},null,8,["modelValue"]),a(d,{disabled:i.value,onClick:c,size:"large",style:{width:"100%","margin-top":"20px"},type:"primary"},{default:l(()=>[S("登录")]),_:1},8,["disabled"])]),_:1})])}}});const O=L(R,[["__scopeId","data-v-66b84baa"]]);export{O as default};
