(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[722],{85010:(e,r,t)=>{Promise.resolve().then(t.bind(t,5389))},96854:(e,r,t)=>{"use strict";t.d(r,{A:()=>R});var n=t(20698),a=t(12115),o=t(43463),i=t(7123),s=t(71987),l=t(89142),c=t(98330),d=t(12567),p=t(37410),u=t(31628),g=t(81045),m=t(37157);function h(e){return(0,m.Ay)("MuiCircularProgress",e)}(0,g.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x=t(95155);function y(){let e=(0,n._)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return y=function(){return e},e}function f(){let e=(0,n._)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"]);return f=function(){return e},e}function b(){let e=(0,n._)(["\n        animation: "," 1.4s linear infinite;\n      "]);return b=function(){return e},e}function v(){let e=(0,n._)(["\n        animation: "," 1.4s ease-in-out infinite;\n      "]);return v=function(){return e},e}let A=(0,s.i7)(y()),k=(0,s.i7)(f()),j="string"!=typeof A?(0,s.AH)(b(),A):null,C="string"!=typeof k?(0,s.AH)(v(),k):null,w=e=>{let{classes:r,variant:t,color:n,disableShrink:a}=e,o={root:["root",t,"color".concat((0,p.A)(n))],svg:["svg"],circle:["circle","circle".concat((0,p.A)(t)),a&&"circleDisableShrink"]};return(0,i.A)(o,h,r)},B=(0,l.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r["color".concat((0,p.A)(t.color))]]}})((0,c.A)(e=>{let{theme:r}=e;return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:j||{animation:"".concat(A," 1.4s linear infinite")}},...Object.entries(r.palette).filter((0,u.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{color:(r.vars||r).palette[t].main}}})]}})),S=(0,l.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),M=(0,l.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r["circle".concat((0,p.A)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((0,c.A)(e=>{let{theme:r}=e;return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink},style:C||{animation:"".concat(k," 1.4s ease-in-out infinite")}}]}})),R=a.forwardRef(function(e,r){let t=(0,d.b)({props:e,name:"MuiCircularProgress"}),{className:n,color:a="primary",disableShrink:i=!1,size:s=40,style:l,thickness:c=3.6,value:p=0,variant:u="indeterminate",...g}=t,m={...t,color:a,disableShrink:i,size:s,thickness:c,value:p,variant:u},h=w(m),y={},f={},b={};if("determinate"===u){let e=2*Math.PI*((44-c)/2);y.strokeDasharray=e.toFixed(3),b["aria-valuenow"]=Math.round(p),y.strokeDashoffset="".concat(((100-p)/100*e).toFixed(3),"px"),f.transform="rotate(-90deg)"}return(0,x.jsx)(B,{className:(0,o.A)(h.root,n),style:{width:s,height:s,...f,...l},ownerState:m,ref:r,role:"progressbar",...b,...g,children:(0,x.jsx)(S,{className:h.svg,ownerState:m,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44),children:(0,x.jsx)(M,{className:h.circle,style:y,ownerState:m,cx:44,cy:44,r:(44-c)/2,fill:"none",strokeWidth:c})})})})},5389:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>H});var n=t(95155),a=t(12115),o=t(96854),i=t(49883),s=t(9561),l=t(12983);let c=(0,l.A)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var d=t(89142),p=t(48173),u=t.n(p),g=t(68998),m=t(43463),h=t(7123),x=t(12567),y=t(78562),f=t(81045),b=t(37157);function v(e){return(0,b.Ay)("MuiCard",e)}(0,f.A)("MuiCard",["root"]);let A=e=>{let{classes:r}=e;return(0,h.A)({root:["root"]},v,r)},k=(0,d.Ay)(y.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})({overflow:"hidden"}),j=a.forwardRef(function(e,r){let t=(0,x.b)({props:e,name:"MuiCard"}),{className:a,raised:o=!1,...i}=t,s={...t,raised:o},l=A(s);return(0,n.jsx)(k,{className:(0,m.A)(l.root,a),elevation:o?8:void 0,ref:r,ownerState:s,...i})});function C(e){return(0,b.Ay)("MuiCardContent",e)}(0,f.A)("MuiCardContent",["root"]);let w=e=>{let{classes:r}=e;return(0,h.A)({root:["root"]},C,r)},B=(0,d.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:16,"&:last-child":{paddingBottom:24}}),S=a.forwardRef(function(e,r){let t=(0,x.b)({props:e,name:"MuiCardContent"}),{className:a,component:o="div",...i}=t,s={...t,component:o},l=w(s);return(0,n.jsx)(B,{as:o,className:(0,m.A)(l.root,a),ownerState:s,ref:r,...i})});var M=t(49234);let R=(0,l.A)((0,n.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew");var D=t(33977);function I(e){let{cardHeading:r,date:t,introContent:a,keywords:o,linkToArticle:i,sx:l}=e,c=(0,n.jsx)(j,{sx:{...l,cursor:"pointer",background:D.B.gradients.primary,transition:D.B.transitions.default,"&:hover":{background:D.B.gradients.primaryHover,transform:"translateY(-4px)",boxShadow:D.B.elevations.high}},children:(0,n.jsxs)(S,{children:[(0,n.jsxs)(g.A,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:1},children:[(0,n.jsx)(s.A,{variant:"h5",component:"h2",sx:{mb:1,background:D.B.gradients.text,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:r}),i&&(0,n.jsx)(R,{sx:{color:"primary.main",fontSize:"1rem",opacity:.7,transition:D.B.transitions.quick,".MuiCard-root:hover &":{opacity:1}}})]}),(0,n.jsx)(s.A,{variant:"subtitle2",color:"text.secondary",sx:{mb:2},children:t}),(0,n.jsx)(s.A,{variant:"body1",color:"text.secondary",sx:{mb:2},children:a}),(0,n.jsx)(g.A,{sx:{display:"flex",flexWrap:"wrap",gap:1},children:null==o?void 0:o.map(e=>(0,n.jsx)(M.A,{label:e,size:"small",sx:{background:D.B.colors.chipBackground,color:D.B.colors.primary}},e))})]})});return i?(0,n.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:c}):(0,n.jsx)(u(),{href:"/writings/".concat(r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")),style:{textDecoration:"none"},children:c})}var W=t(55709);let F=(0,d.Ay)("input")(e=>{let{theme:r}=e;return{width:"100%",padding:r.spacing(2),borderRadius:r.shape.borderRadius,border:"none",backgroundColor:r.palette.background.paper,color:r.palette.text.primary,fontSize:"1rem",transition:r.transitions.create(["border-color","box-shadow"]),"&:focus":{outline:"none",boxShadow:"0 0 0 2px ".concat(r.palette.primary.main)},"&::placeholder":{color:r.palette.text.secondary,opacity:.8}}}),N=(0,d.Ay)(W.Sc)(e=>{let{theme:r}=e;return{display:"flex",alignItems:"center",gap:r.spacing(2),padding:r.spacing(2),marginBottom:r.spacing(4),[r.breakpoints.up("sm")]:{marginBottom:r.spacing(6)}}}),P=(0,d.Ay)(W.Sc)(e=>{let{theme:r}=e;return{textAlign:"center",padding:r.spacing(8,2)}});function H(){let[e,r]=(0,a.useState)(null),[t,l]=(0,a.useState)(""),[d,p]=(0,a.useState)(!0);(0,a.useEffect)(()=>{p(!0),fetch("/projectDetails.json").then(e=>{if(!e.ok)throw Error("Failed to fetch projects");return e.json()}).then(e=>{r(e.projects),p(!1)}).catch(e=>{console.error("Error fetching projects:",e),p(!1)})},[]);let u=null==e?void 0:e.filter(e=>{if(!e.toBeDisplayed)return!1;let r=t.toLowerCase();return""===t||e.heading.toLowerCase().includes(r)||e.introContent.toLowerCase().includes(r)||e.keywords.some(e=>e.toLowerCase().includes(r))});return d?(0,n.jsx)(W.YM,{children:(0,n.jsx)(o.A,{})}):(0,n.jsx)(W.LN,{children:(0,n.jsx)(i.A,{in:!0,timeout:1e3,children:(0,n.jsxs)(W.xI,{children:[(0,n.jsxs)(W.wn,{children:[(0,n.jsx)(W.he,{variant:"h3",component:"h1",children:"Writings"}),(0,n.jsx)(W.Pz,{variant:"subtitle1",children:"Explore my technical articles and implementations"})]}),(0,n.jsx)(W.wn,{children:(0,n.jsxs)(N,{elevation:0,children:[(0,n.jsx)(c,{sx:{color:"primary.main"}}),(0,n.jsx)(F,{placeholder:"Search by title, content, or keywords...",value:t,onChange:e=>l(e.target.value)})]})}),(null==u?void 0:u.length)?(0,n.jsx)(W.NP,{children:null==u?void 0:u.map(e=>(0,n.jsx)(i.A,{in:!0,timeout:500,children:(0,n.jsx)("div",{children:(0,n.jsx)(I,{cardHeading:e.heading,date:e.date,introContent:e.introContent,linkToArticle:e.link,keywords:e.keywords,sx:{transition:"all 0.3s ease","&:hover":{transform:"translateY(-4px)",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)"}}})})},e.heading))}):(0,n.jsx)(i.A,{in:!0,timeout:500,children:(0,n.jsxs)(P,{elevation:0,children:[(0,n.jsx)(s.A,{variant:"h6",color:"text.secondary",gutterBottom:!0,children:"No writings found"}),(0,n.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Try adjusting your search terms or browse all writings"})]})})]})})})}},55709:(e,r,t)=>{"use strict";t.d(r,{Ao:()=>f,HF:()=>j,KR:()=>k,LN:()=>h,Mj:()=>C,NP:()=>D,Pz:()=>v,Sc:()=>A,XF:()=>S,YM:()=>M,he:()=>b,wS:()=>w,wn:()=>y,xI:()=>x,yn:()=>R,zx:()=>B});var n=t(89142),a=t(9552),o=t(68998),i=t(9561),s=t(78562),l=t(4918),c=t(39100),d=t(2738),p=t(22282),u=t(33977),g=t(48173),m=t.n(g);let h=(0,n.Ay)(a.A)(e=>{let{theme:r}=e;return{maxWidth:r.breakpoints.values.md}}),x=(0,n.Ay)(o.A)(e=>{let{theme:r}=e;return{paddingTop:r.spacing(2),paddingBottom:r.spacing(2),[r.breakpoints.up("sm")]:{paddingTop:r.spacing(4),paddingBottom:r.spacing(4)}}}),y=(0,n.Ay)(o.A)(e=>{let{theme:r}=e;return{marginBottom:r.spacing(4),"&:last-child":{marginBottom:0}}}),f=(0,n.Ay)(o.A)({display:"flex",justifyContent:"space-between",alignItems:"center"}),b=(0,n.Ay)(i.A,{shouldForwardProp:e=>"component"!==e})(e=>{let{theme:r}=e;return{marginBottom:r.spacing(2),fontWeight:700,background:u.B.gradients.text,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),v=(0,n.Ay)(i.A)(e=>{let{theme:r}=e;return{marginBottom:r.spacing(3),color:r.palette.text.secondary}}),A=(0,n.Ay)(s.A)(e=>{let{theme:r}=e;return{padding:r.spacing(3),marginBottom:r.spacing(4),borderRadius:2*r.shape.borderRadius,background:u.B.gradients.primary,transition:u.B.transitions.default,"&:hover":{background:u.B.gradients.primaryHover},[r.breakpoints.up("sm")]:{padding:r.spacing(4)}}});(0,n.Ay)(s.A)(e=>{let{}=e;return{transition:u.B.transitions.default,"&:hover":{transform:"translateY(-4px)",boxShadow:u.B.elevations.high}}});let k=(0,n.Ay)(l.A)({padding:0}),j=(0,n.Ay)(c.Ay)(e=>{let{theme:r}=e;return{paddingTop:r.spacing(.5),paddingBottom:r.spacing(.5),alignItems:"flex-start"}}),C=(0,n.Ay)(o.A)(e=>{let{theme:r}=e;return{minWidth:40,color:r.palette.primary.main}}),w=(0,n.Ay)(d.A)(e=>{let{theme:r}=e;return{"& .MuiListItemText-primary":{lineHeight:1.6,color:r.palette.text.primary}}}),B=(0,n.Ay)(p.A)(e=>{let{theme:r}=e;return{background:"light"===r.palette.mode?r.palette.background.paper:r.palette.primary.main,color:"light"===r.palette.mode?r.palette.primary.main:r.palette.common.white,padding:"".concat(r.spacing(1)," ").concat(r.spacing(3)),fontWeight:600,transition:u.B.transitions.quick,border:"1px solid ".concat(r.palette.primary.main),"&:hover":{background:"light"===r.palette.mode?r.palette.primary.main:r.palette.primary.dark,color:(r.palette.mode,r.palette.common.white),transform:"translateY(-2px)",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},"& .MuiSvgIcon-root":{marginRight:r.spacing(1),color:"inherit"}}}),S=(0,n.Ay)(m())(e=>{let{theme:r}=e;return{textDecoration:"none",color:"inherit","& h4":{fontWeight:700,background:u.B.gradients.text,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",transition:u.B.transitions.quick,"&:hover":{color:r.palette.primary.main,WebkitTextFillColor:"initial"}}}}),M=(0,n.Ay)(o.A)({display:"flex",justifyContent:"center",alignItems:"center",minHeight:"400px"}),R=(0,n.Ay)(i.A)(e=>{let{theme:r}=e;return{color:r.palette.error.main}}),D=(0,n.Ay)(o.A)(e=>{let{theme:r}=e;return{display:"grid",gap:r.spacing(3),[r.breakpoints.up("sm")]:{gap:r.spacing(4)}}});(0,n.Ay)(o.A)(e=>{let{theme:r}=e;return{animation:"fadeIn 1s ".concat(r.transitions.easing.easeInOut),"@keyframes fadeIn":{from:{opacity:0,transform:"translateY(20px)"},to:{opacity:1,transform:"translateY(0)"}}}})},33977:(e,r,t)=>{"use strict";t.d(r,{B:()=>n});let n={gradients:{primary:"linear-gradient(45deg, rgba(33, 150, 243, 0.05) 30%, rgba(33, 203, 243, 0.05) 90%)",primaryHover:"linear-gradient(45deg, rgba(33, 150, 243, 0.08) 30%, rgba(33, 203, 243, 0.08) 90%)",primaryDark:"linear-gradient(45deg, rgba(33, 150, 243, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)",primaryDarkHover:"linear-gradient(45deg, rgba(33, 150, 243, 0.15) 30%, rgba(33, 203, 243, 0.15) 90%)",text:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",overlay:"linear-gradient(transparent, rgba(0,0,0,0.7))"},colors:{primary:"#2196F3",secondary:"#21CBF3",overlay:"rgba(0,0,0,0.7)",overlayLight:"rgba(0,0,0,0.3)",chipBackground:"rgba(33, 150, 243, 0.1)",chipBackgroundHover:"rgba(33, 150, 243, 0.15)",codeBackground:"rgba(0, 0, 0, 0.04)",codeBlockBackground:"rgba(0, 0, 0, 0.04)",code:"#1a1a1a"},transitions:{default:"all 0.3s ease",quick:"all 0.2s ease"},elevations:{subtle:"0 2px 4px rgba(0,0,0,0.05)",medium:"0 4px 12px rgba(0,0,0,0.1)",high:"0 8px 24px rgba(0,0,0,0.12)"}}}},e=>{var r=r=>e(e.s=r);e.O(0,[903,127,883,234,441,517,358],()=>r(85010)),_N_E=e.O()}]);