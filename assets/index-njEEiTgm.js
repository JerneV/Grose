var Fe=Object.defineProperty;var Ie=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ce=(e,t,n)=>(Ie(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function M(){}function Ce(e){return e()}function ge(){return Object.create(null)}function B(e){e.forEach(Ce)}function Ne(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function je(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function Be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function C(){return A(" ")}function j(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function De(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ge(e){let t;return{p(...n){t=n,t.forEach(l=>e.push(l))},r(){t.forEach(n=>e.splice(e.indexOf(n),1))}}}function Re(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.data!==t&&(e.data=t)}function le(e,t){e.value=t??""}let he;function te(e){he=e}const U=[],I=[];let Q=[];const de=[],qe=Promise.resolve();let ae=!1;function He(){ae||(ae=!0,qe.then(Oe))}function _e(e){Q.push(e)}function G(e){de.push(e)}const re=new Set;let K=0;function Oe(){if(K!==0)return;const e=he;do{try{for(;K<U.length;){const t=U[K];K++,te(t),Ke(t.$$)}}catch(t){throw U.length=0,K=0,t}for(te(null),U.length=0,K=0;I.length;)I.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];re.has(n)||(re.add(n),n())}Q.length=0}while(U.length);for(;de.length;)de.pop()();ae=!1,re.clear(),te(e)}function Ke(e){if(e.fragment!==null){e.update(),B(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_e)}}function Ue(e){const t=[],n=[];Q.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),Q=t}const ne=new Set;let Ve;function q(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function x(e,t,n,l){if(e&&e.o){if(ne.has(e))return;ne.add(e),Ve.c.push(()=>{ne.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function z(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function me(e,t){e.d(1),t.delete(e.key)}function be(e,t,n,l,o,u,s,f,d,i,g,m){let b=e.length,r=u.length,h=b;const v={};for(;h--;)v[e[h].key]=h;const a=[],k=new Map,F=new Map,E=[];for(h=r;h--;){const c=m(o,u,h),_=n(c);let w=s.get(_);w?l&&E.push(()=>w.p(c,t)):(w=i(_,c),w.c()),k.set(_,a[h]=w),_ in v&&F.set(_,Math.abs(h-v[_]))}const O=new Set,D=new Set;function L(c){q(c,1),c.m(f,g),s.set(c.key,c),g=c.first,r--}for(;b&&r;){const c=a[r-1],_=e[b-1],w=c.key,H=_.key;c===_?(g=c.first,b--,r--):k.has(H)?!s.has(w)||O.has(w)?L(c):D.has(H)?b--:F.get(w)>F.get(H)?(D.add(w),L(c)):(O.add(H),b--):(d(_,s),b--)}for(;b--;){const c=e[b];k.has(c.key)||d(c,s)}for(;r;)L(a[r-1]);return B(E),a}function R(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function ee(e){e&&e.c()}function V(e,t,n){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),_e(()=>{const u=e.$$.on_mount.map(Ce).filter(Ne);e.$$.on_destroy?e.$$.on_destroy.push(...u):B(u),e.$$.on_mount=[]}),o.forEach(_e)}function W(e,t){const n=e.$$;n.fragment!==null&&(Ue(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function We(e,t){e.$$.dirty[0]===-1&&(U.push(e),He(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,l,o,u,s=null,f=[-1]){const d=he;te(e);const i=e.$$={fragment:null,ctx:[],props:u,update:M,not_equal:o,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:ge(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};s&&s(i.root);let g=!1;if(i.ctx=n?n(e,t.props||{},(m,b,...r)=>{const h=r.length?r[0]:b;return i.ctx&&o(i.ctx[m],i.ctx[m]=h)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](h),g&&We(e,m)),b}):[],i.update(),g=!0,B(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const m=Re(t.target);i.fragment&&i.fragment.l(m),m.forEach(T)}else i.fragment&&i.fragment.c();t.intro&&q(e.$$.fragment),V(e,t.target,t.anchor),Oe()}te(d)}class Z{constructor(){ce(this,"$$");ce(this,"$$set")}$destroy(){W(this,1),this.$destroy=M}$on(t,n){if(!Ne(n))return M;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ze);function Je(e,t,n){let{allTodos:l=[]}=t;return e.$$set=o=>{"allTodos"in o&&n(0,l=o.allTodos)},e.$$.update=()=>{e.$$.dirty&1&&l.length},[l]}class Qe extends Z{constructor(t){super(),Y(this,t,Je,null,X,{allTodos:0})}}function ke(e,t,n){const l=e.slice();return l[13]=t[n],l[14]=t,l[15]=n,l}function we(e,t,n){const l=e.slice();return l[13]=t[n],l[16]=t,l[17]=n,l}function ye(e){let t;return{c(){t=A("All items have been checked off!")},m(n,l){$(n,t,l)},d(n){n&&T(t)}}}function Te(e,t){let n,l,o,u,s=t[13].name+"",f,d,i,g;function m(){t[7].call(l,t[16],t[17])}function b(){return t[8](t[13])}return{key:e,first:null,c(){n=S("li"),l=S("input"),u=C(),f=A(s),d=C(),N(l,"type","checkbox"),N(l,"id",o="todo-"+t[13].id),this.first=n},m(r,h){$(r,n,h),y(n,l),l.checked=t[13].completed,y(n,u),y(n,f),y(n,d),i||(g=[j(l,"change",m),j(l,"click",b)],i=!0)},p(r,h){t=r,h&3&&o!==(o="todo-"+t[13].id)&&N(l,"id",o),h&3&&(l.checked=t[13].completed),h&3&&s!==(s=t[13].name+"")&&J(f,s)},d(r){r&&T(n),i=!1,B(g)}}}function $e(e){let t;return{c(){t=A("Nothing was checked off!")},m(n,l){$(n,t,l)},d(n){n&&T(t)}}}function ve(e,t){let n,l,o,u,s=t[13].name+"",f,d,i,g,m,b;function r(){t[10].call(l,t[14],t[15])}function h(){return t[11](t[13])}function v(){return t[12](t[13])}return{key:e,first:null,c(){n=S("li"),l=S("input"),u=C(),f=A(s),d=C(),i=S("button"),i.textContent="Delete",g=C(),N(l,"type","checkbox"),N(l,"id",o="todo-"+t[13].id),N(i,"type","button"),this.first=n},m(a,k){$(a,n,k),y(n,l),l.checked=t[13].completed,y(n,u),y(n,f),y(n,d),y(n,i),y(n,g),m||(b=[j(l,"change",r),j(l,"click",h),j(i,"click",v)],m=!0)},p(a,k){t=a,k&3&&o!==(o="todo-"+t[13].id)&&N(l,"id",o),k&3&&(l.checked=t[13].completed),k&3&&s!==(s=t[13].name+"")&&J(f,s)},d(a){a&&T(n),m=!1,B(b)}}}function Xe(e){let t,n,l,o,u,s,f,d,i=[],g=new Map,m,b,r,h,v=[],a=new Map,k=z(e[0].filter(e[6]));const F=c=>c[13].id;for(let c=0;c<k.length;c+=1){let _=we(e,k,c),w=F(_);g.set(w,i[c]=Te(w,_))}let E=null;k.length||(E=ye());let O=z(e[0].filter(e[9]));const D=c=>c[13].id;for(let c=0;c<O.length;c+=1){let _=ke(e,O,c),w=D(_);a.set(w,v[c]=ve(w,_))}let L=null;return O.length||(L=$e()),{c(){t=S("h2"),n=A(e[3]),l=A(" out of "),o=A(e[4]),u=A(" items completed for "),s=A(e[1]),f=C(),d=S("ul");for(let c=0;c<i.length;c+=1)i[c].c();E&&E.c(),m=C(),b=S("h2"),b.textContent="Completed items",r=C(),h=S("ul");for(let c=0;c<v.length;c+=1)v[c].c();L&&L.c()},m(c,_){$(c,t,_),y(t,n),y(t,l),y(t,o),y(t,u),y(t,s),$(c,f,_),$(c,d,_);for(let w=0;w<i.length;w+=1)i[w]&&i[w].m(d,null);E&&E.m(d,null),$(c,m,_),$(c,b,_),$(c,r,_),$(c,h,_);for(let w=0;w<v.length;w+=1)v[w]&&v[w].m(h,null);L&&L.m(h,null)},p(c,[_]){_&8&&J(n,c[3]),_&16&&J(o,c[4]),_&2&&J(s,c[1]),_&35&&(k=z(c[0].filter(c[6])),i=be(i,_,F,1,c,k,g,d,me,Te,null,we),k.length?E&&(E.d(1),E=null):E||(E=ye(),E.c(),E.m(d,null))),_&39&&(O=z(c[0].filter(c[9])),v=be(v,_,D,1,c,O,a,h,me,ve,null,ke),O.length?L&&(L.d(1),L=null):L||(L=$e(),L.c(),L.m(h,null)))},i:M,o:M,d(c){c&&(T(t),T(f),T(d),T(m),T(b),T(r),T(h));for(let _=0;_<i.length;_+=1)i[_].d();E&&E.d();for(let _=0;_<v.length;_+=1)v[_].d();L&&L.d()}}}function Ye(e,t,n){let l,o,{allTodos:u=[]}=t,{selected:s=""}=t;function f(a){a.completed=!a.completed,n(0,u=[...u])}function d(a){n(0,u=u.filter(k=>k.id!==a.id))}const i=a=>!a.completed&&a.selectedStore===s;function g(a,k){a[k].completed=this.checked,n(0,u),n(1,s)}const m=a=>f(a),b=a=>a.completed&&a.selectedStore===s;function r(a,k){a[k].completed=this.checked,n(0,u),n(1,s)}const h=a=>f(a),v=a=>d(a);return e.$$set=a=>{"allTodos"in a&&n(0,u=a.allTodos),"selected"in a&&n(1,s=a.selected)},e.$$.update=()=>{e.$$.dirty&3&&n(4,l=u.filter(a=>a.selectedStore===s).length),e.$$.dirty&3&&n(3,o=u.filter(a=>a.completed&&a.selectedStore===s).length)},[u,s,d,o,l,f,i,g,m,b,r,h,v]}class Ze extends Z{constructor(t){super(),Y(this,t,Ye,Xe,X,{allTodos:0,selected:1,removeFromList:2})}get removeFromList(){return this.$$.ctx[2]}}function xe(e){let t,n,l,o,u,s,f,d;return{c(){t=S("form"),n=S("h2"),n.innerHTML='<label for="todo-0">What needs to be done?</label>',l=C(),o=S("input"),u=C(),s=S("button"),s.textContent="Add",N(o,"type","text"),N(o,"id","todo-0"),N(o,"autocomplete","off"),N(s,"type","submit")},m(i,g){$(i,t,g),y(t,n),y(t,l),y(t,o),le(o,e[0]),y(t,u),y(t,s),f||(d=[j(o,"input",e[4]),j(t,"submit",De(e[1]))],f=!0)},p(i,[g]){g&1&&o.value!==i[0]&&le(o,i[0])},i:M,o:M,d(i){i&&T(t),f=!1,B(d)}}}function et(e,t,n){let{allTodos:l=[]}=t,{selected:o=""}=t,u=0,s="";function f(){s!==""&&(n(2,l=[...l,{id:u,name:s,completed:!1,selectedStore:o}]),n(0,s=""))}function d(){s=this.value,n(0,s)}return e.$$set=i=>{"allTodos"in i&&n(2,l=i.allTodos),"selected"in i&&n(3,o=i.selected)},e.$$.update=()=>{e.$$.dirty&4&&(l.length===0?u=1:u=Math.max(...l.map(i=>i.id))+1)},[s,f,l,o,d]}class tt extends Z{constructor(t){super(),Y(this,t,et,xe,X,{allTodos:2,selected:3})}}function nt(e){let t,n,l,o,u;return{c(){t=S("link"),n=C(),l=S("link"),o=C(),u=S("link"),N(t,"rel","preconnect"),N(t,"href","https://fonts.googleapis.com"),N(l,"rel","preconnect"),N(l,"href","https://fonts.gstatic.com"),N(l,"crossorigin","anonymous"),N(u,"href","https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"),N(u,"rel","stylesheet")},m(s,f){$(s,t,f),$(s,n,f),$(s,l,f),$(s,o,f),$(s,u,f)},p:M,i:M,o:M,d(s){s&&(T(t),T(n),T(l),T(o),T(u))}}}class lt extends Z{constructor(t){super(),Y(this,t,null,nt,X,{})}}function Se(e,t,n){const l=e.slice();return l[5]=t[n],l}function Ee(e){let t;return{c(){t=A("No stores")},m(n,l){$(n,t,l)},d(n){n&&T(t)}}}function Le(e){let t,n,l,o,u=!1,s,f=e[5]+"",d,i,g,m,b;return g=Ge(e[4][0]),{c(){t=S("li"),n=S("input"),s=C(),d=A(f),i=C(),N(n,"type","radio"),n.checked=l=e[1]===e[5],n.__value=o=e[5],le(n,n.__value),g.p(n)},m(r,h){$(r,t,h),y(t,n),n.checked=n.__value===e[1],y(t,s),y(t,d),y(t,i),m||(b=[j(n,"change",e[2]),j(n,"change",e[3])],m=!0)},p(r,h){h&3&&l!==(l=r[1]===r[5])&&(n.checked=l),h&1&&o!==(o=r[5])&&(n.__value=o,le(n,n.__value),u=!0),(u||h&3)&&(n.checked=n.__value===r[1]),h&1&&f!==(f=r[5]+"")&&J(d,f)},d(r){r&&T(t),g.r(),m=!1,B(b)}}}function ot(e){let t,n,l,o=z(e[0]),u=[];for(let f=0;f<o.length;f+=1)u[f]=Le(Se(e,o,f));let s=null;return o.length||(s=Ee()),{c(){t=S("h2"),t.textContent="Store Select",n=C(),l=S("ul");for(let f=0;f<u.length;f+=1)u[f].c();s&&s.c()},m(f,d){$(f,t,d),$(f,n,d),$(f,l,d);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(l,null);s&&s.m(l,null)},p(f,[d]){if(d&7){o=z(f[0]);let i;for(i=0;i<o.length;i+=1){const g=Se(f,o,i);u[i]?u[i].p(g,d):(u[i]=Le(g),u[i].c(),u[i].m(l,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=o.length,o.length?s&&(s.d(1),s=null):s||(s=Ee(),s.c(),s.m(l,null))}},i:M,o:M,d(f){f&&(T(t),T(n),T(l)),Be(u,f),s&&s.d()}}}function it(e,t,n){let{stores:l=[]}=t;l.length===0&&(l=["No Stores"]);let{selected:o=l[0]}=t;function u(d){n(1,o=d.currentTarget.value)}const s=[[]];function f(){o=this.__value,n(1,o)}return e.$$set=d=>{"stores"in d&&n(0,l=d.stores),"selected"in d&&n(1,o=d.selected)},[l,o,u,f,s]}class st extends Z{constructor(t){super(),Y(this,t,it,ot,X,{stores:0,selected:1})}}function ut(e){let t,n,l,o,u,s,f,d,i,g,m,b,r,h,v,a,k,F,E,O;t=new lt({});function D(p){e[3](p)}let L={};e[0]!==void 0&&(L.allTodos=e[0]),s=new Qe({props:L}),I.push(()=>R(s,"allTodos",D));function c(p){e[4](p)}function _(p){e[5](p)}let w={};e[1]!==void 0&&(w.stores=e[1]),e[2]!==void 0&&(w.selected=e[2]),i=new st({props:w}),I.push(()=>R(i,"stores",c)),I.push(()=>R(i,"selected",_));function H(p){e[6](p)}function Ae(p){e[7](p)}let oe={};e[0]!==void 0&&(oe.allTodos=e[0]),e[2]!==void 0&&(oe.selected=e[2]),r=new tt({props:oe}),I.push(()=>R(r,"allTodos",H)),I.push(()=>R(r,"selected",Ae));function Me(p){e[8](p)}function Pe(p){e[9](p)}let ie={};return e[0]!==void 0&&(ie.allTodos=e[0]),e[2]!==void 0&&(ie.selected=e[2]),k=new Ze({props:ie}),I.push(()=>R(k,"allTodos",Me)),I.push(()=>R(k,"selected",Pe)),{c(){ee(t.$$.fragment),n=C(),l=S("main"),o=S("h1"),o.textContent="Grose",u=C(),ee(s.$$.fragment),d=C(),ee(i.$$.fragment),b=C(),ee(r.$$.fragment),a=C(),ee(k.$$.fragment)},m(p,P){V(t,p,P),$(p,n,P),$(p,l,P),y(l,o),y(l,u),V(s,l,null),y(l,d),V(i,l,null),y(l,b),V(r,l,null),y(l,a),V(k,l,null),O=!0},p(p,[P]){const pe={};!f&&P&1&&(f=!0,pe.allTodos=p[0],G(()=>f=!1)),s.$set(pe);const se={};!g&&P&2&&(g=!0,se.stores=p[1],G(()=>g=!1)),!m&&P&4&&(m=!0,se.selected=p[2],G(()=>m=!1)),i.$set(se);const ue={};!h&&P&1&&(h=!0,ue.allTodos=p[0],G(()=>h=!1)),!v&&P&4&&(v=!0,ue.selected=p[2],G(()=>v=!1)),r.$set(ue);const fe={};!F&&P&1&&(F=!0,fe.allTodos=p[0],G(()=>F=!1)),!E&&P&4&&(E=!0,fe.selected=p[2],G(()=>E=!1)),k.$set(fe)},i(p){O||(q(t.$$.fragment,p),q(s.$$.fragment,p),q(i.$$.fragment,p),q(r.$$.fragment,p),q(k.$$.fragment,p),O=!0)},o(p){x(t.$$.fragment,p),x(s.$$.fragment,p),x(i.$$.fragment,p),x(r.$$.fragment,p),x(k.$$.fragment,p),O=!1},d(p){p&&(T(n),T(l)),W(t,p),W(s),W(i),W(r),W(k)}}}function ft(e,t,n){let l=[],o=["Colruyt","Aldi","GB"],u=o[0];function s(r){l=r,n(0,l)}function f(r){o=r,n(1,o)}function d(r){u=r,n(2,u)}function i(r){l=r,n(0,l)}function g(r){u=r,n(2,u)}function m(r){l=r,n(0,l)}function b(r){u=r,n(2,u)}return[l,o,u,s,f,d,i,g,m,b]}class ct extends Z{constructor(t){super(),Y(this,t,ft,ut,X,{})}}new ct({target:document.body});
