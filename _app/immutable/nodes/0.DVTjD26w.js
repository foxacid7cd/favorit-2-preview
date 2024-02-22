import{n as Ze,e as b,t as St,c as w,a as k,b as Ct,d,v,Y as ze,i as j,g,Z as ue,_ as gt,h as Ht,j as U,$ as At,Q as Y,W as J,E as Lt,a0 as nt,l as pt,R as bt,S as wt,T as kt,U as yt,V as Me,G as Nt,C as pe,a1 as Te,s as H,f as A,a2 as Pe,a3 as jt,a4 as Ie,a5 as Ve,a6 as Se,r as xt,k as Et,a7 as Dt,a8 as Bt,x as Re,a9 as Ue,m as qt,aa as Ot,ab as Pt,u as Rt,X as zt}from"../chunks/scheduler.MBQ6_Ibj.js";import{S as be,i as we,b as le,d as re,m as se,g as _e,t as M,c as ge,a as E,e as ae,f as Q}from"../chunks/index.p2XQIJiJ.js";import{c as de,g as Mt,S as Ut,X as Yt,s as Zt,e as Ce}from"../chunks/AppShell.svelte_svelte_type_style_lang.B-9u_7lC.js";import{b as Wt,w as Tt,r as Xt}from"../chunks/paths.C_8rMsZ4.js";const Ft=!0,Gt="always",yl=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ft,trailingSlash:Gt},Symbol.toStringTag,{value:"Module"}));function Qt(a){let e,s,t=a[2].toLocaleUpperCase()+"",l,i,r,n,o;return{c(){e=b("a"),s=b("div"),l=St(t),this.h()},l(c){e=w(c,"A",{href:!0,class:!0,rel:!0});var _=k(e);s=w(_,"DIV",{class:!0});var u=k(s);l=Ct(u,t),u.forEach(d),_.forEach(d),this.h()},h(){v(s,"class","justify-center after:content-empty after:absolute after:-left-0.1 after:rounded-full after:-right-0.1 after:origin-center after:scale-x-100 after:bg-white after:opacity-0 after:transition active:after:origin-right svelte-1e1bfo9"),v(e,"href",a[0]),v(e,"class",i=ze(de("relative flex py-2.5 font-semibold text-white transition duration-200 group",a[3]&&"click",a[4]&&"after-click",a[6].class))+" svelte-1e1bfo9"),v(e,"rel",r=a[1]?"external":"")},m(c,_){j(c,e,_),g(e,s),g(s,l),n||(o=ue(e,"click",gt(a[7])),n=!0)},p(c,[_]){_&4&&t!==(t=c[2].toLocaleUpperCase()+"")&&Ht(l,t),_&1&&v(e,"href",c[0]),_&88&&i!==(i=ze(de("relative flex py-2.5 font-semibold text-white transition duration-200 group",c[3]&&"click",c[4]&&"after-click",c[6].class))+" svelte-1e1bfo9")&&v(e,"class",i),_&2&&r!==(r=c[1]?"external":"")&&v(e,"rel",r)},i:U,o:U,d(c){c&&d(e),n=!1,o()}}}function Jt(a,e,s){let{href:t=""}=e,{isExternal:l=!1}=e,{title:i=""}=e;const r=At();let n=!1,o=!1;function c(u){n||o||!u.currentTarget||(s(3,n=!0),r("clickAnimation",!0),setTimeout(()=>{r("actionRequest",{href:t,isExternal:l})},250),setTimeout(()=>{r("clickAnimation",!1),s(3,n=!1),s(4,o=!0),setTimeout(()=>{s(4,o=!1)},500)},500))}const _=u=>c(u);return a.$$set=u=>{s(6,e=Y(Y({},e),J(u))),"href"in u&&s(0,t=u.href),"isExternal"in u&&s(1,l=u.isExternal),"title"in u&&s(2,i=u.title)},e=J(e),[t,l,i,n,o,c,e,_]}class It extends be{constructor(e){super(),we(this,e,Jt,Qt,Ze,{href:0,isExternal:1,title:2})}}function Kt(a){const e=a-1;return e*e*e+1}function He(a,{delay:e=0,duration:s=400,easing:t=Lt}={}){const l=+getComputedStyle(a).opacity;return{delay:e,duration:s,easing:t,css:i=>`opacity: ${i*l}`}}function Ae(a,{delay:e=0,duration:s=400,easing:t=Kt,x:l=0,y:i=0,opacity:r=0}={}){const n=getComputedStyle(a),o=+n.opacity,c=n.transform==="none"?"":n.transform,_=o*(1-r),[u,m]=nt(l),[f,y]=nt(i);return{delay:e,duration:s,easing:t,css:(x,V)=>`
			transform: ${c} translate(${(1-x)*u}${m}, ${(1-x)*f}${y});
			opacity: ${o-_*V}`}}function $t(a){let e,s,t='<path fill="currentColor" fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>',l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 16 16"},a[0]],i={};for(let r=0;r<l.length;r+=1)i=Y(i,l[r]);return{c(){e=bt("svg"),s=new wt(!0),this.h()},l(r){e=kt(r,"svg",{xmlns:!0,viewBox:!0});var n=k(e);s=yt(n,!0),n.forEach(d),this.h()},h(){s.a=null,Me(e,i)},m(r,n){j(r,e,n),s.m(t,e)},p(r,[n]){Me(e,i=Mt(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 16 16"},n&1&&r[0]]))},i:U,o:U,d(r){r&&d(e)}}}function el(a,e,s){return a.$$set=t=>{s(0,e=Y(Y({},e),J(t)))},e=J(e),[e]}class tl extends be{constructor(e){super(),we(this,e,el,$t,pt,{})}}function ll(a){let e,s,t='<defs><style>.b{fill:currentColor;stroke-width:0}</style></defs><path d="M33.42 314.93h.31l14.3-56.57h19.33v76.27H52.7v-48.04l-.32-.05-13.77 48.09h-9.9L15.03 286.9l-.31.06v47.67H0v-76.27h19.22zM132.95 307.18c0 8.97-2.53 15.97-7.59 21.01-5.07 5.03-11.81 7.54-20.22 7.54s-15.14-2.52-20.17-7.54c-5.03-5.03-7.54-12.03-7.54-21.01v-21.27c0-8.94 2.51-15.95 7.52-21.04 5.01-5.08 11.73-7.62 20.14-7.62s15.17 2.54 20.25 7.62c5.08 5.09 7.62 12.1 7.62 21.04v21.27Zm-14.72-21.43c0-5.55-1.12-9.74-3.38-12.57s-5.51-4.24-9.77-4.24-7.52 1.41-9.69 4.21c-2.17 2.81-3.25 7.01-3.25 12.6v21.43c0 5.65 1.09 9.9 3.27 12.73s5.42 4.25 9.72 4.25 7.55-1.42 9.77-4.25 3.33-7.08 3.33-12.73zM158.04 323.1h28.45v11.53h-43.22v-76.27h14.77zM246.05 307.18c0 8.97-2.53 15.97-7.59 21.01-5.06 5.03-11.81 7.54-20.22 7.54s-15.14-2.52-20.17-7.54c-5.03-5.03-7.54-12.03-7.54-21.01v-21.27c0-8.94 2.5-15.95 7.52-21.04 5.01-5.08 11.72-7.62 20.14-7.62s15.16 2.54 20.25 7.62c5.08 5.09 7.62 12.1 7.62 21.04v21.27Zm-14.72-21.43c0-5.55-1.13-9.74-3.38-12.57s-5.51-4.24-9.77-4.24-7.52 1.41-9.69 4.21c-2.17 2.81-3.25 7.01-3.25 12.6v21.43c0 5.65 1.09 9.9 3.27 12.73s5.42 4.25 9.72 4.25 7.55-1.42 9.77-4.25c2.21-2.83 3.32-7.08 3.32-12.73v-21.43ZM256.37 334.62v-76.27h23.52c7.96 0 14.54 2.98 19.74 8.93s7.81 13.59 7.81 22.92v12.62c0 9.36-2.61 17-7.81 22.92-5.2 5.93-11.78 8.88-19.74 8.88zm14.77-64.69v53.17h8.75c3.8 0 6.87-1.88 9.22-5.66 2.34-3.77 3.51-8.64 3.51-14.62v-12.73c0-5.9-1.17-10.74-3.51-14.51s-5.42-5.66-9.22-5.66h-8.75ZM318.65 258.36h14.72v76.27h-14.72zM379.62 314.83c0-3.04-.78-5.44-2.33-7.21-1.55-1.76-4.34-3.48-8.36-5.15-7.82-2.76-13.7-5.88-17.65-9.38-3.94-3.49-5.92-8.38-5.92-14.67s2.25-11.34 6.76-15.27c4.5-3.93 10.25-5.89 17.23-5.89 7.41 0 13.36 2.1 17.87 6.28 4.5 4.19 6.68 9.81 6.55 16.87l-.11.32h-14.35c0-3.95-.89-6.94-2.65-8.99-1.76-2.04-4.28-3.07-7.57-3.07-2.83 0-5.03.94-6.6 2.8-1.58 1.87-2.36 4.2-2.36 7q0 3.87 2.67 6.39c1.78 1.68 4.84 3.51 9.17 5.51q11.04 3.66 16.74 9.27c3.78 3.73 5.68 8.76 5.68 15.08s-2.21 11.67-6.65 15.4c-4.44 3.74-10.33 5.61-17.66 5.61s-13.41-2.02-18.54-6.05q-7.71-6.045-7.44-18.42l.11-.31h14.4c0 4.78.97 8.22 2.9 10.32 1.94 2.09 4.8 3.14 8.56 3.14 3.18 0 5.57-.88 7.15-2.62 1.59-1.75 2.38-4.07 2.38-6.97M449.87 269.93h-17.91v64.69h-14.83v-64.69h-17.44v-11.57h50.18zM214.6 49.38l-72.64 117.55H89.42L192.6 0c6.39 13.66 16.1 35.84 22 49.38M289 54.09l-93.02 147.83-22.15-38.98 95.59-151.9c5.27 10.92 14.4 31.35 19.58 43.05M347.66 166.99h-48.34l-25.23-53.54 27.8-37.06z" class="b"/>',l=[{xmlns:"http://www.w3.org/2000/svg"},{id:"a"},{viewBox:"0 0 449.87 361.28"},a[0]],i={};for(let r=0;r<l.length;r+=1)i=Y(i,l[r]);return{c(){e=bt("svg"),s=new wt(!0),this.h()},l(r){e=kt(r,"svg",{xmlns:!0,id:!0,viewBox:!0});var n=k(e);s=yt(n,!0),n.forEach(d),this.h()},h(){s.a=null,Me(e,i)},m(r,n){j(r,e,n),s.m(t,e)},p(r,[n]){Me(e,i=Mt(l,[{xmlns:"http://www.w3.org/2000/svg"},{id:"a"},{viewBox:"0 0 449.87 361.28"},n&1&&r[0]]))},i:U,o:U,d(r){r&&d(e)}}}function rl(a,e,s){return a.$$set=t=>{s(0,e=Y(Y({},e),J(t)))},e=J(e),[e]}class sl extends be{constructor(e){super(),we(this,e,rl,ll,pt,{})}}const{setTimeout:ot,window:Ye}=Dt,al=a=>({}),it=a=>({}),nl=a=>({}),ct=a=>({});function ol(a){let e,s;return e=new Yt({props:{class:"size-5"}}),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function il(a){let e,s;return e=new tl({props:{class:"size-5"}}),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function ft(a){let e,s,t,l,i,r,n,o,c;const _=a[22]["nav-vertical"],u=Te(_,a,a[21],it);return{c(){e=b("div"),t=H(),l=b("div"),i=b("nav"),u&&u.c(),this.h()},l(m){e=w(m,"DIV",{class:!0,role:!0,tabindex:!0}),k(e).forEach(d),t=A(m),l=w(m,"DIV",{class:!0});var f=k(l);i=w(f,"NAV",{class:!0});var y=k(i);u&&u.l(y),y.forEach(d),f.forEach(d),this.h()},h(){v(e,"class","fixed bottom-0 left-0 right-0 top-0 z-20 bg-black/75"),v(e,"role","button"),v(e,"tabindex","-1"),v(i,"class","overflow-y-auto overflow-x-hidden bg-gray-dark px-6 pb-0.85rem pt-4 shadow"),v(l,"class","fixed left-0 right-0 top-4.5rem z-30 lg:top-5.5rem lg:hidden xl:top-6.5rem")},m(m,f){j(m,e,f),j(m,t,f),j(m,l,f),g(l,i),u&&u.m(i,null),n=!0,o||(c=[ue(e,"click",a[1]),ue(e,"keydown",a[1])],o=!0)},p(m,f){u&&u.p&&(!n||f&2097152)&&Ie(u,_,m,m[21],n?Se(_,m[21],f,al):Ve(m[21]),it)},i(m){n||(m&&pe(()=>{n&&(s||(s=Q(e,He,{duration:50},!0)),s.run(1))}),E(u,m),pe(()=>{n&&(r||(r=Q(i,Ae,{y:-10,duration:100,delay:50},!0)),r.run(1))}),n=!0)},o(m){m&&(s||(s=Q(e,He,{duration:50},!1)),s.run(0)),M(u,m),r||(r=Q(i,Ae,{y:-10,duration:100,delay:50},!1)),r.run(0),n=!1},d(m){m&&(d(e),d(t),d(l)),m&&s&&s.end(),u&&u.d(m),m&&r&&r.end(),o=!1,xt(c)}}}function ut(a){let e,s,t,l,i,r,n,o;return{c(){e=b("div"),s=b("div"),t=H(),l=b("div"),i=b("div"),this.h()},l(c){e=w(c,"DIV",{class:!0});var _=k(e);s=w(_,"DIV",{class:!0}),k(s).forEach(d),t=A(_),l=w(_,"DIV",{class:!0});var u=k(l);i=w(u,"DIV",{class:!0}),k(i).forEach(d),u.forEach(d),_.forEach(d),this.h()},h(){v(s,"class","absolute bottom-0 left-0 right-0 top-0 bg-black/75 svelte-1v74kko"),v(i,"class","flex max-w-full flex-col items-center bg-gray-dark shadow-xl"),v(l,"class","z-80 flex min-h-full max-w-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden px-6 py-10 svelte-1v74kko"),v(e,"class",ze(de("fixed bottom-0 left-0 right-0 top-0 z-70 flex items-center justify-center"))+" svelte-1v74kko")},m(c,_){j(c,e,_),g(e,s),g(e,t),g(e,l),g(l,i),a[25](i),o=!0},p:U,i(c){o||(pe(()=>{o&&(r||(r=Q(l,Ae,{y:-10,duration:100,delay:50},!0)),r.run(1))}),c&&pe(()=>{o&&(n||(n=Q(e,He,{duration:200},!0)),n.run(1))}),o=!0)},o(c){r||(r=Q(l,Ae,{y:-10,duration:100,delay:50},!1)),r.run(0),c&&(n||(n=Q(e,He,{duration:200},!1)),n.run(0)),o=!1},d(c){c&&d(e),a[25](null),c&&r&&r.end(),c&&n&&n.end()}}}function cl(a){let e=!1,s=()=>{e=!1},t,l,i,r,n,o,c,_,u,m,f,y,x,V,B,q,S,X,P,C,he,Z,ke='<div class="select-none text-[0.71rem] font-medium xl:text-[0.85rem] svelte-1v74kko">ВІДДІЛ ОПЕРАЦІЙ З НЕРУХОМІСТЮ</div> <h1 class="-mt-[0.2rem] text-center text-3xl font-bold lg:-mt-[0.1rem] xl:mt-0 xl:text-4xl svelte-1v74kko">067 787 94 34</h1>',ye,ve,ne,W,me,F,p,z,K,We="© 2024 Інвестиційна група MOLODIST.<br/>Усі права захищено",Le,oe,Xe='<a href="https://molodist.life/privacy-policy/" class="transition hover:text-primary" rel="external">Політика конфіденційності</a>',Ne,ie,$,je,xe,Ee,ee,O,Be,Fe;pe(a[23]);const Ge=[il,ol],te=[];function Qe(h,D){return h[0]?1:0}x=Qe(a),V=te[x]=Ge[x](a),S=new sl({props:{class:"h-12 w-auto text-white lg:h-14 xl:h-16"}});const qe=a[22]["nav-horizontal"],L=Te(qe,a,a[21],ct);let T=a[0]&&ft(a);const Oe=a[22].default,N=Te(Oe,a,a[21],null);$=new Ut({});let I=a[9]&&ut(a);return{c(){l=b("div"),i=b("div"),r=b("header"),n=b("div"),o=b("div"),c=H(),_=b("div"),u=H(),m=b("div"),f=b("div"),y=b("button"),V.c(),B=H(),q=b("a"),le(S.$$.fragment),X=H(),P=b("div"),C=b("nav"),L&&L.c(),he=H(),Z=b("div"),Z.innerHTML=ke,ve=H(),T&&T.c(),ne=H(),W=b("div"),N&&N.c(),me=H(),F=b("footer"),p=b("div"),z=b("div"),K=b("div"),K.innerHTML=We,Le=H(),oe=b("div"),oe.innerHTML=Xe,Ne=H(),ie=b("div"),le($.$$.fragment),je=H(),I&&I.c(),Ee=H(),ee=b("div"),this.h()},l(h){l=w(h,"DIV",{class:!0});var D=k(l);i=w(D,"DIV",{class:!0});var R=k(i);r=w(R,"HEADER",{class:!0,"data-show":!0,"data-transparent":!0});var Je=k(r);n=w(Je,"DIV",{class:!0});var ce=k(n);o=w(ce,"DIV",{class:!0}),k(o).forEach(d),c=A(ce),_=w(ce,"DIV",{class:!0}),k(_).forEach(d),u=A(ce),m=w(ce,"DIV",{class:!0});var Ke=k(m);f=w(Ke,"DIV",{class:!0});var G=k(f);y=w(G,"BUTTON",{type:!0,class:!0});var $e=k(y);V.l($e),$e.forEach(d),B=A(G),q=w(G,"A",{href:!0,class:!0});var et=k(q);re(S.$$.fragment,et),et.forEach(d),X=A(G),P=w(G,"DIV",{class:!0});var tt=k(P);C=w(tt,"NAV",{class:!0});var lt=k(C);L&&L.l(lt),lt.forEach(d),tt.forEach(d),he=A(G),Z=w(G,"DIV",{class:!0,"data-svelte-h":!0}),Pe(Z)!=="svelte-19ouiuw"&&(Z.innerHTML=ke),G.forEach(d),Ke.forEach(d),ce.forEach(d),Je.forEach(d),ve=A(R),T&&T.l(R),ne=A(R),W=w(R,"DIV",{});var De=k(W);N&&N.l(De),me=A(De),F=w(De,"FOOTER",{class:!0});var rt=k(F);p=w(rt,"DIV",{class:!0});var st=k(p);z=w(st,"DIV",{class:!0});var fe=k(z);K=w(fe,"DIV",{"data-svelte-h":!0}),Pe(K)!=="svelte-zv4cx1"&&(K.innerHTML=We),Le=A(fe),oe=w(fe,"DIV",{"data-svelte-h":!0}),Pe(oe)!=="svelte-19eynjx"&&(oe.innerHTML=Xe),Ne=A(fe),ie=w(fe,"DIV",{class:!0});var at=k(ie);re($.$$.fragment,at),at.forEach(d),fe.forEach(d),st.forEach(d),rt.forEach(d),De.forEach(d),R.forEach(d),je=A(D),I&&I.l(D),D.forEach(d),Ee=A(h),ee=w(h,"DIV",{}),k(ee).forEach(d),this.h()},h(){v(o,"class","absolute bottom-0 left-0 right-0 top-0 bg-black/15 svelte-1v74kko"),v(_,"class","header-background absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-primary to-secondary shadow transition group-[&[data-transparent=true]]/header:opacity-0 svelte-1v74kko"),v(y,"type","button"),v(y,"class","relative -ms-2 inline-flex items-center justify-center rounded-md bg-black bg-opacity-5 p-1.5 text-white hover:text-white/80 active:bg-black active:bg-opacity-10 lg:hidden"),v(q,"href",Wt+"/#main"),v(q,"class","flex items-center text-sm xl:text-base"),v(C,"class","hidden size-full lg:block"),v(P,"class","flex-1"),v(Z,"class","header-tel -me-2 mt-[0.2rem] flex flex-col items-stretch text-white lg:mt-[0.1rem] xl:me-0 xl:mt-0 svelte-1v74kko"),v(f,"class","flex h-full w-full items-center justify-start gap-3 xl:gap-6"),v(m,"class","relative flex size-full px-6 xl:px-10 svelte-1v74kko"),v(n,"class",ze(de("relative flex h-[4.5rem] lg:h-[5.5rem] xl:h-[6.5rem] transition duration-800 delay-100 group-unrevealed/header:opacity-0 group-unrevealed/header:-translate-y-1"))+" svelte-1v74kko"),v(r,"class","fixed left-0 top-0 z-50 h-fit w-full group/header unrevealed transition [&[data-show=false]]:-translate-y-1/2 [&[data-show=false]]:opacity-0"),v(r,"data-show",a[4]),v(r,"data-transparent",a[5]),v(ie,"class","lg:-translate-y-1.5"),v(z,"class","flex w-full flex-col items-start justify-between gap-y-8 text-white lg:w-4/5 lg:flex-row"),v(p,"class","container px-6 pb-12 pt-16 sm:px-16"),v(F,"class","h-fit w-full"),v(i,"class","relative flex h-full w-full flex-col justify-center svelte-1v74kko"),v(l,"class",xe="relative flex size-full flex-col "+a[13].class+" svelte-1v74kko"),ee.hidden=!0},m(h,D){j(h,l,D),g(l,i),g(i,r),g(r,n),g(n,o),g(n,c),g(n,_),g(n,u),g(n,m),g(m,f),g(f,y),te[x].m(y,null),g(f,B),g(f,q),se(S,q,null),g(f,X),g(f,P),g(P,C),L&&L.m(C,null),g(f,he),g(f,Z),ye=jt.observe(r,a[24].bind(r)),g(i,ve),T&&T.m(i,null),g(i,ne),g(i,W),N&&N.m(W,null),g(W,me),g(W,F),g(F,p),g(p,z),g(z,K),g(z,Le),g(z,oe),g(z,Ne),g(z,ie),se($,ie,null),g(l,je),I&&I.m(l,null),j(h,Ee,D),j(h,ee,D),a[26](ee),O=!0,Be||(Fe=[ue(Ye,"scroll",()=>{e=!0,clearTimeout(t),t=ot(s,100),a[23]()}),ue(y,"click",a[11]),ue(q,"click",gt(a[12]))],Be=!0)},p(h,[D]){D&8&&!e&&(e=!0,clearTimeout(t),scrollTo(Ye.pageXOffset,h[3]),t=ot(s,100));let R=x;x=Qe(h),x!==R&&(_e(),M(te[R],1,1,()=>{te[R]=null}),ge(),V=te[x],V||(V=te[x]=Ge[x](h),V.c()),E(V,1),V.m(y,null)),L&&L.p&&(!O||D&2097152)&&Ie(L,qe,h,h[21],O?Se(qe,h[21],D,nl):Ve(h[21]),ct),(!O||D&16)&&v(r,"data-show",h[4]),(!O||D&32)&&v(r,"data-transparent",h[5]),h[0]?T?(T.p(h,D),D&1&&E(T,1)):(T=ft(h),T.c(),E(T,1),T.m(i,ne)):T&&(_e(),M(T,1,1,()=>{T=null}),ge()),N&&N.p&&(!O||D&2097152)&&Ie(N,Oe,h,h[21],O?Se(Oe,h[21],D,null):Ve(h[21]),null),h[9]?I?(I.p(h,D),D&512&&E(I,1)):(I=ut(h),I.c(),E(I,1),I.m(l,null)):I&&(_e(),M(I,1,1,()=>{I=null}),ge()),(!O||D&8192&&xe!==(xe="relative flex size-full flex-col "+h[13].class+" svelte-1v74kko"))&&v(l,"class",xe)},i(h){O||(E(V),E(S.$$.fragment,h),E(L,h),E(T),E(N,h),E($.$$.fragment,h),E(I),O=!0)},o(h){M(V),M(S.$$.fragment,h),M(L,h),M(T),M(N,h),M($.$$.fragment,h),M(I),O=!1},d(h){h&&(d(l),d(Ee),d(ee)),te[x].d(),ae(S),L&&L.d(h),ye(),T&&T.d(),N&&N.d(h),ae($),I&&I.d(),a[26](null),Be=!1,xt(Fe)}}}function fl(a,e,s){let t,l=U,i=()=>(l(),l=qt(C,p=>s(27,t=p)),C),r;a.$$.on_destroy.push(()=>l());let{$$slots:n={},$$scope:o}=e,c,_=[],u=0,m=window.scrollY,f,y,x=!0,V=!1,B=0;function q(){s(20,B+=1),setTimeout(()=>{s(20,B-=1)},1e3)}let{showNavDropdown:S=!1}=e,X=!1;const P=Tt();Et(a,P,p=>s(7,r=p));let C;function he(p){X||(C&&Ue(C,t=c,t),i(s(6,C=p)),s(9,X=!0))}function Z(){s(9,X=!1)}function ke(){s(0,S=!1)}function ye(){s(0,S=!S)}async function ve(){const p=document.documentElement.querySelector("#main");p&&(q(),p.scrollIntoView({behavior:"smooth"}))}function ne(){s(3,m=Ye.pageYOffset)}function W(){var p;_=(p=Bt.entries.get(this))==null?void 0:p.borderBoxSize,s(2,_)}function me(p){Re[p?"unshift":"push"](()=>{r=p,P.set(r)})}function F(p){Re[p?"unshift":"push"](()=>{c=p,s(8,c)})}return a.$$set=p=>{s(13,e=Y(Y({},e),J(p))),"showNavDropdown"in p&&s(0,S=p.showNavDropdown),"$$scope"in p&&s(21,o=p.$$scope)},a.$$.update=()=>{var p;if(a.$$.dirty&131076){const z=((p=_.at(0))==null?void 0:p.blockSize)??0;z!==u&&(s(17,u=z),s(19,y=z))}if(a.$$.dirty&1966105&&m!==f){if(m>window.outerHeight-u&&B===0&&!S&&f!==void 0&&y!==void 0){const z=m-f;z>0?(s(19,y=Math.max(0,y-z)),y===0&&x&&s(4,x=!1)):(s(19,y=Math.min(u,y-z)),y===u&&!x&&s(4,x=!0))}else x||s(4,x=!0);s(18,f=m)}if(a.$$.dirty&131113){const z=m<=u/2&&!S;z!==V&&s(5,V=z)}a.$$.dirty&192&&C&&Ue(C,t=r,t)},e=J(e),[S,ke,_,m,x,V,C,r,c,X,P,ye,ve,e,q,he,Z,u,f,y,B,o,n,ne,W,me,F]}class ul extends be{constructor(e){super(),we(this,e,fl,cl,Ze,{temporaryDisableHeaderCollapse:14,showNavDropdown:0,showModal:15,hideModal:16,onNavDropdownDimmedBackgroundClick:1})}get temporaryDisableHeaderCollapse(){return this.$$.ctx[14]}get showNavDropdown(){return this.$$.ctx[0]}set showNavDropdown(e){this.$$set({showNavDropdown:e}),Nt()}get showModal(){return this.$$.ctx[15]}get hideModal(){return this.$$.ctx[16]}get onNavDropdownDimmedBackgroundClick(){return this.$$.ctx[1]}}const{document:dt}=Dt;function ht(a,e,s){const t=a.slice();t[10]=e[s][0],t[11]=e[s][1];const l=Vt(t[11]);return t[12]=l.href,t[13]=l.isExternal,t}function vt(a,e,s){const t=a.slice();t[10]=e[s][0],t[11]=e[s][1];const l=Vt(t[11]);return t[12]=l.href,t[13]=l.isExternal,t}function dl(a){let e;const s=a[5].default,t=Te(s,a,a[7],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&128)&&Ie(t,s,l,l[7],e?Se(s,l[7],i,null):Ve(l[7]),null)},i(l){e||(E(t,l),e=!0)},o(l){M(t,l),e=!1},d(l){t&&t.d(l)}}}function mt(a){let e,s;return e=new It({props:{href:a[12],isExternal:a[13],title:a[10],class:"text-[0.925rem] xl:text-base"}}),e.$on("clickAnimation",a[3]),e.$on("actionRequest",a[4]),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},p:U,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function hl(a){let e,s,t=Ce(a[2]),l=[];for(let r=0;r<t.length;r+=1)l[r]=mt(ht(a,t,r));const i=r=>M(l[r],1,1,()=>{l[r]=null});return{c(){e=b("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=w(r,"DIV",{slot:!0,class:!0});var n=k(e);for(let o=0;o<l.length;o+=1)l[o].l(n);n.forEach(d),this.h()},h(){v(e,"slot","nav-horizontal"),v(e,"class",de("flex size-full justify-center gap-x-5 xl:gap-x-8"))},m(r,n){j(r,e,n);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null);s=!0},p(r,n){if(n&28){t=Ce(r[2]);let o;for(o=0;o<t.length;o+=1){const c=ht(r,t,o);l[o]?(l[o].p(c,n),E(l[o],1)):(l[o]=mt(c),l[o].c(),E(l[o],1),l[o].m(e,null))}for(_e(),o=t.length;o<l.length;o+=1)i(o);ge()}},i(r){if(!s){for(let n=0;n<t.length;n+=1)E(l[n]);s=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)M(l[n]);s=!1},d(r){r&&d(e),zt(l,r)}}}function _t(a){let e,s;return e=new It({props:{href:a[12],isExternal:a[13],title:a[10],class:"text-[0.9rem]"}}),e.$on("clickAnimation",a[3]),e.$on("actionRequest",a[4]),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},p:U,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function vl(a){let e,s,t=Ce(a[2]),l=[];for(let r=0;r<t.length;r+=1)l[r]=_t(vt(a,t,r));const i=r=>M(l[r],1,1,()=>{l[r]=null});return{c(){e=b("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=w(r,"DIV",{slot:!0,class:!0});var n=k(e);for(let o=0;o<l.length;o+=1)l[o].l(n);n.forEach(d),this.h()},h(){v(e,"slot","nav-vertical"),v(e,"class",de("size-full flex-row justify-center"))},m(r,n){j(r,e,n);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null);s=!0},p(r,n){if(n&28){t=Ce(r[2]);let o;for(o=0;o<t.length;o+=1){const c=vt(r,t,o);l[o]?(l[o].p(c,n),E(l[o],1)):(l[o]=_t(c),l[o].c(),E(l[o],1),l[o].m(e,null))}for(_e(),o=t.length;o<l.length;o+=1)i(o);ge()}},i(r){if(!s){for(let n=0;n<t.length;n+=1)E(l[n]);s=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)M(l[n]);s=!1},d(r){r&&d(e),zt(l,r)}}}function ml(a){let e,s,t;dt.title=Zt;let l={$$slots:{"nav-vertical":[vl],"nav-horizontal":[hl],default:[dl]},$$scope:{ctx:a}};return s=new ul({props:l}),a[6](s),{c(){e=H(),le(s.$$.fragment)},l(i){Ot("svelte-1p93bql",dt.head).forEach(d),e=A(i),re(s.$$.fragment,i)},m(i,r){j(i,e,r),se(s,i,r),t=!0},p(i,[r]){const n={};r&128&&(n.$$scope={dirty:r,ctx:i}),s.$set(n)},i(i){t||(E(s.$$.fragment,i),t=!0)},o(i){M(s.$$.fragment,i),t=!1},d(i){i&&d(e),a[6](null),ae(s,i)}}}function Vt(a){return a==="news"?{href:"https://molodist.life/news",isExternal:!0}:{href:`#${a}`,isExternal:!1}}function _l(){const a=document.createElement("script");a.type="text/javascript",a.src="//widgets.binotel.com/getcall/widgets/abkoftzha7hv5ybuzjou.js",a.async=!0,document.documentElement.appendChild(a)}function gl(a,e,s){let t,{$$slots:l={},$$scope:i}=e;const r=Tt();Et(a,r,f=>s(0,t=f)),Pt("appShell",Xt(r));const n=[["Про комплекс","about"],["Інфраструктура","infrastructure"],["Квартири","apartments"],["Галерея","gallery"],["Новини","news"],["Контакти","contacts"]];let o;function c(){o==null||o.disconnect();const f=document.documentElement.querySelectorAll(".unrevealed");if(f.length===0)return;const y=new IntersectionObserver((x,V)=>{for(const B of x)B.isIntersecting&&(B.target.classList.remove("unrevealed"),V.unobserve(B.target))},{threshold:.15});for(const x of f)y.observe(x);o=y}Rt(()=>{c(),setTimeout(()=>{_l()},500)});function _(f){f.detail||Ue(r,t.showNavDropdown=!1,t)}async function u(f){if(f.detail.isExternal)setTimeout(()=>{window.open(f.detail.href)},300);else if(f.detail.href.startsWith("#")){const y=f.detail.href,x=document.documentElement.querySelector(y);if(!x)return;t.temporaryDisableHeaderCollapse(),x.scrollIntoView({behavior:"smooth"})}}function m(f){Re[f?"unshift":"push"](()=>{t=f,r.set(t)})}return a.$$set=f=>{"$$scope"in f&&s(7,i=f.$$scope)},[t,r,n,_,u,l,m,i]}class xl extends be{constructor(e){super(),we(this,e,gl,ml,Ze,{})}}export{xl as component,yl as universal};
