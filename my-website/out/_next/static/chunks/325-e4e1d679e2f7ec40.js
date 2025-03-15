"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[325],{79999:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(12115),o=n(43463),i=n(7123);function l(e){try{return e.matches(":focus-visible")}catch(e){}return!1}var u=n(89142),a=n(12567),s=n(59328),c=n(68902),f=n(16031);class d{static create(){return new d}static use(){let e=(0,f.A)(d.create).current,[t,n]=r.useState(!1);return e.shouldMount=t,e.setShouldMount=n,r.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=function(){let e,t;let n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>{var e;return null===(e=this.ref.current)||void 0===e?void 0:e.start(...t)})}stop(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>{var e;return null===(e=this.ref.current)||void 0===e?void 0:e.stop(...t)})}pulsate(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>{var e;return null===(e=this.ref.current)||void 0===e?void 0:e.pulsate(...t)})}constructor(){this.mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())},this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}}var p=n(20698),h=n(71982),m=n(91093),v=n(71987),g=n(95155),y=n(81045);let b=(0,y.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);function A(){let e=(0,p._)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"]);return A=function(){return e},e}function M(){let e=(0,p._)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"]);return M=function(){return e},e}function S(){let e=(0,p._)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"]);return S=function(){return e},e}function E(){let e=(0,p._)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]);return E=function(){return e},e}let P=(0,v.i7)(A()),w=(0,v.i7)(M()),x=(0,v.i7)(S()),I=(0,u.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),j=(0,u.Ay)(function(e){let{className:t,classes:n,pulsate:i=!1,rippleX:l,rippleY:u,rippleSize:a,in:s,onExited:c,timeout:f}=e,[d,p]=r.useState(!1),h=(0,o.A)(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),m=(0,o.A)(n.child,d&&n.childLeaving,i&&n.childPulsate);return s||d||p(!0),r.useEffect(()=>{if(!s&&null!=c){let e=setTimeout(c,f);return()=>{clearTimeout(e)}}},[c,s,f]),(0,g.jsx)("span",{className:h,style:{width:a,height:a,top:-(a/2)+u,left:-(a/2)+l},children:(0,g.jsx)("span",{className:m})})},{name:"MuiTouchRipple",slot:"Ripple"})(E(),b.rippleVisible,P,550,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut},b.ripplePulsate,e=>{let{theme:t}=e;return t.transitions.duration.shorter},b.child,b.childLeaving,w,550,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut},b.childPulsate,x,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),k=r.forwardRef(function(e,t){let{center:n=!1,classes:i={},className:l,...u}=(0,a.b)({props:e,name:"MuiTouchRipple"}),[s,c]=r.useState([]),f=r.useRef(0),d=r.useRef(null);r.useEffect(()=>{d.current&&(d.current(),d.current=null)},[s]);let p=r.useRef(!1),v=(0,m.A)(),y=r.useRef(null),A=r.useRef(null),M=r.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:l,cb:u}=e;c(e=>[...e,(0,g.jsx)(j,{classes:{ripple:(0,o.A)(i.ripple,b.ripple),rippleVisible:(0,o.A)(i.rippleVisible,b.rippleVisible),ripplePulsate:(0,o.A)(i.ripplePulsate,b.ripplePulsate),child:(0,o.A)(i.child,b.child),childLeaving:(0,o.A)(i.childLeaving,b.childLeaving),childPulsate:(0,o.A)(i.childPulsate,b.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:l},f.current)]),f.current+=1,d.current=u},[i]),S=r.useCallback(function(){let e,t,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{},{pulsate:u=!1,center:a=n||i.pulsate,fakeElement:s=!1}=i;if((null==o?void 0:o.type)==="mousedown"&&p.current){p.current=!1;return}(null==o?void 0:o.type)==="touchstart"&&(p.current=!0);let c=s?null:A.current,f=c?c.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(!a&&void 0!==o&&(0!==o.clientX||0!==o.clientY)&&(o.clientX||o.touches)){let{clientX:n,clientY:r}=o.touches&&o.touches.length>0?o.touches[0]:o;e=Math.round(n-f.left),t=Math.round(r-f.top)}else e=Math.round(f.width/2),t=Math.round(f.height/2);a?(r=Math.sqrt((2*f.width**2+f.height**2)/3))%2==0&&(r+=1):r=Math.sqrt((2*Math.max(Math.abs((c?c.clientWidth:0)-e),e)+2)**2+(2*Math.max(Math.abs((c?c.clientHeight:0)-t),t)+2)**2),(null==o?void 0:o.touches)?null===y.current&&(y.current=()=>{M({pulsate:u,rippleX:e,rippleY:t,rippleSize:r,cb:l})},v.start(80,()=>{y.current&&(y.current(),y.current=null)})):M({pulsate:u,rippleX:e,rippleY:t,rippleSize:r,cb:l})},[n,M,v]),E=r.useCallback(()=>{S({},{pulsate:!0})},[S]),P=r.useCallback((e,t)=>{if(v.clear(),(null==e?void 0:e.type)==="touchend"&&y.current){y.current(),y.current=null,v.start(0,()=>{P(e,t)});return}y.current=null,c(e=>e.length>0?e.slice(1):e),d.current=t},[v]);return r.useImperativeHandle(t,()=>({pulsate:E,start:S,stop:P}),[E,S,P]),(0,g.jsx)(I,{className:(0,o.A)(b.root,i.root,l),ref:A,...u,children:(0,g.jsx)(h.A,{component:null,exit:!0,children:s})})});var R=n(37157);function C(e){return(0,R.Ay)("MuiButtonBase",e)}let T=(0,y.A)("MuiButtonBase",["root","disabled","focusVisible"]),_=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,l=(0,i.A)({root:["root",t&&"disabled",n&&"focusVisible"]},C,o);return n&&r&&(l.root+=" ".concat(r)),l},O=(0,u.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(T.disabled)]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});function z(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,c.A)(o=>(n&&n(o),r||e[t](o),!0))}let N=r.forwardRef(function(e,t){let n=(0,a.b)({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:u=!1,children:f,className:p,component:h="button",disabled:m=!1,disableRipple:v=!1,disableTouchRipple:y=!1,focusRipple:b=!1,focusVisibleClassName:A,LinkComponent:M="a",onBlur:S,onClick:E,onContextMenu:P,onDragLeave:w,onFocus:x,onFocusVisible:I,onKeyDown:j,onKeyUp:R,onMouseDown:C,onMouseLeave:T,onMouseUp:N,onTouchEnd:L,onTouchMove:B,onTouchStart:U,tabIndex:D=0,TouchRippleProps:V,touchRippleRef:F,type:K,...q}=n,W=r.useRef(null),H=d.use(),Q=(0,s.A)(H.ref,F),[X,Y]=r.useState(!1);m&&X&&Y(!1),r.useImperativeHandle(i,()=>({focusVisible:()=>{Y(!0),W.current.focus()}}),[]);let Z=H.shouldMount&&!v&&!m;r.useEffect(()=>{X&&b&&!v&&H.pulsate()},[v,b,X,H]);let G=z(H,"start",C,y),J=z(H,"stop",P,y),$=z(H,"stop",w,y),ee=z(H,"stop",N,y),et=z(H,"stop",e=>{X&&e.preventDefault(),T&&T(e)},y),en=z(H,"start",U,y),er=z(H,"stop",L,y),eo=z(H,"stop",B,y),ei=z(H,"stop",e=>{l(e.target)||Y(!1),S&&S(e)},!1),el=(0,c.A)(e=>{W.current||(W.current=e.currentTarget),l(e.target)&&(Y(!0),I&&I(e)),x&&x(e)}),eu=()=>{let e=W.current;return h&&"button"!==h&&!("A"===e.tagName&&e.href)},ea=(0,c.A)(e=>{b&&!e.repeat&&X&&" "===e.key&&H.stop(e,()=>{H.start(e)}),e.target===e.currentTarget&&eu()&&" "===e.key&&e.preventDefault(),j&&j(e),e.target===e.currentTarget&&eu()&&"Enter"===e.key&&!m&&(e.preventDefault(),E&&E(e))}),es=(0,c.A)(e=>{b&&" "===e.key&&X&&!e.defaultPrevented&&H.stop(e,()=>{H.pulsate(e)}),R&&R(e),E&&e.target===e.currentTarget&&eu()&&" "===e.key&&!e.defaultPrevented&&E(e)}),ec=h;"button"===ec&&(q.href||q.to)&&(ec=M);let ef={};"button"===ec?(ef.type=void 0===K?"button":K,ef.disabled=m):(q.href||q.to||(ef.role="button"),m&&(ef["aria-disabled"]=m));let ed=(0,s.A)(t,W),ep={...n,centerRipple:u,component:h,disabled:m,disableRipple:v,disableTouchRipple:y,focusRipple:b,tabIndex:D,focusVisible:X},eh=_(ep);return(0,g.jsxs)(O,{as:ec,className:(0,o.A)(eh.root,p),ownerState:ep,onBlur:ei,onClick:E,onContextMenu:J,onFocus:el,onKeyDown:ea,onKeyUp:es,onMouseDown:G,onMouseLeave:et,onMouseUp:ee,onDragLeave:$,onTouchEnd:er,onTouchMove:eo,onTouchStart:en,ref:ed,tabIndex:m?-1:D,type:K,...ef,...q,children:[f,Z?(0,g.jsx)(k,{ref:Q,center:u,...V}):null]})})},12983:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(12115),o=n(43463),i=n(7123),l=n(37410),u=n(89142),a=n(98330),s=n(12567),c=n(81045),f=n(37157);function d(e){return(0,f.Ay)("MuiSvgIcon",e)}(0,c.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=n(95155);let h=e=>{let{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&"color".concat((0,l.A)(t)),"fontSize".concat((0,l.A)(n))]};return(0,i.A)(o,d,r)},m=(0,u.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t["color".concat((0,l.A)(n.color))],t["fontSize".concat((0,l.A)(n.fontSize))]]}})((0,a.A)(e=>{var t,n,r,o,i,l,u,a,s,c,f,d,p,h,m,v,g,y;let{theme:b}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:null===(o=b.transitions)||void 0===o?void 0:null===(r=o.create)||void 0===r?void 0:r.call(o,"fill",{duration:null===(n=(null!==(m=b.vars)&&void 0!==m?m:b).transitions)||void 0===n?void 0:null===(t=n.duration)||void 0===t?void 0:t.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:(null===(l=b.typography)||void 0===l?void 0:null===(i=l.pxToRem)||void 0===i?void 0:i.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:(null===(a=b.typography)||void 0===a?void 0:null===(u=a.pxToRem)||void 0===u?void 0:u.call(a,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:(null===(c=b.typography)||void 0===c?void 0:null===(s=c.pxToRem)||void 0===s?void 0:s.call(c,35))||"2.1875rem"}},...Object.entries((null!==(v=b.vars)&&void 0!==v?v:b).palette).filter(e=>{let[,t]=e;return t&&t.main}).map(e=>{var t,n,r;let[o]=e;return{props:{color:o},style:{color:null===(n=(null!==(r=b.vars)&&void 0!==r?r:b).palette)||void 0===n?void 0:null===(t=n[o])||void 0===t?void 0:t.main}}}),{props:{color:"action"},style:{color:null===(d=(null!==(g=b.vars)&&void 0!==g?g:b).palette)||void 0===d?void 0:null===(f=d.action)||void 0===f?void 0:f.active}},{props:{color:"disabled"},style:{color:null===(h=(null!==(y=b.vars)&&void 0!==y?y:b).palette)||void 0===h?void 0:null===(p=h.action)||void 0===p?void 0:p.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),v=r.forwardRef(function(e,t){let n=(0,s.b)({props:e,name:"MuiSvgIcon"}),{children:i,className:l,color:u="inherit",component:a="svg",fontSize:c="medium",htmlColor:f,inheritViewBox:d=!1,titleAccess:v,viewBox:g="0 0 24 24",...y}=n,b=r.isValidElement(i)&&"svg"===i.type,A={...n,color:u,component:a,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:g,hasSvgAsChild:b},M={};d||(M.viewBox=g);let S=h(A);return(0,p.jsxs)(m,{as:a,className:(0,o.A)(S.root,l),focusable:"false",color:f,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t,...M,...y,...b&&i.props,ownerState:A,children:[b?i.props.children:i,v?(0,p.jsx)("title",{children:v}):null]})});function g(e,t){function n(n,r){return(0,p.jsx)(v,{"data-testid":"".concat(t,"Icon"),ref:r,...n,children:e})}return n.muiName=v.muiName,r.memo(r.forwardRef(n))}v.muiName="SvgIcon"},68902:(e,t,n)=>{n.d(t,{A:()=>r});let r=n(87303).A},94969:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(12115);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},87303:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(12115),o=n(94969);let i=function(e){let t=r.useRef(e);return(0,o.A)(()=>{t.current=e}),r.useRef(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.current)(...n)}).current}},16031:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(12115);let o={};function i(e,t){let n=r.useRef(o);return n.current===o&&(n.current=e(t)),n}},91093:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(16031),o=n(12115);let i=[];class l{static create(){return new l}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}}function u(){var e;let t=(0,r.A)(l.create).current;return e=t.disposeEffect,o.useEffect(e,i),t}},48173:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(60306),o=n(95155),i=r._(n(12115)),l=n(70180),u=n(71394),a=n(64116),s=n(4445),c=n(45353),f=n(12170),d=n(49544);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}n(42363);let m=i.default.forwardRef(function(e,t){let n,r;let{href:l,as:m,children:v,prefetch:g=null,passHref:y,replace:b,shallow:A,scroll:M,onClick:S,onMouseEnter:E,onTouchStart:P,legacyBehavior:w=!1,...x}=e;n=v,w&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let I=i.default.useContext(u.AppRouterContext),j=!1!==g,k=null===g?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:R,as:C}=i.default.useMemo(()=>{let e=h(l);return{href:e,as:m?h(m):e}},[l,m]),T=i.default.useRef(R),_=i.default.useRef(C);w&&(r=i.default.Children.only(n));let O=w?r&&"object"==typeof r&&r.ref:t,[z,N,L]=(0,a.useIntersection)({rootMargin:"200px"}),B=i.default.useCallback(e=>{(_.current!==C||T.current!==R)&&(L(),_.current=C,T.current=R),z(e)},[C,R,L,z]),U=(0,c.useMergedRef)(B,O);i.default.useEffect(()=>{I&&N&&j&&p(I,R,{kind:k})},[C,R,N,j,I,k]);let D={ref:U,onClick(e){w||"function"!=typeof S||S(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,l,u){let{nodeName:a}=e.currentTarget;"A"===a.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),i.default.startTransition(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,I,R,C,b,A,M)},onMouseEnter(e){w||"function"!=typeof E||E(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&j&&p(I,R,{kind:k})},onTouchStart:function(e){w||"function"!=typeof P||P(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&j&&p(I,R,{kind:k})}};return(0,f.isAbsoluteUrl)(C)?D.href=C:w&&!y&&("a"!==r.type||"href"in r.props)||(D.href=(0,d.addBasePath)(C)),w?i.default.cloneElement(r,D):(0,o.jsx)("a",{...x,...D,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},64116:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(12115),o=n(68571),i="function"==typeof IntersectionObserver,l=new Map,u=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,s=a||!i,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),l.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},70180:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return u},urlObjectKeys:function(){return l}});let r=n(29955)._(n(54156)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:n}=e,i=e.protocol||"",l=e.pathname||"",u=e.hash||"",a=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),a&&"object"==typeof a&&(a=String(r.urlQueryToSearchParams(a)));let c=e.search||a&&"?"+a||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),l&&"/"!==l[0]&&(l="/"+l)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+i+s+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return i(e)}},54156:(e,t)=>{function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},12170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return v},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return a},getLocationOrigin:function(){return l},getURL:function(){return u},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return b}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function u(){let{href:e}=window.location,t=l();return e.substring(t.length)}function a(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+a(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);