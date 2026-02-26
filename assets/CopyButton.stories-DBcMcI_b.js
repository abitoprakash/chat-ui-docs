import{C as m}from"./CopyButton-D7BXTTna.js";import"./jsx-runtime-9Zi5AnTW.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./useChatTranslation-DDuHb0UZ.js";import"./i18n-CMj5lJeX.js";import"./markdown-huzLI7hZ.js";const W={title:"Components/Messages/CopyButton",component:m,parameters:{layout:"centered",docs:{description:{component:"Copy-to-clipboard button for message content. Processes markdown to plain text before copying."}}},tags:["autodocs"]},e={args:{content:"This is **markdown** content that will be copied."}},o={name:"With onCopy Callback",args:{content:"**Bold text** and `inline code`",onCopy:()=>console.log("Content copied!")}},n={name:"Long Content",args:{content:`# Full Response

Here is a detailed response with:
- Multiple bullet points
- **Bold text** and *italic text*
- \`inline code\` examples

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`

| Column A | Column B |
|----------|----------|
| Value 1  | Value 2  |`}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    content: 'This is **markdown** content that will be copied.'
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,l,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'With onCopy Callback',
  args: {
    content: '**Bold text** and \`inline code\`',
    onCopy: () => console.log('Content copied!')
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Long Content',
  args: {
    content: \`# Full Response

Here is a detailed response with:
- Multiple bullet points
- **Bold text** and *italic text*
- \\\`inline code\\\` examples

\\\`\\\`\\\`python
def hello():
    print("Hello, World!")
\\\`\\\`\\\`

| Column A | Column B |
|----------|----------|
| Value 1  | Value 2  |\`
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const H=["Default","WithCallback","LongContent"];export{e as Default,n as LongContent,o as WithCallback,H as __namedExportsOrder,W as default};
