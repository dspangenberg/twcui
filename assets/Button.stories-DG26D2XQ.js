import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{S as oe}from"./index-H4xlWPiK.js";import{a as ie,c as le}from"./utils-jAU0Cazi.js";import{r as v}from"./index-DmM0KDA7.js";const C=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,L=ie,de=(t,a)=>e=>{var r;if((a==null?void 0:a.variants)==null)return L(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:o,defaultVariants:n}=a,u=Object.keys(o).map(s=>{const i=e==null?void 0:e[s],m=n==null?void 0:n[s];if(i===null)return null;const d=C(i)||C(m);return o[s][d]}),l=e&&Object.entries(e).reduce((s,i)=>{let[m,d]=i;return d===void 0||(s[m]=d),s},{}),c=a==null||(r=a.compoundVariants)===null||r===void 0?void 0:r.reduce((s,i)=>{let{class:m,className:d,...ne}=i;return Object.entries(ne).every(se=>{let[S,B]=se;return Array.isArray(B)?B.includes({...n,...l}[S]):{...n,...l}[S]===B})?[...s,m,d]:s},[]);return L(t,u,c,e==null?void 0:e.class,e==null?void 0:e.className)},ue=de("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 active:bg-primary/80",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 active:bg-accent/80",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function ae({className:t,variant:a,size:e,asChild:r=!1,...o}){const n=r?oe:"button";return w.jsx(n,{"data-slot":"button",className:le(ue({variant:a,size:e,className:t})),...o})}ae.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),te=(...t)=>t.filter((a,e,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===e).join(" ").trim();/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var me={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=v.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:e=2,absoluteStrokeWidth:r,className:o="",children:n,iconNode:u,...l},c)=>v.createElement("svg",{ref:c,...me,width:a,height:a,stroke:t,strokeWidth:r?Number(e)*24/Number(a):e,className:te("lucide",o),...l},[...u.map(([s,i])=>v.createElement(s,i)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(t,a)=>{const e=v.forwardRef(({className:r,...o},n)=>v.createElement(ve,{ref:n,iconNode:a,className:te(`lucide-${ce(t)}`,r),...o}));return e.displayName=`${t}`,e};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],pe=fe("LoaderCircle",ge);function re({variant:t="default",size:a="default",type:e="button",loading:r=!1,className:o="",asChild:n=!1,children:u,...l}){const c=r||l.disabled;return w.jsxs(ae,{className:o,variant:t,size:a,disabled:c,type:e,...l,children:[r&&w.jsx(pe,{className:"-ms-1 animate-spin",size:16,"aria-hidden":"true"}),u]})}re.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'sm' | 'lg' | 'icon'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const ke={title:"Components/Button",component:re,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg","icon"]},onClick:{action:"clicked"}}},f={args:{variant:"default",size:"default",children:"Primary Button"}},g={args:{variant:"default",size:"default",disabled:!0,children:"Primary Button"}},p={args:{variant:"default",size:"default",loading:!0,children:"Primary Button"}},h={args:{variant:"secondary",size:"default",children:"Secondary Button"}},y={args:{variant:"default",size:"lg",children:"Large Button"}},b={args:{variant:"default",size:"sm",children:"Small Button"}},x={args:{variant:"outline",size:"default",children:"Outline Button"}},k={args:{variant:"ghost",size:"default",children:"Ghost Button"}},z={args:{variant:"link",size:"default",children:"Link Button"}};var N,V,_;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    children: 'Primary Button'
  }
}`,...(_=(V=f.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var j,O,P;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    children: 'Primary Button'
  }
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var T,q,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    loading: true,
    children: 'Primary Button'
  }
}`,...(R=(q=p.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var A,E,$;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary Button'
  }
}`,...($=(E=h.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var G,I,D;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Button'
  }
}`,...(D=(I=y.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var K,W,M;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Button'
  }
}`,...(M=(W=b.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var U,Z,F;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button'
  }
}`,...(F=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};var H,J,Q;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button'
  }
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,ee;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button'
  }
}`,...(ee=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const ze=["Primary","Disabled","Loading","Secondary","Large","Small","Outline","Ghost","Link"];export{g as Disabled,k as Ghost,y as Large,z as Link,p as Loading,x as Outline,f as Primary,h as Secondary,b as Small,ze as __namedExportsOrder,ke as default};
