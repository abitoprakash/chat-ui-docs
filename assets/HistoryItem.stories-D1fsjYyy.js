import{j as r}from"./jsx-runtime-9Zi5AnTW.js";import{H as S}from"./HistoryItem-PZKH1WuT.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./ChatHistory.module-Cfg-qQMF.js";import"./useChatTranslation-DDuHb0UZ.js";import"./i18n-CMj5lJeX.js";const u={id:"item-1",title:"How to upgrade AOS?",timestamp:"2m ago"},h={id:"item-2",title:"This is a very long title that should be truncated with ellipsis when it exceeds the available width of the container",timestamp:"Yesterday"},L={title:"Components/Sidebar/HistoryItem",component:S,parameters:{layout:"padded",docs:{description:{component:"Single history entry with title, relative timestamp, selected/streaming/unread states, and delete action with optional confirmation dialog."}}},tags:["autodocs"],decorators:[g=>r.jsx("div",{style:{width:260,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:r.jsx(g,{})})]},e={name:"Default",args:{item:u,onSelect:()=>{},onDelete:()=>{}}},t={name:"Selected",args:{item:u,isSelected:!0,onSelect:()=>{},onDelete:()=>{}}},o={name:"Long Title (Truncated)",args:{item:h,onSelect:()=>{},onDelete:()=>{}}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    item: defaultItem,
    onSelect: () => {},
    onDelete: () => {}
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Selected',
  args: {
    item: defaultItem,
    isSelected: true,
    onSelect: () => {},
    onDelete: () => {}
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Long Title (Truncated)',
  args: {
    item: longTitleItem,
    onSelect: () => {},
    onDelete: () => {}
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const E=["Default","Selected","LongTitle"];export{e as Default,o as LongTitle,t as Selected,E as __namedExportsOrder,L as default};
