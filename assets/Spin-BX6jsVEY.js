import{G as e,S as t,h as n,n as r,nt as i,w as a}from"./vue.runtime.esm-bundler-CWe61849.js";import{H as o,U as s,ct as c,d as l,et as u,nt as d,ot as f,p,rt as m,u as h}from"./locale-path-Bpm_TZwv.js";import{r as g}from"./useLocaleRouter-6Ir3adV9.js";import{b as _,y as v}from"./index-OQY7SxPL.js";function y(e){let{opacityDisabled:t,heightTiny:n,heightSmall:r,heightMedium:i,heightLarge:a,heightHuge:o,primaryColor:s,fontSize:c}=e;return{fontSize:c,textColor:s,sizeTiny:n,sizeSmall:r,sizeMedium:i,sizeLarge:a,sizeHuge:o,color:s,opacitySpinning:t}}var b={name:`Spin`,common:h,self:y},x=d([d(`@keyframes spin-rotate`,`
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
 `)])]),S={small:20,medium:18,large:16},C=t({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},p.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),_),slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:a}=s(t),l=p(`Spin`,`-spin`,x,b,t,r),d=n(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=l.value,{opacitySpinning:i,color:a,textColor:o}=r;return{"--n-bezier":n,"--n-opacity-spinning":i,"--n-size":typeof e==`number`?u(e):r[c(`size`,e)],"--n-color":a,"--n-text-color":o}}),f=a?o(`spin`,n(()=>{let{size:e}=t;return typeof e==`number`?String(e):e[0]}),d,t):void 0,m=g(t,[`spinning`,`show`]),h=i(!1);return e(e=>{let n;if(m.value){let{delay:r}=t;if(r){n=window.setTimeout(()=>{h.value=!0},r),e(()=>{clearTimeout(n)});return}}h.value=m.value}),{mergedClsPrefix:r,active:h,mergedStrokeWidth:n(()=>{let{strokeWidth:e}=t;if(e!==void 0)return e;let{size:n}=t;return S[typeof n==`number`?`medium`:n]}),cssVars:a?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:n,description:i}=this,o=t.icon&&this.rotate,s=(i||t.description)&&a(`div`,{class:`${n}-spin-description`},i||t.description?.call(t)),c=t.icon?a(`div`,{class:[`${n}-spin-body`,this.themeClass]},a(`div`,{class:[`${n}-spin`,o&&`${n}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),s):a(`div`,{class:[`${n}-spin-body`,this.themeClass]},a(v,{clsPrefix:n,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${n}-spin`}),s);return(e=this.onRender)==null||e.call(this),t.default?a(`div`,{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},a(`div`,{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),a(r,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{C as t};