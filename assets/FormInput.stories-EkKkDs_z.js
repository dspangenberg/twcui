import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-DmM0KDA7.js";import{F as I}from"./index-D_Ouz3qR.js";import{c as j}from"./utils-jAU0Cazi.js";import"./index-DLLQmerD.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./index-H4xlWPiK.js";function E({className:t,type:r,...a}){return e.jsx("input",{type:r,"data-slot":"input",className:j("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...a})}E.__docgenInfo={description:"",methods:[],displayName:"Input"};const l=({ref:t,type:r="text",required:a=!1,className:o="",help:u="",label:m,error:M,...d})=>{const q=!!M;return e.jsxs("div",{className:"space-y-2",children:[m&&e.jsxs(I,{htmlFor:d.name,required:a,children:[m,":"]}),e.jsx(E,{name:d.id,...d,type:r,className:o,"aria-invalid":q}),u&&e.jsx("div",{className:"text-sm font-normal text-gray-600",children:u})]})};l.displayName="FormInput";l.__docgenInfo={description:"",methods:[],displayName:"FormInput",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};const B={title:"Components/FormInput",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},i={render:t=>{const[r,a]=w.useState("danny.spangenberg@twiceware.de");return e.jsx("div",{children:e.jsx(l,{id:"mail",name:"mail",value:r,onChange:o=>a(o.target.value),...t})})},args:{label:"E-Mail",required:!0}},n={args:{label:"E-Mail",value:"danny.spangenberg@twiceware.de",required:!0,error:"Bitte eine gültige E-Mail-Adresse eingeben."}},s={args:{label:"E-Mail",required:!0,help:"Bitte eine gültige E-Mail-Adresse eingeben."}};var p,c,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [mail, setMail] = useState('danny.spangenberg@twiceware.de');
    return <div>
        <FormInput id="mail" name="mail" value={mail} onChange={e => setMail(e.target.value)} {...args} />
      </div>;
  },
  args: {
    label: 'E-Mail',
    required: true
  }
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var f,b,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'E-Mail',
    value: 'danny.spangenberg@twiceware.de',
    required: true,
    error: 'Bitte eine gültige E-Mail-Adresse eingeben.'
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,y,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'E-Mail',
    required: true,
    help: 'Bitte eine gültige E-Mail-Adresse eingeben.'
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const L=["Playground","WithError","WithHelp"];export{i as Playground,n as WithError,s as WithHelp,L as __namedExportsOrder,B as default};
