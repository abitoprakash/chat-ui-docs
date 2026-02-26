import{j as r}from"./jsx-runtime-9Zi5AnTW.js";import{G as x}from"./Greeting-Bh9E91I8.js";import{T as d}from"./useChatTranslation-DDuHb0UZ.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./i18n-CMj5lJeX.js";const P={title:"Components/Content/Greeting",component:x,parameters:{layout:"centered",docs:{description:{component:"Welcome screen with avatar, title, subtitle, and optional learn more link. All text content is driven by i18n translation keys."}}},tags:["autodocs"]},h=()=>r.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#6366f1",children:r.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),e={args:{}},a={name:"NIVA Design",decorators:[t=>r.jsx(d,{translationParams:{userName:", Joseph"},translations:{"greeting.subtitle":"I can help you with common IT tasks including managing VMs, storage, networking, and troubleshooting. I can also assist with general questions about Nutanix products.","greeting.learnMoreText":"Learn more"},children:r.jsx(t,{})})],args:{avatar:r.jsx(h,{}),learnMoreUrl:"https://nutanix.com/niva"}},v={"greeting.title":"Bonjour{{userName}}","greeting.subtitle":"Comment puis-je vous aider aujourd'hui?","greeting.learnMoreText":"En savoir plus","disclaimer.text":"Les réponses générées par l'IA peuvent contenir des erreurs."},n={decorators:[t=>r.jsx(d,{translations:v,translationParams:{userName:", Marie"},children:r.jsx(t,{})})],args:{avatar:r.jsx(h,{})}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'NIVA Design',
  decorators: [Story => <TranslationProvider translationParams={{
    userName: ', Joseph'
  }} translations={{
    'greeting.subtitle': 'I can help you with common IT tasks including managing VMs, storage, networking, and troubleshooting. I can also assist with general questions about Nutanix products.',
    'greeting.learnMoreText': 'Learn more'
  }}>
        <Story />
      </TranslationProvider>],
  args: {
    avatar: <StarIcon />,
    learnMoreUrl: 'https://nutanix.com/niva'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <TranslationProvider translations={frenchTranslations} translationParams={{
    userName: ', Marie'
  }}>
        <Story />
      </TranslationProvider>],
  args: {
    avatar: <StarIcon />
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const L=["Default","NIVAStyle","FrenchTranslations"];export{e as Default,n as FrenchTranslations,a as NIVAStyle,L as __namedExportsOrder,P as default};
