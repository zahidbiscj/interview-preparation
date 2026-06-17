import{$ as un,A as _t,B as Xn,C as Se,D as Be,E as Jn,F as ei,G as He,H as ti,I as ni,J as Re,K as je,L as dn,M as ot,N as Pt,O as ii,P as oi,Q as si,R as ri,S as li,T as qe,U as ee,V as Ft,W as cn,X as Bt,Y as pn,Z as ai,_ as di,a as vt,aa as hn,b as zn,ba as ci,c as $n,ca as st,d as Fe,da as mt,e as ct,ea as $,f as Mt,fa as pi,g as an,h as Dt,i as Lt,j as pt,k as Hn,l as Rn,m as jn,n as ut,o as yt,p as et,q as qn,r as Wn,s as Qn,t as Un,u as Gn,v as Kn,w as _e,x as Zn,y as Yn,z as ht}from"./chunk-EARJXN6K.js";import{a as mi}from"./chunk-JEYFLVQP.js";import{a as Vt,b as Nt,c as hi,d as At,e as zt,i as $t}from"./chunk-OULARKFS.js";import{a as ui}from"./chunk-FZC4NUMS.js";import{a as We}from"./chunk-2FPMCI6Z.js";import{b as kt,c as Ue,d as it,e as Pe,f as ce,g as we,h as ln,p as Nn,q as An}from"./chunk-OHQFNJ56.js";import{$ as Sn,$a as I,Bb as c,Cb as ge,Db as fe,Eb as ze,Fb as Ye,Gb as k,Hb as M,Ia as In,Ib as Oe,Ja as a,Jb as Xe,Kb as $e,Lb as ke,Mb as v,N as St,Nb as _,O as j,Ob as de,P as se,Pb as Me,R as G,Ra as Et,Rb as kn,Sa as be,Sb as Mn,T as f,Tb as Dn,Ua as En,Ub as Ln,Vb as Pn,Wb as R,Xa as D,Xb as Je,Y as L,Ya as le,Yb as pe,Z as P,Za as me,Zb as De,_ as re,_a as ae,_b as Ce,a as w,aa as Tt,ab as y,ac as Fn,b as Qe,bc as z,c as wn,da as N,ea as Ae,ec as Le,fc as b,gb as F,gc as Bn,hb as W,ia as K,ib as Q,kb as On,kc as T,la as he,lb as Ke,lc as ye,ma as Tn,mb as Ze,mc as Vn,na as C,nb as d,ob as p,pa as Ge,pb as u,qb as Z,rb as at,sb as dt,ta as It,tb as ve,ub as ie,vb as oe,wb as ne,xb as J,yb as Ot,zb as E}from"./chunk-DECZN7DS.js";function tt(...t){if(t){let s=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")s.push(n);else if(i==="object"){let o=Array.isArray(n)?[tt(...n)]:Object.entries(n).map(([r,l])=>l?r:void 0);s=o.length?s.concat(o.filter(r=>!!r)):s}}return s.join(" ").trim()}}var No=Object.defineProperty,fi=Object.getOwnPropertySymbols,Ao=Object.prototype.hasOwnProperty,zo=Object.prototype.propertyIsEnumerable,gi=(t,s,e)=>s in t?No(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,bi=(t,s)=>{for(var e in s||(s={}))Ao.call(s,e)&&gi(t,e,s[e]);if(fi)for(var e of fi(s))zo.call(s,e)&&gi(t,e,s[e]);return t};function vi(...t){if(t){let s=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")s.push(n);else if(i==="object"){let o=Array.isArray(n)?[vi(...n)]:Object.entries(n).map(([r,l])=>l?r:void 0);s=o.length?s.concat(o.filter(r=>!!r)):s}}return s.join(" ").trim()}}function $o(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Ho({skipUndefined:t=!1},...s){return s?.reduce((e,n={})=>{for(let i in n){let o=n[i];if(!(t&&o===void 0))if(i==="style")e.style=bi(bi({},e.style),n.style);else if(i==="class"||i==="className")e[i]=vi(e[i],n[i]);else if($o(o)){let r=e[i];e[i]=r?(...l)=>{r(...l),o(...l)}:o}else e[i]=o}return e},{})}function mn(...t){return Ho({skipUndefined:!1},...t)}var Ht={};function Ve(t="pui_id_"){return Object.hasOwn(Ht,t)||(Ht[t]=0),Ht[t]++,`${t}${Ht[t]}`}var yi=(()=>{class t extends ${name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Y=new G("PARENT_INSTANCE"),U=(()=>{class t{document=f(Tt);platformId=f(It);el=f(Ge);injector=f(Sn);cd=f(Bn);renderer=f(Et);config=f(pi);$parentInstance=f(Y,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=f(yi);baseStyle=f($);scopedStyleEl;parent=this.$params.parent;cn=tt;_themeScopedListener;themeChangeListenerMap=new Map;dt=b();unstyled=b();pt=b();ptOptions=b();$attrSelector=Ve("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=K(void 0);directiveUnstyled=K(void 0);$unstyled=z(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=z(()=>Dt(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>Dt(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||Dt(e,this.$params))}get $style(){return w(w({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){he(e=>{this.document&&!ln(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),he(e=>{this.document&&!ln(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return $n(e)?e(...n):mn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",i={}){return Hn(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),o=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),o?.(...n)}}_load(){mt.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),mt.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Fe(e)&&this.baseStyle.load(e,w({name:"global"},this.$styleOptions))}_loadCoreStyles(){!mt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),mt.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!st.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:o}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,w({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,w({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,w({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(w({name:"global-style"},this.$styleOptions),o),st.setLoadedStyleName("common")}if(!st.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,w({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(w({name:`${this.$style?.name}-style`},this.$styleOptions),n),st.setLoadedStyleName(this.$style?.name)}if(!st.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,w({name:"layer-order",first:!0},this.$styleOptions)),st.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,w({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),mt.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),hn.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(hn.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",i={},o=!0){let r=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:l=!0,mergeProps:h=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},g=o?r?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,m=r?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,Qe(w({},i),{global:g||{}})),x=this._getPTDatasets(n);return l||!l&&m?h?this._mergeProps(h,g,m,x):w(w(w({},g),m),x):w(w({},m),x)}_getPTDatasets(e=""){let n="data-pc-",i=e==="root"&&Fe(this.$pt()?.["data-pc-section"]);return e!=="transition"&&Qe(w({},e==="root"&&Qe(w({[`${n}name`]:pt(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:pt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:pt(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,i){let o=this._getOptionValue(e,n,i);return Lt(o)||Rn(o)?{class:o}:o}_getPT(e,n="",i){let o=(r,l=!1)=>{let h=i?i(r):r,g=pt(n),m=pt(this.$hostName||this.$name);return(l?g!==m?h?.[g]:void 0:h?.[g])??h};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)}_usePT(e,n,i,o){let r=l=>n?.call(this,l,i,o);if(e?.hasOwnProperty("_usept")){let{mergeSections:l=!0,mergeProps:h=!1}=e._usept||this.config?.ptOptions()||{},g=r(e.originalValue),m=r(e.value);return g===void 0&&m===void 0?void 0:Lt(m)?m:Lt(g)?g:l||!l&&m?h?this._mergeProps(h,g,m):w(w({},g),m):m}return r(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,w(w({},this.$params),n))}ptms(e,n={}){return e.reduce((i,o)=>(i=mn(i,this.ptm(o,n))||{},i),{})}ptmo(e={},n="",i={}){return this._getPTValue(e,n,w({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:tt(this._getOptionValue(this.$style.classes,e,w(w({},this.$params),n)))}sx(e="",n=!0,i={}){if(n){let o=this._getOptionValue(this.$style.inlineStyles,e,w(w({},this.$params),i)),r=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,w(w({},this.$params),i));return w(w({},r),o)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=me({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[R([yi,$]),Tn]})}return t})();var S=(()=>{class t{el;renderer;pBind=b(void 0);_attrs=K(void 0);attrs=z(()=>this._attrs()||this.pBind());styles=z(()=>this.attrs()?.style);classes=z(()=>tt(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,he(()=>{let l=this.attrs()||{},{style:i,class:o}=l,r=wn(l,["style","class"]);for(let[h,g]of Object.entries(r))if(h.startsWith("on")&&typeof g=="function"){let m=h.slice(2).toLowerCase();if(!this.listeners.some(x=>x.eventName===m)){let x=this.renderer.listen(this.el.nativeElement,m,g);this.listeners.push({eventName:m,unlisten:x})}}else g==null?this.renderer.removeAttribute(this.el.nativeElement,h):(this.renderer.setAttribute(this.el.nativeElement,h,g.toString()),h in this.el.nativeElement&&(this.el.nativeElement[h]=g))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Mt(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(be(Ge),be(Et))};static \u0275dir=me({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(ke(i.styles()),v(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({})}return t})();var _i=`
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
`;var Ro={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ci=(()=>{class t extends ${name="progressspinner";style=_i;classes=Ro;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var xi=new G("PROGRESSSPINNER_INSTANCE"),Ct=(()=>{class t extends U{componentName="ProgressSpinner";$pcProgressSpinner=f(xi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=f(Ci);static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(n,i){n&2&&(F("aria-label",i.ariaLabel)("role","progressbar")("aria-busy",!0),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[R([Ci,{provide:xi,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(n,i){n&1&&(re(),p(0,"svg",0),Z(1,"circle",1),u()),n&2&&(v(i.cx("spin")),Xe("animation-duration",i.animationDuration),d("pBind",i.ptm("spin")),a(),v(i.cx("circle")),d("pBind",i.ptm("circle")),F("fill",i.fill)("stroke-width",i.strokeWidth))},dependencies:[ce,ee,S],encapsulation:2,changeDetection:0})}return t})(),Rt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[Ct,ee,ee]})}return t})();var jo=(t,s)=>s.id,qo=(t,s)=>s.subtopicId;function Wo(t,s){t&1&&Z(0,"p-progressSpinner",10)}function Qo(t,s){if(t&1&&(p(0,"span",11),_(1),u()),t&2){let e=c().$implicit;a(),de(e.questionCount)}}function Uo(t,s){t&1&&(p(0,"span",12),_(1,"\u2014"),u())}function Go(t,s){if(t&1){let e=J();p(0,"li")(1,"button",14),E("click",function(){let i=L(e).$implicit,o=c(2).$implicit,r=c();return P(r.onSubtopicClick(o.id,i.subtopicId))}),p(2,"span",15),_(3,"\u2022"),u(),p(4,"span",16),_(5),u(),p(6,"span",11),_(7),u()()()}if(t&2){let e=s.$implicit,n=c(2).$implicit,i=c();a(),$e("active",i.isActive(n.id,e.subtopicId)),a(4),de(e.subtopicName),a(2),de(e.questionCount)}}function Ko(t,s){if(t&1&&(p(0,"ul",13),Ke(1,Go,8,4,"li",null,qo),u()),t&2){let e=c().$implicit;a(),Ze(e.subtopics)}}function Zo(t,s){if(t&1){let e=J();p(0,"li",5)(1,"button",6),E("click",function(){let i=L(e).$implicit,o=c();return P(o.onTopicClick(i.id))}),p(2,"span",7),_(3),u(),p(4,"span",8),_(5),u(),p(6,"span",9),_(7),u(),W(8,Wo,1,0,"p-progressSpinner",10)(9,Qo,2,1,"span",11)(10,Uo,2,0,"span",12),u(),W(11,Ko,3,0,"ul",13),u()}if(t&2){let e=s.$implicit,n=c();a(),$e("expanded",e.expanded),F("aria-expanded",e.expanded),a(2),de(e.expanded?"\u25BE":"\u25B8"),a(2),de(e.icon),a(2),de(e.name),a(),Q(n.loadingTopicId()===e.id?8:e.loaded?9:10),a(3),Q(e.expanded&&e.loaded?11:-1)}}var jt=class t{closed=Le();svc=f(We);topics=this.svc.topics;loadingTopicId=this.svc.loadingTopicId;selected=this.svc.selected;onTopicClick(s){this.svc.toggleTopic(s)}onSubtopicClick(s,e){this.svc.select(s,e),this.closed.emit()}isActive(s,e){let n=this.selected();return n?.topicId===s&&n?.subtopicId===e}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["qb-topic-sidebar"]],outputs:{closed:"closed"},decls:9,vars:1,consts:[[1,"sidebar"],[1,"sidebar-header"],[1,"sidebar-title"],[1,"topic-count"],[1,"topic-list"],[1,"topic-item"],[1,"topic-row",3,"click"],[1,"caret"],[1,"topic-icon"],[1,"topic-name"],["styleClass","sidebar-spinner","strokeWidth","4","animationDuration",".8s"],[1,"q-count"],[1,"q-count","muted"],[1,"subtopic-list"],[1,"subtopic-row",3,"click"],[1,"sub-dot"],[1,"sub-name"]],template:function(e,n){e&1&&(p(0,"nav",0)(1,"div",1)(2,"span",2),_(3,"Topics"),u(),p(4,"span",3),_(5),u()(),p(6,"ul",4),Ke(7,Zo,12,8,"li",5,jo),u()()),e&2&&(a(5),Me("",n.topics().length," topics"),a(2),Ze(n.topics()))},dependencies:[Rt,Ct],styles:[".sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:var(--sidebar-bg);border-right:1px solid var(--border);overflow-y:auto}.sidebar-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 12px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--sidebar-bg);z-index:1}.sidebar-title[_ngcontent-%COMP%]{font-weight:700;font-size:.8em;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted)}.topic-count[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:2px 7px;border-radius:10px}.topic-list[_ngcontent-%COMP%]{list-style:none;padding:8px 0;flex:1}.topic-item[_ngcontent-%COMP%]{width:100%}.topic-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:8px 14px;background:none;border:none;color:var(--text);cursor:pointer;text-align:left;font-size:.92em;font-weight:500;transition:background .12s ease;border-radius:0}.topic-row[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.topic-row.expanded[_ngcontent-%COMP%]{color:var(--accent)}.caret[_ngcontent-%COMP%]{font-size:.7em;color:var(--text-muted);width:10px;flex-shrink:0}.topic-icon[_ngcontent-%COMP%]{font-size:1em;flex-shrink:0}.topic-name[_ngcontent-%COMP%]{flex:1}.q-count[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:1px 6px;border-radius:10px;min-width:22px;text-align:center;flex-shrink:0}.q-count.muted[_ngcontent-%COMP%]{opacity:.5}  .sidebar-spinner{width:14px!important;height:14px!important}  .sidebar-spinner .p-progressspinner-circle{stroke:var(--accent)!important}.subtopic-list[_ngcontent-%COMP%]{list-style:none;padding:2px 0 4px}.subtopic-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 14px 6px 30px;background:none;border:none;color:var(--text-muted);cursor:pointer;text-align:left;font-size:.875em;transition:background .12s ease,color .12s ease}.subtopic-row[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--text)}.subtopic-row.active[_ngcontent-%COMP%]{color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,transparent);font-weight:600}.subtopic-row.active[_ngcontent-%COMP%]   .sub-dot[_ngcontent-%COMP%]{color:var(--accent)}.sub-dot[_ngcontent-%COMP%]{font-size:.8em;flex-shrink:0}.sub-name[_ngcontent-%COMP%]{flex:1}"],changeDetection:0})};var Wt=(()=>{class t extends U{modelValue=K(void 0);$filled=z(()=>Fe(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=me({type:t,features:[I]})}return t})();var Yo=["*"],Xo={root:"p-fluid"},Si=(()=>{class t extends ${name="fluid";classes=Xo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Ti=new G("FLUID_INSTANCE"),ft=(()=>{class t extends U{componentName="Fluid";$pcFluid=f(Ti,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=f(Si);static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cx("root"))},features:[R([Si,{provide:Ti,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],ngContentSelectors:Yo,decls:1,vars:0,template:function(n,i){n&1&&(ge(),fe(0))},dependencies:[ce],encapsulation:2,changeDetection:0})}return t})();var Ii=`
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
`;var Jo=`
    ${Ii}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,es={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},Ei=(()=>{class t extends ${name="inputtext";style=Jo;classes=es;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Oi=new G("INPUTTEXT_INSTANCE"),Qt=(()=>{class t extends Wt{componentName="InputText";hostName="";ptInputText=b();pInputTextPT=b();pInputTextUnstyled=b();bindDirectiveInstance=f(S,{self:!0});$pcInputText=f(Oi,{optional:!0,skipSelf:!0})??void 0;ngControl=f(hi,{optional:!0,self:!0});pcFluid=f(ft,{optional:!0,host:!0,skipSelf:!0});pSize;variant=b();fluid=b(void 0,{transform:T});invalid=b(void 0,{transform:T});$variant=z(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=f(Ei);constructor(){super(),he(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),he(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=me({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&E("input",function(){return i.onInput()}),n&2&&(F("data-p",i.dataP),v(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[R([Ei,{provide:Oi,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I]})}return t})(),ki=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({})}return t})();var fn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let o=0;o<i.length;o++)e.classList.add(i[o])}else{let i=n.split(" ");for(let o=0;o<i.length;o++)e.className+=" "+i[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var o=0;o<n.length;o++){if(n[o]==e)return i;n[o].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],o=0;for(var r=0;r<i.length;r++){if(i[r]==e)return o;i[r].attributes&&i[r].attributes[n]&&i[r].nodeType==1&&o++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let o=ue=>{if(ue)return getComputedStyle(ue).getPropertyValue("position")==="relative"?ue:o(ue.parentElement)},r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,h=n.getBoundingClientRect(),g=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),x=this.getViewport(),B=o(e)?.getBoundingClientRect()||{top:-1*g,left:-1*m},A,te,V="top";h.top+l+r.height>x.height?(A=h.top-B.top-r.height,V="bottom",h.top+A<0&&(A=-1*h.top)):(A=l+h.top-B.top,V="top");let H=h.left+r.width-x.width,X=h.left-B.left;if(r.width>x.width?te=(h.left-B.left)*-1:H>0?te=X-H:te=h.left-B.left,e.style.top=A+"px",e.style.left=te+"px",e.style.transformOrigin=V,i){let ue=Wn(/-anchor-gutter$/)?.value;e.style.marginTop=V==="bottom"?`calc(${ue??"2px"} * -1)`:ue??""}}static absolutePosition(e,n,i=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=o.height,l=o.width,h=n.offsetHeight,g=n.offsetWidth,m=n.getBoundingClientRect(),x=this.getWindowScrollTop(),O=this.getWindowScrollLeft(),B=this.getViewport(),A,te;m.top+h+r>B.height?(A=m.top+x-r,e.style.transformOrigin="bottom",A<0&&(A=x)):(A=h+m.top+x,e.style.transformOrigin="top"),m.left+l>B.width?te=Math.max(0,m.left+O+g-l):te=m.left+O,e.style.top=A+"px",e.style.left=te+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),o=/(auto|scroll)/,r=l=>{let h=window.getComputedStyle(l,null);return o.test(h.getPropertyValue("overflow"))||o.test(h.getPropertyValue("overflowX"))||o.test(h.getPropertyValue("overflowY"))};for(let l of i){let h=l.nodeType===1&&l.dataset.scrollselectors;if(h){let g=h.split(",");for(let m of g){let x=this.findSingle(l,m);x&&r(x)&&n.push(x)}}l.nodeType!==9&&r(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=i?parseFloat(i):0,r=getComputedStyle(e).getPropertyValue("paddingTop"),l=r?parseFloat(r):0,h=e.getBoundingClientRect(),m=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-o-l,x=e.scrollTop,O=e.clientHeight,B=this.getOuterHeight(n);m<0?e.scrollTop=x+m:m+B>O&&(e.scrollTop=x+m-O+B)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,o=0,r=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=o,i=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(e,n){var i=1,o=50,r=n,l=o/r;let h=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(h)),e.style.opacity=i},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,o=n.getElementsByTagName("body")[0],r=e.innerWidth||i.clientWidth||o.clientWidth,l=e.innerHeight||i.clientHeight||o.clientHeight;return{width:r,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var o=e.indexOf("rv:");return!0}var r=e.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let r of i){let l=getComputedStyle(r);this.isVisible(r)&&l.display!="none"&&l.visibility!="hidden"&&o.push(r)}return o}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let o=getComputedStyle(i);if(this.isVisible(i)&&o.display!="none"&&o.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),o=0;if(i&&i.length>0){let r=i.indexOf(i[0].ownerDocument.activeElement);n?r==-1||r===0?o=i.length-1:o=r-1:r!=-1&&r!==i.length-1&&(o=r+1)}return i[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let r=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...i),o}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(o,r)=>{let l=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[r].flat().reduce((h,g)=>{if(g!=null){let m=typeof g;if(m==="string"||m==="number")h.push(g);else if(m==="object"){let x=Array.isArray(g)?i(o,g):Object.entries(g).map(([O,B])=>o==="style"&&(B||B===0)?`${O.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${B}`:B?O:void 0);h=x.length?h.concat(x.filter(O=>!!O)):h}}return h},l)};Object.entries(n).forEach(([o,r])=>{if(r!=null){let l=o.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),r):o==="pBind"?this.setAttributes(e,r):(r=o==="class"?[...new Set(i("class",r))].join(" ").trim():o==="style"?i("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=r),e.setAttribute(o,r))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Mi(){qn({variableName:ci("scrollbar.width").name})}var gt=class{element;listener;scrollableParents;constructor(s,e=()=>{}){this.element=s,this.listener=e}bindScrollListener(){this.scrollableParents=fn.getScrollableParents(this.element);for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var bt=(()=>{class t extends U{autofocus=!1;focused=!1;platformId=f(It);document=f(Tt);host=f(Ge);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){we(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=fn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=me({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[I]})}return t})();var Ut=(()=>{class t extends Wt{required=b(void 0,{transform:T});invalid=b(void 0,{transform:T});disabled=b(void 0,{transform:T});name=b();_disabled=K(!1);$disabled=z(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=me({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[I]})}return t})();var Di=(()=>{class t extends Ut{pcFluid=f(ft,{optional:!0,host:!0,skipSelf:!0});fluid=b(void 0,{transform:T});variant=b();size=b();inputSize=b();pattern=b();min=b();max=b();step=b();minlength=b();maxlength=b();$variant=z(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=me({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[I]})}return t})();var Li=`
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
`;var ns=["*"],is={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},Pi=(()=>{class t extends ${name="iconfield";style=Li;classes=is;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Fi=new G("ICONFIELD_INSTANCE"),Bi=(()=>{class t extends U{componentName="IconField";hostName="";_componentStyle=f(Pi);$pcIconField=f(Fi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[R([Pi,{provide:Fi,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],ngContentSelectors:ns,decls:1,vars:0,template:function(n,i){n&1&&(ge(),fe(0))},dependencies:[ce,xe],encapsulation:2,changeDetection:0})}return t})();var os=["*"],ss=`
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
`,Vi=(()=>{class t extends ${name="baseicon";css=ss;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ie=(()=>{class t extends U{spin=!1;_componentStyle=f(Vi);getClassNames(){return tt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&v(i.getClassNames())},inputs:{spin:[2,"spin","spin",T]},features:[R([Vi]),I],ngContentSelectors:os,decls:1,vars:0,template:function(n,i){n&1&&(ge(),fe(0))},encapsulation:2,changeDetection:0})}return t})();var rs=["data-p-icon","blank"],Ni=(()=>{class t extends Ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["","data-p-icon","blank"]],features:[I],attrs:rs,decls:1,vars:0,consts:[["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(n,i){n&1&&(re(),ve(0,"rect",0))},encapsulation:2})}return t})();var ls=["data-p-icon","check"],Ai=(()=>{class t extends Ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["","data-p-icon","check"]],features:[I],attrs:ls,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,i){n&1&&(re(),ve(0,"path",0))},encapsulation:2})}return t})();var as=["data-p-icon","chevron-down"],zi=(()=>{class t extends Ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[I],attrs:as,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,i){n&1&&(re(),ve(0,"path",0))},encapsulation:2})}return t})();var ds=["data-p-icon","search"],$i=(()=>{class t extends Ie{pathId;onInit(){this.pathId="url(#"+Ve()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["","data-p-icon","search"]],features:[I],attrs:ds,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(re(),at(0,"g"),ve(1,"path",0),dt(),at(2,"defs")(3,"clipPath",1),ve(4,"rect",2),dt()()),n&2&&(F("clip-path",i.pathId),a(3),Ot("id",i.pathId))},encapsulation:2})}return t})();var cs=["data-p-icon","spinner"],Gt=(()=>{class t extends Ie{pathId;onInit(){this.pathId="url(#"+Ve()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["","data-p-icon","spinner"]],features:[I],attrs:cs,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(re(),at(0,"g"),ve(1,"path",0),dt(),at(2,"defs")(3,"clipPath",1),ve(4,"rect",2),dt()()),n&2&&(F("clip-path",i.pathId),a(3),Ot("id",i.pathId))},encapsulation:2})}return t})();var ps=["data-p-icon","times"],Hi=(()=>{class t extends Ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["","data-p-icon","times"]],features:[I],attrs:ps,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(re(),ve(0,"path",0))},encapsulation:2})}return t})();var us=["*"],hs={root:"p-inputicon"},Ri=(()=>{class t extends ${name="inputicon";classes=hs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),ji=new G("INPUTICON_INSTANCE"),qi=(()=>{class t extends U{componentName="InputIcon";hostName="";styleClass;_componentStyle=f(Ri);$pcInputIcon=f(ji,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[R([Ri,{provide:ji,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],ngContentSelectors:us,decls:1,vars:0,template:function(n,i){n&1&&(ge(),fe(0))},dependencies:[ce,ee,xe],encapsulation:2,changeDetection:0})}return t})();var ms=Object.defineProperty,Wi=Object.getOwnPropertySymbols,fs=Object.prototype.hasOwnProperty,gs=Object.prototype.propertyIsEnumerable,Qi=(t,s,e)=>s in t?ms(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,Ui=(t,s)=>{for(var e in s||(s={}))fs.call(s,e)&&Qi(t,e,s[e]);if(Wi)for(var e of Wi(s))gs.call(s,e)&&Qi(t,e,s[e]);return t},bs=(t,s,e)=>new Promise((n,i)=>{var o=h=>{try{l(e.next(h))}catch(g){i(g)}},r=h=>{try{l(e.throw(h))}catch(g){i(g)}},l=h=>h.done?n(h.value):Promise.resolve(h.value).then(o,r);l((e=e.apply(t,s)).next())}),Kt="animation",xt="transition";function vs(t){return t?t.disabled||!!(t.safe&&di()):!1}function ys(t,s){return t?Ui(Ui({},t),Object.entries(s).reduce((e,[n,i])=>{var o;return e[n]=(o=t[n])!=null?o:i,e},{})):s}function _s(t){let{name:s,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${s}-enter-from`,to:e?.to||`${s}-enter-to`,active:e?.active||`${s}-enter-active`},leave:{from:n?.from||`${s}-leave-from`,to:n?.to||`${s}-leave-to`,active:n?.active||`${s}-leave-active`}}}function Cs(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function xs(t,s){let e=window.getComputedStyle(t),n=B=>{let A=e[`${B}Delay`],te=e[`${B}Duration`];return[A.split(", ").map(cn),te.split(", ").map(cn)]},[i,o]=n(xt),[r,l]=n(Kt),h=Math.max(...o.map((B,A)=>B+i[A])),g=Math.max(...l.map((B,A)=>B+r[A])),m,x=0,O=0;return s===xt?h>0&&(m=xt,x=h,O=o.length):s===Kt?g>0&&(m=Kt,x=g,O=l.length):(x=Math.max(h,g),m=x>0?h>g?xt:Kt:void 0,O=m?m===xt?o.length:l.length:0),{type:m,timeout:x,count:O}}function gn(t,s){return typeof t=="number"?t:typeof t=="object"&&t[s]!=null?t[s]:null}function ws(t,s=!0,e=!1){if(!s&&!e)return;let n=ai(t);s&&un(t,"--pui-motion-height",n.height+"px"),e&&un(t,"--pui-motion-width",n.width+"px")}var Ss={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function Gi(t,s){if(!t)throw new Error("Element is required.");let e={},n=!1,i={},o=null,r={},l=m=>{if(Object.assign(e,ys(m,Ss)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");r=Cs(e),n=vs(e),i=_s(e),o=null},h=m=>bs(null,null,function*(){o?.();let{onBefore:x,onStart:O,onAfter:B,onCancelled:A}=r[m]||{},te={element:t};if(n){x?.(te),O?.(te),B?.(te);return}let{from:V,active:H,to:X}=i[m]||{};return ws(t,e.autoHeight,e.autoWidth),x?.(te),Bt(t,V),Bt(t,H),t.offsetHeight,pn(t,V),Bt(t,X),O?.(te),new Promise(ue=>{let Ee=gn(e.duration,m),Ne=()=>{pn(t,[X,H]),o=null},lt=()=>{Ne(),B?.(te),ue()};o=()=>{Ne(),A?.(te),ue()},Is(t,e.type,Ee,lt)})});l(s);let g={enter:()=>e.enter?h("enter"):Promise.resolve(),leave:()=>e.leave?h("leave"):Promise.resolve(),cancel:()=>{o?.(),o=null},update:(m,x)=>{if(!m)throw new Error("Element is required.");t=m,g.cancel(),l(x)}};return e.appear&&g.enter(),g}var Ts=0;function Is(t,s,e,n){let i=t._motionEndId=++Ts,o=()=>{i===t._motionEndId&&n()};if(e!=null)return setTimeout(o,e);let{type:r,timeout:l,count:h}=xs(t,s);if(!r){n();return}let g=r+"end",m=0,x=()=>{t.removeEventListener(g,O,!0),o()},O=B=>{B.target===t&&++m>=h&&x()};t.addEventListener(g,O,{capture:!0,once:!0}),setTimeout(()=>{m<h&&x()},l+1)}var Es=["*"];function Os(t,s){t&1&&fe(0)}var Zt=new WeakMap;function bn(t,s){if(t)switch(Zt.has(t)||Zt.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight,overflow:t.style.overflow}),s){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0",t.style.overflow="hidden";break}}function Ki(t,s){if(!t)return;let e=Zt.get(t)??t.style;switch(s){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"",t.style.overflow=e?.overflow||"";break}Zt.delete(t)}var ks=`
    .p-motion {
        display: block;
    }
`,Ms={root:"p-motion"},Zi=(()=>{class t extends ${name="motion";style=ks;classes=Ms;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Yi=new G("MOTION_INSTANCE"),vn=(()=>{class t extends U{$pcMotion=f(Yi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(w(w({},this.ptms(["host","root"])),n))}_componentStyle=f(Zi);visible=b(!1);mountOnEnter=b(!0);unmountOnLeave=b(!0);name=b(void 0);type=b(void 0);safe=b(void 0);disabled=b(!1);appear=b(!1);enter=b(!0);leave=b(!0);duration=b(void 0);hideStrategy=b("display");enterFromClass=b(void 0);enterToClass=b(void 0);enterActiveClass=b(void 0);leaveFromClass=b(void 0);leaveToClass=b(void 0);leaveActiveClass=b(void 0);options=b({});onBeforeEnter=Le();onEnter=Le();onAfterEnter=Le();onEnterCancelled=Le();onBeforeLeave=Le();onLeave=Le();onAfterLeave=Le();onLeaveCancelled=Le();motionOptions=z(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=K(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),he(()=>{let e=this.hideStrategy();this.isInitialMount?(bn(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(bn(this.$el,e),this.rendered.set(!0))}),he(()=>{this.motion||(this.motion=Gi(this.$el,this.motionOptions()))}),Vn(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await Pt(),Ki(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount||(await Pt(),this.applyMotionDuration("leave"),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(bn(this.$el,n),this.unmountOnLeave()&&(await Pt(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(e){let n=Fn(this.motionOptions),i=gn(n.duration,e);if(i==null||!this.$el)return;let o=this.$el,r=`${i}ms`;n.type==="transition"?o.style.transitionDuration=r:o.style.animationDuration=r}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Ki(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[R([Zi,{provide:Yi,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],ngContentSelectors:Es,decls:1,vars:1,template:function(n,i){n&1&&(ge(),W(0,Os,1,0)),n&2&&Q(i.rendered()?0:-1)},dependencies:[ce,xe],encapsulation:2})}return t})();var Xi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[vn]})}return t})();var rt=class t{static isArray(s,e=!0){return Array.isArray(s)&&(e||s.length!==0)}static isObject(s,e=!0){return typeof s=="object"&&!Array.isArray(s)&&s!=null&&(e||Object.keys(s).length!==0)}static equals(s,e,n){return n?this.resolveFieldData(s,n)===this.resolveFieldData(e,n):this.equalsByValue(s,e)}static equalsByValue(s,e){if(s===e)return!0;if(s&&e&&typeof s=="object"&&typeof e=="object"){var n=Array.isArray(s),i=Array.isArray(e),o,r,l;if(n&&i){if(r=s.length,r!=e.length)return!1;for(o=r;o--!==0;)if(!this.equalsByValue(s[o],e[o]))return!1;return!0}if(n!=i)return!1;var h=this.isDate(s),g=this.isDate(e);if(h!=g)return!1;if(h&&g)return s.getTime()==e.getTime();var m=s instanceof RegExp,x=e instanceof RegExp;if(m!=x)return!1;if(m&&x)return s.toString()==e.toString();var O=Object.keys(s);if(r=O.length,r!==Object.keys(e).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,O[o]))return!1;for(o=r;o--!==0;)if(l=O[o],!this.equalsByValue(s[l],e[l]))return!1;return!0}return s!==s&&e!==e}static resolveFieldData(s,e){if(s&&e){if(this.isFunction(e))return e(s);if(e.indexOf(".")==-1)return s[e];{let n=e.split("."),i=s;for(let o=0,r=n.length;o<r;++o){if(i==null)return null;i=i[n[o]]}return i}}else return null}static isFunction(s){return!!(s&&s.constructor&&s.call&&s.apply)}static reorderArray(s,e,n){let i;s&&e!==n&&(n>=s.length&&(n%=s.length,e%=s.length),s.splice(n,0,s.splice(e,1)[0]))}static insertIntoOrderedArray(s,e,n,i){if(n.length>0){let o=!1;for(let r=0;r<n.length;r++)if(this.findIndexInList(n[r],i)>e){n.splice(r,0,s),o=!0;break}o||n.push(s)}else n.push(s)}static findIndexInList(s,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]==s){n=i;break}}return n}static contains(s,e){if(s!=null&&e&&e.length){for(let n of e)if(this.equals(s,n))return!0}return!1}static removeAccents(s){return s&&(s=s.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),s}static isDate(s){return Object.prototype.toString.call(s)==="[object Date]"}static isEmpty(s){return s==null||s===""||Array.isArray(s)&&s.length===0||!this.isDate(s)&&typeof s=="object"&&Object.keys(s).length===0}static isNotEmpty(s){return!this.isEmpty(s)}static compare(s,e,n,i=1){let o=-1,r=this.isEmpty(s),l=this.isEmpty(e);return r&&l?o=0:r?o=i:l?o=-i:typeof s=="string"&&typeof e=="string"?o=s.localeCompare(e,n,{numeric:!0}):o=s<e?-1:s>e?1:0,o}static sort(s,e,n=1,i,o=1){let r=t.compare(s,e,i,n),l=n;return(t.isEmpty(s)||t.isEmpty(e))&&(l=o===1?n:o),l*r}static merge(s,e){if(!(s==null&&e==null)){{if((s==null||typeof s=="object")&&(e==null||typeof e=="object"))return w(w({},s||{}),e||{});if((s==null||typeof s=="string")&&(e==null||typeof e=="string"))return[s||"",e||""].join(" ")}return e||s}}static isPrintableCharacter(s=""){return this.isNotEmpty(s)&&s.length===1&&s.match(/\S| /)}static getItemValue(s,...e){return this.isFunction(s)?s(...e):s}static findLastIndex(s,e){let n=-1;if(this.isNotEmpty(s))try{n=s.findLastIndex(e)}catch{n=s.lastIndexOf([...s].reverse().find(e))}return n}static findLast(s,e){let n;if(this.isNotEmpty(s))try{n=s.findLast(e)}catch{n=[...s].reverse().find(e)}return n}static deepEquals(s,e){if(s===e)return!0;if(s&&e&&typeof s=="object"&&typeof e=="object"){var n=Array.isArray(s),i=Array.isArray(e),o,r,l;if(n&&i){if(r=s.length,r!=e.length)return!1;for(o=r;o--!==0;)if(!this.deepEquals(s[o],e[o]))return!1;return!0}if(n!=i)return!1;var h=s instanceof Date,g=e instanceof Date;if(h!=g)return!1;if(h&&g)return s.getTime()==e.getTime();var m=s instanceof RegExp,x=e instanceof RegExp;if(m!=x)return!1;if(m&&x)return s.toString()==e.toString();var O=Object.keys(s);if(r=O.length,r!==Object.keys(e).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,O[o]))return!1;for(o=r;o--!==0;)if(l=O[o],!this.deepEquals(s[l],e[l]))return!1;return!0}return s!==s&&e!==e}static minifyCSS(s){return s&&s.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(s){return this.isString(s)?s.replace(/(-|_)/g,"").toLowerCase():s}static isString(s,e=!0){return typeof s=="string"&&(e||s!=="")}};function Ls(){let t=[],s=(o,r)=>{let l=t.length>0?t[t.length-1]:{key:o,value:r},h=l.value+(l.key===o?0:r)+2;return t.push({key:o,value:h}),h},e=o=>{t=t.filter(r=>r.value!==o)},n=()=>t.length>0?t[t.length-1].value:0,i=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:i,set:(o,r,l)=>{r&&(r.style.zIndex=String(s(o,l)))},clear:o=>{o&&(e(i(o)),o.style.zIndex="")},getCurrent:()=>n(),generateZIndex:s,revertZIndex:e}}var nt=Ls();var Ji=["content"],Fs=["overlay"],eo=["*","*"],Bs=()=>({mode:null}),io=t=>({$implicit:t}),Vs=t=>({mode:t});function Ns(t,s){t&1&&ne(0)}function As(t,s){if(t&1&&(fe(0),y(1,Ns,1,0,"ng-container",3)),t&2){let e=c();a(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",pe(3,io,Je(2,Bs)))}}function zs(t,s){t&1&&ne(0)}function $s(t,s){if(t&1){let e=J();p(0,"div",5,0),E("click",function(){L(e);let i=c(2);return P(i.onOverlayClick())}),p(2,"p-motion",6),E("onBeforeEnter",function(i){L(e);let o=c(2);return P(o.onOverlayBeforeEnter(i))})("onEnter",function(i){L(e);let o=c(2);return P(o.onOverlayEnter(i))})("onAfterEnter",function(i){L(e);let o=c(2);return P(o.onOverlayAfterEnter(i))})("onBeforeLeave",function(i){L(e);let o=c(2);return P(o.onOverlayBeforeLeave(i))})("onLeave",function(i){L(e);let o=c(2);return P(o.onOverlayLeave(i))})("onAfterLeave",function(i){L(e);let o=c(2);return P(o.onOverlayAfterLeave(i))}),p(3,"div",5,1),E("click",function(i){L(e);let o=c(2);return P(o.onOverlayContentClick(i))}),fe(5,1),y(6,zs,1,0,"ng-container",3),u()()()}if(t&2){let e=c(2);ke(e.sx("root")),v(e.cn(e.cx("root"),e.styleClass)),d("pBind",e.ptm("root")),a(2),d("visible",e.visible)("appear",!0)("options",e.computedMotionOptions()),a(),v(e.cn(e.cx("content"),e.contentStyleClass)),d("pBind",e.ptm("content")),a(3),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",pe(15,io,pe(13,Vs,e.overlayMode)))}}function Hs(t,s){if(t&1&&y(0,$s,7,17,"div",4),t&2){let e=c();d("ngIf",e.modalVisible)}}var Rs={root:()=>({position:"absolute",top:"0"})},js=`
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
`,qs={host:"p-overlay-host",root:({instance:t})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":t.modal,"p-overlay-center":t.modal&&t.overlayResponsiveDirection==="center","p-overlay-top":t.modal&&t.overlayResponsiveDirection==="top","p-overlay-top-start":t.modal&&t.overlayResponsiveDirection==="top-start","p-overlay-top-end":t.modal&&t.overlayResponsiveDirection==="top-end","p-overlay-bottom":t.modal&&t.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":t.modal&&t.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":t.modal&&t.overlayResponsiveDirection==="bottom-end","p-overlay-left":t.modal&&t.overlayResponsiveDirection==="left","p-overlay-left-start":t.modal&&t.overlayResponsiveDirection==="left-start","p-overlay-left-end":t.modal&&t.overlayResponsiveDirection==="left-end","p-overlay-right":t.modal&&t.overlayResponsiveDirection==="right","p-overlay-right-start":t.modal&&t.overlayResponsiveDirection==="right-start","p-overlay-right-end":t.modal&&t.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},to=(()=>{class t extends ${name="overlay";style=js;classes=qs;inlineStyles=Rs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),no=new G("OVERLAY_INSTANCE"),oo=(()=>{class t extends U{overlayService;zone;componentName="Overlay";$pcOverlay=f(no,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return rt.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return rt.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return rt.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return rt.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=b(void 0);inline=b(!1);motionOptions=b(void 0);computedMotionOptions=z(()=>w(w({},this.ptm("motion")),this.motionOptions()||this.overlayOptions?.motionOptions));visibleChange=new N;onBeforeShow=new N;onShow=new N;onBeforeHide=new N;onHide=new N;onAnimationStart=new N;onAnimationDone=new N;onBeforeEnter=new N;onEnter=new N;onAfterEnter=new N;onBeforeLeave=new N;onLeave=new N;onAfterLeave=new N;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=b();$appendTo=z(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=f(to);bindDirectiveInstance=f(S,{self:!0});documentKeyboardListener;parentDragSubscription=null;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(we(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return w(w({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return w(w({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Yn(this.target,this.el?.nativeElement)}constructor(e,n){super(),this.overlayService=e,this.zone=n}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,n=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&Be(this.targetEl),this.modal&&yt(this.document?.body,"p-overflow-hidden")}hide(e,n=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&Be(this.targetEl),this.modal&&et(this.document?.body,"p-overflow-hidden");else return}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}container=K(void 0);onOverlayBeforeEnter(e){this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.container.set(this.overlayEl||e.element),this.show(this.overlayEl,!0),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents("onBeforeEnter",e)}onOverlayEnter(e){this.handleEvents("onEnter",e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents("onAfterEnter",e)}onOverlayBeforeLeave(e){this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.handleEvents("onBeforeLeave",e)}onOverlayLeave(e){this.handleEvents("onLeave",e)}onOverlayAfterLeave(e){this.hide(this.overlayEl,!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),nt.clear(this.overlayEl),this.modalVisible=!1,this.cd.markForCheck(),this.handleEvents("onAfterLeave",e)}handleEvents(e,n){this[e].emit(n),this.options&&this.options[e]&&this.options[e](n),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](n)}setZIndex(){this.autoZIndex&&nt.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode])}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?ht(this.document.body,this.overlayEl):ht(this.$appendTo(),this.overlayEl))}alignOverlay(){this.modal||this.overlayEl&&this.targetEl&&(this.overlayEl.style.minWidth=_e(this.targetEl)+"px",this.$appendTo()==="self"?Zn(this.overlayEl,this.targetEl):Kn(this.overlayEl,this.targetEl))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!=="self"&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl)&&this.hide(this.overlayEl,!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new gt(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let i=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&i}):i)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!ot()}):!ot())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!ot()}):!ot())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),nt.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(n){return new(n||t)(be(li),be(Ae))};static \u0275cmp=D({type:t,selectors:[["p-overlay"]],contentQueries:function(n,i,o){if(n&1&&ze(o,Ji,4)(o,qe,4),n&2){let r;k(r=M())&&(i.contentTemplate=r.first),k(r=M())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&Ye(Fs,5)(Ji,5),n&2){let o;k(o=M())&&(i.overlayViewChild=o.first),k(o=M())&&(i.contentViewChild=o.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],inline:[1,"inline"],motionOptions:[1,"motionOptions"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone",onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave"},features:[R([to,{provide:no,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],ngContentSelectors:eo,decls:2,vars:1,consts:[["overlay",""],["content",""],[3,"class","style","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","style","pBind","click",4,"ngIf"],[3,"click","pBind"],["name","p-anchored-overlay",3,"onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","visible","appear","options"]],template:function(n,i){n&1&&(ge(eo),W(0,As,2,5)(1,Hs,1,1,"div",2)),n&2&&Q(i.inline()?0:1)},dependencies:[ce,Ue,Pe,ee,S,Xi,vn],encapsulation:2,changeDetection:0})}return t})();var so=`
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
`;var Ws=`
    ${so}

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
`,Qs={root:"p-ink"},ro=(()=>{class t extends ${name="ripple";style=Ws;classes=Qs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Xt=(()=>{class t extends U{componentName="Ripple";zone=f(Ae);_componentStyle=f(ro);animationListener;mouseDownListener;timeout;constructor(){super(),he(()=>{we(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&et(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!He(n)&&!je(n)){let l=Math.max(_e(this.el.nativeElement),Re(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let i=ni(this.el.nativeElement),o=e.pageX-i.left+this.document.body.scrollTop-je(n)/2,r=e.pageY-i.top+this.document.body.scrollLeft-He(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",o+"px"),!this.$unstyled()&&yt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&(!this.$unstyled()&&et(l,"p-ink-active"),l.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&et(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&et(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ii(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=me({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[R([ro]),I]})}return t})();var lo=["content"],Us=["item"],Gs=["loader"],Ks=["loadericon"],Zs=["element"],Ys=["*"],yn=(t,s)=>({$implicit:t,options:s}),Xs=t=>({numCols:t}),po=t=>({options:t}),Js=()=>({styleClass:"p-virtualscroller-loading-icon"}),er=(t,s)=>({rows:t,columns:s});function tr(t,s){t&1&&ne(0)}function nr(t,s){if(t&1&&(ie(0),y(1,tr,1,0,"ng-container",10),oe()),t&2){let e=c(2);a(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",De(2,yn,e.loadedItems,e.getContentOptions()))}}function ir(t,s){t&1&&ne(0)}function or(t,s){if(t&1&&(ie(0),y(1,ir,1,0,"ng-container",10),oe()),t&2){let e=s.$implicit,n=s.index,i=c(3);a(),d("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",De(2,yn,e,i.getOptions(n)))}}function sr(t,s){if(t&1&&(p(0,"div",11,3),y(2,or,2,5,"ng-container",12),u()),t&2){let e=c(2);ke(e.contentStyle),v(e.cn(e.cx("content"),e.contentStyleClass)),d("pBind",e.ptm("content")),a(2),d("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function rr(t,s){if(t&1&&Z(0,"div",13),t&2){let e=c(2);v(e.cx("spacer")),d("ngStyle",e.spacerStyle)("pBind",e.ptm("spacer"))}}function lr(t,s){t&1&&ne(0)}function ar(t,s){if(t&1&&(ie(0),y(1,lr,1,0,"ng-container",10),oe()),t&2){let e=s.index,n=c(4);a(),d("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",pe(4,po,n.getLoaderOptions(e,n.both&&pe(2,Xs,n.numItemsInViewport.cols))))}}function dr(t,s){if(t&1&&(ie(0),y(1,ar,2,6,"ng-container",14),oe()),t&2){let e=c(3);a(),d("ngForOf",e.loaderArr)}}function cr(t,s){t&1&&ne(0)}function pr(t,s){if(t&1&&(ie(0),y(1,cr,1,0,"ng-container",10),oe()),t&2){let e=c(4);a(),d("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",pe(3,po,Je(2,Js)))}}function ur(t,s){if(t&1&&(re(),Z(0,"svg",15)),t&2){let e=c(4);v(e.cx("loadingIcon")),d("spin",!0)("pBind",e.ptm("loadingIcon"))}}function hr(t,s){if(t&1&&y(0,pr,2,5,"ng-container",6)(1,ur,1,4,"ng-template",null,5,Ce),t&2){let e=Oe(2),n=c(3);d("ngIf",n.loaderIconTemplate||n._loaderIconTemplate)("ngIfElse",e)}}function mr(t,s){if(t&1&&(p(0,"div",11),y(1,dr,2,1,"ng-container",6)(2,hr,3,2,"ng-template",null,4,Ce),u()),t&2){let e=Oe(3),n=c(2);v(n.cx("loader")),d("pBind",n.ptm("loader")),a(),d("ngIf",n.loaderTemplate||n._loaderTemplate)("ngIfElse",e)}}function fr(t,s){if(t&1){let e=J();ie(0),p(1,"div",7,1),E("scroll",function(i){L(e);let o=c();return P(o.onContainerScroll(i))}),y(3,nr,2,5,"ng-container",6)(4,sr,3,7,"ng-template",null,2,Ce)(6,rr,1,4,"div",8)(7,mr,4,5,"div",9),u(),oe()}if(t&2){let e=Oe(5),n=c();a(),v(n.cn(n.cx("root"),n.styleClass)),d("ngStyle",n._style)("pBind",n.ptm("root")),F("id",n._id)("tabindex",n.tabindex),a(2),d("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),a(3),d("ngIf",n._showSpacer),a(),d("ngIf",!n.loaderDisabled&&n._showLoader&&n.d_loading)}}function gr(t,s){t&1&&ne(0)}function br(t,s){if(t&1&&(ie(0),y(1,gr,1,0,"ng-container",10),oe()),t&2){let e=c(2);a(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",De(5,yn,e.items,De(2,er,e._items,e.loadedColumns)))}}function vr(t,s){if(t&1&&(fe(0),y(1,br,2,8,"ng-container",16)),t&2){let e=c();a(),d("ngIf",e.contentTemplate||e._contentTemplate)}}var yr=`
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
`,_r={root:({instance:t})=>["p-virtualscroller",{"p-virtualscroller-inline":t.inline,"p-virtualscroller-both p-both-scroll":t.both,"p-virtualscroller-horizontal p-horizontal-scroll":t.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:t})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!t.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},ao=(()=>{class t extends ${name="virtualscroller";css=yr;classes=_r;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var co=new G("SCROLLER_INSTANCE"),uo=(()=>{class t extends U{zone;componentName="VirtualScroller";bindDirectiveInstance=f(S,{self:!0});$pcScroller=f(co,{optional:!0,skipSelf:!0})??void 0;hostName="";get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i)),Object.entries(e).forEach(([n,i])=>this[`${n}`]!==i&&(this[`${n}`]=i)))}onLazyLoad=new N;onScroll=new N;onScrollIndexChange=new N;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:Array.isArray(e)?e.slice(this._appendOnly?0:this.first.cols,this.last.cols):e):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=f(ao);constructor(e){super(),this.zone=e}onInit(){this.setInitialState()}onChanges(e){let n=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:i,currentValue:o}=e.loading;this.lazy&&i!==o&&o!==this.d_loading&&(this.d_loading=o,n=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:i,currentValue:o}=e.numToleratedItems;i!==o&&o!==this.d_numToleratedItems&&(this.d_numToleratedItems=o)}if(e.options){let{previousValue:i,currentValue:o}=e.options;this.lazy&&i?.loading!==o?.loading&&o?.loading!==this.d_loading&&(this.d_loading=o.loading,n=!0),i?.numToleratedItems!==o?.numToleratedItems&&o?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=o.numToleratedItems)}this.initialized&&!n&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&this.init()}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewInit(){Promise.resolve().then(()=>{this.viewInit()})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host")),this.initialized||this.viewInit()}onDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1}viewInit(){we(this.platformId)&&!this.initialized&&dn(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=je(this.elementViewChild?.nativeElement),this.defaultHeight=He(this.elementViewChild?.nativeElement),this.defaultContentWidth=je(this.contentEl),this.defaultContentHeight=He(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.bindResizeListener(),setTimeout(()=>{this.setSpacerSize(),this.setSize(),this.calculateOptions(),this.calculateAutoSize(),this.cd.detectChanges()},1))}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||Se(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,(this.d_loading===void 0||this.d_loading===!1)&&(this.d_loading=this._loading||!1),this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=this.loaderArr.length>0?this.loaderArr:[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,n="auto"){if(this.both?e.every(o=>o>-1):e>-1){let o=this.first,{scrollTop:r=0,scrollLeft:l=0}=this.elementViewChild?.nativeElement,{numToleratedItems:h}=this.calculateNumItems(),g=this.getContentPosition(),m=this.itemSize,x=(H=0,X)=>H<=X?0:H,O=(H,X,ue)=>H*X+ue,B=(H=0,X=0)=>this.scrollTo({left:H,top:X,behavior:n}),A=this.both?{rows:0,cols:0}:0,te=!1,V=!1;this.both?(A={rows:x(e[0],h[0]),cols:x(e[1],h[1])},B(O(A.cols,m[1],g.left),O(A.rows,m[0],g.top)),V=this.lastScrollPos.top!==r||this.lastScrollPos.left!==l,te=A.rows!==o.rows||A.cols!==o.cols):(A=x(e,h),this.horizontal?B(O(A,m,g.left),r):B(l,O(A,m,g.top)),V=this.lastScrollPos!==(this.horizontal?l:r),te=A!==o),this.isRangeChanged=te,V&&(this.first=A)}}scrollInView(e,n,i="auto"){if(n){let{first:o,viewport:r}=this.getRenderedRange(),l=(m=0,x=0)=>this.scrollTo({left:m,top:x,behavior:i}),h=n==="to-start",g=n==="to-end";if(h){if(this.both)r.first.rows-o.rows>e[0]?l(r.first.cols*this._itemSize[1],(r.first.rows-1)*this._itemSize[0]):r.first.cols-o.cols>e[1]&&l((r.first.cols-1)*this._itemSize[1],r.first.rows*this._itemSize[0]);else if(r.first-o>e){let m=(r.first-1)*this._itemSize;this.horizontal?l(m,0):l(0,m)}}else if(g){if(this.both)r.last.rows-o.rows<=e[0]+1?l(r.first.cols*this._itemSize[1],(r.first.rows+1)*this._itemSize[0]):r.last.cols-o.cols<=e[1]+1&&l((r.first.cols+1)*this._itemSize[1],r.first.rows*this._itemSize[0]);else if(r.last-o<=e+1){let m=(r.first+1)*this._itemSize;this.horizontal?l(m,0):l(0,m)}}}else this.scrollToIndex(e,i)}getRenderedRange(){let e=(o,r)=>r||o?Math.floor(o/(r||o)):0,n=this.first,i=0;if(this.elementViewChild?.nativeElement){let{scrollTop:o,scrollLeft:r}=this.elementViewChild.nativeElement;if(this.both)n={rows:e(o,this._itemSize[0]),cols:e(r,this._itemSize[1])},i={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{let l=this.horizontal?r:o;n=e(l,this._itemSize),i=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:i}}}calculateNumItems(){let e=this.getContentPosition(),n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,o=(g,m)=>m||g?Math.ceil(g/(m||g)):0,r=g=>Math.ceil(g/2),l=this.both?{rows:o(i,this._itemSize[0]),cols:o(n,this._itemSize[1])}:o(this.horizontal?n:i,this._itemSize),h=this.d_numToleratedItems||(this.both?[r(l.rows),r(l.cols)]:r(l));return{numItemsInViewport:l,numToleratedItems:h}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:n}=this.calculateNumItems(),i=(l,h,g,m=!1)=>this.getLast(l+h+(l<g?2:3)*g,m),o=this.first,r=this.both?{rows:i(this.first.rows,e.rows,n[0]),cols:i(this.first.cols,e.cols,n[1],!0)}:i(this.first,e,n);this.last=r,this.numItemsInViewport=e,this.d_numToleratedItems=n,this._showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:o.cols}:0:o,last:Math.min(this._step?this._step:this.last,this._items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,n]=[je(this.contentEl),He(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),n!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[i,o]=[je(this.elementViewChild.nativeElement),He(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=i<this.defaultWidth?i+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=o<this.defaultHeight?o+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,n=!1){return this._items?Math.min(n?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),i=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),o=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),r=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:i,top:o,bottom:r,x:n+i,y:o+r}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement,n=e.parentElement?.parentElement,i=e.offsetWidth,o=n?.offsetWidth||0,r=this._scrollWidth||`${i||o}px`,l=e.offsetHeight,h=n?.offsetHeight||0,g=this._scrollHeight||`${l||h}px`,m=(x,O)=>e.style[x]=O;this.both||this.horizontal?(m("height",g),m("width",r)):m("height",g)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),n=(i,o,r,l=0)=>this.spacerStyle=Qe(w({},this.spacerStyle),{[`${i}`]:(o||[]).length*r+l+"px"});this.both?(n("height",this._items,this._itemSize[0],e.y),n("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?n("width",this._columns||this._items,this._itemSize,e.x):n("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let n=e?e.first:this.first,i=(r,l)=>r*l,o=(r=0,l=0)=>this.contentStyle=Qe(w({},this.contentStyle),{transform:`translate3d(${r}px, ${l}px, 0)`});if(this.both)o(i(n.cols,this._itemSize[1]),i(n.rows,this._itemSize[0]));else{let r=i(n,this._itemSize);this.horizontal?o(r,0):o(0,r)}}}onScrollPositionChange(e){let n=e.target;if(!n)throw new Error("Event target is null");let i=this.getContentPosition(),o=(V,H)=>V?V>H?V-H:V:0,r=(V,H)=>H||V?Math.floor(V/(H||V)):0,l=(V,H,X,ue,Ee,Ne)=>V<=Ee?Ee:Ne?X-ue-Ee:H+Ee-1,h=(V,H,X,ue,Ee,Ne,lt)=>V<=Ne?0:Math.max(0,lt?V<H?X:V-Ne:V>H?X:V-2*Ne),g=(V,H,X,ue,Ee,Ne=!1)=>{let lt=H+ue+2*Ee;return V>=Ee&&(lt+=Ee+1),this.getLast(lt,Ne)},m=o(n.scrollTop,i.top),x=o(n.scrollLeft,i.left),O=this.both?{rows:0,cols:0}:0,B=this.last,A=!1,te=this.lastScrollPos;if(this.both){let V=this.lastScrollPos.top<=m,H=this.lastScrollPos.left<=x;if(!this._appendOnly||this._appendOnly&&(V||H)){let X={rows:r(m,this._itemSize[0]),cols:r(x,this._itemSize[1])},ue={rows:l(X.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],V),cols:l(X.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],H)};O={rows:h(X.rows,ue.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],V),cols:h(X.cols,ue.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],H)},B={rows:g(X.rows,O.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:g(X.cols,O.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},A=O.rows!==this.first.rows||B.rows!==this.last.rows||O.cols!==this.first.cols||B.cols!==this.last.cols||this.isRangeChanged,te={top:m,left:x}}}else{let V=this.horizontal?x:m,H=this.lastScrollPos<=V;if(!this._appendOnly||this._appendOnly&&H){let X=r(V,this._itemSize),ue=l(X,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,H);O=h(X,ue,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,H),B=g(X,O,this.last,this.numItemsInViewport,this.d_numToleratedItems),A=O!==this.first||B!==this.last||this.isRangeChanged,te=V}}return{first:O,last:B,isRangeChanged:A,scrollPos:te}}onScrollChange(e){let{first:n,last:i,isRangeChanged:o,scrollPos:r}=this.onScrollPositionChange(e);if(o){let l={first:n,last:i};if(this.setContentPosition(l),this.first=n,this.last=i,this.lastScrollPos=r,this.handleEvents("onScrollIndexChange",l),this._lazy&&this.isPageChanged(n)){let h={first:this._step?Math.min(this.getPageByFirst(n)*this._step,this._items.length-this._step):n,last:Math.min(this._step?(this.getPageByFirst(n)+1)*this._step:i,this._items.length)};(this.lazyLoadState.first!==h.first||this.lazyLoadState.last!==h.last)&&this.handleEvents("onLazyLoad",h),this.lazyLoadState=h}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this._showLoader){let{isRangeChanged:n}=this.onScrollPositionChange(e);(n||this._step&&this.isPageChanged())&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this._showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){we(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,n=ot()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,n,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(dn(this.elementViewChild?.nativeElement)){let[e,n]=[je(this.elementViewChild?.nativeElement),He(this.elementViewChild?.nativeElement)],[i,o]=[e!==this.defaultWidth,n!==this.defaultHeight];(this.both?i||o:this.horizontal?i:this.vertical&&o)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=n,this.defaultContentWidth=je(this.contentEl),this.defaultContentHeight=He(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,n){return this.options&&this.options[e]?this.options[e](n):this[e].emit(n)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,n)=>this.getLoaderOptions(e,n),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both,scrollTo:this.scrollTo.bind(this),scrollToIndex:this.scrollToIndex.bind(this),orientation:this._orientation,scrollableElement:this.elementViewChild?.nativeElement}}getOptions(e){let n=(this._items||[]).length,i=this.both?this.first.rows+e:this.first+e;return{index:i,count:n,first:i===0,last:i===n-1,even:i%2===0,odd:i%2!==0}}getLoaderOptions(e,n){let i=this.loaderArr.length;return w({index:e,count:i,first:e===0,last:e===i-1,even:e%2===0,odd:e%2!==0,loading:this.d_loading},n)}static \u0275fac=function(n){return new(n||t)(be(Ae))};static \u0275cmp=D({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(n,i,o){if(n&1&&ze(o,lo,4)(o,Us,4)(o,Gs,4)(o,Ks,4)(o,qe,4),n&2){let r;k(r=M())&&(i.contentTemplate=r.first),k(r=M())&&(i.itemTemplate=r.first),k(r=M())&&(i.loaderTemplate=r.first),k(r=M())&&(i.loaderIconTemplate=r.first),k(r=M())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&Ye(Zs,5)(lo,5),n&2){let o;k(o=M())&&(i.elementViewChild=o.first),k(o=M())&&(i.contentViewChild=o.first)}},hostVars:2,hostBindings:function(n,i){n&2&&Xe("height",i.height)},inputs:{hostName:"hostName",id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[R([ao,{provide:co,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],ngContentSelectors:Ys,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle","pBind"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin","pBind"],[4,"ngIf"]],template:function(n,i){if(n&1&&(ge(),y(0,fr,8,10,"ng-container",6)(1,vr,2,1,"ng-template",null,0,Ce)),n&2){let o=Oe(2);d("ngIf",!i._disabled)("ngIfElse",o)}},dependencies:[ce,kt,Ue,Pe,it,Gt,ee,S],encapsulation:2})}return t})();var ho=`
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
`;var Cr={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},mo=(()=>{class t extends ${name="tooltip";style=ho;classes=Cr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var fo=new G("TOOLTIP_INSTANCE"),go=(()=>{class t extends U{zone;viewContainer;componentName="Tooltip";$pcTooltip=f(fo,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;showOnEllipsis=!1;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=b(void 0);$appendTo=z(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,showOnEllipsis:!1,id:Ve("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=f(mo);interactionInProgress=!1;ptTooltip=b();pTooltipPT=b();pTooltipUnstyled=b();constructor(e,n){super(),this.zone=e,this.viewContainer=n,he(()=>{let i=this.ptTooltip()||this.pTooltipPT();i&&this.directivePT.set(i)}),he(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){we(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:!0}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:!0})),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}onChanges(e){e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.showOnEllipsis&&this.setOption({showOnEllipsis:e.showOnEllipsis.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=w(w({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(ut(e.relatedTarget,"p-tooltip")||ut(e.relatedTarget,"p-tooltip-text")||ut(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onTouchStart(e){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener())}onTouchEnd(e){this.isAutoHide()&&this.deactivate()}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",e=>{this.container&&!this.container.contains(e.target)&&!this.el.nativeElement.contains(e.target)&&(this.deactivate(),this.unbindDocumentTouchListener())}))}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null)}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}hasEllipsis(){let e=this.el.nativeElement;return e.offsetWidth<e.scrollWidth||e.offsetHeight<e.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=_t("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let e=_t("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(e),this.tooltipText=_t("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?ht(this.container,this.el.nativeElement):ht(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Xn(this.container,250),this.getOption("tooltipZIndex")==="auto"?nt.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&nt.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e&&typeof e.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[e]||[];for(let[o,r]of i.entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+Un(),i=e.top+Gn();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Se(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=_e(e),i=(Re(e)-Re(this.container))/2;this.alignTooltip(n,i);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=_e(this.container),i=(Re(this.el.nativeElement)-Re(this.container))/2;this.alignTooltip(-n,i),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),i=_e(this.container),o=(_e(this.el.nativeElement)-_e(this.container))/2,r=Re(this.container);this.alignTooltip(o,-r);let l=n.left-this.getHostOffset().left+i/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=l+"px"}getArrowElement(){return Se(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=_e(this.container),i=this.getHostOffset(),o=(_e(this.el.nativeElement)-_e(this.container))/2,r=Re(this.el.nativeElement);this.alignTooltip(o,r);let l=i.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=l+"px"}alignTooltip(e,n){let i=this.getHostOffset(),o=i.left+e,r=i.top+n;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=w(w({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return ut(e,"p-inputwrapper")?Se(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+e,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,o=_e(this.container),r=Re(this.container),l=Qn();return i+o>l.width||i<0||n<0||n+r>l.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new gt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):oi(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&nt.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(be(Ae),be(En))};static \u0275dir=me({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",T],showDelay:[2,"showDelay","showDelay",ye],hideDelay:[2,"hideDelay","hideDelay",ye],life:[2,"life","life",ye],positionTop:[2,"positionTop","positionTop",ye],positionLeft:[2,"positionLeft","positionLeft",ye],autoHide:[2,"autoHide","autoHide",T],fitContent:[2,"fitContent","fitContent",T],hideOnEscape:[2,"hideOnEscape","hideOnEscape",T],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",T],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[R([mo,{provide:fo,useExisting:t},{provide:Y,useExisting:t}]),I]})}return t})();var bo=`
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
`;var wt=t=>({height:t}),_n=t=>({$implicit:t});function xr(t,s){if(t&1&&(re(),Z(0,"svg",6)),t&2){let e=c(2);v(e.cx("optionCheckIcon")),d("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionCheckIcon"))}}function wr(t,s){if(t&1&&(re(),Z(0,"svg",7)),t&2){let e=c(2);v(e.cx("optionBlankIcon")),d("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionBlankIcon"))}}function Sr(t,s){if(t&1&&(ie(0),y(1,xr,1,3,"svg",4)(2,wr,1,3,"svg",5),oe()),t&2){let e=c();a(),d("ngIf",e.selected),a(),d("ngIf",!e.selected)}}function Tr(t,s){if(t&1&&(p(0,"span",8),_(1),u()),t&2){let e=c();d("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionLabel")),a(),de(e.label??"empty")}}function Ir(t,s){t&1&&ne(0)}var Er=["item"],Or=["group"],kr=["loader"],Mr=["selectedItem"],Dr=["header"],vo=["filter"],Lr=["footer"],Pr=["emptyfilter"],Fr=["empty"],Br=["dropdownicon"],Vr=["loadingicon"],Nr=["clearicon"],Ar=["filtericon"],zr=["onicon"],$r=["officon"],Hr=["cancelicon"],Rr=["focusInput"],jr=["editableInput"],qr=["items"],Wr=["scroller"],Qr=["overlay"],Ur=["firstHiddenFocusableEl"],Gr=["lastHiddenFocusableEl"],yo=t=>({class:t}),_o=t=>({options:t}),Co=(t,s)=>({$implicit:t,options:s}),Kr=()=>({});function Zr(t,s){if(t&1&&(ie(0),_(1),oe()),t&2){let e=c(2);a(),de(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Yr(t,s){if(t&1&&ne(0,24),t&2){let e=c(2);d("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",pe(2,_n,e.selectedOption))}}function Xr(t,s){if(t&1&&(p(0,"span"),_(1),u()),t&2){let e=c(3);a(),de(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Jr(t,s){if(t&1&&y(0,Xr,2,1,"span",18),t&2){let e=c(2);d("ngIf",e.isSelectedOptionEmpty())}}function el(t,s){if(t&1){let e=J();p(0,"span",22,3),E("focus",function(i){L(e);let o=c();return P(o.onInputFocus(i))})("blur",function(i){L(e);let o=c();return P(o.onInputBlur(i))})("keydown",function(i){L(e);let o=c();return P(o.onKeyDown(i))}),y(2,Zr,2,1,"ng-container",20)(3,Yr,1,4,"ng-container",23)(4,Jr,1,1,"ng-template",null,4,Ce),u()}if(t&2){let e=Oe(5),n=c();v(n.cx("label")),d("pBind",n.ptm("label"))("pTooltip",n.tooltip)("pTooltipUnstyled",n.unstyled())("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),F("aria-disabled",n.$disabled())("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",n.overlayVisible??!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.$disabled()?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required())("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0)("data-p",n.labelDataP),a(2),d("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate)("ngIfElse",e),a(),d("ngIf",(n.selectedItemTemplate||n._selectedItemTemplate)&&!n.isSelectedOptionEmpty())}}function tl(t,s){if(t&1){let e=J();p(0,"input",25,5),E("input",function(i){L(e);let o=c();return P(o.onEditableInput(i))})("keydown",function(i){L(e);let o=c();return P(o.onKeyDown(i))})("focus",function(i){L(e);let o=c();return P(o.onInputFocus(i))})("blur",function(i){L(e);let o=c();return P(o.onInputBlur(i))}),u()}if(t&2){let e=c();v(e.cx("label")),d("pBind",e.ptm("label"))("pAutoFocus",e.autofocus),F("id",e.inputId)("aria-haspopup","listbox")("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("data-p",e.labelDataP)}}function nl(t,s){if(t&1){let e=J();re(),p(0,"svg",28),E("click",function(i){L(e);let o=c(2);return P(o.clear(i))}),u()}if(t&2){let e=c(2);v(e.cx("clearIcon")),d("pBind",e.ptm("clearIcon")),F("data-pc-section","clearicon")}}function il(t,s){}function ol(t,s){t&1&&y(0,il,0,0,"ng-template")}function sl(t,s){if(t&1){let e=J();p(0,"span",29),E("click",function(i){L(e);let o=c(2);return P(o.clear(i))}),y(1,ol,1,0,null,30),u()}if(t&2){let e=c(2);v(e.cx("clearIcon")),d("pBind",e.ptm("clearIcon")),F("data-pc-section","clearicon"),a(),d("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",pe(6,yo,e.cx("clearIcon")))}}function rl(t,s){if(t&1&&(ie(0),y(1,nl,1,4,"svg",26)(2,sl,2,8,"span",27),oe()),t&2){let e=c();a(),d("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),a(),d("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function ll(t,s){t&1&&ne(0)}function al(t,s){if(t&1&&(ie(0),y(1,ll,1,0,"ng-container",31),oe()),t&2){let e=c(2);a(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function dl(t,s){if(t&1&&Z(0,"span",33),t&2){let e=c(3);v(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon)),d("pBind",e.ptm("loadingIcon"))}}function cl(t,s){if(t&1&&Z(0,"span",33),t&2){let e=c(3);v(e.cn(e.cx("loadingIcon"),"pi pi-spinner pi-spin")),d("pBind",e.ptm("loadingIcon"))}}function pl(t,s){if(t&1&&(ie(0),y(1,dl,1,3,"span",32)(2,cl,1,3,"span",32),oe()),t&2){let e=c(2);a(),d("ngIf",e.loadingIcon),a(),d("ngIf",!e.loadingIcon)}}function ul(t,s){if(t&1&&(ie(0),y(1,al,2,1,"ng-container",18)(2,pl,3,2,"ng-container",18),oe()),t&2){let e=c();a(),d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),a(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function hl(t,s){if(t&1&&Z(0,"span",36),t&2){let e=c(3);v(e.cn(e.cx("dropdownIcon"),e.dropdownIcon)),d("pBind",e.ptm("dropdownIcon"))}}function ml(t,s){if(t&1&&(re(),Z(0,"svg",37)),t&2){let e=c(3);v(e.cx("dropdownIcon")),d("pBind",e.ptm("dropdownIcon"))}}function fl(t,s){if(t&1&&(ie(0),y(1,hl,1,3,"span",34)(2,ml,1,3,"svg",35),oe()),t&2){let e=c(2);a(),d("ngIf",e.dropdownIcon),a(),d("ngIf",!e.dropdownIcon)}}function gl(t,s){}function bl(t,s){t&1&&y(0,gl,0,0,"ng-template")}function vl(t,s){if(t&1&&(p(0,"span",36),y(1,bl,1,0,null,30),u()),t&2){let e=c(2);v(e.cx("dropdownIcon")),d("pBind",e.ptm("dropdownIcon")),a(),d("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",pe(5,yo,e.cx("dropdownIcon")))}}function yl(t,s){if(t&1&&y(0,fl,3,2,"ng-container",18)(1,vl,2,7,"span",34),t&2){let e=c();d("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),a(),d("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function _l(t,s){t&1&&ne(0)}function Cl(t,s){t&1&&ne(0)}function xl(t,s){if(t&1&&(ie(0),y(1,Cl,1,0,"ng-container",30),oe()),t&2){let e=c(3);a(),d("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",pe(2,_o,e.filterOptions))}}function wl(t,s){if(t&1&&(re(),Z(0,"svg",45)),t&2){let e=c(4);d("pBind",e.ptm("filterIcon"))}}function Sl(t,s){}function Tl(t,s){t&1&&y(0,Sl,0,0,"ng-template")}function Il(t,s){if(t&1&&(p(0,"span",36),y(1,Tl,1,0,null,31),u()),t&2){let e=c(4);d("pBind",e.ptm("filterIcon")),a(),d("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function El(t,s){if(t&1){let e=J();p(0,"p-iconfield",41)(1,"input",42,10),E("input",function(i){L(e);let o=c(3);return P(o.onFilterInputChange(i))})("keydown",function(i){L(e);let o=c(3);return P(o.onFilterKeyDown(i))})("blur",function(i){L(e);let o=c(3);return P(o.onFilterBlur(i))}),u(),p(3,"p-inputicon",41),y(4,wl,1,1,"svg",43)(5,Il,2,2,"span",44),u()()}if(t&2){let e=c(3);d("pt",e.ptm("pcFilterContainer"))("unstyled",e.unstyled()),a(),v(e.cx("pcFilter")),d("pSize",e.size())("value",e._filterValue()||"")("variant",e.$variant())("pt",e.ptm("pcFilter"))("unstyled",e.unstyled()),F("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),a(2),d("pt",e.ptm("pcFilterIconContainer"))("unstyled",e.unstyled()),a(),d("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),a(),d("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function Ol(t,s){if(t&1&&(p(0,"div",29),E("click",function(n){return n.stopPropagation()}),y(1,xl,2,4,"ng-container",20)(2,El,6,17,"ng-template",null,9,Ce),u()),t&2){let e=Oe(3),n=c(2);v(n.cx("header")),d("pBind",n.ptm("header")),a(),d("ngIf",n.filterTemplate||n._filterTemplate)("ngIfElse",e)}}function kl(t,s){t&1&&ne(0)}function Ml(t,s){if(t&1&&y(0,kl,1,0,"ng-container",30),t&2){let e=s.$implicit,n=s.options;c(2);let i=Oe(9);d("ngTemplateOutlet",i)("ngTemplateOutletContext",De(2,Co,e,n))}}function Dl(t,s){t&1&&ne(0)}function Ll(t,s){if(t&1&&y(0,Dl,1,0,"ng-container",30),t&2){let e=s.options,n=c(4);d("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",pe(2,_o,e))}}function Pl(t,s){t&1&&(ie(0),y(1,Ll,1,4,"ng-template",null,12,Ce),oe())}function Fl(t,s){if(t&1){let e=J();p(0,"p-scroller",46,11),E("onLazyLoad",function(i){L(e);let o=c(2);return P(o.onLazyLoad.emit(i))}),y(2,Ml,1,5,"ng-template",null,2,Ce)(4,Pl,3,0,"ng-container",18),u()}if(t&2){let e=c(2);ke(pe(9,wt,e.scrollHeight)),d("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions)("pt",e.ptm("virtualScroller")),a(4),d("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Bl(t,s){t&1&&ne(0)}function Vl(t,s){if(t&1&&(ie(0),y(1,Bl,1,0,"ng-container",30),oe()),t&2){c();let e=Oe(9),n=c();a(),d("ngTemplateOutlet",e)("ngTemplateOutletContext",De(3,Co,n.visibleOptions(),Je(2,Kr)))}}function Nl(t,s){if(t&1&&(p(0,"span",36),_(1),u()),t&2){let e=c(2).$implicit,n=c(3);v(n.cx("optionGroupLabel")),d("pBind",n.ptm("optionGroupLabel")),a(),de(n.getOptionGroupLabel(e.optionGroup))}}function Al(t,s){t&1&&ne(0)}function zl(t,s){if(t&1&&(ie(0),p(1,"li",50),y(2,Nl,2,4,"span",34)(3,Al,1,0,"ng-container",30),u(),oe()),t&2){let e=c(),n=e.$implicit,i=e.index,o=c().options,r=c(2);a(),v(r.cx("optionGroup")),d("ngStyle",pe(8,wt,o.itemSize+"px"))("pBind",r.ptm("optionGroup")),F("id",r.id+"_"+r.getOptionIndex(i,o)),a(),d("ngIf",!r.groupTemplate&&!r._groupTemplate),a(),d("ngTemplateOutlet",r.groupTemplate||r._groupTemplate)("ngTemplateOutletContext",pe(10,_n,n.optionGroup))}}function $l(t,s){if(t&1){let e=J();ie(0),p(1,"p-selectItem",51),E("onClick",function(i){L(e);let o=c().$implicit,r=c(3);return P(r.onOptionSelect(i,o))})("onMouseEnter",function(i){L(e);let o=c().index,r=c().options,l=c(2);return P(l.onOptionMouseEnter(i,l.getOptionIndex(o,r)))}),u(),oe()}if(t&2){let e=c(),n=e.$implicit,i=e.index,o=c().options,r=c(2);a(),d("id",r.id+"_"+r.getOptionIndex(i,o))("option",n)("checkmark",r.checkmark)("selected",r.isSelected(n))("label",r.getOptionLabel(n))("disabled",r.isOptionDisabled(n))("template",r.itemTemplate||r._itemTemplate)("focused",r.focusedOptionIndex()===r.getOptionIndex(i,o))("ariaPosInset",r.getAriaPosInset(r.getOptionIndex(i,o)))("ariaSetSize",r.ariaSetSize)("index",i)("unstyled",r.unstyled())("scrollerOptions",o)}}function Hl(t,s){if(t&1&&y(0,zl,4,12,"ng-container",18)(1,$l,2,13,"ng-container",18),t&2){let e=s.$implicit,n=c(3);d("ngIf",n.isOptionGroup(e)),a(),d("ngIf",!n.isOptionGroup(e))}}function Rl(t,s){if(t&1&&_(0),t&2){let e=c(4);Me(" ",e.emptyFilterMessageLabel," ")}}function jl(t,s){t&1&&ne(0,null,14)}function ql(t,s){if(t&1&&y(0,jl,2,0,"ng-container",31),t&2){let e=c(4);d("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function Wl(t,s){if(t&1&&(p(0,"li",50),W(1,Rl,1,1)(2,ql,1,1,"ng-container"),u()),t&2){let e=c().options,n=c(2);v(n.cx("emptyMessage")),d("ngStyle",pe(5,wt,e.itemSize+"px"))("pBind",n.ptm("emptyMessage")),a(),Q(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function Ql(t,s){if(t&1&&_(0),t&2){let e=c(4);Me(" ",e.emptyMessageLabel||e.emptyFilterMessageLabel," ")}}function Ul(t,s){t&1&&ne(0,null,15)}function Gl(t,s){if(t&1&&y(0,Ul,2,0,"ng-container",31),t&2){let e=c(4);d("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Kl(t,s){if(t&1&&(p(0,"li",50),W(1,Ql,1,1)(2,Gl,1,1,"ng-container"),u()),t&2){let e=c().options,n=c(2);v(n.cx("emptyMessage")),d("ngStyle",pe(5,wt,e.itemSize+"px"))("pBind",n.ptm("emptyMessage")),a(),Q(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function Zl(t,s){if(t&1&&(p(0,"ul",47,13),y(2,Hl,2,2,"ng-template",48)(3,Wl,3,7,"li",49)(4,Kl,3,7,"li",49),u()),t&2){let e=s.$implicit,n=s.options,i=c(2);ke(n.contentStyle),v(i.cn(i.cx("list"),n.contentStyleClass)),d("pBind",i.ptm("list")),F("id",i.id+"_list")("aria-label",i.listLabel),a(2),d("ngForOf",e),a(),d("ngIf",i.filterValue&&i.isEmpty()),a(),d("ngIf",!i.filterValue&&i.isEmpty())}}function Yl(t,s){t&1&&ne(0)}function Xl(t,s){if(t&1){let e=J();p(0,"div",38)(1,"span",39,6),E("focus",function(i){L(e);let o=c();return P(o.onFirstHiddenFocus(i))}),u(),y(3,_l,1,0,"ng-container",31)(4,Ol,4,5,"div",27),p(5,"div",36),y(6,Fl,5,11,"p-scroller",40)(7,Vl,2,6,"ng-container",18)(8,Zl,5,10,"ng-template",null,7,Ce),u(),y(10,Yl,1,0,"ng-container",31),p(11,"span",39,8),E("focus",function(i){L(e);let o=c();return P(o.onLastHiddenFocus(i))}),u()()}if(t&2){let e=c();v(e.cn(e.cx("overlay"),e.panelStyleClass)),d("ngStyle",e.panelStyle)("pBind",e.ptm("overlay")),F("data-p",e.overlayDataP),a(),d("pBind",e.ptm("hiddenFirstFocusableEl")),F("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),a(2),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),d("ngIf",e.filter),a(),v(e.cx("listContainer")),Xe("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),d("pBind",e.ptm("listContainer")),a(),d("ngIf",e.virtualScroll),a(),d("ngIf",!e.virtualScroll),a(3),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),a(),d("pBind",e.ptm("hiddenLastFocusableEl")),F("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var Jl=`
    ${bo}

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
`,ea={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled","p-focus":t.focused,"p-invalid":t.invalid(),"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size()==="small","p-select-lg p-inputfield-lg":t.size()==="large"}],label:({instance:t})=>["p-select-label",{"p-placeholder":t.placeholder()&&t.label()===t.placeholder(),"p-select-label-empty":!t.editable&&!t.selectedItemTemplate&&(t.label()===void 0||t.label()===null||t.label()==="p-emptylabel"||t.label().length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingIcon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t})=>["p-select-option",{"p-select-option-selected":t.selected&&!t.checkmark,"p-disabled":t.disabled,"p-focus":t.focused}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},Jt=(()=>{class t extends ${name="select";style=Jl;classes=ea;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var xo=new G("SELECT_INSTANCE"),ta=new G("SELECT_ITEM_INSTANCE"),na={provide:Vt,useExisting:St(()=>en),multi:!0},ia=(()=>{class t extends U{hostName="select";$pcSelectItem=f(ta,{optional:!0,skipSelf:!0})??void 0;$pcSelect=f(xo,{optional:!0,skipSelf:!0})??void 0;id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;index;scrollerOptions;onClick=new N;onMouseEnter=new N;_componentStyle=f(Jt);onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}getPTOptions(){return this.$pcSelect?.getPTItemOptions?.(this.option,this.scrollerOptions,this.index??0,"option")??this.$pcSelect?.ptm("option",{context:{option:this.option,selected:this.selected,focused:this.focused,disabled:this.disabled}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",T],focused:[2,"focused","focused",T],label:"label",disabled:[2,"disabled","disabled",T],visible:[2,"visible","visible",T],itemSize:[2,"itemSize","itemSize",ye],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",T],index:"index",scrollerOptions:"scrollerOptions"},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[R([Jt,{provide:Y,useExisting:t}]),I],decls:4,vars:21,consts:[["role","option","pRipple","",3,"click","mouseenter","id","pBind","ngStyle"],[4,"ngIf"],[3,"pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],["data-p-icon","blank",3,"class","pBind",4,"ngIf"],["data-p-icon","check",3,"pBind"],["data-p-icon","blank",3,"pBind"],[3,"pBind"]],template:function(n,i){n&1&&(p(0,"li",0),E("click",function(r){return i.onOptionClick(r)})("mouseenter",function(r){return i.onOptionMouseEnter(r)}),y(1,Sr,3,2,"ng-container",1)(2,Tr,2,2,"span",2)(3,Ir,1,0,"ng-container",3),u()),n&2&&(v(i.cx("option")),d("id",i.id)("pBind",i.getPTOptions())("ngStyle",pe(17,wt,(i.scrollerOptions==null?null:i.scrollerOptions.itemSize)+"px")),F("aria-label",i.label)("aria-setsize",i.ariaSetSize)("aria-posinset",i.ariaPosInset)("aria-selected",i.selected)("data-p-focused",i.focused)("data-p-highlight",i.selected)("data-p-selected",i.selected)("data-p-disabled",i.disabled),a(),d("ngIf",i.checkmark),a(),d("ngIf",!i.template),a(),d("ngTemplateOutlet",i.template)("ngTemplateOutletContext",pe(19,_n,i.option)))},dependencies:[ce,Ue,Pe,it,ee,Xt,Ai,Ni,xe,S],encapsulation:2})}return t})(),en=(()=>{class t extends Di{zone;filterService;componentName="Select";bindDirectiveInstance=f(S,{self:!0});id;scrollHeight="200px";filter;panelStyle;styleClass;panelStyleClass;readonly;editable;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){zn(e,this._options())||this._options.set(e)}appendTo=b(void 0);motionOptions=b(void 0);onChange=new N;onFilter=new N;onFocus=new N;onBlur=new N;onClick=new N;onShow=new N;onHide=new N;onClear=new N;onLazyLoad=new N;_componentStyle=f(Jt);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;itemsWrapper;$appendTo=z(()=>this.appendTo()||this.config.overlayAppendTo());itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=K(null);_placeholder=K(void 0);value;hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=K(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=K(-1);labelId;listId;clicked=K(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Ft.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(Ft.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.$disabled()}get listLabel(){return this.config.getTranslation(Ft.ARIA).listLabel}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=z(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let i=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options?.filter(o=>o.label?o.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:o.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let o=this.options||[],r=[];return o.forEach(l=>{let g=this.getOptionGroupChildren(l).filter(m=>i?.includes(m));g.length>0&&r.push(Qe(w({},l),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...g]}))}),this.flatOptions(r)}return i}return e});label=z(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=e.findIndex(i=>this.isOptionValueEqualsModelValue(i));if(n!==-1){let i=e[n];return this.getOptionLabel(i)}return this.placeholder()||"p-emptylabel"});selectedOption;constructor(e,n){super(),this.zone=e,this.filterService=n,he(()=>{let i=this.modelValue(),o=this.visibleOptions();if(o&&Fe(o)){let r=this.findSelectedOptionIndex();if(r!==-1||i===void 0||typeof i=="string"&&i.length===0||this.isModelValueNotSet()||this.editable)this.selectedOption=o[r];else{let l=o.findIndex(h=>this.isSelected(h));l!==-1&&(this.selectedOption=o[l])}}vt(o)&&(i===void 0||this.isModelValueNotSet())&&Fe(this.selectedOption)&&(this.selectedOption=null),i!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}onInit(){this.id=this.id||Ve("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){if(this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=Se(this.overlayViewChild?.overlayViewChild?.nativeElement,'li[data-p-selected="true"]');e&&si(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let r=this.getOptionGroupChildren(i);return r&&r.forEach(l=>n.push(l)),n},[])}autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1))}onOptionSelect(e,n,i=!0,o=!1){if(!this.isOptionDisabled(n)){if(!this.isSelected(n)){let r=this.getOptionValue(n);this.updateModel(r,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),o===!1&&this.onChange.emit({originalEvent:e,value:r})}i&&this.hide(!0)}}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeModelValue(e),this.selectedOptionUpdated=!0}allowModelChange(){return!!this.modelValue()&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return e!=null&&!this.isOptionGroup(e)&&Mt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}onAfterViewInit(){this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,n=e?.classList.contains("p-float-label");if(e&&n&&!this.selectedOption){let i=e.querySelector("label");i&&this._placeholder.set(i.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?ct(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?ct(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getPTItemOptions(e,n,i,o){return this.ptm(o,{context:{option:e,index:i,selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}isSelectedOptionEmpty(){return vt(this.selectedOption)}isOptionDisabled(e){return this.optionDisabled?ct(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?ct(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?ct(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}onContainerClick(e){this.$disabled()||this.readonly||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges())}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let n=e.target.value;this.searchValue="",!this.searchOptions(e,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n||null,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:n})},1),!this.overlayVisible&&Fe(n)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&Be(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=Se(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?'[data-pc-name="virtualscroller"]':'[data-pc-section="listcontainer"]'),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&setTimeout(()=>{this.scroller?.scrollToIndex(n)},10)}else{let n=Se(this.itemsWrapper,'[data-p-selected="true"]');n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e)}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&Mi(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&Be(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&Be(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.$disabled())return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),!this.preventModelTouched&&!this.overlayVisible&&this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,n=!1){if(!(this.$disabled()||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&jn(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let i=this.visibleOptions()[n];this.onOptionSelect(e,i,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=Se(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?void 0:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?an(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastOptionIndex(){return an(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,n=!1){if(e.altKey&&!n){if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide()}else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;e.shiftKey?i.setSelectionRange(0,i.value.length):(i.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;if(e.shiftKey)i.setSelectionRange(0,i.value.length);else{let o=i.value.length;i.setSelectionRange(o,o),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,n=!1){!this.editable&&!n&&this.onEnterKey(e)}onEnterKey(e,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}!n&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.preventDefault(),e.stopPropagation())}onTabKey(e,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())Be(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?ei(this.overlayViewChild?.el?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Be(n)}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?ti(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Be(n)}hasFocusableElements(){return Jn(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,o=!1;return i=this.visibleOptions().findIndex(r=>this.isOptionMatched(r)),i!==-1&&(o=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&setTimeout(()=>{this.changeFocusedOptionIndex(e,i)}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?Se(this.el.nativeElement,'[data-pc-section="label"]').focus():Be(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}writeControlValue(e,n){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),n(this.value),this.updateEditableLabel(),this.cd.markForCheck()}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.$disabled(),[this.size()]:this.size(),empty:!this.editable&&!this.selectedItemTemplate&&(!this.label?.()||this.label()==="p-emptylabel"||this.label()?.length===0)})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({["overlay-"+this.$appendTo()]:"overlay-"+this.$appendTo()})}static \u0275fac=function(n){return new(n||t)(be(Ae),be(ri))};static \u0275cmp=D({type:t,selectors:[["p-select"]],contentQueries:function(n,i,o){if(n&1&&ze(o,Er,4)(o,Or,4)(o,kr,4)(o,Mr,4)(o,Dr,4)(o,vo,4)(o,Lr,4)(o,Pr,4)(o,Fr,4)(o,Br,4)(o,Vr,4)(o,Nr,4)(o,Ar,4)(o,zr,4)(o,$r,4)(o,Hr,4)(o,qe,4),n&2){let r;k(r=M())&&(i.itemTemplate=r.first),k(r=M())&&(i.groupTemplate=r.first),k(r=M())&&(i.loaderTemplate=r.first),k(r=M())&&(i.selectedItemTemplate=r.first),k(r=M())&&(i.headerTemplate=r.first),k(r=M())&&(i.filterTemplate=r.first),k(r=M())&&(i.footerTemplate=r.first),k(r=M())&&(i.emptyFilterTemplate=r.first),k(r=M())&&(i.emptyTemplate=r.first),k(r=M())&&(i.dropdownIconTemplate=r.first),k(r=M())&&(i.loadingIconTemplate=r.first),k(r=M())&&(i.clearIconTemplate=r.first),k(r=M())&&(i.filterIconTemplate=r.first),k(r=M())&&(i.onIconTemplate=r.first),k(r=M())&&(i.offIconTemplate=r.first),k(r=M())&&(i.cancelIconTemplate=r.first),k(r=M())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&Ye(vo,5)(Rr,5)(jr,5)(qr,5)(Wr,5)(Qr,5)(Ur,5)(Gr,5),n&2){let o;k(o=M())&&(i.filterViewChild=o.first),k(o=M())&&(i.focusInputViewChild=o.first),k(o=M())&&(i.editableInputViewChild=o.first),k(o=M())&&(i.itemsViewChild=o.first),k(o=M())&&(i.scroller=o.first),k(o=M())&&(i.overlayViewChild=o.first),k(o=M())&&(i.firstHiddenFocusableElementOnOverlay=o.first),k(o=M())&&(i.lastHiddenFocusableElementOnOverlay=o.first)}},hostVars:4,hostBindings:function(n,i){n&1&&E("click",function(r){return i.onContainerClick(r)}),n&2&&(F("id",i.id)("data-p",i.containerDataP),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",T],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",T],editable:[2,"editable","editable",T],tabindex:[2,"tabindex","tabindex",ye],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",T],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",T],checkmark:[2,"checkmark","checkmark",T],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",T],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",group:[2,"group","group",T],showClear:[2,"showClear","showClear",T],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",T],virtualScroll:[2,"virtualScroll","virtualScroll",T],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",ye],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",T],selectOnFocus:[2,"selectOnFocus","selectOnFocus",T],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",T],autofocusFilter:[2,"autofocusFilter","autofocusFilter",T],filterValue:"filterValue",options:"options",appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[R([na,Jt,{provide:xo,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],decls:11,vars:18,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"class","pBind","pTooltip","pTooltipUnstyled","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text",3,"class","pBind","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",3,"pBind"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onBeforeEnter","onAfterLeave","onHide","hostAttrSelector","visible","options","target","appendTo","unstyled","pt","motionOptions"],["role","combobox",3,"focus","blur","keydown","pBind","pTooltip","pTooltipUnstyled","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text",3,"input","keydown","focus","blur","pBind","pAutoFocus"],["data-p-icon","times",3,"class","pBind","click",4,"ngIf"],[3,"class","pBind","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"class","pBind",4,"ngIf"],["aria-hidden","true",3,"pBind"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-down",3,"pBind"],[3,"ngStyle","pBind"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus","pBind"],["hostName","select",3,"items","style","itemSize","autoSize","lazy","options","pt","onLazyLoad",4,"ngIf"],[3,"pt","unstyled"],["pInputText","","type","text","role","searchbox","autocomplete","off",3,"input","keydown","blur","pSize","value","variant","pt","unstyled"],["data-p-icon","search",3,"pBind",4,"ngIf"],[3,"pBind",4,"ngIf"],["data-p-icon","search",3,"pBind"],["hostName","select",3,"onLazyLoad","items","itemSize","autoSize","lazy","options","pt"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle","pBind",4,"ngIf"],["role","option",3,"ngStyle","pBind"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize","index","unstyled","scrollerOptions"]],template:function(n,i){if(n&1){let o=J();y(0,el,6,25,"span",16)(1,tl,2,20,"input",17)(2,rl,3,2,"ng-container",18),p(3,"div",19),y(4,ul,3,2,"ng-container",20)(5,yl,2,2,"ng-template",null,0,Ce),u(),p(7,"p-overlay",21,1),Ln("visibleChange",function(l){return L(o),Dn(i.overlayVisible,l)||(i.overlayVisible=l),P(l)}),E("onBeforeEnter",function(l){return i.onOverlayBeforeEnter(l)})("onAfterLeave",function(l){return i.onOverlayAfterLeave(l)})("onHide",function(){return i.hide()}),y(9,Xl,13,23,"ng-template",null,2,Ce),u()}if(n&2){let o=Oe(6);d("ngIf",!i.editable),a(),d("ngIf",i.editable),a(),d("ngIf",i.isVisibleClearIcon),a(),v(i.cx("dropdown")),d("pBind",i.ptm("dropdown")),F("aria-expanded",i.overlayVisible??!1)("data-pc-section","trigger"),a(),d("ngIf",i.loading)("ngIfElse",o),a(3),d("hostAttrSelector",i.$attrSelector),Mn("visible",i.overlayVisible),d("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("unstyled",i.unstyled())("pt",i.ptm("pcOverlay"))("motionOptions",i.motionOptions())}},dependencies:[ce,kt,Ue,Pe,it,ia,oo,go,bt,Hi,zi,$i,Qt,Bi,qi,uo,ee,xe,S],encapsulation:2,changeDetection:0})}return t})(),wo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[en,ee,ee]})}return t})();var So=`
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
`;var sa=["handle"],ra=["input"],la=t=>({checked:t});function aa(t,s){t&1&&ne(0)}function da(t,s){if(t&1&&y(0,aa,1,0,"ng-container",3),t&2){let e=c();d("ngTemplateOutlet",e.handleTemplate||e._handleTemplate)("ngTemplateOutletContext",pe(2,la,e.checked()))}}var ca=`
    ${So}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,pa={root:{position:"relative"}},ua={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},To=(()=>{class t extends ${name="toggleswitch";style=ca;classes=ua;inlineStyles=pa;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Io=new G("TOGGLESWITCH_INSTANCE"),ha={provide:Vt,useExisting:St(()=>tn),multi:!0},tn=(()=>{class t extends Ut{componentName="ToggleSwitch";$pcToggleSwitch=f(Io,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=b();ariaLabelledBy;autofocus;onChange=new N;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=f(To);templates;onHostClick(e){this.onClick(e)}onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="handle"?this._handleTemplate=e.template:this._handleTemplate=e.template})}onClick(e){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:e,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,i,o){if(n&1&&ze(o,sa,4)(o,qe,4),n&2){let r;k(r=M())&&(i.handleTemplate=r.first),k(r=M())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&Ye(ra,5),n&2){let o;k(o=M())&&(i.input=o.first)}},hostVars:7,hostBindings:function(n,i){n&1&&E("click",function(r){return i.onHostClick(r)}),n&2&&(F("data-p-checked",i.checked())("data-p-disabled",i.$disabled())("data-p",i.dataP),ke(i.sx("root")),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",ye],inputId:"inputId",readonly:[2,"readonly","readonly",T],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",T]},outputs:{onChange:"onChange"},features:[R([ha,To,{provide:Io,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(p(0,"input",1,0),E("focus",function(){return i.onFocus()})("blur",function(){return i.onBlur()}),u(),p(2,"div",2)(3,"div",2),W(4,da,1,4,"ng-container"),u()()),n&2&&(v(i.cx("input")),d("checked",i.checked())("pAutoFocus",i.autofocus)("pBind",i.ptm("input")),F("id",i.inputId)("required",i.required()?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name())("tabindex",i.tabindex),a(2),v(i.cx("slider")),d("pBind",i.ptm("slider")),F("data-p",i.dataP),a(),v(i.cx("handle")),d("pBind",i.ptm("handle")),F("data-p",i.dataP),a(),Q(i.handleTemplate||i._handleTemplate?4:-1))},dependencies:[ce,Pe,bt,ee,xe,S],encapsulation:2,changeDetection:0})}return t})(),Eo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[tn,ee,ee]})}return t})();var Oo=`
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
`;var fa=`
    ${Oo}

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
`,ga={root:({instance:t})=>{let s=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":Fe(s)&&String(s).length===1,"p-badge-dot":vt(s),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},ko=(()=>{class t extends ${name="badge";style=fa;classes=ga;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Mo=new G("BADGE_INSTANCE");var Cn=(()=>{class t extends U{componentName="Badge";$pcBadge=f(Mo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=b();badgeSize=b();size=b();severity=b();value=b();badgeDisabled=b(!1,{transform:T});_componentStyle=f(ko);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(F("data-p",i.dataP),v(i.cn(i.cx("root"),i.styleClass())),Xe("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[R([ko,{provide:Mo,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],decls:1,vars:1,template:function(n,i){n&1&&_(0),n&2&&de(i.value())},dependencies:[ce,ee,xe],encapsulation:2,changeDetection:0})}return t})(),Do=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[Cn,ee,ee]})}return t})();var Lo=`
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
`;var va=["content"],ya=["loadingicon"],_a=["icon"],Ca=["*"],Bo=(t,s)=>({class:t,pt:s});function xa(t,s){t&1&&ne(0)}function wa(t,s){if(t&1&&Z(0,"span",7),t&2){let e=c(3);v(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),d("pBind",e.ptm("loadingIcon")),F("aria-hidden",!0)}}function Sa(t,s){if(t&1&&(re(),Z(0,"svg",8)),t&2){let e=c(3);v(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),d("pBind",e.ptm("loadingIcon"))("spin",!0),F("aria-hidden",!0)}}function Ta(t,s){if(t&1&&(ie(0),y(1,wa,1,4,"span",3)(2,Sa,1,5,"svg",6),oe()),t&2){let e=c(2);a(),d("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),a(),d("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function Ia(t,s){}function Ea(t,s){if(t&1&&y(0,Ia,0,0,"ng-template",9),t&2){let e=c(2);d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Oa(t,s){if(t&1&&(ie(0),y(1,Ta,3,2,"ng-container",2)(2,Ea,1,1,null,5),oe()),t&2){let e=c();a(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),a(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",De(3,Bo,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function ka(t,s){if(t&1&&Z(0,"span",7),t&2){let e=c(2);v(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),d("pBind",e.ptm("icon")),F("data-p",e.dataIconP)}}function Ma(t,s){}function Da(t,s){if(t&1&&y(0,Ma,0,0,"ng-template",9),t&2){let e=c(2);d("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function La(t,s){if(t&1&&(ie(0),y(1,ka,1,4,"span",3)(2,Da,1,1,null,5),oe()),t&2){let e=c();a(),d("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),a(),d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",De(3,Bo,e.cx("icon"),e.ptm("icon")))}}function Pa(t,s){if(t&1&&(p(0,"span",7),_(1),u()),t&2){let e=c();v(e.cx("label")),d("pBind",e.ptm("label")),F("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),a(),de(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function Fa(t,s){if(t&1&&Z(0,"p-badge",10),t&2){let e=c();d("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Ba={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,s])=>!!s).reduce((s,[e])=>s+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Po=(()=>{class t extends ${name="button";style=Lo;classes=Ba;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Fo=new G("BUTTON_INSTANCE");var xn=(()=>{class t extends U{componentName="Button";hostName="";$pcButton=f(Fo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});_componentStyle=f(Po);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=b(void 0,{transform:T});onClick=new N;onFocus=new N;onBlur=new N;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=f(ft,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-button"]],contentQueries:function(n,i,o){if(n&1&&ze(o,va,5)(o,ya,5)(o,_a,5)(o,qe,4),n&2){let r;k(r=M())&&(i.contentTemplate=r.first),k(r=M())&&(i.loadingIconTemplate=r.first),k(r=M())&&(i.iconTemplate=r.first),k(r=M())&&(i.templates=r)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",T],raised:[2,"raised","raised",T],rounded:[2,"rounded","rounded",T],text:[2,"text","text",T],plain:[2,"plain","plain",T],outlined:[2,"outlined","outlined",T],link:[2,"link","link",T],tabindex:[2,"tabindex","tabindex",ye],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",T],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",T],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[R([Po,{provide:Fo,useExisting:t},{provide:Y,useExisting:t}]),ae([S]),I],ngContentSelectors:Ca,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(ge(),p(0,"button",0),E("click",function(r){return i.onClick.emit(r)})("focus",function(r){return i.onFocus.emit(r)})("blur",function(r){return i.onBlur.emit(r)}),fe(1),y(2,xa,1,0,"ng-container",1)(3,Oa,3,6,"ng-container",2)(4,La,3,6,"ng-container",2)(5,Pa,2,6,"span",3)(6,Fa,1,4,"p-badge",4),u()),n&2&&(v(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),d("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),F("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),a(2),d("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),a(),d("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),a(),d("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),a(),d("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),a(),d("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[ce,Ue,Pe,it,Xt,bt,Gt,Do,Cn,ee,S],encapsulation:2,changeDetection:0})}return t})(),nn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[ce,xn,ee,ee]})}return t})();function Aa(t,s){if(t&1){let e=J();p(0,"button",10),E("click",function(){L(e);let i=c();return P(i.clearSearch())}),_(1,"\u2715"),u()}}function za(t,s){if(t&1){let e=J();p(0,"p-button",11),E("onClick",function(){L(e);let i=c();return P(i.clearAll())}),u()}}var on=class t{svc=f(We);filter=this.svc.filter;typeOptions=[{label:"All Types",value:"all"},{label:"Conceptual",value:"conceptual"},{label:"Code",value:"code"},{label:"Comparison",value:"comparison"},{label:"Scenario",value:"scenario"},{label:"Design",value:"design"},{label:"Behavioral",value:"behavioral"}];onSearch(s){this.svc.setFilter({search:s})}onType(s){this.svc.setFilter({type:s})}onBookmark(s){this.svc.setFilter({bookmarkedOnly:s})}clearSearch(){this.svc.setFilter({search:""})}clearAll(){this.svc.clearFilter()}hasActiveFilter(){let s=this.filter();return s.search!==""||s.type!=="all"||s.bookmarkedOnly}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["qb-search-filter"]],decls:13,vars:6,consts:[[1,"filter-bar"],[1,"search-wrap"],[1,"search-icon"],["pInputText","","type","text","placeholder","Search questions or tags\u2026",1,"search-input",3,"ngModelChange","ngModel"],[1,"clear-btn"],[1,"filter-controls"],["optionLabel","label","optionValue","value","placeholder","All Types","styleClass","filter-select",3,"ngModelChange","options","ngModel"],[1,"bookmark-toggle"],[3,"ngModelChange","ngModel"],["label","Clear","severity","secondary","size","small"],[1,"clear-btn",3,"click"],["label","Clear","severity","secondary","size","small",3,"onClick"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"div",1)(2,"span",2),_(3,"\u{1F50D}"),u(),p(4,"input",3),E("ngModelChange",function(o){return n.onSearch(o)}),u(),W(5,Aa,2,0,"button",4),u(),p(6,"div",5)(7,"p-select",6),E("ngModelChange",function(o){return n.onType(o)}),u(),p(8,"label",7)(9,"p-toggleSwitch",8),E("ngModelChange",function(o){return n.onBookmark(o)}),u(),p(10,"span"),_(11,"\u2B50 Bookmarked"),u()(),W(12,za,1,0,"p-button",9),u()()),e&2&&(a(4),d("ngModel",n.filter().search),a(),Q(n.filter().search?5:-1),a(2),d("options",n.typeOptions)("ngModel",n.filter().type),a(2),d("ngModel",n.filter().bookmarkedOnly),a(3),Q(n.hasActiveFilter()?12:-1))},dependencies:[$t,Nt,At,zt,ki,Qt,wo,en,Eo,tn,nn,xn],styles:[".filter-bar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;padding:12px 16px;background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:10}.search-wrap[_ngcontent-%COMP%]{position:relative;flex:1;min-width:200px}.search-icon[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:.85em;pointer-events:none}.search-input[_ngcontent-%COMP%]{width:100%;padding-left:32px!important;padding-right:32px!important;background:var(--surface-2)!important;border-color:var(--border)!important;color:var(--text)!important;font-size:.9em}.search-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.search-input[_ngcontent-%COMP%]:focus{border-color:var(--accent)!important;outline:none}.clear-btn[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.8em;padding:2px 4px}.clear-btn[_ngcontent-%COMP%]:hover{color:var(--text)}.filter-controls[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:10px}  .filter-select{min-width:150px}  .filter-select .p-select{background:var(--surface-2);border-color:var(--border);color:var(--text);font-size:.875em}  .filter-select .p-select-label{color:var(--text)}.bookmark-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.875em;color:var(--text-muted);white-space:nowrap}.bookmark-toggle[_ngcontent-%COMP%]:hover{color:var(--text)}"],changeDetection:0})};function $a(t,s){t&1&&(p(0,"div",5),Z(1,"p-progressSpinner",7),p(2,"span"),_(3,"Loading cheat sheet\u2026"),u()())}function Ha(t,s){if(t&1&&(p(0,"div",6),Z(1,"markdown",8),u()),t&2){let e=c(2);a(),d("data",e.content())}}function Ra(t,s){if(t&1&&(p(0,"div",4),W(1,$a,4,0,"div",5)(2,Ha,2,1,"div",6),u()),t&2){let e=c();a(),Q(e.loading()?1:2)}}var sn=class t{topicId=b.required();svc=f(We);expanded=K(!1);loading=K(!1);content=K("");constructor(){he(()=>{this.topicId()&&(this.expanded.set(!1),this.content.set(""))})}async toggle(){let s=!this.expanded();if(this.expanded.set(s),s&&!this.content()){this.loading.set(!0);let e=await this.svc.loadCheatSheet(this.topicId());this.content.set(e),this.loading.set(!1)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["qb-cheat-sheet-panel"]],inputs:{topicId:[1,"topicId"]},decls:7,vars:4,consts:[[1,"cheat-panel"],[1,"cheat-header",3,"click"],[1,"cheat-title"],[1,"cheat-caret"],[1,"cheat-body","fade-slide-enter"],[1,"cheat-loading"],[1,"md-content"],["styleClass","cheat-spinner","strokeWidth","4","animationDuration",".8s"],[3,"data"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"button",1),E("click",function(){return n.toggle()}),p(2,"span",2),_(3,"\u{1F4CB} Cheat Sheet"),u(),p(4,"span",3),_(5),u()(),W(6,Ra,3,1,"div",4),u()),e&2&&($e("open",n.expanded()),a(5),de(n.expanded()?"\u25BE":"\u25B8"),a(),Q(n.expanded()?6:-1))},dependencies:[Rt,Ct,ui],styles:[".cheat-panel[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:8px;overflow:hidden;background:var(--surface);margin-bottom:12px}.cheat-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:12px 16px;background:var(--surface);border:none;color:var(--text);cursor:pointer;font-size:.9em;font-weight:600;transition:background .12s}.cheat-header[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.cheat-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.cheat-caret[_ngcontent-%COMP%]{color:var(--text-muted)}.cheat-body[_ngcontent-%COMP%]{padding:16px;border-top:1px solid var(--border);max-height:480px;overflow-y:auto}.cheat-loading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--text-muted);font-size:.875em}  .cheat-spinner{width:18px!important;height:18px!important}  .cheat-spinner .p-progressspinner-circle{stroke:var(--accent)!important}"],changeDetection:0})};var ja=(t,s)=>s.id;function qa(t,s){if(t&1){let e=J();p(0,"button",5),E("click",function(){L(e);let i=c();return P(i.clear())}),_(1,"\u2715"),u()}}function Wa(t,s){if(t&1){let e=J();p(0,"li",7),E("mousedown",function(){let i=L(e).$implicit,o=c(2);return P(o.select(i))})("mouseenter",function(){let i=L(e).$index,o=c(2);return P(o.activeIndex.set(i))}),p(1,"span",8),_(2),u(),p(3,"span"),_(4),u()()}if(t&2){let e=s.$implicit,n=s.$index,i=c(2);$e("active",n===i.activeIndex()),a(2),de(e.q),a(),v(Pn("gs-badge badge-",e.type||"conceptual")),a(),de(e.topicName)}}function Qa(t,s){if(t&1&&(p(0,"ul",4),Ke(1,Wa,5,7,"li",6,ja),u()),t&2){let e=c();a(),Ze(e.results())}}function Ua(t,s){if(t&1&&(p(0,"ul",4)(1,"li",9),_(2),u()()),t&2){let e=c();a(2),Me("No questions match \u201C",e.query(),"\u201D.")}}var rn=class t{svc=f(We);router=f(Nn);host=f(Ge);query=K("");open=K(!1);activeIndex=K(0);results=z(()=>{let s=this.query();return s.trim().length<2?[]:this.svc.searchQuestions(s,8)});async onFocus(){await this.svc.ensureSearchIndex(),this.query().trim().length>=2&&this.open.set(!0)}async onInput(s){this.query.set(s),this.activeIndex.set(0),s.trim().length>=2?(await this.svc.ensureSearchIndex(),this.open.set(!0)):this.open.set(!1)}onKey(s){let e=this.results();if(s.key==="ArrowDown")s.preventDefault(),this.activeIndex.update(n=>Math.min(n+1,e.length-1));else if(s.key==="ArrowUp")s.preventDefault(),this.activeIndex.update(n=>Math.max(n-1,0));else if(s.key==="Enter"){let n=e[this.activeIndex()];n&&this.select(n)}else s.key==="Escape"&&this.open.set(!1)}select(s){this.open.set(!1),this.query.set(""),this.router.navigate(["/"]).then(()=>this.svc.goToQuestion(s.id))}clear(){this.query.set(""),this.open.set(!1)}onDocClick(s){this.host.nativeElement.contains(s.target)||this.open.set(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["qb-global-search"]],hostBindings:function(e,n){e&1&&E("click",function(o){return n.onDocClick(o)},In)},decls:7,vars:3,consts:[[1,"gsearch"],[1,"gs-icon"],["type","text","placeholder","Search all questions\u2026","autocomplete","off","spellcheck","false",1,"gs-input",3,"ngModelChange","focus","keydown","ngModel"],["aria-label","Clear",1,"gs-clear"],[1,"gs-results"],["aria-label","Clear",1,"gs-clear",3,"click"],[1,"gs-item",3,"active"],[1,"gs-item",3,"mousedown","mouseenter"],[1,"gs-q"],[1,"gs-empty"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"span",1),_(2,"\u{1F50D}"),u(),p(3,"input",2),E("ngModelChange",function(o){return n.onInput(o)})("focus",function(){return n.onFocus()})("keydown",function(o){return n.onKey(o)}),u(),W(4,qa,2,0,"button",3),W(5,Qa,3,0,"ul",4)(6,Ua,3,1,"ul",4),u()),e&2&&(a(3),d("ngModel",n.query()),a(),Q(n.query()?4:-1),a(),Q(n.open()&&n.results().length?5:n.open()&&n.query().length>=2?6:-1))},dependencies:[$t,Nt,At,zt],styles:[".gsearch[_ngcontent-%COMP%]{position:relative;width:100%;max-width:680px}.gs-icon[_ngcontent-%COMP%]{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:1em;pointer-events:none;opacity:.7}.gs-input[_ngcontent-%COMP%]{width:100%;height:42px;padding:0 38px 0 40px;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;color:var(--text);font-size:.95em;font-family:inherit}.gs-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.gs-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 18%,transparent)}.gs-clear[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.9em;padding:4px}.gs-clear[_ngcontent-%COMP%]:hover{color:var(--text)}@media(max-width:600px){.gs-input[_ngcontent-%COMP%]{height:40px;font-size:1em}}.gs-results[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 6px);left:0;right:0;background:var(--surface);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 28px #00000059;list-style:none;padding:6px;margin:0;max-height:60vh;overflow-y:auto;z-index:300}.gs-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:7px;cursor:pointer}.gs-item.active[_ngcontent-%COMP%], .gs-item[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.gs-q[_ngcontent-%COMP%]{flex:1;font-size:.85em;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gs-badge[_ngcontent-%COMP%]{flex-shrink:0;font-size:.66em;font-weight:700;text-transform:uppercase;letter-spacing:.03em;padding:2px 8px;border-radius:10px;border:1px solid transparent}.gs-empty[_ngcontent-%COMP%]{padding:12px;font-size:.82em;color:var(--text-muted);text-align:center}"],changeDetection:0})};var Ga=()=>[1,2,3],Ka=(t,s)=>s.id;function Za(t,s){if(t&1){let e=J();p(0,"div",22),E("click",function(){L(e);let i=c();return P(i.drawerOpen.set(!1))}),u()}}function Ya(t,s){if(t&1){let e=J();p(0,"div",20),_(1),p(2,"button",23),E("click",function(){L(e);let i=c();return P(i.retry())}),_(3,"Retry"),u()()}if(t&2){let e=c();a(),Me(" \u26A0\uFE0F ",e.error()," ")}}function Xa(t,s){t&1&&(p(0,"div",21)(1,"div",24),_(2,"\u{1F4D6}"),u(),p(3,"h2"),_(4,"Pick a topic to start"),u(),p(5,"p"),_(6,"Select a topic from the sidebar to browse questions and cheat sheets."),u()())}function Ja(t,s){t&1&&(p(0,"span",30),_(1,"\u2022"),u())}function ed(t,s){t&1&&(p(0,"div",34),Z(1,"div",35)(2,"div",36),u())}function td(t,s){t&1&&(p(0,"div",33),Ke(1,ed,3,0,"div",34,On),u()),t&2&&(a(),Ze(Je(0,Ga)))}function nd(t,s){t&1&&(p(0,"p"),_(1,"You haven't bookmarked any questions yet."),u())}function id(t,s){if(t&1){let e=J();p(0,"p"),_(1,"No questions match your filters."),u(),p(2,"button",39),E("click",function(){L(e);let i=c(4);return P(i.clearFilter())}),_(3,"Clear filters"),u()}}function od(t,s){if(t&1&&(p(0,"div",37),W(1,nd,2,0,"p")(2,id,4,0),u()),t&2){let e=c(3);a(),Q(e.filter().bookmarkedOnly?1:2)}}function sd(t,s){if(t&1&&Z(0,"qb-question-card",40),t&2){let e=s.$implicit;d("question",e)}}function rd(t,s){if(t&1&&(p(0,"div",38),Ke(1,sd,1,1,"qb-question-card",40,Ka),u()),t&2){let e=c(3);a(),Ze(e.visibleQuestions())}}function ld(t,s){if(t&1&&W(0,od,3,1,"div",37)(1,rd,3,0,"div",38),t&2){let e=c(2);Q(e.visibleQuestions().length===0?0:1)}}function ad(t,s){if(t&1&&(p(0,"div",25)(1,"span",26),_(2),u(),p(3,"span",27),_(4,"\u203A"),u(),p(5,"span",28),_(6),u(),p(7,"span",29),_(8),W(9,Ja,2,0,"span",30),u()(),p(10,"div",31),Z(11,"qb-cheat-sheet-panel",32)(12,"qb-search-filter"),W(13,td,3,1,"div",33),W(14,ld,2,1),u()),t&2){let e=c();a(2),de(e.selectedTopicName()),a(4),de(e.selectedSubtopicName()),a(2),kn(" ",e.visibleQuestions().length," of ",e.totalInSubtopic()," question",e.totalInSubtopic()===1?"":"s"," "),a(),Q(e.hasActiveFilter()?9:-1),a(2),d("topicId",e.selected().topicId),a(2),Q(e.loadingTopicId()?13:-1),a(),Q(e.loadingTopicId()?-1:14)}}var Vo=class t{svc=f(We);selected=this.svc.selected;visibleQuestions=this.svc.visibleQuestions;loadingTopicId=this.svc.loadingTopicId;error=this.svc.error;filter=this.svc.filter;isDark=this.svc.isDark;drawerOpen=K(!1);topicCount=z(()=>this.svc.topics().length);selectedTopicName=z(()=>{let s=this.selected();return s?this.svc.topics().find(e=>e.id===s.topicId)?.name??"":""});selectedSubtopicName=z(()=>{let s=this.selected();return s?this.svc.topics().find(n=>n.id===s.topicId)?.subtopics.find(n=>n.subtopicId===s.subtopicId)?.subtopicName??"":""});totalInSubtopic=z(()=>{let s=this.selected();return s?this.svc.topics().find(n=>n.id===s.topicId)?.subtopics.find(n=>n.subtopicId===s.subtopicId)?.questionCount??0:0});hasActiveFilter=z(()=>{let s=this.filter();return s.search!==""||s.type!=="all"||s.bookmarkedOnly});async ngOnInit(){this.svc.applyStoredTheme(),await this.svc.init()}toggleTheme(){this.svc.toggleTheme()}clearFilter(){this.svc.clearFilter()}async retry(){await this.svc.init()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-question-bank-page"]],decls:42,vars:9,consts:[[1,"app-shell"],[1,"topbar"],[1,"topbar-left"],[1,"menu-btn",3,"click"],[1,"lbl"],[1,"app-brand"],[1,"topbar-center"],[1,"stats-pill"],[1,"topbar-right"],["routerLink","/dashboard",1,"sim-link"],[1,"ico"],["routerLink","/sets",1,"sim-link"],["routerLink","/simulator",1,"sim-link"],[1,"theme-btn",3,"click","title"],[1,"search-row"],[1,"layout"],[1,"drawer-backdrop"],[1,"sidebar-col"],[3,"closed"],[1,"main-col"],[1,"error-banner"],[1,"empty-state"],[1,"drawer-backdrop",3,"click"],[1,"retry-btn",3,"click"],[1,"empty-icon"],[1,"breadcrumb-bar"],[1,"bc-topic"],[1,"bc-sep"],[1,"bc-sub"],[1,"bc-count"],[1,"filter-active-dot"],[1,"content-area"],[3,"topicId"],[1,"skeleton-list"],[1,"skeleton-card"],[1,"sk-line","sk-short"],[1,"sk-line","sk-long"],[1,"no-results"],[1,"question-list"],[1,"clear-link",3,"click"],[3,"question"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"header",1)(2,"div",2)(3,"button",3),E("click",function(){return n.drawerOpen.set(!0)}),_(4,"\u2630 "),p(5,"span",4),_(6,"Topics"),u()(),p(7,"span",5),_(8,"\u{1F680} "),p(9,"span",4),_(10,"crackInterview"),u()()(),p(11,"div",6)(12,"span",7),_(13),u()(),p(14,"div",8)(15,"a",9)(16,"span",10),_(17,"\u{1F4CA}"),u(),p(18,"span",4),_(19,"Dashboard"),u()(),p(20,"a",11)(21,"span",10),_(22,"\u{1F5C2}"),u(),p(23,"span",4),_(24,"Sets"),u()(),p(25,"a",12)(26,"span",10),_(27,"\u{1F3AF}"),u(),p(28,"span",4),_(29,"Simulator"),u()(),p(30,"button",13),E("click",function(){return n.toggleTheme()}),_(31),u()()(),p(32,"div",14),Z(33,"qb-global-search"),u(),p(34,"div",15),W(35,Za,1,0,"div",16),p(36,"aside",17)(37,"qb-topic-sidebar",18),E("closed",function(){return n.drawerOpen.set(!1)}),u()(),p(38,"main",19),W(39,Ya,4,1,"div",20),W(40,Xa,7,0,"div",21)(41,ad,15,9),u()()()),e&2&&(F("data-theme",n.isDark()?"dark":"light"),a(13),Me("",n.topicCount()," topics \xB7 550 questions"),a(17),d("title",n.isDark()?"Switch to light":"Switch to dark"),a(),Me(" ",n.isDark()?"\u2600\uFE0F":"\u{1F319}"," "),a(4),Q(n.drawerOpen()?35:-1),a(),$e("drawer-open",n.drawerOpen()),a(3),Q(n.error()?39:-1),a(),Q(n.selected()?41:40))},dependencies:[An,jt,on,mi,sn,rn,nn],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100vh;overflow:hidden}.app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;background:var(--bg);color:var(--text)}.topbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 16px;height:48px;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;z-index:100;gap:12px}.topbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-shrink:0}.topbar-center[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;min-width:0}.topbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;flex-shrink:0}.search-row[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;z-index:90}@media(max-width:600px){.search-row[_ngcontent-%COMP%]{padding:8px 10px}}.menu-btn[_ngcontent-%COMP%]{display:none;background:var(--surface-2);border:1px solid var(--border);color:var(--text);padding:6px 12px;border-radius:6px;cursor:pointer;font-size:.85em;white-space:nowrap}@media(max-width:768px){.menu-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}}.app-brand[_ngcontent-%COMP%]{font-weight:700;font-size:1em;letter-spacing:-.01em}.stats-pill[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:3px 10px;border-radius:12px;border:1px solid var(--border)}@media(max-width:480px){.stats-pill[_ngcontent-%COMP%]{display:none}}.theme-btn[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:4px 8px;cursor:pointer;font-size:1em;transition:background .12s}.theme-btn[_ngcontent-%COMP%]:hover{background:var(--surface)}.sim-link[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--accent) 14%,var(--surface-2));border:1px solid color-mix(in srgb,var(--accent) 35%,var(--border));color:var(--accent);padding:5px 12px;border-radius:6px;font-size:.82em;font-weight:600;white-space:nowrap;transition:background .12s}.sim-link[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 22%,var(--surface-2));text-decoration:none}.layout[_ngcontent-%COMP%]{display:flex;flex:1;overflow:hidden;position:relative}.sidebar-col[_ngcontent-%COMP%]{width:260px;flex-shrink:0;overflow:hidden}@media(max-width:768px){.sidebar-col[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:280px;z-index:200;transform:translate(-100%);transition:transform .2s ease;box-shadow:4px 0 20px #0006}.sidebar-col.drawer-open[_ngcontent-%COMP%]{transform:translate(0)}}.drawer-backdrop[_ngcontent-%COMP%]{display:none}@media(max-width:768px){.drawer-backdrop[_ngcontent-%COMP%]{display:block;position:fixed;inset:0;background:#00000080;z-index:199}}.main-col[_ngcontent-%COMP%]{flex:1;overflow-y:auto;display:flex;flex-direction:column;background:var(--bg)}.error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 16px;background:color-mix(in srgb,var(--danger) 10%,var(--surface));border-bottom:1px solid color-mix(in srgb,var(--danger) 30%,var(--border));color:var(--danger);font-size:.9em}.retry-btn[_ngcontent-%COMP%]{background:var(--danger);color:#fff;border:none;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:.85em}.retry-btn[_ngcontent-%COMP%]:hover{opacity:.85}.empty-state[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px;text-align:center;color:var(--text-muted)}.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]{font-size:3em}.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--text);font-size:1.2em}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;max-width:320px;line-height:1.6}.breadcrumb-bar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:6px;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--border);font-size:.875em;flex-shrink:0}.bc-topic[_ngcontent-%COMP%], .bc-sep[_ngcontent-%COMP%]{color:var(--text-muted)}.bc-sub[_ngcontent-%COMP%]{color:var(--text);font-weight:600}.bc-count[_ngcontent-%COMP%]{margin-left:auto;color:var(--text-muted);font-size:.9em;display:flex;align-items:center;gap:5px}.filter-active-dot[_ngcontent-%COMP%]{color:var(--accent);font-size:1.2em}.content-area[_ngcontent-%COMP%]{padding:12px 16px 24px;display:flex;flex-direction:column;gap:0;flex:1}.skeleton-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-top:12px}.skeleton-card[_ngcontent-%COMP%]{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:16px;display:flex;flex-direction:column;gap:10px;animation:shimmer 1.2s infinite}.sk-line[_ngcontent-%COMP%]{height:12px;border-radius:6px;background:linear-gradient(90deg,var(--surface-2) 25%,var(--surface) 50%,var(--surface-2) 75%);background-size:200% 100%;animation:_ngcontent-%COMP%_shimmerMove 1.2s infinite}.sk-short[_ngcontent-%COMP%]{width:35%}.sk-long[_ngcontent-%COMP%]{width:75%}@keyframes _ngcontent-%COMP%_shimmerMove{0%{background-position:200% 0}to{background-position:-200% 0}}.no-results[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px;padding:40px;color:var(--text-muted);text-align:center;font-size:.9em}.clear-link[_ngcontent-%COMP%]{background:none;border:1px solid var(--border);color:var(--accent);padding:6px 16px;border-radius:4px;cursor:pointer;font-size:.875em}.clear-link[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.question-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-top:12px}.sim-link[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]{margin-right:4px}@media(max-width:600px){.topbar[_ngcontent-%COMP%]{padding:0 10px;gap:8px}.topbar-right[_ngcontent-%COMP%]{gap:6px}.menu-btn[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%], .sim-link[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%]{display:none}.sim-link[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]{margin-right:0}.sim-link[_ngcontent-%COMP%]{padding:6px 9px;font-size:1em}}'],changeDetection:0})};export{Vo as QuestionBankPage};
