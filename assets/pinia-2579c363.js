import{i as Z}from"./vue-demi-71ba0ef2.js";import{a0 as B,h as D,a1 as I,d as G,_ as J,i as k,a2 as O,a3 as $,w as A,r as T,g as tt,a4 as et,a5 as st,n as nt,Y as ot,e as ct}from"./@vue-64dd07d0.js";/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let N;const L=t=>N=t,W=Symbol();function C(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var R;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(R||(R={}));function ht(){const t=B(!0),n=t.run(()=>D({}));let s=[],e=[];const r=I({install(u){L(r),r._a=u,u.provide(W,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!Z?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return r}const Y=()=>{};function H(t,n,s,e=Y){t.push(n);const r=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&et()&&st(r),r}function g(t,...n){t.slice().forEach(s=>{s(...n)})}function x(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],r=t[s];C(r)&&C(e)&&t.hasOwnProperty(s)&&!k(e)&&!O(e)?t[s]=x(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!C(t)||!t.hasOwnProperty(rt)}const{assign:y}=Object;function at(t){return!!(k(t)&&t.effect)}function ft(t,n,s,e){const{state:r,actions:u,getters:f}=n,a=s.state.value[t];let j;function b(){a||(s.state.value[t]=r?r():{});const v=ot(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=I(ct(()=>{L(s);const _=s._s.get(t);return f[m].call(_,_)})),d),{}))}return j=q(t,b,n,s,e,!0),j}function q(t,n,s={},e,r,u){let f;const a=y({actions:{}},s),j={deep:!0};let b,v,d=I([]),m=I([]),_;const p=e.state.value[t];!u&&!p&&(e.state.value[t]={}),D({});let F;function V(c){let o;b=v=!1,typeof c=="function"?(c(e.state.value[t]),o={type:R.patchFunction,storeId:t,events:_}):(x(e.state.value[t],c),o={type:R.patchObject,payload:c,storeId:t,events:_});const h=F=Symbol();nt().then(()=>{F===h&&(b=!0)}),v=!0,g(d,o,e.state.value[t])}const z=u?function(){const{state:o}=s,h=o?o():{};this.$patch(S=>{y(S,h)})}:Y;function K(){f.stop(),d=[],m=[],e._s.delete(t)}function M(c,o){return function(){L(e);const h=Array.from(arguments),S=[],w=[];function U(i){S.push(i)}function X(i){w.push(i)}g(m,{args:h,name:c,store:l,after:U,onError:X});let E;try{E=o.apply(this&&this.$id===t?this:l,h)}catch(i){throw g(w,i),i}return E instanceof Promise?E.then(i=>(g(S,i),i)).catch(i=>(g(w,i),Promise.reject(i))):(g(S,E),E)}}const Q={_p:e,$id:t,$onAction:H.bind(null,m),$patch:V,$reset:z,$subscribe(c,o={}){const h=H(d,c,o.detached,()=>S()),S=f.run(()=>A(()=>e.state.value[t],w=>{(o.flush==="sync"?v:b)&&c({storeId:t,type:R.direct,events:_},w)},y({},j,o)));return h},$dispose:K},l=T(Q);e._s.set(t,l);const P=e._e.run(()=>(f=B(),f.run(()=>n())));for(const c in P){const o=P[c];if(k(o)&&!at(o)||O(o))u||(p&&ut(o)&&(k(o)?o.value=p[c]:x(o,p[c])),e.state.value[t][c]=o);else if(typeof o=="function"){const h=M(c,o);P[c]=h,a.actions[c]=o}}return y(l,P),y(J(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{V(o=>{y(o,c)})}}),e._p.forEach(c=>{y(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),p&&u&&s.hydrate&&s.hydrate(l.$state,p),b=!0,v=!0,l}function bt(t,n,s){let e,r;const u=typeof n=="function";typeof t=="string"?(e=t,r=u?s:n):(r=t,e=t.id);function f(a,j){const b=tt();return a=a||b&&G(W,null),a&&L(a),a=N,a._s.has(e)||(u?q(e,n,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}function yt(t){{t=J(t);const n={};for(const s in t){const e=t[s];(k(e)||O(e))&&(n[s]=$(t,s))}return n}}export{ht as c,bt as d,yt as s};
