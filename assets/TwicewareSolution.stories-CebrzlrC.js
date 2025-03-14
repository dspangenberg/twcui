import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as N}from"./index-CgqZwCex.js";import"./utils-jAU0Cazi.js";const f=({appName:s="App",appWebsite:o="",copyrightYear:p=new Date().getFullYear(),hideCopyright:y=!1})=>{const n=new Date().getFullYear();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full max-w-sm mx-auto flex items-center justify-center text-sm",children:[o?e.jsx("a",{href:o,className:"font-medium hover:underline flex items-center mx-1.5 text-foreground",target:"_blank",rel:"noreferrer",children:s}):e.jsx("span",{className:"mx-1.5 font-medium",children:s}),"is a",e.jsx(N,{className:"size-5 rounded-md mx-1.5"}),e.jsx("a",{href:"https://twiceware.de",className:"font-medium hover:underline flex items-center text-foreground",target:"_blank",rel:"noreferrer",children:"twiceware solution"})]}),!y&&e.jsxs("div",{className:"text-xs text-center  mt-1 mx-auto text-foreground/80",children:["Copyright © ",p,n!==p&&`-${n}`]})]})};f.__docgenInfo={description:"",methods:[],displayName:"TwicewareSolution",props:{hideCopyright:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},appName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'App'",computed:!1}},appWebsite:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},copyrightYear:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"new Date().getFullYear()",computed:!0}}}};const j={title:"Components/TwicewareSolution",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{appWebsite:{control:"text"},appName:{control:"text"},copyrightYear:{control:"number"},hideCopyright:{control:"boolean"}}},r={args:{appWebsite:"https://example.com",appName:"Example App",hideCopyright:!1}},t={args:{appWebsite:"https://example.com",appName:"Example App",hideCopyright:!0}},a={args:{appName:"Custom App Name",copyrightYear:2023}};var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    appWebsite: 'https://example.com',
    appName: 'Example App',
    hideCopyright: false
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    appWebsite: 'https://example.com',
    appName: 'Example App',
    hideCopyright: true
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var x,g,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: 'Custom App Name',
    copyrightYear: 2023
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const A=["Primary","WithoutCopyright","CustomAppName"];export{a as CustomAppName,r as Primary,t as WithoutCopyright,A as __namedExportsOrder,j as default};
