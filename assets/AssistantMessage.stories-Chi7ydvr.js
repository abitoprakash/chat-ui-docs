import{j as e}from"./jsx-runtime-9Zi5AnTW.js";import{A as m}from"./AssistantMessage-C15-qYe2.js";import{C as u}from"./CopyButton-D7BXTTna.js";import{M as p}from"./MarkdownRenderer-DAtZwI_u.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./useChatTranslation-DDuHb0UZ.js";import"./i18n-CMj5lJeX.js";import"./markdown-huzLI7hZ.js";const V={title:"Components/Messages/AssistantMessage",component:m,parameters:{layout:"padded",docs:{description:{component:"Displays an assistant message with content area and optional action buttons (e.g., CopyButton). Typically wraps a MarkdownRenderer."}}},tags:["autodocs"],decorators:[h=>e.jsx("div",{style:{maxWidth:720,margin:"0 auto",padding:24,background:"#ffffff"},children:e.jsx(h,{})})]},s=`As per the information directly mentioned in the context, there is no specific mention of a cluster named 'ntnx-east-01' experiencing replication failures on AHV hypervisor. However, the context provides various KB articles related to AHV and its issues, but none of them directly address the specific issue of replication failures on a cluster named 'ntnx-east-01' with Era 2.2.5.

To troubleshoot the replication failures, it would be essential to review the specific error messages and logs related to the issue, which are not provided in the given context. The context does mention various AHV-related issues, such as NTP synchronization problems, AHV kernel panic, and AHV upgrade issues, but these do not directly relate to the specific issue of replication failures on a cluster named 'ntnx-east-01' with Era 2.2.5.

Therefore, without more specific information about the error messages and logs related to the replication failures, it is challenging to provide a detailed solution. It is recommended to review the AHV logs, Era logs, and replication configuration to identify the root cause of the issue.`,t={args:{children:e.jsx(p,{content:s}),actions:e.jsx(u,{content:s})}},n=`A **Replication Factor (RF) 2 failure** in a Nutanix cluster means that one of the two copies of your data is unavailable. This typically happens due to a **node failure**, **disk failure**, or **network issue**. Here's how to resolve it:

### 1. Check Cluster Health

Run the following command from any CVM:

\`\`\`bash
ncc health_checks run_all
\`\`\`

This will identify the root cause — whether it's a disk, node, or network problem.

### 2. Check Data Resiliency Status

\`\`\`bash
ncli cluster get-domain-fault-tolerance-status type=node
\`\`\`

If the output shows **kDataLoss** or **kDegraded**, the cluster is actively rebuilding data.

### 3. Common Causes & Fixes

| Cause | Resolution |
|-------|-----------|
| Node offline | Restart the node or replace hardware |
| Disk failure | Replace the failed disk; cluster auto-rebuilds |
| Network partition | Fix network connectivity between CVMs |
| CVM down | Restart CVM: \`cluster start\` |

### 4. Monitor Rebuild Progress

\`\`\`bash
watch -n 5 ncli cluster get-rebuild-info
\`\`\`

> **Important:** Do not power off additional nodes during a rebuild. The cluster needs all remaining nodes to restore RF2 redundancy.

Once the rebuild completes, the cluster will return to a **healthy RF2 state**.`,o={name:"Technical Response (Code + Tables)",args:{children:e.jsx(p,{content:n}),actions:e.jsx(u,{content:n})}};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: <MarkdownRenderer content={nivaAnswer} />,
    actions: <CopyButton content={nivaAnswer} />
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Technical Response (Code + Tables)',
  args: {
    children: <MarkdownRenderer content={technicalAnswer} />,
    actions: <CopyButton content={technicalAnswer} />
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const H=["Default","TechnicalResponse"];export{t as Default,o as TechnicalResponse,H as __namedExportsOrder,V as default};
