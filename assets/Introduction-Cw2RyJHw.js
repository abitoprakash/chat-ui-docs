import{j as n}from"./jsx-runtime-9Zi5AnTW.js";import{useMDXComponents as i}from"./index-2r9PR1IS.js";import{M as r}from"./index-C3YC1HX9.js";import"./index-DwAMp0GL.js";import"./iframe-CaGeVnLy.js";import"./index-psvBcutn.js";import"./index-CjRs4yQt.js";import"./index-DrFu-skq.js";function t(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(r,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"chat-ui-library",children:"Chat-UI Library"}),`
`,n.jsxs("details",{children:[n.jsx("summary",{style:{cursor:"pointer",marginBottom:"12px"},children:"Table of Contents"}),n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#installation",children:"Installation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#quick-start",children:"Quick Start"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#features",children:"Features"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#guides",children:"Guides"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#documentation",children:"Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#support",children:"Support"})}),`
`]})]}),`
`,n.jsx(e.p,{children:"A configurable, reusable chat UI component library for Nutanix applications."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"@nutanix/chat-ui"})," provides React components for building AI-powered chat interfaces. The library offers:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ChatWidget"})," — Pre-built chat widget with fullscreen, compact, and inline modes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Composable Components"})," — 19 customizable building blocks for custom integrations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"23 Hooks"})," — Access messages, session state, sources, actions, and more from custom components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Adapter Pattern"})," — Pluggable backend communication via ",n.jsx(e.code,{children:"ChatAdapter"})," interface"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Full TypeScript Support"})," — Complete type definitions for all components, hooks, and types"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Prism-UI Integration"})," — Built on Nutanix's design system"]}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @nutanix/chat-ui
`})}),`
`,n.jsx(e.h3,{id:"peer-dependencies",children:"Peer Dependencies"}),`
`,n.jsx(e.p,{children:"Ensure you have the required peer dependencies:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install react react-dom @nutanix-ui/prism-reactjs
`})}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n.jsx(e.h3,{id:"using-the-chatwidget-fullscreen",children:"Using the ChatWidget (Fullscreen)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ChatWidget } from '@nutanix/chat-ui';

function App() {
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
      features={{ greeting: { show: true } }}
      onChatEvent={(event) => console.log(event.type, event.payload)}
      onClose={() => navigate('/home')}
    />
  );
}
`})}),`
`,n.jsx(e.h3,{id:"using-the-chatwidget-inline-mode",children:"Using the ChatWidget (Inline Mode)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ChatWidget } from '@nutanix/chat-ui';

function SearchResults() {
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
      mode="inline"
      initialQuestion="How do I configure storage?"
      features={{ sources: { show: true, maxCount: 5 } }}
      onFollowUp={(sessionId, query) => {
        navigate(\`/chat?session=\${sessionId}&q=\${query}\`);
      }}
    />
  );
}
`})}),`
`,n.jsx(e.h3,{id:"custom-layout-with-children",children:"Custom Layout with Children"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ChatWidget, MessageList, ChatInput, Greeting } from '@nutanix/chat-ui';

function CustomChat() {
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
    >
      <Greeting />
      <MessageList showGreeting={false} />
      <ChatInput mode="fullscreen" />
    </ChatWidget>
  );
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["When you pass ",n.jsx(e.code,{children:"children"})," to ",n.jsx(e.code,{children:"ChatWidget"}),", it replaces the preset layout. All exported hooks work inside children."]}),`
`]}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SSE Streaming"})," — Real-time AI response streaming with typing effect"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Answer Events Pipeline"})," — Visual progress steps (validation, retrieval, generation)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Source Citations"})," — Display source documents with collapsible cards"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Related Queries"})," — Follow-up question suggestions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chat History & Sessions"})," — Sidebar with session management (create, switch, delete)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Internationalization (i18n)"})," — 51 translation keys with placeholder interpolation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layout Modes"})," — Fullscreen, compact chat, and inline answer modes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Event Tracking"})," — Unified ",n.jsx(e.code,{children:"onChatEvent"})," callback for analytics integration"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Theme Support"})," — Integrates with Prism-UI theming"]}),`
`]}),`
`,n.jsx(e.h2,{id:"guides",children:"Guides"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"?path=/docs/guides-getting-started--docs",children:"Getting Started"})})," — Installation, ChatWidget setup, feature configuration, i18n, event tracking"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"?path=/docs/guides-advanced-usage--docs",children:"Advanced Usage"})})," — Custom layouts, hooks, custom adapters, headless engine"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"?path=/docs/guides-api-reference--docs",children:"API Reference"})})," — Complete export list with props, hooks, types, and adapters"]}),`
`]}),`
`,n.jsx(e.h2,{id:"documentation",children:"Documentation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"?path=/docs/documentation-translations--docs",children:"Translations"})})," — All 51 translation keys with defaults and placeholders"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"?path=/docs/documentation-sse-events--docs",children:"SSE Events"})})," — Streaming event protocol reference"]}),`
`]}),`
`,n.jsx(e.h2,{id:"support",children:"Support"}),`
`,n.jsxs(e.p,{children:["For questions or issues, contact the NIVA team via Slack: ",n.jsx(e.code,{children:"#niva-support"})]})]})}function p(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{p as default};
