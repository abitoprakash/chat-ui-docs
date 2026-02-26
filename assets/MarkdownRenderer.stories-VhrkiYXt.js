import{j as d}from"./jsx-runtime-9Zi5AnTW.js";import{M}from"./MarkdownRenderer-DAtZwI_u.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./markdown-huzLI7hZ.js";import"./index-psvBcutn.js";const $={title:"Components/Messages/MarkdownRenderer",component:M,parameters:{layout:"padded",docs:{description:{component:"Renders markdown content with syntax highlighting, LaTeX math support, inline code copy buttons, and sanitized HTML output."}}},tags:["autodocs"],decorators:[e=>d.jsx("div",{style:{maxWidth:720,margin:"0 auto",padding:24,background:"#ffffff"},children:d.jsx(e,{})})]},t={args:{content:`As per the information directly mentioned in the context, there is no specific mention of a cluster named 'ntnx-east-01' experiencing replication failures on AHV hypervisor. However, the context provides various KB articles related to AHV and its issues, but none of them directly address the specific issue of replication failures on a cluster named 'ntnx-east-01' with Era 2.2.5.

To troubleshoot the replication failures, it would be essential to review the specific error messages and logs related to the issue, which are not provided in the given context.

Therefore, without more specific information about the error messages and logs related to the replication failures, it is challenging to provide a detailed solution. It is recommended to review the AHV logs, Era logs, and replication configuration to identify the root cause of the issue.`}},n={name:"Rich Content",args:{content:`# Heading 1

## Heading 2

### Heading 3

This is a paragraph with **bold**, *italic*, and \`inline code\` formatting.

- Unordered item 1
- Unordered item 2
  - Nested item

1. Ordered item 1
2. Ordered item 2

> This is a blockquote with some important information.

[Visit Nutanix](https://www.nutanix.com)

| Feature | Status | Notes |
|---------|--------|-------|
| Markdown | Done | Full support |
| Code Blocks | Done | With highlighting |
| Tables | Done | Responsive |

---

That's a horizontal rule above.`}},a={name:"Code Blocks",args:{content:`Here are some code examples:

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
\`\`\`

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function greet(user: User): string {
  return \`Hello, \${user.name}!\`;
}
\`\`\`

\`\`\`bash
npm install @nutanix/chat-ui
\`\`\`

And here is some \`inline code\` within a paragraph.`}},r={name:"Math / LaTeX",args:{content:`The quadratic formula is:

\\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\]

Inline math: \\(E = mc^2\\) is Einstein's famous equation.

\`\`\`math
\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}
\`\`\``}},s={name:"Streaming (Partial)",args:{content:`Based on the analysis, the replication factor should be configured as follows:

**Step 1:** Check current cluster status
\`\`\`bash
ncli cluster get-params
\`\`\`

**Step 2:** Update the replica`}},H=[{id:"Prism-Central-Guide-vpc_2024_3_1",title:"Destroying a Cluster — Prism Central Guide pc.2024.3.1",url:"https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2024_3_1:mul-destroy-cluster-pc.t.html",category:"document",visibility:"Public",tags:"Prism",version:"pc.2024.3.1"},{id:"KB1649",title:"Cluster Destroy",url:"https://portal.nutanix.com/kb/000001649",category:"KB",visibility:"Internal",tags:"Troubleshooting;Infrastructure",version:"22"},{id:"KB3436",title:"Forcibly Destroying the Cluster Using the .node_unconfigure File",url:"https://portal.nutanix.com/kb/000003436",category:"KB",visibility:"Internal",tags:"Troubleshooting",version:"26"},{id:"Advanced-Admin-AOS-v7_0",title:"Destroying a Cluster — Advanced Admin AOS 7.0",url:"https://portal.nutanix.com/page/documents/details?targetId=Advanced-Admin-AOS-v7_0:app-cluster-destroy-t.html",category:"document",visibility:"Customer",tags:"AOS",version:"7.0"},{id:"KB15268",title:"Cluster Destroy via PC: Preparatory actions",url:"https://portal.nutanix.com/kb/000015268",category:"KB",visibility:"Customer",tags:"Infrastructure",version:"2"},{id:"case-01895746",title:"destroy cluster",url:"https://portal.nutanix.com/page/smart-support/case/details?id=500VO00000Scnh9YAB",category:"case",visibility:"Internal"},{id:"Prism-Central-Guide-vpc_2024_3",title:"Destroying a Cluster — Prism Central Guide pc.2024.3",url:"https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2024_3:mul-destroy-cluster-pc.t.html",category:"document",visibility:"Public",tags:"Prism",version:"pc.2024.3"},{id:"Nutanix-Security-Guide-v7_0",title:"Destroying Data (Software Only) — Security Guide 7.0",url:"https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v7_0:wc-security-data-encryption-destroy-wc-aos-t.html",category:"document",visibility:"Public",tags:"AOS Security",version:"7.0"}],l=`**Destroying a Nutanix cluster** can be done either from **Prism Central** (GUI) or directly on a **Controller VM (CVM)** using the command‑line.  The overall flow is the same: prepare the cluster, run the destroy operation, and confirm that the task completes.

---

### 1. Prerequisites (common to both methods)

| Requirement | Details |
|------------|---------|
| **Supported versions** | Prism Element ≥ 6.8 (with recommended AHV) and Prism Central ≥ pc.2024.1 (or pc.2024.3) <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2024_3_1:mul-destroy-cluster-pc.t.html" target="_blank">¹</a> |
| **License reclamation** | All Nutanix licenses must be reclaimed before destroying the cluster <a href="https://portal.nutanix.com/kb/000015268" target="_blank">⁵</a> |
| **Cluster not hosting Prism Central** | You cannot destroy a cluster that is running a Prism Central instance <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2024_3_1:mul-destroy-cluster-pc.t.html" target="_blank">¹</a> |
| **No running VMs / services** | Power‑off all guest VMs and stop the cluster before issuing the destroy command <a href="https://portal.nutanix.com/page/documents/details?targetId=Advanced-Admin-AOS-v7_0:app-cluster-destroy-t.html" target="_blank">⁴</a> |
| **Backup / data relocation** | Ensure critical data and backups have been moved off the cluster <a href="https://portal.nutanix.com/kb/000015268" target="_blank">⁵</a> |

---

### 2. Destroy via **Prism Central** (GUI)

1. **Log in** to Prism Central.
2. Open the **Infrastructure** application from the Application Switcher <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide:mul-pc-appswitcher-c.html" target="_blank">¹</a> and navigate to **Hardware > Clusters**.
3. In the **List** tab, select the cluster you want to delete.
4. Choose **Actions > Destroy Cluster**.
5. Review the **Destroy Cluster Prerequisites** screen and click **Next**; the system runs pre‑checks.
6. In the **Destroy Cluster?** dialog, type the word **DESTROY** (all caps, case‑sensitive) and click **Destroy Cluster**.
7. The task runs in the background; you can monitor progress under **Recent Tasks** <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2024_3:mul-destroy-cluster-pc.t.html" target="_blank">⁷</a>.

---

### 3. Destroy via **CVM command line**

1. **SSH** to any CVM in the cluster.
2. **Power‑off all VMs** (optional if you have already shut them down via Prism):

   \`\`\`bash
   acli vm.off *
   \`\`\`

3. **Stop the cluster** (you will be prompted to type *I agree*):

   \`\`\`bash
   cluster stop
   \`\`\`

4. **Run the destroy command**. The basic command cleans the configuration and data:

   \`\`\`bash
   cluster destroy
   \`\`\`

   *If the normal command fails because services are still running, you can force the destroy (bypassing checks) with \`-f\`* <a href="https://portal.nutanix.com/kb/000001649" target="_blank">²</a>.

5. Confirm the prompt (type **yes** or the required confirmation). The operation will take several minutes; when it finishes the cluster is unregistered and all nodes return to the available node pool <a href="https://portal.nutanix.com/page/documents/details?targetId=Advanced-Admin-AOS-v7_0:app-cluster-destroy-t.html" target="_blank">⁴</a>.

---

### 4. Forced destroy (when normal destroy fails)

* **Force‑destroy flag** – \`cluster destroy -f\` bypasses checks for services that are still up and can be used when ZooKeeper is inaccessible <a href="https://portal.nutanix.com/kb/000001649" target="_blank">²</a>.
* **\`.node_unconfigure\` method** – Create an empty file named \`.node_unconfigure\` in \`/home/nutanix\`, remove any ZK entries from \`/etc/hosts\`, then restart Genesis. This forces the node to unconfigure and the cluster to be destroyed <a href="https://portal.nutanix.com/kb/000003436" target="_blank">³</a>.

> **Caution:** Both forced methods wipe all data irreversibly. Use only after all other options have been exhausted and you have reclaimed licenses.

---

### 5. Post‑destroy clean‑up

* After the cluster is destroyed, the nodes appear in the **available node pool** and can be added to a new cluster.
* If you reclaimed licenses manually, run the license‑reset steps described in KB 1558 and KB 5222 (referenced in the "Cluster Destroy" KB) <a href="https://portal.nutanix.com/kb/000001649" target="_blank">²</a>.

---

**In summary:**
1. Reclaim licenses and ensure no VMs/services are running.
2. Use Prism Central → Infrastructure → Clusters → Actions > Destroy Cluster (type DESTROY), **or** SSH to a CVM and run \`cluster stop\` followed by \`cluster destroy\` (add \`-f\` or use the \`.node_unconfigure\` method if needed).
3. Verify the task completes under Recent Tasks or by checking \`cluster status\`.

These steps follow the official Nutanix documentation and KB articles.`,o={name:"With Citations (Real Response)",args:{content:l,sources:H,onCitationClick:(e,E)=>{console.log(`Citation clicked: [${E}] ${e.id} — ${e.title}`),console.log(`  URL: ${e.url}`)}}},i={name:"With Citations (Default Navigation)",args:{content:l,sources:H}},c={name:"No Sources (Citations Inert)",args:{content:l}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: \`As per the information directly mentioned in the context, there is no specific mention of a cluster named 'ntnx-east-01' experiencing replication failures on AHV hypervisor. However, the context provides various KB articles related to AHV and its issues, but none of them directly address the specific issue of replication failures on a cluster named 'ntnx-east-01' with Era 2.2.5.

To troubleshoot the replication failures, it would be essential to review the specific error messages and logs related to the issue, which are not provided in the given context.

Therefore, without more specific information about the error messages and logs related to the replication failures, it is challenging to provide a detailed solution. It is recommended to review the AHV logs, Era logs, and replication configuration to identify the root cause of the issue.\`
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Rich Content',
  args: {
    content: \`# Heading 1

## Heading 2

### Heading 3

This is a paragraph with **bold**, *italic*, and \\\`inline code\\\` formatting.

- Unordered item 1
- Unordered item 2
  - Nested item

1. Ordered item 1
2. Ordered item 2

> This is a blockquote with some important information.

[Visit Nutanix](https://www.nutanix.com)

| Feature | Status | Notes |
|---------|--------|-------|
| Markdown | Done | Full support |
| Code Blocks | Done | With highlighting |
| Tables | Done | Responsive |

---

That's a horizontal rule above.\`
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Code Blocks',
  args: {
    content: \`Here are some code examples:

\\\`\\\`\\\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
\\\`\\\`\\\`

\\\`\\\`\\\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function greet(user: User): string {
  return \\\`Hello, \\\${user.name}!\\\`;
}
\\\`\\\`\\\`

\\\`\\\`\\\`bash
npm install @nutanix/chat-ui
\\\`\\\`\\\`

And here is some \\\`inline code\\\` within a paragraph.\`
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var v,x,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Math / LaTeX',
  args: {
    content: \`The quadratic formula is:

\\\\[x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}\\\\]

Inline math: \\\\(E = mc^2\\\\) is Einstein's famous equation.

\\\`\\\`\\\`math
\\\\sum_{i=1}^{n} i = \\\\frac{n(n+1)}{2}
\\\`\\\`\\\`\`
  }
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var k,T,_;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Streaming (Partial)',
  args: {
    content: \`Based on the analysis, the replication factor should be configured as follows:

**Step 1:** Check current cluster status
\\\`\\\`\\\`bash
ncli cluster get-params
\\\`\\\`\\\`

**Step 2:** Update the replica\`
  }
}`,...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var S,I,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Citations (Real Response)',
  args: {
    content: CITATION_CONTENT,
    sources: CITATION_SOURCES,
    onCitationClick: (source: Source, index: number) => {
      console.log(\`Citation clicked: [\${index}] \${source.id} — \${source.title}\`);
      console.log(\`  URL: \${source.url}\`);
    }
  }
}`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var N,P,D;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Citations (Default Navigation)',
  args: {
    content: CITATION_CONTENT,
    sources: CITATION_SOURCES
  }
}`,...(D=(P=i.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var O,R,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'No Sources (Citations Inert)',
  args: {
    content: CITATION_CONTENT
  }
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const L=["Default","RichContent","CodeBlocks","MathContent","StreamingContent","WithCitations","WithCitationsDefaultNav","NoCitations"];export{a as CodeBlocks,t as Default,r as MathContent,c as NoCitations,n as RichContent,s as StreamingContent,o as WithCitations,i as WithCitationsDefaultNav,L as __namedExportsOrder,$ as default};
