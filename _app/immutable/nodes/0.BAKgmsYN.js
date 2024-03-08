import{s as be,e as j,a as U,t as Ze,c as I,b as S,f as p,g as W,d as Re,u as b,i as q,h as k,P as ee,Q as Le,j as Pe,n as de,R as Fe,S as R,T as ne,D as Ke,U as De,V as Qe,W as Xe,X as Ge,Y as Je,Z as je,_ as $e,o as Ie,$ as et,a0 as tt,a1 as ae,a2 as lt,a3 as nt,a4 as st,a5 as rt,a6 as Oe,r as at,k as ot,q as it,a7 as ct,B as se,x as Se,a8 as ft}from"../chunks/scheduler.DX4UjN3w.js";import{S as we,i as ye,b as oe,d as _e,m as ie,t as M,c as te,a as D,e as ce,g as le,f as A}from"../chunks/index.BfYIVa29.js";import{c as N,g as pe,e as he,_ as ut,a as Ve,m as dt}from"../chunks/lodash.BrGDD5Vd.js";import{b as ht}from"../chunks/paths.DXqb7QiT.js";const mt=!0,_t="always",Ht=Object.freeze(Object.defineProperty({__proto__:null,prerender:mt,trailingSlash:_t},Symbol.toStringTag,{value:"Module"}));function vt(n){let e,t,s,l,c,o,a,m,h,u;return{c(){e=j("a"),t=j("div"),l=U(),c=j("div"),o=Ze(n[0]),this.h()},l(v){e=I(v,"A",{href:!0,class:!0,rel:!0});var r=S(e);t=I(r,"DIV",{class:!0}),S(t).forEach(p),l=W(r),c=I(r,"DIV",{class:!0});var d=S(c);o=Re(d,n[0]),d.forEach(p),r.forEach(p),this.h()},h(){b(t,"class",s=N("-z-1 absolute top-0 left-0 right-0 bottom-0 bg-white transition-transform duration-200 ease-linear",n[3]?"origin-left":"scale-x-0 origin-right")),b(c,"class",N("f-text-14-16 font-bold uppercase")),b(e,"href",n[1]),b(e,"class",a=N("relative flex p-1.5 transition duration-200 ease-linear border-transparent overflow-hidden",n[3]&&"text-black",n[3]?"bg-white border-white":"hover:bg-black/25 text-white",n[5].class)),b(e,"rel",m=n[2]?"external":"")},m(v,r){q(v,e,r),k(e,t),k(e,l),k(e,c),k(c,o),h||(u=ee(e,"click",Le(n[4])),h=!0)},p(v,[r]){r&8&&s!==(s=N("-z-1 absolute top-0 left-0 right-0 bottom-0 bg-white transition-transform duration-200 ease-linear",v[3]?"origin-left":"scale-x-0 origin-right"))&&b(t,"class",s),r&1&&Pe(o,v[0]),r&2&&b(e,"href",v[1]),r&40&&a!==(a=N("relative flex p-1.5 transition duration-200 ease-linear border-transparent overflow-hidden",v[3]&&"text-black",v[3]?"bg-white border-white":"hover:bg-black/25 text-white",v[5].class))&&b(e,"class",a),r&4&&m!==(m=v[2]?"external":"")&&b(e,"rel",m)},i:de,o:de,d(v){v&&p(e),h=!1,u()}}}function gt(n,e,t){let{label:s}=e,{href:l}=e,{external:c}=e;const o=Fe();let a=!1;function m(){a||(t(3,a=!0),o("click"),setTimeout(()=>{t(3,a=!1)},300))}return n.$$set=h=>{t(5,e=R(R({},e),ne(h))),"label"in h&&t(0,s=h.label),"href"in h&&t(1,l=h.href),"external"in h&&t(2,c=h.external)},e=ne(e),[s,l,c,a,m,e]}class Ue extends we{constructor(e){super(),ye(this,e,gt,vt,be,{label:0,href:1,external:2})}}function pt(n){const e=n-1;return e*e*e+1}function me(n,{delay:e=0,duration:t=400,easing:s=Ke}={}){const l=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:c=>`opacity: ${c*l}`}}function F(n,{delay:e=0,duration:t=400,easing:s=pt,x:l=0,y:c=0,opacity:o=0}={}){const a=getComputedStyle(n),m=+a.opacity,h=a.transform==="none"?"":a.transform,u=m*(1-o),[v,r]=De(l),[d,f]=De(c);return{delay:e,duration:t,easing:s,css:(g,C)=>`
			transform: ${h} translate(${(1-g)*v}${r}, ${(1-g)*d}${f});
			opacity: ${m-u*C}`}}function bt(n){let e,t,s='<path d="M33.42 314.93h.31l14.3-56.57h19.33v76.27H52.7v-48.04l-.32-.05-13.77 48.09h-9.9L15.03 286.9l-.31.06v47.67H0v-76.27h19.22zm99.53-7.75c0 8.97-2.53 15.97-7.59 21.01-5.07 5.03-11.81 7.54-20.22 7.54s-15.14-2.52-20.17-7.54c-5.03-5.03-7.54-12.03-7.54-21.01v-21.27c0-8.94 2.51-15.95 7.52-21.04 5.01-5.08 11.73-7.62 20.14-7.62s15.17 2.54 20.25 7.62c5.08 5.09 7.62 12.1 7.62 21.04v21.27Zm-14.72-21.43c0-5.55-1.12-9.74-3.38-12.57s-5.51-4.24-9.77-4.24-7.52 1.41-9.69 4.21c-2.17 2.81-3.25 7.01-3.25 12.6v21.43c0 5.65 1.09 9.9 3.27 12.73s5.42 4.25 9.72 4.25 7.55-1.42 9.77-4.25 3.33-7.08 3.33-12.73zm39.81 37.35h28.45v11.53h-43.22v-76.27h14.77zm88.01-15.92c0 8.97-2.53 15.97-7.59 21.01-5.06 5.03-11.81 7.54-20.22 7.54s-15.14-2.52-20.17-7.54c-5.03-5.03-7.54-12.03-7.54-21.01v-21.27c0-8.94 2.5-15.95 7.52-21.04 5.01-5.08 11.72-7.62 20.14-7.62s15.16 2.54 20.25 7.62c5.08 5.09 7.62 12.1 7.62 21.04v21.27Zm-14.72-21.43c0-5.55-1.13-9.74-3.38-12.57s-5.51-4.24-9.77-4.24-7.52 1.41-9.69 4.21c-2.17 2.81-3.25 7.01-3.25 12.6v21.43c0 5.65 1.09 9.9 3.27 12.73s5.42 4.25 9.72 4.25 7.55-1.42 9.77-4.25c2.21-2.83 3.32-7.08 3.32-12.73v-21.43Zm25.04 48.87v-76.27h23.52c7.96 0 14.54 2.98 19.74 8.93s7.81 13.59 7.81 22.92v12.62c0 9.36-2.61 17-7.81 22.92-5.2 5.93-11.78 8.88-19.74 8.88zm14.77-64.69v53.17h8.75c3.8 0 6.87-1.88 9.22-5.66 2.34-3.77 3.51-8.64 3.51-14.62v-12.73c0-5.9-1.17-10.74-3.51-14.51s-5.42-5.66-9.22-5.66h-8.75Zm47.51-11.57h14.72v76.27h-14.72zm60.97 56.47c0-3.04-.78-5.44-2.33-7.21-1.55-1.76-4.34-3.48-8.36-5.15-7.82-2.76-13.7-5.88-17.65-9.38-3.94-3.49-5.92-8.38-5.92-14.67s2.25-11.34 6.76-15.27c4.5-3.93 10.25-5.89 17.23-5.89 7.41 0 13.36 2.1 17.87 6.28 4.5 4.19 6.68 9.81 6.55 16.87l-.11.32h-14.35c0-3.95-.89-6.94-2.65-8.99-1.76-2.04-4.28-3.07-7.57-3.07-2.83 0-5.03.94-6.6 2.8-1.58 1.87-2.36 4.2-2.36 7q0 3.87 2.67 6.39c1.78 1.68 4.84 3.51 9.17 5.51q11.04 3.66 16.74 9.27c3.78 3.73 5.68 8.76 5.68 15.08s-2.21 11.67-6.65 15.4c-4.44 3.74-10.33 5.61-17.66 5.61s-13.41-2.02-18.54-6.05q-7.71-6.045-7.44-18.42l.11-.31h14.4c0 4.78.97 8.22 2.9 10.32 1.94 2.09 4.8 3.14 8.56 3.14 3.18 0 5.57-.88 7.15-2.62 1.59-1.75 2.38-4.07 2.38-6.97m70.27-44.89h-17.91v64.69h-14.83v-64.69h-17.44v-11.57h50.18zM214.6 49.38l-72.64 117.55H89.42L192.6 0c6.39 13.66 16.1 35.84 22 49.38m74.4 4.71-93.02 147.83-22.15-38.98 95.59-151.9c5.27 10.92 14.4 31.35 19.58 43.05m58.66 112.9h-48.34l-25.23-53.54 27.8-37.06z" style="fill:currentColor;stroke-width:0"/>',l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 449.87 361.28"},n[0]],c={};for(let o=0;o<l.length;o+=1)c=R(c,l[o]);return{c(){e=Qe("svg"),t=new Xe(!0),this.h()},l(o){e=Ge(o,"svg",{xmlns:!0,viewBox:!0});var a=S(e);t=Je(a,!0),a.forEach(p),this.h()},h(){t.a=null,je(e,c)},m(o,a){q(o,e,a),t.m(s,e)},p(o,[a]){je(e,c=pe(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 449.87 361.28"},a&1&&o[0]]))},i:de,o:de,d(o){o&&p(e)}}}function wt(n,e,t){return n.$$set=s=>{t(0,e=R(R({},e),ne(s)))},e=ne(e),[e]}class yt extends we{constructor(e){super(),ye(this,e,wt,bt,be,{})}}const{document:Ce,window:He}=ct;function Me(n,e,t){const s=n.slice();s[25]=e[t][0],s[26]=e[t][1];const l=We(s[26]);return s[27]=l.href,s[28]=l.external,s}function Te(n,e,t){const s=n.slice();s[25]=e[t][0],s[26]=e[t][1];const l=We(s[26]);return s[27]=l.href,s[28]=l.external,s}function kt(n){let e,t,s;return{c(){e=j("div"),this.h()},l(l){e=I(l,"DIV",{class:!0}),S(e).forEach(p),this.h()},h(){b(e,"class","i-mdi-close svelte-jzn53g")},m(l,c){q(l,e,c),s=!0},i(l){s||(l&&se(()=>{s&&(t||(t=A(e,F,{duration:250,y:-4},!0)),t.run(1))}),s=!0)},o(l){l&&(t||(t=A(e,F,{duration:250,y:-4},!1)),t.run(0)),s=!1},d(l){l&&p(e),l&&t&&t.end()}}}function zt(n){let e,t,s;return{c(){e=j("div"),this.h()},l(l){e=I(l,"DIV",{class:!0}),S(e).forEach(p),this.h()},h(){b(e,"class","i-mdi-menu svelte-jzn53g")},m(l,c){q(l,e,c),s=!0},i(l){s||(l&&se(()=>{s&&(t||(t=A(e,F,{duration:250,y:4},!0)),t.run(1))}),s=!0)},o(l){l&&(t||(t=A(e,F,{duration:250,y:4},!1)),t.run(0)),s=!1},d(l){l&&p(e),l&&t&&t.end()}}}function Be(n){let e,t;function s(){return n[16](n[27],n[28])}return e=new Ue({props:{label:n[25],href:n[27],external:n[28]}}),e.$on("click",s),{c(){oe(e.$$.fragment)},l(l){_e(e.$$.fragment,l)},m(l,c){ie(e,l,c),t=!0},p(l,c){n=l},i(l){t||(D(e.$$.fragment,l),t=!0)},o(l){M(e.$$.fragment,l),t=!1},d(l){ce(e,l)}}}function Ne(n){let e,t,s,l,c,o,a,m,h=he(n[4]),u=[];for(let r=0;r<h.length;r+=1)u[r]=qe(Me(n,h,r));const v=r=>M(u[r],1,1,()=>{u[r]=null});return{c(){e=j("div"),s=U(),l=j("nav");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){e=I(r,"DIV",{class:!0}),S(e).forEach(p),s=W(r),l=I(r,"NAV",{class:!0});var d=S(l);for(let f=0;f<u.length;f+=1)u[f].l(d);d.forEach(p),this.h()},h(){b(e,"class","z-50 fixed bg-black svelte-jzn53g"),b(l,"class","z-55 fixed app-header-height-[top-&] left-0 right-0 bg-gray-dark/80 backdrop-blur px-4 py-8 flex flex-col gap-y-1.5 svelte-jzn53g")},m(r,d){q(r,e,d),q(r,s,d),q(r,l,d);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(l,null);o=!0,a||(m=ee(e,"click",n[8]),a=!0)},p(r,d){if(d[0]&48){h=he(r[4]);let f;for(f=0;f<h.length;f+=1){const g=Me(r,h,f);u[f]?(u[f].p(g,d),D(u[f],1)):(u[f]=qe(g),u[f].c(),D(u[f],1),u[f].m(l,null))}for(le(),f=h.length;f<u.length;f+=1)v(f);te()}},i(r){if(!o){r&&se(()=>{o&&(t||(t=A(e,me,{duration:200},!0)),t.run(1))});for(let d=0;d<h.length;d+=1)D(u[d]);r&&se(()=>{o&&(c||(c=A(l,F,{duration:200,y:-16},!0)),c.run(1))}),o=!0}},o(r){r&&(t||(t=A(e,me,{duration:200},!1)),t.run(0)),u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)M(u[d]);r&&(c||(c=A(l,F,{duration:200,y:-16},!1)),c.run(0)),o=!1},d(r){r&&(p(e),p(s),p(l)),r&&t&&t.end(),Oe(u,r),r&&c&&c.end(),a=!1,m()}}}function qe(n){let e,t;function s(){return n[18](n[27],n[28])}return e=new Ue({props:{label:n[25],href:n[27],external:n[28]}}),e.$on("click",s),{c(){oe(e.$$.fragment)},l(l){_e(e.$$.fragment,l)},m(l,c){ie(e,l,c),t=!0},p(l,c){n=l},i(l){t||(D(e.$$.fragment,l),t=!0)},o(l){M(e.$$.fragment,l),t=!1},d(l){ce(e,l)}}}function Ae(n){let e,t,s,l,c,o,a,m,h;const u=[n[3].props];var v=n[3].component;function r(d,f){let g={};for(let C=0;C<u.length;C+=1)g=R(g,u[C]);return f!==void 0&&f[0]&8&&(g=R(g,pe(u,[Ve(d[3].props)]))),{props:g}}return v&&(a=Se(v,r(n))),{c(){e=j("div"),t=j("div"),l=U(),c=j("div"),o=j("div"),a&&oe(a.$$.fragment),this.h()},l(d){e=I(d,"DIV",{class:!0});var f=S(e);t=I(f,"DIV",{class:!0}),S(t).forEach(p),l=W(f),c=I(f,"DIV",{class:!0});var g=S(c);o=I(g,"DIV",{class:!0});var C=S(o);a&&_e(a.$$.fragment,C),C.forEach(p),g.forEach(p),f.forEach(p),this.h()},h(){b(t,"class","absolute bottom-0 left-0 right-0 top-0 bg-black/75"),b(o,"class","flex max-w-full flex-col items-center bg-gray-dark shadow"),b(c,"class","z-105 flex min-h-full max-w-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden py-10"),b(e,"class","z-100 fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center")},m(d,f){q(d,e,f),k(e,t),k(e,l),k(e,c),k(c,o),a&&ie(a,o,null),h=!0},p(d,f){if(f[0]&8&&v!==(v=d[3].component)){if(a){le();const g=a;M(g.$$.fragment,1,0,()=>{ce(g,1)}),te()}v?(a=Se(v,r(d,f)),oe(a.$$.fragment),D(a.$$.fragment,1),ie(a,o,null)):a=null}else if(v){const g=f[0]&8?pe(u,[Ve(d[3].props)]):{};a.$set(g)}},i(d){h||(se(()=>{h&&(s||(s=A(t,me,{duration:400},!0)),s.run(1))}),a&&D(a.$$.fragment,d),se(()=>{h&&(m||(m=A(o,F,{duration:200,y:-16},!0)),m.run(1))}),h=!0)},o(d){s||(s=A(t,me,{duration:400},!1)),s.run(0),a&&M(a.$$.fragment,d),m||(m=A(o,F,{duration:200,y:-16},!1)),m.run(0),h=!1},d(d){d&&p(e),d&&s&&s.end(),a&&ce(a),d&&m&&m.end()}}}function xt(n){let e,t,s,l,c,o,a,m,h,u,v,r,d,f,g,C,H,fe=`<div class="select-none font-bold mt-2px text-11px lg:text-13px lg:mt-3px xl:text-14px xl:mt-4px line-height-none svelte-jzn53g">ВІДДІЛ ОПЕРАЦІЙ З НЕРУХОМІСТЮ</div> <h1 class="${N("font-bold mt-2px text-center text-29px lg:text-34px lg:mt-3px xl:mt-4px xl:text-37px line-height-none")} svelte-jzn53g">067 787 94 34</h1>`,Q,ue,re,X,G,J,P,L,_,V;const Y=[zt,kt],Z=[];function $(i,w){return i[0]?1:0}m=$(n),h=Z[m]=Y[m](n),r=new yt({props:{class:"h-full w-auto text-white"}});let K=he(n[4]),y=[];for(let i=0;i<K.length;i+=1)y[i]=Be(Te(n,K,i));const Ye=i=>M(y[i],1,1,()=>{y[i]=null});let z=n[0]&&Ne(n);const ve=n[15].default,B=$e(ve,n,n[14],null);let x=n[3]&&Ae(n);return{c(){e=U(),t=j("div"),s=j("header"),l=j("div"),c=U(),o=j("div"),a=j("button"),h.c(),u=U(),v=j("a"),oe(r.$$.fragment),d=U(),f=j("div"),g=j("nav");for(let i=0;i<y.length;i+=1)y[i].c();C=U(),H=j("div"),H.innerHTML=fe,re=U(),z&&z.c(),X=U(),B&&B.c(),J=U(),x&&x.c(),P=Ie(),this.h()},l(i){et("svelte-12zejyu",Ce.head).forEach(p),e=W(i),t=I(i,"DIV",{class:!0,"data-nav-dropdown-show":!0});var T=S(t);s=I(T,"HEADER",{class:!0});var E=S(s);l=I(E,"DIV",{class:!0}),S(l).forEach(p),c=W(E),o=I(E,"DIV",{class:!0});var O=S(o);a=I(O,"BUTTON",{type:!0,class:!0});var ke=S(a);h.l(ke),ke.forEach(p),u=W(O),v=I(O,"A",{href:!0,class:!0});var ze=S(v);_e(r.$$.fragment,ze),ze.forEach(p),d=W(O),f=I(O,"DIV",{class:!0});var xe=S(f);g=I(xe,"NAV",{class:!0});var Ee=S(g);for(let ge=0;ge<y.length;ge+=1)y[ge].l(Ee);Ee.forEach(p),xe.forEach(p),C=W(O),H=I(O,"DIV",{class:!0,"data-svelte-h":!0}),tt(H)!=="svelte-1cjzah4"&&(H.innerHTML=fe),O.forEach(p),E.forEach(p),re=W(T),z&&z.l(T),X=W(T),B&&B.l(T),T.forEach(p),J=W(i),x&&x.l(i),P=Ie(),this.h()},h(){Ce.title="ЖК «Фаворит PREMIUM»",b(l,"class",ae(N("-z-10 absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-primary to-secondary"))+" svelte-jzn53g"),b(a,"type","button"),b(a,"class",ae(N("relative mr-3.5 inline-flex items-center justify-center rounded bg-black bg-opacity-10 size-8 text-1.4rem text-white hover:bg-opacity-15 transition-colors ease-linear duration-100 lg:hidden [&>*]:absolute [&>*]:top-1/2 [&>*]:left-1/2 [&>*]:-translate-x-1/2 [&>*]:-translate-y-1/2",Et))+" svelte-jzn53g"),b(v,"href",ht+"/#main"),b(v,"class",N("h-full py-2.25 lg:py-3 xl:py-4 relative transition duration-200")),b(g,"class","hidden size-full lg:flex lg:justify-center f-gap-0-12"),b(f,"class","flex-1"),b(H,"class",ae(N("header-tel flex flex-col items-stretch text-white"))+" svelte-jzn53g"),b(o,"class","flex size-full items-center justify-start px-4 md:px-6 xl:px-8 svelte-jzn53g"),b(s,"class",Q=ae(N("z-60 sticky left-0 top-0 right-0 app-header-height-[h-&] shadow shadow-black/10 transition-transform,opacity duration-200",n[2]?"":"-translate-y-full"))+" svelte-jzn53g"),b(t,"class",G="z-0 group/app unrevealed w-full font-sans flex flex-col "+n[11].class+" svelte-jzn53g"),b(t,"data-nav-dropdown-show",n[0])},m(i,w){q(i,e,w),q(i,t,w),k(t,s),k(s,l),k(s,c),k(s,o),k(o,a),Z[m].m(a,null),k(o,u),k(o,v),ie(r,v,null),k(o,d),k(o,f),k(f,g);for(let T=0;T<y.length;T+=1)y[T]&&y[T].m(g,null);k(o,C),k(o,H),ue=lt.observe(s,n[17].bind(s)),k(t,re),z&&z.m(t,null),k(t,X),B&&B.m(t,null),q(i,J,w),x&&x.m(i,w),q(i,P,w),L=!0,_||(V=[ee(He,"scroll",n[6]),ee(He,"keydown",n[10]),ee(a,"click",n[7]),ee(v,"click",Le(n[9]))],_=!0)},p(i,w){let T=m;if(m=$(i),m!==T&&(le(),M(Z[T],1,1,()=>{Z[T]=null}),te(),h=Z[m],h||(h=Z[m]=Y[m](i),h.c()),D(h,1),h.m(a,null)),w[0]&48){K=he(i[4]);let E;for(E=0;E<K.length;E+=1){const O=Te(i,K,E);y[E]?(y[E].p(O,w),D(y[E],1)):(y[E]=Be(O),y[E].c(),D(y[E],1),y[E].m(g,null))}for(le(),E=K.length;E<y.length;E+=1)Ye(E);te()}(!L||w[0]&4&&Q!==(Q=ae(N("z-60 sticky left-0 top-0 right-0 app-header-height-[h-&] shadow shadow-black/10 transition-transform,opacity duration-200",i[2]?"":"-translate-y-full"))+" svelte-jzn53g"))&&b(s,"class",Q),i[0]?z?(z.p(i,w),w[0]&1&&D(z,1)):(z=Ne(i),z.c(),D(z,1),z.m(t,X)):z&&(le(),M(z,1,1,()=>{z=null}),te()),B&&B.p&&(!L||w[0]&16384)&&nt(B,ve,i,i[14],L?rt(ve,i[14],w,null):st(i[14]),null),(!L||w[0]&2048&&G!==(G="z-0 group/app unrevealed w-full font-sans flex flex-col "+i[11].class+" svelte-jzn53g"))&&b(t,"class",G),(!L||w[0]&1)&&b(t,"data-nav-dropdown-show",i[0]),i[3]?x?(x.p(i,w),w[0]&8&&D(x,1)):(x=Ae(i),x.c(),D(x,1),x.m(P.parentNode,P)):x&&(le(),M(x,1,1,()=>{x=null}),te())},i(i){if(!L){D(h),D(r.$$.fragment,i);for(let w=0;w<K.length;w+=1)D(y[w]);D(z),D(B,i),D(x),L=!0}},o(i){M(h),M(r.$$.fragment,i),y=y.filter(Boolean);for(let w=0;w<y.length;w+=1)M(y[w]);M(z),M(B,i),M(x),L=!1},d(i){i&&(p(e),p(t),p(J),p(P)),Z[m].d(),ce(r),Oe(y,i),ue(),z&&z.d(),B&&B.d(i),x&&x.d(i),_=!1,at(V)}}}const Et="drop-shadow";function We(n){return n==="news"?{href:"https://molodist.life/news",external:!0}:{href:`#${n}`,external:!1}}function Dt(){const n=document.createElement("script");n.type="text/javascript",n.src="//widgets.binotel.com/getcall/widgets/abkoftzha7hv5ybuzjou.js",document.documentElement.appendChild(n)}function jt(n,e,t){let s;ot(n,dt,_=>t(3,s=_));let{$$slots:l={},$$scope:c}=e,o=[],a=0,m=0;function h(){m+=1,setTimeout(()=>{m-=1},500)}let{showNavDropdown:u=!1}=e;const v=[["Про комплекс","about"],["Інфраструктура","infrastructure"],["Квартири","apartments"],["Галерея","gallery"],["Новини","news"],["Контакти","contacts"]];let r;function d(){r==null||r.disconnect();const _=document.documentElement.querySelectorAll(".unrevealed");if(_.length===0)return;const V=new IntersectionObserver((Y,Z)=>{for(const $ of Y)$.isIntersecting&&($.target.classList.remove("unrevealed"),Z.unobserve($.target))},{threshold:.25});_.forEach(Y=>{V.observe(Y)}),r=V}it(()=>{d(),Dt()});function f(_,V){if(setTimeout(()=>{t(0,u=!1)},200),V)setTimeout(()=>{window.open(_)},200);else if(_.startsWith("#")){const Y=document.documentElement.querySelector(_);if(!Y)return;h(),window.requestAnimationFrame(()=>{Y.scrollIntoView()})}}let g=!0,C,H;function fe(){const _=window.scrollY;if(_>=window.outerHeight-a&&m===0&&!u&&C!==void 0&&H!==void 0){const V=_-C;V>0?(H=Math.max(0,H-V),H===0&&g&&t(2,g=!1)):(H=Math.min(a,H-V),H===a&&!g&&t(2,g=!0))}else g||t(2,g=!0);C=_}const Q=ut.throttle(fe,200);function ue(){t(0,u=!u)}function re(){t(0,u=!1)}function X(){const _=document.documentElement.querySelector("#main");_&&(h(),window.requestAnimationFrame(()=>{_.scrollIntoView()}),t(0,u=!1))}function G(_){_.key==="Escape"&&t(0,u=!1)}const J=(_,V)=>f(_,V);function P(){var _;o=(_=ft.entries.get(this))==null?void 0:_.borderBoxSize,t(1,o)}const L=(_,V)=>f(_,V);return n.$$set=_=>{t(11,e=R(R({},e),ne(_))),"showNavDropdown"in _&&t(0,u=_.showNavDropdown),"$$scope"in _&&t(14,c=_.$$scope)},n.$$.update=()=>{var _;if(n.$$.dirty[0]&8194){const V=((_=o.at(0))==null?void 0:_.blockSize)??0;V!==a&&(t(13,a=V),H=V,t(0,u=!1))}},e=ne(e),[u,o,g,s,v,f,Q,ue,re,X,G,e,h,a,c,l,J,P,L]}class Mt extends we{constructor(e){super(),ye(this,e,jt,xt,be,{temporaryDisableHeaderCollapse:12,showNavDropdown:0},null,[-1,-1])}get temporaryDisableHeaderCollapse(){return this.$$.ctx[12]}}export{Mt as component,Ht as universal};
