import{j as n}from"./jsx-runtime-9Zi5AnTW.js";import{R as C}from"./RelatedQueries-CF9Rv8cG.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./useChatTranslation-DDuHb0UZ.js";import"./i18n-CMj5lJeX.js";const t=[{next_query:"What are the common issues related to AHV hypervisor?",relevant_doc:"KB-4521"},{next_query:"How to troubleshoot NTP synchronization problems on AHV hosts?",relevant_doc:"KB-3310"},{next_query:"What are the steps to resolve AHV kernel panic issues?"}],R={title:"Components/Sources/RelatedQueries",component:C,parameters:{layout:"padded",docs:{description:{component:"Follow-up query suggestion chips displayed below the assistant answer. Can be expanded/collapsed and disabled during streaming."}}},tags:["autodocs"],decorators:[o=>n.jsx("div",{style:{maxWidth:600,margin:"0 auto",padding:24},children:n.jsx(o,{})})]},e={args:{queries:t}},r={name:"Collapsed by Default",args:{queries:t,defaultExpanded:!1}},s={name:"Disabled (During Streaming)",args:{queries:t,disabled:!0}},a={name:"With Click Handler",args:{queries:t,onQueryClick:o=>alert(`Clicked: ${o.next_query}`)}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    queries: sampleQueries
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Collapsed by Default',
  args: {
    queries: sampleQueries,
    defaultExpanded: false
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,g,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Disabled (During Streaming)',
  args: {
    queries: sampleQueries,
    disabled: true
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,q,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With Click Handler',
  args: {
    queries: sampleQueries,
    onQueryClick: (query: RelatedQuery) => alert(\`Clicked: \${query.next_query}\`)
  }
}`,...(x=(q=a.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};const j=["Default","CollapsedByDefault","Disabled","WithClickHandler"];export{r as CollapsedByDefault,e as Default,s as Disabled,a as WithClickHandler,j as __namedExportsOrder,R as default};
