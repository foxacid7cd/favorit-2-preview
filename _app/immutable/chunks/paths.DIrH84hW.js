import{n as l,l as m,r as v,s as k,m as x}from"./scheduler.DFsSXsxO.js";const u=[];function z(s,o){return{subscribe:A(s,o).subscribe}}function A(s,o=l){let r;const n=new Set;function c(t){if(k(s,t)&&(s=t,r)){const i=!u.length;for(const e of n)e[1](),u.push(e,s);if(i){for(let e=0;e<u.length;e+=2)u[e][0](u[e+1]);u.length=0}}}function b(t){c(t(s))}function f(t,i=l){const e=[t,i];return n.add(e),n.size===1&&(r=o(c,b)||l),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:c,update:b,subscribe:f}}function E(s,o,r){const n=!Array.isArray(s),c=n?[s]:s;if(!c.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return z(r,(f,t)=>{let i=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=o(n?e[0]:e,f,t);b?f(a):p=x(a)?a:l},q=c.map((a,_)=>m(a,w=>{e[_]=w,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){v(q),p(),i=!1}})}function S(s){return{subscribe:s.subscribe.bind(s)}}var h;const T=((h=globalThis.__sveltekit_lqo3ct)==null?void 0:h.base)??"/favorit-2-preview";var y;const j=((y=globalThis.__sveltekit_lqo3ct)==null?void 0:y.assets)??T;export{S as a,T as b,j as c,E as d,z as r,A as w};
