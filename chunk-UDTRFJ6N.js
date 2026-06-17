import{a as Me,b as Te,c as _t,d as Ie,e as Bt,f as Nt,g as ht,h as Ee,i as De,j as Jt,k as mt,l as Oe,m as Be,n as te,o as Ne,p as Fe,q as ee,r as $e,s as Ae,t as R,u as ne,v as ut,w as ft,x as F,y as ze}from"./chunk-5ZCUCLUW.js";import{a as Re}from"./chunk-XTVUBVFR.js";import{a as Ve,b as Ft,c as $t,d as At,e as je,f as He,g as qe,h as zt}from"./chunk-KC2DMAFZ.js";import{a as Le}from"./chunk-ZNO3GEQB.js";import{a as J}from"./chunk-SJE3ABQ6.js";import{b as Ce,c as ke,d as Se,e as tt,f as xt,g as Xt,o as we,p as Pe}from"./chunk-WHXVEHB2.js";import{$ as ae,$a as B,Bb as g,Cb as bt,Db as gt,Eb as ge,Fb as yt,Gb as vt,Hb as Ot,Ia as ce,Ib as K,Ja as d,Jb as he,Kb as w,Lb as c,Mb as M,Nb as at,O as A,P as Q,Pb as me,R as Z,Ra as It,Sa as Qt,T as p,Tb as fe,Ub as V,Vb as ye,Wb as Zt,Xa as C,Y as z,Ya as Y,Z as L,Za as X,Zb as N,_ as pt,_a as it,a as y,aa as Pt,ab as ct,ac as ve,b as wt,bc as T,c as se,cc as xe,da as Mt,ea as le,fc as $,gb as E,gc as _e,hb as k,ia as O,ib as S,kb as ue,la as G,lb as rt,ma as de,mb as st,na as _,nb as f,ob as a,pa as ot,pb as l,qb as P,rb as Gt,sb as Yt,ta as Tt,tb as Kt,ub as Et,vb as Dt,wb as pe,xb as q,yb as be,zb as v}from"./chunk-H6EC2OEM.js";function lt(...n){if(n){let i=[];for(let t=0;t<n.length;t++){let e=n[t];if(!e)continue;let o=typeof e;if(o==="string"||o==="number")i.push(e);else if(o==="object"){let r=Array.isArray(e)?[lt(...e)]:Object.entries(e).map(([s,u])=>u?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}var Sn=Object.defineProperty,We=Object.getOwnPropertySymbols,wn=Object.prototype.hasOwnProperty,Pn=Object.prototype.propertyIsEnumerable,Ue=(n,i,t)=>i in n?Sn(n,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[i]=t,Qe=(n,i)=>{for(var t in i||(i={}))wn.call(i,t)&&Ue(n,t,i[t]);if(We)for(var t of We(i))Pn.call(i,t)&&Ue(n,t,i[t]);return n};function Ge(...n){if(n){let i=[];for(let t=0;t<n.length;t++){let e=n[t];if(!e)continue;let o=typeof e;if(o==="string"||o==="number")i.push(e);else if(o==="object"){let r=Array.isArray(e)?[Ge(...e)]:Object.entries(e).map(([s,u])=>u?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Mn(n){return typeof n=="function"&&"call"in n&&"apply"in n}function Tn({skipUndefined:n=!1},...i){return i?.reduce((t,e={})=>{for(let o in e){let r=e[o];if(!(n&&r===void 0))if(o==="style")t.style=Qe(Qe({},t.style),e.style);else if(o==="class"||o==="className")t[o]=Ge(t[o],e[o]);else if(Mn(r)){let s=t[o];t[o]=s?(...u)=>{s(...u),r(...u)}:r}else t[o]=r}return t},{})}function oe(...n){return Tn({skipUndefined:!1},...n)}var Lt={};function Ct(n="pui_id_"){return Object.hasOwn(Lt,n)||(Lt[n]=0),Lt[n]++,`${n}${Lt[n]}`}var Ye=(()=>{class n extends F{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),et=new Z("PARENT_INSTANCE"),H=(()=>{class n{document=p(Pt);platformId=p(Tt);el=p(ot);injector=p(ae);cd=p(xe);renderer=p(It);config=p(ze);$parentInstance=p(et,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=p(Ye);baseStyle=p(F);scopedStyleEl;parent=this.$params.parent;cn=lt;_themeScopedListener;themeChangeListenerMap=new Map;dt=T();unstyled=T();pt=T();ptOptions=T();$attrSelector=Ct("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=O(void 0);directiveUnstyled=O(void 0);$unstyled=N(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=N(()=>Bt(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>Bt(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||Bt(t,this.$params))}get $style(){return y(y({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){G(t=>{this.document&&!Xt(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{this._offThemeChangeListener("_themeScopedListener")})}),G(t=>{this.document&&!Xt(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),t(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...e){return Te(t)?t(...e):oe(...e)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,e="",o={}){return Ee(t,e,o)}_hook(t,...e){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);o?.(...e),r?.(...e)}}_load(){ft.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),ft.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);_t(t)&&this.baseStyle.load(t,y({name:"global"},this.$styleOptions))}_loadCoreStyles(){!ft.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),ft.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!ut.isStyleNameLoaded("common")){let{primitive:t,semantic:e,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,y({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(e?.css,y({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,y({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(y({name:"global-style"},this.$styleOptions),r),ut.setLoadedStyleName("common")}if(!ut.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:e}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,y({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(y({name:`${this.$style?.name}-style`},this.$styleOptions),e),ut.setLoadedStyleName(this.$style?.name)}if(!ut.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,y({name:"layer-order",first:!0},this.$styleOptions)),ut.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:e}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},o=this.$style?.load(e,y({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t,e=()=>{}){this._offThemeChangeListener(t),ft.clearLoadedStyleNames();let o=e.bind(this);this.themeChangeListenerMap.set(t,o),ne.on("theme:change",o)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(t){this.themeChangeListenerMap.has(t)&&(ne.off("theme:change",this.themeChangeListenerMap.get(t)),this.themeChangeListenerMap.delete(t))}_getPTValue(t={},e="",o={},r=!0){let s=/./g.test(e)&&!!o[e.split(".")[0]],{mergeSections:u=!0,mergeProps:b=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},m=r?s?this._useGlobalPT(this._getPTClassValue,e,o):this._useDefaultPT(this._getPTClassValue,e,o):void 0,h=s?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,e,wt(y({},o),{global:m||{}})),x=this._getPTDatasets(e);return u||!u&&h?b?this._mergeProps(b,m,h,x):y(y(y({},m),h),x):y(y({},h),x)}_getPTDatasets(t=""){let e="data-pc-",o=t==="root"&&_t(this.$pt()?.["data-pc-section"]);return t!=="transition"&&wt(y({},t==="root"&&wt(y({[`${e}name`]:ht(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${e}extend`]:ht(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${e}section`]:ht(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,e,o){let r=this._getOptionValue(t,e,o);return Nt(r)||De(r)?{class:r}:r}_getPT(t,e="",o){let r=(s,u=!1)=>{let b=o?o(s):s,m=ht(e),h=ht(this.$hostName||this.$name);return(u?m!==h?b?.[m]:void 0:b?.[m])??b};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t,!0)}_usePT(t,e,o,r){let s=u=>e?.call(this,u,o,r);if(t?.hasOwnProperty("_usept")){let{mergeSections:u=!0,mergeProps:b=!1}=t._usept||this.config?.ptOptions()||{},m=s(t.originalValue),h=s(t.value);return m===void 0&&h===void 0?void 0:Nt(h)?h:Nt(m)?m:u||!u&&h?b?this._mergeProps(b,m,h):y(y({},m),h):h}return s(t)}_useGlobalPT(t,e,o){return this._usePT(this.$globalPT,t,e,o)}_useDefaultPT(t,e,o){return this._usePT(this.$defaultPT,t,e,o)}ptm(t="",e={}){return this._getPTValue(this.$pt(),t,y(y({},this.$params),e))}ptms(t,e={}){return t.reduce((o,r)=>(o=oe(o,this.ptm(r,e))||{},o),{})}ptmo(t={},e="",o={}){return this._getPTValue(t,e,y({instance:this},o),!1)}cx(t,e={}){return this.$unstyled()?void 0:lt(this._getOptionValue(this.$style.classes,t,y(y({},this.$params),e)))}sx(t="",e=!0,o={}){if(e){let r=this._getOptionValue(this.$style.inlineStyles,t,y(y({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,y(y({},this.$params),o));return y(y({},s),r)}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=X({type:n,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[V([Ye,F]),de]})}return n})();var I=(()=>{class n{el;renderer;pBind=T(void 0);_attrs=O(void 0);attrs=N(()=>this._attrs()||this.pBind());styles=N(()=>this.attrs()?.style);classes=N(()=>lt(this.attrs()?.class));listeners=[];constructor(t,e){this.el=t,this.renderer=e,G(()=>{let u=this.attrs()||{},{style:o,class:r}=u,s=se(u,["style","class"]);for(let[b,m]of Object.entries(s))if(b.startsWith("on")&&typeof m=="function"){let h=b.slice(2).toLowerCase();if(!this.listeners.some(x=>x.eventName===h)){let x=this.renderer.listen(this.el.nativeElement,h,m);this.listeners.push({eventName:h,unlisten:x})}}else m==null?this.renderer.removeAttribute(this.el.nativeElement,b):(this.renderer.setAttribute(this.el.nativeElement,b,m.toString()),b in this.el.nativeElement&&(this.el.nativeElement[b]=m))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){Ie(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(e){return new(e||n)(Qt(ot),Qt(It))};static \u0275dir=X({type:n,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(e,o){e&2&&(he(o.styles()),w(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return n})(),Ke=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Y({type:n});static \u0275inj=Q({})}return n})();var Ze=`
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
`;var In={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Xe=(()=>{class n extends F{name="progressspinner";style=Ze;classes=In;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();var Je=new Z("PROGRESSSPINNER_INSTANCE"),kt=(()=>{class n extends H{componentName="ProgressSpinner";$pcProgressSpinner=p(Je,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(I,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=p(Xe);static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(e,o){e&2&&(E("aria-label",o.ariaLabel)("role","progressbar")("aria-busy",!0),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[V([Xe,{provide:Je,useExisting:n},{provide:et,useExisting:n}]),it([I]),B],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(e,o){e&1&&(pt(),a(0,"svg",0),P(1,"circle",1),l()),e&2&&(w(o.cx("spin")),Ot("animation-duration",o.animationDuration),f("pBind",o.ptm("spin")),d(),w(o.cx("circle")),f("pBind",o.ptm("circle")),E("fill",o.fill)("stroke-width",o.strokeWidth))},dependencies:[tt,R,I],encapsulation:2,changeDetection:0})}return n})(),jt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Y({type:n});static \u0275inj=Q({imports:[kt,R,R]})}return n})();var En=(n,i)=>i.id,Dn=(n,i)=>i.subtopicId;function On(n,i){n&1&&P(0,"p-progressSpinner",12)}function Bn(n,i){if(n&1&&(a(0,"span",13),c(1),l()),n&2){let t=g().$implicit;d(),M(t.questionCount)}}function Nn(n,i){n&1&&(a(0,"span",14),c(1,"\u2014"),l())}function Fn(n,i){if(n&1){let t=q();a(0,"li")(1,"button",16),v("click",function(){let o=z(t).$implicit,r=g(2).$implicit,s=g();return L(s.onSubtopicClick(r.id,o.subtopicId))}),a(2,"span",17),c(3,"\u2022"),l(),a(4,"span",18),c(5),l(),a(6,"span",13),c(7),l()()()}if(n&2){let t=i.$implicit,e=g(2).$implicit,o=g();d(),K("active",o.isActive(e.id,t.subtopicId)),d(4),M(t.subtopicName),d(2),M(t.questionCount)}}function $n(n,i){if(n&1&&(a(0,"ul",15),rt(1,Fn,8,4,"li",null,Dn),l()),n&2){let t=g().$implicit;d(),st(t.subtopics)}}function An(n,i){if(n&1){let t=q();a(0,"li",7)(1,"button",8),v("click",function(){let o=z(t).$implicit,r=g();return L(r.onTopicClick(o.id))}),a(2,"span",9),c(3),l(),a(4,"span",10),c(5),l(),a(6,"span",11),c(7),l(),k(8,On,1,0,"p-progressSpinner",12)(9,Bn,2,1,"span",13)(10,Nn,2,0,"span",14),l(),k(11,$n,3,0,"ul",15),l()}if(n&2){let t=i.$implicit,e=g();d(),K("expanded",t.expanded),E("aria-expanded",t.expanded),d(2),M(t.expanded?"\u25BE":"\u25B8"),d(2),M(t.icon),d(2),M(t.name),d(),S(e.loadingTopicId()===t.id?8:t.loaded?9:10),d(3),S(t.expanded&&t.loaded?11:-1)}}var Ht=class n{closed=ve();svc=p(J);topics=this.svc.topics;totalQuestions=this.svc.totalQuestions;loadingTopicId=this.svc.loadingTopicId;selected=this.svc.selected;onTopicClick(i){this.svc.toggleTopic(i)}onSubtopicClick(i,t){this.svc.select(i,t),this.closed.emit()}isActive(i,t){let e=this.selected();return e?.topicId===i&&e?.subtopicId===t}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["qb-topic-sidebar"]],outputs:{closed:"closed"},decls:12,vars:2,consts:[[1,"sidebar"],[1,"sidebar-header"],[1,"sidebar-title"],[1,"header-counts"],[1,"topic-count","total"],[1,"topic-count"],[1,"topic-list"],[1,"topic-item"],[1,"topic-row",3,"click"],[1,"caret"],[1,"topic-icon"],[1,"topic-name"],["styleClass","sidebar-spinner","strokeWidth","4","animationDuration",".8s"],[1,"q-count"],[1,"q-count","muted"],[1,"subtopic-list"],[1,"subtopic-row",3,"click"],[1,"sub-dot"],[1,"sub-name"]],template:function(t,e){t&1&&(a(0,"nav",0)(1,"div",1)(2,"span",2),c(3,"Topics"),l(),a(4,"span",3)(5,"span",4),c(6),l(),a(7,"span",5),c(8),l()()(),a(9,"ul",6),rt(10,An,12,8,"li",7,En),l()()),t&2&&(d(6),at("",e.totalQuestions()," questions"),d(2),at("",e.topics().length," topics"),d(2),st(e.topics()))},dependencies:[jt,kt],styles:[".sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:var(--sidebar-bg);border-right:1px solid var(--border);overflow-y:auto}.sidebar-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 12px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--sidebar-bg);z-index:1}.sidebar-title[_ngcontent-%COMP%]{font-weight:700;font-size:.8em;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted)}.header-counts[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.topic-count[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:2px 7px;border-radius:10px;white-space:nowrap}.topic-count.total[_ngcontent-%COMP%]{color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent);font-weight:600}.topic-list[_ngcontent-%COMP%]{list-style:none;padding:8px 0;flex:1}.topic-item[_ngcontent-%COMP%]{width:100%}.topic-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:8px 14px;background:none;border:none;color:var(--text);cursor:pointer;text-align:left;font-size:.92em;font-weight:500;transition:background .12s ease;border-radius:0}.topic-row[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.topic-row.expanded[_ngcontent-%COMP%]{color:var(--accent)}.caret[_ngcontent-%COMP%]{font-size:.7em;color:var(--text-muted);width:10px;flex-shrink:0}.topic-icon[_ngcontent-%COMP%]{font-size:1em;flex-shrink:0}.topic-name[_ngcontent-%COMP%]{flex:1}.q-count[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:1px 6px;border-radius:10px;min-width:22px;text-align:center;flex-shrink:0}.q-count.muted[_ngcontent-%COMP%]{opacity:.5}  .sidebar-spinner{width:14px!important;height:14px!important}  .sidebar-spinner .p-progressspinner-circle{stroke:var(--accent)!important}.subtopic-list[_ngcontent-%COMP%]{list-style:none;padding:2px 0 4px}.subtopic-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 14px 6px 30px;background:none;border:none;color:var(--text-muted);cursor:pointer;text-align:left;font-size:.875em;transition:background .12s ease,color .12s ease}.subtopic-row[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--text)}.subtopic-row.active[_ngcontent-%COMP%]{color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,transparent);font-weight:600}.subtopic-row.active[_ngcontent-%COMP%]   .sub-dot[_ngcontent-%COMP%]{color:var(--accent)}.sub-dot[_ngcontent-%COMP%]{font-size:.8em;flex-shrink:0}.sub-name[_ngcontent-%COMP%]{flex:1}"],changeDetection:0})};function Ln(n,i){if(n&1){let t=q();a(0,"button",19),v("click",function(){z(t);let o=g();return L(o.clearSearch())}),c(1,"\u2715"),l()}}function Vn(n,i){if(n&1){let t=q();a(0,"button",20),v("click",function(){z(t);let o=g();return L(o.clearAll())}),c(1,"Clear"),l()}}var Rt=class n{svc=p(J);filter=this.svc.filter;onSearch(i){this.svc.setFilter({search:i})}onType(i){this.svc.setFilter({type:i})}onBookmark(i){this.svc.setFilter({bookmarkedOnly:i})}clearSearch(){this.svc.setFilter({search:""})}clearAll(){this.svc.clearFilter()}hasActiveFilter(){let i=this.filter();return i.search!==""||i.type!=="all"||i.bookmarkedOnly}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["qb-search-filter"]],decls:29,vars:5,consts:[[1,"filter-bar"],[1,"search-wrap"],[1,"search-icon"],["type","text","placeholder","Search questions or tags\u2026",1,"search-input",3,"ngModelChange","ngModel"],[1,"clear-btn"],[1,"filter-controls"],[1,"filter-select",3,"ngModelChange","ngModel"],["value","all"],["value","conceptual"],["value","code"],["value","comparison"],["value","scenario"],["value","design"],["value","behavioral"],[1,"bookmark-toggle"],["type","checkbox",1,"bookmark-check",3,"ngModelChange","ngModel"],[1,"toggle-track"],[1,"toggle-thumb"],[1,"clear-all-btn"],[1,"clear-btn",3,"click"],[1,"clear-all-btn",3,"click"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1)(2,"span",2),c(3,"\u{1F50D}"),l(),a(4,"input",3),v("ngModelChange",function(r){return e.onSearch(r)}),l(),k(5,Ln,2,0,"button",4),l(),a(6,"div",5)(7,"select",6),v("ngModelChange",function(r){return e.onType(r)}),a(8,"option",7),c(9,"All Types"),l(),a(10,"option",8),c(11,"Conceptual"),l(),a(12,"option",9),c(13,"Code"),l(),a(14,"option",10),c(15,"Comparison"),l(),a(16,"option",11),c(17,"Scenario"),l(),a(18,"option",12),c(19,"Design"),l(),a(20,"option",13),c(21,"Behavioral"),l()(),a(22,"label",14)(23,"input",15),v("ngModelChange",function(r){return e.onBookmark(r)}),l(),a(24,"span",16),P(25,"span",17),l(),a(26,"span"),c(27,"\u2B50 Bookmarked"),l()(),k(28,Vn,2,0,"button",18),l()()),t&2&&(d(4),f("ngModel",e.filter().search),d(),S(e.filter().search?5:-1),d(2),f("ngModel",e.filter().type),d(16),f("ngModel",e.filter().bookmarkedOnly),d(5),S(e.hasActiveFilter()?28:-1))},dependencies:[zt,He,qe,Ft,Ve,je,$t,At],styles:[".filter-bar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:10}.search-wrap[_ngcontent-%COMP%]{position:relative;flex:1;min-width:200px}.search-icon[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:.82em;pointer-events:none}.search-input[_ngcontent-%COMP%]{width:100%;padding:7px 32px;background:var(--surface-2);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:.88em;box-sizing:border-box}.search-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.search-input[_ngcontent-%COMP%]:focus{border-color:var(--accent);outline:none}.clear-btn[_ngcontent-%COMP%]{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.8em;padding:2px 4px;line-height:1}.clear-btn[_ngcontent-%COMP%]:hover{color:var(--text)}.filter-controls[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:10px}.filter-select[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border);border-radius:6px;color:var(--text);padding:7px 10px;font-size:.85em;cursor:pointer;min-width:130px}.filter-select[_ngcontent-%COMP%]:focus{border-color:var(--accent);outline:none}.bookmark-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.875em;color:var(--text-muted);white-space:nowrap;-webkit-user-select:none;user-select:none}.bookmark-toggle[_ngcontent-%COMP%]:hover{color:var(--text)}.bookmark-check[_ngcontent-%COMP%]{display:none}.toggle-track[_ngcontent-%COMP%]{position:relative;display:inline-block;width:34px;height:18px;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;transition:background .15s,border-color .15s;flex-shrink:0}.toggle-thumb[_ngcontent-%COMP%]{position:absolute;top:2px;left:2px;width:12px;height:12px;border-radius:50%;background:var(--text-muted);transition:transform .15s,background .15s}.bookmark-check[_ngcontent-%COMP%]:checked + .toggle-track[_ngcontent-%COMP%]{background:var(--accent);border-color:var(--accent)}.bookmark-check[_ngcontent-%COMP%]:checked + .toggle-track[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%]{transform:translate(16px);background:#fff}.clear-all-btn[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border);border-radius:6px;color:var(--text-muted);padding:6px 12px;font-size:.82em;cursor:pointer}.clear-all-btn[_ngcontent-%COMP%]:hover{color:var(--text);border-color:var(--text-muted)}"],changeDetection:0})};function jn(n,i){n&1&&(a(0,"div",5),P(1,"p-progressSpinner",7),a(2,"span"),c(3,"Loading cheat sheet\u2026"),l()())}function Hn(n,i){if(n&1&&(a(0,"div",6),P(1,"markdown",8),l()),n&2){let t=g(2);d(),f("data",t.content())}}function qn(n,i){if(n&1&&(a(0,"div",4),k(1,jn,4,0,"div",5)(2,Hn,2,1,"div",6),l()),n&2){let t=g();d(),S(t.loading()?1:2)}}var Wt=class n{topicId=T.required();svc=p(J);expanded=O(!1);loading=O(!1);content=O("");constructor(){G(()=>{this.topicId()&&(this.expanded.set(!1),this.content.set(""))})}async toggle(){let i=!this.expanded();if(this.expanded.set(i),i&&!this.content()){this.loading.set(!0);let t=await this.svc.loadCheatSheet(this.topicId());this.content.set(t),this.loading.set(!1)}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["qb-cheat-sheet-panel"]],inputs:{topicId:[1,"topicId"]},decls:7,vars:4,consts:[[1,"cheat-panel"],[1,"cheat-header",3,"click"],[1,"cheat-title"],[1,"cheat-caret"],[1,"cheat-body","fade-slide-enter"],[1,"cheat-loading"],[1,"md-content"],["styleClass","cheat-spinner","strokeWidth","4","animationDuration",".8s"],[3,"data"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"button",1),v("click",function(){return e.toggle()}),a(2,"span",2),c(3,"\u{1F4CB} Cheat Sheet"),l(),a(4,"span",3),c(5),l()(),k(6,qn,3,1,"div",4),l()),t&2&&(K("open",e.expanded()),d(5),M(e.expanded()?"\u25BE":"\u25B8"),d(),S(e.expanded()?6:-1))},dependencies:[jt,kt,Le],styles:[".cheat-panel[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:8px;overflow:hidden;background:var(--surface);margin-bottom:12px}.cheat-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:12px 16px;background:var(--surface);border:none;color:var(--text);cursor:pointer;font-size:.9em;font-weight:600;transition:background .12s}.cheat-header[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.cheat-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.cheat-caret[_ngcontent-%COMP%]{color:var(--text-muted)}.cheat-body[_ngcontent-%COMP%]{padding:16px;border-top:1px solid var(--border);max-height:480px;overflow-y:auto}.cheat-loading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--text-muted);font-size:.875em}  .cheat-spinner{width:18px!important;height:18px!important}  .cheat-spinner .p-progressspinner-circle{stroke:var(--accent)!important}"],changeDetection:0})};var Rn=(n,i)=>i.id;function Wn(n,i){if(n&1){let t=q();a(0,"button",8),v("click",function(){z(t);let o=g();return L(o.clear())}),c(1,"\u2715"),l()}}function Un(n,i){if(n&1){let t=q();a(0,"li",10),v("mousedown",function(){let o=z(t).$implicit,r=g(2);return L(r.select(o))})("mouseenter",function(){let o=z(t).$index,r=g(2);return L(r.activeIndex.set(o))}),a(1,"span",11),c(2),l(),a(3,"span"),c(4),l()()}if(n&2){let t=i.$implicit,e=i.$index,o=g(2);K("active",e===o.activeIndex()),d(2),M(t.q),d(),w(fe("gs-badge badge-",t.type||"conceptual")),d(),M(t.topicName)}}function Qn(n,i){if(n&1&&(a(0,"ul",7),rt(1,Un,5,7,"li",9,Rn),l()),n&2){let t=g();d(),st(t.results())}}function Gn(n,i){if(n&1&&(a(0,"ul",7)(1,"li",12),c(2),l()()),n&2){let t=g();d(2),at("No questions match \u201C",t.query(),"\u201D.")}}var Ut=class n{svc=p(J);router=p(we);host=p(ot);query=O("");open=O(!1);expanded=O(!1);activeIndex=O(0);results=N(()=>{let i=this.query();return i.trim().length<2?[]:this.svc.searchQuestions(i,8)});async onFocus(){await this.svc.ensureSearchIndex(),this.query().trim().length>=2&&this.open.set(!0)}async onInput(i){this.query.set(i),this.activeIndex.set(0),i.trim().length>=2?(await this.svc.ensureSearchIndex(),this.open.set(!0)):this.open.set(!1)}onKey(i){let t=this.results();if(i.key==="ArrowDown")i.preventDefault(),this.activeIndex.update(e=>Math.min(e+1,t.length-1));else if(i.key==="ArrowUp")i.preventDefault(),this.activeIndex.update(e=>Math.max(e-1,0));else if(i.key==="Enter"){let e=t[this.activeIndex()];e&&this.select(e)}else i.key==="Escape"&&(this.open.set(!1),this.collapse())}expand(){this.expanded.set(!0),this.svc.ensureSearchIndex(),queueMicrotask(()=>this.host.nativeElement.querySelector("input")?.focus())}collapse(){this.expanded.set(!1),this.open.set(!1),this.query.set("")}select(i){this.open.set(!1),this.expanded.set(!1),this.query.set(""),this.router.navigate(["/"]).then(()=>this.svc.goToQuestion(i.id))}clear(){this.query.set(""),this.open.set(!1)}onDocClick(i){this.host.nativeElement.contains(i.target)||(this.open.set(!1),this.query()||this.expanded.set(!1))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["qb-global-search"]],hostBindings:function(t,e){t&1&&v("click",function(r){return e.onDocClick(r)},ce)},decls:12,vars:5,consts:[[1,"gsearch"],["aria-label","Search",1,"gs-toggle",3,"click"],[1,"gs-field"],[1,"gs-icon"],["type","text","placeholder","Search all questions\u2026","autocomplete","off","spellcheck","false",1,"gs-input",3,"ngModelChange","focus","keydown","ngModel"],["aria-label","Clear",1,"gs-clear"],["aria-label","Close search",1,"gs-close",3,"click"],[1,"gs-results"],["aria-label","Clear",1,"gs-clear",3,"click"],[1,"gs-item",3,"active"],[1,"gs-item",3,"mousedown","mouseenter"],[1,"gs-q"],[1,"gs-empty"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"button",1),v("click",function(){return e.expand()}),c(2,"\u{1F50D}"),l(),a(3,"div",2)(4,"span",3),c(5,"\u{1F50D}"),l(),a(6,"input",4),v("ngModelChange",function(r){return e.onInput(r)})("focus",function(){return e.onFocus()})("keydown",function(r){return e.onKey(r)}),l(),k(7,Wn,2,0,"button",5),a(8,"button",6),v("click",function(){return e.collapse()}),c(9,"\u2715"),l()(),k(10,Qn,3,0,"ul",7)(11,Gn,3,1,"ul",7),l()),t&2&&(K("expanded",e.expanded()),d(6),f("ngModel",e.query()),d(),S(e.query()?7:-1),d(3),S(e.open()&&e.results().length?10:e.open()&&e.query().length>=2?11:-1))},dependencies:[zt,Ft,$t,At],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;width:100%}.gsearch[_ngcontent-%COMP%]{position:relative;width:100%}.gs-field[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;width:100%;height:36px;padding:0 10px;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;transition:border-color .12s,box-shadow .12s}.gs-field[_ngcontent-%COMP%]:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 18%,transparent)}.gs-icon[_ngcontent-%COMP%]{font-size:.9em;opacity:.7;flex-shrink:0}.gs-input[_ngcontent-%COMP%]{flex:1;min-width:0;height:100%;background:none;border:none;color:var(--text);font-size:.92em;font-family:inherit}.gs-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.gs-input[_ngcontent-%COMP%]:focus{outline:none}.gs-clear[_ngcontent-%COMP%], .gs-close[_ngcontent-%COMP%]{flex-shrink:0;background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:.9em;padding:4px}.gs-clear[_ngcontent-%COMP%]:hover, .gs-close[_ngcontent-%COMP%]:hover{color:var(--text)}.gs-toggle[_ngcontent-%COMP%], .gs-close[_ngcontent-%COMP%]{display:none}.gs-results[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 6px);left:0;right:0;background:var(--surface);border:1px solid var(--border);border-radius:10px;box-shadow:0 10px 30px #0006;list-style:none;padding:6px;margin:0;max-height:65vh;overflow-y:auto;z-index:300}.gs-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:7px;cursor:pointer}.gs-item.active[_ngcontent-%COMP%], .gs-item[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.gs-q[_ngcontent-%COMP%]{flex:1;font-size:.88em;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gs-badge[_ngcontent-%COMP%]{flex-shrink:0;font-size:.66em;font-weight:700;text-transform:uppercase;letter-spacing:.03em;padding:2px 8px;border-radius:10px;border:1px solid transparent}.gs-empty[_ngcontent-%COMP%]{padding:12px;font-size:.82em;color:var(--text-muted);text-align:center}@media(max-width:768px){.gs-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:36px;height:36px;background:var(--surface-2);border:1px solid var(--border);border-radius:8px;cursor:pointer;font-size:1em;margin-left:auto}.gs-field[_ngcontent-%COMP%]{display:none}.gsearch.expanded[_ngcontent-%COMP%]{position:absolute;inset:0;background:var(--surface);display:flex;align-items:center;padding:0 10px;z-index:200}.gsearch.expanded[_ngcontent-%COMP%]   .gs-toggle[_ngcontent-%COMP%]{display:none}.gsearch.expanded[_ngcontent-%COMP%]   .gs-field[_ngcontent-%COMP%]{display:flex;height:40px}.gsearch.expanded[_ngcontent-%COMP%]   .gs-close[_ngcontent-%COMP%]{display:block}.gsearch.expanded[_ngcontent-%COMP%]   .gs-results[_ngcontent-%COMP%]{top:calc(100% + 4px);left:10px;right:10px}}'],changeDetection:0})};var en=(()=>{class n{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let o=e.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=e.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,o=0;for(var r=0;r<e.length;r++){if(e[r]==t)return o;e[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,e){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[e]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,e,o="self"){o!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,o="self",r=!0){t&&e&&(r&&(t.style.minWidth=`${n.getOuterWidth(e)}px`),o==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,o=!0){let r=dt=>{if(dt)return getComputedStyle(dt).getPropertyValue("position")==="relative"?dt:r(dt.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),u=e.offsetHeight,b=e.getBoundingClientRect(),m=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),x=this.getViewport(),D=r(t)?.getBoundingClientRect()||{top:-1*m,left:-1*h},U,nt,St="top";b.top+u+s.height>x.height?(U=b.top-D.top-s.height,St="bottom",b.top+U<0&&(U=-1*b.top)):(U=u+b.top-D.top,St="top");let re=b.left+s.width-x.width,kn=b.left-D.left;if(s.width>x.width?nt=(b.left-D.left)*-1:re>0?nt=kn-re:nt=b.left-D.left,t.style.top=U+"px",t.style.left=nt+"px",t.style.transformOrigin=St,o){let dt=Oe(/-anchor-gutter$/)?.value;t.style.marginTop=St==="bottom"?`calc(${dt??"2px"} * -1)`:dt??""}}static absolutePosition(t,e,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,u=r.width,b=e.offsetHeight,m=e.offsetWidth,h=e.getBoundingClientRect(),x=this.getWindowScrollTop(),W=this.getWindowScrollLeft(),D=this.getViewport(),U,nt;h.top+b+s>D.height?(U=h.top+x-s,t.style.transformOrigin="bottom",U<0&&(U=x)):(U=b+h.top+x,t.style.transformOrigin="top"),h.left+u>D.width?nt=Math.max(0,h.left+W+m-u):nt=h.left+W,t.style.top=U+"px",t.style.left=nt+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=u=>{let b=window.getComputedStyle(u,null);return r.test(b.getPropertyValue("overflow"))||r.test(b.getPropertyValue("overflowX"))||r.test(b.getPropertyValue("overflowY"))};for(let u of o){let b=u.nodeType===1&&u.dataset.scrollselectors;if(b){let m=b.split(",");for(let h of m){let x=this.findSingle(u,h);x&&s(x)&&e.push(x)}}u.nodeType!==9&&s(u)&&e.push(u)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),u=s?parseFloat(s):0,b=t.getBoundingClientRect(),h=e.getBoundingClientRect().top+document.body.scrollTop-(b.top+document.body.scrollTop)-r-u,x=t.scrollTop,W=t.clientHeight,D=this.getOuterHeight(e);h<0?t.scrollTop=x+h:h+D>W&&(t.scrollTop=x+h-W+D)}static fadeIn(t,e){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/e,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,e){var o=1,r=50,s=e,u=r/s;let b=setInterval(()=>{o=o-u,o<=0&&(o=0,clearInterval(b)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,e)}static getOuterWidth(t,e){let o=t.offsetWidth;if(e){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,o=getComputedStyle(t);return e+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),e}static width(t){let e=t.offsetWidth,o=getComputedStyle(t);return e-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,o=getComputedStyle(t);return e+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),e}static getOuterHeight(t,e){let o=t.offsetHeight;if(e){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let e=t.offsetHeight,o=getComputedStyle(t);return e-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,o=getComputedStyle(t);return e-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),e}static getViewport(){let t=window,e=document,o=e.documentElement,r=e.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,u=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:u}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let o=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,o){t[e].apply(t,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let o=this.find(t,this.getFocusableSelectorString(e)),r=[];for(let s of o){let u=getComputedStyle(s);this.isVisible(s)&&u.display!="none"&&u.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,e=""){let o=this.findSingle(t,this.getFocusableSelectorString(e));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,e=""){let o=this.getFocusableElements(t,e);return o.length>0?o[0]:null}static getLastFocusableElement(t,e){let o=this.getFocusableElements(t,e);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,e=!1){let o=n.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);e?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement?.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(u=>!!(u&&u.constructor&&u.call&&u.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let o=t.getAttribute(e);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,e),r.append(...o),r}}static setAttribute(t,e="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(e,o)}static setAttributes(t,e={}){if(this.isElement(t)){let o=(r,s)=>{let u=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((b,m)=>{if(m!=null){let h=typeof m;if(h==="string"||h==="number")b.push(m);else if(h==="object"){let x=Array.isArray(m)?o(r,m):Object.entries(m).map(([W,D])=>r==="style"&&(D||D===0)?`${W.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${D}`:D?W:void 0);b=x.length?b.concat(x.filter(W=>!!W)):b}}return b},u)};Object.entries(e).forEach(([r,s])=>{if(s!=null){let u=r.match(/^on(.+)/);u?t.addEventListener(u[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return n})();var nn=(()=>{class n extends H{autofocus=!1;focused=!1;platformId=p(Tt);document=p(Pt);host=p(ot);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){xt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=en.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275dir=X({type:n,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[B]})}return n})();var on=`
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
`;var Yn=`
    ${on}

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
`,Kn={root:({instance:n})=>{let i=typeof n.value=="function"?n.value():n.value,t=typeof n.size=="function"?n.size():n.size,e=typeof n.badgeSize=="function"?n.badgeSize():n.badgeSize,o=typeof n.severity=="function"?n.severity():n.severity;return["p-badge p-component",{"p-badge-circle":_t(i)&&String(i).length===1,"p-badge-dot":Me(i),"p-badge-sm":t==="small"||e==="small","p-badge-lg":t==="large"||e==="large","p-badge-xl":t==="xlarge"||e==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},rn=(()=>{class n extends F{name="badge";style=Yn;classes=Kn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();var sn=new Z("BADGE_INSTANCE");var ie=(()=>{class n extends H{componentName="Badge";$pcBadge=p(sn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=T();badgeSize=T();size=T();severity=T();value=T();badgeDisabled=T(!1,{transform:$});_componentStyle=p(rn);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["p-badge"]],hostVars:5,hostBindings:function(e,o){e&2&&(E("data-p",o.dataP),w(o.cn(o.cx("root"),o.styleClass())),Ot("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[V([rn,{provide:sn,useExisting:n},{provide:et,useExisting:n}]),it([I]),B],decls:1,vars:1,template:function(e,o){e&1&&c(0),e&2&&M(o.value())},dependencies:[tt,R,Ke],encapsulation:2,changeDetection:0})}return n})(),an=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Y({type:n});static \u0275inj=Q({imports:[ie,R,R]})}return n})();var Xn=["*"],Jn={root:"p-fluid"},ln=(()=>{class n extends F{name="fluid";classes=Jn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();var dn=new Z("FLUID_INSTANCE"),cn=(()=>{class n extends H{componentName="Fluid";$pcFluid=p(dn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=p(ln);static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(e,o){e&2&&w(o.cx("root"))},features:[V([ln,{provide:dn,useExisting:n},{provide:et,useExisting:n}]),it([I]),B],ngContentSelectors:Xn,decls:1,vars:0,template:function(e,o){e&1&&(bt(),gt(0))},dependencies:[tt],encapsulation:2,changeDetection:0})}return n})();var to=["*"],eo=`
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
`,un=(()=>{class n extends F{name="baseicon";css=eo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var pn=(()=>{class n extends H{spin=!1;_componentStyle=p(un);getClassNames(){return lt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(e,o){e&2&&w(o.getClassNames())},inputs:{spin:[2,"spin","spin",$]},features:[V([un]),B],ngContentSelectors:to,decls:1,vars:0,template:function(e,o){e&1&&(bt(),gt(0))},encapsulation:2,changeDetection:0})}return n})();var no=["data-p-icon","spinner"],bn=(()=>{class n extends pn{pathId;onInit(){this.pathId="url(#"+Ct()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["","data-p-icon","spinner"]],features:[B],attrs:no,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(e,o){e&1&&(pt(),Gt(0,"g"),Kt(1,"path",0),Yt(),Gt(2,"defs")(3,"clipPath",1),Kt(4,"rect",2),Yt()()),e&2&&(E("clip-path",o.pathId),d(3),be("id",o.pathId))},encapsulation:2})}return n})();var gn=`
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
`;var oo=`
    ${gn}

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
`,io={root:"p-ink"},hn=(()=>{class n extends F{name="ripple";style=oo;classes=io;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();var mn=(()=>{class n extends H{componentName="Ripple";zone=p(le);_componentStyle=p(hn);animationListener;mouseDownListener;timeout;constructor(){super(),G(()=>{xt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(!this.$unstyled()&&mt(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"),!te(e)&&!ee(e)){let u=Math.max(Be(this.el.nativeElement),Fe(this.el.nativeElement));e.style.height=u+"px",e.style.width=u+"px"}let o=Ne(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-ee(e)/2,s=t.pageY-o.top+this.document.body.scrollLeft-te(e)/2;this.renderer.setStyle(e,"top",s+"px"),this.renderer.setStyle(e,"left",r+"px"),!this.$unstyled()&&Jt(e,"p-ink-active"),e.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let u=this.getInk();u&&(!this.$unstyled()&&mt(u,"p-ink-active"),u.setAttribute("data-p-ink-active","false"))},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&mt(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&mt(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"data-p-ink","true"),this.renderer.setAttribute(t,"data-p-ink-active","false"),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,$e(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=X({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[V([hn]),B]})}return n})();var fn=`
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
`;var ro=["content"],so=["loadingicon"],ao=["icon"],lo=["*"],xn=(n,i)=>({class:n,pt:i});function co(n,i){n&1&&pe(0)}function uo(n,i){if(n&1&&P(0,"span",7),n&2){let t=g(3);w(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),f("pBind",t.ptm("loadingIcon")),E("aria-hidden",!0)}}function po(n,i){if(n&1&&(pt(),P(0,"svg",8)),n&2){let t=g(3);w(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),f("pBind",t.ptm("loadingIcon"))("spin",!0),E("aria-hidden",!0)}}function bo(n,i){if(n&1&&(Et(0),ct(1,uo,1,4,"span",3)(2,po,1,5,"svg",6),Dt()),n&2){let t=g(2);d(),f("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),d(),f("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function go(n,i){}function ho(n,i){if(n&1&&ct(0,go,0,0,"ng-template",9),n&2){let t=g(2);f("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function mo(n,i){if(n&1&&(Et(0),ct(1,bo,3,2,"ng-container",2)(2,ho,1,1,null,5),Dt()),n&2){let t=g();d(),f("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),d(),f("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Zt(3,xn,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function fo(n,i){if(n&1&&P(0,"span",7),n&2){let t=g(2);w(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),f("pBind",t.ptm("icon")),E("data-p",t.dataIconP)}}function yo(n,i){}function vo(n,i){if(n&1&&ct(0,yo,0,0,"ng-template",9),n&2){let t=g(2);f("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function xo(n,i){if(n&1&&(Et(0),ct(1,fo,1,4,"span",3)(2,vo,1,1,null,5),Dt()),n&2){let t=g();d(),f("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),d(),f("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Zt(3,xn,t.cx("icon"),t.ptm("icon")))}}function _o(n,i){if(n&1&&(a(0,"span",7),c(1),l()),n&2){let t=g();w(t.cx("label")),f("pBind",t.ptm("label")),E("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),d(),M(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function Co(n,i){if(n&1&&P(0,"p-badge",10),n&2){let t=g();f("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var ko={root:({instance:n})=>["p-button p-component",{"p-button-icon-only":n.hasIcon&&!n.label&&!n.buttonProps?.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading||n.buttonProps?.loading,"p-button-link":n.link||n.buttonProps?.link,[`p-button-${n.severity||n.buttonProps?.severity}`]:n.severity||n.buttonProps?.severity,"p-button-raised":n.raised||n.buttonProps?.raised,"p-button-rounded":n.rounded||n.buttonProps?.rounded,"p-button-text":n.text||n.variant==="text"||n.buttonProps?.text||n.buttonProps?.variant==="text","p-button-outlined":n.outlined||n.variant==="outlined"||n.buttonProps?.outlined||n.buttonProps?.variant==="outlined","p-button-sm":n.size==="small"||n.buttonProps?.size==="small","p-button-lg":n.size==="large"||n.buttonProps?.size==="large","p-button-plain":n.plain||n.buttonProps?.plain,"p-button-fluid":n.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:n})=>["p-button-icon",{[`p-button-icon-${n.iconPos||n.buttonProps?.iconPos}`]:n.label||n.buttonProps?.label,"p-button-icon-left":(n.iconPos==="left"||n.buttonProps?.iconPos==="left")&&n.label||n.buttonProps?.label,"p-button-icon-right":(n.iconPos==="right"||n.buttonProps?.iconPos==="right")&&n.label||n.buttonProps?.label,"p-button-icon-top":(n.iconPos==="top"||n.buttonProps?.iconPos==="top")&&n.label||n.buttonProps?.label,"p-button-icon-bottom":(n.iconPos==="bottom"||n.buttonProps?.iconPos==="bottom")&&n.label||n.buttonProps?.label},n.icon,n.buttonProps?.icon],spinnerIcon:({instance:n})=>Object.entries(n.cx("icon")).filter(([,i])=>!!i).reduce((i,[t])=>i+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},yn=(()=>{class n extends F{name="button";style=fn;classes=ko;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();var vn=new Z("BUTTON_INSTANCE");var So=(()=>{class n extends H{componentName="Button";hostName="";$pcButton=p(vn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(I,{self:!0});_componentStyle=p(yn);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=T(void 0,{transform:$});onClick=new Mt;onFocus=new Mt;onBlur=new Mt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=p(cn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["p-button"]],contentQueries:function(e,o,r){if(e&1&&ge(r,ro,5)(r,so,5)(r,ao,5)(r,Ae,4),e&2){let s;yt(s=vt())&&(o.contentTemplate=s.first),yt(s=vt())&&(o.loadingIconTemplate=s.first),yt(s=vt())&&(o.iconTemplate=s.first),yt(s=vt())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",$],raised:[2,"raised","raised",$],rounded:[2,"rounded","rounded",$],text:[2,"text","text",$],plain:[2,"plain","plain",$],outlined:[2,"outlined","outlined",$],link:[2,"link","link",$],tabindex:[2,"tabindex","tabindex",_e],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",$],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",$],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[V([yn,{provide:vn,useExisting:n},{provide:et,useExisting:n}]),it([I]),B],ngContentSelectors:lo,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(e,o){e&1&&(bt(),a(0,"button",0),v("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),gt(1),ct(2,co,1,0,"ng-container",1)(3,mo,3,6,"ng-container",2)(4,xo,3,6,"ng-container",2)(5,_o,2,6,"span",3)(6,Co,1,4,"p-badge",4),l()),e&2&&(w(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),f("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),E("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),d(2),f("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),d(),f("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),d(),f("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),d(),f("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),d(),f("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[tt,Ce,Se,ke,mn,nn,bn,an,ie,R,I],encapsulation:2,changeDetection:0})}return n})(),_n=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Y({type:n});static \u0275inj=Q({imports:[tt,So,R,R]})}return n})();var wo=()=>[1,2,3],Po=(n,i)=>i.id;function Mo(n,i){if(n&1){let t=q();a(0,"div",20),v("click",function(){z(t);let o=g();return L(o.drawerOpen.set(!1))}),l()}}function To(n,i){if(n&1){let t=q();a(0,"div",18),c(1),a(2,"button",21),v("click",function(){z(t);let o=g();return L(o.retry())}),c(3,"Retry"),l()()}if(n&2){let t=g();d(),at(" \u26A0\uFE0F ",t.error()," ")}}function Io(n,i){n&1&&(a(0,"div",19)(1,"div",22),c(2,"\u{1F4D6}"),l(),a(3,"h2"),c(4,"Pick a topic to start"),l(),a(5,"p"),c(6,"Select a topic from the sidebar to browse questions and cheat sheets."),l()())}function Eo(n,i){n&1&&(a(0,"span",28),c(1,"\u2022"),l())}function Do(n,i){n&1&&(a(0,"div",32),P(1,"div",33)(2,"div",34),l())}function Oo(n,i){n&1&&(a(0,"div",31),rt(1,Do,3,0,"div",32,ue),l()),n&2&&(d(),st(ye(0,wo)))}function Bo(n,i){n&1&&(a(0,"p"),c(1,"You haven't bookmarked any questions yet."),l())}function No(n,i){if(n&1){let t=q();a(0,"p"),c(1,"No questions match your filters."),l(),a(2,"button",37),v("click",function(){z(t);let o=g(4);return L(o.clearFilter())}),c(3,"Clear filters"),l()}}function Fo(n,i){if(n&1&&(a(0,"div",35),k(1,Bo,2,0,"p")(2,No,4,0),l()),n&2){let t=g(3);d(),S(t.filter().bookmarkedOnly?1:2)}}function $o(n,i){if(n&1&&P(0,"qb-question-card",38),n&2){let t=i.$implicit;f("question",t)}}function Ao(n,i){if(n&1&&(a(0,"div",36),rt(1,$o,1,1,"qb-question-card",38,Po),l()),n&2){let t=g(3);d(),st(t.visibleQuestions())}}function zo(n,i){if(n&1&&k(0,Fo,3,1,"div",35)(1,Ao,3,0,"div",36),n&2){let t=g(2);S(t.visibleQuestions().length===0?0:1)}}function Lo(n,i){if(n&1&&(a(0,"div",23)(1,"span",24),c(2),l(),a(3,"span",25),c(4,"\u203A"),l(),a(5,"span",26),c(6),l(),a(7,"span",27),c(8),k(9,Eo,2,0,"span",28),l()(),a(10,"div",29),P(11,"qb-cheat-sheet-panel",30)(12,"qb-search-filter"),k(13,Oo,3,1,"div",31),k(14,zo,2,1),l()),n&2){let t=g();d(2),M(t.selectedTopicName()),d(4),M(t.selectedSubtopicName()),d(2),me(" ",t.visibleQuestions().length," of ",t.totalInSubtopic()," question",t.totalInSubtopic()===1?"":"s"," "),d(),S(t.hasActiveFilter()?9:-1),d(2),f("topicId",t.selected().topicId),d(2),S(t.loadingTopicId()?13:-1),d(),S(t.loadingTopicId()?-1:14)}}var Cn=class n{svc=p(J);selected=this.svc.selected;visibleQuestions=this.svc.visibleQuestions;loadingTopicId=this.svc.loadingTopicId;error=this.svc.error;filter=this.svc.filter;isDark=this.svc.isDark;drawerOpen=O(!1);topicCount=N(()=>this.svc.topics().length);selectedTopicName=N(()=>{let i=this.selected();return i?this.svc.topics().find(t=>t.id===i.topicId)?.name??"":""});selectedSubtopicName=N(()=>{let i=this.selected();return i?this.svc.topics().find(e=>e.id===i.topicId)?.subtopics.find(e=>e.subtopicId===i.subtopicId)?.subtopicName??"":""});totalInSubtopic=N(()=>{let i=this.selected();return i?this.svc.topics().find(e=>e.id===i.topicId)?.subtopics.find(e=>e.subtopicId===i.subtopicId)?.questionCount??0:0});hasActiveFilter=N(()=>{let i=this.filter();return i.search!==""||i.type!=="all"||i.bookmarkedOnly});async ngOnInit(){this.svc.applyStoredTheme(),await this.svc.init()}toggleTheme(){this.svc.toggleTheme()}clearFilter(){this.svc.clearFilter()}async retry(){await this.svc.init()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-question-bank-page"]],decls:39,vars:8,consts:[[1,"app-shell"],[1,"topbar"],[1,"topbar-left"],[1,"menu-btn",3,"click"],[1,"lbl"],["routerLink","/",1,"app-brand"],[1,"topbar-center"],[1,"topbar-right"],["routerLink","/dashboard",1,"sim-link"],[1,"ico"],["routerLink","/sets",1,"sim-link"],["routerLink","/simulator",1,"sim-link"],[1,"theme-btn",3,"click","title"],[1,"layout"],[1,"drawer-backdrop"],[1,"sidebar-col"],[3,"closed"],[1,"main-col"],[1,"error-banner"],[1,"empty-state"],[1,"drawer-backdrop",3,"click"],[1,"retry-btn",3,"click"],[1,"empty-icon"],[1,"breadcrumb-bar"],[1,"bc-topic"],[1,"bc-sep"],[1,"bc-sub"],[1,"bc-count"],[1,"filter-active-dot"],[1,"content-area"],[3,"topicId"],[1,"skeleton-list"],[1,"skeleton-card"],[1,"sk-line","sk-short"],[1,"sk-line","sk-long"],[1,"no-results"],[1,"question-list"],[1,"clear-link",3,"click"],[3,"question"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"header",1)(2,"div",2)(3,"button",3),v("click",function(){return e.drawerOpen.set(!0)}),c(4,"\u2630 "),a(5,"span",4),c(6,"Topics"),l()(),a(7,"a",5),c(8,"\u{1F680} "),a(9,"span",4),c(10,"crackInterview"),l()()(),a(11,"div",6),P(12,"qb-global-search"),l(),a(13,"div",7)(14,"a",8)(15,"span",9),c(16,"\u{1F4CA}"),l(),a(17,"span",4),c(18,"Dashboard"),l()(),a(19,"a",10)(20,"span",9),c(21,"\u{1F5C2}"),l(),a(22,"span",4),c(23,"Sets"),l()(),a(24,"a",11)(25,"span",9),c(26,"\u{1F3AF}"),l(),a(27,"span",4),c(28,"Simulator"),l()(),a(29,"button",12),v("click",function(){return e.toggleTheme()}),c(30),l()()(),a(31,"div",13),k(32,Mo,1,0,"div",14),a(33,"aside",15)(34,"qb-topic-sidebar",16),v("closed",function(){return e.drawerOpen.set(!1)}),l()(),a(35,"main",17),k(36,To,4,1,"div",18),k(37,Io,7,0,"div",19)(38,Lo,15,9),l()()()),t&2&&(E("data-theme",e.isDark()?"dark":"light"),d(29),f("title",e.isDark()?"Switch to light":"Switch to dark"),d(),at(" ",e.isDark()?"\u2600\uFE0F":"\u{1F319}"," "),d(2),S(e.drawerOpen()?32:-1),d(),K("drawer-open",e.drawerOpen()),d(3),S(e.error()?36:-1),d(),S(e.selected()?38:37))},dependencies:[Pe,Ht,Rt,Re,Wt,Ut,_n],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100vh;overflow:hidden}.app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;background:var(--bg);color:var(--text)}.topbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 16px;height:48px;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;z-index:100;gap:14px;position:relative}.topbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-shrink:0}.topbar-center[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;min-width:0}.topbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;flex-shrink:0}.menu-btn[_ngcontent-%COMP%]{display:none;background:var(--surface-2);border:1px solid var(--border);color:var(--text);padding:6px 12px;border-radius:6px;cursor:pointer;font-size:.85em;white-space:nowrap}@media(max-width:768px){.menu-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}}.app-brand[_ngcontent-%COMP%]{font-weight:700;font-size:1em;letter-spacing:-.01em;color:var(--text);text-decoration:none}.app-brand[_ngcontent-%COMP%]:hover{opacity:.8;text-decoration:none}.stats-pill[_ngcontent-%COMP%]{font-size:.75em;color:var(--text-muted);background:var(--surface-2);padding:3px 10px;border-radius:12px;border:1px solid var(--border)}@media(max-width:480px){.stats-pill[_ngcontent-%COMP%]{display:none}}.theme-btn[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:4px 8px;cursor:pointer;font-size:1em;transition:background .12s}.theme-btn[_ngcontent-%COMP%]:hover{background:var(--surface)}.sim-link[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--accent) 14%,var(--surface-2));border:1px solid color-mix(in srgb,var(--accent) 35%,var(--border));color:var(--accent);padding:5px 12px;border-radius:6px;font-size:.82em;font-weight:600;white-space:nowrap;transition:background .12s}.sim-link[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 22%,var(--surface-2));text-decoration:none}.layout[_ngcontent-%COMP%]{display:flex;flex:1;overflow:hidden;position:relative}.sidebar-col[_ngcontent-%COMP%]{width:260px;flex-shrink:0;overflow:hidden}@media(max-width:768px){.sidebar-col[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:280px;z-index:200;transform:translate(-100%);transition:transform .2s ease;box-shadow:4px 0 20px #0006}.sidebar-col.drawer-open[_ngcontent-%COMP%]{transform:translate(0)}}.drawer-backdrop[_ngcontent-%COMP%]{display:none}@media(max-width:768px){.drawer-backdrop[_ngcontent-%COMP%]{display:block;position:fixed;inset:0;background:#00000080;z-index:199}}.main-col[_ngcontent-%COMP%]{flex:1;overflow-y:auto;display:flex;flex-direction:column;background:var(--bg)}.error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 16px;background:color-mix(in srgb,var(--danger) 10%,var(--surface));border-bottom:1px solid color-mix(in srgb,var(--danger) 30%,var(--border));color:var(--danger);font-size:.9em}.retry-btn[_ngcontent-%COMP%]{background:var(--danger);color:#fff;border:none;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:.85em}.retry-btn[_ngcontent-%COMP%]:hover{opacity:.85}.empty-state[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px;text-align:center;color:var(--text-muted)}.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]{font-size:3em}.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--text);font-size:1.2em}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;max-width:320px;line-height:1.6}.breadcrumb-bar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:6px;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--border);font-size:.875em;flex-shrink:0}.bc-topic[_ngcontent-%COMP%], .bc-sep[_ngcontent-%COMP%]{color:var(--text-muted)}.bc-sub[_ngcontent-%COMP%]{color:var(--text);font-weight:600}.bc-count[_ngcontent-%COMP%]{margin-left:auto;color:var(--text-muted);font-size:.9em;display:flex;align-items:center;gap:5px}.filter-active-dot[_ngcontent-%COMP%]{color:var(--accent);font-size:1.2em}.content-area[_ngcontent-%COMP%]{padding:12px 16px 24px;display:flex;flex-direction:column;gap:0;flex:1}.skeleton-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-top:12px}.skeleton-card[_ngcontent-%COMP%]{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:16px;display:flex;flex-direction:column;gap:10px;animation:shimmer 1.2s infinite}.sk-line[_ngcontent-%COMP%]{height:12px;border-radius:6px;background:linear-gradient(90deg,var(--surface-2) 25%,var(--surface) 50%,var(--surface-2) 75%);background-size:200% 100%;animation:_ngcontent-%COMP%_shimmerMove 1.2s infinite}.sk-short[_ngcontent-%COMP%]{width:35%}.sk-long[_ngcontent-%COMP%]{width:75%}@keyframes _ngcontent-%COMP%_shimmerMove{0%{background-position:200% 0}to{background-position:-200% 0}}.no-results[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px;padding:40px;color:var(--text-muted);text-align:center;font-size:.9em}.clear-link[_ngcontent-%COMP%]{background:none;border:1px solid var(--border);color:var(--accent);padding:6px 16px;border-radius:4px;cursor:pointer;font-size:.875em}.clear-link[_ngcontent-%COMP%]:hover{background:var(--surface-2)}.question-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-top:12px}.sim-link[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]{margin-right:4px}@media(max-width:600px){.topbar[_ngcontent-%COMP%]{padding:0 10px;gap:8px}.topbar-right[_ngcontent-%COMP%]{gap:6px}.menu-btn[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%], .sim-link[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%]{display:none}.sim-link[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]{margin-right:0}.sim-link[_ngcontent-%COMP%]{padding:6px 9px;font-size:1em}}'],changeDetection:0})};export{Cn as QuestionBankPage};
