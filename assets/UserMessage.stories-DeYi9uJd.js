import{j as r}from"./jsx-runtime-9Zi5AnTW.js";import{U as h}from"./UserMessage-C7r9Ek-j.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";const S={title:"Components/Messages/UserMessage",component:h,parameters:{layout:"padded",docs:{description:{component:"Displays a user message bubble with right-aligned styling."}}},tags:["autodocs"],decorators:[d=>r.jsx("div",{style:{maxWidth:720,margin:"0 auto",padding:24,background:"#ffffff"},children:r.jsx(d,{})})]},e={args:{content:"Cluster 'ntnx-east-01' on AHV hypervisor with Era 2.2.5 is experiencing replication failures."}},t={name:"Short Message",args:{content:"How do I configure replication factor on my cluster?"}},o={name:"Long Message",args:{content:"I am experiencing an issue with my Nutanix cluster where the replication factor seems to be incorrectly configured. The VMs are not being replicated to the secondary site and I have verified that the network connectivity between the two sites is working fine. Can you help me troubleshoot this issue and provide step-by-step guidance on how to fix the replication configuration?"}};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    content: "Cluster 'ntnx-east-01' on AHV hypervisor with Era 2.2.5 is experiencing replication failures."
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Short Message',
  args: {
    content: 'How do I configure replication factor on my cluster?'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,m,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Long Message',
  args: {
    content: 'I am experiencing an issue with my Nutanix cluster where the replication factor seems to be incorrectly configured. The VMs are not being replicated to the secondary site and I have verified that the network connectivity between the two sites is working fine. Can you help me troubleshoot this issue and provide step-by-step guidance on how to fix the replication configuration?'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["Default","ShortMessage","LongMessage"];export{e as Default,o as LongMessage,t as ShortMessage,I as __namedExportsOrder,S as default};
