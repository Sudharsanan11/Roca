var h=(s,o,r)=>new Promise((t,e)=>{var n=i=>{try{l(r.next(i))}catch(f){e(f)}},a=i=>{try{l(r.throw(i))}catch(f){e(f)}},l=i=>i.done?t(i.value):Promise.resolve(i.value).then(n,a);l((r=r.apply(s,o)).next())});import{c as p,r as y,a as v,b as E,d as P,_ as I,e as b,f as k,g as w,o as R,l as A,h as C,i as O,s as j,j as D,k as S,C as $,I as x,F,m as H}from"./vendor.6ac16c2b.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};N();const U="modulepreload",L={},V="/assets/roca/frontend/",d=function(o,r){return!r||r.length===0?o():Promise.all(r.map(t=>{if(t=`${V}${t}`,t in L)return;L[t]=!0;const e=t.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":U,e||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),e)return new Promise((l,i)=>{a.addEventListener("load",l),a.addEventListener("error",i)})})).then(()=>o())},g=p({url:"frappe.auth.get_logged_user",cache:"User",onError(s){s&&s.exc_type==="AuthenticationError"&&u.push({name:"LoginPage"})}});function _(){let o=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return o==="Guest"&&(o=null),o}const m=y({login:p({url:"login",makeParams({email:s,password:o}){return{usr:s,pwd:o}},onSuccess(s){g.reload(),m.user=_(),m.login.reset(),u.replace(s.default_route||"/")}}),logout:p({url:"logout",onSuccess(){g.reset(),m.user=_(),u.replace({name:"Login"})}}),user:_(),isLoggedIn:v(()=>!!m.user)}),q=[{path:"/",name:"Home",component:()=>d(()=>import("./Home.83330564.js"),["assets/Home.83330564.js","assets/Home.12756aff.css","assets/vendor.6ac16c2b.js","assets/vendor.1875b906.css"])},{path:"/caseDetails/:name",name:"CaseDetails",component:()=>d(()=>import("./caseDetails.6394ec57.js"),["assets/caseDetails.6394ec57.js","assets/vendor.6ac16c2b.js","assets/vendor.1875b906.css"]),props:!0},{name:"Login",path:"/account/login",component:()=>d(()=>import("./Login.1427412b.js"),["assets/Login.1427412b.js","assets/vendor.6ac16c2b.js","assets/vendor.1875b906.css"])}];let u=E({history:P("/frontend"),routes:q});u.beforeEach((s,o,r)=>h(void 0,null,function*(){let t=m.isLoggedIn;try{yield g.promise}catch(e){t=!1}s.name==="Login"&&t?r({name:"Home"}):s.name!=="Login"&&!t?r({name:"Login"}):r()}));const B={};function T(s,o){const r=w("router-view");return R(),b("div",null,[k(r)])}var W=I(B,[["render",T]]);A.add(C);let c=O(W);j("resourceFetcher",H);c.use(u);c.use(D);c.component("Button",S);c.component("Card",$);c.component("Input",x);c.component("font-awesome-icon",F);c.use(u);c.mount("#app");export{m as s};