import{j as e}from"./jsx-runtime-9Zi5AnTW.js";import{useMDXComponents as t}from"./index-2r9PR1IS.js";import{M as r}from"./index-C3YC1HX9.js";import"./index-DwAMp0GL.js";import"./iframe-CaGeVnLy.js";import"./index-psvBcutn.js";import"./index-CjRs4yQt.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Hooks/Overview"}),`
`,e.jsx(n.h1,{id:"hooks-overview",children:"Hooks Overview"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer",marginBottom:"12px"},children:"Table of Contents"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#quick-reference",children:"Quick Reference"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#data-hooks",children:"Data Hooks"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#action-hooks",children:"Action Hooks"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#session-hooks",children:"Session Hooks"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#utility-hooks",children:"Utility Hooks"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#feature-config-hooks",children:"Feature Config Hooks"})}),`
`]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@nutanix/chat-ui"})," provides 23 hooks for reading state, performing actions, managing sessions, and accessing widget configuration from custom components. All hooks require ",e.jsx(n.code,{children:"<ChatWidget>"})," or ",e.jsx(n.code,{children:"<ChatProvider>"})," as an ancestor in the component tree."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-reference",children:"Quick Reference"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #d5dae0",textAlign:"left"},children:[e.jsx("th",{style:{padding:"10px 12px"},children:"Hook"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Returns"}),e.jsx("th",{style:{padding:"10px 12px"},children:"Re-renders When"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usemessages",style:{textDecoration:"none"},children:e.jsx("code",{children:"useMessages(sessionId?)"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"Message[]"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Messages change"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usesessionstate",style:{textDecoration:"none"},children:e.jsx("code",{children:"useSessionState(sessionId?)"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ isStreaming, isLoadingMessages, streamingContent, error, messagesError }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Session state changes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usesources",style:{textDecoration:"none"},children:e.jsx("code",{children:"useSources(sessionId?)"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"Source[]"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Sources change"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#useanswerevents",style:{textDecoration:"none"},children:e.jsx("code",{children:"useAnswerEvents(sessionId?)"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"AnswerEvent[]"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Answer events change"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#userelatedqueries",style:{textDecoration:"none"},children:e.jsx("code",{children:"useRelatedQueries(sessionId?)"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Related queries change"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#useactivesession",style:{textDecoration:"none"},children:e.jsx("code",{children:"useActiveSession()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ activeSessionId, setActiveSession }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Active session changes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usedraftquery",style:{textDecoration:"none"},children:e.jsx("code",{children:"useDraftQuery(sessionId?)"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ draft, setDraft, clear }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Draft changes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usechatactions",style:{textDecoration:"none"},children:e.jsx("code",{children:"useChatActions()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ sendMessage, abortMessage }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usechathistory",style:{textDecoration:"none"},children:e.jsx("code",{children:"useChatHistory()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ items, createSession, selectSession, deleteSession, ... }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"History changes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usechatengine",style:{textDecoration:"none"},children:e.jsx("code",{children:"useChatEngine()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"ChatEngine"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#useautoscroll",style:{textDecoration:"none"},children:e.jsx("code",{children:"useAutoScroll(ref, deps)"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ scrollToBottom, isAtBottom, shouldAutoScroll }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Scroll position changes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usechattranslation",style:{textDecoration:"none"},children:e.jsx("code",{children:"useChatTranslation()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ t }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usechateventemitter",style:{textDecoration:"none"},children:e.jsx("code",{children:"useChatEventEmitter()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"(type, payload, sessionId?) => void"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#useloadhistory",style:{textDecoration:"none"},children:e.jsx("code",{children:"useLoadHistory()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ loading, error, refresh }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Session list fetch state"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usesessionmessages",style:{textDecoration:"none"},children:e.jsx("code",{children:"useSessionMessages()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"void"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Active session changes"})]}),e.jsx("tr",{style:{borderBottom:"2px solid #d5dae0"},children:e.jsx("td",{colSpan:3,style:{padding:"10px 12px",fontWeight:"bold",background:"#f5f6f8"},children:"Feature Config Hooks (from WidgetConfigContext)"})}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usesourcesconfig",style:{textDecoration:"none"},children:e.jsx("code",{children:"useSourcesConfig()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ show, maxCount }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#useanswereventsconfig",style:{textDecoration:"none"},children:e.jsx("code",{children:"useAnswerEventsConfig()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ show, excludeEvents?, showSources, maxVisibleSources }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#userelatedqueriesconfig",style:{textDecoration:"none"},children:e.jsx("code",{children:"useRelatedQueriesConfig()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ show }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usedisclaimerconfig",style:{textDecoration:"none"},children:e.jsx("code",{children:"useDisclaimerConfig()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ show }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usegreetingconfig",style:{textDecoration:"none"},children:e.jsx("code",{children:"useGreetingConfig()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ show, avatar?, learnMoreUrl? }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usesidebarconfig",style:{textDecoration:"none"},children:e.jsx("code",{children:"useSidebarConfig()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"{ show, showInfoBanner, onToggle? }"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usewidgetmode",style:{textDecoration:"none"},children:e.jsx("code",{children:"useWidgetMode()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"LayoutMode"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"Never (stable ref)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e8eaed"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("a",{href:"#usewidgetconfig",style:{textDecoration:"none"},children:e.jsx("code",{children:"useWidgetConfig()"})})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",whiteSpace:"nowrap"},children:e.jsx("code",{children:"WidgetConfig | null"})}),e.jsx("td",{style:{padding:"8px 12px"},children:"When any config changes"})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Hooks marked "Never" return stable references and won't cause re-renders in your component.`}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"data-hooks",children:"Data Hooks"}),`
`,e.jsx(n.p,{children:"These hooks subscribe to store slices and re-render when the underlying data changes."}),`
`,e.jsx(n.h3,{id:"usemessages",children:"useMessages"}),`
`,e.jsx(n.p,{children:"Read the message list for the active session (or a specific session)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useMessages } from '@nutanix/chat-ui';

function MyMessages() {
  const messages = useMessages();
  // Or for a specific session:
  // const messages = useMessages('session-123');

  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id}>
          <strong>{msg.type}:</strong> {msg.content}
          <em> ({msg.status})</em>
        </div>
      ))}
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Message[]"})," — array of messages with ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"content"}),", ",e.jsx(n.code,{children:"status"}),", ",e.jsx(n.code,{children:"timestamp"}),", ",e.jsx(n.code,{children:"sources?"}),", ",e.jsx(n.code,{children:"relatedQueries?"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usesessionstate",children:"useSessionState"}),`
`,e.jsx(n.p,{children:"Read the streaming state, message loading state, partial content, and errors for the active session."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSessionState } from '@nutanix/chat-ui';

function SessionBanner() {
  const { isStreaming, isLoadingMessages, streamingContent, error, messagesError } = useSessionState();

  if (messagesError) return <div className="error">Failed to load messages</div>;
  if (isLoadingMessages) return <div className="loading">Loading messages...</div>;
  if (error) return <div className="error">{error.message}</div>;
  if (isStreaming) return <div className="streaming">Generating: {streamingContent?.length} chars</div>;
  return null;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"SessionStateResult"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isStreaming: boolean"})," — whether the session is currently streaming"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isLoadingMessages: boolean"})," — whether messages are being fetched for this session"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"streamingContent: string"})," — partial response text being streamed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error: Error | null"})," — last streaming/generation error, if any"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"messagesError: Error | null"})," — last message fetch error, if any"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usesources",children:"useSources"}),`
`,e.jsx(n.p,{children:"Source citations for the active session."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSources } from '@nutanix/chat-ui';

function SourceCards() {
  const sources = useSources();
  return sources.map((s) => (
    <a key={s.id} href={s.link} target="_blank" rel="noopener">{s.title}</a>
  ));
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Source[]"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"useanswerevents",children:"useAnswerEvents"}),`
`,e.jsx(n.p,{children:"Pipeline progress steps (query validation, retrieval, generation)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useAnswerEvents } from '@nutanix/chat-ui';

function PipelineSteps() {
  const events = useAnswerEvents();
  return events.map((event) => (
    <div key={event.type}>
      {event.type} — {event.status}
    </div>
  ));
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"AnswerEvent[]"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"userelatedqueries",children:"useRelatedQueries"}),`
`,e.jsx(n.p,{children:"Follow-up query suggestions for the active session."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRelatedQueries } from '@nutanix/chat-ui';

function Suggestions() {
  const queries = useRelatedQueries();
  if (!queries.length) return null;
  return (
    <div>
      <h4>Related:</h4>
      {queries.map((q) => <button key={q}>{q}</button>)}
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string[]"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"action-hooks",children:"Action Hooks"}),`
`,e.jsx(n.p,{children:"These hooks return stable function references for triggering side effects."}),`
`,e.jsx(n.h3,{id:"usechatactions",children:"useChatActions"}),`
`,e.jsx(n.p,{children:"Send messages and abort streaming."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatActions } from '@nutanix/chat-ui';

function ChatControls() {
  const { sendMessage, abortMessage } = useChatActions();

  return (
    <>
      <button onClick={() => sendMessage('Hello!')}>Send</button>
      <button onClick={() => abortMessage()}>Stop</button>
    </>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ChatActionsResult"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sendMessage(content: string): void"})," — sends a message in the active session"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"abortMessage(): void"})," — aborts streaming in the active session"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usedraftquery",children:"useDraftQuery"}),`
`,e.jsx(n.p,{children:"Manages the input draft text. Persists across session switches."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useDraftQuery } from '@nutanix/chat-ui';

function DraftInput() {
  const { draft, setDraft, clear } = useDraftQuery();

  return (
    <input
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') clear();
      }}
    />
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"DraftQueryResult"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"draft: string"})," — current draft text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDraft(text: string): void"})," — update the draft"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"clear(): void"})," — clear the draft"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usechateventemitter",children:"useChatEventEmitter"}),`
`,e.jsxs(n.p,{children:["Emit analytics events programmatically. Events flow to the ",e.jsx(n.code,{children:"onChatEvent"})," callback on ",e.jsx(n.code,{children:"ChatWidget"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatEventEmitter, ChatEvents } from '@nutanix/chat-ui';

function ThumbsUpButton() {
  const emitEvent = useChatEventEmitter();

  return (
    <button onClick={() => emitEvent(ChatEvents.NOTIFICATION, { feedback: 'positive' })}>
      👍
    </button>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"(type: string, payload: Record<string, unknown>, sessionId?: string) => void"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"session-hooks",children:"Session Hooks"}),`
`,e.jsx(n.h3,{id:"useactivesession",children:"useActiveSession"}),`
`,e.jsx(n.p,{children:"Read and change the active session."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useActiveSession } from '@nutanix/chat-ui';

function SessionInfo() {
  const { activeSessionId, setActiveSession } = useActiveSession();

  return (
    <div>
      <span>Session: {activeSessionId}</span>
      <button onClick={() => setActiveSession('other-session')}>Switch</button>
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ActiveSessionResult"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"activeSessionId: string | null"})," — current session ID"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setActiveSession(id: string): void"})," — switch to a different session"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usechathistory",children:"useChatHistory"}),`
`,e.jsx(n.p,{children:"Full history management: list items, create/select/delete sessions."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatHistory } from '@nutanix/chat-ui';

function HistoryPanel() {
  const {
    items,
    selectedItemId,
    streamingItemIds,
    unreadItemIds,
    createSession,
    selectSession,
    deleteSession,
  } = useChatHistory();

  return (
    <div>
      <button onClick={createSession}>New Chat</button>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => selectSession(item.id)}
          style={{ fontWeight: item.id === selectedItemId ? 'bold' : 'normal' }}
        >
          {item.title}
          {streamingItemIds.includes(item.id) && ' ⏳'}
          {unreadItemIds.includes(item.id) && ' 🔴'}
          <button onClick={() => deleteSession(item.id)}>×</button>
        </div>
      ))}
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ChatHistoryResult"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items: ChatHistoryItemData[]"})," — history items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectedItemId: string | null"})," — currently selected"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"streamingItemIds: string[]"})," — sessions currently streaming"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unreadItemIds: string[]"})," — sessions with unread messages"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"createSession(): void"})," — create a new session"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectSession(id: string): void"})," — select a session"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deleteSession(id: string): void"})," — delete a session (calls backend then removes locally)"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"useloadhistory",children:"useLoadHistory"}),`
`,e.jsxs(n.p,{children:["Fetches the session list from the backend via ",e.jsx(n.code,{children:"adapter.fetchHistory()"})," on mount. Populates the store via ",e.jsx(n.code,{children:"loadSessions"}),". Used internally by ",e.jsx(n.code,{children:"ChatHistory"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useLoadHistory } from '@nutanix/chat-ui';

function HistoryLoader() {
  const { loading, error, refresh } = useLoadHistory();

  if (loading) return <div>Loading history...</div>;
  if (error) return <button onClick={refresh}>Retry</button>;
  return null;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"LoadHistoryResult"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: boolean"})," — whether the session list is being fetched"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error: Error | null"})," — last fetch error, if any"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"refresh(): Promise<void>"})," — manually re-fetch the session list"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usesessionmessages",children:"useSessionMessages"}),`
`,e.jsxs(n.p,{children:["Side-effect hook that fetches messages whenever the active session changes. Always re-fetches (no caching). Writes loading/error state to the per-session store (accessible via ",e.jsx(n.code,{children:"useSessionState"}),"). Used internally by ",e.jsx(n.code,{children:"ChatContainer"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSessionMessages } from '@nutanix/chat-ui';

function MyContainer({ children }) {
  useSessionMessages();
  return <div>{children}</div>;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})," — all state is written directly to the Zustand store."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"utility-hooks",children:"Utility Hooks"}),`
`,e.jsx(n.h3,{id:"useautoscroll",children:"useAutoScroll"}),`
`,e.jsx(n.p,{children:"Manages auto-scroll behavior for a scrollable container."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRef } from 'react';
import { useAutoScroll, useMessages } from '@nutanix/chat-ui';

function ScrollableChat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const messages = useMessages();
  const { scrollToBottom, isAtBottom } = useAutoScroll(containerRef, [messages]);

  return (
    <div ref={containerRef} style={{ overflow: 'auto', height: '500px' }}>
      {messages.map((m) => <div key={m.id}>{m.content}</div>)}
      {!isAtBottom && (
        <button onClick={scrollToBottom} style={{ position: 'sticky', bottom: 0 }}>
          ↓ New messages
        </button>
      )}
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"AutoScrollResult"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"scrollToBottom(): void"})," — scroll to the bottom"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isAtBottom: boolean"})," — whether the container is at the bottom"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shouldAutoScroll: boolean"})," — whether auto-scroll is active"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usechattranslation",children:"useChatTranslation"}),`
`,e.jsxs(n.p,{children:["Access the translation function from the ",e.jsx(n.code,{children:"TranslationProvider"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatTranslation } from '@nutanix/chat-ui';

function LocalizedGreeting() {
  const { t } = useChatTranslation();
  return (
    <div>
      <h2>{t('greeting.title', { userName: ', Joseph' })}</h2>
      <p>{t('greeting.subtitle')}</p>
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"{ t: TranslationFunction }"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usechatengine",children:"useChatEngine"}),`
`,e.jsxs(n.p,{children:["Escape hatch — returns the full ",e.jsx(n.code,{children:"ChatEngine"})," instance. Use only for advanced scenarios."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useChatEngine } from '@nutanix/chat-ui';

function EngineDebug() {
  const engine = useChatEngine();
  const storeState = engine.store.getState();
  const sessionCount = Object.keys(storeState.sessions).length;

  return <span>{sessionCount} sessions in store</span>;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ChatEngine"})," — with ",e.jsx(n.code,{children:"sendMessage"}),", ",e.jsx(n.code,{children:"abortMessage"}),", ",e.jsx(n.code,{children:"store"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"feature-config-hooks",children:"Feature Config Hooks"}),`
`,e.jsxs(n.p,{children:["These hooks read from the ",e.jsx(n.code,{children:"WidgetConfigContext"})," which is set up by ",e.jsx(n.code,{children:"<ChatWidget>"}),". They return the resolved (mode-aware) configuration for each feature area. Useful when building custom layouts inside ",e.jsx(n.code,{children:"<ChatWidget>"})," children or when building custom sub-components."]}),`
`,e.jsx(n.p,{children:"All feature config hooks return stable references when the underlying config doesn't change, so they won't cause unnecessary re-renders."}),`
`,e.jsx(n.h3,{id:"usesourcesconfig",children:"useSourcesConfig"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSourcesConfig } from '@nutanix/chat-ui';

function CustomSources() {
  const { show, maxCount } = useSourcesConfig();
  const sources = useSources();

  if (!show) return null;
  return <MySourceList sources={sources.slice(0, maxCount)} />;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ResolvedSourcesConfig"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"show: boolean"})," — whether sources should be visible"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxCount: number"})," — maximum number of sources to display"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"useanswereventsconfig",children:"useAnswerEventsConfig"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useAnswerEventsConfig } from '@nutanix/chat-ui';

function CustomProgress() {
  const { show, excludeEvents, showSources, maxVisibleSources } = useAnswerEventsConfig();
  if (!show) return null;
  // filter events based on excludeEvents, gate sources with showSources...
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ResolvedAnswerEventsConfig"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"show: boolean"})," — whether answer events should be visible"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"excludeEvents?: string[]"})," — event type IDs to hide"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"userelatedqueriesconfig",children:"useRelatedQueriesConfig"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRelatedQueriesConfig } from '@nutanix/chat-ui';

function CustomRelated() {
  const { show } = useRelatedQueriesConfig();
  if (!show) return null;
  // render related queries...
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ResolvedRelatedQueriesConfig"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"show: boolean"})," — whether related queries should be visible"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usedisclaimerconfig",children:"useDisclaimerConfig"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useDisclaimerConfig } from '@nutanix/chat-ui';

function CustomDisclaimer() {
  const { show } = useDisclaimerConfig();
  if (!show) return null;
  return <Disclaimer />;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ResolvedDisclaimerConfig"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"show: boolean"})," — whether the disclaimer should be visible"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usegreetingconfig",children:"useGreetingConfig"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useGreetingConfig } from '@nutanix/chat-ui';

function CustomGreeting() {
  const { show, avatar, learnMoreUrl } = useGreetingConfig();
  if (!show) return null;
  return <Greeting avatar={avatar} learnMoreUrl={learnMoreUrl} />;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ResolvedGreetingConfig"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"show: boolean"})," — whether the greeting should be visible"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"avatar?: string | ReactNode"})," — avatar URL or custom element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"learnMoreUrl?: string"}),' — URL for "Learn more" link']}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usesidebarconfig",children:"useSidebarConfig"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSidebarConfig } from '@nutanix/chat-ui';

function CustomLayout() {
  const { show, showInfoBanner, onToggle } = useSidebarConfig();
  return (
    <div style={{ display: 'flex' }}>
      {show && <Sidebar />}
      <main>Chat area</main>
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ResolvedSidebarConfig"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"show: boolean"})," — whether the sidebar should be visible"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usewidgetmode",children:"useWidgetMode"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useWidgetMode } from '@nutanix/chat-ui';

function ModeAwareComponent() {
  const mode = useWidgetMode();
  if (mode === 'inline') return <CompactView />;
  return <FullView />;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"LayoutMode"})," — ",e.jsx(n.code,{children:"'fullscreen' | 'chat' | 'inline'"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usewidgetconfig",children:"useWidgetConfig"}),`
`,e.jsx(n.p,{children:"Escape hatch — returns the full resolved config. Prefer the feature-specific hooks for narrower re-render scopes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useWidgetConfig } from '@nutanix/chat-ui';

function DebugConfig() {
  const config = useWidgetConfig();
  return <pre>{JSON.stringify(config, null, 2)}</pre>;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"WidgetConfig | null"})]})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
