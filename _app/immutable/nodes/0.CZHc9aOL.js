import{s as Je,e as k,t as st,c as x,b as I,d as at,f as v,u as g,S as Ae,i as W,h as b,T as ne,U as Qe,j as it,n as be,V as ot,A as ie,B as we,G as ft,W as qe,X as ct,a as L,o as Ne,Y as ut,g as M,Z as ve,_ as dt,$ as ht,a0 as mt,a1 as _t,z as $e,r as pt,k as gt,q as vt,a2 as bt,E as oe,x as Oe,a3 as wt}from"../chunks/scheduler.B2b1OqtG.js";import{S as et,i as tt,b as de,d as xe,m as he,t as S,c as se,a as T,e as me,g as ae,f as N}from"../chunks/index.nu6bqYo9.js";import{c as Be,s as yt,e as ye,S as kt,g as Re,a as Ue,m as xt}from"../chunks/modal.Dx8_FhoX.js";import{b as Et}from"../chunks/paths.BtrDt-My.js";const Dt=!0,It="always",Ot=Object.freeze(Object.defineProperty({__proto__:null,prerender:Dt,trailingSlash:It},Symbol.toStringTag,{value:"Module"}));function jt(r){let e,t,l=r[2].toLocaleUpperCase()+"",n,_,p,o,d;return{c(){e=k("a"),t=k("div"),n=st(l),this.h()},l(f){e=x(f,"A",{href:!0,class:!0,rel:!0});var s=I(e);t=x(s,"DIV",{class:!0});var h=I(t);n=at(h,l),h.forEach(v),s.forEach(v),this.h()},h(){g(t,"class","justify-center after:content-empty after:absolute after:left-0 after:right-0 after:origin-center after:scale-x-100 after:bg-white after:opacity-0 active:after:origin-right svelte-1gb7q4g"),g(e,"href",r[0]),g(e,"class",_=Ae(Be("relative flex py-2.5 font-semibold",r[3]&&"click",r[4]&&"after-click",r[6].class))+" svelte-1gb7q4g"),g(e,"rel",p=r[1]?"external":"")},m(f,s){W(f,e,s),b(e,t),b(t,n),o||(d=ne(e,"click",Qe(r[7])),o=!0)},p(f,[s]){s&4&&l!==(l=f[2].toLocaleUpperCase()+"")&&it(n,l),s&1&&g(e,"href",f[0]),s&88&&_!==(_=Ae(Be("relative flex py-2.5 font-semibold",f[3]&&"click",f[4]&&"after-click",f[6].class))+" svelte-1gb7q4g")&&g(e,"class",_),s&2&&p!==(p=f[1]?"external":"")&&g(e,"rel",p)},i:be,o:be,d(f){f&&v(e),o=!1,d()}}}function Vt(r,e,t){let{href:l=""}=e,{isExternal:n=!1}=e,{title:_=""}=e;const p=ot();let o=!1,d=!1;function f(h){o||d||!h.currentTarget||(t(3,o=!0),p("clickAnimation",!0),setTimeout(()=>{p("actionRequest",{href:l,isExternal:n})},200),setTimeout(()=>{p("clickAnimation",!1),t(3,o=!1),t(4,d=!0),setTimeout(()=>{t(4,d=!1)},500)},400))}const s=h=>f(h);return r.$$set=h=>{t(6,e=ie(ie({},e),we(h))),"href"in h&&t(0,l=h.href),"isExternal"in h&&t(1,n=h.isExternal),"title"in h&&t(2,_=h.title)},e=we(e),[l,n,_,o,d,f,e,s]}class lt extends et{constructor(e){super(),tt(this,e,Vt,jt,Je,{href:0,isExternal:1,title:2})}}function Tt(r){const e=r-1;return e*e*e+1}function O(r){return r<.5?8*Math.pow(r,4):-8*Math.pow(r-1,4)+1}function ke(r,{delay:e=0,duration:t=400,easing:l=ft}={}){const n=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:l,css:_=>`opacity: ${_*n}`}}function X(r,{delay:e=0,duration:t=400,easing:l=Tt,x:n=0,y:_=0,opacity:p=0}={}){const o=getComputedStyle(r),d=+o.opacity,f=o.transform==="none"?"":o.transform,s=d*(1-p),[h,c]=qe(n),[a,u]=qe(_);return{delay:e,duration:t,easing:l,css:(w,C)=>`
			transform: ${f} translate(${(1-w)*h}${c}, ${(1-w)*a}${u});
			opacity: ${d-s*C}`}}const{document:Ye,window:We}=bt;function Fe(r,e,t){const l=r.slice();l[25]=e[t][0],l[26]=e[t][1];const n=rt(l[26]);return l[27]=n.href,l[28]=n.isExternal,l}function Ge(r,e,t){const l=r.slice();l[25]=e[t][0],l[26]=e[t][1];const n=rt(l[26]);return l[27]=n.href,l[28]=n.isExternal,l}function Ct(r){let e,t,l;return{c(){e=k("div"),this.h()},l(n){e=x(n,"DIV",{class:!0}),I(e).forEach(v),this.h()},h(){g(e,"class","i-mdi-close")},m(n,_){W(n,e,_),l=!0},i(n){l||(n&&oe(()=>{l&&(t||(t=N(e,X,{duration:200,y:-8,easing:O},!0)),t.run(1))}),l=!0)},o(n){n&&(t||(t=N(e,X,{duration:200,y:-8,easing:O},!1)),t.run(0)),l=!1},d(n){n&&v(e),n&&t&&t.end()}}}function zt(r){let e,t,l;return{c(){e=k("div"),this.h()},l(n){e=x(n,"DIV",{class:!0}),I(e).forEach(v),this.h()},h(){g(e,"class","i-mdi-menu")},m(n,_){W(n,e,_),l=!0},i(n){l||(n&&oe(()=>{l&&(t||(t=N(e,X,{duration:200,y:8,easing:O},!0)),t.run(1))}),l=!0)},o(n){n&&(t||(t=N(e,X,{duration:200,y:8,easing:O},!1)),t.run(0)),l=!1},d(n){n&&v(e),n&&t&&t.end()}}}function Ke(r){let e,t;return e=new lt({props:{href:r[27],isExternal:r[28],title:r[25],class:"text-[0.925rem] xl:text-base"}}),e.$on("clickAnimation",r[6]),e.$on("actionRequest",r[7]),{c(){de(e.$$.fragment)},l(l){xe(e.$$.fragment,l)},m(l,n){he(e,l,n),t=!0},p:be,i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){me(e,l)}}}function Pe(r){let e,t,l,n,_,p,o,d,f=ye(r[5]),s=[];for(let c=0;c<f.length;c+=1)s[c]=Xe(Fe(r,f,c));const h=c=>S(s[c],1,1,()=>{s[c]=null});return{c(){e=k("div"),l=L(),n=k("nav");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){e=x(c,"DIV",{class:!0}),I(e).forEach(v),l=M(c),n=x(c,"NAV",{class:!0});var a=I(n);for(let u=0;u<s.length;u+=1)s[u].l(a);a.forEach(v),this.h()},h(){g(e,"class","z-50 fixed bg-black bg-opacity-60 top-4.5rem lg:top-5.5rem xl:top-6.5rem left-0 right-0 bottom-0 svelte-f1w2hj"),g(n,"class","z-55 fixed top-4.5rem lg:top-5.5rem xl:top-6.5rem left-0 w-full bg-gray-dark px-6 pb-0.85rem pt-4 shadow size-full flex-row justify-center svelte-f1w2hj")},m(c,a){W(c,e,a),W(c,l,a),W(c,n,a);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(n,null);p=!0,o||(d=ne(e,"click",r[10]),o=!0)},p(c,a){if(a[0]&224){f=ye(c[5]);let u;for(u=0;u<f.length;u+=1){const w=Fe(c,f,u);s[u]?(s[u].p(w,a),T(s[u],1)):(s[u]=Xe(w),s[u].c(),T(s[u],1),s[u].m(n,null))}for(ae(),u=f.length;u<s.length;u+=1)h(u);se()}},i(c){if(!p){c&&oe(()=>{p&&(t||(t=N(e,ke,{duration:200,easing:O},!0)),t.run(1))});for(let a=0;a<f.length;a+=1)T(s[a]);c&&oe(()=>{p&&(_||(_=N(n,X,{duration:200,y:-8,easing:O},!0)),_.run(1))}),p=!0}},o(c){c&&(t||(t=N(e,ke,{duration:200,easing:O},!1)),t.run(0)),s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)S(s[a]);c&&(_||(_=N(n,X,{duration:200,y:-8,easing:O},!1)),_.run(0)),p=!1},d(c){c&&(v(e),v(l),v(n)),c&&t&&t.end(),$e(s,c),c&&_&&_.end(),o=!1,d()}}}function Xe(r){let e,t;return e=new lt({props:{href:r[27],isExternal:r[28],title:r[25],class:"text-[0.9rem]"}}),e.$on("clickAnimation",r[6]),e.$on("actionRequest",r[7]),{c(){de(e.$$.fragment)},l(l){xe(e.$$.fragment,l)},m(l,n){he(e,l,n),t=!0},p:be,i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){me(e,l)}}}function Ze(r){let e,t,l,n,_,p,o,d,f;const s=[r[4].props];var h=r[4].component;function c(a,u){let w={};for(let C=0;C<s.length;C+=1)w=ie(w,s[C]);return u!==void 0&&u[0]&16&&(w=ie(w,Re(s,[Ue(a[4].props)]))),{props:w}}return h&&(o=Oe(h,c(r))),{c(){e=k("div"),t=k("div"),n=L(),_=k("div"),p=k("div"),o&&de(o.$$.fragment),this.h()},l(a){e=x(a,"DIV",{class:!0});var u=I(e);t=x(u,"DIV",{class:!0}),I(t).forEach(v),n=M(u),_=x(u,"DIV",{class:!0});var w=I(_);p=x(w,"DIV",{class:!0});var C=I(p);o&&xe(o.$$.fragment,C),C.forEach(v),w.forEach(v),u.forEach(v),this.h()},h(){g(t,"class","absolute bottom-0 left-0 right-0 top-0 bg-black/75"),g(p,"class","flex max-w-full flex-col items-center bg-gray-dark shadow-lg"),g(_,"class","z-105 flex min-h-full max-w-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden py-10"),g(e,"class","z-100 fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center")},m(a,u){W(a,e,u),b(e,t),b(e,n),b(e,_),b(_,p),o&&he(o,p,null),f=!0},p(a,u){if(u[0]&16&&h!==(h=a[4].component)){if(o){ae();const w=o;S(w.$$.fragment,1,0,()=>{me(w,1)}),se()}h?(o=Oe(h,c(a,u)),de(o.$$.fragment),T(o.$$.fragment,1),he(o,p,null)):o=null}else if(h){const w=u[0]&16?Re(s,[Ue(a[4].props)]):{};o.$set(w)}},i(a){f||(oe(()=>{f&&(l||(l=N(t,ke,{duration:200,easing:O},!0)),l.run(1))}),o&&T(o.$$.fragment,a),oe(()=>{f&&(d||(d=N(p,X,{duration:200,y:-16,easing:O},!0)),d.run(1))}),f=!0)},o(a){l||(l=N(t,ke,{duration:200,easing:O},!1)),l.run(0),o&&S(o.$$.fragment,a),d||(d=N(p,X,{duration:200,y:-16,easing:O},!1)),d.run(0),f=!1},d(a){a&&v(e),a&&l&&l.end(),o&&me(o),a&&d&&d.end()}}}function St(r){let e,t,l,n,_,p,o,d,f,s,h,c,a,u='<div class="i-local-molodist text-4rem lg:text-4.5rem xl:text-5rem text-white"></div>',w,C,G,fe,B,R='<div class="select-none text-[0.71rem] font-medium xl:text-[0.85rem] svelte-f1w2hj">ВІДДІЛ ОПЕРАЦІЙ З НЕРУХОМІСТЮ</div> <h1 class="-mt-[0.2rem] text-center text-3xl font-bold lg:-mt-[0.1rem] xl:mt-0 xl:text-4xl svelte-f1w2hj">067 787 94 34</h1>',_e,ce,$,ue,K,q,m,H="© 2024 Інвестиційна група MOLODIST.<br/>Усі права захищено",U,P,ee='<a href="https://molodist.life/privacy-policy/" class="hover:text-primary" rel="external">Політика конфіденційності</a>',Ee,te,Z,pe,ge,le,F,De,Ve;Ye.title=yt;const Te=[zt,Ct],J=[];function Ce(i,y){return i[0]?1:0}s=Ce(r),h=J[s]=Te[s](r);let Q=ye(r[5]),E=[];for(let i=0;i<Q.length;i+=1)E[i]=Ke(Ge(r,Q,i));const nt=i=>S(E[i],1,1,()=>{E[i]=null});let j=r[0]&&Pe(r);const Ie=r[17].default,A=ct(Ie,r,r[16],null);Z=new kt({});let V=r[4]&&Ze(r);return{c(){e=L(),t=k("div"),l=k("header"),n=k("div"),_=L(),p=k("div"),o=L(),d=k("div"),f=k("button"),h.c(),c=L(),a=k("a"),a.innerHTML=u,w=L(),C=k("div"),G=k("nav");for(let i=0;i<E.length;i+=1)E[i].c();fe=L(),B=k("div"),B.innerHTML=R,ce=L(),j&&j.c(),$=L(),A&&A.c(),ue=L(),K=k("footer"),q=k("div"),m=k("div"),m.innerHTML=H,U=L(),P=k("div"),P.innerHTML=ee,Ee=L(),te=k("div"),de(Z.$$.fragment),ge=L(),V&&V.c(),le=Ne(),this.h()},l(i){ut("svelte-1p93bql",Ye.head).forEach(v),e=M(i),t=x(i,"DIV",{class:!0,"data-header-show":!0,"data-header-transparent":!0,"data-nav-dropdown-show":!0});var z=I(t);l=x(z,"HEADER",{class:!0});var D=I(l);n=x(D,"DIV",{class:!0}),I(n).forEach(v),_=M(D),p=x(D,"DIV",{class:!0}),I(p).forEach(v),o=M(D),d=x(D,"DIV",{class:!0});var Y=I(d);f=x(Y,"BUTTON",{type:!0,class:!0});var ze=I(f);h.l(ze),ze.forEach(v),c=M(Y),a=x(Y,"A",{href:!0,class:!0,"data-svelte-h":!0}),ve(a)!=="svelte-it4kr3"&&(a.innerHTML=u),w=M(Y),C=x(Y,"DIV",{class:!0});var Se=I(C);G=x(Se,"NAV",{class:!0});var He=I(G);for(let je=0;je<E.length;je+=1)E[je].l(He);He.forEach(v),Se.forEach(v),fe=M(Y),B=x(Y,"DIV",{class:!0,"data-svelte-h":!0}),ve(B)!=="svelte-1tj9t30"&&(B.innerHTML=R),Y.forEach(v),D.forEach(v),ce=M(z),j&&j.l(z),$=M(z),A&&A.l(z),ue=M(z),K=x(z,"FOOTER",{class:!0});var Le=I(K);q=x(Le,"DIV",{class:!0});var re=I(q);m=x(re,"DIV",{"data-svelte-h":!0}),ve(m)!=="svelte-1uoqacl"&&(m.innerHTML=H),U=M(re),P=x(re,"DIV",{"data-svelte-h":!0}),ve(P)!=="svelte-1g81x5y"&&(P.innerHTML=ee),Ee=M(re),te=x(re,"DIV",{class:!0});var Me=I(te);xe(Z.$$.fragment,Me),Me.forEach(v),re.forEach(v),Le.forEach(v),z.forEach(v),ge=M(i),V&&V.l(i),le=Ne(),this.h()},h(){g(n,"class","-z-20 absolute bottom-0 left-0 right-0 top-0 bg-black opacity-15"),g(p,"class","-z-10 absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-primary to-secondary shadow transition group-[&[data-header-transparent=true]]/app:opacity-0"),g(f,"type","button"),g(f,"class","relative -ms-2 inline-flex items-center justify-center rounded bg-black bg-opacity-5 size-7.5 text-1.25rem text-white hover:bg-black hover:bg-opacity-10 lg:hidden [&>*]:absolute [&>*]:top-1/2 [&>*]:left-1/2 [&>*]:-translate-x-1/2 [&>*]:-translate-y-1/2"),g(a,"href",Et+"/#main"),g(a,"class","flex items-center"),g(G,"class","hidden size-full lg:flex justify-center gap-x-5 xl:gap-x-8"),g(C,"class","flex-1"),g(B,"class","header-tel -me-2 mt-[0.2rem] flex flex-col items-stretch text-white lg:mt-[0.1rem] xl:me-0 xl:mt-0 svelte-f1w2hj"),g(d,"class","flex size-full items-center justify-start gap-3 xl:gap-6 px-6 xl:px-10"),g(l,"class","z-60 fixed left-0 top-0 right-0 transition group-[&[data-header-show=false]]/app:opacity-0 group-[&[data-header-show=false]]/app:-translate-y-1/2 h-[4.5rem] lg:h-[5.5rem] xl:h-[6.5rem] svelte-f1w2hj"),g(te,"class","lg:-translate-y-1.5"),g(q,"class","flex w-full flex-col items-start justify-between gap-y-8 text-white lg:w-4/5 lg:flex-row"),g(K,"class","w-full 2xl:container px-6 pb-12 pt-16 sm:px-16 svelte-f1w2hj"),g(t,"class",pe="group/app unrevealed w-full font-sans flex flex-col "+r[13].class+" svelte-f1w2hj"),g(t,"data-header-show",r[2]),g(t,"data-header-transparent",r[3]),g(t,"data-nav-dropdown-show",r[0])},m(i,y){W(i,e,y),W(i,t,y),b(t,l),b(l,n),b(l,_),b(l,p),b(l,o),b(l,d),b(d,f),J[s].m(f,null),b(d,c),b(d,a),b(d,w),b(d,C),b(C,G);for(let z=0;z<E.length;z+=1)E[z]&&E[z].m(G,null);b(d,fe),b(d,B),_e=dt.observe(l,r[18].bind(l)),b(t,ce),j&&j.m(t,null),b(t,$),A&&A.m(t,null),b(t,ue),b(t,K),b(K,q),b(q,m),b(q,U),b(q,P),b(q,Ee),b(q,te),he(Z,te,null),W(i,ge,y),V&&V.m(i,y),W(i,le,y),F=!0,De||(Ve=[ne(We,"scroll",r[8]),ne(We,"keydown",r[12]),ne(f,"click",r[9]),ne(a,"click",Qe(r[11]))],De=!0)},p(i,y){let z=s;if(s=Ce(i),s!==z&&(ae(),S(J[z],1,1,()=>{J[z]=null}),se(),h=J[s],h||(h=J[s]=Te[s](i),h.c()),T(h,1),h.m(f,null)),y[0]&224){Q=ye(i[5]);let D;for(D=0;D<Q.length;D+=1){const Y=Ge(i,Q,D);E[D]?(E[D].p(Y,y),T(E[D],1)):(E[D]=Ke(Y),E[D].c(),T(E[D],1),E[D].m(G,null))}for(ae(),D=Q.length;D<E.length;D+=1)nt(D);se()}i[0]?j?(j.p(i,y),y[0]&1&&T(j,1)):(j=Pe(i),j.c(),T(j,1),j.m(t,$)):j&&(ae(),S(j,1,1,()=>{j=null}),se()),A&&A.p&&(!F||y[0]&65536)&&ht(A,Ie,i,i[16],F?_t(Ie,i[16],y,null):mt(i[16]),null),(!F||y[0]&8192&&pe!==(pe="group/app unrevealed w-full font-sans flex flex-col "+i[13].class+" svelte-f1w2hj"))&&g(t,"class",pe),(!F||y[0]&4)&&g(t,"data-header-show",i[2]),(!F||y[0]&8)&&g(t,"data-header-transparent",i[3]),(!F||y[0]&1)&&g(t,"data-nav-dropdown-show",i[0]),i[4]?V?(V.p(i,y),y[0]&16&&T(V,1)):(V=Ze(i),V.c(),T(V,1),V.m(le.parentNode,le)):V&&(ae(),S(V,1,1,()=>{V=null}),se())},i(i){if(!F){T(h);for(let y=0;y<Q.length;y+=1)T(E[y]);T(j),T(A,i),T(Z.$$.fragment,i),T(V),F=!0}},o(i){S(h),E=E.filter(Boolean);for(let y=0;y<E.length;y+=1)S(E[y]);S(j),S(A,i),S(Z.$$.fragment,i),S(V),F=!1},d(i){i&&(v(e),v(t),v(ge),v(le)),J[s].d(),$e(E,i),_e(),j&&j.d(),A&&A.d(i),me(Z),V&&V.d(i),De=!1,pt(Ve)}}}function rt(r){return r==="news"?{href:"https://molodist.life/news",isExternal:!0}:{href:`#${r}`,isExternal:!1}}function Ht(){const r=document.createElement("script");r.type="text/javascript",r.src="//widgets.binotel.com/getcall/widgets/abkoftzha7hv5ybuzjou.js",document.documentElement.appendChild(r)}function Lt(r,e,t){let l;gt(r,xt,m=>t(4,l=m));let{$$slots:n={},$$scope:_}=e,p=[],o=0,d=!0,f=!0;function s(){const m=window.scrollY<=o/2&&!a;m!==f&&t(3,f=m)}let h=0;function c(){h+=1,setTimeout(()=>{h-=1},1e3)}let{showNavDropdown:a=!1}=e;const u=[["Про комплекс","about"],["Інфраструктура","infrastructure"],["Квартири","apartments"],["Галерея","gallery"],["Новини","news"],["Контакти","contacts"]];let w;function C(){w==null||w.disconnect();const m=document.documentElement.querySelectorAll(".unrevealed");if(m.length===0)return;const H=new IntersectionObserver((U,P)=>{for(const ee of U)ee.isIntersecting&&(ee.target.classList.remove("unrevealed"),P.unobserve(ee.target))},{threshold:.1});m.forEach(U=>{H.observe(U)}),w=H}vt(()=>{C(),Ht()});function G(m){m.detail||t(0,a=!1)}function fe(m){if(m.detail.isExternal)setTimeout(()=>{window.open(m.detail.href)},300);else if(m.detail.href.startsWith("#")){const H=m.detail.href,U=document.documentElement.querySelector(H);if(!U)return;c(),U.scrollIntoView({behavior:"smooth"})}}let B,R;function _e(){const m=window.scrollY;if(m>window.outerHeight-o&&h===0&&!a&&B!==void 0&&R!==void 0){const H=m-B;H>0?(R=Math.max(0,R-H),R===0&&d&&t(2,d=!1)):(R=Math.min(o,R-H),R===o&&!d&&t(2,d=!0))}else d||t(2,d=!0);B=m,s()}function ce(){t(0,a=!a)}function $(){t(0,a=!1)}function ue(){const m=document.documentElement.querySelector("#main");m&&(c(),m.scrollIntoView({behavior:"smooth"}),t(0,a=!1))}function K(m){m.key==="Escape"&&t(0,a=!1)}function q(){var m;p=(m=wt.entries.get(this))==null?void 0:m.borderBoxSize,t(1,p)}return r.$$set=m=>{t(13,e=ie(ie({},e),we(m))),"showNavDropdown"in m&&t(0,a=m.showNavDropdown),"$$scope"in m&&t(16,_=m.$$scope)},r.$$.update=()=>{var m;if(r.$$.dirty[0]&32770){const H=((m=p.at(0))==null?void 0:m.blockSize)??0;H!==o&&(t(15,o=H),R=H,s())}},e=we(e),[a,p,d,f,l,u,G,fe,_e,ce,$,ue,K,e,c,o,_,n,q]}class Bt extends et{constructor(e){super(),tt(this,e,Lt,St,Je,{temporaryDisableHeaderCollapse:14,showNavDropdown:0},null,[-1,-1])}get temporaryDisableHeaderCollapse(){return this.$$.ctx[14]}}export{Bt as component,Ot as universal};
