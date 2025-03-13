import{f as V}from"./index-DhvbgntC.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DmM0KDA7.js";import{M as c}from"./index-CdHF3iJl.js";import"./clsx-B-dksMZM.js";const h="_container_183lk_1",j="_text_183lk_6",p={container:h,text:j};function T({initialValue:m=0,step:u=1,min:i=Number.NEGATIVE_INFINITY,max:l=Number.POSITIVE_INFINITY}){const[a,o]=S.useState(m),M=()=>{o(n=>Math.min(n+u,l))},g=()=>{o(n=>Math.max(n-u,i))},E=()=>{o(m)};return e.jsxs("section",{className:p.container,children:[e.jsxs("p",{className:p.text,children:["Count: ",a]}),e.jsx(c,{label:"Increment",onClick:M,disabled:a>=l}),e.jsx(c,{label:"Decrement",onClick:g,disabled:a<=i}),e.jsx(c,{label:"Reset",onClick:E,primary:!0})]})}T.__docgenInfo={description:"",methods:[],displayName:"MyCounter",props:{initialValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"Number.NEGATIVE_INFINITY",computed:!0}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"Number.POSITIVE_INFINITY",computed:!0}}}};const D={title:"Components/MyCounter",component:T,parameters:{layout:"centered"},tags:["autodocs"],args:{initialValue:0,step:1,onClick:V()}},t={},r={args:{min:0,max:10}},s={args:{step:5}};var d,f,I;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(I=(f=t.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var x,N,_;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 10
  }
}`,...(_=(N=r.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var b,y,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    step: 5
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const O=["Default","WithMinMax","CustomStep"];export{s as CustomStep,t as Default,r as WithMinMax,O as __namedExportsOrder,D as default};
