import{j as e}from"./jsx-runtime-9Zi5AnTW.js";import{useMDXComponents as i}from"./index-2r9PR1IS.js";import{M as a}from"./index-C3YC1HX9.js";import"./index-DwAMp0GL.js";import"./iframe-CaGeVnLy.js";import"./index-psvBcutn.js";import"./index-CjRs4yQt.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{title:"Guides/Advanced Usage"}),`
`,e.jsx(n.h1,{id:"advanced-usage",children:"Advanced Usage"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer",marginBottom:"12px"},children:"Table of Contents"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#custom-layouts-with-children",children:"Custom Layouts with Children"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#using-hooks-in-custom-components",children:"Using Hooks in Custom Components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#multiple-independent-widgets",children:"Multiple Independent Widgets"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#custom-adapter",children:"Custom Adapter"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#headless-engine-advanced",children:"Headless Engine (Advanced)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#next-steps",children:"Next Steps"})}),`
`]})]}),`
`,e.jsx(n.p,{children:"This guide covers custom layouts, hooks, custom adapters, and the headless engine for developers who need full control over the chat experience."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"custom-layouts-with-children",children:"Custom Layouts with Children"}),`
`,e.jsxs(n.p,{children:["When you pass ",e.jsx(n.code,{children:"children"})," to ",e.jsx(n.code,{children:"<ChatWidget>"}),", it replaces the preset layout entirely. All exported hooks work inside children because ",e.jsx(n.code,{children:"ChatWidget"})," wraps them in the required providers."]}),`
`,e.jsx(n.h3,{id:"basic-custom-layout",children:"Basic Custom Layout"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  ChatWidget,
  MessageList,
  ChatInput,
  Greeting,
  Disclaimer,
} from '@nutanix/chat-ui';

function CustomChat() {
  return (
    <ChatWidget api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Greeting />
        <div style={{ flex: 1, overflow: 'auto' }}>
          <MessageList showGreeting={false} />
        </div>
        <ChatInput mode="fullscreen" />
        <Disclaimer />
      </div>
    </ChatWidget>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"custom-input-with-hooks",children:"Custom Input with Hooks"}),`
`,e.jsxs(n.p,{children:["Build a completely custom input using ",e.jsx(n.code,{children:"useChatActions"})," and ",e.jsx(n.code,{children:"useDraftQuery"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChatWidget, MessageList, useChatActions, useDraftQuery } from '@nutanix/chat-ui';

function MyCustomInput() {
  const { sendMessage } = useChatActions();
  const { draft, setDraft, clear } = useDraftQuery();

  const handleSubmit = () => {
    if (draft.trim()) {
      sendMessage(draft);
      clear();
    }
  };

  return (
    <div>
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
        placeholder="Type your question..."
      />
      <button onClick={handleSubmit}>Ask</button>
    </div>
  );
}

function App() {
  return (
    <ChatWidget api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}>
      <MessageList />
      <MyCustomInput />
    </ChatWidget>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"custom-header-with-session-info",children:"Custom Header with Session Info"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useActiveSession, useChatHistory, useSessionState } from '@nutanix/chat-ui';

function MyCustomHeader() {
  const { activeSessionId } = useActiveSession();
  const { isStreaming } = useSessionState();
  const { items } = useChatHistory();

  const activeItem = items.find((item) => item.id === activeSessionId);

  return (
    <header>
      <h3>{activeItem?.title ?? 'New Chat'}</h3>
      {isStreaming && <span>Generating...</span>}
      <span>{items.length} sessions</span>
    </header>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"using-hooks-in-custom-components",children:"Using Hooks in Custom Components"}),`
