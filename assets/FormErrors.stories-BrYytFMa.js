import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DmM0KDA7.js";const v=[["path",{d:"M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z",stroke:"currentColor",strokeWidth:"1.5",key:"0"}],["path",{d:"M11.992 16H12.001",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",key:"1"}],["path",{d:"M12 13L12 8.99997",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},E=(n,r)=>{const t=o.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:c,absoluteStrokeWidth:f=!1,className:x="",altIcon:l,showAlt:k=!1,icon:Z,...y},C)=>{const d=c!==void 0?f?Number(c)*24/Number(s):c:void 0,b={ref:C,...N,width:s,height:s,color:a,className:x,...d!==void 0&&{strokeWidth:d,stroke:"currentColor"},...y},j=(k&&l?l:r).map(([w,m])=>o.createElement(w,{...m,key:m.key}));return o.createElement("svg",b,j)});return t.displayName=`${n}Icon`,t},P=n=>{const r=o.useMemo(()=>E("HugeiconsIcon",n.icon),[n.icon]);return e.jsx(r,{...n})},g=({errors:n,title:r="Das hat leider nicht funktioniert."})=>{const t=o.useMemo(()=>n?Object.values(n):[],[n]);return t.length===0?null:e.jsx(e.Fragment,{children:e.jsx("div",{className:"rounded-lg border border-red-500/50 px-4 py-3 text-red-600",role:"alert",children:e.jsxs("div",{className:"flex gap-3 flex-col",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"flex-none",children:e.jsx(P,{icon:v,size:24,color:"currentColor",className:"mt-0.5 shrink-0 opacity-60 motion-rotate-loop-[6deg] motion-loop-once motion-ease-spring-bounciest",strokeWidth:3})}),e.jsx("div",{className:"text-base font-medium flex-1",children:r})]}),e.jsx("div",{className:"grow space-y-1",children:e.jsx("ul",{className:"list-inside list-disc text-sm opacity-80 pl-9 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md",children:t.map((a,s)=>e.jsx("li",{children:a},s))})})]})})})};g.__docgenInfo={description:"",methods:[],displayName:"FormErrors",props:{errors:{required:!0,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Partial<Record<string, string>>"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Das hat leider nicht funktioniert.'",computed:!1}}}};const L={title:"Components/FormErrors",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},i={args:{title:"Es ist ein Fehler aufgetreten.",errors:{username:"Benutzername muss mindestens 5 Zeichen lang sein.",password:"Passwort muss mindestens 8 Zeichen lang sein und enthalten mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl und ein Sonderzeichen."}}};var u,h,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Es ist ein Fehler aufgetreten.',
    errors: {
      username: 'Benutzername muss mindestens 5 Zeichen lang sein.',
      password: 'Passwort muss mindestens 8 Zeichen lang sein und enthalten mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl und ein Sonderzeichen.'
    }
  }
}`,...(p=(h=i.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const R=["Primary"];export{i as Primary,R as __namedExportsOrder,L as default};
