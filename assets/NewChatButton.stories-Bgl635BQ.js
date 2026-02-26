import{j as r}from"./jsx-runtime-9Zi5AnTW.js";import{S as f}from"./SparkleIcon-CIY3MwHb.js";import{N as h}from"./NewChatButton-DxQFp7M_.js";import{T as k}from"./useChatTranslation-DDuHb0UZ.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./ChatHistory.module-Cfg-qQMF.js";import"./i18n-CMj5lJeX.js";const B={title:"Components/Sidebar/NewChatButton",component:h,parameters:{layout:"padded",docs:{description:{component:"Primary action button for starting a new chat session. Uses Prism Button with configurable label, icon, disabled state, and width."}}},tags:["autodocs"],decorators:[u=>r.jsx(k,{children:r.jsx("div",{style:{width:260},children:r.jsx(u,{})})})]},o={name:"Default",args:{onClick:()=>alert("New chat clicked")}},t={name:"Custom Icon",args:{onClick:()=>alert("New chat clicked"),icon:r.jsx(f,{size:14,color:"#ffffff"})}},e={name:"Without Icon",args:{onClick:()=>alert("New chat clicked"),icon:null}};var a,c,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    onClick: () => alert('New chat clicked')
  }
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var n,i,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Custom Icon',
  args: {
    onClick: () => alert('New chat clicked'),
    icon: <SparkleIcon size={14} color="#ffffff" />
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Without Icon',
  args: {
    onClick: () => alert('New chat clicked'),
    icon: null
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const P=["Default","CustomIcon","WithoutIcon"];export{t as CustomIcon,o as Default,e as WithoutIcon,P as __namedExportsOrder,B as default};