`,e.jsxs(n.p,{children:["All hooks require ",e.jsx(n.code,{children:"<ChatWidget>"})," or ",e.jsx(n.code,{children:"<ChatProvider>"})," as an ancestor in the component tree. They access the chat engine via React context."]}),`
`,e.jsx(n.h3,{id:"data-hooks",children:"Data Hooks"}),`
`,e.jsx(n.p,{children:"These hooks read state from the store and re-render when data changes."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useMessages(sessionId?)"})})," — Messages for the active (or specified) session:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useMessages } from '@nutanix/chat-ui';

function MyMessageList() {
  const messages = useMessages();
  return messages.map((msg) => (
    <div key={msg.id}>{msg.type}: {msg.content}</div>
  ));
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useSessionState(sessionId?)"})})," — Streaming state, message loading state, and errors:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSessionState } from '@nutanix/chat-ui';

function SessionStatus() {
  const { isStreaming, isLoadingMessages, streamingContent, error, messagesError } = useSessionState();
  if (messagesError) return <div>Failed to load messages</div>;
  if (isLoadingMessages) return <div>Loading messages...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (isStreaming) return <div>Streaming: {streamingContent}</div>;
  return null;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useSources(sessionId?)"})})," — Source citations for the active session:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSources } from '@nutanix/chat-ui';

function SourceBadges() {
  const sources = useSources();
  return sources.map((source) => (
    <a key={source.id} href={source.link}>{source.title}</a>
  ));
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useAnswerEvents(sessionId?)"})})," — Pipeline step progress (validation, retrieval, generation):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useAnswerEvents } from '@nutanix/chat-ui';

function PipelineProgress() {
  const events = useAnswerEvents();
  return events.map((event) => (
    <div key={event.type}>{event.type}: {event.status}</div>
  ));
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useRelatedQueries(sessionId?)"})})," — Follow-up query suggestions:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRelatedQueries } from '@nutanix/chat-ui';

function Suggestions() {
  const queries = useRelatedQueries();
  return queries.map((q) => <button key={q}>{q}</button>);
}
`})}),`
`,e.jsx(n.h3,{id:"action-hooks",children:"Action Hooks"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useChatActions()"})})," — Send and abort messages:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatActions } from '@nutanix/chat-ui';

function Controls() {
  const { sendMessage, abortMessage } = useChatActions();
  return (
    <>
      <button onClick={() => sendMessage('Hello!')}>Send</button>
      <button onClick={() => abortMessage()}>Stop</button>
    </>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useDraftQuery(sessionId?)"})})," — Input draft persistence across session switches:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useDraftQuery } from '@nutanix/chat-ui';

function DraftInput() {
  const { draft, setDraft, clear } = useDraftQuery();
  return <input value={draft} onChange={(e) => setDraft(e.target.value)} />;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useChatEventEmitter()"})})," — Emit custom analytics events:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatEventEmitter, ChatEvents } from '@nutanix/chat-ui';

function FeedbackButton() {
  const emitEvent = useChatEventEmitter();
  return (
    <button onClick={() => emitEvent(ChatEvents.NOTIFICATION, { feedback: 'helpful' })}>
      Helpful
    </button>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"session-hooks",children:"Session Hooks"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useActiveSession()"})})," — Active session ID and setter:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useActiveSession } from '@nutanix/chat-ui';

function SessionSwitch() {
  const { activeSessionId, setActiveSession } = useActiveSession();
  return <span>Current: {activeSessionId}</span>;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useChatHistory()"})})," — History list with CRUD operations:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatHistory } from '@nutanix/chat-ui';

function HistoryPanel() {
  const { items, createSession, selectSession, deleteSession } = useChatHistory();
  return (
    <div>
      <button onClick={createSession}>New Chat</button>
      {items.map((item) => (
        <div key={item.id} onClick={() => selectSession(item.id)}>
          {item.title}
          <button onClick={() => deleteSession(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"utility-hooks",children:"Utility Hooks"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useAutoScroll(containerRef, dependencies)"})})," — Auto-scroll to bottom on new content:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRef } from 'react';
import { useAutoScroll, useMessages } from '@nutanix/chat-ui';

function ScrollableMessages() {
  const containerRef = useRef(null);
  const messages = useMessages();
  const { scrollToBottom, isAtBottom } = useAutoScroll(containerRef, [messages]);

  return (
    <div ref={containerRef} style={{ overflow: 'auto', height: '400px' }}>
      {messages.map((msg) => <div key={msg.id}>{msg.content}</div>)}
      {!isAtBottom && <button onClick={scrollToBottom}>Scroll to bottom</button>}
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useChatTranslation()"})})," — Access the translation function:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatTranslation } from '@nutanix/chat-ui';

function LocalizedLabel() {
  const { t } = useChatTranslation();
  return <span>{t('input.placeholder')}</span>;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useChatEngine()"})})," — Escape hatch to the full engine (advanced):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatEngine } from '@nutanix/chat-ui';

function EngineDebug() {
  const engine = useChatEngine();
  const state = engine.store.getState();
  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"multiple-independent-widgets",children:"Multiple Independent Widgets"}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.code,{children:"<ChatWidget>"})," creates its own isolated engine and store. You can run multiple chat instances side by side:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DualChat() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ChatWidget
        api={{
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  }}
        mode="chat"
        features={{ greeting: { show: true } }}
      />
      <ChatWidget
        api={{ baseUrl: '/api/support' }}
        mode="chat"
        features={{ greeting: { show: true } }}
        translations={{ 'header.title': 'Support Bot' }}
      />
    </div>
  );
}
`})}),`
`,e.jsx(n.p,{children:"Each widget has its own sessions, messages, and state — they do not interfere with each other."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"custom-adapter",children:"Custom Adapter"}),`
`,e.jsxs(n.p,{children:["The adapter pattern lets you plug in any backend. Implement the ",e.jsx(n.code,{children:"ChatAdapter"})," interface:"]}),`
`,e.jsx(n.h3,{id:"adapter-interface",children:"Adapter Interface"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { ChatAdapter, SendMessageParams, SSEEvent } from '@nutanix/chat-ui';

const myAdapter: ChatAdapter = {
  async *sendMessage(params: SendMessageParams): AsyncGenerator<SSEEvent> {
    // params.query      — the user's question
    // params.sessionId  — target session ID
    // params.signal     — AbortSignal for cancellation
    // params.files      — attached files (Phase 2)

    const response = await fetch('/my-api/chat', {
      method: 'POST',
      body: JSON.stringify({ question: params.query, session: params.sessionId }),
      signal: params.signal,
    });

    // Parse your SSE stream and yield events
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value);
      // Parse and yield SSEEvent objects
      // See the SSE Events documentation for the event format
    }
  },

  // Optional: fetch session list
  async fetchHistory() {
    const res = await fetch('/my-api/sessions');
    const data = await res.json();
    return data.map((s) => ({ sessionId: s.id, title: s.name }));
  },

  // Optional: fetch messages for a session
  async fetchSessionMessages(sessionId: string) {
    const res = await fetch(\`/my-api/sessions/\${sessionId}/messages\`);
    return res.json();
  },

  // Optional: delete a session
  async deleteSession(sessionId: string) {
    await fetch(\`/my-api/sessions/\${sessionId}\`, { method: 'DELETE' });
  },
};

// Use it:
<ChatWidget adapter={myAdapter} mode="fullscreen" />
`})}),`
`,e.jsx(n.h3,{id:"using-createchatapiadapter-with-custom-endpoints",children:"Using createChatApiAdapter with Custom Endpoints"}),`
`,e.jsxs(n.p,{children:["Only specify the endpoints you want to override — unset keys automatically fall back to ",e.jsx(n.code,{children:"DEFAULT_API_ENDPOINTS"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { createChatApiAdapter } from '@nutanix/chat-ui';

const adapter = createChatApiAdapter({
  baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
  getAuthToken: async () => {
    const res = await fetch('/api/auth/token');
    const data = await res.json();
    return data.token;
  },
  endpoints: {
    generateAnswer: '/v2/ask',  // only override what you need
  },
});

<ChatWidget adapter={adapter} mode="fullscreen" />
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"headless-engine-advanced",children:"Headless Engine (Advanced)"}),`
`,e.jsxs(n.p,{children:["For non-React usage or programmatic control, use ",e.jsx(n.code,{children:"createChatEngine"})," directly:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { createChatEngine } from '@nutanix/chat-ui';

const engine = createChatEngine({
  api: {
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  },
  // OR: adapter: myCustomAdapter,
});

// Access the Zustand store
const state = engine.store.getState();

// Send a message programmatically
const sessionId = 'my-session';
state.ensureSession(sessionId);
state.setActiveSession(sessionId);
await engine.sendMessage(sessionId, 'How do I configure storage?');

// Read the response
const session = engine.store.getState().sessions[sessionId];
console.log(session.messages);
console.log(session.sources);
`})}),`
`,e.jsx(n.h3,{id:"chatprovider-for-shared-engine",children:"ChatProvider for Shared Engine"}),`
`,e.jsx(n.p,{children:"If you need multiple React trees to share the same engine:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { createChatEngine, ChatProvider, MessageList, ChatInput } from '@nutanix/chat-ui';

const engine = createChatEngine({
  api: {
    baseUrl: 'https://uat-nuchat-server.saas.nutanix.com',
    getAuthToken: async () => {
      const res = await fetch('/api/auth/token');
      const data = await res.json();
      return data.token;
    },
  },
});

function App() {
  return (
    <ChatProvider engine={engine}>
      <MessageList />
      <ChatInput />
    </ChatProvider>
  );
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," ",e.jsx(n.code,{children:"ChatWidget"})," creates its own engine internally. Use ",e.jsx(n.code,{children:"ChatProvider"})," only when you need to share an engine across components that are not descendants of the same ",e.jsx(n.code,{children:"ChatWidget"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/guides-api-reference--docs",children:"API Reference"})})," — Complete props, hooks, types, and adapter documentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/documentation-sse-events--docs",children:"SSE Events"})})," — Understanding the streaming event protocol"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/hooks-overview--docs",children:"Hooks Overview"})})," — Quick reference for all 23 hooks"]}),`
`]})]})}function g(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{g as default};
