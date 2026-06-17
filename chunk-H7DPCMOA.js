import{$ as rn,A as _t,B as qn,C as Se,D as Pe,E as Wn,F as Qn,G as ze,H as Un,I as Gn,J as $e,K as He,L as nn,M as tt,N as Ft,O as Kn,P as Zn,Q as Yn,R as Xn,S as Jn,T as Re,U as X,V as Pt,W as on,X as Bt,Y as sn,Z as ei,_ as ti,a as vt,aa as ln,b as Dn,ba as ni,c as Ln,ca as nt,d as Fe,da as ft,e as ct,ea as z,f as Mt,fa as ii,g as tn,h as Dt,i as Lt,j as pt,k as Fn,l as Pn,m as Bn,n as ut,o as yt,p as Ze,q as Vn,r as Nn,s as An,t as zn,u as $n,v as Hn,w as _e,x as Rn,y as jn,z as ht}from"./chunk-QE3EBWSV.js";import{a as ci}from"./chunk-HQBKCMQB.js";import{a as Vt,b as si,c as ri,d as li,e as ai,i as di}from"./chunk-DVV6GM6C.js";import{a as oi}from"./chunk-DRXVB3S4.js";import{a as Ye}from"./chunk-JF3Z2SCC.js";import{b as kt,c as We,d as et,e as Le,f as de,g as we,h as en,q as Mn}from"./chunk-VY4JI4N7.js";import{$ as yn,$a as y,$b as En,Ab as c,Bb as ge,Cb as me,Db as Ae,Eb as Qe,Fb as O,Gb as k,Hb as Oe,Ia as d,Ib as Ue,Jb as Ge,Kb as ke,Lb as v,Mb as I,N as St,Nb as fe,O as j,Ob as qe,P as oe,Qa as Et,Qb as wn,R as Q,Ra as be,Rb as Sn,Sb as Tn,T as m,Ta as Cn,Tb as In,Vb as H,Wa as M,Wb as Ke,Xa as re,Xb as ce,Y as P,Ya as he,Yb as Me,Z as B,Za as le,Zb as Ce,_ as se,_a as T,a as x,aa as Tt,ac as R,b as je,c as vn,da as N,dc as De,ea as Ne,ec as b,fb as L,fc as On,gb as K,hb as Z,ia as te,jb as xn,jc as S,kb as rt,kc as ye,la as ue,lb as lt,lc as kn,ma as _n,mb as a,na as _,nb as p,ob as u,pa as st,pb as Y,qb as at,rb as dt,sb as ve,ta as It,tb as ne,ub as ie,vb as ee,wb as ae,xb as Ot,yb as D}from"./chunk-MSA45ITI.js";function Xe(...t){if(t){let s=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")s.push(n);else if(i==="object"){let o=Array.isArray(n)?[Xe(...n)]:Object.entries(n).map(([r,l])=>l?r:void 0);s=o.length?s.concat(o.filter(r=>!!r)):s}}return s.join(" ").trim()}}var Fo=Object.defineProperty,pi=Object.getOwnPropertySymbols,Po=Object.prototype.hasOwnProperty,Bo=Object.prototype.propertyIsEnumerable,ui=(t,s,e)=>s in t?Fo(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,hi=(t,s)=>{for(var e in s||(s={}))Po.call(s,e)&&ui(t,e,s[e]);if(pi)for(var e of pi(s))Bo.call(s,e)&&ui(t,e,s[e]);return t};function fi(...t){if(t){let s=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")s.push(n);else if(i==="object"){let o=Array.isArray(n)?[fi(...n)]:Object.entries(n).map(([r,l])=>l?r:void 0);s=o.length?s.concat(o.filter(r=>!!r)):s}}return s.join(" ").trim()}}function Vo(t){return typeof t=="function"&&"call"in t&&"apply"in t}function No({skipUndefined:t=!1},...s){return s?.reduce((e,n={})=>{for(let i in n){let o=n[i];if(!(t&&o===void 0))if(i==="style")e.style=hi(hi({},e.style),n.style);else if(i==="class"||i==="className")e[i]=fi(e[i],n[i]);else if(Vo(o)){let r=e[i];e[i]=r?(...l)=>{r(...l),o(...l)}:o}else e[i]=o}return e},{})}function an(...t){return No({skipUndefined:!1},...t)}var Nt={};function Be(t="pui_id_"){return Object.hasOwn(Nt,t)||(Nt[t]=0),Nt[t]++,`${t}${Nt[t]}`}var mi=(()=>{class t extends z{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),U=new Q("PARENT_INSTANCE"),W=(()=>{class t{document=m(Tt);platformId=m(It);el=m(st);injector=m(yn);cd=m(On);renderer=m(Et);config=m(ii);$parentInstance=m(U,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=m(mi);baseStyle=m(z);scopedStyleEl;parent=this.$params.parent;cn=Xe;_themeScopedListener;themeChangeListenerMap=new Map;dt=b();unstyled=b();pt=b();ptOptions=b();$attrSelector=Be("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=te(void 0);directiveUnstyled=te(void 0);$unstyled=R(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=R(()=>Dt(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>Dt(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||Dt(e,this.$params))}get $style(){return x(x({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){ue(e=>{this.document&&!en(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),ue(e=>{this.document&&!en(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return Ln(e)?e(...n):an(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",i={}){return Fn(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),o=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),o?.(...n)}}_load(){ft.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),ft.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Fe(e)&&this.baseStyle.load(e,x({name:"global"},this.$styleOptions))}_loadCoreStyles(){!ft.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),ft.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!nt.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:o}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,x({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,x({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,x({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(x({name:"global-style"},this.$styleOptions),o),nt.setLoadedStyleName("common")}if(!nt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,x({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(x({name:`${this.$style?.name}-style`},this.$styleOptions),n),nt.setLoadedStyleName(this.$style?.name)}if(!nt.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,x({name:"layer-order",first:!0},this.$styleOptions)),nt.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,x({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),ft.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),ln.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(ln.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",i={},o=!0){let r=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:l=!0,mergeProps:h=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},g=o?r?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,f=r?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,je(x({},i),{global:g||{}})),C=this._getPTDatasets(n);return l||!l&&f?h?this._mergeProps(h,g,f,C):x(x(x({},g),f),C):x(x({},f),C)}_getPTDatasets(e=""){let n="data-pc-",i=e==="root"&&Fe(this.$pt()?.["data-pc-section"]);return e!=="transition"&&je(x({},e==="root"&&je(x({[`${n}name`]:pt(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:pt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:pt(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,i){let o=this._getOptionValue(e,n,i);return Lt(o)||Pn(o)?{class:o}:o}_getPT(e,n="",i){let o=(r,l=!1)=>{let h=i?i(r):r,g=pt(n),f=pt(this.$hostName||this.$name);return(l?g!==f?h?.[g]:void 0:h?.[g])??h};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)}_usePT(e,n,i,o){let r=l=>n?.call(this,l,i,o);if(e?.hasOwnProperty("_usept")){let{mergeSections:l=!0,mergeProps:h=!1}=e._usept||this.config?.ptOptions()||{},g=r(e.originalValue),f=r(e.value);return g===void 0&&f===void 0?void 0:Lt(f)?f:Lt(g)?g:l||!l&&f?h?this._mergeProps(h,g,f):x(x({},g),f):f}return r(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,x(x({},this.$params),n))}ptms(e,n={}){return e.reduce((i,o)=>(i=an(i,this.ptm(o,n))||{},i),{})}ptmo(e={},n="",i={}){return this._getPTValue(e,n,x({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:Xe(this._getOptionValue(this.$style.classes,e,x(x({},this.$params),n)))}sx(e="",n=!0,i={}){if(n){let o=this._getOptionValue(this.$style.inlineStyles,e,x(x({},this.$params),i)),r=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,x(x({},this.$params),i));return x(x({},r),o)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=he({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[H([mi,z]),_n]})}return t})();var w=(()=>{class t{el;renderer;pBind=b(void 0);_attrs=te(void 0);attrs=R(()=>this._attrs()||this.pBind());styles=R(()=>this.attrs()?.style);classes=R(()=>Xe(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,ue(()=>{let l=this.attrs()||{},{style:i,class:o}=l,r=vn(l,["style","class"]);for(let[h,g]of Object.entries(r))if(h.startsWith("on")&&typeof g=="function"){let f=h.slice(2).toLowerCase();if(!this.listeners.some(C=>C.eventName===f)){let C=this.renderer.listen(this.el.nativeElement,f,g);this.listeners.push({eventName:f,unlisten:C})}}else g==null?this.renderer.removeAttribute(this.el.nativeElement,h):(this.renderer.setAttribute(this.el.nativeElement,h,g.toString()),h in this.el.nativeElement&&(this.el.nativeElement[h]=g))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Mt(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(be(st),be(Et))};static \u0275dir=he({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(ke(i.styles()),v(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=oe({})}return t})();var gi=`
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
`;var Ao={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},bi=(()=>{class t extends z{name="progressspinner";style=gi;classes=Ao;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var vi=new Q("PROGRESSSPINNER_INSTANCE"),Ct=(()=>{class t extends W{componentName="ProgressSpinner";$pcProgressSpinner=m(vi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(w,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=m(bi);static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(n,i){n&2&&(L("aria-label",i.ariaLabel)("role","progressbar")("aria-busy",!0),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[H([bi,{provide:vi,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(n,i){n&1&&(se(),p(0,"svg",0),Y(1,"circle",1),u()),n&2&&(v(i.cx("spin")),Ue("animation-duration",i.animationDuration),a("pBind",i.ptm("spin")),d(),v(i.cx("circle")),a("pBind",i.ptm("circle")),L("fill",i.fill)("stroke-width",i.strokeWidth))},dependencies:[de,X,w],encapsulation:2,changeDetection:0})}return t})(),At=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=oe({imports:[Ct,X,X]})}return t})();var zo=(t,s)=>s.id,$o=(t,s)=>s.subtopicId;function Ho(t,s){t&1&&Y(0,"p-progressSpinner",10)}function Ro(t,s){if(t&1&&(p(0,"span",11),I(1),u()),t&2){let e=c().$implicit;d(),fe(e.questionCount)}}function jo(t,s){t&1&&(p(0,"span",12),I(1,"\u2014"),u())}function qo(t,s){if(t&1){let e=ae();p(0,"li")(1,"button",14),D("click",function(){let i=P(e).$implicit,o=c(2).$implicit,r=c();return B(r.onSubtopicClick(o.id,i.subtopicId))}),p(2,"span",15),I(3,"\u2022"),u(),p(4,"span",16),I(5),u(),p(6,"span",11),I(7),u()()()}if(t&2){let e=s.$implicit,n=c(2).$implicit,i=c();d(),Ge("active",i.isActive(n.id,e.subtopicId)),d(4),fe(e.subtopicName),d(2),fe(e.questionCount)}}function Wo(t,s){if(t&1&&(p(0,"ul",13),rt(1,qo,8,4,"li",null,$o),u()),t&2){let e=c().$implicit;d(),lt(e.subtopics)}}function Qo(t,s){if(t&1){let e=ae();p(0,"li",5)(1,"button",6),D("click",function(){let i=P(e).$implicit,o=c();return B(o.onTopicClick(i.id))}),p(2,"span",7),I(3),u(),p(4,"span",8),I(5),u(),p(6,"span",9),I(7),u(),K(8,Ho,1,0,"p-progressSpinner",10)(9,Ro,2,1,"span",11)(10,jo,2,0,"span",12),u(),K(11,Wo,3,0,"ul",13),u()}if(t&2){let e=s.$implicit,n=c();d(),Ge("expanded",e.expanded),L("aria-expanded",e.expanded),d(2),fe(e.expanded?"\u25BE":"\u25B8"),d(2),fe(e.icon),d(2),fe(e.name),d(),Z(n.loadingTopicId()===e.id?8:e.loaded?9:10),d(3),Z(e.expanded&&e.loaded?11:-1)}}var zt=class t{closed=De();svc=m(Ye);topics=this.svc.topics;loadingTopicId=this.svc.loadingTopicId;selected=this.svc.selected;onTopicClick(s){this.svc.toggleTopic(s)}onSubtopicClick(s,e){this.svc.select(s,e),this.closed.emit()}isActive(s,e){let n=this.selected();return n?.topicId===s&&n?.subtopicId===e}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["qb-topic-sidebar"]],outputs:{closed:"closed"},decls:9,vars:1,consts:[[1,"sidebar"],[1,"sidebar-header"],[1,"sidebar-title"],[1,"topic-count"],[1,"topic-list"],[1,"topic-item"],[1,"topic-row",3,"click"],[1,"caret"],[1,"topic-icon"],[1,"topic-name"],["styleClass","sidebar-spinner","strokeWidth","4","animationDuration",".8s"],[1,"q-count"],[1,"q-count","muted"],[1,"subtopic-list"],[1,"subtopic-row",3,"click"],[1,"sub-dot"],[1,"sub-name"]],template:function(e,n){e&1&&(p(0,"nav",0)(1,"div",1)(2,"span",2),I(3,"Topics"),u(),p(4,"span",3),I(5),u()(),p(6,"ul",4),rt(7,Qo,12,8,"li",5,zo),u()()),e&2&&(d(5),qe("",n.topics().length," topics"),d(2),lt(n.topics()))},dependencies:[At,Ct],styles:[".sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:var(--sidebar-bg);border-right:1px solid var(--border);overflow-y:auto}.sidebar-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 12px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--sidebar-bg);z-index:1}.sidebar-title[_ngcontent-%COMP%]{font-weight:700;font-size:.8em;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted)}.topic-count[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:2px 7px;border-radius:10px}.topic-list[_ngcontent-%COMP%]{list-style:none;padding:8px 0;flex:1}.topic-item[_ngcontent-%COMP%]{width:100%}.topic-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:8px 14px;background:none;border:none;color:var(--text);cursor:pointer;text-align:left;font-size:.92em;font-weight:500;transition:background .12s ease;border-radius:0}.topic-row[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.topic-row.expanded[_ngcontent-%COMP%]{color:var(--accent)}.caret[_ngcontent-%COMP%]{font-size:.7em;color:var(--text-muted);width:10px;flex-shrink:0}.topic-icon[_ngcontent-%COMP%]{font-size:1em;flex-shrink:0}.topic-name[_ngcontent-%COMP%]{flex:1}.q-count[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:1px 6px;border-radius:10px;min-width:22px;text-align:center;flex-shrink:0}.q-count.muted[_ngcontent-%COMP%]{opacity:.5}  .sidebar-spinner{width:14px!important;height:14px!important}  .sidebar-spinner .p-progressspinner-circle{stroke:var(--accent)!important}.subtopic-list[_ngcontent-%COMP%]{list-style:none;padding:2px 0 4px}.subtopic-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 14px 6px 30px;background:none;border:none;color:var(--text-muted);cursor:pointer;text-align:left;font-size:.875em;transition:background .12s ease,color .12s ease}.subtopic-row[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--text)}.subtopic-row.active[_ngcontent-%COMP%]{color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,transparent);font-weight:600}.subtopic-row.active[_ngcontent-%COMP%]   .sub-dot[_ngcontent-%COMP%]{color:var(--accent)}.sub-dot[_ngcontent-%COMP%]{font-size:.8em;flex-shrink:0}.sub-name[_ngcontent-%COMP%]{flex:1}"],changeDetection:0})};var $t=(()=>{class t extends W{modelValue=te(void 0);$filled=R(()=>Fe(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275dir=he({type:t,features:[T]})}return t})();var Uo=["*"],Go={root:"p-fluid"},_i=(()=>{class t extends z{name="fluid";classes=Go;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Ci=new Q("FLUID_INSTANCE"),mt=(()=>{class t extends W{componentName="Fluid";$pcFluid=m(Ci,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=m(_i);static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cx("root"))},features:[H([_i,{provide:Ci,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],ngContentSelectors:Uo,decls:1,vars:0,template:function(n,i){n&1&&(ge(),me(0))},dependencies:[de],encapsulation:2,changeDetection:0})}return t})();var xi=`
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
`;var Ko=`
    ${xi}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Zo={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},wi=(()=>{class t extends z{name="inputtext";style=Ko;classes=Zo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Si=new Q("INPUTTEXT_INSTANCE"),Ht=(()=>{class t extends $t{componentName="InputText";hostName="";ptInputText=b();pInputTextPT=b();pInputTextUnstyled=b();bindDirectiveInstance=m(w,{self:!0});$pcInputText=m(Si,{optional:!0,skipSelf:!0})??void 0;ngControl=m(ri,{optional:!0,self:!0});pcFluid=m(mt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=b();fluid=b(void 0,{transform:S});invalid=b(void 0,{transform:S});$variant=R(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=m(wi);constructor(){super(),ue(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),ue(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=he({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&D("input",function(){return i.onInput()}),n&2&&(L("data-p",i.dataP),v(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[H([wi,{provide:Si,useExisting:t},{provide:U,useExisting:t}]),le([w]),T]})}return t})(),Ti=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=oe({})}return t})();var cn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let o=0;o<i.length;o++)e.classList.add(i[o])}else{let i=n.split(" ");for(let o=0;o<i.length;o++)e.className+=" "+i[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var o=0;o<n.length;o++){if(n[o]==e)return i;n[o].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],o=0;for(var r=0;r<i.length;r++){if(i[r]==e)return o;i[r].attributes&&i[r].attributes[n]&&i[r].nodeType==1&&o++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let o=pe=>{if(pe)return getComputedStyle(pe).getPropertyValue("position")==="relative"?pe:o(pe.parentElement)},r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,h=n.getBoundingClientRect(),g=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),C=this.getViewport(),F=o(e)?.getBoundingClientRect()||{top:-1*g,left:-1*f},A,J,V="top";h.top+l+r.height>C.height?(A=h.top-F.top-r.height,V="bottom",h.top+A<0&&(A=-1*h.top)):(A=l+h.top-F.top,V="top");let $=h.left+r.width-C.width,G=h.left-F.left;if(r.width>C.width?J=(h.left-F.left)*-1:$>0?J=G-$:J=h.left-F.left,e.style.top=A+"px",e.style.left=J+"px",e.style.transformOrigin=V,i){let pe=Nn(/-anchor-gutter$/)?.value;e.style.marginTop=V==="bottom"?`calc(${pe??"2px"} * -1)`:pe??""}}static absolutePosition(e,n,i=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=o.height,l=o.width,h=n.offsetHeight,g=n.offsetWidth,f=n.getBoundingClientRect(),C=this.getWindowScrollTop(),E=this.getWindowScrollLeft(),F=this.getViewport(),A,J;f.top+h+r>F.height?(A=f.top+C-r,e.style.transformOrigin="bottom",A<0&&(A=C)):(A=h+f.top+C,e.style.transformOrigin="top"),f.left+l>F.width?J=Math.max(0,f.left+E+g-l):J=f.left+E,e.style.top=A+"px",e.style.left=J+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),o=/(auto|scroll)/,r=l=>{let h=window.getComputedStyle(l,null);return o.test(h.getPropertyValue("overflow"))||o.test(h.getPropertyValue("overflowX"))||o.test(h.getPropertyValue("overflowY"))};for(let l of i){let h=l.nodeType===1&&l.dataset.scrollselectors;if(h){let g=h.split(",");for(let f of g){let C=this.findSingle(l,f);C&&r(C)&&n.push(C)}}l.nodeType!==9&&r(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=i?parseFloat(i):0,r=getComputedStyle(e).getPropertyValue("paddingTop"),l=r?parseFloat(r):0,h=e.getBoundingClientRect(),f=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-o-l,C=e.scrollTop,E=e.clientHeight,F=this.getOuterHeight(n);f<0?e.scrollTop=C+f:f+F>E&&(e.scrollTop=C+f-E+F)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,o=0,r=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=o,i=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(e,n){var i=1,o=50,r=n,l=o/r;let h=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(h)),e.style.opacity=i},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,o=n.getElementsByTagName("body")[0],r=e.innerWidth||i.clientWidth||o.clientWidth,l=e.innerHeight||i.clientHeight||o.clientHeight;return{width:r,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var o=e.indexOf("rv:");return!0}var r=e.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let r of i){let l=getComputedStyle(r);this.isVisible(r)&&l.display!="none"&&l.visibility!="hidden"&&o.push(r)}return o}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let o=getComputedStyle(i);if(this.isVisible(i)&&o.display!="none"&&o.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),o=0;if(i&&i.length>0){let r=i.indexOf(i[0].ownerDocument.activeElement);n?r==-1||r===0?o=i.length-1:o=r-1:r!=-1&&r!==i.length-1&&(o=r+1)}return i[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let r=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...i),o}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(o,r)=>{let l=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[r].flat().reduce((h,g)=>{if(g!=null){let f=typeof g;if(f==="string"||f==="number")h.push(g);else if(f==="object"){let C=Array.isArray(g)?i(o,g):Object.entries(g).map(([E,F])=>o==="style"&&(F||F===0)?`${E.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${F}`:F?E:void 0);h=C.length?h.concat(C.filter(E=>!!E)):h}}return h},l)};Object.entries(n).forEach(([o,r])=>{if(r!=null){let l=o.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),r):o==="pBind"?this.setAttributes(e,r):(r=o==="class"?[...new Set(i("class",r))].join(" ").trim():o==="style"?i("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=r),e.setAttribute(o,r))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Ii(){Vn({variableName:ni("scrollbar.width").name})}var gt=class{element;listener;scrollableParents;constructor(s,e=()=>{}){this.element=s,this.listener=e}bindScrollListener(){this.scrollableParents=cn.getScrollableParents(this.element);for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var bt=(()=>{class t extends W{autofocus=!1;focused=!1;platformId=m(It);document=m(Tt);host=m(st);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){we(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=cn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275dir=he({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[T]})}return t})();var Rt=(()=>{class t extends $t{required=b(void 0,{transform:S});invalid=b(void 0,{transform:S});disabled=b(void 0,{transform:S});name=b();_disabled=te(!1);$disabled=R(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275dir=he({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[T]})}return t})();var Ei=(()=>{class t extends Rt{pcFluid=m(mt,{optional:!0,host:!0,skipSelf:!0});fluid=b(void 0,{transform:S});variant=b();size=b();inputSize=b();pattern=b();min=b();max=b();step=b();minlength=b();maxlength=b();$variant=R(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275dir=he({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[T]})}return t})();var Oi=`
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
`;var Xo=["*"],Jo={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},ki=(()=>{class t extends z{name="iconfield";style=Oi;classes=Jo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Mi=new Q("ICONFIELD_INSTANCE"),Di=(()=>{class t extends W{componentName="IconField";hostName="";_componentStyle=m(ki);$pcIconField=m(Mi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[H([ki,{provide:Mi,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],ngContentSelectors:Xo,decls:1,vars:0,template:function(n,i){n&1&&(ge(),me(0))},dependencies:[de,xe],encapsulation:2,changeDetection:0})}return t})();var es=["*"],ts=`
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
`,Li=(()=>{class t extends z{name="baseicon";css=ts;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ie=(()=>{class t extends W{spin=!1;_componentStyle=m(Li);getClassNames(){return Xe("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&v(i.getClassNames())},inputs:{spin:[2,"spin","spin",S]},features:[H([Li]),T],ngContentSelectors:es,decls:1,vars:0,template:function(n,i){n&1&&(ge(),me(0))},encapsulation:2,changeDetection:0})}return t})();var ns=["data-p-icon","blank"],Fi=(()=>{class t extends Ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","blank"]],features:[T],attrs:ns,decls:1,vars:0,consts:[["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(n,i){n&1&&(se(),ve(0,"rect",0))},encapsulation:2})}return t})();var is=["data-p-icon","check"],Pi=(()=>{class t extends Ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","check"]],features:[T],attrs:is,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,i){n&1&&(se(),ve(0,"path",0))},encapsulation:2})}return t})();var os=["data-p-icon","chevron-down"],Bi=(()=>{class t extends Ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[T],attrs:os,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,i){n&1&&(se(),ve(0,"path",0))},encapsulation:2})}return t})();var ss=["data-p-icon","search"],Vi=(()=>{class t extends Ie{pathId;onInit(){this.pathId="url(#"+Be()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","search"]],features:[T],attrs:ss,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(se(),at(0,"g"),ve(1,"path",0),dt(),at(2,"defs")(3,"clipPath",1),ve(4,"rect",2),dt()()),n&2&&(L("clip-path",i.pathId),d(3),Ot("id",i.pathId))},encapsulation:2})}return t})();var rs=["data-p-icon","spinner"],jt=(()=>{class t extends Ie{pathId;onInit(){this.pathId="url(#"+Be()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","spinner"]],features:[T],attrs:rs,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(se(),at(0,"g"),ve(1,"path",0),dt(),at(2,"defs")(3,"clipPath",1),ve(4,"rect",2),dt()()),n&2&&(L("clip-path",i.pathId),d(3),Ot("id",i.pathId))},encapsulation:2})}return t})();var ls=["data-p-icon","times"],Ni=(()=>{class t extends Ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","times"]],features:[T],attrs:ls,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(se(),ve(0,"path",0))},encapsulation:2})}return t})();var as=["*"],ds={root:"p-inputicon"},Ai=(()=>{class t extends z{name="inputicon";classes=ds;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),zi=new Q("INPUTICON_INSTANCE"),$i=(()=>{class t extends W{componentName="InputIcon";hostName="";styleClass;_componentStyle=m(Ai);$pcInputIcon=m(zi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[H([Ai,{provide:zi,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],ngContentSelectors:as,decls:1,vars:0,template:function(n,i){n&1&&(ge(),me(0))},dependencies:[de,X,xe],encapsulation:2,changeDetection:0})}return t})();var cs=Object.defineProperty,Hi=Object.getOwnPropertySymbols,ps=Object.prototype.hasOwnProperty,us=Object.prototype.propertyIsEnumerable,Ri=(t,s,e)=>s in t?cs(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,ji=(t,s)=>{for(var e in s||(s={}))ps.call(s,e)&&Ri(t,e,s[e]);if(Hi)for(var e of Hi(s))us.call(s,e)&&Ri(t,e,s[e]);return t},hs=(t,s,e)=>new Promise((n,i)=>{var o=h=>{try{l(e.next(h))}catch(g){i(g)}},r=h=>{try{l(e.throw(h))}catch(g){i(g)}},l=h=>h.done?n(h.value):Promise.resolve(h.value).then(o,r);l((e=e.apply(t,s)).next())}),qt="animation",xt="transition";function fs(t){return t?t.disabled||!!(t.safe&&ti()):!1}function ms(t,s){return t?ji(ji({},t),Object.entries(s).reduce((e,[n,i])=>{var o;return e[n]=(o=t[n])!=null?o:i,e},{})):s}function gs(t){let{name:s,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${s}-enter-from`,to:e?.to||`${s}-enter-to`,active:e?.active||`${s}-enter-active`},leave:{from:n?.from||`${s}-leave-from`,to:n?.to||`${s}-leave-to`,active:n?.active||`${s}-leave-active`}}}function bs(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function vs(t,s){let e=window.getComputedStyle(t),n=F=>{let A=e[`${F}Delay`],J=e[`${F}Duration`];return[A.split(", ").map(on),J.split(", ").map(on)]},[i,o]=n(xt),[r,l]=n(qt),h=Math.max(...o.map((F,A)=>F+i[A])),g=Math.max(...l.map((F,A)=>F+r[A])),f,C=0,E=0;return s===xt?h>0&&(f=xt,C=h,E=o.length):s===qt?g>0&&(f=qt,C=g,E=l.length):(C=Math.max(h,g),f=C>0?h>g?xt:qt:void 0,E=f?f===xt?o.length:l.length:0),{type:f,timeout:C,count:E}}function pn(t,s){return typeof t=="number"?t:typeof t=="object"&&t[s]!=null?t[s]:null}function ys(t,s=!0,e=!1){if(!s&&!e)return;let n=ei(t);s&&rn(t,"--pui-motion-height",n.height+"px"),e&&rn(t,"--pui-motion-width",n.width+"px")}var _s={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function qi(t,s){if(!t)throw new Error("Element is required.");let e={},n=!1,i={},o=null,r={},l=f=>{if(Object.assign(e,ms(f,_s)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");r=bs(e),n=fs(e),i=gs(e),o=null},h=f=>hs(null,null,function*(){o?.();let{onBefore:C,onStart:E,onAfter:F,onCancelled:A}=r[f]||{},J={element:t};if(n){C?.(J),E?.(J),F?.(J);return}let{from:V,active:$,to:G}=i[f]||{};return ys(t,e.autoHeight,e.autoWidth),C?.(J),Bt(t,V),Bt(t,$),t.offsetHeight,sn(t,V),Bt(t,G),E?.(J),new Promise(pe=>{let Ee=pn(e.duration,f),Ve=()=>{sn(t,[G,$]),o=null},ot=()=>{Ve(),F?.(J),pe()};o=()=>{Ve(),A?.(J),pe()},xs(t,e.type,Ee,ot)})});l(s);let g={enter:()=>e.enter?h("enter"):Promise.resolve(),leave:()=>e.leave?h("leave"):Promise.resolve(),cancel:()=>{o?.(),o=null},update:(f,C)=>{if(!f)throw new Error("Element is required.");t=f,g.cancel(),l(C)}};return e.appear&&g.enter(),g}var Cs=0;function xs(t,s,e,n){let i=t._motionEndId=++Cs,o=()=>{i===t._motionEndId&&n()};if(e!=null)return setTimeout(o,e);let{type:r,timeout:l,count:h}=vs(t,s);if(!r){n();return}let g=r+"end",f=0,C=()=>{t.removeEventListener(g,E,!0),o()},E=F=>{F.target===t&&++f>=h&&C()};t.addEventListener(g,E,{capture:!0,once:!0}),setTimeout(()=>{f<h&&C()},l+1)}var ws=["*"];function Ss(t,s){t&1&&me(0)}var Wt=new WeakMap;function un(t,s){if(t)switch(Wt.has(t)||Wt.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight,overflow:t.style.overflow}),s){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0",t.style.overflow="hidden";break}}function Wi(t,s){if(!t)return;let e=Wt.get(t)??t.style;switch(s){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"",t.style.overflow=e?.overflow||"";break}Wt.delete(t)}var Ts=`
    .p-motion {
        display: block;
    }
`,Is={root:"p-motion"},Qi=(()=>{class t extends z{name="motion";style=Ts;classes=Is;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Ui=new Q("MOTION_INSTANCE"),hn=(()=>{class t extends W{$pcMotion=m(Ui,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(w,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(x(x({},this.ptms(["host","root"])),n))}_componentStyle=m(Qi);visible=b(!1);mountOnEnter=b(!0);unmountOnLeave=b(!0);name=b(void 0);type=b(void 0);safe=b(void 0);disabled=b(!1);appear=b(!1);enter=b(!0);leave=b(!0);duration=b(void 0);hideStrategy=b("display");enterFromClass=b(void 0);enterToClass=b(void 0);enterActiveClass=b(void 0);leaveFromClass=b(void 0);leaveToClass=b(void 0);leaveActiveClass=b(void 0);options=b({});onBeforeEnter=De();onEnter=De();onAfterEnter=De();onEnterCancelled=De();onBeforeLeave=De();onLeave=De();onAfterLeave=De();onLeaveCancelled=De();motionOptions=R(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=te(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),ue(()=>{let e=this.hideStrategy();this.isInitialMount?(un(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(un(this.$el,e),this.rendered.set(!0))}),ue(()=>{this.motion||(this.motion=qi(this.$el,this.motionOptions()))}),kn(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await Ft(),Wi(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount||(await Ft(),this.applyMotionDuration("leave"),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(un(this.$el,n),this.unmountOnLeave()&&(await Ft(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(e){let n=En(this.motionOptions),i=pn(n.duration,e);if(i==null||!this.$el)return;let o=this.$el,r=`${i}ms`;n.type==="transition"?o.style.transitionDuration=r:o.style.animationDuration=r}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Wi(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[H([Qi,{provide:Ui,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],ngContentSelectors:ws,decls:1,vars:1,template:function(n,i){n&1&&(ge(),K(0,Ss,1,0)),n&2&&Z(i.rendered()?0:-1)},dependencies:[de,xe],encapsulation:2})}return t})();var Gi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=oe({imports:[hn]})}return t})();var it=class t{static isArray(s,e=!0){return Array.isArray(s)&&(e||s.length!==0)}static isObject(s,e=!0){return typeof s=="object"&&!Array.isArray(s)&&s!=null&&(e||Object.keys(s).length!==0)}static equals(s,e,n){return n?this.resolveFieldData(s,n)===this.resolveFieldData(e,n):this.equalsByValue(s,e)}static equalsByValue(s,e){if(s===e)return!0;if(s&&e&&typeof s=="object"&&typeof e=="object"){var n=Array.isArray(s),i=Array.isArray(e),o,r,l;if(n&&i){if(r=s.length,r!=e.length)return!1;for(o=r;o--!==0;)if(!this.equalsByValue(s[o],e[o]))return!1;return!0}if(n!=i)return!1;var h=this.isDate(s),g=this.isDate(e);if(h!=g)return!1;if(h&&g)return s.getTime()==e.getTime();var f=s instanceof RegExp,C=e instanceof RegExp;if(f!=C)return!1;if(f&&C)return s.toString()==e.toString();var E=Object.keys(s);if(r=E.length,r!==Object.keys(e).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,E[o]))return!1;for(o=r;o--!==0;)if(l=E[o],!this.equalsByValue(s[l],e[l]))return!1;return!0}return s!==s&&e!==e}static resolveFieldData(s,e){if(s&&e){if(this.isFunction(e))return e(s);if(e.indexOf(".")==-1)return s[e];{let n=e.split("."),i=s;for(let o=0,r=n.length;o<r;++o){if(i==null)return null;i=i[n[o]]}return i}}else return null}static isFunction(s){return!!(s&&s.constructor&&s.call&&s.apply)}static reorderArray(s,e,n){let i;s&&e!==n&&(n>=s.length&&(n%=s.length,e%=s.length),s.splice(n,0,s.splice(e,1)[0]))}static insertIntoOrderedArray(s,e,n,i){if(n.length>0){let o=!1;for(let r=0;r<n.length;r++)if(this.findIndexInList(n[r],i)>e){n.splice(r,0,s),o=!0;break}o||n.push(s)}else n.push(s)}static findIndexInList(s,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]==s){n=i;break}}return n}static contains(s,e){if(s!=null&&e&&e.length){for(let n of e)if(this.equals(s,n))return!0}return!1}static removeAccents(s){return s&&(s=s.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),s}static isDate(s){return Object.prototype.toString.call(s)==="[object Date]"}static isEmpty(s){return s==null||s===""||Array.isArray(s)&&s.length===0||!this.isDate(s)&&typeof s=="object"&&Object.keys(s).length===0}static isNotEmpty(s){return!this.isEmpty(s)}static compare(s,e,n,i=1){let o=-1,r=this.isEmpty(s),l=this.isEmpty(e);return r&&l?o=0:r?o=i:l?o=-i:typeof s=="string"&&typeof e=="string"?o=s.localeCompare(e,n,{numeric:!0}):o=s<e?-1:s>e?1:0,o}static sort(s,e,n=1,i,o=1){let r=t.compare(s,e,i,n),l=n;return(t.isEmpty(s)||t.isEmpty(e))&&(l=o===1?n:o),l*r}static merge(s,e){if(!(s==null&&e==null)){{if((s==null||typeof s=="object")&&(e==null||typeof e=="object"))return x(x({},s||{}),e||{});if((s==null||typeof s=="string")&&(e==null||typeof e=="string"))return[s||"",e||""].join(" ")}return e||s}}static isPrintableCharacter(s=""){return this.isNotEmpty(s)&&s.length===1&&s.match(/\S| /)}static getItemValue(s,...e){return this.isFunction(s)?s(...e):s}static findLastIndex(s,e){let n=-1;if(this.isNotEmpty(s))try{n=s.findLastIndex(e)}catch{n=s.lastIndexOf([...s].reverse().find(e))}return n}static findLast(s,e){let n;if(this.isNotEmpty(s))try{n=s.findLast(e)}catch{n=[...s].reverse().find(e)}return n}static deepEquals(s,e){if(s===e)return!0;if(s&&e&&typeof s=="object"&&typeof e=="object"){var n=Array.isArray(s),i=Array.isArray(e),o,r,l;if(n&&i){if(r=s.length,r!=e.length)return!1;for(o=r;o--!==0;)if(!this.deepEquals(s[o],e[o]))return!1;return!0}if(n!=i)return!1;var h=s instanceof Date,g=e instanceof Date;if(h!=g)return!1;if(h&&g)return s.getTime()==e.getTime();var f=s instanceof RegExp,C=e instanceof RegExp;if(f!=C)return!1;if(f&&C)return s.toString()==e.toString();var E=Object.keys(s);if(r=E.length,r!==Object.keys(e).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,E[o]))return!1;for(o=r;o--!==0;)if(l=E[o],!this.deepEquals(s[l],e[l]))return!1;return!0}return s!==s&&e!==e}static minifyCSS(s){return s&&s.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(s){return this.isString(s)?s.replace(/(-|_)/g,"").toLowerCase():s}static isString(s,e=!0){return typeof s=="string"&&(e||s!=="")}};function Os(){let t=[],s=(o,r)=>{let l=t.length>0?t[t.length-1]:{key:o,value:r},h=l.value+(l.key===o?0:r)+2;return t.push({key:o,value:h}),h},e=o=>{t=t.filter(r=>r.value!==o)},n=()=>t.length>0?t[t.length-1].value:0,i=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:i,set:(o,r,l)=>{r&&(r.style.zIndex=String(s(o,l)))},clear:o=>{o&&(e(i(o)),o.style.zIndex="")},getCurrent:()=>n(),generateZIndex:s,revertZIndex:e}}var Je=Os();var Ki=["content"],Ms=["overlay"],Zi=["*","*"],Ds=()=>({mode:null}),Ji=t=>({$implicit:t}),Ls=t=>({mode:t});function Fs(t,s){t&1&&ee(0)}function Ps(t,s){if(t&1&&(me(0),y(1,Fs,1,0,"ng-container",3)),t&2){let e=c();d(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ce(3,Ji,Ke(2,Ds)))}}function Bs(t,s){t&1&&ee(0)}function Vs(t,s){if(t&1){let e=ae();p(0,"div",5,0),D("click",function(){P(e);let i=c(2);return B(i.onOverlayClick())}),p(2,"p-motion",6),D("onBeforeEnter",function(i){P(e);let o=c(2);return B(o.onOverlayBeforeEnter(i))})("onEnter",function(i){P(e);let o=c(2);return B(o.onOverlayEnter(i))})("onAfterEnter",function(i){P(e);let o=c(2);return B(o.onOverlayAfterEnter(i))})("onBeforeLeave",function(i){P(e);let o=c(2);return B(o.onOverlayBeforeLeave(i))})("onLeave",function(i){P(e);let o=c(2);return B(o.onOverlayLeave(i))})("onAfterLeave",function(i){P(e);let o=c(2);return B(o.onOverlayAfterLeave(i))}),p(3,"div",5,1),D("click",function(i){P(e);let o=c(2);return B(o.onOverlayContentClick(i))}),me(5,1),y(6,Bs,1,0,"ng-container",3),u()()()}if(t&2){let e=c(2);ke(e.sx("root")),v(e.cn(e.cx("root"),e.styleClass)),a("pBind",e.ptm("root")),d(2),a("visible",e.visible)("appear",!0)("options",e.computedMotionOptions()),d(),v(e.cn(e.cx("content"),e.contentStyleClass)),a("pBind",e.ptm("content")),d(3),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ce(15,Ji,ce(13,Ls,e.overlayMode)))}}function Ns(t,s){if(t&1&&y(0,Vs,7,17,"div",4),t&2){let e=c();a("ngIf",e.modalVisible)}}var As={root:()=>({position:"absolute",top:"0"})},zs=`
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
`,$s={host:"p-overlay-host",root:({instance:t})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":t.modal,"p-overlay-center":t.modal&&t.overlayResponsiveDirection==="center","p-overlay-top":t.modal&&t.overlayResponsiveDirection==="top","p-overlay-top-start":t.modal&&t.overlayResponsiveDirection==="top-start","p-overlay-top-end":t.modal&&t.overlayResponsiveDirection==="top-end","p-overlay-bottom":t.modal&&t.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":t.modal&&t.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":t.modal&&t.overlayResponsiveDirection==="bottom-end","p-overlay-left":t.modal&&t.overlayResponsiveDirection==="left","p-overlay-left-start":t.modal&&t.overlayResponsiveDirection==="left-start","p-overlay-left-end":t.modal&&t.overlayResponsiveDirection==="left-end","p-overlay-right":t.modal&&t.overlayResponsiveDirection==="right","p-overlay-right-start":t.modal&&t.overlayResponsiveDirection==="right-start","p-overlay-right-end":t.modal&&t.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},Yi=(()=>{class t extends z{name="overlay";style=zs;classes=$s;inlineStyles=As;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),Xi=new Q("OVERLAY_INSTANCE"),eo=(()=>{class t extends W{overlayService;zone;componentName="Overlay";$pcOverlay=m(Xi,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return it.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return it.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return it.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return it.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=b(void 0);inline=b(!1);motionOptions=b(void 0);computedMotionOptions=R(()=>x(x({},this.ptm("motion")),this.motionOptions()||this.overlayOptions?.motionOptions));visibleChange=new N;onBeforeShow=new N;onShow=new N;onBeforeHide=new N;onHide=new N;onAnimationStart=new N;onAnimationDone=new N;onBeforeEnter=new N;onEnter=new N;onAfterEnter=new N;onBeforeLeave=new N;onLeave=new N;onAfterLeave=new N;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=b();$appendTo=R(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=m(Yi);bindDirectiveInstance=m(w,{self:!0});documentKeyboardListener;parentDragSubscription=null;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(we(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return x(x({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return x(x({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return jn(this.target,this.el?.nativeElement)}constructor(e,n){super(),this.overlayService=e,this.zone=n}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,n=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&Pe(this.targetEl),this.modal&&yt(this.document?.body,"p-overflow-hidden")}hide(e,n=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&Pe(this.targetEl),this.modal&&Ze(this.document?.body,"p-overflow-hidden");else return}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}container=te(void 0);onOverlayBeforeEnter(e){this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.container.set(this.overlayEl||e.element),this.show(this.overlayEl,!0),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents("onBeforeEnter",e)}onOverlayEnter(e){this.handleEvents("onEnter",e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents("onAfterEnter",e)}onOverlayBeforeLeave(e){this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.handleEvents("onBeforeLeave",e)}onOverlayLeave(e){this.handleEvents("onLeave",e)}onOverlayAfterLeave(e){this.hide(this.overlayEl,!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),Je.clear(this.overlayEl),this.modalVisible=!1,this.cd.markForCheck(),this.handleEvents("onAfterLeave",e)}handleEvents(e,n){this[e].emit(n),this.options&&this.options[e]&&this.options[e](n),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](n)}setZIndex(){this.autoZIndex&&Je.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode])}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?ht(this.document.body,this.overlayEl):ht(this.$appendTo(),this.overlayEl))}alignOverlay(){this.modal||this.overlayEl&&this.targetEl&&(this.overlayEl.style.minWidth=_e(this.targetEl)+"px",this.$appendTo()==="self"?Rn(this.overlayEl,this.targetEl):Hn(this.overlayEl,this.targetEl))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!=="self"&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl)&&this.hide(this.overlayEl,!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new gt(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let i=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&i}):i)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!tt()}):!tt())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!tt()}):!tt())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),Je.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(n){return new(n||t)(be(Jn),be(Ne))};static \u0275cmp=M({type:t,selectors:[["p-overlay"]],contentQueries:function(n,i,o){if(n&1&&Ae(o,Ki,4)(o,Re,4),n&2){let r;O(r=k())&&(i.contentTemplate=r.first),O(r=k())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&Qe(Ms,5)(Ki,5),n&2){let o;O(o=k())&&(i.overlayViewChild=o.first),O(o=k())&&(i.contentViewChild=o.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],inline:[1,"inline"],motionOptions:[1,"motionOptions"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone",onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave"},features:[H([Yi,{provide:Xi,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],ngContentSelectors:Zi,decls:2,vars:1,consts:[["overlay",""],["content",""],[3,"class","style","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","style","pBind","click",4,"ngIf"],[3,"click","pBind"],["name","p-anchored-overlay",3,"onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","visible","appear","options"]],template:function(n,i){n&1&&(ge(Zi),K(0,Ps,2,5)(1,Ns,1,1,"div",2)),n&2&&Z(i.inline()?0:1)},dependencies:[de,We,Le,X,w,Gi,hn],encapsulation:2,changeDetection:0})}return t})();var to=`
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
`;var Hs=`
    ${to}

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
`,Rs={root:"p-ink"},no=(()=>{class t extends z{name="ripple";style=Hs;classes=Rs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Ut=(()=>{class t extends W{componentName="Ripple";zone=m(Ne);_componentStyle=m(no);animationListener;mouseDownListener;timeout;constructor(){super(),ue(()=>{we(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&Ze(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!ze(n)&&!He(n)){let l=Math.max(_e(this.el.nativeElement),$e(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let i=Gn(this.el.nativeElement),o=e.pageX-i.left+this.document.body.scrollTop-He(n)/2,r=e.pageY-i.top+this.document.body.scrollLeft-ze(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",o+"px"),!this.$unstyled()&&yt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&(!this.$unstyled()&&Ze(l,"p-ink-active"),l.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&Ze(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&Ze(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Kn(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=he({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[H([no]),T]})}return t})();var io=["content"],js=["item"],qs=["loader"],Ws=["loadericon"],Qs=["element"],Us=["*"],fn=(t,s)=>({$implicit:t,options:s}),Gs=t=>({numCols:t}),ro=t=>({options:t}),Ks=()=>({styleClass:"p-virtualscroller-loading-icon"}),Zs=(t,s)=>({rows:t,columns:s});function Ys(t,s){t&1&&ee(0)}function Xs(t,s){if(t&1&&(ne(0),y(1,Ys,1,0,"ng-container",10),ie()),t&2){let e=c(2);d(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Me(2,fn,e.loadedItems,e.getContentOptions()))}}function Js(t,s){t&1&&ee(0)}function er(t,s){if(t&1&&(ne(0),y(1,Js,1,0,"ng-container",10),ie()),t&2){let e=s.$implicit,n=s.index,i=c(3);d(),a("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",Me(2,fn,e,i.getOptions(n)))}}function tr(t,s){if(t&1&&(p(0,"div",11,3),y(2,er,2,5,"ng-container",12),u()),t&2){let e=c(2);ke(e.contentStyle),v(e.cn(e.cx("content"),e.contentStyleClass)),a("pBind",e.ptm("content")),d(2),a("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function nr(t,s){if(t&1&&Y(0,"div",13),t&2){let e=c(2);v(e.cx("spacer")),a("ngStyle",e.spacerStyle)("pBind",e.ptm("spacer"))}}function ir(t,s){t&1&&ee(0)}function or(t,s){if(t&1&&(ne(0),y(1,ir,1,0,"ng-container",10),ie()),t&2){let e=s.index,n=c(4);d(),a("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",ce(4,ro,n.getLoaderOptions(e,n.both&&ce(2,Gs,n.numItemsInViewport.cols))))}}function sr(t,s){if(t&1&&(ne(0),y(1,or,2,6,"ng-container",14),ie()),t&2){let e=c(3);d(),a("ngForOf",e.loaderArr)}}function rr(t,s){t&1&&ee(0)}function lr(t,s){if(t&1&&(ne(0),y(1,rr,1,0,"ng-container",10),ie()),t&2){let e=c(4);d(),a("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",ce(3,ro,Ke(2,Ks)))}}function ar(t,s){if(t&1&&(se(),Y(0,"svg",15)),t&2){let e=c(4);v(e.cx("loadingIcon")),a("spin",!0)("pBind",e.ptm("loadingIcon"))}}function dr(t,s){if(t&1&&y(0,lr,2,5,"ng-container",6)(1,ar,1,4,"ng-template",null,5,Ce),t&2){let e=Oe(2),n=c(3);a("ngIf",n.loaderIconTemplate||n._loaderIconTemplate)("ngIfElse",e)}}function cr(t,s){if(t&1&&(p(0,"div",11),y(1,sr,2,1,"ng-container",6)(2,dr,3,2,"ng-template",null,4,Ce),u()),t&2){let e=Oe(3),n=c(2);v(n.cx("loader")),a("pBind",n.ptm("loader")),d(),a("ngIf",n.loaderTemplate||n._loaderTemplate)("ngIfElse",e)}}function pr(t,s){if(t&1){let e=ae();ne(0),p(1,"div",7,1),D("scroll",function(i){P(e);let o=c();return B(o.onContainerScroll(i))}),y(3,Xs,2,5,"ng-container",6)(4,tr,3,7,"ng-template",null,2,Ce)(6,nr,1,4,"div",8)(7,cr,4,5,"div",9),u(),ie()}if(t&2){let e=Oe(5),n=c();d(),v(n.cn(n.cx("root"),n.styleClass)),a("ngStyle",n._style)("pBind",n.ptm("root")),L("id",n._id)("tabindex",n.tabindex),d(2),a("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),d(3),a("ngIf",n._showSpacer),d(),a("ngIf",!n.loaderDisabled&&n._showLoader&&n.d_loading)}}function ur(t,s){t&1&&ee(0)}function hr(t,s){if(t&1&&(ne(0),y(1,ur,1,0,"ng-container",10),ie()),t&2){let e=c(2);d(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Me(5,fn,e.items,Me(2,Zs,e._items,e.loadedColumns)))}}function fr(t,s){if(t&1&&(me(0),y(1,hr,2,8,"ng-container",16)),t&2){let e=c();d(),a("ngIf",e.contentTemplate||e._contentTemplate)}}var mr=`
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
`,gr={root:({instance:t})=>["p-virtualscroller",{"p-virtualscroller-inline":t.inline,"p-virtualscroller-both p-both-scroll":t.both,"p-virtualscroller-horizontal p-horizontal-scroll":t.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:t})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!t.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},oo=(()=>{class t extends z{name="virtualscroller";css=mr;classes=gr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var so=new Q("SCROLLER_INSTANCE"),lo=(()=>{class t extends W{zone;componentName="VirtualScroller";bindDirectiveInstance=m(w,{self:!0});$pcScroller=m(so,{optional:!0,skipSelf:!0})??void 0;hostName="";get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i)),Object.entries(e).forEach(([n,i])=>this[`${n}`]!==i&&(this[`${n}`]=i)))}onLazyLoad=new N;onScroll=new N;onScrollIndexChange=new N;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:Array.isArray(e)?e.slice(this._appendOnly?0:this.first.cols,this.last.cols):e):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=m(oo);constructor(e){super(),this.zone=e}onInit(){this.setInitialState()}onChanges(e){let n=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:i,currentValue:o}=e.loading;this.lazy&&i!==o&&o!==this.d_loading&&(this.d_loading=o,n=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:i,currentValue:o}=e.numToleratedItems;i!==o&&o!==this.d_numToleratedItems&&(this.d_numToleratedItems=o)}if(e.options){let{previousValue:i,currentValue:o}=e.options;this.lazy&&i?.loading!==o?.loading&&o?.loading!==this.d_loading&&(this.d_loading=o.loading,n=!0),i?.numToleratedItems!==o?.numToleratedItems&&o?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=o.numToleratedItems)}this.initialized&&!n&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&this.init()}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewInit(){Promise.resolve().then(()=>{this.viewInit()})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host")),this.initialized||this.viewInit()}onDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1}viewInit(){we(this.platformId)&&!this.initialized&&nn(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=He(this.elementViewChild?.nativeElement),this.defaultHeight=ze(this.elementViewChild?.nativeElement),this.defaultContentWidth=He(this.contentEl),this.defaultContentHeight=ze(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.bindResizeListener(),setTimeout(()=>{this.setSpacerSize(),this.setSize(),this.calculateOptions(),this.calculateAutoSize(),this.cd.detectChanges()},1))}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||Se(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,(this.d_loading===void 0||this.d_loading===!1)&&(this.d_loading=this._loading||!1),this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=this.loaderArr.length>0?this.loaderArr:[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,n="auto"){if(this.both?e.every(o=>o>-1):e>-1){let o=this.first,{scrollTop:r=0,scrollLeft:l=0}=this.elementViewChild?.nativeElement,{numToleratedItems:h}=this.calculateNumItems(),g=this.getContentPosition(),f=this.itemSize,C=($=0,G)=>$<=G?0:$,E=($,G,pe)=>$*G+pe,F=($=0,G=0)=>this.scrollTo({left:$,top:G,behavior:n}),A=this.both?{rows:0,cols:0}:0,J=!1,V=!1;this.both?(A={rows:C(e[0],h[0]),cols:C(e[1],h[1])},F(E(A.cols,f[1],g.left),E(A.rows,f[0],g.top)),V=this.lastScrollPos.top!==r||this.lastScrollPos.left!==l,J=A.rows!==o.rows||A.cols!==o.cols):(A=C(e,h),this.horizontal?F(E(A,f,g.left),r):F(l,E(A,f,g.top)),V=this.lastScrollPos!==(this.horizontal?l:r),J=A!==o),this.isRangeChanged=J,V&&(this.first=A)}}scrollInView(e,n,i="auto"){if(n){let{first:o,viewport:r}=this.getRenderedRange(),l=(f=0,C=0)=>this.scrollTo({left:f,top:C,behavior:i}),h=n==="to-start",g=n==="to-end";if(h){if(this.both)r.first.rows-o.rows>e[0]?l(r.first.cols*this._itemSize[1],(r.first.rows-1)*this._itemSize[0]):r.first.cols-o.cols>e[1]&&l((r.first.cols-1)*this._itemSize[1],r.first.rows*this._itemSize[0]);else if(r.first-o>e){let f=(r.first-1)*this._itemSize;this.horizontal?l(f,0):l(0,f)}}else if(g){if(this.both)r.last.rows-o.rows<=e[0]+1?l(r.first.cols*this._itemSize[1],(r.first.rows+1)*this._itemSize[0]):r.last.cols-o.cols<=e[1]+1&&l((r.first.cols+1)*this._itemSize[1],r.first.rows*this._itemSize[0]);else if(r.last-o<=e+1){let f=(r.first+1)*this._itemSize;this.horizontal?l(f,0):l(0,f)}}}else this.scrollToIndex(e,i)}getRenderedRange(){let e=(o,r)=>r||o?Math.floor(o/(r||o)):0,n=this.first,i=0;if(this.elementViewChild?.nativeElement){let{scrollTop:o,scrollLeft:r}=this.elementViewChild.nativeElement;if(this.both)n={rows:e(o,this._itemSize[0]),cols:e(r,this._itemSize[1])},i={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{let l=this.horizontal?r:o;n=e(l,this._itemSize),i=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:i}}}calculateNumItems(){let e=this.getContentPosition(),n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,o=(g,f)=>f||g?Math.ceil(g/(f||g)):0,r=g=>Math.ceil(g/2),l=this.both?{rows:o(i,this._itemSize[0]),cols:o(n,this._itemSize[1])}:o(this.horizontal?n:i,this._itemSize),h=this.d_numToleratedItems||(this.both?[r(l.rows),r(l.cols)]:r(l));return{numItemsInViewport:l,numToleratedItems:h}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:n}=this.calculateNumItems(),i=(l,h,g,f=!1)=>this.getLast(l+h+(l<g?2:3)*g,f),o=this.first,r=this.both?{rows:i(this.first.rows,e.rows,n[0]),cols:i(this.first.cols,e.cols,n[1],!0)}:i(this.first,e,n);this.last=r,this.numItemsInViewport=e,this.d_numToleratedItems=n,this._showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:o.cols}:0:o,last:Math.min(this._step?this._step:this.last,this._items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,n]=[He(this.contentEl),ze(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),n!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[i,o]=[He(this.elementViewChild.nativeElement),ze(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=i<this.defaultWidth?i+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=o<this.defaultHeight?o+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,n=!1){return this._items?Math.min(n?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),i=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),o=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),r=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:i,top:o,bottom:r,x:n+i,y:o+r}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement,n=e.parentElement?.parentElement,i=e.offsetWidth,o=n?.offsetWidth||0,r=this._scrollWidth||`${i||o}px`,l=e.offsetHeight,h=n?.offsetHeight||0,g=this._scrollHeight||`${l||h}px`,f=(C,E)=>e.style[C]=E;this.both||this.horizontal?(f("height",g),f("width",r)):f("height",g)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),n=(i,o,r,l=0)=>this.spacerStyle=je(x({},this.spacerStyle),{[`${i}`]:(o||[]).length*r+l+"px"});this.both?(n("height",this._items,this._itemSize[0],e.y),n("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?n("width",this._columns||this._items,this._itemSize,e.x):n("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let n=e?e.first:this.first,i=(r,l)=>r*l,o=(r=0,l=0)=>this.contentStyle=je(x({},this.contentStyle),{transform:`translate3d(${r}px, ${l}px, 0)`});if(this.both)o(i(n.cols,this._itemSize[1]),i(n.rows,this._itemSize[0]));else{let r=i(n,this._itemSize);this.horizontal?o(r,0):o(0,r)}}}onScrollPositionChange(e){let n=e.target;if(!n)throw new Error("Event target is null");let i=this.getContentPosition(),o=(V,$)=>V?V>$?V-$:V:0,r=(V,$)=>$||V?Math.floor(V/($||V)):0,l=(V,$,G,pe,Ee,Ve)=>V<=Ee?Ee:Ve?G-pe-Ee:$+Ee-1,h=(V,$,G,pe,Ee,Ve,ot)=>V<=Ve?0:Math.max(0,ot?V<$?G:V-Ve:V>$?G:V-2*Ve),g=(V,$,G,pe,Ee,Ve=!1)=>{let ot=$+pe+2*Ee;return V>=Ee&&(ot+=Ee+1),this.getLast(ot,Ve)},f=o(n.scrollTop,i.top),C=o(n.scrollLeft,i.left),E=this.both?{rows:0,cols:0}:0,F=this.last,A=!1,J=this.lastScrollPos;if(this.both){let V=this.lastScrollPos.top<=f,$=this.lastScrollPos.left<=C;if(!this._appendOnly||this._appendOnly&&(V||$)){let G={rows:r(f,this._itemSize[0]),cols:r(C,this._itemSize[1])},pe={rows:l(G.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],V),cols:l(G.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],$)};E={rows:h(G.rows,pe.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],V),cols:h(G.cols,pe.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],$)},F={rows:g(G.rows,E.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:g(G.cols,E.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},A=E.rows!==this.first.rows||F.rows!==this.last.rows||E.cols!==this.first.cols||F.cols!==this.last.cols||this.isRangeChanged,J={top:f,left:C}}}else{let V=this.horizontal?C:f,$=this.lastScrollPos<=V;if(!this._appendOnly||this._appendOnly&&$){let G=r(V,this._itemSize),pe=l(G,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,$);E=h(G,pe,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,$),F=g(G,E,this.last,this.numItemsInViewport,this.d_numToleratedItems),A=E!==this.first||F!==this.last||this.isRangeChanged,J=V}}return{first:E,last:F,isRangeChanged:A,scrollPos:J}}onScrollChange(e){let{first:n,last:i,isRangeChanged:o,scrollPos:r}=this.onScrollPositionChange(e);if(o){let l={first:n,last:i};if(this.setContentPosition(l),this.first=n,this.last=i,this.lastScrollPos=r,this.handleEvents("onScrollIndexChange",l),this._lazy&&this.isPageChanged(n)){let h={first:this._step?Math.min(this.getPageByFirst(n)*this._step,this._items.length-this._step):n,last:Math.min(this._step?(this.getPageByFirst(n)+1)*this._step:i,this._items.length)};(this.lazyLoadState.first!==h.first||this.lazyLoadState.last!==h.last)&&this.handleEvents("onLazyLoad",h),this.lazyLoadState=h}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this._showLoader){let{isRangeChanged:n}=this.onScrollPositionChange(e);(n||this._step&&this.isPageChanged())&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this._showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){we(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,n=tt()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,n,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(nn(this.elementViewChild?.nativeElement)){let[e,n]=[He(this.elementViewChild?.nativeElement),ze(this.elementViewChild?.nativeElement)],[i,o]=[e!==this.defaultWidth,n!==this.defaultHeight];(this.both?i||o:this.horizontal?i:this.vertical&&o)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=n,this.defaultContentWidth=He(this.contentEl),this.defaultContentHeight=ze(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,n){return this.options&&this.options[e]?this.options[e](n):this[e].emit(n)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,n)=>this.getLoaderOptions(e,n),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both,scrollTo:this.scrollTo.bind(this),scrollToIndex:this.scrollToIndex.bind(this),orientation:this._orientation,scrollableElement:this.elementViewChild?.nativeElement}}getOptions(e){let n=(this._items||[]).length,i=this.both?this.first.rows+e:this.first+e;return{index:i,count:n,first:i===0,last:i===n-1,even:i%2===0,odd:i%2!==0}}getLoaderOptions(e,n){let i=this.loaderArr.length;return x({index:e,count:i,first:e===0,last:e===i-1,even:e%2===0,odd:e%2!==0,loading:this.d_loading},n)}static \u0275fac=function(n){return new(n||t)(be(Ne))};static \u0275cmp=M({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(n,i,o){if(n&1&&Ae(o,io,4)(o,js,4)(o,qs,4)(o,Ws,4)(o,Re,4),n&2){let r;O(r=k())&&(i.contentTemplate=r.first),O(r=k())&&(i.itemTemplate=r.first),O(r=k())&&(i.loaderTemplate=r.first),O(r=k())&&(i.loaderIconTemplate=r.first),O(r=k())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&Qe(Qs,5)(io,5),n&2){let o;O(o=k())&&(i.elementViewChild=o.first),O(o=k())&&(i.contentViewChild=o.first)}},hostVars:2,hostBindings:function(n,i){n&2&&Ue("height",i.height)},inputs:{hostName:"hostName",id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[H([oo,{provide:so,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],ngContentSelectors:Us,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle","pBind"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin","pBind"],[4,"ngIf"]],template:function(n,i){if(n&1&&(ge(),y(0,pr,8,10,"ng-container",6)(1,fr,2,1,"ng-template",null,0,Ce)),n&2){let o=Oe(2);a("ngIf",!i._disabled)("ngIfElse",o)}},dependencies:[de,kt,We,Le,et,jt,X,w],encapsulation:2})}return t})();var ao=`
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
`;var br={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},co=(()=>{class t extends z{name="tooltip";style=ao;classes=br;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var po=new Q("TOOLTIP_INSTANCE"),uo=(()=>{class t extends W{zone;viewContainer;componentName="Tooltip";$pcTooltip=m(po,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;showOnEllipsis=!1;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=b(void 0);$appendTo=R(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,showOnEllipsis:!1,id:Be("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=m(co);interactionInProgress=!1;ptTooltip=b();pTooltipPT=b();pTooltipUnstyled=b();constructor(e,n){super(),this.zone=e,this.viewContainer=n,ue(()=>{let i=this.ptTooltip()||this.pTooltipPT();i&&this.directivePT.set(i)}),ue(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){we(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:!0}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:!0})),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}onChanges(e){e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.showOnEllipsis&&this.setOption({showOnEllipsis:e.showOnEllipsis.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=x(x({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(ut(e.relatedTarget,"p-tooltip")||ut(e.relatedTarget,"p-tooltip-text")||ut(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onTouchStart(e){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener())}onTouchEnd(e){this.isAutoHide()&&this.deactivate()}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",e=>{this.container&&!this.container.contains(e.target)&&!this.el.nativeElement.contains(e.target)&&(this.deactivate(),this.unbindDocumentTouchListener())}))}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null)}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}hasEllipsis(){let e=this.el.nativeElement;return e.offsetWidth<e.scrollWidth||e.offsetHeight<e.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=_t("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let e=_t("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(e),this.tooltipText=_t("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?ht(this.container,this.el.nativeElement):ht(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),qn(this.container,250),this.getOption("tooltipZIndex")==="auto"?Je.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Je.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e&&typeof e.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[e]||[];for(let[o,r]of i.entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+zn(),i=e.top+$n();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Se(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=_e(e),i=($e(e)-$e(this.container))/2;this.alignTooltip(n,i);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=_e(this.container),i=($e(this.el.nativeElement)-$e(this.container))/2;this.alignTooltip(-n,i),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),i=_e(this.container),o=(_e(this.el.nativeElement)-_e(this.container))/2,r=$e(this.container);this.alignTooltip(o,-r);let l=n.left-this.getHostOffset().left+i/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=l+"px"}getArrowElement(){return Se(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=_e(this.container),i=this.getHostOffset(),o=(_e(this.el.nativeElement)-_e(this.container))/2,r=$e(this.el.nativeElement);this.alignTooltip(o,r);let l=i.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=l+"px"}alignTooltip(e,n){let i=this.getHostOffset(),o=i.left+e,r=i.top+n;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=x(x({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return ut(e,"p-inputwrapper")?Se(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+e,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,o=_e(this.container),r=$e(this.container),l=An();return i+o>l.width||i<0||n<0||n+r>l.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new gt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Zn(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&Je.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(be(Ne),be(Cn))};static \u0275dir=he({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",S],showDelay:[2,"showDelay","showDelay",ye],hideDelay:[2,"hideDelay","hideDelay",ye],life:[2,"life","life",ye],positionTop:[2,"positionTop","positionTop",ye],positionLeft:[2,"positionLeft","positionLeft",ye],autoHide:[2,"autoHide","autoHide",S],fitContent:[2,"fitContent","fitContent",S],hideOnEscape:[2,"hideOnEscape","hideOnEscape",S],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",S],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[H([co,{provide:po,useExisting:t},{provide:U,useExisting:t}]),T]})}return t})();var ho=`
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
`;var wt=t=>({height:t}),mn=t=>({$implicit:t});function vr(t,s){if(t&1&&(se(),Y(0,"svg",6)),t&2){let e=c(2);v(e.cx("optionCheckIcon")),a("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionCheckIcon"))}}function yr(t,s){if(t&1&&(se(),Y(0,"svg",7)),t&2){let e=c(2);v(e.cx("optionBlankIcon")),a("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionBlankIcon"))}}function _r(t,s){if(t&1&&(ne(0),y(1,vr,1,3,"svg",4)(2,yr,1,3,"svg",5),ie()),t&2){let e=c();d(),a("ngIf",e.selected),d(),a("ngIf",!e.selected)}}function Cr(t,s){if(t&1&&(p(0,"span",8),I(1),u()),t&2){let e=c();a("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionLabel")),d(),fe(e.label??"empty")}}function xr(t,s){t&1&&ee(0)}var wr=["item"],Sr=["group"],Tr=["loader"],Ir=["selectedItem"],Er=["header"],fo=["filter"],Or=["footer"],kr=["emptyfilter"],Mr=["empty"],Dr=["dropdownicon"],Lr=["loadingicon"],Fr=["clearicon"],Pr=["filtericon"],Br=["onicon"],Vr=["officon"],Nr=["cancelicon"],Ar=["focusInput"],zr=["editableInput"],$r=["items"],Hr=["scroller"],Rr=["overlay"],jr=["firstHiddenFocusableEl"],qr=["lastHiddenFocusableEl"],mo=t=>({class:t}),go=t=>({options:t}),bo=(t,s)=>({$implicit:t,options:s}),Wr=()=>({});function Qr(t,s){if(t&1&&(ne(0),I(1),ie()),t&2){let e=c(2);d(),fe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Ur(t,s){if(t&1&&ee(0,24),t&2){let e=c(2);a("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",ce(2,mn,e.selectedOption))}}function Gr(t,s){if(t&1&&(p(0,"span"),I(1),u()),t&2){let e=c(3);d(),fe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Kr(t,s){if(t&1&&y(0,Gr,2,1,"span",18),t&2){let e=c(2);a("ngIf",e.isSelectedOptionEmpty())}}function Zr(t,s){if(t&1){let e=ae();p(0,"span",22,3),D("focus",function(i){P(e);let o=c();return B(o.onInputFocus(i))})("blur",function(i){P(e);let o=c();return B(o.onInputBlur(i))})("keydown",function(i){P(e);let o=c();return B(o.onKeyDown(i))}),y(2,Qr,2,1,"ng-container",20)(3,Ur,1,4,"ng-container",23)(4,Kr,1,1,"ng-template",null,4,Ce),u()}if(t&2){let e=Oe(5),n=c();v(n.cx("label")),a("pBind",n.ptm("label"))("pTooltip",n.tooltip)("pTooltipUnstyled",n.unstyled())("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),L("aria-disabled",n.$disabled())("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",n.overlayVisible??!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.$disabled()?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required())("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0)("data-p",n.labelDataP),d(2),a("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate)("ngIfElse",e),d(),a("ngIf",(n.selectedItemTemplate||n._selectedItemTemplate)&&!n.isSelectedOptionEmpty())}}function Yr(t,s){if(t&1){let e=ae();p(0,"input",25,5),D("input",function(i){P(e);let o=c();return B(o.onEditableInput(i))})("keydown",function(i){P(e);let o=c();return B(o.onKeyDown(i))})("focus",function(i){P(e);let o=c();return B(o.onInputFocus(i))})("blur",function(i){P(e);let o=c();return B(o.onInputBlur(i))}),u()}if(t&2){let e=c();v(e.cx("label")),a("pBind",e.ptm("label"))("pAutoFocus",e.autofocus),L("id",e.inputId)("aria-haspopup","listbox")("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("data-p",e.labelDataP)}}function Xr(t,s){if(t&1){let e=ae();se(),p(0,"svg",28),D("click",function(i){P(e);let o=c(2);return B(o.clear(i))}),u()}if(t&2){let e=c(2);v(e.cx("clearIcon")),a("pBind",e.ptm("clearIcon")),L("data-pc-section","clearicon")}}function Jr(t,s){}function el(t,s){t&1&&y(0,Jr,0,0,"ng-template")}function tl(t,s){if(t&1){let e=ae();p(0,"span",29),D("click",function(i){P(e);let o=c(2);return B(o.clear(i))}),y(1,el,1,0,null,30),u()}if(t&2){let e=c(2);v(e.cx("clearIcon")),a("pBind",e.ptm("clearIcon")),L("data-pc-section","clearicon"),d(),a("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",ce(6,mo,e.cx("clearIcon")))}}function nl(t,s){if(t&1&&(ne(0),y(1,Xr,1,4,"svg",26)(2,tl,2,8,"span",27),ie()),t&2){let e=c();d(),a("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),d(),a("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function il(t,s){t&1&&ee(0)}function ol(t,s){if(t&1&&(ne(0),y(1,il,1,0,"ng-container",31),ie()),t&2){let e=c(2);d(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function sl(t,s){if(t&1&&Y(0,"span",33),t&2){let e=c(3);v(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon)),a("pBind",e.ptm("loadingIcon"))}}function rl(t,s){if(t&1&&Y(0,"span",33),t&2){let e=c(3);v(e.cn(e.cx("loadingIcon"),"pi pi-spinner pi-spin")),a("pBind",e.ptm("loadingIcon"))}}function ll(t,s){if(t&1&&(ne(0),y(1,sl,1,3,"span",32)(2,rl,1,3,"span",32),ie()),t&2){let e=c(2);d(),a("ngIf",e.loadingIcon),d(),a("ngIf",!e.loadingIcon)}}function al(t,s){if(t&1&&(ne(0),y(1,ol,2,1,"ng-container",18)(2,ll,3,2,"ng-container",18),ie()),t&2){let e=c();d(),a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),d(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function dl(t,s){if(t&1&&Y(0,"span",36),t&2){let e=c(3);v(e.cn(e.cx("dropdownIcon"),e.dropdownIcon)),a("pBind",e.ptm("dropdownIcon"))}}function cl(t,s){if(t&1&&(se(),Y(0,"svg",37)),t&2){let e=c(3);v(e.cx("dropdownIcon")),a("pBind",e.ptm("dropdownIcon"))}}function pl(t,s){if(t&1&&(ne(0),y(1,dl,1,3,"span",34)(2,cl,1,3,"svg",35),ie()),t&2){let e=c(2);d(),a("ngIf",e.dropdownIcon),d(),a("ngIf",!e.dropdownIcon)}}function ul(t,s){}function hl(t,s){t&1&&y(0,ul,0,0,"ng-template")}function fl(t,s){if(t&1&&(p(0,"span",36),y(1,hl,1,0,null,30),u()),t&2){let e=c(2);v(e.cx("dropdownIcon")),a("pBind",e.ptm("dropdownIcon")),d(),a("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",ce(5,mo,e.cx("dropdownIcon")))}}function ml(t,s){if(t&1&&y(0,pl,3,2,"ng-container",18)(1,fl,2,7,"span",34),t&2){let e=c();a("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),d(),a("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function gl(t,s){t&1&&ee(0)}function bl(t,s){t&1&&ee(0)}function vl(t,s){if(t&1&&(ne(0),y(1,bl,1,0,"ng-container",30),ie()),t&2){let e=c(3);d(),a("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",ce(2,go,e.filterOptions))}}function yl(t,s){if(t&1&&(se(),Y(0,"svg",45)),t&2){let e=c(4);a("pBind",e.ptm("filterIcon"))}}function _l(t,s){}function Cl(t,s){t&1&&y(0,_l,0,0,"ng-template")}function xl(t,s){if(t&1&&(p(0,"span",36),y(1,Cl,1,0,null,31),u()),t&2){let e=c(4);a("pBind",e.ptm("filterIcon")),d(),a("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function wl(t,s){if(t&1){let e=ae();p(0,"p-iconfield",41)(1,"input",42,10),D("input",function(i){P(e);let o=c(3);return B(o.onFilterInputChange(i))})("keydown",function(i){P(e);let o=c(3);return B(o.onFilterKeyDown(i))})("blur",function(i){P(e);let o=c(3);return B(o.onFilterBlur(i))}),u(),p(3,"p-inputicon",41),y(4,yl,1,1,"svg",43)(5,xl,2,2,"span",44),u()()}if(t&2){let e=c(3);a("pt",e.ptm("pcFilterContainer"))("unstyled",e.unstyled()),d(),v(e.cx("pcFilter")),a("pSize",e.size())("value",e._filterValue()||"")("variant",e.$variant())("pt",e.ptm("pcFilter"))("unstyled",e.unstyled()),L("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),d(2),a("pt",e.ptm("pcFilterIconContainer"))("unstyled",e.unstyled()),d(),a("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),d(),a("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function Sl(t,s){if(t&1&&(p(0,"div",29),D("click",function(n){return n.stopPropagation()}),y(1,vl,2,4,"ng-container",20)(2,wl,6,17,"ng-template",null,9,Ce),u()),t&2){let e=Oe(3),n=c(2);v(n.cx("header")),a("pBind",n.ptm("header")),d(),a("ngIf",n.filterTemplate||n._filterTemplate)("ngIfElse",e)}}function Tl(t,s){t&1&&ee(0)}function Il(t,s){if(t&1&&y(0,Tl,1,0,"ng-container",30),t&2){let e=s.$implicit,n=s.options;c(2);let i=Oe(9);a("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,bo,e,n))}}function El(t,s){t&1&&ee(0)}function Ol(t,s){if(t&1&&y(0,El,1,0,"ng-container",30),t&2){let e=s.options,n=c(4);a("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",ce(2,go,e))}}function kl(t,s){t&1&&(ne(0),y(1,Ol,1,4,"ng-template",null,12,Ce),ie())}function Ml(t,s){if(t&1){let e=ae();p(0,"p-scroller",46,11),D("onLazyLoad",function(i){P(e);let o=c(2);return B(o.onLazyLoad.emit(i))}),y(2,Il,1,5,"ng-template",null,2,Ce)(4,kl,3,0,"ng-container",18),u()}if(t&2){let e=c(2);ke(ce(9,wt,e.scrollHeight)),a("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions)("pt",e.ptm("virtualScroller")),d(4),a("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Dl(t,s){t&1&&ee(0)}function Ll(t,s){if(t&1&&(ne(0),y(1,Dl,1,0,"ng-container",30),ie()),t&2){c();let e=Oe(9),n=c();d(),a("ngTemplateOutlet",e)("ngTemplateOutletContext",Me(3,bo,n.visibleOptions(),Ke(2,Wr)))}}function Fl(t,s){if(t&1&&(p(0,"span",36),I(1),u()),t&2){let e=c(2).$implicit,n=c(3);v(n.cx("optionGroupLabel")),a("pBind",n.ptm("optionGroupLabel")),d(),fe(n.getOptionGroupLabel(e.optionGroup))}}function Pl(t,s){t&1&&ee(0)}function Bl(t,s){if(t&1&&(ne(0),p(1,"li",50),y(2,Fl,2,4,"span",34)(3,Pl,1,0,"ng-container",30),u(),ie()),t&2){let e=c(),n=e.$implicit,i=e.index,o=c().options,r=c(2);d(),v(r.cx("optionGroup")),a("ngStyle",ce(8,wt,o.itemSize+"px"))("pBind",r.ptm("optionGroup")),L("id",r.id+"_"+r.getOptionIndex(i,o)),d(),a("ngIf",!r.groupTemplate&&!r._groupTemplate),d(),a("ngTemplateOutlet",r.groupTemplate||r._groupTemplate)("ngTemplateOutletContext",ce(10,mn,n.optionGroup))}}function Vl(t,s){if(t&1){let e=ae();ne(0),p(1,"p-selectItem",51),D("onClick",function(i){P(e);let o=c().$implicit,r=c(3);return B(r.onOptionSelect(i,o))})("onMouseEnter",function(i){P(e);let o=c().index,r=c().options,l=c(2);return B(l.onOptionMouseEnter(i,l.getOptionIndex(o,r)))}),u(),ie()}if(t&2){let e=c(),n=e.$implicit,i=e.index,o=c().options,r=c(2);d(),a("id",r.id+"_"+r.getOptionIndex(i,o))("option",n)("checkmark",r.checkmark)("selected",r.isSelected(n))("label",r.getOptionLabel(n))("disabled",r.isOptionDisabled(n))("template",r.itemTemplate||r._itemTemplate)("focused",r.focusedOptionIndex()===r.getOptionIndex(i,o))("ariaPosInset",r.getAriaPosInset(r.getOptionIndex(i,o)))("ariaSetSize",r.ariaSetSize)("index",i)("unstyled",r.unstyled())("scrollerOptions",o)}}function Nl(t,s){if(t&1&&y(0,Bl,4,12,"ng-container",18)(1,Vl,2,13,"ng-container",18),t&2){let e=s.$implicit,n=c(3);a("ngIf",n.isOptionGroup(e)),d(),a("ngIf",!n.isOptionGroup(e))}}function Al(t,s){if(t&1&&I(0),t&2){let e=c(4);qe(" ",e.emptyFilterMessageLabel," ")}}function zl(t,s){t&1&&ee(0,null,14)}function $l(t,s){if(t&1&&y(0,zl,2,0,"ng-container",31),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function Hl(t,s){if(t&1&&(p(0,"li",50),K(1,Al,1,1)(2,$l,1,1,"ng-container"),u()),t&2){let e=c().options,n=c(2);v(n.cx("emptyMessage")),a("ngStyle",ce(5,wt,e.itemSize+"px"))("pBind",n.ptm("emptyMessage")),d(),Z(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function Rl(t,s){if(t&1&&I(0),t&2){let e=c(4);qe(" ",e.emptyMessageLabel||e.emptyFilterMessageLabel," ")}}function jl(t,s){t&1&&ee(0,null,15)}function ql(t,s){if(t&1&&y(0,jl,2,0,"ng-container",31),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Wl(t,s){if(t&1&&(p(0,"li",50),K(1,Rl,1,1)(2,ql,1,1,"ng-container"),u()),t&2){let e=c().options,n=c(2);v(n.cx("emptyMessage")),a("ngStyle",ce(5,wt,e.itemSize+"px"))("pBind",n.ptm("emptyMessage")),d(),Z(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function Ql(t,s){if(t&1&&(p(0,"ul",47,13),y(2,Nl,2,2,"ng-template",48)(3,Hl,3,7,"li",49)(4,Wl,3,7,"li",49),u()),t&2){let e=s.$implicit,n=s.options,i=c(2);ke(n.contentStyle),v(i.cn(i.cx("list"),n.contentStyleClass)),a("pBind",i.ptm("list")),L("id",i.id+"_list")("aria-label",i.listLabel),d(2),a("ngForOf",e),d(),a("ngIf",i.filterValue&&i.isEmpty()),d(),a("ngIf",!i.filterValue&&i.isEmpty())}}function Ul(t,s){t&1&&ee(0)}function Gl(t,s){if(t&1){let e=ae();p(0,"div",38)(1,"span",39,6),D("focus",function(i){P(e);let o=c();return B(o.onFirstHiddenFocus(i))}),u(),y(3,gl,1,0,"ng-container",31)(4,Sl,4,5,"div",27),p(5,"div",36),y(6,Ml,5,11,"p-scroller",40)(7,Ll,2,6,"ng-container",18)(8,Ql,5,10,"ng-template",null,7,Ce),u(),y(10,Ul,1,0,"ng-container",31),p(11,"span",39,8),D("focus",function(i){P(e);let o=c();return B(o.onLastHiddenFocus(i))}),u()()}if(t&2){let e=c();v(e.cn(e.cx("overlay"),e.panelStyleClass)),a("ngStyle",e.panelStyle)("pBind",e.ptm("overlay")),L("data-p",e.overlayDataP),d(),a("pBind",e.ptm("hiddenFirstFocusableEl")),L("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),d(2),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),d(),a("ngIf",e.filter),d(),v(e.cx("listContainer")),Ue("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),a("pBind",e.ptm("listContainer")),d(),a("ngIf",e.virtualScroll),d(),a("ngIf",!e.virtualScroll),d(3),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),d(),a("pBind",e.ptm("hiddenLastFocusableEl")),L("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var Kl=`
    ${ho}

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
`,Zl={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled","p-focus":t.focused,"p-invalid":t.invalid(),"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size()==="small","p-select-lg p-inputfield-lg":t.size()==="large"}],label:({instance:t})=>["p-select-label",{"p-placeholder":t.placeholder()&&t.label()===t.placeholder(),"p-select-label-empty":!t.editable&&!t.selectedItemTemplate&&(t.label()===void 0||t.label()===null||t.label()==="p-emptylabel"||t.label().length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingIcon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t})=>["p-select-option",{"p-select-option-selected":t.selected&&!t.checkmark,"p-disabled":t.disabled,"p-focus":t.focused}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},Gt=(()=>{class t extends z{name="select";style=Kl;classes=Zl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var vo=new Q("SELECT_INSTANCE"),Yl=new Q("SELECT_ITEM_INSTANCE"),Xl={provide:Vt,useExisting:St(()=>Kt),multi:!0},Jl=(()=>{class t extends W{hostName="select";$pcSelectItem=m(Yl,{optional:!0,skipSelf:!0})??void 0;$pcSelect=m(vo,{optional:!0,skipSelf:!0})??void 0;id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;index;scrollerOptions;onClick=new N;onMouseEnter=new N;_componentStyle=m(Gt);onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}getPTOptions(){return this.$pcSelect?.getPTItemOptions?.(this.option,this.scrollerOptions,this.index??0,"option")??this.$pcSelect?.ptm("option",{context:{option:this.option,selected:this.selected,focused:this.focused,disabled:this.disabled}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",S],focused:[2,"focused","focused",S],label:"label",disabled:[2,"disabled","disabled",S],visible:[2,"visible","visible",S],itemSize:[2,"itemSize","itemSize",ye],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",S],index:"index",scrollerOptions:"scrollerOptions"},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[H([Gt,{provide:U,useExisting:t}]),T],decls:4,vars:21,consts:[["role","option","pRipple","",3,"click","mouseenter","id","pBind","ngStyle"],[4,"ngIf"],[3,"pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],["data-p-icon","blank",3,"class","pBind",4,"ngIf"],["data-p-icon","check",3,"pBind"],["data-p-icon","blank",3,"pBind"],[3,"pBind"]],template:function(n,i){n&1&&(p(0,"li",0),D("click",function(r){return i.onOptionClick(r)})("mouseenter",function(r){return i.onOptionMouseEnter(r)}),y(1,_r,3,2,"ng-container",1)(2,Cr,2,2,"span",2)(3,xr,1,0,"ng-container",3),u()),n&2&&(v(i.cx("option")),a("id",i.id)("pBind",i.getPTOptions())("ngStyle",ce(17,wt,(i.scrollerOptions==null?null:i.scrollerOptions.itemSize)+"px")),L("aria-label",i.label)("aria-setsize",i.ariaSetSize)("aria-posinset",i.ariaPosInset)("aria-selected",i.selected)("data-p-focused",i.focused)("data-p-highlight",i.selected)("data-p-selected",i.selected)("data-p-disabled",i.disabled),d(),a("ngIf",i.checkmark),d(),a("ngIf",!i.template),d(),a("ngTemplateOutlet",i.template)("ngTemplateOutletContext",ce(19,mn,i.option)))},dependencies:[de,We,Le,et,X,Ut,Pi,Fi,xe,w],encapsulation:2})}return t})(),Kt=(()=>{class t extends Ei{zone;filterService;componentName="Select";bindDirectiveInstance=m(w,{self:!0});id;scrollHeight="200px";filter;panelStyle;styleClass;panelStyleClass;readonly;editable;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){Dn(e,this._options())||this._options.set(e)}appendTo=b(void 0);motionOptions=b(void 0);onChange=new N;onFilter=new N;onFocus=new N;onBlur=new N;onClick=new N;onShow=new N;onHide=new N;onClear=new N;onLazyLoad=new N;_componentStyle=m(Gt);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;itemsWrapper;$appendTo=R(()=>this.appendTo()||this.config.overlayAppendTo());itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=te(null);_placeholder=te(void 0);value;hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=te(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=te(-1);labelId;listId;clicked=te(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Pt.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(Pt.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.$disabled()}get listLabel(){return this.config.getTranslation(Pt.ARIA).listLabel}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=R(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let i=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options?.filter(o=>o.label?o.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:o.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let o=this.options||[],r=[];return o.forEach(l=>{let g=this.getOptionGroupChildren(l).filter(f=>i?.includes(f));g.length>0&&r.push(je(x({},l),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...g]}))}),this.flatOptions(r)}return i}return e});label=R(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=e.findIndex(i=>this.isOptionValueEqualsModelValue(i));if(n!==-1){let i=e[n];return this.getOptionLabel(i)}return this.placeholder()||"p-emptylabel"});selectedOption;constructor(e,n){super(),this.zone=e,this.filterService=n,ue(()=>{let i=this.modelValue(),o=this.visibleOptions();if(o&&Fe(o)){let r=this.findSelectedOptionIndex();if(r!==-1||i===void 0||typeof i=="string"&&i.length===0||this.isModelValueNotSet()||this.editable)this.selectedOption=o[r];else{let l=o.findIndex(h=>this.isSelected(h));l!==-1&&(this.selectedOption=o[l])}}vt(o)&&(i===void 0||this.isModelValueNotSet())&&Fe(this.selectedOption)&&(this.selectedOption=null),i!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}onInit(){this.id=this.id||Be("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){if(this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=Se(this.overlayViewChild?.overlayViewChild?.nativeElement,'li[data-p-selected="true"]');e&&Yn(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let r=this.getOptionGroupChildren(i);return r&&r.forEach(l=>n.push(l)),n},[])}autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1))}onOptionSelect(e,n,i=!0,o=!1){if(!this.isOptionDisabled(n)){if(!this.isSelected(n)){let r=this.getOptionValue(n);this.updateModel(r,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),o===!1&&this.onChange.emit({originalEvent:e,value:r})}i&&this.hide(!0)}}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeModelValue(e),this.selectedOptionUpdated=!0}allowModelChange(){return!!this.modelValue()&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return e!=null&&!this.isOptionGroup(e)&&Mt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}onAfterViewInit(){this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,n=e?.classList.contains("p-float-label");if(e&&n&&!this.selectedOption){let i=e.querySelector("label");i&&this._placeholder.set(i.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?ct(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?ct(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getPTItemOptions(e,n,i,o){return this.ptm(o,{context:{option:e,index:i,selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}isSelectedOptionEmpty(){return vt(this.selectedOption)}isOptionDisabled(e){return this.optionDisabled?ct(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?ct(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?ct(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}onContainerClick(e){this.$disabled()||this.readonly||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges())}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let n=e.target.value;this.searchValue="",!this.searchOptions(e,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n||null,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:n})},1),!this.overlayVisible&&Fe(n)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&Pe(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=Se(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?'[data-pc-name="virtualscroller"]':'[data-pc-section="listcontainer"]'),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&setTimeout(()=>{this.scroller?.scrollToIndex(n)},10)}else{let n=Se(this.itemsWrapper,'[data-p-selected="true"]');n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e)}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&Ii(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&Pe(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&Pe(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.$disabled())return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),!this.preventModelTouched&&!this.overlayVisible&&this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,n=!1){if(!(this.$disabled()||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&Bn(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let i=this.visibleOptions()[n];this.onOptionSelect(e,i,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=Se(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?void 0:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?tn(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastOptionIndex(){return tn(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,n=!1){if(e.altKey&&!n){if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide()}else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;e.shiftKey?i.setSelectionRange(0,i.value.length):(i.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;if(e.shiftKey)i.setSelectionRange(0,i.value.length);else{let o=i.value.length;i.setSelectionRange(o,o),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,n=!1){!this.editable&&!n&&this.onEnterKey(e)}onEnterKey(e,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}!n&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.preventDefault(),e.stopPropagation())}onTabKey(e,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())Pe(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?Qn(this.overlayViewChild?.el?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Pe(n)}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?Un(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Pe(n)}hasFocusableElements(){return Wn(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,o=!1;return i=this.visibleOptions().findIndex(r=>this.isOptionMatched(r)),i!==-1&&(o=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&setTimeout(()=>{this.changeFocusedOptionIndex(e,i)}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?Se(this.el.nativeElement,'[data-pc-section="label"]').focus():Pe(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}writeControlValue(e,n){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),n(this.value),this.updateEditableLabel(),this.cd.markForCheck()}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.$disabled(),[this.size()]:this.size(),empty:!this.editable&&!this.selectedItemTemplate&&(!this.label?.()||this.label()==="p-emptylabel"||this.label()?.length===0)})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({["overlay-"+this.$appendTo()]:"overlay-"+this.$appendTo()})}static \u0275fac=function(n){return new(n||t)(be(Ne),be(Xn))};static \u0275cmp=M({type:t,selectors:[["p-select"]],contentQueries:function(n,i,o){if(n&1&&Ae(o,wr,4)(o,Sr,4)(o,Tr,4)(o,Ir,4)(o,Er,4)(o,fo,4)(o,Or,4)(o,kr,4)(o,Mr,4)(o,Dr,4)(o,Lr,4)(o,Fr,4)(o,Pr,4)(o,Br,4)(o,Vr,4)(o,Nr,4)(o,Re,4),n&2){let r;O(r=k())&&(i.itemTemplate=r.first),O(r=k())&&(i.groupTemplate=r.first),O(r=k())&&(i.loaderTemplate=r.first),O(r=k())&&(i.selectedItemTemplate=r.first),O(r=k())&&(i.headerTemplate=r.first),O(r=k())&&(i.filterTemplate=r.first),O(r=k())&&(i.footerTemplate=r.first),O(r=k())&&(i.emptyFilterTemplate=r.first),O(r=k())&&(i.emptyTemplate=r.first),O(r=k())&&(i.dropdownIconTemplate=r.first),O(r=k())&&(i.loadingIconTemplate=r.first),O(r=k())&&(i.clearIconTemplate=r.first),O(r=k())&&(i.filterIconTemplate=r.first),O(r=k())&&(i.onIconTemplate=r.first),O(r=k())&&(i.offIconTemplate=r.first),O(r=k())&&(i.cancelIconTemplate=r.first),O(r=k())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&Qe(fo,5)(Ar,5)(zr,5)($r,5)(Hr,5)(Rr,5)(jr,5)(qr,5),n&2){let o;O(o=k())&&(i.filterViewChild=o.first),O(o=k())&&(i.focusInputViewChild=o.first),O(o=k())&&(i.editableInputViewChild=o.first),O(o=k())&&(i.itemsViewChild=o.first),O(o=k())&&(i.scroller=o.first),O(o=k())&&(i.overlayViewChild=o.first),O(o=k())&&(i.firstHiddenFocusableElementOnOverlay=o.first),O(o=k())&&(i.lastHiddenFocusableElementOnOverlay=o.first)}},hostVars:4,hostBindings:function(n,i){n&1&&D("click",function(r){return i.onContainerClick(r)}),n&2&&(L("id",i.id)("data-p",i.containerDataP),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",S],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",S],editable:[2,"editable","editable",S],tabindex:[2,"tabindex","tabindex",ye],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",S],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",S],checkmark:[2,"checkmark","checkmark",S],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",S],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",group:[2,"group","group",S],showClear:[2,"showClear","showClear",S],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",S],virtualScroll:[2,"virtualScroll","virtualScroll",S],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",ye],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",S],selectOnFocus:[2,"selectOnFocus","selectOnFocus",S],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",S],autofocusFilter:[2,"autofocusFilter","autofocusFilter",S],filterValue:"filterValue",options:"options",appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[H([Xl,Gt,{provide:vo,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],decls:11,vars:18,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"class","pBind","pTooltip","pTooltipUnstyled","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text",3,"class","pBind","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",3,"pBind"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onBeforeEnter","onAfterLeave","onHide","hostAttrSelector","visible","options","target","appendTo","unstyled","pt","motionOptions"],["role","combobox",3,"focus","blur","keydown","pBind","pTooltip","pTooltipUnstyled","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text",3,"input","keydown","focus","blur","pBind","pAutoFocus"],["data-p-icon","times",3,"class","pBind","click",4,"ngIf"],[3,"class","pBind","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"class","pBind",4,"ngIf"],["aria-hidden","true",3,"pBind"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-down",3,"pBind"],[3,"ngStyle","pBind"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus","pBind"],["hostName","select",3,"items","style","itemSize","autoSize","lazy","options","pt","onLazyLoad",4,"ngIf"],[3,"pt","unstyled"],["pInputText","","type","text","role","searchbox","autocomplete","off",3,"input","keydown","blur","pSize","value","variant","pt","unstyled"],["data-p-icon","search",3,"pBind",4,"ngIf"],[3,"pBind",4,"ngIf"],["data-p-icon","search",3,"pBind"],["hostName","select",3,"onLazyLoad","items","itemSize","autoSize","lazy","options","pt"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle","pBind",4,"ngIf"],["role","option",3,"ngStyle","pBind"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize","index","unstyled","scrollerOptions"]],template:function(n,i){if(n&1){let o=ae();y(0,Zr,6,25,"span",16)(1,Yr,2,20,"input",17)(2,nl,3,2,"ng-container",18),p(3,"div",19),y(4,al,3,2,"ng-container",20)(5,ml,2,2,"ng-template",null,0,Ce),u(),p(7,"p-overlay",21,1),In("visibleChange",function(l){return P(o),Tn(i.overlayVisible,l)||(i.overlayVisible=l),B(l)}),D("onBeforeEnter",function(l){return i.onOverlayBeforeEnter(l)})("onAfterLeave",function(l){return i.onOverlayAfterLeave(l)})("onHide",function(){return i.hide()}),y(9,Gl,13,23,"ng-template",null,2,Ce),u()}if(n&2){let o=Oe(6);a("ngIf",!i.editable),d(),a("ngIf",i.editable),d(),a("ngIf",i.isVisibleClearIcon),d(),v(i.cx("dropdown")),a("pBind",i.ptm("dropdown")),L("aria-expanded",i.overlayVisible??!1)("data-pc-section","trigger"),d(),a("ngIf",i.loading)("ngIfElse",o),d(3),a("hostAttrSelector",i.$attrSelector),Sn("visible",i.overlayVisible),a("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("unstyled",i.unstyled())("pt",i.ptm("pcOverlay"))("motionOptions",i.motionOptions())}},dependencies:[de,kt,We,Le,et,Jl,eo,uo,bt,Ni,Bi,Vi,Ht,Di,$i,lo,X,xe,w],encapsulation:2,changeDetection:0})}return t})(),yo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=oe({imports:[Kt,X,X]})}return t})();var _o=`
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
`;var ta=["handle"],na=["input"],ia=t=>({checked:t});function oa(t,s){t&1&&ee(0)}function sa(t,s){if(t&1&&y(0,oa,1,0,"ng-container",3),t&2){let e=c();a("ngTemplateOutlet",e.handleTemplate||e._handleTemplate)("ngTemplateOutletContext",ce(2,ia,e.checked()))}}var ra=`
    ${_o}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,la={root:{position:"relative"}},aa={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Co=(()=>{class t extends z{name="toggleswitch";style=ra;classes=aa;inlineStyles=la;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var xo=new Q("TOGGLESWITCH_INSTANCE"),da={provide:Vt,useExisting:St(()=>Zt),multi:!0},Zt=(()=>{class t extends Rt{componentName="ToggleSwitch";$pcToggleSwitch=m(xo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=b();ariaLabelledBy;autofocus;onChange=new N;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=m(Co);templates;onHostClick(e){this.onClick(e)}onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="handle"?this._handleTemplate=e.template:this._handleTemplate=e.template})}onClick(e){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:e,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,i,o){if(n&1&&Ae(o,ta,4)(o,Re,4),n&2){let r;O(r=k())&&(i.handleTemplate=r.first),O(r=k())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&Qe(na,5),n&2){let o;O(o=k())&&(i.input=o.first)}},hostVars:7,hostBindings:function(n,i){n&1&&D("click",function(r){return i.onHostClick(r)}),n&2&&(L("data-p-checked",i.checked())("data-p-disabled",i.$disabled())("data-p",i.dataP),ke(i.sx("root")),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",ye],inputId:"inputId",readonly:[2,"readonly","readonly",S],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",S]},outputs:{onChange:"onChange"},features:[H([da,Co,{provide:xo,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(p(0,"input",1,0),D("focus",function(){return i.onFocus()})("blur",function(){return i.onBlur()}),u(),p(2,"div",2)(3,"div",2),K(4,sa,1,4,"ng-container"),u()()),n&2&&(v(i.cx("input")),a("checked",i.checked())("pAutoFocus",i.autofocus)("pBind",i.ptm("input")),L("id",i.inputId)("required",i.required()?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name())("tabindex",i.tabindex),d(2),v(i.cx("slider")),a("pBind",i.ptm("slider")),L("data-p",i.dataP),d(),v(i.cx("handle")),a("pBind",i.ptm("handle")),L("data-p",i.dataP),d(),Z(i.handleTemplate||i._handleTemplate?4:-1))},dependencies:[de,Le,bt,X,xe,w],encapsulation:2,changeDetection:0})}return t})(),wo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=oe({imports:[Zt,X,X]})}return t})();var So=`
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
`;var pa=`
    ${So}

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
`,ua={root:({instance:t})=>{let s=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":Fe(s)&&String(s).length===1,"p-badge-dot":vt(s),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},To=(()=>{class t extends z{name="badge";style=pa;classes=ua;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Io=new Q("BADGE_INSTANCE");var gn=(()=>{class t extends W{componentName="Badge";$pcBadge=m(Io,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=b();badgeSize=b();size=b();severity=b();value=b();badgeDisabled=b(!1,{transform:S});_componentStyle=m(To);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(L("data-p",i.dataP),v(i.cn(i.cx("root"),i.styleClass())),Ue("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[H([To,{provide:Io,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],decls:1,vars:1,template:function(n,i){n&1&&I(0),n&2&&fe(i.value())},dependencies:[de,X,xe],encapsulation:2,changeDetection:0})}return t})(),Eo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=oe({imports:[gn,X,X]})}return t})();var Oo=`
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
`;var fa=["content"],ma=["loadingicon"],ga=["icon"],ba=["*"],Do=(t,s)=>({class:t,pt:s});function va(t,s){t&1&&ee(0)}function ya(t,s){if(t&1&&Y(0,"span",7),t&2){let e=c(3);v(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),a("pBind",e.ptm("loadingIcon")),L("aria-hidden",!0)}}function _a(t,s){if(t&1&&(se(),Y(0,"svg",8)),t&2){let e=c(3);v(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),a("pBind",e.ptm("loadingIcon"))("spin",!0),L("aria-hidden",!0)}}function Ca(t,s){if(t&1&&(ne(0),y(1,ya,1,4,"span",3)(2,_a,1,5,"svg",6),ie()),t&2){let e=c(2);d(),a("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),d(),a("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function xa(t,s){}function wa(t,s){if(t&1&&y(0,xa,0,0,"ng-template",9),t&2){let e=c(2);a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Sa(t,s){if(t&1&&(ne(0),y(1,Ca,3,2,"ng-container",2)(2,wa,1,1,null,5),ie()),t&2){let e=c();d(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),d(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Me(3,Do,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Ta(t,s){if(t&1&&Y(0,"span",7),t&2){let e=c(2);v(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),a("pBind",e.ptm("icon")),L("data-p",e.dataIconP)}}function Ia(t,s){}function Ea(t,s){if(t&1&&y(0,Ia,0,0,"ng-template",9),t&2){let e=c(2);a("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Oa(t,s){if(t&1&&(ne(0),y(1,Ta,1,4,"span",3)(2,Ea,1,1,null,5),ie()),t&2){let e=c();d(),a("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),d(),a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Me(3,Do,e.cx("icon"),e.ptm("icon")))}}function ka(t,s){if(t&1&&(p(0,"span",7),I(1),u()),t&2){let e=c();v(e.cx("label")),a("pBind",e.ptm("label")),L("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),d(),fe(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function Ma(t,s){if(t&1&&Y(0,"p-badge",10),t&2){let e=c();a("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Da={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,s])=>!!s).reduce((s,[e])=>s+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},ko=(()=>{class t extends z{name="button";style=Oo;classes=Da;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Mo=new Q("BUTTON_INSTANCE");var bn=(()=>{class t extends W{componentName="Button";hostName="";$pcButton=m(Mo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(w,{self:!0});_componentStyle=m(ko);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=b(void 0,{transform:S});onClick=new N;onFocus=new N;onBlur=new N;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=m(mt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-button"]],contentQueries:function(n,i,o){if(n&1&&Ae(o,fa,5)(o,ma,5)(o,ga,5)(o,Re,4),n&2){let r;O(r=k())&&(i.contentTemplate=r.first),O(r=k())&&(i.loadingIconTemplate=r.first),O(r=k())&&(i.iconTemplate=r.first),O(r=k())&&(i.templates=r)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",S],raised:[2,"raised","raised",S],rounded:[2,"rounded","rounded",S],text:[2,"text","text",S],plain:[2,"plain","plain",S],outlined:[2,"outlined","outlined",S],link:[2,"link","link",S],tabindex:[2,"tabindex","tabindex",ye],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",S],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",S],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[H([ko,{provide:Mo,useExisting:t},{provide:U,useExisting:t}]),le([w]),T],ngContentSelectors:ba,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(ge(),p(0,"button",0),D("click",function(r){return i.onClick.emit(r)})("focus",function(r){return i.onFocus.emit(r)})("blur",function(r){return i.onBlur.emit(r)}),me(1),y(2,va,1,0,"ng-container",1)(3,Sa,3,6,"ng-container",2)(4,Oa,3,6,"ng-container",2)(5,ka,2,6,"span",3)(6,Ma,1,4,"p-badge",4),u()),n&2&&(v(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),a("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),L("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),d(2),a("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),d(),a("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),d(),a("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),d(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),d(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[de,We,Le,et,Ut,bt,jt,Eo,gn,X,w],encapsulation:2,changeDetection:0})}return t})(),Yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=oe({imports:[de,bn,X,X]})}return t})();function Fa(t,s){if(t&1){let e=ae();p(0,"button",10),D("click",function(){P(e);let i=c();return B(i.clearSearch())}),I(1,"\u2715"),u()}}function Pa(t,s){if(t&1){let e=ae();p(0,"p-button",11),D("onClick",function(){P(e);let i=c();return B(i.clearAll())}),u()}}var Xt=class t{svc=m(Ye);filter=this.svc.filter;typeOptions=[{label:"All Types",value:"all"},{label:"Conceptual",value:"conceptual"},{label:"Code",value:"code"},{label:"Comparison",value:"comparison"},{label:"Scenario",value:"scenario"},{label:"Design",value:"design"},{label:"Behavioral",value:"behavioral"}];onSearch(s){this.svc.setFilter({search:s})}onType(s){this.svc.setFilter({type:s})}onBookmark(s){this.svc.setFilter({bookmarkedOnly:s})}clearSearch(){this.svc.setFilter({search:""})}clearAll(){this.svc.clearFilter()}hasActiveFilter(){let s=this.filter();return s.search!==""||s.type!=="all"||s.bookmarkedOnly}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["qb-search-filter"]],decls:13,vars:6,consts:[[1,"filter-bar"],[1,"search-wrap"],[1,"search-icon"],["pInputText","","type","text","placeholder","Search questions or tags\u2026",1,"search-input",3,"ngModelChange","ngModel"],[1,"clear-btn"],[1,"filter-controls"],["optionLabel","label","optionValue","value","placeholder","All Types","styleClass","filter-select",3,"ngModelChange","options","ngModel"],[1,"bookmark-toggle"],[3,"ngModelChange","ngModel"],["label","Clear","severity","secondary","size","small"],[1,"clear-btn",3,"click"],["label","Clear","severity","secondary","size","small",3,"onClick"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"div",1)(2,"span",2),I(3,"\u{1F50D}"),u(),p(4,"input",3),D("ngModelChange",function(o){return n.onSearch(o)}),u(),K(5,Fa,2,0,"button",4),u(),p(6,"div",5)(7,"p-select",6),D("ngModelChange",function(o){return n.onType(o)}),u(),p(8,"label",7)(9,"p-toggleSwitch",8),D("ngModelChange",function(o){return n.onBookmark(o)}),u(),p(10,"span"),I(11,"\u2B50 Bookmarked"),u()(),K(12,Pa,1,0,"p-button",9),u()()),e&2&&(d(4),a("ngModel",n.filter().search),d(),Z(n.filter().search?5:-1),d(2),a("options",n.typeOptions)("ngModel",n.filter().type),d(2),a("ngModel",n.filter().bookmarkedOnly),d(3),Z(n.hasActiveFilter()?12:-1))},dependencies:[di,si,li,ai,Ti,Ht,yo,Kt,wo,Zt,Yt,bn],styles:[".filter-bar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;padding:12px 16px;background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:10}.search-wrap[_ngcontent-%COMP%]{position:relative;flex:1;min-width:200px}.search-icon[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:.85em;pointer-events:none}.search-input[_ngcontent-%COMP%]{width:100%;padding-left:32px!important;padding-right:32px!important;background:var(--surface-2)!important;border-color:var(--border)!important;color:var(--text)!important;font-size:.9em}.search-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.search-input[_ngcontent-%COMP%]:focus{border-color:var(--accent)!important;outline:none}.clear-btn[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.8em;padding:2px 4px}.clear-btn[_ngcontent-%COMP%]:hover{color:var(--text)}.filter-controls[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:10px}  .filter-select{min-width:150px}  .filter-select .p-select{background:var(--surface-2);border-color:var(--border);color:var(--text);font-size:.875em}  .filter-select .p-select-label{color:var(--text)}.bookmark-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.875em;color:var(--text-muted);white-space:nowrap}.bookmark-toggle[_ngcontent-%COMP%]:hover{color:var(--text)}"],changeDetection:0})};function Ba(t,s){t&1&&(p(0,"div",5),Y(1,"p-progressSpinner",7),p(2,"span"),I(3,"Loading cheat sheet\u2026"),u()())}function Va(t,s){if(t&1&&(p(0,"div",6),Y(1,"markdown",8),u()),t&2){let e=c(2);d(),a("data",e.content())}}function Na(t,s){if(t&1&&(p(0,"div",4),K(1,Ba,4,0,"div",5)(2,Va,2,1,"div",6),u()),t&2){let e=c();d(),Z(e.loading()?1:2)}}var Jt=class t{topicId=b.required();svc=m(Ye);expanded=te(!1);loading=te(!1);content=te("");constructor(){ue(()=>{this.topicId()&&(this.expanded.set(!1),this.content.set(""))})}async toggle(){let s=!this.expanded();if(this.expanded.set(s),s&&!this.content()){this.loading.set(!0);let e=await this.svc.loadCheatSheet(this.topicId());this.content.set(e),this.loading.set(!1)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["qb-cheat-sheet-panel"]],inputs:{topicId:[1,"topicId"]},decls:7,vars:4,consts:[[1,"cheat-panel"],[1,"cheat-header",3,"click"],[1,"cheat-title"],[1,"cheat-caret"],[1,"cheat-body","fade-slide-enter"],[1,"cheat-loading"],[1,"md-content"],["styleClass","cheat-spinner","strokeWidth","4","animationDuration",".8s"],[3,"data"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"button",1),D("click",function(){return n.toggle()}),p(2,"span",2),I(3,"\u{1F4CB} Cheat Sheet"),u(),p(4,"span",3),I(5),u()(),K(6,Na,3,1,"div",4),u()),e&2&&(Ge("open",n.expanded()),d(5),fe(n.expanded()?"\u25BE":"\u25B8"),d(),Z(n.expanded()?6:-1))},dependencies:[At,Ct,oi],styles:[".cheat-panel[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:8px;overflow:hidden;background:var(--surface);margin-bottom:12px}.cheat-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:12px 16px;background:var(--surface);border:none;color:var(--text);cursor:pointer;font-size:.9em;font-weight:600;transition:background .12s}.cheat-header[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.cheat-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.cheat-caret[_ngcontent-%COMP%]{color:var(--text-muted)}.cheat-body[_ngcontent-%COMP%]{padding:16px;border-top:1px solid var(--border);max-height:480px;overflow-y:auto}.cheat-loading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--text-muted);font-size:.875em}  .cheat-spinner{width:18px!important;height:18px!important}  .cheat-spinner .p-progressspinner-circle{stroke:var(--accent)!important}"],changeDetection:0})};var Aa=()=>[1,2,3],za=(t,s)=>s.id;function $a(t,s){if(t&1){let e=ae();p(0,"div",19),D("click",function(){P(e);let i=c();return B(i.drawerOpen.set(!1))}),u()}}function Ha(t,s){if(t&1){let e=ae();p(0,"div",17),I(1),p(2,"button",20),D("click",function(){P(e);let i=c();return B(i.retry())}),I(3,"Retry"),u()()}if(t&2){let e=c();d(),qe(" \u26A0\uFE0F ",e.error()," ")}}function Ra(t,s){t&1&&(p(0,"div",18)(1,"div",21),I(2,"\u{1F4D6}"),u(),p(3,"h2"),I(4,"Pick a topic to start"),u(),p(5,"p"),I(6,"Select a topic from the sidebar to browse questions and cheat sheets."),u()())}function ja(t,s){t&1&&(p(0,"span",27),I(1,"\u2022"),u())}function qa(t,s){t&1&&(p(0,"div",31),Y(1,"div",32)(2,"div",33),u())}function Wa(t,s){t&1&&(p(0,"div",30),rt(1,qa,3,0,"div",31,xn),u()),t&2&&(d(),lt(Ke(0,Aa)))}function Qa(t,s){t&1&&(p(0,"p"),I(1,"You haven't bookmarked any questions yet."),u())}function Ua(t,s){if(t&1){let e=ae();p(0,"p"),I(1,"No questions match your filters."),u(),p(2,"button",36),D("click",function(){P(e);let i=c(4);return B(i.clearFilter())}),I(3,"Clear filters"),u()}}function Ga(t,s){if(t&1&&(p(0,"div",34),K(1,Qa,2,0,"p")(2,Ua,4,0),u()),t&2){let e=c(3);d(),Z(e.filter().bookmarkedOnly?1:2)}}function Ka(t,s){if(t&1&&Y(0,"qb-question-card",37),t&2){let e=s.$implicit;a("question",e)}}function Za(t,s){if(t&1&&(p(0,"div",35),rt(1,Ka,1,1,"qb-question-card",37,za),u()),t&2){let e=c(3);d(),lt(e.visibleQuestions())}}function Ya(t,s){if(t&1&&K(0,Ga,3,1,"div",34)(1,Za,3,0,"div",35),t&2){let e=c(2);Z(e.visibleQuestions().length===0?0:1)}}function Xa(t,s){if(t&1&&(p(0,"div",22)(1,"span",23),I(2),u(),p(3,"span",24),I(4,"\u203A"),u(),p(5,"span",25),I(6),u(),p(7,"span",26),I(8),K(9,ja,2,0,"span",27),u()(),p(10,"div",28),Y(11,"qb-cheat-sheet-panel",29)(12,"qb-search-filter"),K(13,Wa,3,1,"div",30),K(14,Ya,2,1),u()),t&2){let e=c();d(2),fe(e.selectedTopicName()),d(4),fe(e.selectedSubtopicName()),d(2),wn(" ",e.visibleQuestions().length," of ",e.totalInSubtopic()," question",e.totalInSubtopic()===1?"":"s"," "),d(),Z(e.hasActiveFilter()?9:-1),d(2),a("topicId",e.selected().topicId),d(2),Z(e.loadingTopicId()?13:-1),d(),Z(e.loadingTopicId()?-1:14)}}var Lo=class t{svc=m(Ye);selected=this.svc.selected;visibleQuestions=this.svc.visibleQuestions;loadingTopicId=this.svc.loadingTopicId;error=this.svc.error;filter=this.svc.filter;isDark=this.svc.isDark;drawerOpen=te(!1);topicCount=R(()=>this.svc.topics().length);selectedTopicName=R(()=>{let s=this.selected();return s?this.svc.topics().find(e=>e.id===s.topicId)?.name??"":""});selectedSubtopicName=R(()=>{let s=this.selected();return s?this.svc.topics().find(n=>n.id===s.topicId)?.subtopics.find(n=>n.subtopicId===s.subtopicId)?.subtopicName??"":""});totalInSubtopic=R(()=>{let s=this.selected();return s?this.svc.topics().find(n=>n.id===s.topicId)?.subtopics.find(n=>n.subtopicId===s.subtopicId)?.questionCount??0:0});hasActiveFilter=R(()=>{let s=this.filter();return s.search!==""||s.type!=="all"||s.bookmarkedOnly});async ngOnInit(){this.svc.applyStoredTheme(),await this.svc.init()}toggleTheme(){this.svc.toggleTheme()}clearFilter(){this.svc.clearFilter()}async retry(){await this.svc.init()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-question-bank-page"]],decls:27,vars:9,consts:[[1,"app-shell"],[1,"topbar"],[1,"topbar-left"],[1,"menu-btn",3,"click"],[1,"app-brand"],[1,"topbar-center"],[1,"stats-pill"],[1,"topbar-right"],["routerLink","/dashboard",1,"sim-link"],["routerLink","/sets",1,"sim-link"],["routerLink","/simulator",1,"sim-link"],[1,"theme-btn",3,"click","title"],[1,"layout"],[1,"drawer-backdrop"],[1,"sidebar-col"],[3,"closed"],[1,"main-col"],[1,"error-banner"],[1,"empty-state"],[1,"drawer-backdrop",3,"click"],[1,"retry-btn",3,"click"],[1,"empty-icon"],[1,"breadcrumb-bar"],[1,"bc-topic"],[1,"bc-sep"],[1,"bc-sub"],[1,"bc-count"],[1,"filter-active-dot"],[1,"content-area"],[3,"topicId"],[1,"skeleton-list"],[1,"skeleton-card"],[1,"sk-line","sk-short"],[1,"sk-line","sk-long"],[1,"no-results"],[1,"question-list"],[1,"clear-link",3,"click"],[3,"question"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"header",1)(2,"div",2)(3,"button",3),D("click",function(){return n.drawerOpen.set(!0)}),I(4,"\u2630 Topics"),u(),p(5,"span",4),I(6,"\u{1F680} crackInterview"),u()(),p(7,"div",5)(8,"span",6),I(9),u()(),p(10,"div",7)(11,"a",8),I(12,"\u{1F4CA} Dashboard"),u(),p(13,"a",9),I(14,"\u{1F5C2} Sets"),u(),p(15,"a",10),I(16,"\u{1F3AF} Simulator"),u(),p(17,"button",11),D("click",function(){return n.toggleTheme()}),I(18),u()()(),p(19,"div",12),K(20,$a,1,0,"div",13),p(21,"aside",14)(22,"qb-topic-sidebar",15),D("closed",function(){return n.drawerOpen.set(!1)}),u()(),p(23,"main",16),K(24,Ha,4,1,"div",17),K(25,Ra,7,0,"div",18)(26,Xa,15,9),u()()()),e&2&&(L("data-theme",n.isDark()?"dark":"light"),d(9),qe("",n.topicCount()," topics \xB7 522 questions"),d(8),a("title",n.isDark()?"Switch to light":"Switch to dark"),d(),qe(" ",n.isDark()?"\u2600\uFE0F":"\u{1F319}"," "),d(2),Z(n.drawerOpen()?20:-1),d(),Ge("drawer-open",n.drawerOpen()),d(3),Z(n.error()?24:-1),d(),Z(n.selected()?26:25))},dependencies:[Mn,zt,Xt,ci,Jt,Yt],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100vh;overflow:hidden}.app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;background:var(--bg);color:var(--text)}.topbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 16px;height:48px;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;z-index:100;gap:12px}.topbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.topbar-center[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center}.topbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.menu-btn[_ngcontent-%COMP%]{display:none;background:var(--surface-2);border:1px solid var(--border);color:var(--text);padding:6px 12px;border-radius:6px;cursor:pointer;font-size:.85em;white-space:nowrap}@media(max-width:768px){.menu-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}}.app-brand[_ngcontent-%COMP%]{font-weight:700;font-size:1em;letter-spacing:-.01em}.stats-pill[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:3px 10px;border-radius:12px;border:1px solid var(--border)}@media(max-width:480px){.stats-pill[_ngcontent-%COMP%]{display:none}}.theme-btn[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:4px 8px;cursor:pointer;font-size:1em;transition:background .12s}.theme-btn[_ngcontent-%COMP%]:hover{background:var(--surface)}.sim-link[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--accent) 14%,var(--surface-2));border:1px solid color-mix(in srgb,var(--accent) 35%,var(--border));color:var(--accent);padding:5px 12px;border-radius:6px;font-size:.82em;font-weight:600;white-space:nowrap;transition:background .12s}.sim-link[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 22%,var(--surface-2));text-decoration:none}.layout[_ngcontent-%COMP%]{display:flex;flex:1;overflow:hidden;position:relative}.sidebar-col[_ngcontent-%COMP%]{width:260px;flex-shrink:0;overflow:hidden}@media(max-width:768px){.sidebar-col[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:280px;z-index:200;transform:translate(-100%);transition:transform .2s ease;box-shadow:4px 0 20px #0006}.sidebar-col.drawer-open[_ngcontent-%COMP%]{transform:translate(0)}}.drawer-backdrop[_ngcontent-%COMP%]{display:none}@media(max-width:768px){.drawer-backdrop[_ngcontent-%COMP%]{display:block;position:fixed;inset:0;background:#00000080;z-index:199}}.main-col[_ngcontent-%COMP%]{flex:1;overflow-y:auto;display:flex;flex-direction:column;background:var(--bg)}.error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 16px;background:color-mix(in srgb,var(--danger) 10%,var(--surface));border-bottom:1px solid color-mix(in srgb,var(--danger) 30%,var(--border));color:var(--danger);font-size:.9em}.retry-btn[_ngcontent-%COMP%]{background:var(--danger);color:#fff;border:none;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:.85em}.retry-btn[_ngcontent-%COMP%]:hover{opacity:.85}.empty-state[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px;text-align:center;color:var(--text-muted)}.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]{font-size:3em}.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--text);font-size:1.2em}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;max-width:320px;line-height:1.6}.breadcrumb-bar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:6px;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--border);font-size:.875em;flex-shrink:0}.bc-topic[_ngcontent-%COMP%], .bc-sep[_ngcontent-%COMP%]{color:var(--text-muted)}.bc-sub[_ngcontent-%COMP%]{color:var(--text);font-weight:600}.bc-count[_ngcontent-%COMP%]{margin-left:auto;color:var(--text-muted);font-size:.9em;display:flex;align-items:center;gap:5px}.filter-active-dot[_ngcontent-%COMP%]{color:var(--accent);font-size:1.2em}.content-area[_ngcontent-%COMP%]{padding:12px 16px 24px;display:flex;flex-direction:column;gap:0;flex:1}.skeleton-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-top:12px}.skeleton-card[_ngcontent-%COMP%]{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:16px;display:flex;flex-direction:column;gap:10px;animation:shimmer 1.2s infinite}.sk-line[_ngcontent-%COMP%]{height:12px;border-radius:6px;background:linear-gradient(90deg,var(--surface-2) 25%,var(--surface) 50%,var(--surface-2) 75%);background-size:200% 100%;animation:_ngcontent-%COMP%_shimmerMove 1.2s infinite}.sk-short[_ngcontent-%COMP%]{width:35%}.sk-long[_ngcontent-%COMP%]{width:75%}@keyframes _ngcontent-%COMP%_shimmerMove{0%{background-position:200% 0}to{background-position:-200% 0}}.no-results[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px;padding:40px;color:var(--text-muted);text-align:center;font-size:.9em}.clear-link[_ngcontent-%COMP%]{background:none;border:1px solid var(--border);color:var(--accent);padding:6px 16px;border-radius:4px;cursor:pointer;font-size:.875em}.clear-link[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.question-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-top:12px}'],changeDetection:0})};export{Lo as QuestionBankPage};
