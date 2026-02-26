import{j as e}from"./jsx-runtime-9Zi5AnTW.js";import{useMDXComponents as s}from"./index-2r9PR1IS.js";import{M as d}from"./index-C3YC1HX9.js";import"./index-DwAMp0GL.js";import"./iframe-CaGeVnLy.js";import"./index-psvBcutn.js";import"./index-CjRs4yQt.js";import"./index-DrFu-skq.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{title:"Documentation/Plugins"}),`
`,e.jsxs(n.h1,{id:"plugins-future-scope",children:["Plugins ",e.jsx("span",{style:{background:"#fef3c7",border:"1px solid #f59e0b",borderRadius:"4px",padding:"2px 8px",fontSize:"12px",fontWeight:600,verticalAlign:"middle",marginLeft:"8px"},children:"Future Scope"})]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer",marginBottom:"12px"},children:"Table of Contents"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#why-plugins",children:"Why Plugins?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#what-are-plugins",children:"What Are Plugins?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#extension-points",children:"Extension Points"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#built-in-plugins",children:"Built-in Plugins"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#creating-custom-plugins",children:"Creating Custom Plugins"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#multiple-plugins",children:"Multiple Plugins"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#plugin-component-context",children:"Plugin Component Context"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#custom-layouts-with-plugins",children:"Custom Layouts with Plugins"})}),`
`]})]}),`
`,e.jsxs(n.p,{children:["The ChatWidget supports a ",e.jsx(n.strong,{children:"plugin system"})," that lets consumers inject custom UI at specific positions within the widget layout. The library ships built-in plugins (like feedback) that you opt into, and you can create your own plugins for domain-specific features."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"why-plugins",children:"Why Plugins?"}),`
`,e.jsxs(n.p,{children:['Without plugins, the ChatWidget renders a fixed set of components in a fixed order. If you want to add a feedback widget, a "related courses" section, or any other custom content, your only option is to replace the entire layout using the ',e.jsx(n.code,{children:"children"})," prop — rebuilding everything from scratch."]}),`
`,e.jsxs(n.p,{children:["Plugins solve this by providing ",e.jsx(n.strong,{children:"extension points"}),": named positions in the layout where you can inject content without touching the rest of the UI."]}),`
`,e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",padding:"20px 0"},children:[e.jsxs("div",{style:{border:"2px solid #dc2626",borderRadius:"8px",padding:"12px 16px",textAlign:"center",minWidth:"160px"},children:[e.jsx("strong",{style:{display:"block",fontSize:"14px"},children:"Without Plugins"}),e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"Fixed layout, no injection"})]}),e.jsx("span",{style:{fontSize:"20px",color:"#9ca3af"},children:"vs"}),e.jsxs("div",{style:{border:"2px solid #16a34a",borderRadius:"8px",padding:"12px 16px",textAlign:"center",minWidth:"160px"},children:[e.jsx("strong",{style:{display:"block",fontSize:"14px"},children:"With Plugins"}),e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"Add content at defined points"})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"what-are-plugins",children:"What Are Plugins?"}),`
`,e.jsx(n.p,{children:"A plugin is a simple object with four fields:"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Field"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Type"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"string"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Unique identifier for the plugin"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"name"})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"string"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Human-readable name"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"target"})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"ExtensionPointId"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Where the plugin renders (see Extension Points below)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"component"})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"React.ComponentType"}),e.jsx("td",{style:{padding:"8px 12px"},children:"The React component to render at the target position"})]})]})]}),`
`,e.jsx(n.p,{children:"The TypeScript interface:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ChatPlugin {
  id: string;
  name: string;
  target: ExtensionPointId;
  component: React.ComponentType<ExtensionContext>;
}
`})}),`
`,e.jsx(n.h3,{id:"how-it-works",children:"How It Works"}),`
`,e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",padding:"20px 0"},children:[e.jsxs("div",{style:{border:"2px solid #2a60e4",borderRadius:"8px",padding:"12px 16px",textAlign:"center",minWidth:"140px"},children:[e.jsx("strong",{style:{display:"block",fontSize:"14px"},children:"1. Define Plugin"}),e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"Create the object"})]}),e.jsx("span",{style:{fontSize:"20px",color:"#9ca3af"},children:"→"}),e.jsxs("div",{style:{border:"2px solid #2a60e4",borderRadius:"8px",padding:"12px 16px",textAlign:"center",minWidth:"140px"},children:[e.jsx("strong",{style:{display:"block",fontSize:"14px"},children:"2. Pass to Widget"}),e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"plugins={[...]}"})]}),e.jsx("span",{style:{fontSize:"20px",color:"#9ca3af"},children:"→"}),e.jsxs("div",{style:{border:"2px solid #2a60e4",borderRadius:"8px",padding:"12px 16px",textAlign:"center",minWidth:"140px"},children:[e.jsx("strong",{style:{display:"block",fontSize:"14px"},children:"3. Auto-Rendered"}),e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"At the target position"})]})]}),`
`,e.jsx(n.p,{children:"Each plugin targets exactly one extension point. If a feature needs to render in multiple positions, register separate plugins (one per position)."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"extension-points",children:"Extension Points"}),`
`,e.jsxs(n.p,{children:["Extension points are named positions in the layout where plugins can inject content. There are ",e.jsx(n.strong,{children:"12 extension points"})," across 5 layout scopes. The diagrams below show exactly where each one renders."]}),`
`,e.jsx("div",{style:{fontSize:"12px",color:"#6b7280",marginBottom:"16px"},children:e.jsxs(n.p,{children:[e.jsx("span",{style:{border:"2px dashed #ea580c",borderRadius:"3px",padding:"1px 6px",fontSize:"11px",color:"#ea580c",fontWeight:600,marginRight:"6px"},children:"Dashed orange"})," = Extension point where plugins render"]})}),`
`,e.jsx(n.h3,{id:"fullscreen--chat-mode",children:"Fullscreen / Chat Mode"}),`
`,e.jsxs("div",{style:{border:"2px solid #d5dae0",borderRadius:"8px",overflow:"hidden",fontSize:"13px",maxWidth:"720px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",borderBottom:"2px solid #d5dae0",background:"#f9fafb"},children:[e.jsx("div",{style:{width:"30px"}}),e.jsx("strong",{children:"NIVA"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"2px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600},children:"HEADER:ACTIONS"}),e.jsx("span",{style:{fontSize:"16px",color:"#9ca3af"},children:"☰ ✕"})]})]}),e.jsxs("div",{style:{display:"flex",minHeight:"440px"},children:[e.jsxs("div",{style:{width:"200px",borderRight:"2px solid #d5dae0",display:"flex",flexDirection:"column",background:"#f9fafb"},children:[e.jsx("div",{style:{padding:"10px 12px",fontWeight:600,borderBottom:"1px solid #e8eaed"},children:"Chat History"}),e.jsx("div",{style:{padding:"8px 12px"},children:e.jsx("div",{style:{background:"#2a60e4",color:"white",borderRadius:"6px",padding:"6px 12px",textAlign:"center",fontSize:"12px",fontWeight:600},children:"New Chat +"})}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",margin:"4px 8px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center"},children:"SIDEBAR:TOP"}),e.jsxs("div",{style:{flex:1,padding:"4px 12px"},children:[e.jsx("div",{style:{padding:"6px 0",borderBottom:"1px solid #e8eaed",fontSize:"12px",color:"#4b5563"},children:"Auto-generated title..."}),e.jsx("div",{style:{padding:"6px 0",borderBottom:"1px solid #e8eaed",fontSize:"12px",color:"#4b5563"},children:"Auto-generated title..."})]}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",margin:"4px 8px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center"},children:"SIDEBAR:BOTTOM"}),e.jsx("div",{style:{padding:"8px 12px",borderTop:"1px solid #e8eaed",fontSize:"11px",color:"#6b7280"},children:"ℹ Unsaved chats are kept for 60 days"})]}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{flex:1,padding:"16px",overflow:"auto"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"16px"},children:e.jsx("div",{style:{background:"#2a60e4",color:"white",borderRadius:"12px 12px 0 12px",padding:"8px 14px",maxWidth:"70%",fontSize:"12px"},children:"How do I troubleshoot AHV replication?"})}),e.jsxs("div",{style:{border:"1px solid #e8eaed",borderRadius:"8px",padding:"12px",marginBottom:"12px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#4b5563",marginBottom:"8px"},children:"✦ 3 Steps · 5 Sources ›"}),e.jsx("div",{style:{fontSize:"12px",color:"#1f2937",marginBottom:"8px",lineHeight:1.5},children:"As per the information directly mentioned in the context, there is no specific mention of..."}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"},children:[e.jsx("span",{style:{fontSize:"11px",color:"#6b7280"},children:"📋 Copy"}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"2px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600},children:"MESSAGE:ACTIONS"})]}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center",marginBottom:"8px"},children:"MESSAGE:AFTER_CONTENT"}),e.jsx("div",{style:{fontSize:"12px",color:"#4b5563",marginBottom:"4px"},children:"▸ Related Queries"}),e.jsx("div",{style:{fontSize:"12px",color:"#4b5563",marginBottom:"8px"},children:"▾ Sources"}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center",marginBottom:"8px"},children:"MESSAGE:AFTER_SOURCES"}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center"},children:"MESSAGE:FOOTER"})]})]}),e.jsxs("div",{style:{borderTop:"1px solid #e8eaed",padding:"8px 16px"},children:[e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center",marginBottom:"6px"},children:"CHAT:BEFORE_INPUT"}),e.jsx("div",{style:{border:"1px solid #d5dae0",borderRadius:"8px",padding:"10px 14px",fontSize:"12px",color:"#9ca3af",marginBottom:"6px"},children:"Define your questions well to get a better answer."}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center",marginBottom:"6px"},children:"CHAT:AFTER_INPUT"}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",textAlign:"center"},children:"Niva can make mistakes, so double-check it."})]})]})]})]}),`
`,e.jsx(n.h3,{id:"inline-mode",children:"Inline Mode"}),`
`,e.jsxs("div",{style:{border:"2px solid #d5dae0",borderRadius:"8px",overflow:"hidden",fontSize:"13px",maxWidth:"560px",padding:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"12px"},children:[e.jsx("span",{style:{color:"#2a60e4"},children:"✦"}),e.jsx("strong",{style:{fontSize:"13px"},children:"AI generated answer"})]}),e.jsx("div",{style:{fontSize:"12px",color:"#1f2937",lineHeight:1.6,marginBottom:"12px"},children:e.jsx(n.p,{children:'As per the information directly mentioned in the context, there is no specific mention of "NVMe Drive Worn Failure". However, the context does discuss NVMe drive failure scenarios...'})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"12px"},children:[e.jsx("span",{style:{fontSize:"11px",color:"#6b7280"},children:"📋 Copy"}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"2px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600},children:"INLINE:ACTIONS"})]}),e.jsxs("div",{style:{marginBottom:"8px"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:600,marginBottom:"4px"},children:"▸ Related Queries"}),e.jsx("div",{style:{fontSize:"12px",color:"#4b5563",paddingLeft:"12px"},children:"What are the common issues related to AHV?"})]}),e.jsx("div",{style:{marginBottom:"8px"},children:e.jsx("div",{style:{fontSize:"12px",fontWeight:600,marginBottom:"4px"},children:"▾ Sources"})}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center",marginBottom:"10px"},children:"INLINE:AFTER_SOURCES"}),e.jsx("div",{style:{border:"1px solid #d5dae0",borderRadius:"8px",padding:"8px 14px",fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:"Ask a followup question"}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",textAlign:"center",marginBottom:"10px"},children:"Niva can make mistakes, so double-check it."}),e.jsx("div",{style:{border:"2px dashed #ea580c",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",color:"#ea580c",fontWeight:600,textAlign:"center"},children:"INLINE:FOOTER"})]}),`
`,e.jsx(n.h3,{id:"extension-point-reference",children:"Extension Point Reference"}),`
`,e.jsx(n.h4,{id:"header-level",children:"Header-level"}),`
`,e.jsxs(n.p,{children:["Rendered ",e.jsx(n.strong,{children:"once"})," in the header bar (fullscreen and chat modes)."]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Extension Point"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Position"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Example Use"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"HEADER:ACTIONS"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"In the header bar, next to sidebar toggle and close buttons"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Custom header buttons, status indicators"})]})})]}),`
`,e.jsx(n.h4,{id:"sidebar-level",children:"Sidebar-level"}),`
`,e.jsxs(n.p,{children:["Rendered ",e.jsx(n.strong,{children:"once"})," in the sidebar panel (fullscreen mode only)."]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Extension Point"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Position"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Example Use"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"SIDEBAR:TOP"})}),e.jsx("td",{style:{padding:"8px 12px"},children:'After "New Chat" button, before the history list'}),e.jsx("td",{style:{padding:"8px 12px"},children:"Search/filter bar, pinned items"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"SIDEBAR:BOTTOM"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"After the history list, before the info banner"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Settings link, user profile"})]})]})]}),`
`,e.jsx(n.h4,{id:"message-level",children:"Message-level"}),`
`,e.jsxs(n.p,{children:["Rendered ",e.jsx(n.strong,{children:"per completed assistant message"}),". Plugin components receive the message data as props."]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Extension Point"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Position"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Example Use"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"MESSAGE:ACTIONS"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Inside the actions bar, after CopyButton"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Feedback thumbs up/down, share button"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"MESSAGE:AFTER_CONTENT"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"After the message text, before sources"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Custom annotations, quality badges"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"MESSAGE:AFTER_SOURCES"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"After SourceList, before RelatedQueries"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Related courses, custom content blocks"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"MESSAGE:FOOTER"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"After everything in the message group"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Full-width sections, dividers"})]})]})]}),`
`,e.jsx(n.h4,{id:"chat-level",children:"Chat-level"}),`
`,e.jsxs(n.p,{children:["Rendered ",e.jsx(n.strong,{children:"once per chat session"})," in fullscreen and chat modes."]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Extension Point"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Position"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Example Use"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"CHAT:BEFORE_INPUT"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Before the ChatInput component"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Quick action chips, suggestions"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"CHAT:AFTER_INPUT"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"After ChatInput, before Disclaimer"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Character counter, upload button"})]})]})]}),`
`,e.jsx(n.h4,{id:"inline-level",children:"Inline-level"}),`
`,e.jsxs(n.p,{children:["Rendered in ",e.jsx(n.strong,{children:"inline mode"})," (search result pages)."]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Extension Point"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Position"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Example Use"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"INLINE:ACTIONS"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"After answer, in the actions area"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Feedback for inline mode"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"INLINE:AFTER_SOURCES"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"After the SourceList"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Related content sections"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:e.jsx("code",{children:"INLINE:FOOTER"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"After Disclaimer, at the very bottom"}),e.jsx("td",{style:{padding:"8px 12px"},children:"Custom footer"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"built-in-plugins",children:"Built-in Plugins"}),`
`,e.jsx(n.h3,{id:"feedback-widget-plugin",children:"Feedback Widget Plugin"}),`
`,e.jsxs(n.p,{children:["The library ships a ",e.jsx(n.code,{children:"FeedbackWidgetPlugin"})," factory that renders thumbs up and thumbs down buttons in the message actions bar. Consumers provide a callback to handle the feedback submission."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChatWidget, FeedbackWidgetPlugin } from '@nutanix/chat-ui';

<ChatWidget
  api={{
    baseUrl: 'https://my-api.example.com',
    getAuthToken: async () => myToken,
  }}
  plugins={[
    FeedbackWidgetPlugin({
      onFeedback: (messageId, sessionId, feedback) => {
        // feedback is 'positive', 'negative', or null (undo)
        fetch('/api/feedback', {
          method: 'POST',
          body: JSON.stringify({ messageId, sessionId, feedback }),
        });
      },
    })
  ]}
/>
`})}),`
`,e.jsxs(n.p,{children:["The feedback state is managed locally per message. The plugin does not persist state — your ",e.jsx(n.code,{children:"onFeedback"})," handler is responsible for saving it to your backend."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"creating-custom-plugins",children:"Creating Custom Plugins"}),`
`,e.jsx(n.p,{children:'You can create plugins for any domain-specific feature. Here is a step-by-step example of a "Related Courses" plugin for Nutanix University.'}),`
`,e.jsx(n.h3,{id:"step-1-define-the-component",children:"Step 1: Define the component"}),`
`,e.jsx(n.p,{children:"Your component receives the extension point context as props. It also has access to all library hooks since it renders inside the widget's provider tree."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { MessageExtensionContext } from '@nutanix/chat-ui';

function RelatedCourses({ message }: MessageExtensionContext) {
  const courses = useRelatedCourses(message.content);

  if (!courses.length) return null;

  return (
    <div style={{ padding: '12px 0' }}>
      <h4>Related Courses</h4>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <a href={course.url}>{course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"step-2-create-the-plugin-object",children:"Step 2: Create the plugin object"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { ChatPlugin } from '@nutanix/chat-ui';

const RelatedCoursesPlugin: ChatPlugin = {
  id: 'ntnx-university/related-courses',
  name: 'Related Courses',
  target: 'MESSAGE:AFTER_SOURCES',
  component: RelatedCourses,
};
`})}),`
`,e.jsx(n.h3,{id:"step-3-pass-it-to-chatwidget",children:"Step 3: Pass it to ChatWidget"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChatWidget, FeedbackWidgetPlugin } from '@nutanix/chat-ui';

<ChatWidget
  api={apiConfig}
  plugins={[
    FeedbackWidgetPlugin({ onFeedback: handleFeedback }),
    RelatedCoursesPlugin,
  ]}
/>
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"RelatedCourses"})," component will render after the SourceList in every completed assistant message."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," If your plugin component returns ",e.jsx(n.code,{children:"null"}),", nothing is rendered and no empty space is added. This makes it safe to conditionally show content."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"multiple-plugins",children:"Multiple Plugins"}),`
`,e.jsxs(n.p,{children:["You can register any number of plugins. Multiple plugins can target the same extension point — they render in the order they appear in the ",e.jsx(n.code,{children:"plugins"})," array."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ChatWidget
  api={apiConfig}
  plugins={[
    FeedbackWidgetPlugin({ onFeedback }),    // MESSAGE:ACTIONS — renders first
    ShareWidgetPlugin({ onShare }),           // MESSAGE:ACTIONS — renders second
    RelatedCoursesPlugin,                     // MESSAGE:AFTER_SOURCES
    CustomFooterPlugin,                       // MESSAGE:FOOTER
  ]}
/>
`})}),`
`,e.jsxs(n.p,{children:["In this example, the actions bar will show: ",e.jsx(n.strong,{children:"Copy"})," (built-in), then ",e.jsx(n.strong,{children:"Feedback"})," (first plugin), then ",e.jsx(n.strong,{children:"Share"})," (second plugin)."]}),`
`,e.jsx(n.p,{children:"To remove a plugin, simply remove it from the array. To reorder, change the array order."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"plugin-component-context",children:"Plugin Component Context"}),`
`,e.jsx(n.p,{children:"Plugin components receive context props based on where they render. This tells your component about the current message or session without having to look it up manually."}),`
`,e.jsx(n.h3,{id:"message-level-context",children:"Message-level context"}),`
`,e.jsxs(n.p,{children:["Plugins targeting ",e.jsx(n.code,{children:"MESSAGE:*"})," or ",e.jsx(n.code,{children:"INLINE:*"})," extension points receive:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface MessageExtensionContext {
  message: Message;    // The full message object (id, content, sources, etc.)
  sessionId: string;   // The active session ID
  isStreaming: boolean; // Whether this message is still streaming
}
`})}),`
`,e.jsx(n.h3,{id:"chat-level-context",children:"Chat-level context"}),`
`,e.jsxs(n.p,{children:["Plugins targeting ",e.jsx(n.code,{children:"CHAT:*"}),", ",e.jsx(n.code,{children:"HEADER:*"}),", or ",e.jsx(n.code,{children:"SIDEBAR:*"})," extension points receive:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ChatExtensionContext {
  sessionId: string;   // The active session ID
}
`})}),`
`,e.jsx(n.h3,{id:"using-library-hooks",children:"Using library hooks"}),`
`,e.jsx(n.p,{children:"Since plugin components render inside the ChatWidget provider tree, all library hooks are available:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatTranslation, useChatEventEmitter } from '@nutanix/chat-ui';

function MyPlugin({ message, sessionId }: MessageExtensionContext) {
  const { t } = useChatTranslation();
  const emitEvent = useChatEventEmitter();

  const handleClick = () => {
    emitEvent('CUSTOM_ACTION', { action: 'clicked' }, sessionId);
  };

  return <button onClick={handleClick}>{t('myPlugin.label')}</button>;
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"custom-layouts-with-plugins",children:"Custom Layouts with Plugins"}),`
`,e.jsxs(n.p,{children:["If you use the ",e.jsx(n.code,{children:"children"})," prop for a fully custom layout, you can still use the plugin system. Import the ",e.jsx(n.code,{children:"ExtensionPoint"})," component and place it wherever you want plugins to render:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChatWidget, ExtensionPoint, FeedbackWidgetPlugin } from '@nutanix/chat-ui';

<ChatWidget plugins={[FeedbackWidgetPlugin({ onFeedback })]}>
  {/* Your custom layout */}
  <div className="my-message">
    <MarkdownRenderer content={message.content} />
    <div className="my-actions">
      <CopyButton content={message.content} />
      <ExtensionPoint
        id="MESSAGE:ACTIONS"
        context={{ message, sessionId, isStreaming: false }}
      />
    </div>
  </div>
</ChatWidget>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Custom layouts must use the library-defined extension point IDs (the 12 IDs listed above). These IDs are the contract between plugins and the widget — consumers cannot define new extension point IDs. The library guarantees that plugins targeting these IDs will render wherever the corresponding ",e.jsx(n.code,{children:"ExtensionPoint"})," component is placed."]}),`
`]}),`
`,e.jsx(n.p,{children:"This gives you full layout control while still benefiting from the plugin system."})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{g as default};
