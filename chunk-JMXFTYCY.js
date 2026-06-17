import{$ as Wt,A as fi,B as bt,C as Et,D as tt,E as mi,F as gi,G as bi,H as vi,I as yi,J as _i,K as Ce,L as Ci,M as xi,N as vt,O as Mt,P as wi,Q as Ee,R as Be,S as Si,T as Ii,U as Ue,V as Ti,W as Ei,X as Ge,Y as We,Z as Mn,_ as at,a as In,aa as Mi,ba as Di,c as jt,ca as Oi,d as Ye,da as ki,e as st,ea as Vi,f as Le,fa as Qe,g as pe,ga as re,h as Te,ha as Qt,i as Tn,ia as Dn,ja as Kt,ka as On,l as di,la as Fi,ma as Pi,na as kn,o as Tt,oa as Vn,p as ci,pa as Ai,q as ui,qa as lt,r as Ne,ra as yt,s as mt,sa as W,t as qt,ta as Li,u as En,v as Ut,va as Zt,w as Gt,x as gt,y as pi,z as hi}from"./chunk-QTYWWXG4.js";import{$ as Sn,$b as Ht,Ab as qe,Bb as Xe,Cb as D,Db as O,Eb as Ve,Fb as Je,Ga as a,Gb as xe,Hb as Fe,Ib as y,Jb as _,Kb as oe,Lb as Ie,Mb as ii,N as ot,Na as rt,Nb as oi,O as q,Oa as ee,Ob as ri,P as J,Pb as si,Qa as ei,Qb as ai,R as U,Rb as H,Sb as et,T as m,Ta as k,Tb as fe,Ua as te,Ub as Pe,Va as ne,Vb as we,Wa as ue,Xa as S,Xb as Ze,Y as F,Ya as w,Yb as L,Z as P,Zb as Ae,_ as ce,_a as ti,_b as v,a as b,aa as Nt,b as he,c as Kn,cb as V,da as N,db as B,dc as I,ea as $e,eb as z,ec as _e,fb as Rt,fc as li,g as Zn,gb as ni,hb as He,ia as R,ib as je,j as Yn,jb as d,kb as u,la as ge,lb as p,ma as Bt,mb as G,na as C,nb as ht,o as Lt,oa as Ke,ob as ft,p as Xn,pb as ye,qb as le,rb as de,sa as zt,sb as ae,tb as ie,u as Jn,ub as $t,vb as E,xb as c,yb as ve,zb as be}from"./chunk-PZFTNOLO.js";var Yt={search:"",type:"all",bookmarkedOnly:!1};var Ni="qbank.bookmarks",Bi="qbank.theme",Me=class t{http=m(di);_topics=R([]);_loadingTopicId=R(null);_selected=R(null);_filter=R(b({},Yt));_bookmarks=R(this.loadBookmarks());_error=R(null);_isDark=R(this.loadTheme());topicCache=new Map;cheatSheetCache=new Map;topics=this._topics.asReadonly();loadingTopicId=this._loadingTopicId.asReadonly();selected=this._selected.asReadonly();filter=this._filter.asReadonly();error=this._error.asReadonly();isDark=this._isDark.asReadonly();visibleQuestions=L(()=>{let o=this._selected();if(!o)return[];let e=this._topics().find(h=>h.id===o.topicId);if(!e)return[];let n=this.topicCache.get(o.topicId);if(!n)return[];let i=n.subtopics.find(h=>h.subtopicId===o.subtopicId);if(!i)return[];let r=this._filter(),s=this._bookmarks(),l=r.search.toLowerCase().trim();return i.questions.filter(h=>{if(r.bookmarkedOnly&&!s.has(h.id)||r.type!=="all"&&h.type!==r.type)return!1;if(l){let g=h.q.toLowerCase().includes(l),f=h.tags?.some(x=>x.toLowerCase().includes(l))??!1;if(!g&&!f)return!1}return!0}).map(h=>he(b({},h),{topicId:e.id,topicName:e.name,subtopicId:i.subtopicId,subtopicName:i.subtopicName,bookmarked:s.has(h.id)}))});async init(){try{let o=await Lt(this.http.get("assets/data/topics.json"));this._topics.set([...o.topics].sort((e,n)=>e.order-n.order).map(e=>he(b({},e),{loaded:!1,expanded:!1,subtopics:[],questionCount:0})))}catch{this._error.set("Failed to load topics index.")}}async toggleTopic(o){let n=this._topics().find(i=>i.id===o);if(n)if(n.loaded)this._topics.update(i=>i.map(r=>r.id===o?he(b({},r),{expanded:!r.expanded}):r));else{this._loadingTopicId.set(o);try{let i=await Lt(this.http.get(`assets/data/questions/${n.file}`));this.topicCache.set(o,i),this._topics.update(r=>r.map(s=>{if(s.id!==o)return s;let l=i.subtopics.map(h=>({subtopicId:h.subtopicId,subtopicName:h.subtopicName,questionCount:h.questions.length}));return he(b({},s),{loaded:!0,expanded:!0,subtopics:l,questionCount:i.subtopics.reduce((h,g)=>h+g.questions.length,0)})}))}catch{this._error.set(`Failed to load questions for "${n.name}".`)}finally{this._loadingTopicId.set(null)}}}select(o,e){this._selected.set({topicId:o,subtopicId:e}),this._filter.set(b({},Yt))}setFilter(o){this._filter.update(e=>b(b({},e),o))}clearFilter(){this._filter.set(b({},Yt))}isBookmarked(o){return this._bookmarks().has(o)}toggleBookmark(o){this._bookmarks.update(e=>{let n=new Set(e);return n.has(o)?n.delete(o):n.add(o),localStorage.setItem(Ni,JSON.stringify([...n])),n})}async loadCheatSheet(o){if(this.cheatSheetCache.has(o))return this.cheatSheetCache.get(o);try{let e=await Lt(this.http.get(`assets/data/cheatsheets/${o}.md`,{responseType:"text"}));return this.cheatSheetCache.set(o,e),e}catch{return"> Cheat sheet not available for this topic."}}toggleTheme(){let o=!this._isDark();this._isDark.set(o),document.documentElement.setAttribute("data-theme",o?"dark":"light"),localStorage.setItem(Bi,o?"dark":"light")}applyStoredTheme(){let o=this._isDark()?"dark":"light";document.documentElement.setAttribute("data-theme",o)}loadBookmarks(){try{let o=localStorage.getItem(Ni);return new Set(o?JSON.parse(o):[])}catch{return new Set}}loadTheme(){let o=localStorage.getItem(Bi);return o?o==="dark":!0}static \u0275fac=function(e){return new(e||t)};static \u0275prov=q({token:t,factory:t.\u0275fac,providedIn:"root"})};function nt(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[nt(...n)]:Object.entries(n).map(([s,l])=>l?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}var Tr=Object.defineProperty,zi=Object.getOwnPropertySymbols,Er=Object.prototype.hasOwnProperty,Mr=Object.prototype.propertyIsEnumerable,Ri=(t,o,e)=>o in t?Tr(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,$i=(t,o)=>{for(var e in o||(o={}))Er.call(o,e)&&Ri(t,e,o[e]);if(zi)for(var e of zi(o))Mr.call(o,e)&&Ri(t,e,o[e]);return t};function Hi(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Hi(...n)]:Object.entries(n).map(([s,l])=>l?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Dr(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Or({skipUndefined:t=!1},...o){return o?.reduce((e,n={})=>{for(let i in n){let r=n[i];if(!(t&&r===void 0))if(i==="style")e.style=$i($i({},e.style),n.style);else if(i==="class"||i==="className")e[i]=Hi(e[i],n[i]);else if(Dr(r)){let s=e[i];e[i]=s?(...l)=>{s(...l),r(...l)}:r}else e[i]=r}return e},{})}function Fn(...t){return Or({skipUndefined:!1},...t)}var Xt={};function ze(t="pui_id_"){return Object.hasOwn(Xt,t)||(Xt[t]=0),Xt[t]++,`${t}${Xt[t]}`}var ji=(()=>{class t extends W{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Y=new U("PARENT_INSTANCE"),Z=(()=>{class t{document=m(Nt);platformId=m(zt);el=m(Ke);injector=m(Sn);cd=m(Ht);renderer=m(rt);config=m(Li);$parentInstance=m(Y,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=m(ji);baseStyle=m(W);scopedStyleEl;parent=this.$params.parent;cn=nt;_themeScopedListener;themeChangeListenerMap=new Map;dt=v();unstyled=v();pt=v();ptOptions=v();$attrSelector=ze("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=R(void 0);directiveUnstyled=R(void 0);$unstyled=L(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=L(()=>Ut(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>Ut(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||Ut(e,this.$params))}get $style(){return b(b({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){ge(e=>{this.document&&!Tn(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),ge(e=>{this.document&&!Tn(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return ui(e)?e(...n):Fn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",i={}){return pi(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),r?.(...n)}}_load(){yt.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),yt.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ne(e)&&this.baseStyle.load(e,b({name:"global"},this.$styleOptions))}_loadCoreStyles(){!yt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),yt.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!lt.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,b({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,b({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(b({name:"global-style"},this.$styleOptions),r),lt.setLoadedStyleName("common")}if(!lt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,b({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(b({name:`${this.$style?.name}-style`},this.$styleOptions),n),lt.setLoadedStyleName(this.$style?.name)}if(!lt.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,b({name:"layer-order",first:!0},this.$styleOptions)),lt.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,b({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),yt.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),Vn.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Vn.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",i={},r=!0){let s=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:l=!0,mergeProps:h=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},g=r?s?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,f=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,he(b({},i),{global:g||{}})),x=this._getPTDatasets(n);return l||!l&&f?h?this._mergeProps(h,g,f,x):b(b(b({},g),f),x):b(b({},f),x)}_getPTDatasets(e=""){let n="data-pc-",i=e==="root"&&Ne(this.$pt()?.["data-pc-section"]);return e!=="transition"&&he(b({},e==="root"&&he(b({[`${n}name`]:gt(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:gt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:gt(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,i){let r=this._getOptionValue(e,n,i);return Gt(r)||hi(r)?{class:r}:r}_getPT(e,n="",i){let r=(s,l=!1)=>{let h=i?i(s):s,g=gt(n),f=gt(this.$hostName||this.$name);return(l?g!==f?h?.[g]:void 0:h?.[g])??h};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,i,r){let s=l=>n?.call(this,l,i,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:l=!0,mergeProps:h=!1}=e._usept||this.config?.ptOptions()||{},g=s(e.originalValue),f=s(e.value);return g===void 0&&f===void 0?void 0:Gt(f)?f:Gt(g)?g:l||!l&&f?h?this._mergeProps(h,g,f):b(b({},g),f):f}return s(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,b(b({},this.$params),n))}ptms(e,n={}){return e.reduce((i,r)=>(i=Fn(i,this.ptm(r,n))||{},i),{})}ptmo(e={},n="",i={}){return this._getPTValue(e,n,b({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:nt(this._getOptionValue(this.$style.classes,e,b(b({},this.$params),n)))}sx(e="",n=!0,i={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,b(b({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,b(b({},this.$params),i));return b(b({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[H([ji,W]),Bt]})}return t})();var T=(()=>{class t{el;renderer;pBind=v(void 0);_attrs=R(void 0);attrs=L(()=>this._attrs()||this.pBind());styles=L(()=>this.attrs()?.style);classes=L(()=>nt(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,ge(()=>{let l=this.attrs()||{},{style:i,class:r}=l,s=Kn(l,["style","class"]);for(let[h,g]of Object.entries(s))if(h.startsWith("on")&&typeof g=="function"){let f=h.slice(2).toLowerCase();if(!this.listeners.some(x=>x.eventName===f)){let x=this.renderer.listen(this.el.nativeElement,f,g);this.listeners.push({eventName:f,unlisten:x})}}else g==null?this.renderer.removeAttribute(this.el.nativeElement,h):(this.renderer.setAttribute(this.el.nativeElement,h,g.toString()),h in this.el.nativeElement&&(this.el.nativeElement[h]=g))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){qt(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(ee(Ke),ee(rt))};static \u0275dir=ne({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(Fe(i.styles()),y(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),Se=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({})}return t})();var qi=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var kr={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ui=(()=>{class t extends W{name="progressspinner";style=qi;classes=kr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var Gi=new U("PROGRESSSPINNER_INSTANCE"),Dt=(()=>{class t extends Z{componentName="ProgressSpinner";$pcProgressSpinner=m(Gi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(T,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=m(Ui);static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(n,i){n&2&&(V("aria-label",i.ariaLabel)("role","progressbar")("aria-busy",!0),y(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[H([Ui,{provide:Gi,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(n,i){n&1&&(ce(),u(0,"svg",0),G(1,"circle",1),p()),n&2&&(y(i.cx("spin")),Je("animation-duration",i.animationDuration),d("pBind",i.ptm("spin")),a(),y(i.cx("circle")),d("pBind",i.ptm("circle")),V("fill",i.fill)("stroke-width",i.strokeWidth))},dependencies:[pe,re,T],encapsulation:2,changeDetection:0})}return t})(),Jt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({imports:[Dt,re,re]})}return t})();var Vr=(t,o)=>o.id,Fr=(t,o)=>o.subtopicId;function Pr(t,o){t&1&&G(0,"p-progressSpinner",10)}function Ar(t,o){if(t&1&&(u(0,"span",11),_(1),p()),t&2){let e=c().$implicit;a(),oe(e.questionCount)}}function Lr(t,o){t&1&&(u(0,"span",12),_(1,"\u2014"),p())}function Nr(t,o){if(t&1){let e=ie();u(0,"li")(1,"button",14),E("click",function(){let i=F(e).$implicit,r=c(2).$implicit,s=c();return P(s.onSubtopicClick(r.id,i.subtopicId))}),u(2,"span",15),_(3,"\u2022"),p(),u(4,"span",16),_(5),p(),u(6,"span",11),_(7),p()()()}if(t&2){let e=o.$implicit,n=c(2).$implicit,i=c();a(),xe("active",i.isActive(n.id,e.subtopicId)),a(4),oe(e.subtopicName),a(2),oe(e.questionCount)}}function Br(t,o){if(t&1&&(u(0,"ul",13),He(1,Nr,8,4,"li",null,Fr),p()),t&2){let e=c().$implicit;a(),je(e.subtopics)}}function zr(t,o){if(t&1){let e=ie();u(0,"li",5)(1,"button",6),E("click",function(){let i=F(e).$implicit,r=c();return P(r.onTopicClick(i.id))}),u(2,"span",7),_(3),p(),u(4,"span",8),_(5),p(),u(6,"span",9),_(7),p(),B(8,Pr,1,0,"p-progressSpinner",10)(9,Ar,2,1,"span",11)(10,Lr,2,0,"span",12),p(),B(11,Br,3,0,"ul",13),p()}if(t&2){let e=o.$implicit,n=c();a(),xe("expanded",e.expanded),V("aria-expanded",e.expanded),a(2),oe(e.expanded?"\u25BE":"\u25B8"),a(2),oe(e.icon),a(2),oe(e.name),a(),z(n.loadingTopicId()===e.id?8:e.loaded?9:10),a(3),z(e.expanded&&e.loaded?11:-1)}}var en=class t{closed=Ae();svc=m(Me);topics=this.svc.topics;loadingTopicId=this.svc.loadingTopicId;selected=this.svc.selected;onTopicClick(o){this.svc.toggleTopic(o)}onSubtopicClick(o,e){this.svc.select(o,e),this.closed.emit()}isActive(o,e){let n=this.selected();return n?.topicId===o&&n?.subtopicId===e}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["qb-topic-sidebar"]],outputs:{closed:"closed"},decls:9,vars:1,consts:[[1,"sidebar"],[1,"sidebar-header"],[1,"sidebar-title"],[1,"topic-count"],[1,"topic-list"],[1,"topic-item"],[1,"topic-row",3,"click"],[1,"caret"],[1,"topic-icon"],[1,"topic-name"],["styleClass","sidebar-spinner","strokeWidth","4","animationDuration",".8s"],[1,"q-count"],[1,"q-count","muted"],[1,"subtopic-list"],[1,"subtopic-row",3,"click"],[1,"sub-dot"],[1,"sub-name"]],template:function(e,n){e&1&&(u(0,"nav",0)(1,"div",1)(2,"span",2),_(3,"Topics"),p(),u(4,"span",3),_(5),p()(),u(6,"ul",4),He(7,zr,12,8,"li",5,Vr),p()()),e&2&&(a(5),Ie("",n.topics().length," topics"),a(2),je(n.topics()))},dependencies:[Jt,Dt],styles:[".sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:var(--sidebar-bg);border-right:1px solid var(--border);overflow-y:auto}.sidebar-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 12px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--sidebar-bg);z-index:1}.sidebar-title[_ngcontent-%COMP%]{font-weight:700;font-size:.8em;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted)}.topic-count[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:2px 7px;border-radius:10px}.topic-list[_ngcontent-%COMP%]{list-style:none;padding:8px 0;flex:1}.topic-item[_ngcontent-%COMP%]{width:100%}.topic-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:8px 14px;background:none;border:none;color:var(--text);cursor:pointer;text-align:left;font-size:.92em;font-weight:500;transition:background .12s ease;border-radius:0}.topic-row[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.topic-row.expanded[_ngcontent-%COMP%]{color:var(--accent)}.caret[_ngcontent-%COMP%]{font-size:.7em;color:var(--text-muted);width:10px;flex-shrink:0}.topic-icon[_ngcontent-%COMP%]{font-size:1em;flex-shrink:0}.topic-name[_ngcontent-%COMP%]{flex:1}.q-count[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:1px 6px;border-radius:10px;min-width:22px;text-align:center;flex-shrink:0}.q-count.muted[_ngcontent-%COMP%]{opacity:.5}  .sidebar-spinner{width:14px!important;height:14px!important}  .sidebar-spinner .p-progressspinner-circle{stroke:var(--accent)!important}.subtopic-list[_ngcontent-%COMP%]{list-style:none;padding:2px 0 4px}.subtopic-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 14px 6px 30px;background:none;border:none;color:var(--text-muted);cursor:pointer;text-align:left;font-size:.875em;transition:background .12s ease,color .12s ease}.subtopic-row[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--text)}.subtopic-row.active[_ngcontent-%COMP%]{color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,transparent);font-weight:600}.subtopic-row.active[_ngcontent-%COMP%]   .sub-dot[_ngcontent-%COMP%]{color:var(--accent)}.sub-dot[_ngcontent-%COMP%]{font-size:.8em;flex-shrink:0}.sub-name[_ngcontent-%COMP%]{flex:1}"],changeDetection:0})};var to=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(ee(rt),ee(Ke))};static \u0275dir=ne({type:t})}return t})(),Rr=(()=>{class t extends to{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=ne({type:t,features:[S]})}return t})(),xt=new U("");var $r={provide:xt,useExisting:ot(()=>an),multi:!0};function Hr(){let t=In()?In().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var jr=new U(""),an=(()=>{class t extends to{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Hr())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(ee(rt),ee(Ke),ee(jr,8))};static \u0275dir=ne({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&E("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[H([$r]),S]})}return t})();var qr=new U(""),Ur=new U("");function no(t){return t!=null}function io(t){return ti(t)?Yn(t):t}function oo(t){let o={};return t.forEach(e=>{o=e!=null?b(b({},o),e):o}),Object.keys(o).length===0?null:o}function ro(t,o){return o.map(e=>e(t))}function Gr(t){return!t.validate}function so(t){return t.map(o=>Gr(o)?o:e=>o.validate(e))}function Wr(t){if(!t)return null;let o=t.filter(no);return o.length==0?null:function(e){return oo(ro(e,o))}}function ao(t){return t!=null?Wr(so(t)):null}function Qr(t){if(!t)return null;let o=t.filter(no);return o.length==0?null:function(e){let n=ro(e,o).map(io);return Jn(n).pipe(Xn(oo))}}function lo(t){return t!=null?Qr(so(t)):null}function Qi(t,o){return t===null?[o]:Array.isArray(t)?[...t,o]:[t,o]}function Kr(t){return t._rawValidators}function Zr(t){return t._rawAsyncValidators}function Pn(t){return t?Array.isArray(t)?t:[t]:[]}function on(t,o){return Array.isArray(t)?t.includes(o):t===o}function Ki(t,o){let e=Pn(o);return Pn(t).forEach(i=>{on(e,i)||e.push(i)}),e}function Zi(t,o){return Pn(o).filter(e=>!on(t,e))}var rn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=ao(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=lo(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control?.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},An=class extends rn{name;get formDirective(){return null}get path(){return null}},dt=class extends rn{_parent=null;name=null;valueAccessor=null},Ln=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var co=(()=>{class t extends Ln{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(ee(dt,2))};static \u0275dir=ne({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&xe("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[S]})}return t})();var Ot="VALID",nn="INVALID",_t="PENDING",kt="DISABLED",ct=class{},sn=class extends ct{value;source;constructor(o,e){super(),this.value=o,this.source=e}},Vt=class extends ct{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},Ft=class extends ct{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},Ct=class extends ct{status;source;constructor(o,e){super(),this.status=o,this.source=e}};var Nn=class extends ct{source;constructor(o){super(),this.source=o}};function Yr(t){return(ln(t)?t.validators:t)||null}function Xr(t){return Array.isArray(t)?ao(t):t||null}function Jr(t,o){return(ln(o)?o.asyncValidators:t)||null}function es(t){return Array.isArray(t)?lo(t):t||null}function ln(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Bn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Ze(this.statusReactive)}set status(o){Ze(()=>this.statusReactive.set(o))}_status=L(()=>this.statusReactive());statusReactive=R(void 0);get valid(){return this.status===Ot}get invalid(){return this.status===nn}get pending(){return this.status===_t}get disabled(){return this.status===kt}get enabled(){return this.status!==kt}errors;get pristine(){return Ze(this.pristineReactive)}set pristine(o){Ze(()=>this.pristineReactive.set(o))}_pristine=L(()=>this.pristineReactive());pristineReactive=R(!0);get dirty(){return!this.pristine}get touched(){return Ze(this.touchedReactive)}set touched(o){Ze(()=>this.touchedReactive.set(o))}_touched=L(()=>this.touchedReactive());touchedReactive=R(!1);get untouched(){return!this.touched}_events=new Zn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(Ki(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Ki(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Zi(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Zi(o,this._rawAsyncValidators))}hasValidator(o){return on(this._rawValidators,o)}hasAsyncValidator(o){return on(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;o.onlySelf||this._parent?.markAsTouched(he(b({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new Ft(!0,n))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),o.onlySelf||this._parent?._updateTouched(o,n),e&&o.emitEvent!==!1&&this._events.next(new Ft(!1,n))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;o.onlySelf||this._parent?.markAsDirty(he(b({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new Vt(!1,n))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),o.onlySelf||this._parent?._updatePristine(o,n),e&&o.emitEvent!==!1&&this._events.next(new Vt(!0,n))}markAsPending(o={}){this.status=_t;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Ct(this.status,e)),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.markAsPending(he(b({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=kt,this.errors=null,this._forEachChild(i=>{i.disable(he(b({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new sn(this.value,n)),this._events.next(new Ct(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(he(b({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Ot,this._forEachChild(n=>{n.enable(he(b({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(he(b({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,e){o.onlySelf||(this._parent?.updateValueAndValidity(o),o.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ot||this.status===_t)&&this._runAsyncValidator(n,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new sn(this.value,e)),this._events.next(new Ct(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.updateValueAndValidity(he(b({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?kt:Ot}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=_t,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:o!==!1};let n=io(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(o,e){let n=e?this.get(e):this;return n?.errors?n.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new Ct(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,n)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?kt:this.errors?nn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_t)?_t:this._anyControlsHaveStatus(nn)?nn:Ot}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,o.onlySelf||this._parent?._updatePristine(o,e),i&&this._events.next(new Vt(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ft(this.touched,e)),o.onlySelf||this._parent?._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){ln(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=Xr(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=es(this._rawAsyncValidators)}};var uo=new U("",{factory:()=>zn}),zn="always";function ts(t,o){return[...o.path,t]}function ns(t,o,e=zn){os(t,o),o.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(t.disabled),rs(t,o),as(t,o),ss(t,o),is(t,o)}function Yi(t,o){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function is(t,o){if(o.valueAccessor.setDisabledState){let e=n=>{o.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),o._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function os(t,o){let e=Kr(t);o.validator!==null?t.setValidators(Qi(e,o.validator)):typeof e=="function"&&t.setValidators([e]);let n=Zr(t);o.asyncValidator!==null?t.setAsyncValidators(Qi(n,o.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Yi(o._rawValidators,i),Yi(o._rawAsyncValidators,i)}function rs(t,o){o.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&po(t,o)})}function ss(t,o){o.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&po(t,o),t.updateOn!=="submit"&&t.markAsTouched()})}function po(t,o){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function as(t,o){let e=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};t.registerOnChange(e),o._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function ls(t,o){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function ds(t){return Object.getPrototypeOf(t.constructor)===Rr}function cs(t,o){if(!o)return null;Array.isArray(o);let e,n,i;return o.forEach(r=>{r.constructor===an?e=r:ds(r)?n=r:i=r}),i||n||e||null}function Xi(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function Ji(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var us=class extends Bn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,n){super(Yr(e),Jr(n,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ln(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ji(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Nn(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Xi(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Xi(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){Ji(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var ps={provide:dt,useExisting:ot(()=>Rn)},eo=Promise.resolve(),Rn=(()=>{class t extends dt{_changeDetectorRef;callSetDisabledState;control=new us;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new N;constructor(e,n,i,r,s,l){super(),this._changeDetectorRef=s,this.callSetDisabledState=l,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=cs(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ls(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ns(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){eo.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,i=n!==0&&I(n);eo.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ts(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(ee(An,9),ee(qr,10),ee(Ur,10),ee(xt,10),ee(Ht,8),ee(uo,8))};static \u0275dir=ne({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[H([ps]),S,Bt]})}return t})();var hs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({})}return t})();var ho=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:uo,useValue:e.callSetDisabledState??zn}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({imports:[hs]})}return t})();var dn=(()=>{class t extends Z{modelValue=R(void 0);$filled=L(()=>Ne(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=ne({type:t,features:[S]})}return t})();var ms=["*"],gs={root:"p-fluid"},fo=(()=>{class t extends W{name="fluid";classes=gs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var mo=new U("FLUID_INSTANCE"),wt=(()=>{class t extends Z{componentName="Fluid";$pcFluid=m(mo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=m(fo);static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&y(i.cx("root"))},features:[H([fo,{provide:mo,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],ngContentSelectors:ms,decls:1,vars:0,template:function(n,i){n&1&&(ve(),be(0))},dependencies:[pe],encapsulation:2,changeDetection:0})}return t})();var go=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var bs=`
    ${go}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,vs={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},bo=(()=>{class t extends W{name="inputtext";style=bs;classes=vs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var vo=new U("INPUTTEXT_INSTANCE"),cn=(()=>{class t extends dn{componentName="InputText";hostName="";ptInputText=v();pInputTextPT=v();pInputTextUnstyled=v();bindDirectiveInstance=m(T,{self:!0});$pcInputText=m(vo,{optional:!0,skipSelf:!0})??void 0;ngControl=m(dt,{optional:!0,self:!0});pcFluid=m(wt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=v();fluid=v(void 0,{transform:I});invalid=v(void 0,{transform:I});$variant=L(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=m(bo);constructor(){super(),ge(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),ge(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&E("input",function(){return i.onInput()}),n&2&&(V("data-p",i.dataP),y(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[H([bo,{provide:vo,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S]})}return t})(),yo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({})}return t})();var $n=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=me=>{if(me)return getComputedStyle(me).getPropertyValue("position")==="relative"?me:r(me.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,h=n.getBoundingClientRect(),g=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),x=this.getViewport(),A=r(e)?.getBoundingClientRect()||{top:-1*g,left:-1*f},j,se,$="top";h.top+l+s.height>x.height?(j=h.top-A.top-s.height,$="bottom",h.top+j<0&&(j=-1*h.top)):(j=l+h.top-A.top,$="top");let Q=h.left+s.width-x.width,X=h.left-A.left;if(s.width>x.width?se=(h.left-A.left)*-1:Q>0?se=X-Q:se=h.left-A.left,e.style.top=j+"px",e.style.left=se+"px",e.style.transformOrigin=$,i){let me=gi(/-anchor-gutter$/)?.value;e.style.marginTop=$==="bottom"?`calc(${me??"2px"} * -1)`:me??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,l=r.width,h=n.offsetHeight,g=n.offsetWidth,f=n.getBoundingClientRect(),x=this.getWindowScrollTop(),M=this.getWindowScrollLeft(),A=this.getViewport(),j,se;f.top+h+s>A.height?(j=f.top+x-s,e.style.transformOrigin="bottom",j<0&&(j=x)):(j=h+f.top+x,e.style.transformOrigin="top"),f.left+l>A.width?se=Math.max(0,f.left+M+g-l):se=f.left+M,e.style.top=j+"px",e.style.left=se+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=l=>{let h=window.getComputedStyle(l,null);return r.test(h.getPropertyValue("overflow"))||r.test(h.getPropertyValue("overflowX"))||r.test(h.getPropertyValue("overflowY"))};for(let l of i){let h=l.nodeType===1&&l.dataset.scrollselectors;if(h){let g=h.split(",");for(let f of g){let x=this.findSingle(l,f);x&&s(x)&&n.push(x)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,h=e.getBoundingClientRect(),f=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-r-l,x=e.scrollTop,M=e.clientHeight,A=this.getOuterHeight(n);f<0?e.scrollTop=x+f:f+A>M&&(e.scrollTop=x+f-M+A)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,l=r/s;let h=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(h)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,l=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let l=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((h,g)=>{if(g!=null){let f=typeof g;if(f==="string"||f==="number")h.push(g);else if(f==="object"){let x=Array.isArray(g)?i(r,g):Object.entries(g).map(([M,A])=>r==="style"&&(A||A===0)?`${M.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${A}`:A?M:void 0);h=x.length?h.concat(x.filter(M=>!!M)):h}}return h},l)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let l=r.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function _o(){mi({variableName:Ai("scrollbar.width").name})}var St=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=$n.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var It=(()=>{class t extends Z{autofocus=!1;focused=!1;platformId=m(zt);document=m(Nt);host=m(Ke);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Te(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=$n.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=ne({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[S]})}return t})();var un=(()=>{class t extends dn{required=v(void 0,{transform:I});invalid=v(void 0,{transform:I});disabled=v(void 0,{transform:I});name=v();_disabled=R(!1);$disabled=L(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=ne({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[S]})}return t})();var Co=(()=>{class t extends un{pcFluid=m(wt,{optional:!0,host:!0,skipSelf:!0});fluid=v(void 0,{transform:I});variant=v();size=v();inputSize=v();pattern=v();min=v();max=v();step=v();minlength=v();maxlength=v();$variant=L(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=ne({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[S]})}return t})();var xo=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var _s=["*"],Cs={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},wo=(()=>{class t extends W{name="iconfield";style=xo;classes=Cs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var So=new U("ICONFIELD_INSTANCE"),Io=(()=>{class t extends Z{componentName="IconField";hostName="";_componentStyle=m(wo);$pcIconField=m(So,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,i){n&2&&y(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[H([wo,{provide:So,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],ngContentSelectors:_s,decls:1,vars:0,template:function(n,i){n&1&&(ve(),be(0))},dependencies:[pe,Se],encapsulation:2,changeDetection:0})}return t})();var xs=["*"],ws=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,To=(()=>{class t extends W{name="baseicon";css=ws;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Oe=(()=>{class t extends Z{spin=!1;_componentStyle=m(To);getClassNames(){return nt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&y(i.getClassNames())},inputs:{spin:[2,"spin","spin",I]},features:[H([To]),S],ngContentSelectors:xs,decls:1,vars:0,template:function(n,i){n&1&&(ve(),be(0))},encapsulation:2,changeDetection:0})}return t})();var Ss=["data-p-icon","blank"],Eo=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","blank"]],features:[S],attrs:Ss,decls:1,vars:0,consts:[["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(n,i){n&1&&(ce(),ye(0,"rect",0))},encapsulation:2})}return t})();var Is=["data-p-icon","check"],Mo=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","check"]],features:[S],attrs:Is,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,i){n&1&&(ce(),ye(0,"path",0))},encapsulation:2})}return t})();var Ts=["data-p-icon","chevron-down"],Do=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[S],attrs:Ts,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,i){n&1&&(ce(),ye(0,"path",0))},encapsulation:2})}return t})();var Es=["data-p-icon","search"],Oo=(()=>{class t extends Oe{pathId;onInit(){this.pathId="url(#"+ze()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","search"]],features:[S],attrs:Es,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ce(),ht(0,"g"),ye(1,"path",0),ft(),ht(2,"defs")(3,"clipPath",1),ye(4,"rect",2),ft()()),n&2&&(V("clip-path",i.pathId),a(3),$t("id",i.pathId))},encapsulation:2})}return t})();var Ms=["data-p-icon","spinner"],pn=(()=>{class t extends Oe{pathId;onInit(){this.pathId="url(#"+ze()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","spinner"]],features:[S],attrs:Ms,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ce(),ht(0,"g"),ye(1,"path",0),ft(),ht(2,"defs")(3,"clipPath",1),ye(4,"rect",2),ft()()),n&2&&(V("clip-path",i.pathId),a(3),$t("id",i.pathId))},encapsulation:2})}return t})();var Ds=["data-p-icon","times"],ko=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","times"]],features:[S],attrs:Ds,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(ce(),ye(0,"path",0))},encapsulation:2})}return t})();var Os=["*"],ks={root:"p-inputicon"},Vo=(()=>{class t extends W{name="inputicon";classes=ks;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),Fo=new U("INPUTICON_INSTANCE"),Po=(()=>{class t extends Z{componentName="InputIcon";hostName="";styleClass;_componentStyle=m(Vo);$pcInputIcon=m(Fo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,i){n&2&&y(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[H([Vo,{provide:Fo,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],ngContentSelectors:Os,decls:1,vars:0,template:function(n,i){n&1&&(ve(),be(0))},dependencies:[pe,re,Se],encapsulation:2,changeDetection:0})}return t})();var Vs=Object.defineProperty,Ao=Object.getOwnPropertySymbols,Fs=Object.prototype.hasOwnProperty,Ps=Object.prototype.propertyIsEnumerable,Lo=(t,o,e)=>o in t?Vs(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,No=(t,o)=>{for(var e in o||(o={}))Fs.call(o,e)&&Lo(t,e,o[e]);if(Ao)for(var e of Ao(o))Ps.call(o,e)&&Lo(t,e,o[e]);return t},As=(t,o,e)=>new Promise((n,i)=>{var r=h=>{try{l(e.next(h))}catch(g){i(g)}},s=h=>{try{l(e.throw(h))}catch(g){i(g)}},l=h=>h.done?n(h.value):Promise.resolve(h.value).then(r,s);l((e=e.apply(t,o)).next())}),hn="animation",Pt="transition";function Ls(t){return t?t.disabled||!!(t.safe&&Pi()):!1}function Ns(t,o){return t?No(No({},t),Object.entries(o).reduce((e,[n,i])=>{var r;return e[n]=(r=t[n])!=null?r:i,e},{})):o}function Bs(t){let{name:o,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${o}-enter-from`,to:e?.to||`${o}-enter-to`,active:e?.active||`${o}-enter-active`},leave:{from:n?.from||`${o}-leave-from`,to:n?.to||`${o}-leave-to`,active:n?.active||`${o}-leave-active`}}}function zs(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function Rs(t,o){let e=window.getComputedStyle(t),n=A=>{let j=e[`${A}Delay`],se=e[`${A}Duration`];return[j.split(", ").map(Dn),se.split(", ").map(Dn)]},[i,r]=n(Pt),[s,l]=n(hn),h=Math.max(...r.map((A,j)=>A+i[j])),g=Math.max(...l.map((A,j)=>A+s[j])),f,x=0,M=0;return o===Pt?h>0&&(f=Pt,x=h,M=r.length):o===hn?g>0&&(f=hn,x=g,M=l.length):(x=Math.max(h,g),f=x>0?h>g?Pt:hn:void 0,M=f?f===Pt?r.length:l.length:0),{type:f,timeout:x,count:M}}function Hn(t,o){return typeof t=="number"?t:typeof t=="object"&&t[o]!=null?t[o]:null}function $s(t,o=!0,e=!1){if(!o&&!e)return;let n=Fi(t);o&&kn(t,"--pui-motion-height",n.height+"px"),e&&kn(t,"--pui-motion-width",n.width+"px")}var Hs={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function Bo(t,o){if(!t)throw new Error("Element is required.");let e={},n=!1,i={},r=null,s={},l=f=>{if(Object.assign(e,Ns(f,Hs)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");s=zs(e),n=Ls(e),i=Bs(e),r=null},h=f=>As(null,null,function*(){r?.();let{onBefore:x,onStart:M,onAfter:A,onCancelled:j}=s[f]||{},se={element:t};if(n){x?.(se),M?.(se),A?.(se);return}let{from:$,active:Q,to:X}=i[f]||{};return $s(t,e.autoHeight,e.autoWidth),x?.(se),Kt(t,$),Kt(t,Q),t.offsetHeight,On(t,$),Kt(t,X),M?.(se),new Promise(me=>{let ke=Hn(e.duration,f),Re=()=>{On(t,[X,Q]),r=null},pt=()=>{Re(),A?.(se),me()};r=()=>{Re(),j?.(se),me()},qs(t,e.type,ke,pt)})});l(o);let g={enter:()=>e.enter?h("enter"):Promise.resolve(),leave:()=>e.leave?h("leave"):Promise.resolve(),cancel:()=>{r?.(),r=null},update:(f,x)=>{if(!f)throw new Error("Element is required.");t=f,g.cancel(),l(x)}};return e.appear&&g.enter(),g}var js=0;function qs(t,o,e,n){let i=t._motionEndId=++js,r=()=>{i===t._motionEndId&&n()};if(e!=null)return setTimeout(r,e);let{type:s,timeout:l,count:h}=Rs(t,o);if(!s){n();return}let g=s+"end",f=0,x=()=>{t.removeEventListener(g,M,!0),r()},M=A=>{A.target===t&&++f>=h&&x()};t.addEventListener(g,M,{capture:!0,once:!0}),setTimeout(()=>{f<h&&x()},l+1)}var Us=["*"];function Gs(t,o){t&1&&be(0)}var fn=new WeakMap;function jn(t,o){if(t)switch(fn.has(t)||fn.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight,overflow:t.style.overflow}),o){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0",t.style.overflow="hidden";break}}function zo(t,o){if(!t)return;let e=fn.get(t)??t.style;switch(o){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"",t.style.overflow=e?.overflow||"";break}fn.delete(t)}var Ws=`
    .p-motion {
        display: block;
    }
`,Qs={root:"p-motion"},Ro=(()=>{class t extends W{name="motion";style=Ws;classes=Qs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var $o=new U("MOTION_INSTANCE"),qn=(()=>{class t extends Z{$pcMotion=m($o,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(T,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(b(b({},this.ptms(["host","root"])),n))}_componentStyle=m(Ro);visible=v(!1);mountOnEnter=v(!0);unmountOnLeave=v(!0);name=v(void 0);type=v(void 0);safe=v(void 0);disabled=v(!1);appear=v(!1);enter=v(!0);leave=v(!0);duration=v(void 0);hideStrategy=v("display");enterFromClass=v(void 0);enterToClass=v(void 0);enterActiveClass=v(void 0);leaveFromClass=v(void 0);leaveToClass=v(void 0);leaveActiveClass=v(void 0);options=v({});onBeforeEnter=Ae();onEnter=Ae();onAfterEnter=Ae();onEnterCancelled=Ae();onBeforeLeave=Ae();onLeave=Ae();onAfterLeave=Ae();onLeaveCancelled=Ae();motionOptions=L(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=R(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),ge(()=>{let e=this.hideStrategy();this.isInitialMount?(jn(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(jn(this.$el,e),this.rendered.set(!0))}),ge(()=>{this.motion||(this.motion=Bo(this.$el,this.motionOptions()))}),li(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await Wt(),zo(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount||(await Wt(),this.applyMotionDuration("leave"),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(jn(this.$el,n),this.unmountOnLeave()&&(await Wt(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(e){let n=Ze(this.motionOptions),i=Hn(n.duration,e);if(i==null||!this.$el)return;let r=this.$el,s=`${i}ms`;n.type==="transition"?r.style.transitionDuration=s:r.style.animationDuration=s}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,zo(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,i){n&2&&y(i.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[H([Ro,{provide:$o,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],ngContentSelectors:Us,decls:1,vars:1,template:function(n,i){n&1&&(ve(),B(0,Gs,1,0)),n&2&&z(i.rendered()?0:-1)},dependencies:[pe,Se],encapsulation:2})}return t})();var Ho=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({imports:[qn]})}return t})();var ut=class t{static isArray(o,e=!0){return Array.isArray(o)&&(e||o.length!==0)}static isObject(o,e=!0){return typeof o=="object"&&!Array.isArray(o)&&o!=null&&(e||Object.keys(o).length!==0)}static equals(o,e,n){return n?this.resolveFieldData(o,n)===this.resolveFieldData(e,n):this.equalsByValue(o,e)}static equalsByValue(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var n=Array.isArray(o),i=Array.isArray(e),r,s,l;if(n&&i){if(s=o.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(o[r],e[r]))return!1;return!0}if(n!=i)return!1;var h=this.isDate(o),g=this.isDate(e);if(h!=g)return!1;if(h&&g)return o.getTime()==e.getTime();var f=o instanceof RegExp,x=e instanceof RegExp;if(f!=x)return!1;if(f&&x)return o.toString()==e.toString();var M=Object.keys(o);if(s=M.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,M[r]))return!1;for(r=s;r--!==0;)if(l=M[r],!this.equalsByValue(o[l],e[l]))return!1;return!0}return o!==o&&e!==e}static resolveFieldData(o,e){if(o&&e){if(this.isFunction(e))return e(o);if(e.indexOf(".")==-1)return o[e];{let n=e.split("."),i=o;for(let r=0,s=n.length;r<s;++r){if(i==null)return null;i=i[n[r]]}return i}}else return null}static isFunction(o){return!!(o&&o.constructor&&o.call&&o.apply)}static reorderArray(o,e,n){let i;o&&e!==n&&(n>=o.length&&(n%=o.length,e%=o.length),o.splice(n,0,o.splice(e,1)[0]))}static insertIntoOrderedArray(o,e,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],i)>e){n.splice(s,0,o),r=!0;break}r||n.push(o)}else n.push(o)}static findIndexInList(o,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]==o){n=i;break}}return n}static contains(o,e){if(o!=null&&e&&e.length){for(let n of e)if(this.equals(o,n))return!0}return!1}static removeAccents(o){return o&&(o=o.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),o}static isDate(o){return Object.prototype.toString.call(o)==="[object Date]"}static isEmpty(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!this.isDate(o)&&typeof o=="object"&&Object.keys(o).length===0}static isNotEmpty(o){return!this.isEmpty(o)}static compare(o,e,n,i=1){let r=-1,s=this.isEmpty(o),l=this.isEmpty(e);return s&&l?r=0:s?r=i:l?r=-i:typeof o=="string"&&typeof e=="string"?r=o.localeCompare(e,n,{numeric:!0}):r=o<e?-1:o>e?1:0,r}static sort(o,e,n=1,i,r=1){let s=t.compare(o,e,i,n),l=n;return(t.isEmpty(o)||t.isEmpty(e))&&(l=r===1?n:r),l*s}static merge(o,e){if(!(o==null&&e==null)){{if((o==null||typeof o=="object")&&(e==null||typeof e=="object"))return b(b({},o||{}),e||{});if((o==null||typeof o=="string")&&(e==null||typeof e=="string"))return[o||"",e||""].join(" ")}return e||o}}static isPrintableCharacter(o=""){return this.isNotEmpty(o)&&o.length===1&&o.match(/\S| /)}static getItemValue(o,...e){return this.isFunction(o)?o(...e):o}static findLastIndex(o,e){let n=-1;if(this.isNotEmpty(o))try{n=o.findLastIndex(e)}catch{n=o.lastIndexOf([...o].reverse().find(e))}return n}static findLast(o,e){let n;if(this.isNotEmpty(o))try{n=o.findLast(e)}catch{n=[...o].reverse().find(e)}return n}static deepEquals(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var n=Array.isArray(o),i=Array.isArray(e),r,s,l;if(n&&i){if(s=o.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(o[r],e[r]))return!1;return!0}if(n!=i)return!1;var h=o instanceof Date,g=e instanceof Date;if(h!=g)return!1;if(h&&g)return o.getTime()==e.getTime();var f=o instanceof RegExp,x=e instanceof RegExp;if(f!=x)return!1;if(f&&x)return o.toString()==e.toString();var M=Object.keys(o);if(s=M.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,M[r]))return!1;for(r=s;r--!==0;)if(l=M[r],!this.deepEquals(o[l],e[l]))return!1;return!0}return o!==o&&e!==e}static minifyCSS(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(o){return this.isString(o)?o.replace(/(-|_)/g,"").toLowerCase():o}static isString(o,e=!0){return typeof o=="string"&&(e||o!=="")}};function Zs(){let t=[],o=(r,s)=>{let l=t.length>0?t[t.length-1]:{key:r,value:s},h=l.value+(l.key===r?0:s)+2;return t.push({key:r,value:h}),h},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,l)=>{s&&(s.style.zIndex=String(o(r,l)))},clear:r=>{r&&(e(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:e}}var it=Zs();var jo=["content"],Xs=["overlay"],qo=["*","*"],Js=()=>({mode:null}),Wo=t=>({$implicit:t}),ea=t=>({mode:t});function ta(t,o){t&1&&ae(0)}function na(t,o){if(t&1&&(be(0),w(1,ta,1,0,"ng-container",3)),t&2){let e=c();a(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",fe(3,Wo,et(2,Js)))}}function ia(t,o){t&1&&ae(0)}function oa(t,o){if(t&1){let e=ie();u(0,"div",5,0),E("click",function(){F(e);let i=c(2);return P(i.onOverlayClick())}),u(2,"p-motion",6),E("onBeforeEnter",function(i){F(e);let r=c(2);return P(r.onOverlayBeforeEnter(i))})("onEnter",function(i){F(e);let r=c(2);return P(r.onOverlayEnter(i))})("onAfterEnter",function(i){F(e);let r=c(2);return P(r.onOverlayAfterEnter(i))})("onBeforeLeave",function(i){F(e);let r=c(2);return P(r.onOverlayBeforeLeave(i))})("onLeave",function(i){F(e);let r=c(2);return P(r.onOverlayLeave(i))})("onAfterLeave",function(i){F(e);let r=c(2);return P(r.onOverlayAfterLeave(i))}),u(3,"div",5,1),E("click",function(i){F(e);let r=c(2);return P(r.onOverlayContentClick(i))}),be(5,1),w(6,ia,1,0,"ng-container",3),p()()()}if(t&2){let e=c(2);Fe(e.sx("root")),y(e.cn(e.cx("root"),e.styleClass)),d("pBind",e.ptm("root")),a(2),d("visible",e.visible)("appear",!0)("options",e.computedMotionOptions()),a(),y(e.cn(e.cx("content"),e.contentStyleClass)),d("pBind",e.ptm("content")),a(3),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",fe(15,Wo,fe(13,ea,e.overlayMode)))}}function ra(t,o){if(t&1&&w(0,oa,7,17,"div",4),t&2){let e=c();d("ngIf",e.modalVisible)}}var sa={root:()=>({position:"absolute",top:"0"})},aa=`
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`,la={host:"p-overlay-host",root:({instance:t})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":t.modal,"p-overlay-center":t.modal&&t.overlayResponsiveDirection==="center","p-overlay-top":t.modal&&t.overlayResponsiveDirection==="top","p-overlay-top-start":t.modal&&t.overlayResponsiveDirection==="top-start","p-overlay-top-end":t.modal&&t.overlayResponsiveDirection==="top-end","p-overlay-bottom":t.modal&&t.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":t.modal&&t.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":t.modal&&t.overlayResponsiveDirection==="bottom-end","p-overlay-left":t.modal&&t.overlayResponsiveDirection==="left","p-overlay-left-start":t.modal&&t.overlayResponsiveDirection==="left-start","p-overlay-left-end":t.modal&&t.overlayResponsiveDirection==="left-end","p-overlay-right":t.modal&&t.overlayResponsiveDirection==="right","p-overlay-right-start":t.modal&&t.overlayResponsiveDirection==="right-start","p-overlay-right-end":t.modal&&t.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},Uo=(()=>{class t extends W{name="overlay";style=aa;classes=la;inlineStyles=sa;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),Go=new U("OVERLAY_INSTANCE"),Qo=(()=>{class t extends Z{overlayService;zone;componentName="Overlay";$pcOverlay=m(Go,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return ut.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return ut.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return ut.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return ut.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=v(void 0);inline=v(!1);motionOptions=v(void 0);computedMotionOptions=L(()=>b(b({},this.ptm("motion")),this.motionOptions()||this.overlayOptions?.motionOptions));visibleChange=new N;onBeforeShow=new N;onShow=new N;onBeforeHide=new N;onHide=new N;onAnimationStart=new N;onAnimationDone=new N;onBeforeEnter=new N;onEnter=new N;onAfterEnter=new N;onBeforeLeave=new N;onLeave=new N;onAfterLeave=new N;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=v();$appendTo=L(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=m(Uo);bindDirectiveInstance=m(T,{self:!0});documentKeyboardListener;parentDragSubscription=null;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(Te(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return b(b({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return b(b({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return xi(this.target,this.el?.nativeElement)}constructor(e,n){super(),this.overlayService=e,this.zone=n}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,n=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&Be(this.targetEl),this.modal&&Et(this.document?.body,"p-overflow-hidden")}hide(e,n=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&Be(this.targetEl),this.modal&&tt(this.document?.body,"p-overflow-hidden");else return}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}container=R(void 0);onOverlayBeforeEnter(e){this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.container.set(this.overlayEl||e.element),this.show(this.overlayEl,!0),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents("onBeforeEnter",e)}onOverlayEnter(e){this.handleEvents("onEnter",e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents("onAfterEnter",e)}onOverlayBeforeLeave(e){this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.handleEvents("onBeforeLeave",e)}onOverlayLeave(e){this.handleEvents("onLeave",e)}onOverlayAfterLeave(e){this.hide(this.overlayEl,!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),it.clear(this.overlayEl),this.modalVisible=!1,this.cd.markForCheck(),this.handleEvents("onAfterLeave",e)}handleEvents(e,n){this[e].emit(n),this.options&&this.options[e]&&this.options[e](n),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](n)}setZIndex(){this.autoZIndex&&it.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode])}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?vt(this.document.body,this.overlayEl):vt(this.$appendTo(),this.overlayEl))}alignOverlay(){this.modal||this.overlayEl&&this.targetEl&&(this.overlayEl.style.minWidth=Ce(this.targetEl)+"px",this.$appendTo()==="self"?Ci(this.overlayEl,this.targetEl):_i(this.overlayEl,this.targetEl))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!=="self"&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl)&&this.hide(this.overlayEl,!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new St(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let i=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&i}):i)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!at()}):!at())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!at()}):!at())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),it.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(n){return new(n||t)(ee(Vi),ee($e))};static \u0275cmp=k({type:t,selectors:[["p-overlay"]],contentQueries:function(n,i,r){if(n&1&&qe(r,jo,4)(r,Qe,4),n&2){let s;D(s=O())&&(i.contentTemplate=s.first),D(s=O())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&Xe(Xs,5)(jo,5),n&2){let r;D(r=O())&&(i.overlayViewChild=r.first),D(r=O())&&(i.contentViewChild=r.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],inline:[1,"inline"],motionOptions:[1,"motionOptions"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone",onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave"},features:[H([Uo,{provide:Go,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],ngContentSelectors:qo,decls:2,vars:1,consts:[["overlay",""],["content",""],[3,"class","style","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","style","pBind","click",4,"ngIf"],[3,"click","pBind"],["name","p-anchored-overlay",3,"onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","visible","appear","options"]],template:function(n,i){n&1&&(ve(qo),B(0,na,2,5)(1,ra,1,1,"div",2)),n&2&&z(i.inline()?0:1)},dependencies:[pe,Ye,Le,re,T,Ho,qn],encapsulation:2,changeDetection:0})}return t})();var Ko=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var da=`
    ${Ko}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,ca={root:"p-ink"},Zo=(()=>{class t extends W{name="ripple";style=da;classes=ca;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var gn=(()=>{class t extends Z{componentName="Ripple";zone=m($e);_componentStyle=m(Zo);animationListener;mouseDownListener;timeout;constructor(){super(),ge(()=>{Te(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&tt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Ue(n)&&!We(n)){let l=Math.max(Ce(this.el.nativeElement),Ge(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let i=Ei(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-We(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Ue(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&Et(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&(!this.$unstyled()&&tt(l,"p-ink-active"),l.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&tt(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&tt(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Mi(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[H([Zo]),S]})}return t})();var Yo=["content"],ua=["item"],pa=["loader"],ha=["loadericon"],fa=["element"],ma=["*"],Un=(t,o)=>({$implicit:t,options:o}),ga=t=>({numCols:t}),er=t=>({options:t}),ba=()=>({styleClass:"p-virtualscroller-loading-icon"}),va=(t,o)=>({rows:t,columns:o});function ya(t,o){t&1&&ae(0)}function _a(t,o){if(t&1&&(le(0),w(1,ya,1,0,"ng-container",10),de()),t&2){let e=c(2);a(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Pe(2,Un,e.loadedItems,e.getContentOptions()))}}function Ca(t,o){t&1&&ae(0)}function xa(t,o){if(t&1&&(le(0),w(1,Ca,1,0,"ng-container",10),de()),t&2){let e=o.$implicit,n=o.index,i=c(3);a(),d("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",Pe(2,Un,e,i.getOptions(n)))}}function wa(t,o){if(t&1&&(u(0,"div",11,3),w(2,xa,2,5,"ng-container",12),p()),t&2){let e=c(2);Fe(e.contentStyle),y(e.cn(e.cx("content"),e.contentStyleClass)),d("pBind",e.ptm("content")),a(2),d("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function Sa(t,o){if(t&1&&G(0,"div",13),t&2){let e=c(2);y(e.cx("spacer")),d("ngStyle",e.spacerStyle)("pBind",e.ptm("spacer"))}}function Ia(t,o){t&1&&ae(0)}function Ta(t,o){if(t&1&&(le(0),w(1,Ia,1,0,"ng-container",10),de()),t&2){let e=o.index,n=c(4);a(),d("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",fe(4,er,n.getLoaderOptions(e,n.both&&fe(2,ga,n.numItemsInViewport.cols))))}}function Ea(t,o){if(t&1&&(le(0),w(1,Ta,2,6,"ng-container",14),de()),t&2){let e=c(3);a(),d("ngForOf",e.loaderArr)}}function Ma(t,o){t&1&&ae(0)}function Da(t,o){if(t&1&&(le(0),w(1,Ma,1,0,"ng-container",10),de()),t&2){let e=c(4);a(),d("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",fe(3,er,et(2,ba)))}}function Oa(t,o){if(t&1&&(ce(),G(0,"svg",15)),t&2){let e=c(4);y(e.cx("loadingIcon")),d("spin",!0)("pBind",e.ptm("loadingIcon"))}}function ka(t,o){if(t&1&&w(0,Da,2,5,"ng-container",6)(1,Oa,1,4,"ng-template",null,5,we),t&2){let e=Ve(2),n=c(3);d("ngIf",n.loaderIconTemplate||n._loaderIconTemplate)("ngIfElse",e)}}function Va(t,o){if(t&1&&(u(0,"div",11),w(1,Ea,2,1,"ng-container",6)(2,ka,3,2,"ng-template",null,4,we),p()),t&2){let e=Ve(3),n=c(2);y(n.cx("loader")),d("pBind",n.ptm("loader")),a(),d("ngIf",n.loaderTemplate||n._loaderTemplate)("ngIfElse",e)}}function Fa(t,o){if(t&1){let e=ie();le(0),u(1,"div",7,1),E("scroll",function(i){F(e);let r=c();return P(r.onContainerScroll(i))}),w(3,_a,2,5,"ng-container",6)(4,wa,3,7,"ng-template",null,2,we)(6,Sa,1,4,"div",8)(7,Va,4,5,"div",9),p(),de()}if(t&2){let e=Ve(5),n=c();a(),y(n.cn(n.cx("root"),n.styleClass)),d("ngStyle",n._style)("pBind",n.ptm("root")),V("id",n._id)("tabindex",n.tabindex),a(2),d("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),a(3),d("ngIf",n._showSpacer),a(),d("ngIf",!n.loaderDisabled&&n._showLoader&&n.d_loading)}}function Pa(t,o){t&1&&ae(0)}function Aa(t,o){if(t&1&&(le(0),w(1,Pa,1,0,"ng-container",10),de()),t&2){let e=c(2);a(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Pe(5,Un,e.items,Pe(2,va,e._items,e.loadedColumns)))}}function La(t,o){if(t&1&&(be(0),w(1,Aa,2,8,"ng-container",16)),t&2){let e=c();a(),d("ngIf",e.contentTemplate||e._contentTemplate)}}var Na=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Ba={root:({instance:t})=>["p-virtualscroller",{"p-virtualscroller-inline":t.inline,"p-virtualscroller-both p-both-scroll":t.both,"p-virtualscroller-horizontal p-horizontal-scroll":t.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:t})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!t.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},Xo=(()=>{class t extends W{name="virtualscroller";css=Na;classes=Ba;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var Jo=new U("SCROLLER_INSTANCE"),tr=(()=>{class t extends Z{zone;componentName="VirtualScroller";bindDirectiveInstance=m(T,{self:!0});$pcScroller=m(Jo,{optional:!0,skipSelf:!0})??void 0;hostName="";get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i)),Object.entries(e).forEach(([n,i])=>this[`${n}`]!==i&&(this[`${n}`]=i)))}onLazyLoad=new N;onScroll=new N;onScrollIndexChange=new N;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:Array.isArray(e)?e.slice(this._appendOnly?0:this.first.cols,this.last.cols):e):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=m(Xo);constructor(e){super(),this.zone=e}onInit(){this.setInitialState()}onChanges(e){let n=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:i,currentValue:r}=e.loading;this.lazy&&i!==r&&r!==this.d_loading&&(this.d_loading=r,n=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:i,currentValue:r}=e.numToleratedItems;i!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(e.options){let{previousValue:i,currentValue:r}=e.options;this.lazy&&i?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,n=!0),i?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!n&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&this.init()}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewInit(){Promise.resolve().then(()=>{this.viewInit()})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host")),this.initialized||this.viewInit()}onDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1}viewInit(){Te(this.platformId)&&!this.initialized&&Mn(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=We(this.elementViewChild?.nativeElement),this.defaultHeight=Ue(this.elementViewChild?.nativeElement),this.defaultContentWidth=We(this.contentEl),this.defaultContentHeight=Ue(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.bindResizeListener(),setTimeout(()=>{this.setSpacerSize(),this.setSize(),this.calculateOptions(),this.calculateAutoSize(),this.cd.detectChanges()},1))}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||Ee(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,(this.d_loading===void 0||this.d_loading===!1)&&(this.d_loading=this._loading||!1),this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=this.loaderArr.length>0?this.loaderArr:[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,n="auto"){if(this.both?e.every(r=>r>-1):e>-1){let r=this.first,{scrollTop:s=0,scrollLeft:l=0}=this.elementViewChild?.nativeElement,{numToleratedItems:h}=this.calculateNumItems(),g=this.getContentPosition(),f=this.itemSize,x=(Q=0,X)=>Q<=X?0:Q,M=(Q,X,me)=>Q*X+me,A=(Q=0,X=0)=>this.scrollTo({left:Q,top:X,behavior:n}),j=this.both?{rows:0,cols:0}:0,se=!1,$=!1;this.both?(j={rows:x(e[0],h[0]),cols:x(e[1],h[1])},A(M(j.cols,f[1],g.left),M(j.rows,f[0],g.top)),$=this.lastScrollPos.top!==s||this.lastScrollPos.left!==l,se=j.rows!==r.rows||j.cols!==r.cols):(j=x(e,h),this.horizontal?A(M(j,f,g.left),s):A(l,M(j,f,g.top)),$=this.lastScrollPos!==(this.horizontal?l:s),se=j!==r),this.isRangeChanged=se,$&&(this.first=j)}}scrollInView(e,n,i="auto"){if(n){let{first:r,viewport:s}=this.getRenderedRange(),l=(f=0,x=0)=>this.scrollTo({left:f,top:x,behavior:i}),h=n==="to-start",g=n==="to-end";if(h){if(this.both)s.first.rows-r.rows>e[0]?l(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-r.cols>e[1]&&l((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-r>e){let f=(s.first-1)*this._itemSize;this.horizontal?l(f,0):l(0,f)}}else if(g){if(this.both)s.last.rows-r.rows<=e[0]+1?l(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-r.cols<=e[1]+1&&l((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-r<=e+1){let f=(s.first+1)*this._itemSize;this.horizontal?l(f,0):l(0,f)}}}else this.scrollToIndex(e,i)}getRenderedRange(){let e=(r,s)=>s||r?Math.floor(r/(s||r)):0,n=this.first,i=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)n={rows:e(r,this._itemSize[0]),cols:e(s,this._itemSize[1])},i={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{let l=this.horizontal?s:r;n=e(l,this._itemSize),i=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:i}}}calculateNumItems(){let e=this.getContentPosition(),n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,r=(g,f)=>f||g?Math.ceil(g/(f||g)):0,s=g=>Math.ceil(g/2),l=this.both?{rows:r(i,this._itemSize[0]),cols:r(n,this._itemSize[1])}:r(this.horizontal?n:i,this._itemSize),h=this.d_numToleratedItems||(this.both?[s(l.rows),s(l.cols)]:s(l));return{numItemsInViewport:l,numToleratedItems:h}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:n}=this.calculateNumItems(),i=(l,h,g,f=!1)=>this.getLast(l+h+(l<g?2:3)*g,f),r=this.first,s=this.both?{rows:i(this.first.rows,e.rows,n[0]),cols:i(this.first.cols,e.cols,n[1],!0)}:i(this.first,e,n);this.last=s,this.numItemsInViewport=e,this.d_numToleratedItems=n,this._showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this._items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,n]=[We(this.contentEl),Ue(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),n!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[i,r]=[We(this.elementViewChild.nativeElement),Ue(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=i<this.defaultWidth?i+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,n=!1){return this._items?Math.min(n?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),i=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),r=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),s=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:i,top:r,bottom:s,x:n+i,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement,n=e.parentElement?.parentElement,i=e.offsetWidth,r=n?.offsetWidth||0,s=this._scrollWidth||`${i||r}px`,l=e.offsetHeight,h=n?.offsetHeight||0,g=this._scrollHeight||`${l||h}px`,f=(x,M)=>e.style[x]=M;this.both||this.horizontal?(f("height",g),f("width",s)):f("height",g)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),n=(i,r,s,l=0)=>this.spacerStyle=he(b({},this.spacerStyle),{[`${i}`]:(r||[]).length*s+l+"px"});this.both?(n("height",this._items,this._itemSize[0],e.y),n("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?n("width",this._columns||this._items,this._itemSize,e.x):n("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let n=e?e.first:this.first,i=(s,l)=>s*l,r=(s=0,l=0)=>this.contentStyle=he(b({},this.contentStyle),{transform:`translate3d(${s}px, ${l}px, 0)`});if(this.both)r(i(n.cols,this._itemSize[1]),i(n.rows,this._itemSize[0]));else{let s=i(n,this._itemSize);this.horizontal?r(s,0):r(0,s)}}}onScrollPositionChange(e){let n=e.target;if(!n)throw new Error("Event target is null");let i=this.getContentPosition(),r=($,Q)=>$?$>Q?$-Q:$:0,s=($,Q)=>Q||$?Math.floor($/(Q||$)):0,l=($,Q,X,me,ke,Re)=>$<=ke?ke:Re?X-me-ke:Q+ke-1,h=($,Q,X,me,ke,Re,pt)=>$<=Re?0:Math.max(0,pt?$<Q?X:$-Re:$>Q?X:$-2*Re),g=($,Q,X,me,ke,Re=!1)=>{let pt=Q+me+2*ke;return $>=ke&&(pt+=ke+1),this.getLast(pt,Re)},f=r(n.scrollTop,i.top),x=r(n.scrollLeft,i.left),M=this.both?{rows:0,cols:0}:0,A=this.last,j=!1,se=this.lastScrollPos;if(this.both){let $=this.lastScrollPos.top<=f,Q=this.lastScrollPos.left<=x;if(!this._appendOnly||this._appendOnly&&($||Q)){let X={rows:s(f,this._itemSize[0]),cols:s(x,this._itemSize[1])},me={rows:l(X.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],$),cols:l(X.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],Q)};M={rows:h(X.rows,me.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],$),cols:h(X.cols,me.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],Q)},A={rows:g(X.rows,M.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:g(X.cols,M.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},j=M.rows!==this.first.rows||A.rows!==this.last.rows||M.cols!==this.first.cols||A.cols!==this.last.cols||this.isRangeChanged,se={top:f,left:x}}}else{let $=this.horizontal?x:f,Q=this.lastScrollPos<=$;if(!this._appendOnly||this._appendOnly&&Q){let X=s($,this._itemSize),me=l(X,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,Q);M=h(X,me,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,Q),A=g(X,M,this.last,this.numItemsInViewport,this.d_numToleratedItems),j=M!==this.first||A!==this.last||this.isRangeChanged,se=$}}return{first:M,last:A,isRangeChanged:j,scrollPos:se}}onScrollChange(e){let{first:n,last:i,isRangeChanged:r,scrollPos:s}=this.onScrollPositionChange(e);if(r){let l={first:n,last:i};if(this.setContentPosition(l),this.first=n,this.last=i,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",l),this._lazy&&this.isPageChanged(n)){let h={first:this._step?Math.min(this.getPageByFirst(n)*this._step,this._items.length-this._step):n,last:Math.min(this._step?(this.getPageByFirst(n)+1)*this._step:i,this._items.length)};(this.lazyLoadState.first!==h.first||this.lazyLoadState.last!==h.last)&&this.handleEvents("onLazyLoad",h),this.lazyLoadState=h}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this._showLoader){let{isRangeChanged:n}=this.onScrollPositionChange(e);(n||this._step&&this.isPageChanged())&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this._showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){Te(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,n=at()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,n,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(Mn(this.elementViewChild?.nativeElement)){let[e,n]=[We(this.elementViewChild?.nativeElement),Ue(this.elementViewChild?.nativeElement)],[i,r]=[e!==this.defaultWidth,n!==this.defaultHeight];(this.both?i||r:this.horizontal?i:this.vertical&&r)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=n,this.defaultContentWidth=We(this.contentEl),this.defaultContentHeight=Ue(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,n){return this.options&&this.options[e]?this.options[e](n):this[e].emit(n)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,n)=>this.getLoaderOptions(e,n),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both,scrollTo:this.scrollTo.bind(this),scrollToIndex:this.scrollToIndex.bind(this),orientation:this._orientation,scrollableElement:this.elementViewChild?.nativeElement}}getOptions(e){let n=(this._items||[]).length,i=this.both?this.first.rows+e:this.first+e;return{index:i,count:n,first:i===0,last:i===n-1,even:i%2===0,odd:i%2!==0}}getLoaderOptions(e,n){let i=this.loaderArr.length;return b({index:e,count:i,first:e===0,last:e===i-1,even:e%2===0,odd:e%2!==0,loading:this.d_loading},n)}static \u0275fac=function(n){return new(n||t)(ee($e))};static \u0275cmp=k({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(n,i,r){if(n&1&&qe(r,Yo,4)(r,ua,4)(r,pa,4)(r,ha,4)(r,Qe,4),n&2){let s;D(s=O())&&(i.contentTemplate=s.first),D(s=O())&&(i.itemTemplate=s.first),D(s=O())&&(i.loaderTemplate=s.first),D(s=O())&&(i.loaderIconTemplate=s.first),D(s=O())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&Xe(fa,5)(Yo,5),n&2){let r;D(r=O())&&(i.elementViewChild=r.first),D(r=O())&&(i.contentViewChild=r.first)}},hostVars:2,hostBindings:function(n,i){n&2&&Je("height",i.height)},inputs:{hostName:"hostName",id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[H([Xo,{provide:Jo,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],ngContentSelectors:ma,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle","pBind"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin","pBind"],[4,"ngIf"]],template:function(n,i){if(n&1&&(ve(),w(0,Fa,8,10,"ng-container",6)(1,La,2,1,"ng-template",null,0,we)),n&2){let r=Ve(2);d("ngIf",!i._disabled)("ngIfElse",r)}},dependencies:[pe,jt,Ye,Le,st,pn,re,T],encapsulation:2})}return t})();var nr=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var za={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},ir=(()=>{class t extends W{name="tooltip";style=nr;classes=za;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var or=new U("TOOLTIP_INSTANCE"),rr=(()=>{class t extends Z{zone;viewContainer;componentName="Tooltip";$pcTooltip=m(or,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;showOnEllipsis=!1;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=v(void 0);$appendTo=L(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,showOnEllipsis:!1,id:ze("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=m(ir);interactionInProgress=!1;ptTooltip=v();pTooltipPT=v();pTooltipUnstyled=v();constructor(e,n){super(),this.zone=e,this.viewContainer=n,ge(()=>{let i=this.ptTooltip()||this.pTooltipPT();i&&this.directivePT.set(i)}),ge(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){Te(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:!0}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:!0})),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}onChanges(e){e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.showOnEllipsis&&this.setOption({showOnEllipsis:e.showOnEllipsis.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=b(b({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(bt(e.relatedTarget,"p-tooltip")||bt(e.relatedTarget,"p-tooltip-text")||bt(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onTouchStart(e){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener())}onTouchEnd(e){this.isAutoHide()&&this.deactivate()}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",e=>{this.container&&!this.container.contains(e.target)&&!this.el.nativeElement.contains(e.target)&&(this.deactivate(),this.unbindDocumentTouchListener())}))}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null)}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}hasEllipsis(){let e=this.el.nativeElement;return e.offsetWidth<e.scrollWidth||e.offsetHeight<e.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=Mt("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let e=Mt("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(e),this.tooltipText=Mt("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?vt(this.container,this.el.nativeElement):vt(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),wi(this.container,250),this.getOption("tooltipZIndex")==="auto"?it.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&it.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e&&typeof e.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[e]||[];for(let[r,s]of i.entries())if(r===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+vi(),i=e.top+yi();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Ee(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=Ce(e),i=(Ge(e)-Ge(this.container))/2;this.alignTooltip(n,i);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=Ce(this.container),i=(Ge(this.el.nativeElement)-Ge(this.container))/2;this.alignTooltip(-n,i),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),i=Ce(this.container),r=(Ce(this.el.nativeElement)-Ce(this.container))/2,s=Ge(this.container);this.alignTooltip(r,-s);let l=n.left-this.getHostOffset().left+i/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=l+"px"}getArrowElement(){return Ee(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=Ce(this.container),i=this.getHostOffset(),r=(Ce(this.el.nativeElement)-Ce(this.container))/2,s=Ge(this.el.nativeElement);this.alignTooltip(r,s);let l=i.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=l+"px"}alignTooltip(e,n){let i=this.getHostOffset(),r=i.left+e,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=b(b({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return bt(e,"p-inputwrapper")?Ee(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+e,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,r=Ce(this.container),s=Ge(this.container),l=bi();return i+r>l.width||i<0||n<0||n+s>l.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new St(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Di(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&it.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(ee($e),ee(ei))};static \u0275dir=ne({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",I],showDelay:[2,"showDelay","showDelay",_e],hideDelay:[2,"hideDelay","hideDelay",_e],life:[2,"life","life",_e],positionTop:[2,"positionTop","positionTop",_e],positionLeft:[2,"positionLeft","positionLeft",_e],autoHide:[2,"autoHide","autoHide",I],fitContent:[2,"fitContent","fitContent",I],hideOnEscape:[2,"hideOnEscape","hideOnEscape",I],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",I],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[H([ir,{provide:or,useExisting:t},{provide:Y,useExisting:t}]),S]})}return t})();var sr=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        align-self: center;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
        transform-origin: inherit;
        will-change: transform;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled):hover {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }
   
    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }

    .p-floatlabel-in .p-select-filter {
        padding-block-start: dt('select.padding.y');
        padding-block-end: dt('select.padding.y');
    }
`;var At=t=>({height:t}),Gn=t=>({$implicit:t});function Ra(t,o){if(t&1&&(ce(),G(0,"svg",6)),t&2){let e=c(2);y(e.cx("optionCheckIcon")),d("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionCheckIcon"))}}function $a(t,o){if(t&1&&(ce(),G(0,"svg",7)),t&2){let e=c(2);y(e.cx("optionBlankIcon")),d("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionBlankIcon"))}}function Ha(t,o){if(t&1&&(le(0),w(1,Ra,1,3,"svg",4)(2,$a,1,3,"svg",5),de()),t&2){let e=c();a(),d("ngIf",e.selected),a(),d("ngIf",!e.selected)}}function ja(t,o){if(t&1&&(u(0,"span",8),_(1),p()),t&2){let e=c();d("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionLabel")),a(),oe(e.label??"empty")}}function qa(t,o){t&1&&ae(0)}var Ua=["item"],Ga=["group"],Wa=["loader"],Qa=["selectedItem"],Ka=["header"],ar=["filter"],Za=["footer"],Ya=["emptyfilter"],Xa=["empty"],Ja=["dropdownicon"],el=["loadingicon"],tl=["clearicon"],nl=["filtericon"],il=["onicon"],ol=["officon"],rl=["cancelicon"],sl=["focusInput"],al=["editableInput"],ll=["items"],dl=["scroller"],cl=["overlay"],ul=["firstHiddenFocusableEl"],pl=["lastHiddenFocusableEl"],lr=t=>({class:t}),dr=t=>({options:t}),cr=(t,o)=>({$implicit:t,options:o}),hl=()=>({});function fl(t,o){if(t&1&&(le(0),_(1),de()),t&2){let e=c(2);a(),oe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function ml(t,o){if(t&1&&ae(0,24),t&2){let e=c(2);d("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",fe(2,Gn,e.selectedOption))}}function gl(t,o){if(t&1&&(u(0,"span"),_(1),p()),t&2){let e=c(3);a(),oe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function bl(t,o){if(t&1&&w(0,gl,2,1,"span",18),t&2){let e=c(2);d("ngIf",e.isSelectedOptionEmpty())}}function vl(t,o){if(t&1){let e=ie();u(0,"span",22,3),E("focus",function(i){F(e);let r=c();return P(r.onInputFocus(i))})("blur",function(i){F(e);let r=c();return P(r.onInputBlur(i))})("keydown",function(i){F(e);let r=c();return P(r.onKeyDown(i))}),w(2,fl,2,1,"ng-container",20)(3,ml,1,4,"ng-container",23)(4,bl,1,1,"ng-template",null,4,we),p()}if(t&2){let e=Ve(5),n=c();y(n.cx("label")),d("pBind",n.ptm("label"))("pTooltip",n.tooltip)("pTooltipUnstyled",n.unstyled())("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),V("aria-disabled",n.$disabled())("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",n.overlayVisible??!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.$disabled()?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required())("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0)("data-p",n.labelDataP),a(2),d("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate)("ngIfElse",e),a(),d("ngIf",(n.selectedItemTemplate||n._selectedItemTemplate)&&!n.isSelectedOptionEmpty())}}function yl(t,o){if(t&1){let e=ie();u(0,"input",25,5),E("input",function(i){F(e);let r=c();return P(r.onEditableInput(i))})("keydown",function(i){F(e);let r=c();return P(r.onKeyDown(i))})("focus",function(i){F(e);let r=c();return P(r.onInputFocus(i))})("blur",function(i){F(e);let r=c();return P(r.onInputBlur(i))}),p()}if(t&2){let e=c();y(e.cx("label")),d("pBind",e.ptm("label"))("pAutoFocus",e.autofocus),V("id",e.inputId)("aria-haspopup","listbox")("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("data-p",e.labelDataP)}}function _l(t,o){if(t&1){let e=ie();ce(),u(0,"svg",28),E("click",function(i){F(e);let r=c(2);return P(r.clear(i))}),p()}if(t&2){let e=c(2);y(e.cx("clearIcon")),d("pBind",e.ptm("clearIcon")),V("data-pc-section","clearicon")}}function Cl(t,o){}function xl(t,o){t&1&&w(0,Cl,0,0,"ng-template")}function wl(t,o){if(t&1){let e=ie();u(0,"span",29),E("click",function(i){F(e);let r=c(2);return P(r.clear(i))}),w(1,xl,1,0,null,30),p()}if(t&2){let e=c(2);y(e.cx("clearIcon")),d("pBind",e.ptm("clearIcon")),V("data-pc-section","clearicon"),a(),d("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",fe(6,lr,e.cx("clearIcon")))}}function Sl(t,o){if(t&1&&(le(0),w(1,_l,1,4,"svg",26)(2,wl,2,8,"span",27),de()),t&2){let e=c();a(),d("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),a(),d("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Il(t,o){t&1&&ae(0)}function Tl(t,o){if(t&1&&(le(0),w(1,Il,1,0,"ng-container",31),de()),t&2){let e=c(2);a(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function El(t,o){if(t&1&&G(0,"span",33),t&2){let e=c(3);y(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon)),d("pBind",e.ptm("loadingIcon"))}}function Ml(t,o){if(t&1&&G(0,"span",33),t&2){let e=c(3);y(e.cn(e.cx("loadingIcon"),"pi pi-spinner pi-spin")),d("pBind",e.ptm("loadingIcon"))}}function Dl(t,o){if(t&1&&(le(0),w(1,El,1,3,"span",32)(2,Ml,1,3,"span",32),de()),t&2){let e=c(2);a(),d("ngIf",e.loadingIcon),a(),d("ngIf",!e.loadingIcon)}}function Ol(t,o){if(t&1&&(le(0),w(1,Tl,2,1,"ng-container",18)(2,Dl,3,2,"ng-container",18),de()),t&2){let e=c();a(),d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),a(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function kl(t,o){if(t&1&&G(0,"span",36),t&2){let e=c(3);y(e.cn(e.cx("dropdownIcon"),e.dropdownIcon)),d("pBind",e.ptm("dropdownIcon"))}}function Vl(t,o){if(t&1&&(ce(),G(0,"svg",37)),t&2){let e=c(3);y(e.cx("dropdownIcon")),d("pBind",e.ptm("dropdownIcon"))}}function Fl(t,o){if(t&1&&(le(0),w(1,kl,1,3,"span",34)(2,Vl,1,3,"svg",35),de()),t&2){let e=c(2);a(),d("ngIf",e.dropdownIcon),a(),d("ngIf",!e.dropdownIcon)}}function Pl(t,o){}function Al(t,o){t&1&&w(0,Pl,0,0,"ng-template")}function Ll(t,o){if(t&1&&(u(0,"span",36),w(1,Al,1,0,null,30),p()),t&2){let e=c(2);y(e.cx("dropdownIcon")),d("pBind",e.ptm("dropdownIcon")),a(),d("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",fe(5,lr,e.cx("dropdownIcon")))}}function Nl(t,o){if(t&1&&w(0,Fl,3,2,"ng-container",18)(1,Ll,2,7,"span",34),t&2){let e=c();d("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),a(),d("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Bl(t,o){t&1&&ae(0)}function zl(t,o){t&1&&ae(0)}function Rl(t,o){if(t&1&&(le(0),w(1,zl,1,0,"ng-container",30),de()),t&2){let e=c(3);a(),d("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",fe(2,dr,e.filterOptions))}}function $l(t,o){if(t&1&&(ce(),G(0,"svg",45)),t&2){let e=c(4);d("pBind",e.ptm("filterIcon"))}}function Hl(t,o){}function jl(t,o){t&1&&w(0,Hl,0,0,"ng-template")}function ql(t,o){if(t&1&&(u(0,"span",36),w(1,jl,1,0,null,31),p()),t&2){let e=c(4);d("pBind",e.ptm("filterIcon")),a(),d("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function Ul(t,o){if(t&1){let e=ie();u(0,"p-iconfield",41)(1,"input",42,10),E("input",function(i){F(e);let r=c(3);return P(r.onFilterInputChange(i))})("keydown",function(i){F(e);let r=c(3);return P(r.onFilterKeyDown(i))})("blur",function(i){F(e);let r=c(3);return P(r.onFilterBlur(i))}),p(),u(3,"p-inputicon",41),w(4,$l,1,1,"svg",43)(5,ql,2,2,"span",44),p()()}if(t&2){let e=c(3);d("pt",e.ptm("pcFilterContainer"))("unstyled",e.unstyled()),a(),y(e.cx("pcFilter")),d("pSize",e.size())("value",e._filterValue()||"")("variant",e.$variant())("pt",e.ptm("pcFilter"))("unstyled",e.unstyled()),V("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),a(2),d("pt",e.ptm("pcFilterIconContainer"))("unstyled",e.unstyled()),a(),d("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),a(),d("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function Gl(t,o){if(t&1&&(u(0,"div",29),E("click",function(n){return n.stopPropagation()}),w(1,Rl,2,4,"ng-container",20)(2,Ul,6,17,"ng-template",null,9,we),p()),t&2){let e=Ve(3),n=c(2);y(n.cx("header")),d("pBind",n.ptm("header")),a(),d("ngIf",n.filterTemplate||n._filterTemplate)("ngIfElse",e)}}function Wl(t,o){t&1&&ae(0)}function Ql(t,o){if(t&1&&w(0,Wl,1,0,"ng-container",30),t&2){let e=o.$implicit,n=o.options;c(2);let i=Ve(9);d("ngTemplateOutlet",i)("ngTemplateOutletContext",Pe(2,cr,e,n))}}function Kl(t,o){t&1&&ae(0)}function Zl(t,o){if(t&1&&w(0,Kl,1,0,"ng-container",30),t&2){let e=o.options,n=c(4);d("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",fe(2,dr,e))}}function Yl(t,o){t&1&&(le(0),w(1,Zl,1,4,"ng-template",null,12,we),de())}function Xl(t,o){if(t&1){let e=ie();u(0,"p-scroller",46,11),E("onLazyLoad",function(i){F(e);let r=c(2);return P(r.onLazyLoad.emit(i))}),w(2,Ql,1,5,"ng-template",null,2,we)(4,Yl,3,0,"ng-container",18),p()}if(t&2){let e=c(2);Fe(fe(9,At,e.scrollHeight)),d("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions)("pt",e.ptm("virtualScroller")),a(4),d("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Jl(t,o){t&1&&ae(0)}function ed(t,o){if(t&1&&(le(0),w(1,Jl,1,0,"ng-container",30),de()),t&2){c();let e=Ve(9),n=c();a(),d("ngTemplateOutlet",e)("ngTemplateOutletContext",Pe(3,cr,n.visibleOptions(),et(2,hl)))}}function td(t,o){if(t&1&&(u(0,"span",36),_(1),p()),t&2){let e=c(2).$implicit,n=c(3);y(n.cx("optionGroupLabel")),d("pBind",n.ptm("optionGroupLabel")),a(),oe(n.getOptionGroupLabel(e.optionGroup))}}function nd(t,o){t&1&&ae(0)}function id(t,o){if(t&1&&(le(0),u(1,"li",50),w(2,td,2,4,"span",34)(3,nd,1,0,"ng-container",30),p(),de()),t&2){let e=c(),n=e.$implicit,i=e.index,r=c().options,s=c(2);a(),y(s.cx("optionGroup")),d("ngStyle",fe(8,At,r.itemSize+"px"))("pBind",s.ptm("optionGroup")),V("id",s.id+"_"+s.getOptionIndex(i,r)),a(),d("ngIf",!s.groupTemplate&&!s._groupTemplate),a(),d("ngTemplateOutlet",s.groupTemplate||s._groupTemplate)("ngTemplateOutletContext",fe(10,Gn,n.optionGroup))}}function od(t,o){if(t&1){let e=ie();le(0),u(1,"p-selectItem",51),E("onClick",function(i){F(e);let r=c().$implicit,s=c(3);return P(s.onOptionSelect(i,r))})("onMouseEnter",function(i){F(e);let r=c().index,s=c().options,l=c(2);return P(l.onOptionMouseEnter(i,l.getOptionIndex(r,s)))}),p(),de()}if(t&2){let e=c(),n=e.$implicit,i=e.index,r=c().options,s=c(2);a(),d("id",s.id+"_"+s.getOptionIndex(i,r))("option",n)("checkmark",s.checkmark)("selected",s.isSelected(n))("label",s.getOptionLabel(n))("disabled",s.isOptionDisabled(n))("template",s.itemTemplate||s._itemTemplate)("focused",s.focusedOptionIndex()===s.getOptionIndex(i,r))("ariaPosInset",s.getAriaPosInset(s.getOptionIndex(i,r)))("ariaSetSize",s.ariaSetSize)("index",i)("unstyled",s.unstyled())("scrollerOptions",r)}}function rd(t,o){if(t&1&&w(0,id,4,12,"ng-container",18)(1,od,2,13,"ng-container",18),t&2){let e=o.$implicit,n=c(3);d("ngIf",n.isOptionGroup(e)),a(),d("ngIf",!n.isOptionGroup(e))}}function sd(t,o){if(t&1&&_(0),t&2){let e=c(4);Ie(" ",e.emptyFilterMessageLabel," ")}}function ad(t,o){t&1&&ae(0,null,14)}function ld(t,o){if(t&1&&w(0,ad,2,0,"ng-container",31),t&2){let e=c(4);d("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function dd(t,o){if(t&1&&(u(0,"li",50),B(1,sd,1,1)(2,ld,1,1,"ng-container"),p()),t&2){let e=c().options,n=c(2);y(n.cx("emptyMessage")),d("ngStyle",fe(5,At,e.itemSize+"px"))("pBind",n.ptm("emptyMessage")),a(),z(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function cd(t,o){if(t&1&&_(0),t&2){let e=c(4);Ie(" ",e.emptyMessageLabel||e.emptyFilterMessageLabel," ")}}function ud(t,o){t&1&&ae(0,null,15)}function pd(t,o){if(t&1&&w(0,ud,2,0,"ng-container",31),t&2){let e=c(4);d("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function hd(t,o){if(t&1&&(u(0,"li",50),B(1,cd,1,1)(2,pd,1,1,"ng-container"),p()),t&2){let e=c().options,n=c(2);y(n.cx("emptyMessage")),d("ngStyle",fe(5,At,e.itemSize+"px"))("pBind",n.ptm("emptyMessage")),a(),z(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function fd(t,o){if(t&1&&(u(0,"ul",47,13),w(2,rd,2,2,"ng-template",48)(3,dd,3,7,"li",49)(4,hd,3,7,"li",49),p()),t&2){let e=o.$implicit,n=o.options,i=c(2);Fe(n.contentStyle),y(i.cn(i.cx("list"),n.contentStyleClass)),d("pBind",i.ptm("list")),V("id",i.id+"_list")("aria-label",i.listLabel),a(2),d("ngForOf",e),a(),d("ngIf",i.filterValue&&i.isEmpty()),a(),d("ngIf",!i.filterValue&&i.isEmpty())}}function md(t,o){t&1&&ae(0)}function gd(t,o){if(t&1){let e=ie();u(0,"div",38)(1,"span",39,6),E("focus",function(i){F(e);let r=c();return P(r.onFirstHiddenFocus(i))}),p(),w(3,Bl,1,0,"ng-container",31)(4,Gl,4,5,"div",27),u(5,"div",36),w(6,Xl,5,11,"p-scroller",40)(7,ed,2,6,"ng-container",18)(8,fd,5,10,"ng-template",null,7,we),p(),w(10,md,1,0,"ng-container",31),u(11,"span",39,8),E("focus",function(i){F(e);let r=c();return P(r.onLastHiddenFocus(i))}),p()()}if(t&2){let e=c();y(e.cn(e.cx("overlay"),e.panelStyleClass)),d("ngStyle",e.panelStyle)("pBind",e.ptm("overlay")),V("data-p",e.overlayDataP),a(),d("pBind",e.ptm("hiddenFirstFocusableEl")),V("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),a(2),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),d("ngIf",e.filter),a(),y(e.cx("listContainer")),Je("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),d("pBind",e.ptm("listContainer")),a(),d("ngIf",e.virtualScroll),a(),d("ngIf",!e.virtualScroll),a(3),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),a(),d("pBind",e.ptm("hiddenLastFocusableEl")),V("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var bd=`
    ${sr}

    /* For PrimeNG */
    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.ng-invalid.ng-dirty {
        border-color: dt('select.invalid.border.color');
    }

    .p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
    .p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }
`,vd={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled","p-focus":t.focused,"p-invalid":t.invalid(),"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size()==="small","p-select-lg p-inputfield-lg":t.size()==="large"}],label:({instance:t})=>["p-select-label",{"p-placeholder":t.placeholder()&&t.label()===t.placeholder(),"p-select-label-empty":!t.editable&&!t.selectedItemTemplate&&(t.label()===void 0||t.label()===null||t.label()==="p-emptylabel"||t.label().length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingIcon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t})=>["p-select-option",{"p-select-option-selected":t.selected&&!t.checkmark,"p-disabled":t.disabled,"p-focus":t.focused}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},bn=(()=>{class t extends W{name="select";style=bd;classes=vd;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var ur=new U("SELECT_INSTANCE"),yd=new U("SELECT_ITEM_INSTANCE"),_d={provide:xt,useExisting:ot(()=>vn),multi:!0},Cd=(()=>{class t extends Z{hostName="select";$pcSelectItem=m(yd,{optional:!0,skipSelf:!0})??void 0;$pcSelect=m(ur,{optional:!0,skipSelf:!0})??void 0;id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;index;scrollerOptions;onClick=new N;onMouseEnter=new N;_componentStyle=m(bn);onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}getPTOptions(){return this.$pcSelect?.getPTItemOptions?.(this.option,this.scrollerOptions,this.index??0,"option")??this.$pcSelect?.ptm("option",{context:{option:this.option,selected:this.selected,focused:this.focused,disabled:this.disabled}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",I],focused:[2,"focused","focused",I],label:"label",disabled:[2,"disabled","disabled",I],visible:[2,"visible","visible",I],itemSize:[2,"itemSize","itemSize",_e],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",I],index:"index",scrollerOptions:"scrollerOptions"},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[H([bn,{provide:Y,useExisting:t}]),S],decls:4,vars:21,consts:[["role","option","pRipple","",3,"click","mouseenter","id","pBind","ngStyle"],[4,"ngIf"],[3,"pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],["data-p-icon","blank",3,"class","pBind",4,"ngIf"],["data-p-icon","check",3,"pBind"],["data-p-icon","blank",3,"pBind"],[3,"pBind"]],template:function(n,i){n&1&&(u(0,"li",0),E("click",function(s){return i.onOptionClick(s)})("mouseenter",function(s){return i.onOptionMouseEnter(s)}),w(1,Ha,3,2,"ng-container",1)(2,ja,2,2,"span",2)(3,qa,1,0,"ng-container",3),p()),n&2&&(y(i.cx("option")),d("id",i.id)("pBind",i.getPTOptions())("ngStyle",fe(17,At,(i.scrollerOptions==null?null:i.scrollerOptions.itemSize)+"px")),V("aria-label",i.label)("aria-setsize",i.ariaSetSize)("aria-posinset",i.ariaPosInset)("aria-selected",i.selected)("data-p-focused",i.focused)("data-p-highlight",i.selected)("data-p-selected",i.selected)("data-p-disabled",i.disabled),a(),d("ngIf",i.checkmark),a(),d("ngIf",!i.template),a(),d("ngTemplateOutlet",i.template)("ngTemplateOutletContext",fe(19,Gn,i.option)))},dependencies:[pe,Ye,Le,st,re,gn,Mo,Eo,Se,T],encapsulation:2})}return t})(),vn=(()=>{class t extends Co{zone;filterService;componentName="Select";bindDirectiveInstance=m(T,{self:!0});id;scrollHeight="200px";filter;panelStyle;styleClass;panelStyleClass;readonly;editable;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){ci(e,this._options())||this._options.set(e)}appendTo=v(void 0);motionOptions=v(void 0);onChange=new N;onFilter=new N;onFocus=new N;onBlur=new N;onClick=new N;onShow=new N;onHide=new N;onClear=new N;onLazyLoad=new N;_componentStyle=m(bn);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;itemsWrapper;$appendTo=L(()=>this.appendTo()||this.config.overlayAppendTo());itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=R(null);_placeholder=R(void 0);value;hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=R(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=R(-1);labelId;listId;clicked=R(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Qt.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(Qt.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.$disabled()}get listLabel(){return this.config.getTranslation(Qt.ARIA).listLabel}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=L(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let i=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options?.filter(r=>r.label?r.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:r.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let r=this.options||[],s=[];return r.forEach(l=>{let g=this.getOptionGroupChildren(l).filter(f=>i?.includes(f));g.length>0&&s.push(he(b({},l),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...g]}))}),this.flatOptions(s)}return i}return e});label=L(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=e.findIndex(i=>this.isOptionValueEqualsModelValue(i));if(n!==-1){let i=e[n];return this.getOptionLabel(i)}return this.placeholder()||"p-emptylabel"});selectedOption;constructor(e,n){super(),this.zone=e,this.filterService=n,ge(()=>{let i=this.modelValue(),r=this.visibleOptions();if(r&&Ne(r)){let s=this.findSelectedOptionIndex();if(s!==-1||i===void 0||typeof i=="string"&&i.length===0||this.isModelValueNotSet()||this.editable)this.selectedOption=r[s];else{let l=r.findIndex(h=>this.isSelected(h));l!==-1&&(this.selectedOption=r[l])}}Tt(r)&&(i===void 0||this.isModelValueNotSet())&&Ne(this.selectedOption)&&(this.selectedOption=null),i!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}onInit(){this.id=this.id||ze("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){if(this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=Ee(this.overlayViewChild?.overlayViewChild?.nativeElement,'li[data-p-selected="true"]');e&&Oi(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((n,i,r)=>{n.push({optionGroup:i,group:!0,index:r});let s=this.getOptionGroupChildren(i);return s&&s.forEach(l=>n.push(l)),n},[])}autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1))}onOptionSelect(e,n,i=!0,r=!1){if(!this.isOptionDisabled(n)){if(!this.isSelected(n)){let s=this.getOptionValue(n);this.updateModel(s,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),r===!1&&this.onChange.emit({originalEvent:e,value:s})}i&&this.hide(!0)}}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeModelValue(e),this.selectedOptionUpdated=!0}allowModelChange(){return!!this.modelValue()&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return e!=null&&!this.isOptionGroup(e)&&qt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}onAfterViewInit(){this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,n=e?.classList.contains("p-float-label");if(e&&n&&!this.selectedOption){let i=e.querySelector("label");i&&this._placeholder.set(i.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?mt(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?mt(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getPTItemOptions(e,n,i,r){return this.ptm(r,{context:{option:e,index:i,selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}isSelectedOptionEmpty(){return Tt(this.selectedOption)}isOptionDisabled(e){return this.optionDisabled?mt(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?mt(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?mt(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}onContainerClick(e){this.$disabled()||this.readonly||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges())}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let n=e.target.value;this.searchValue="",!this.searchOptions(e,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n||null,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:n})},1),!this.overlayVisible&&Ne(n)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&Be(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=Ee(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?'[data-pc-name="virtualscroller"]':'[data-pc-section="listcontainer"]'),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&setTimeout(()=>{this.scroller?.scrollToIndex(n)},10)}else{let n=Ee(this.itemsWrapper,'[data-p-selected="true"]');n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e)}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&_o(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&Be(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&Be(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.$disabled())return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),!this.preventModelTouched&&!this.overlayVisible&&this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,n=!1){if(!(this.$disabled()||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&fi(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let i=this.visibleOptions()[n];this.onOptionSelect(e,i,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=Ee(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?void 0:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?En(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastOptionIndex(){return En(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,n=!1){if(e.altKey&&!n){if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide()}else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;e.shiftKey?i.setSelectionRange(0,i.value.length):(i.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;if(e.shiftKey)i.setSelectionRange(0,i.value.length);else{let r=i.value.length;i.setSelectionRange(r,r),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,n=!1){!this.editable&&!n&&this.onEnterKey(e)}onEnterKey(e,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}!n&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.preventDefault(),e.stopPropagation())}onTabKey(e,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())Be(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?Ii(this.overlayViewChild?.el?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Be(n)}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?Ti(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Be(n)}hasFocusableElements(){return Si(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,r=!1;return i=this.visibleOptions().findIndex(s=>this.isOptionMatched(s)),i!==-1&&(r=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&setTimeout(()=>{this.changeFocusedOptionIndex(e,i)}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?Ee(this.el.nativeElement,'[data-pc-section="label"]').focus():Be(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}writeControlValue(e,n){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),n(this.value),this.updateEditableLabel(),this.cd.markForCheck()}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.$disabled(),[this.size()]:this.size(),empty:!this.editable&&!this.selectedItemTemplate&&(!this.label?.()||this.label()==="p-emptylabel"||this.label()?.length===0)})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({["overlay-"+this.$appendTo()]:"overlay-"+this.$appendTo()})}static \u0275fac=function(n){return new(n||t)(ee($e),ee(ki))};static \u0275cmp=k({type:t,selectors:[["p-select"]],contentQueries:function(n,i,r){if(n&1&&qe(r,Ua,4)(r,Ga,4)(r,Wa,4)(r,Qa,4)(r,Ka,4)(r,ar,4)(r,Za,4)(r,Ya,4)(r,Xa,4)(r,Ja,4)(r,el,4)(r,tl,4)(r,nl,4)(r,il,4)(r,ol,4)(r,rl,4)(r,Qe,4),n&2){let s;D(s=O())&&(i.itemTemplate=s.first),D(s=O())&&(i.groupTemplate=s.first),D(s=O())&&(i.loaderTemplate=s.first),D(s=O())&&(i.selectedItemTemplate=s.first),D(s=O())&&(i.headerTemplate=s.first),D(s=O())&&(i.filterTemplate=s.first),D(s=O())&&(i.footerTemplate=s.first),D(s=O())&&(i.emptyFilterTemplate=s.first),D(s=O())&&(i.emptyTemplate=s.first),D(s=O())&&(i.dropdownIconTemplate=s.first),D(s=O())&&(i.loadingIconTemplate=s.first),D(s=O())&&(i.clearIconTemplate=s.first),D(s=O())&&(i.filterIconTemplate=s.first),D(s=O())&&(i.onIconTemplate=s.first),D(s=O())&&(i.offIconTemplate=s.first),D(s=O())&&(i.cancelIconTemplate=s.first),D(s=O())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&Xe(ar,5)(sl,5)(al,5)(ll,5)(dl,5)(cl,5)(ul,5)(pl,5),n&2){let r;D(r=O())&&(i.filterViewChild=r.first),D(r=O())&&(i.focusInputViewChild=r.first),D(r=O())&&(i.editableInputViewChild=r.first),D(r=O())&&(i.itemsViewChild=r.first),D(r=O())&&(i.scroller=r.first),D(r=O())&&(i.overlayViewChild=r.first),D(r=O())&&(i.firstHiddenFocusableElementOnOverlay=r.first),D(r=O())&&(i.lastHiddenFocusableElementOnOverlay=r.first)}},hostVars:4,hostBindings:function(n,i){n&1&&E("click",function(s){return i.onContainerClick(s)}),n&2&&(V("id",i.id)("data-p",i.containerDataP),y(i.cn(i.cx("root"),i.styleClass)))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",I],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",I],editable:[2,"editable","editable",I],tabindex:[2,"tabindex","tabindex",_e],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",I],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",I],checkmark:[2,"checkmark","checkmark",I],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",I],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",group:[2,"group","group",I],showClear:[2,"showClear","showClear",I],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",I],virtualScroll:[2,"virtualScroll","virtualScroll",I],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",_e],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",I],selectOnFocus:[2,"selectOnFocus","selectOnFocus",I],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",I],autofocusFilter:[2,"autofocusFilter","autofocusFilter",I],filterValue:"filterValue",options:"options",appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[H([_d,bn,{provide:ur,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],decls:11,vars:18,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"class","pBind","pTooltip","pTooltipUnstyled","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text",3,"class","pBind","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",3,"pBind"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onBeforeEnter","onAfterLeave","onHide","hostAttrSelector","visible","options","target","appendTo","unstyled","pt","motionOptions"],["role","combobox",3,"focus","blur","keydown","pBind","pTooltip","pTooltipUnstyled","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text",3,"input","keydown","focus","blur","pBind","pAutoFocus"],["data-p-icon","times",3,"class","pBind","click",4,"ngIf"],[3,"class","pBind","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"class","pBind",4,"ngIf"],["aria-hidden","true",3,"pBind"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-down",3,"pBind"],[3,"ngStyle","pBind"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus","pBind"],["hostName","select",3,"items","style","itemSize","autoSize","lazy","options","pt","onLazyLoad",4,"ngIf"],[3,"pt","unstyled"],["pInputText","","type","text","role","searchbox","autocomplete","off",3,"input","keydown","blur","pSize","value","variant","pt","unstyled"],["data-p-icon","search",3,"pBind",4,"ngIf"],[3,"pBind",4,"ngIf"],["data-p-icon","search",3,"pBind"],["hostName","select",3,"onLazyLoad","items","itemSize","autoSize","lazy","options","pt"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle","pBind",4,"ngIf"],["role","option",3,"ngStyle","pBind"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize","index","unstyled","scrollerOptions"]],template:function(n,i){if(n&1){let r=ie();w(0,vl,6,25,"span",16)(1,yl,2,20,"input",17)(2,Sl,3,2,"ng-container",18),u(3,"div",19),w(4,Ol,3,2,"ng-container",20)(5,Nl,2,2,"ng-template",null,0,we),p(),u(7,"p-overlay",21,1),si("visibleChange",function(l){return F(r),ri(i.overlayVisible,l)||(i.overlayVisible=l),P(l)}),E("onBeforeEnter",function(l){return i.onOverlayBeforeEnter(l)})("onAfterLeave",function(l){return i.onOverlayAfterLeave(l)})("onHide",function(){return i.hide()}),w(9,gd,13,23,"ng-template",null,2,we),p()}if(n&2){let r=Ve(6);d("ngIf",!i.editable),a(),d("ngIf",i.editable),a(),d("ngIf",i.isVisibleClearIcon),a(),y(i.cx("dropdown")),d("pBind",i.ptm("dropdown")),V("aria-expanded",i.overlayVisible??!1)("data-pc-section","trigger"),a(),d("ngIf",i.loading)("ngIfElse",r),a(3),d("hostAttrSelector",i.$attrSelector),oi("visible",i.overlayVisible),d("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("unstyled",i.unstyled())("pt",i.ptm("pcOverlay"))("motionOptions",i.motionOptions())}},dependencies:[pe,jt,Ye,Le,st,Cd,Qo,rr,It,ko,Do,Oo,cn,Io,Po,tr,re,Se,T],encapsulation:2,changeDetection:0})}return t})(),pr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({imports:[vn,re,re]})}return t})();var hr=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var wd=["handle"],Sd=["input"],Id=t=>({checked:t});function Td(t,o){t&1&&ae(0)}function Ed(t,o){if(t&1&&w(0,Td,1,0,"ng-container",3),t&2){let e=c();d("ngTemplateOutlet",e.handleTemplate||e._handleTemplate)("ngTemplateOutletContext",fe(2,Id,e.checked()))}}var Md=`
    ${hr}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,Dd={root:{position:"relative"}},Od={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},fr=(()=>{class t extends W{name="toggleswitch";style=Md;classes=Od;inlineStyles=Dd;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var mr=new U("TOGGLESWITCH_INSTANCE"),kd={provide:xt,useExisting:ot(()=>yn),multi:!0},yn=(()=>{class t extends un{componentName="ToggleSwitch";$pcToggleSwitch=m(mr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=v();ariaLabelledBy;autofocus;onChange=new N;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=m(fr);templates;onHostClick(e){this.onClick(e)}onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="handle"?this._handleTemplate=e.template:this._handleTemplate=e.template})}onClick(e){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:e,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,i,r){if(n&1&&qe(r,wd,4)(r,Qe,4),n&2){let s;D(s=O())&&(i.handleTemplate=s.first),D(s=O())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&Xe(Sd,5),n&2){let r;D(r=O())&&(i.input=r.first)}},hostVars:7,hostBindings:function(n,i){n&1&&E("click",function(s){return i.onHostClick(s)}),n&2&&(V("data-p-checked",i.checked())("data-p-disabled",i.$disabled())("data-p",i.dataP),Fe(i.sx("root")),y(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",_e],inputId:"inputId",readonly:[2,"readonly","readonly",I],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",I]},outputs:{onChange:"onChange"},features:[H([kd,fr,{provide:mr,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(u(0,"input",1,0),E("focus",function(){return i.onFocus()})("blur",function(){return i.onBlur()}),p(),u(2,"div",2)(3,"div",2),B(4,Ed,1,4,"ng-container"),p()()),n&2&&(y(i.cx("input")),d("checked",i.checked())("pAutoFocus",i.autofocus)("pBind",i.ptm("input")),V("id",i.inputId)("required",i.required()?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name())("tabindex",i.tabindex),a(2),y(i.cx("slider")),d("pBind",i.ptm("slider")),V("data-p",i.dataP),a(),y(i.cx("handle")),d("pBind",i.ptm("handle")),V("data-p",i.dataP),a(),z(i.handleTemplate||i._handleTemplate?4:-1))},dependencies:[pe,Le,It,re,Se,T],encapsulation:2,changeDetection:0})}return t})(),gr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({imports:[yn,re,re]})}return t})();var br=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Fd=`
    ${br}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Pd={root:({instance:t})=>{let o=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":Ne(o)&&String(o).length===1,"p-badge-dot":Tt(o),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},vr=(()=>{class t extends W{name="badge";style=Fd;classes=Pd;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var yr=new U("BADGE_INSTANCE");var Wn=(()=>{class t extends Z{componentName="Badge";$pcBadge=m(yr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=v();badgeSize=v();size=v();severity=v();value=v();badgeDisabled=v(!1,{transform:I});_componentStyle=m(vr);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(V("data-p",i.dataP),y(i.cn(i.cx("root"),i.styleClass())),Je("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[H([vr,{provide:yr,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],decls:1,vars:1,template:function(n,i){n&1&&_(0),n&2&&oe(i.value())},dependencies:[pe,re,Se],encapsulation:2,changeDetection:0})}return t})(),_r=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({imports:[Wn,re,re]})}return t})();var Cr=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Ld=["content"],Nd=["loadingicon"],Bd=["icon"],zd=["*"],Sr=(t,o)=>({class:t,pt:o});function Rd(t,o){t&1&&ae(0)}function $d(t,o){if(t&1&&G(0,"span",7),t&2){let e=c(3);y(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),d("pBind",e.ptm("loadingIcon")),V("aria-hidden",!0)}}function Hd(t,o){if(t&1&&(ce(),G(0,"svg",8)),t&2){let e=c(3);y(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),d("pBind",e.ptm("loadingIcon"))("spin",!0),V("aria-hidden",!0)}}function jd(t,o){if(t&1&&(le(0),w(1,$d,1,4,"span",3)(2,Hd,1,5,"svg",6),de()),t&2){let e=c(2);a(),d("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),a(),d("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function qd(t,o){}function Ud(t,o){if(t&1&&w(0,qd,0,0,"ng-template",9),t&2){let e=c(2);d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Gd(t,o){if(t&1&&(le(0),w(1,jd,3,2,"ng-container",2)(2,Ud,1,1,null,5),de()),t&2){let e=c();a(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),a(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Pe(3,Sr,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Wd(t,o){if(t&1&&G(0,"span",7),t&2){let e=c(2);y(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),d("pBind",e.ptm("icon")),V("data-p",e.dataIconP)}}function Qd(t,o){}function Kd(t,o){if(t&1&&w(0,Qd,0,0,"ng-template",9),t&2){let e=c(2);d("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Zd(t,o){if(t&1&&(le(0),w(1,Wd,1,4,"span",3)(2,Kd,1,1,null,5),de()),t&2){let e=c();a(),d("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),a(),d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Pe(3,Sr,e.cx("icon"),e.ptm("icon")))}}function Yd(t,o){if(t&1&&(u(0,"span",7),_(1),p()),t&2){let e=c();y(e.cx("label")),d("pBind",e.ptm("label")),V("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),a(),oe(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function Xd(t,o){if(t&1&&G(0,"p-badge",10),t&2){let e=c();d("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Jd={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},xr=(()=>{class t extends W{name="button";style=Cr;classes=Jd;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var wr=new U("BUTTON_INSTANCE");var Qn=(()=>{class t extends Z{componentName="Button";hostName="";$pcButton=m(wr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(T,{self:!0});_componentStyle=m(xr);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=v(void 0,{transform:I});onClick=new N;onFocus=new N;onBlur=new N;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=m(wt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&qe(r,Ld,5)(r,Nd,5)(r,Bd,5)(r,Qe,4),n&2){let s;D(s=O())&&(i.contentTemplate=s.first),D(s=O())&&(i.loadingIconTemplate=s.first),D(s=O())&&(i.iconTemplate=s.first),D(s=O())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",I],raised:[2,"raised","raised",I],rounded:[2,"rounded","rounded",I],text:[2,"text","text",I],plain:[2,"plain","plain",I],outlined:[2,"outlined","outlined",I],link:[2,"link","link",I],tabindex:[2,"tabindex","tabindex",_e],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",I],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",I],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[H([xr,{provide:wr,useExisting:t},{provide:Y,useExisting:t}]),ue([T]),S],ngContentSelectors:zd,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(ve(),u(0,"button",0),E("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),be(1),w(2,Rd,1,0,"ng-container",1)(3,Gd,3,6,"ng-container",2)(4,Zd,3,6,"ng-container",2)(5,Yd,2,6,"span",3)(6,Xd,1,4,"p-badge",4),p()),n&2&&(y(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),d("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),V("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),a(2),d("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),a(),d("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),a(),d("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),a(),d("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),a(),d("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[pe,Ye,Le,st,gn,It,pn,_r,Wn,re,T],encapsulation:2,changeDetection:0})}return t})(),_n=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=J({imports:[pe,Qn,re,re]})}return t})();function tc(t,o){if(t&1){let e=ie();u(0,"button",10),E("click",function(){F(e);let i=c();return P(i.clearSearch())}),_(1,"\u2715"),p()}}function nc(t,o){if(t&1){let e=ie();u(0,"p-button",11),E("onClick",function(){F(e);let i=c();return P(i.clearAll())}),p()}}var Cn=class t{svc=m(Me);filter=this.svc.filter;typeOptions=[{label:"All Types",value:"all"},{label:"Conceptual",value:"conceptual"},{label:"Code",value:"code"},{label:"Comparison",value:"comparison"},{label:"Scenario",value:"scenario"},{label:"Design",value:"design"},{label:"Behavioral",value:"behavioral"}];onSearch(o){this.svc.setFilter({search:o})}onType(o){this.svc.setFilter({type:o})}onBookmark(o){this.svc.setFilter({bookmarkedOnly:o})}clearSearch(){this.svc.setFilter({search:""})}clearAll(){this.svc.clearFilter()}hasActiveFilter(){let o=this.filter();return o.search!==""||o.type!=="all"||o.bookmarkedOnly}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["qb-search-filter"]],decls:13,vars:6,consts:[[1,"filter-bar"],[1,"search-wrap"],[1,"search-icon"],["pInputText","","type","text","placeholder","Search questions or tags\u2026",1,"search-input",3,"ngModelChange","ngModel"],[1,"clear-btn"],[1,"filter-controls"],["optionLabel","label","optionValue","value","placeholder","All Types","styleClass","filter-select",3,"ngModelChange","options","ngModel"],[1,"bookmark-toggle"],[3,"ngModelChange","ngModel"],["label","Clear","severity","secondary","size","small"],[1,"clear-btn",3,"click"],["label","Clear","severity","secondary","size","small",3,"onClick"]],template:function(e,n){e&1&&(u(0,"div",0)(1,"div",1)(2,"span",2),_(3,"\u{1F50D}"),p(),u(4,"input",3),E("ngModelChange",function(r){return n.onSearch(r)}),p(),B(5,tc,2,0,"button",4),p(),u(6,"div",5)(7,"p-select",6),E("ngModelChange",function(r){return n.onType(r)}),p(),u(8,"label",7)(9,"p-toggleSwitch",8),E("ngModelChange",function(r){return n.onBookmark(r)}),p(),u(10,"span"),_(11,"\u2B50 Bookmarked"),p()(),B(12,nc,1,0,"p-button",9),p()()),e&2&&(a(4),d("ngModel",n.filter().search),a(),z(n.filter().search?5:-1),a(2),d("options",n.typeOptions)("ngModel",n.filter().type),a(2),d("ngModel",n.filter().bookmarkedOnly),a(3),z(n.hasActiveFilter()?12:-1))},dependencies:[ho,an,co,Rn,yo,cn,pr,vn,gr,yn,_n,Qn],styles:[".filter-bar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;padding:12px 16px;background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:10}.search-wrap[_ngcontent-%COMP%]{position:relative;flex:1;min-width:200px}.search-icon[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:.85em;pointer-events:none}.search-input[_ngcontent-%COMP%]{width:100%;padding-left:32px!important;padding-right:32px!important;background:var(--surface-2)!important;border-color:var(--border)!important;color:var(--text)!important;font-size:.9em}.search-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.search-input[_ngcontent-%COMP%]:focus{border-color:var(--accent)!important;outline:none}.clear-btn[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.8em;padding:2px 4px}.clear-btn[_ngcontent-%COMP%]:hover{color:var(--text)}.filter-controls[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:10px}  .filter-select{min-width:150px}  .filter-select .p-select{background:var(--surface-2);border-color:var(--border);color:var(--text);font-size:.875em}  .filter-select .p-select-label{color:var(--text)}.bookmark-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.875em;color:var(--text-muted);white-space:nowrap}.bookmark-toggle[_ngcontent-%COMP%]:hover{color:var(--text)}"],changeDetection:0})};function ic(t,o){t&1&&(u(0,"span",3),_(1,"\u{1F525}"),p())}function oc(t,o){if(t&1&&(u(0,"span"),_(1),p()),t&2){let e=c();y(ai("badge badge-",e.q().type)),a(),oe(e.q().type)}}function rc(t,o){if(t&1){let e=ie();u(0,"div",14)(1,"button",16),E("click",function(i){F(e);let r=c(2);return P(r.showFull(i))}),_(2," Show full answer \u25BE "),p()()}}function sc(t,o){if(t&1&&(u(0,"li",24),G(1,"markdown",13),p()),t&2){let e=o.$implicit;a(),d("data",e)}}function ac(t,o){if(t&1&&(u(0,"section",17)(1,"h4",22),_(2,"KEY POINTS"),p(),u(3,"ul",23),He(4,sc,2,1,"li",24,Rt),p()()),t&2){let e=c(3);a(4),je(e.q().answer.keyPoints)}}function lc(t,o){if(t&1&&(u(0,"section",17)(1,"h4",22),_(2,"DEEP DIVE"),p(),u(3,"div",24),G(4,"markdown",13),p()()),t&2){let e=c(3);a(4),d("data",e.q().answer.detail)}}function dc(t,o){if(t&1&&(u(0,"p",27),_(1),p()),t&2){let e=c(4);a(),oe(e.q().answer.code.note)}}function cc(t,o){if(t&1&&(u(0,"section",17)(1,"div",25)(2,"div",26),_(3),p(),G(4,"markdown",13),p(),B(5,dc,2,1,"p",27),p()),t&2){let e=c(3);a(3),oe(e.q().answer.code.lang),a(),d("data",e.codeMarkdown()),a(),z(e.q().answer.code.note?5:-1)}}function uc(t,o){if(t&1&&(u(0,"section",18)(1,"h4",22),_(2,"\u{1F4A1} ANALOGY"),p(),u(3,"div",24),G(4,"markdown",13),p()()),t&2){let e=c(3);a(4),d("data",e.q().answer.analogy)}}function pc(t,o){if(t&1&&(u(0,"li"),_(1),p()),t&2){let e=o.$implicit;a(),Ie("\u2192 ",e)}}function hc(t,o){if(t&1&&(u(0,"section",17)(1,"h4",22),_(2,"\u27A1 COMMON FOLLOW-UPS"),p(),u(3,"ul",28),He(4,pc,2,1,"li",null,Rt),p()()),t&2){let e=c(3);a(4),je(e.q().answer.followUps)}}function fc(t,o){if(t&1&&(u(0,"li"),_(1),p()),t&2){let e=o.$implicit;a(),Ie("\u2717 ",e)}}function mc(t,o){if(t&1&&(u(0,"section",19)(1,"h4",22),_(2,"\u{1F6A9} RED FLAGS"),p(),u(3,"ul",29),He(4,fc,2,1,"li",null,Rt),p()()),t&2){let e=c(3);a(4),je(e.q().answer.redFlags)}}function gc(t,o){if(t&1){let e=ie();u(0,"div",15),B(1,ac,6,0,"section",17),B(2,lc,5,1,"section",17),B(3,cc,6,3,"section",17),B(4,uc,5,1,"section",18),B(5,hc,6,0,"section",17),B(6,mc,6,0,"section",19),u(7,"div",20)(8,"button",21),E("click",function(i){F(e);let r=c(2);return P(r.collapse(i))}),_(9,"Hide \u25B4"),p()()()}if(t&2){let e,n,i,r=c(2);a(),z((e=r.q().answer.keyPoints)!=null&&e.length?1:-1),a(),z(r.q().answer.detail?2:-1),a(),z(r.q().answer.code?3:-1),a(),z(r.q().answer.analogy?4:-1),a(),z((n=r.q().answer.followUps)!=null&&n.length?5:-1),a(),z((i=r.q().answer.redFlags)!=null&&i.length?6:-1)}}function bc(t,o){if(t&1&&(u(0,"div",10),G(1,"div",11),u(2,"div",12),G(3,"markdown",13),p(),B(4,rc,3,0,"div",14),B(5,gc,10,6,"div",15),p()),t&2){let e=c();a(3),d("data",e.q().answer.oneLiner),a(),z(e.hasFullAnswer()&&e.state()==="one-liner"?4:-1),a(),z(e.state()==="full"?5:-1)}}var xn=class t{question=v.required();svc=m(Me);state=R("collapsed");q=this.question;hasFullAnswer=L(()=>{let o=this.q().answer;return!!(o.keyPoints?.length||o.detail||o.code||o.analogy||o.followUps?.length||o.redFlags?.length)});codeMarkdown=L(()=>{let o=this.q().answer.code;return o?`\`\`\`${o.lang}
${o.snippet}
\`\`\``:""});toggle(){this.state()==="collapsed"?this.state.set("one-liner"):this.state.set("collapsed")}showFull(o){o.stopPropagation(),this.state.set("full")}collapse(o){o.stopPropagation(),this.state.set("collapsed")}onBookmark(o){o.stopPropagation(),this.svc.toggleBookmark(this.q().id)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["qb-question-card"]],inputs:{question:[1,"question"]},decls:14,vars:12,consts:[[1,"qcard"],["role","button",1,"qcard-header",3,"click"],[1,"qcard-meta"],[1,"freq-badge"],[3,"class"],[1,"qcard-question"],[1,"q-text"],[1,"qcard-actions"],[1,"bookmark-btn",3,"click","title"],[1,"caret-icon"],[1,"qcard-body","fade-slide-enter"],[1,"answer-divider"],[1,"one-liner","md-content"],[3,"data"],[1,"show-more-wrap"],[1,"full-answer","fade-slide-enter"],[1,"show-more-btn",3,"click"],[1,"answer-section"],[1,"answer-section","analogy-section"],[1,"answer-section","red-flags-section"],[1,"collapse-wrap"],[1,"collapse-btn",3,"click"],[1,"section-title"],[1,"key-points"],[1,"md-content"],[1,"code-block"],[1,"code-lang-tag"],[1,"code-note"],[1,"followup-list"],[1,"red-flags-list"]],template:function(e,n){e&1&&(u(0,"div",0)(1,"div",1),E("click",function(){return n.toggle()}),u(2,"div",2),B(3,ic,2,0,"span",3),B(4,oc,2,4,"span",4),p(),u(5,"div",5)(6,"span",6),_(7),p()(),u(8,"div",7)(9,"button",8),E("click",function(r){return n.onBookmark(r)}),_(10),p(),u(11,"span",9),_(12),p()()(),B(13,bc,6,3,"div",10),p()),e&2&&(xe("expanded",n.state()!=="collapsed"),a(),V("aria-expanded",n.state()!=="collapsed"),a(2),z(n.q().freq==="high"?3:-1),a(),z(n.q().type?4:-1),a(3),oe(n.q().q),a(2),xe("bookmarked",n.q().bookmarked),d("title",n.q().bookmarked?"Remove bookmark":"Bookmark"),a(),Ie(" ",n.q().bookmarked?"\u2B50":"\u{1F516}"," "),a(2),oe(n.state()==="collapsed"?"\u25B8":"\u25BE"),a(),z(n.state()!=="collapsed"?13:-1))},dependencies:[Zt],styles:['@charset "UTF-8";.qcard[_ngcontent-%COMP%]{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;overflow:hidden;transition:box-shadow .15s ease,border-color .15s ease}.qcard[_ngcontent-%COMP%]:hover{border-color:color-mix(in srgb,var(--accent) 30%,var(--border))}.qcard.expanded[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--accent) 40%,var(--border))}.qcard-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;align-items:start;gap:12px;padding:12px 14px;cursor:pointer;transition:background .12s}.qcard-header[_ngcontent-%COMP%]:hover{background:var(--card-hover)}.qcard-meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;flex-wrap:wrap;padding-top:1px}.freq-badge[_ngcontent-%COMP%]{font-size:.9em}.qcard-question[_ngcontent-%COMP%]{padding-top:1px}.q-text[_ngcontent-%COMP%]{font-size:.95em;font-weight:500;color:var(--text);line-height:1.4}.qcard-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;flex-shrink:0}.bookmark-btn[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;font-size:1em;padding:2px;opacity:.6;transition:opacity .12s,transform .12s}.bookmark-btn[_ngcontent-%COMP%]:hover{opacity:1;transform:scale(1.1)}.bookmark-btn.bookmarked[_ngcontent-%COMP%]{opacity:1}.caret-icon[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.75em}.qcard-body[_ngcontent-%COMP%]{padding:0 14px 14px}.answer-divider[_ngcontent-%COMP%]{height:1px;background:var(--border);margin:0 0 12px}.one-liner[_ngcontent-%COMP%]{font-size:.9em;color:var(--text);line-height:1.6}.show-more-wrap[_ngcontent-%COMP%]{margin-top:12px;text-align:center}.show-more-btn[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border);color:var(--accent);padding:6px 18px;border-radius:20px;cursor:pointer;font-size:.8em;font-weight:600;transition:background .12s,border-color .12s}.show-more-btn[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 12%,var(--surface-2));border-color:var(--accent)}.full-answer[_ngcontent-%COMP%]{margin-top:12px}.answer-section[_ngcontent-%COMP%]{margin-bottom:16px}.section-title[_ngcontent-%COMP%]{font-size:.7em;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:8px}.key-points[_ngcontent-%COMP%]{list-style:none;padding:0}.key-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:4px 0 4px 16px;position:relative;font-size:.88em}.key-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:var(--accent)}.code-block[_ngcontent-%COMP%]{position:relative;background:var(--code-bg);border:1px solid var(--border);border-radius:8px;overflow:hidden}.code-block[_ngcontent-%COMP%]     pre{border:none;border-radius:0;margin:0}.code-lang-tag[_ngcontent-%COMP%]{position:absolute;top:8px;right:10px;font-size:.7em;color:var(--text-muted);background:var(--surface-2);padding:2px 7px;border-radius:4px;font-family:monospace;z-index:1}.code-note[_ngcontent-%COMP%]{font-size:.8em;color:var(--text-muted);margin-top:6px;font-style:italic}.analogy-section[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--accent) 6%,var(--surface-2));border:1px solid color-mix(in srgb,var(--accent) 20%,var(--border));border-radius:6px;padding:10px 12px}.followup-list[_ngcontent-%COMP%]{list-style:none;padding:0}.followup-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.88em;color:var(--text-muted);padding:3px 0}.red-flags-section[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--danger) 6%,var(--surface-2));border:1px solid color-mix(in srgb,var(--danger) 20%,var(--border));border-radius:6px;padding:10px 12px}.red-flags-list[_ngcontent-%COMP%]{list-style:none;padding:0}.red-flags-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.88em;color:color-mix(in srgb,var(--danger) 80%,var(--text));padding:3px 0}.collapse-wrap[_ngcontent-%COMP%]{text-align:center;margin-top:8px}.collapse-btn[_ngcontent-%COMP%]{background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.78em;padding:4px 12px;border-radius:10px;transition:color .12s,background .12s}.collapse-btn[_ngcontent-%COMP%]:hover{color:var(--text);background:var(--surface-2)}'],changeDetection:0})};function vc(t,o){t&1&&(u(0,"div",5),G(1,"p-progressSpinner",7),u(2,"span"),_(3,"Loading cheat sheet\u2026"),p()())}function yc(t,o){if(t&1&&(u(0,"div",6),G(1,"markdown",8),p()),t&2){let e=c(2);a(),d("data",e.content())}}function _c(t,o){if(t&1&&(u(0,"div",4),B(1,vc,4,0,"div",5)(2,yc,2,1,"div",6),p()),t&2){let e=c();a(),z(e.loading()?1:2)}}var wn=class t{topicId=v.required();svc=m(Me);expanded=R(!1);loading=R(!1);content=R("");constructor(){ge(()=>{this.topicId()&&(this.expanded.set(!1),this.content.set(""))})}async toggle(){let o=!this.expanded();if(this.expanded.set(o),o&&!this.content()){this.loading.set(!0);let e=await this.svc.loadCheatSheet(this.topicId());this.content.set(e),this.loading.set(!1)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["qb-cheat-sheet-panel"]],inputs:{topicId:[1,"topicId"]},decls:7,vars:4,consts:[[1,"cheat-panel"],[1,"cheat-header",3,"click"],[1,"cheat-title"],[1,"cheat-caret"],[1,"cheat-body","fade-slide-enter"],[1,"cheat-loading"],[1,"md-content"],["styleClass","cheat-spinner","strokeWidth","4","animationDuration",".8s"],[3,"data"]],template:function(e,n){e&1&&(u(0,"div",0)(1,"button",1),E("click",function(){return n.toggle()}),u(2,"span",2),_(3,"\u{1F4CB} Cheat Sheet"),p(),u(4,"span",3),_(5),p()(),B(6,_c,3,1,"div",4),p()),e&2&&(xe("open",n.expanded()),a(5),oe(n.expanded()?"\u25BE":"\u25B8"),a(),z(n.expanded()?6:-1))},dependencies:[Jt,Dt,Zt],styles:[".cheat-panel[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:8px;overflow:hidden;background:var(--surface);margin-bottom:12px}.cheat-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:12px 16px;background:var(--surface);border:none;color:var(--text);cursor:pointer;font-size:.9em;font-weight:600;transition:background .12s}.cheat-header[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.cheat-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.cheat-caret[_ngcontent-%COMP%]{color:var(--text-muted)}.cheat-body[_ngcontent-%COMP%]{padding:16px;border-top:1px solid var(--border);max-height:480px;overflow-y:auto}.cheat-loading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--text-muted);font-size:.875em}  .cheat-spinner{width:18px!important;height:18px!important}  .cheat-spinner .p-progressspinner-circle{stroke:var(--accent)!important}"],changeDetection:0})};var Cc=()=>[1,2,3],xc=(t,o)=>o.id;function wc(t,o){if(t&1){let e=ie();u(0,"div",16),E("click",function(){F(e);let i=c();return P(i.drawerOpen.set(!1))}),p()}}function Sc(t,o){if(t&1){let e=ie();u(0,"div",14),_(1),u(2,"button",17),E("click",function(){F(e);let i=c();return P(i.retry())}),_(3,"Retry"),p()()}if(t&2){let e=c();a(),Ie(" \u26A0\uFE0F ",e.error()," ")}}function Ic(t,o){t&1&&(u(0,"div",15)(1,"div",18),_(2,"\u{1F4D6}"),p(),u(3,"h2"),_(4,"Pick a topic to start"),p(),u(5,"p"),_(6,"Select a topic from the sidebar to browse questions and cheat sheets."),p()())}function Tc(t,o){t&1&&(u(0,"span",24),_(1,"\u2022"),p())}function Ec(t,o){t&1&&(u(0,"div",28),G(1,"div",29)(2,"div",30),p())}function Mc(t,o){t&1&&(u(0,"div",27),He(1,Ec,3,0,"div",28,ni),p()),t&2&&(a(),je(et(0,Cc)))}function Dc(t,o){t&1&&(u(0,"p"),_(1,"You haven't bookmarked any questions yet."),p())}function Oc(t,o){if(t&1){let e=ie();u(0,"p"),_(1,"No questions match your filters."),p(),u(2,"button",33),E("click",function(){F(e);let i=c(4);return P(i.clearFilter())}),_(3,"Clear filters"),p()}}function kc(t,o){if(t&1&&(u(0,"div",31),B(1,Dc,2,0,"p")(2,Oc,4,0),p()),t&2){let e=c(3);a(),z(e.filter().bookmarkedOnly?1:2)}}function Vc(t,o){if(t&1&&G(0,"qb-question-card",34),t&2){let e=o.$implicit;d("question",e)}}function Fc(t,o){if(t&1&&(u(0,"div",32),He(1,Vc,1,1,"qb-question-card",34,xc),p()),t&2){let e=c(3);a(),je(e.visibleQuestions())}}function Pc(t,o){if(t&1&&B(0,kc,3,1,"div",31)(1,Fc,3,0,"div",32),t&2){let e=c(2);z(e.visibleQuestions().length===0?0:1)}}function Ac(t,o){if(t&1&&(u(0,"div",19)(1,"span",20),_(2),p(),u(3,"span",21),_(4,"\u203A"),p(),u(5,"span",22),_(6),p(),u(7,"span",23),_(8),B(9,Tc,2,0,"span",24),p()(),u(10,"div",25),G(11,"qb-cheat-sheet-panel",26)(12,"qb-search-filter"),B(13,Mc,3,1,"div",27),B(14,Pc,2,1),p()),t&2){let e=c();a(2),oe(e.selectedTopicName()),a(4),oe(e.selectedSubtopicName()),a(2),ii(" ",e.visibleQuestions().length," of ",e.totalInSubtopic()," question",e.totalInSubtopic()===1?"":"s"," "),a(),z(e.hasActiveFilter()?9:-1),a(2),d("topicId",e.selected().topicId),a(2),z(e.loadingTopicId()?13:-1),a(),z(e.loadingTopicId()?-1:14)}}var Ir=class t{svc=m(Me);selected=this.svc.selected;visibleQuestions=this.svc.visibleQuestions;loadingTopicId=this.svc.loadingTopicId;error=this.svc.error;filter=this.svc.filter;isDark=this.svc.isDark;drawerOpen=R(!1);selectedTopicName=L(()=>{let o=this.selected();return o?this.svc.topics().find(e=>e.id===o.topicId)?.name??"":""});selectedSubtopicName=L(()=>{let o=this.selected();return o?this.svc.topics().find(n=>n.id===o.topicId)?.subtopics.find(n=>n.subtopicId===o.subtopicId)?.subtopicName??"":""});totalInSubtopic=L(()=>{let o=this.selected();return o?this.svc.topics().find(n=>n.id===o.topicId)?.subtopics.find(n=>n.subtopicId===o.subtopicId)?.questionCount??0:0});hasActiveFilter=L(()=>{let o=this.filter();return o.search!==""||o.type!=="all"||o.bookmarkedOnly});async ngOnInit(){this.svc.applyStoredTheme(),await this.svc.init()}toggleTheme(){this.svc.toggleTheme()}clearFilter(){this.svc.clearFilter()}async retry(){await this.svc.init()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-question-bank-page"]],decls:21,vars:8,consts:[[1,"app-shell"],[1,"topbar"],[1,"topbar-left"],[1,"menu-btn",3,"click"],[1,"app-brand"],[1,"topbar-center"],[1,"stats-pill"],[1,"topbar-right"],[1,"theme-btn",3,"click","title"],[1,"layout"],[1,"drawer-backdrop"],[1,"sidebar-col"],[3,"closed"],[1,"main-col"],[1,"error-banner"],[1,"empty-state"],[1,"drawer-backdrop",3,"click"],[1,"retry-btn",3,"click"],[1,"empty-icon"],[1,"breadcrumb-bar"],[1,"bc-topic"],[1,"bc-sep"],[1,"bc-sub"],[1,"bc-count"],[1,"filter-active-dot"],[1,"content-area"],[3,"topicId"],[1,"skeleton-list"],[1,"skeleton-card"],[1,"sk-line","sk-short"],[1,"sk-line","sk-long"],[1,"no-results"],[1,"question-list"],[1,"clear-link",3,"click"],[3,"question"]],template:function(e,n){e&1&&(u(0,"div",0)(1,"header",1)(2,"div",2)(3,"button",3),E("click",function(){return n.drawerOpen.set(!0)}),_(4,"\u2630 Topics"),p(),u(5,"span",4),_(6,"\u{1F4DA} PrepDeck"),p()(),u(7,"div",5)(8,"span",6),_(9,"210 questions \xB7 8 topics"),p()(),u(10,"div",7)(11,"button",8),E("click",function(){return n.toggleTheme()}),_(12),p()()(),u(13,"div",9),B(14,wc,1,0,"div",10),u(15,"aside",11)(16,"qb-topic-sidebar",12),E("closed",function(){return n.drawerOpen.set(!1)}),p()(),u(17,"main",13),B(18,Sc,4,1,"div",14),B(19,Ic,7,0,"div",15)(20,Ac,15,9),p()()()),e&2&&(V("data-theme",n.isDark()?"dark":"light"),a(11),d("title",n.isDark()?"Switch to light":"Switch to dark"),a(),Ie(" ",n.isDark()?"\u2600\uFE0F":"\u{1F319}"," "),a(2),z(n.drawerOpen()?14:-1),a(),xe("drawer-open",n.drawerOpen()),a(3),z(n.error()?18:-1),a(),z(n.selected()?20:19))},dependencies:[en,Cn,xn,wn,_n],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100vh;overflow:hidden}.app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;background:var(--bg);color:var(--text)}.topbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 16px;height:48px;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;z-index:100;gap:12px}.topbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.topbar-center[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center}.topbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.menu-btn[_ngcontent-%COMP%]{display:none;background:var(--surface-2);border:1px solid var(--border);color:var(--text);padding:6px 12px;border-radius:6px;cursor:pointer;font-size:.85em;white-space:nowrap}@media(max-width:768px){.menu-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}}.app-brand[_ngcontent-%COMP%]{font-weight:700;font-size:1em;letter-spacing:-.01em}.stats-pill[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:3px 10px;border-radius:12px;border:1px solid var(--border)}@media(max-width:480px){.stats-pill[_ngcontent-%COMP%]{display:none}}.theme-btn[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:4px 8px;cursor:pointer;font-size:1em;transition:background .12s}.theme-btn[_ngcontent-%COMP%]:hover{background:var(--surface)}.layout[_ngcontent-%COMP%]{display:flex;flex:1;overflow:hidden;position:relative}.sidebar-col[_ngcontent-%COMP%]{width:260px;flex-shrink:0;overflow:hidden}@media(max-width:768px){.sidebar-col[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:280px;z-index:200;transform:translate(-100%);transition:transform .2s ease;box-shadow:4px 0 20px #0006}.sidebar-col.drawer-open[_ngcontent-%COMP%]{transform:translate(0)}}.drawer-backdrop[_ngcontent-%COMP%]{display:none}@media(max-width:768px){.drawer-backdrop[_ngcontent-%COMP%]{display:block;position:fixed;inset:0;background:#00000080;z-index:199}}.main-col[_ngcontent-%COMP%]{flex:1;overflow-y:auto;display:flex;flex-direction:column;background:var(--bg)}.error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 16px;background:color-mix(in srgb,var(--danger) 10%,var(--surface));border-bottom:1px solid color-mix(in srgb,var(--danger) 30%,var(--border));color:var(--danger);font-size:.9em}.retry-btn[_ngcontent-%COMP%]{background:var(--danger);color:#fff;border:none;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:.85em}.retry-btn[_ngcontent-%COMP%]:hover{opacity:.85}.empty-state[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px;text-align:center;color:var(--text-muted)}.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]{font-size:3em}.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--text);font-size:1.2em}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;max-width:320px;line-height:1.6}.breadcrumb-bar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:6px;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--border);font-size:.875em;flex-shrink:0}.bc-topic[_ngcontent-%COMP%], .bc-sep[_ngcontent-%COMP%]{color:var(--text-muted)}.bc-sub[_ngcontent-%COMP%]{color:var(--text);font-weight:600}.bc-count[_ngcontent-%COMP%]{margin-left:auto;color:var(--text-muted);font-size:.9em;display:flex;align-items:center;gap:5px}.filter-active-dot[_ngcontent-%COMP%]{color:var(--accent);font-size:1.2em}.content-area[_ngcontent-%COMP%]{padding:12px 16px 24px;display:flex;flex-direction:column;gap:0;flex:1}.skeleton-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-top:12px}.skeleton-card[_ngcontent-%COMP%]{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:16px;display:flex;flex-direction:column;gap:10px;animation:shimmer 1.2s infinite}.sk-line[_ngcontent-%COMP%]{height:12px;border-radius:6px;background:linear-gradient(90deg,var(--surface-2) 25%,var(--surface) 50%,var(--surface-2) 75%);background-size:200% 100%;animation:_ngcontent-%COMP%_shimmerMove 1.2s infinite}.sk-short[_ngcontent-%COMP%]{width:35%}.sk-long[_ngcontent-%COMP%]{width:75%}@keyframes _ngcontent-%COMP%_shimmerMove{0%{background-position:200% 0}to{background-position:-200% 0}}.no-results[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px;padding:40px;color:var(--text-muted);text-align:center;font-size:.9em}.clear-link[_ngcontent-%COMP%]{background:none;border:1px solid var(--border);color:var(--accent);padding:6px 16px;border-radius:4px;cursor:pointer;font-size:.875em}.clear-link[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.question-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-top:12px}'],changeDetection:0})};export{Ir as QuestionBankPage};
