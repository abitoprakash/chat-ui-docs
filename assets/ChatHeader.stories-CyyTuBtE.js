import{j as t}from"./jsx-runtime-9Zi5AnTW.js";import{r as x}from"./index-DwAMp0GL.js";import{C as c}from"./ChatHeader-DRbm7X9V.js";import{T as p}from"./useChatTranslation-DDuHb0UZ.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./i18n-CMj5lJeX.js";const j={title:"Components/Core/ChatHeader",component:c,parameters:{layout:"padded",docs:{description:{component:"Header bar with customizable title (via i18n), sidebar toggle button, and close button. Title text is driven by the header.title translation key."}}},tags:["autodocs"]},e={args:{isSidebarExpanded:!0,onSidebarToggle:()=>{},onClose:()=>alert("Close clicked")},decorators:[a=>t.jsx(p,{translations:{"header.title":"NIVA"},children:t.jsx(a,{})})]},r={name:"Interactive Toggle",render:()=>{const[a,m]=x.useState(!0);return t.jsx(p,{translations:{"header.title":"NIVA"},children:t.jsx(c,{isSidebarExpanded:a,onSidebarToggle:()=>m(u=>!u),onClose:()=>alert("Close clicked")})})}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isSidebarExpanded: true,
    onSidebarToggle: () => {},
    onClose: () => alert('Close clicked')
  },
  decorators: [Story => <TranslationProvider translations={{
    'header.title': 'NIVA'
  }}>
        <Story />
      </TranslationProvider>]
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Interactive Toggle',
  render: () => {
    const [expanded, setExpanded] = useState(true);
    return <TranslationProvider translations={{
      'header.title': 'NIVA'
    }}>
        <ChatHeader isSidebarExpanded={expanded} onSidebarToggle={() => setExpanded(prev => !prev)} onClose={() => alert('Close clicked')} />
      </TranslationProvider>;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const k=["Default","Interactive"];export{e as Default,r as Interactive,k as __namedExportsOrder,j as default};
