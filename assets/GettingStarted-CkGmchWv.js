import{j as e}from"./jsx-runtime-9Zi5AnTW.js";import{useMDXComponents as r}from"./index-2r9PR1IS.js";import{M as i}from"./index-C3YC1HX9.js";import"./index-DwAMp0GL.js";import"./iframe-CaGeVnLy.js";import"./index-psvBcutn.js";import"./index-CjRs4yQt.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Guides/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer",marginBottom:"12px"},children:"Table of Contents"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#installation",children:"Installation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-architecture",children:"Component Architecture"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#quick-start--fullscreen-chat",children:"Quick Start — Fullscreen Chat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#quick-start--inline-mode",children:"Quick Start — Inline Mode"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#feature-configuration",children:"Feature Configuration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#internationalization-i18n",children:"Internationalization (i18n)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#event-tracking--callbacks",children:"Event Tracking and Callbacks"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#url-based-session-routing",children:"URL-based Session Routing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#next-steps",children:"Next Steps"})}),`
`]})]}),`
`,e.jsx(n.p,{children:"This guide walks you through installation, setup, and configuration of the chat-ui library."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @nutanix/chat-ui
`})}),`
`,e.jsx(n.h3,{id:"peer-dependencies",children:"Peer Dependencies"}),`
`,e.jsx(n.p,{children:"The library requires React 16.8+ and Prism-UI:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install react react-dom @nutanix-ui/prism-reactjs
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-architecture",children:"Component Architecture"}),`
`,e.jsxs(n.p,{children:["The diagram below shows how ",e.jsx(n.code,{children:"ChatWidget"})," is structured internally. Understanding these layers helps when customizing layouts, writing integration tests, or building a fully custom UI with the headless engine."]}),`
`,e.jsx(n.h3,{id:"provider-tree",children:"Provider Tree"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ChatWidget"})," wraps your UI in four nested context providers. Every hook exported by the library reads from one of these contexts."]}),`
`,e.jsxs("div",{style:{border:"2px solid #3b82f6",borderRadius:"8px",padding:"16px",background:"#f0f5ff",fontSize:"13px",lineHeight:"1.6"},children:[e.jsxs("div",{style:{fontWeight:700,fontSize:"14px",marginBottom:"8px",color:"#1e40af"},children:["ChatWidget ",e.jsx("span",{style:{fontWeight:400,color:"#6b7280"},children:"(entry point — props: api, mode, features, translations, callbacks)"})]}),e.jsxs("div",{style:{borderLeft:"3px solid #93c5fd",marginLeft:"8px",paddingLeft:"12px"},children:[e.jsxs("div",{style:{border:"1px solid #93c5fd",borderRadius:"6px",padding:"10px 12px",background:"#dbeafe",marginBottom:"6px"},children:[e.jsx("strong",{children:"ChatProvider"}),e.jsxs("span",{style:{color:"#6b7280"},children:["— exposes the ",e.jsx("code",{children:"ChatEngine"})," instance (store + adapter + actions)"]})]}),e.jsxs("div",{style:{borderLeft:"3px solid #93c5fd",marginLeft:"8px",paddingLeft:"12px"},children:[e.jsxs("div",{style:{border:"1px solid #93c5fd",borderRadius:"6px",padding:"10px 12px",background:"#dbeafe",marginBottom:"6px"},children:[e.jsx("strong",{children:"TranslationProvider"}),e.jsxs("span",{style:{color:"#6b7280"},children:["— i18n via ",e.jsx("code",{children:"t()"})," function or ",e.jsx("code",{children:"translations"})," map"]})]}),e.jsxs("div",{style:{borderLeft:"3px solid #93c5fd",marginLeft:"8px",paddingLeft:"12px"},children:[e.jsxs("div",{style:{border:"1px solid #93c5fd",borderRadius:"6px",padding:"10px 12px",background:"#dbeafe",marginBottom:"6px"},children:[e.jsx("strong",{children:"ChatEventProvider"}),e.jsxs("span",{style:{color:"#6b7280"},children:["— unified ",e.jsx("code",{children:"onChatEvent"})," analytics callback"]})]}),e.jsxs("div",{style:{borderLeft:"3px solid #93c5fd",marginLeft:"8px",paddingLeft:"12px"},children:[e.jsxs("div",{style:{border:"1px solid #93c5fd",borderRadius:"6px",padding:"10px 12px",background:"#dbeafe",marginBottom:"6px"},children:[e.jsx("strong",{children:"WidgetConfigProvider"}),e.jsxs("span",{style:{color:"#6b7280"},children:["— resolved feature config from ",e.jsx("code",{children:"mode"})," + ",e.jsx("code",{children:"features"})]})]}),e.jsx("div",{style:{border:"1px dashed #93c5fd",borderRadius:"6px",padding:"8px 12px",background:"#eff6ff",color:"#374151",textAlign:"center"},children:e.jsxs(n.p,{children:[e.jsx("code",{children:"children"}),"  or  ",e.jsx("strong",{children:"PresetLayout"})]})})]})]})]})]})]}),`
`,e.jsx(n.h3,{id:"engine-layer",children:"Engine Layer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createChatEngine()"})," is called once per ",e.jsx(n.code,{children:"ChatWidget"})," mount. It owns the Zustand store, the SSE adapter, and all message orchestration. The engine is framework-agnostic and can be used headlessly without React."]}),`
`,e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"8px",fontSize:"13px"},children:[e.jsxs("div",{style:{flex:"1 1 180px",border:"1px solid #22c55e",borderRadius:"6px",padding:"12px",background:"#f0fdf4"},children:[e.jsx("div",{style:{fontWeight:700,color:"#166534",marginBottom:"4px"},children:"Zustand Store"}),e.jsx("div",{style:{color:"#4b5563"},children:"Sessions map, messages, streaming state, draft, sidebar collapse"}),e.jsx("div",{style:{marginTop:"6px",fontFamily:"monospace",fontSize:"11px",color:"#6b7280"},children:"immer middleware for immutable updates"})]}),e.jsxs("div",{style:{flex:"1 1 180px",border:"1px solid #22c55e",borderRadius:"6px",padding:"12px",background:"#f0fdf4"},children:[e.jsx("div",{style:{fontWeight:700,color:"#166534",marginBottom:"4px"},children:"ChatAdapter (SSE)"}),e.jsx("div",{style:{color:"#4b5563"},children:"Sends query via fetch, returns AsyncGenerator of SSE events"}),e.jsx("div",{style:{marginTop:"6px",fontFamily:"monospace",fontSize:"11px",color:"#6b7280"},children:"adapter.sendMessage() -> processChatEvent()"})]}),e.jsxs("div",{style:{flex:"1 1 180px",border:"1px solid #22c55e",borderRadius:"6px",padding:"12px",background:"#f0fdf4"},children:[e.jsx("div",{style:{fontWeight:700,color:"#166534",marginBottom:"4px"},children:"AbortController Map"}),e.jsx("div",{style:{color:"#4b5563"},children:"Per-session abort signals for cancelling in-flight streams"}),e.jsx("div",{style:{marginTop:"6px",fontFamily:"monospace",fontSize:"11px",color:"#6b7280"},children:"engine.abortMessage(sessionId)"})]})]}),`
`,e.jsx(n.h3,{id:"layout-and-component-tree",children:"Layout and Component Tree"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PresetLayout"})," reads the ",e.jsx(n.code,{children:"mode"})," from context and picks the right layout. Pass ",e.jsx(n.code,{children:"children"})," to ",e.jsx(n.code,{children:"ChatWidget"})," instead to build your own."]}),`
`,e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",marginTop:"12px",fontSize:"13px"},children:[e.jsxs("div",{style:{flex:"1 1 320px",border:"1px solid #d1d5db",borderRadius:"8px",padding:"14px",background:"#fafafa"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:"14px",marginBottom:"10px",color:"#111827"},children:e.jsxs(n.p,{children:[`Fullscreen / Chat mode
`,e.jsx("span",{style:{fontWeight:400,fontSize:"12px",color:"#9ca3af",marginLeft:"6px"},children:'mode="fullscreen" | "chat"'})]})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs("div",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"6px 10px"},children:[e.jsx("strong",{children:"ChatHeader"}),e.jsx("span",{style:{color:"#6b7280"},children:"— title, sidebar toggle, close button"})]}),e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsxs("div",{style:{flex:"0 0 140px",background:"#e5e7eb",borderRadius:"4px",padding:"6px 10px"},children:[e.jsx("strong",{children:"Sidebar"}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280",marginTop:"2px"},children:"ChatHistory"}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280"},children:"  HistoryList"}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280"},children:"    HistoryItem"}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280"},children:"NewChatButton"})]}),e.jsxs("div",{style:{flex:1,background:"#f3f4f6",borderRadius:"4px",padding:"6px 10px"},children:[e.jsx("strong",{children:"ChatContainer"}),e.jsxs("div",{style:{borderLeft:"2px solid #d1d5db",marginLeft:"4px",paddingLeft:"8px",marginTop:"4px"},children:[e.jsxs("div",{style:{background:"#e5e7eb",borderRadius:"3px",padding:"4px 8px",marginBottom:"3px"},children:[e.jsx("strong",{children:"MessageList"}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280",marginTop:"2px"},children:"Greeting"}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280"},children:"UserMessage"}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280"},children:"AssistantMessage"}),e.jsx("div",{style:{fontSize:"10px",color:"#9ca3af",marginLeft:"8px"},children:"MarkdownRenderer, CopyButton"}),e.jsx("div",{style:{fontSize:"10px",color:"#9ca3af",marginLeft:"8px"},children:"AnswerEvents, SourceList"}),e.jsx("div",{style:{fontSize:"10px",color:"#9ca3af",marginLeft:"8px"},children:"RelatedQueries"})]}),e.jsx("div",{style:{background:"#e5e7eb",borderRadius:"3px",padding:"4px 8px",marginBottom:"3px"},children:e.jsx("strong",{children:"ChatInput"})}),e.jsx("div",{style:{background:"#e5e7eb",borderRadius:"3px",padding:"4px 8px"},children:e.jsx("strong",{children:"Disclaimer"})})]})]})]})]})]}),e.jsxs("div",{style:{flex:"1 1 240px",border:"1px solid #d1d5db",borderRadius:"8px",padding:"14px",background:"#fafafa"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:"14px",marginBottom:"10px",color:"#111827"},children:e.jsxs(n.p,{children:[`Inline mode
`,e.jsx("span",{style:{fontWeight:400,fontSize:"12px",color:"#9ca3af",marginLeft:"6px"},children:'mode="inline"'})]})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs("div",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"6px 10px"},children:[e.jsx("strong",{children:"Loader"}),e.jsx("span",{style:{color:"#6b7280"},children:'— "thinking" state'})]}),e.jsxs("div",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"6px 10px"},children:[e.jsx("strong",{children:"AssistantMessage"}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280",marginTop:"2px"},children:"MarkdownRenderer, CopyButton"})]}),e.jsx("div",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"6px 10px"},children:e.jsx("strong",{children:"SourceList"})}),e.jsx("div",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"6px 10px"},children:e.jsx("strong",{children:"RelatedQueries"})}),e.jsxs("div",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"6px 10px"},children:[e.jsx("strong",{children:"ChatInput"}),e.jsx("span",{style:{color:"#6b7280"},children:"— follow-up"})]}),e.jsx("div",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"6px 10px"},children:e.jsx("strong",{children:"Disclaimer"})})]})]})]}),`
`,e.jsx(n.h3,{id:"data-flow-summary",children:"Data Flow Summary"}),`
`,e.jsx("div",{style:{fontSize:"13px",lineHeight:"1.8",marginTop:"8px",padding:"12px 16px",background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"6px"},children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"1."})," User types a message in ",e.jsx("code",{children:"ChatInput"})," and hits Send.",e.jsx("br",{}),`
`,e.jsx("strong",{children:"2."})," ",e.jsx("code",{children:"useChatActions().sendMessage()"})," calls ",e.jsx("code",{children:"engine.sendMessage(sessionId, text)"}),".",e.jsx("br",{}),`
`,e.jsx("strong",{children:"3."})," The engine adds a user message to the Zustand store, creates a streaming placeholder, and calls ",e.jsx("code",{children:"adapter.sendMessage()"}),".",e.jsx("br",{}),`
`,e.jsx("strong",{children:"4."})," The adapter opens an SSE connection. Each event is fed to ",e.jsx("code",{children:"processChatEvent()"}),", which dispatches store actions (append content, add source, add answer event, etc.).",e.jsx("br",{}),`
`,e.jsx("strong",{children:"5."})," React hooks (",e.jsx("code",{children:"useMessages"}),", ",e.jsx("code",{children:"useSources"}),", ",e.jsx("code",{children:"useSessionState"}),") subscribe to the store via ",e.jsx("code",{children:"useStore()"})," and trigger re-renders.",e.jsx("br",{}),`
`,e.jsx("strong",{children:"6."})," When the stream ends, ",e.jsx("code",{children:"finalizeMessage()"})," persists the full content onto the message object and clears streaming state."]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start--fullscreen-chat",children:"Quick Start — Fullscreen Chat"}),`
`,e.jsx(n.p,{children:"The simplest way to add a full-page chat experience:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChatWidget } from '@nutanix/chat-ui';

function ChatPage() {
  return (
    <ChatWidget
      api={{
        baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
        getAuthToken: async () => {
          const res = await fetch('/api/auth/token');
          const data = await res.json();
          return data.token;
        },
      }}
      mode="fullscreen"
      onClose={() => navigate('/home')}
    />
  );
}
`})}),`
`,e.jsx(n.p,{children:"This gives you a complete chat interface with sidebar, history, greeting screen, input, sources, and related queries — all out of the box."}),`
`,e.jsx(n.h3,{id:"with-authentication",children:"With Authentication"}),`
`,e.jsx(n.p,{children:"If your API requires a Bearer token:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ChatWidget
  api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
  mode="fullscreen"
/>
`})}),`
`,e.jsx(n.p,{children:"For cookie-based cross-origin auth:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ChatWidget
  api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    credentials: 'include',
  }}
  mode="fullscreen"
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start--inline-mode",children:"Quick Start — Inline Mode"}),`
`,e.jsx(n.p,{children:"Embed an AI-generated answer directly into a search results page:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChatWidget, ChatEvents } from '@nutanix/chat-ui';

function SearchResults() {
  return (
    <div>
      <h2>Search Results</h2>

      {/* AI-generated answer */}
      <ChatWidget
        api={{
          baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
          getAuthToken: async () => {
            const res = await fetch('/api/auth/token');
            const data = await res.json();
            return data.token;
          },
        }}
        mode="inline"
        initialQuestion="How do I configure storage on a Nutanix cluster?"
        features={{ sources: { show: true, maxCount: 5 }, relatedQueries: { show: true } }}
        onFollowUp={(sessionId, query) => {
          // Navigate to fullscreen chat for follow-up conversation
          navigate(\`/chat?session=\${sessionId}&q=\${query}\`);
        }}
      />

      {/* Other search results below */}
    </div>
  );
}
`})}),`
`,e.jsx(n.p,{children:"In inline mode, the widget:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Auto-submits ",e.jsx(n.code,{children:"initialQuestion"})," on mount"]}),`
`,e.jsx(n.li,{children:'Shows a "thinking" loader, then the answer with sources'}),`
`,e.jsxs(n.li,{children:["Fires ",e.jsx(n.code,{children:"onFollowUp"})," when the user clicks a related query or types a follow-up"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"feature-configuration",children:"Feature Configuration"}),`
`,e.jsxs(n.p,{children:["ChatWidget uses a single ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"features"})})," prop to control feature visibility. All sub-configs are optional — unset values default to ",e.jsx(n.code,{children:"show: true"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ChatWidget
  api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
  mode="fullscreen"
  features={{
    sources: { show: true, maxCount: 5 },
    sidebar: { show: true },
    greeting: {
      show: true,
      avatar: <SparkleIcon size={40} color="#2a60e4" />,
      learnMoreUrl: 'https://www.nutanix.com/niva',
    },
    answerEvents: { show: true, showSources: true, maxVisibleSources: 5 },
    relatedQueries: { show: true },
    disclaimer: { show: true },
  }}
/>
`})}),`
`,e.jsx(n.h3,{id:"feature-defaults",children:"Feature Defaults"}),`
`,e.jsxs(n.p,{children:["All features default to ",e.jsx(n.code,{children:"show: true"})," regardless of mode. To hide a feature, explicitly set ",e.jsx(n.code,{children:"show: false"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ChatWidget
  mode="chat"
  features={{
    sidebar: { show: false },
    greeting: { show: false },
  }}
/>
`})}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Feature"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Config Key"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Source citations"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"sources.show"}),e.jsx("td",{style:{padding:"8px 12px"},children:"true"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Max visible sources"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"sources.maxCount"}),e.jsx("td",{style:{padding:"8px 12px"},children:"5"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"History sidebar"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"sidebar.show"}),e.jsx("td",{style:{padding:"8px 12px"},children:"true"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Greeting screen"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"greeting.show"}),e.jsx("td",{style:{padding:"8px 12px"},children:"true"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Answer event steps"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"answerEvents.show"}),e.jsx("td",{style:{padding:"8px 12px"},children:"true"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Sources inside answer steps"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"answerEvents.showSources"}),e.jsx("td",{style:{padding:"8px 12px"},children:"true"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Max sources per answer step"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"answerEvents.maxVisibleSources"}),e.jsx("td",{style:{padding:"8px 12px"},children:"5"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Sidebar info banner"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"sidebar.showInfoBanner"}),e.jsx("td",{style:{padding:"8px 12px"},children:"true"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Related query suggestions"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"relatedQueries.show"}),e.jsx("td",{style:{padding:"8px 12px"},children:"true"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"Disclaimer text"}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:"disclaimer.show"}),e.jsx("td",{style:{padding:"8px 12px"},children:"true"})]})]})]}),`
`,e.jsx(n.h3,{id:"layout-modes",children:"Layout Modes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"fullscreen"})})," — Full-page chat with sidebar, history, all features. Default mode."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"chat"})})," — Compact chat widget without sidebar. Suitable for popover/drawer usage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"inline"})})," — Auto-trigger question, answer + sources only. For search result pages."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"internationalization-i18n",children:"Internationalization (i18n)"}),`
`,e.jsx(n.h3,{id:"simple-string-overrides",children:"Simple String Overrides"}),`
`,e.jsxs(n.p,{children:["Override specific translation keys with ",e.jsx(n.code,{children:"translations"})," and provide placeholder values with ",e.jsx(n.code,{children:"translationParams"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ChatWidget
  api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
  translations={{
    'header.title': 'NIVA',
    'greeting.title': 'Hi{{userName}}!',
    'greeting.subtitle': "I'm NIVA, your virtual assistant. How can I help?",
    'greeting.learnMoreText': 'Learn more about NIVA',
    'disclaimer.text': 'NIVA can make mistakes, so double-check it.',
  }}
  translationParams={{ userName: ', Joseph' }}
/>
`})}),`
`,e.jsxs(n.p,{children:["This renders the greeting title as ",e.jsx(n.strong,{children:'"Hi, Joseph!"'}),"."]}),`
`,e.jsx(n.h3,{id:"using-react-i18next-full-control",children:"Using react-i18next (Full Control)"}),`
`,e.jsxs(n.p,{children:["If you already use react-i18next, pass your ",e.jsx(n.code,{children:"t"})," function directly. When ",e.jsx(n.code,{children:"t"})," is provided, ",e.jsx(n.code,{children:"translations"})," is ignored:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation('chat');
  return (
    <ChatWidget
      api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
      t={t}
      translationParams={{ userName: ', Joseph' }}
    />
  );
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"?path=/docs/documentation-translations--docs",children:"Translations"})," reference for all 51 available keys."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"event-tracking--callbacks",children:"Event Tracking & Callbacks"}),`
`,e.jsxs(n.h3,{id:"unified-onchatevent",children:["Unified ",e.jsx(n.code,{children:"onChatEvent"})]}),`
`,e.jsxs(n.p,{children:["All trackable user interactions flow through a single ",e.jsx(n.code,{children:"onChatEvent"})," callback:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChatWidget, ChatEvents } from '@nutanix/chat-ui';

<ChatWidget
  api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
  onChatEvent={(event) => {
    // event.type — event identifier (e.g., 'message_sent')
    // event.sessionId — session where it occurred
    // event.timestamp — ISO-8601 timestamp
    // event.payload — event-specific data

    switch (event.type) {
      case ChatEvents.SOURCE_CLICKED:
        window.open(event.payload.link as string, '_blank');
        break;
      case ChatEvents.ERROR:
        toast.error(event.payload.error as string);
        break;
    }
  }}
/>
`})}),`
`,e.jsx(n.h3,{id:"google-analytics-ga4-integration",children:"Google Analytics (GA4) Integration"}),`
`,e.jsx(n.p,{children:"Wire chat events to Google Analytics with a simple handler:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChatWidget, ChatEvents } from '@nutanix/chat-ui';

function ChatPage() {
  const handleChatEvent = (event) => {
    // Send all chat events to GA4
    gtag('event', \`chat_\${event.type}\`, {
      session_id: event.sessionId,
      timestamp: event.timestamp,
      ...event.payload,
    });

    // Track answer quality metrics
    if (event.type === ChatEvents.RESPONSE_COMPLETE) {
      gtag('event', 'chat_answer_received', {
        session_id: event.sessionId,
        response_length: (event.payload.message as any)?.content?.length ?? 0,
      });
    }

    // Track user engagement
    if (event.type === ChatEvents.SOURCE_CLICKED) {
      gtag('event', 'chat_source_opened', {
        session_id: event.sessionId,
        source_title: event.payload.source?.title,
      });
    }
  };

  return (
    <ChatWidget
      api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
      onChatEvent={handleChatEvent}
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"available-event-types",children:"Available Event Types"}),`
`,e.jsxs(n.p,{children:["All event type constants are available via the ",e.jsx(n.code,{children:"ChatEvents"})," object:"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Constant"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Fires When"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.MESSAGE_SENT"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"User sends a message"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.RESPONSE_START"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Streaming response begins"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.RESPONSE_COMPLETE"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Streaming response finishes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.RESPONSE_ABORTED"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"User stops generation"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.SOURCE_CLICKED"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"User clicks a source citation"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.RELATED_QUERY_CLICKED"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"User clicks a related query"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.SESSION_CREATED"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"New chat session created"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.SESSION_SWITCHED"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"User switches to a different session"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.SESSION_DELETED"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"User deletes a session"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.COPY_MESSAGE"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"User copies a message"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.NOTIFICATION"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"System notification"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:"ChatEvents.ERROR"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"An error occurred"})]})]})]}),`
`,e.jsx(n.h3,{id:"other-callbacks",children:"Other Callbacks"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ChatWidget
  api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
  // Header close button clicked
  onClose={() => navigate('/home')}
  // Inline mode: follow-up query submitted
  onFollowUp={(sessionId, query) => {
    navigate(\`/chat?session=\${sessionId}&q=\${query}\`);
  }}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"url-based-session-routing",children:"URL-based Session Routing"}),`
`,e.jsxs(n.p,{children:["Restore a specific chat session from URL parameters using the ",e.jsx(n.code,{children:"sessionId"})," prop:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSearchParams } from 'react-router-dom';

function ChatPage() {
  const [params] = useSearchParams();
  const sessionId = params.get('session') ?? undefined;

  return (
    <ChatWidget
      api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
      mode="fullscreen"
      sessionId={sessionId}
    />
  );
}
`})}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"sessionId"})," is provided, the widget ensures that session exists and makes it active on mount. If the session ID changes (e.g., from URL navigation), the widget switches to the new session."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/guides-advanced-usage--docs",children:"Advanced Usage"})})," — Custom layouts with children, hooks, custom adapters, headless engine"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/guides-api-reference--docs",children:"API Reference"})})," — Complete props, hooks, types, and adapter documentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/hooks-overview--docs",children:"Hooks Overview"})})," — All 23 hooks with usage examples"]}),`
`]})]})}function u(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{u as default};
