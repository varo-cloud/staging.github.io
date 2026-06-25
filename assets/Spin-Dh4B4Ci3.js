import{C as e,K as t,T as n,g as r,r as i,rt as a}from"./vue-i18n-DMHcr8bP.js";import{H as o,U as s,ct as c,d as l,et as u,nt as d,ot as f,p,rt as m,u as h}from"./locale-path-Dhy0aWu7.js";import{r as g}from"./useLocaleRouter-BpublmgN.js";import{v as _,y as v}from"./index-32OMlILj.js";function y(e){let{opacityDisabled:t,heightTiny:n,heightSmall:r,heightMedium:i,heightLarge:a,heightHuge:o,primaryColor:s,fontSize:c}=e;return{fontSize:c,textColor:s,sizeTiny:n,sizeSmall:r,sizeMedium:i,sizeLarge:a,sizeHuge:o,color:s,opacitySpinning:t}}var b={name:`Spin`,common:h,self:y},x=d([d(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),m(`spin-container`,`
 position: relative;
 `,[m(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[l()])]),m(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),m(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[f(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),m(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),m(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[f(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),S={small:20,medium:18,large:16},C=e({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},p.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),v),slots:Object,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:i}=s(e),l=p(`Spin`,`-spin`,x,b,e,n),d=r(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=l.value,{opacitySpinning:i,color:a,textColor:o}=r;return{"--n-bezier":n,"--n-opacity-spinning":i,"--n-size":typeof t==`number`?u(t):r[c(`size`,t)],"--n-color":a,"--n-text-color":o}}),f=i?o(`spin`,r(()=>{let{size:t}=e;return typeof t==`number`?String(t):t[0]}),d,e):void 0,m=g(e,[`spinning`,`show`]),h=a(!1);return t(t=>{let n;if(m.value){let{delay:r}=e;if(r){n=window.setTimeout(()=>{h.value=!0},r),t(()=>{clearTimeout(n)});return}}h.value=m.value}),{mergedClsPrefix:n,active:h,mergedStrokeWidth:r(()=>{let{strokeWidth:t}=e;if(t!==void 0)return t;let{size:n}=e;return S[typeof n==`number`?`medium`:n]}),cssVars:i?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:r,description:a}=this,o=t.icon&&this.rotate,s=(a||t.description)&&n(`div`,{class:`${r}-spin-description`},a||t.description?.call(t)),c=t.icon?n(`div`,{class:[`${r}-spin-body`,this.themeClass]},n(`div`,{class:[`${r}-spin`,o&&`${r}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),s):n(`div`,{class:[`${r}-spin-body`,this.themeClass]},n(_,{clsPrefix:r,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),s);return(e=this.onRender)==null||e.call(this),t.default?n(`div`,{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},n(`div`,{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),n(i,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{C as t};