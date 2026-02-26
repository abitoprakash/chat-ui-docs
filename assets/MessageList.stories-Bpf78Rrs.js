import{j as t}from"./jsx-runtime-9Zi5AnTW.js";import{R as se,r as ne}from"./index-DwAMp0GL.js";import{c as ae,C as re}from"./createChatEngine-C_-uyuES.js";import{M as oe}from"./MessageList-DpJOWcma.js";import"./i18n-CMj5lJeX.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./useSessionState-CaAypWQQ.js";import"./useChatTranslation-DDuHb0UZ.js";import"./AnswerEvents-CeT5N_3v.js";import"./SparkleIcon-CIY3MwHb.js";import"./AssistantMessage-C15-qYe2.js";import"./MarkdownRenderer-DAtZwI_u.js";import"./markdown-huzLI7hZ.js";import"./CopyButton-D7BXTTna.js";import"./SourceList-Dxxlot37.js";import"./RelatedQueries-CF9Rv8cG.js";import"./StreamingIndicator-OHAH8iXm.js";import"./Greeting-Bh9E91I8.js";import"./UserMessage-C7r9Ek-j.js";function ie(){return{async*sendMessage(){}}}function l(e){const u=["How to identify whether the installed AOS version is LTS or STS","What's New 7.0.1.8 Release Notes AOS v7_0_1_8 AOS","AOS 7.3.0.6 Release Notes 7.3.0.6 Release Notes AOS v7_3_0_6","AOS 7.3.0.6 Release Notes 7.3.0.6 Release Notes AOS v7_3_0_6","Provide AOS version info on ESXi host"];return Array.from({length:e},(m,s)=>({id:`KB${100+s}`,title:u[s%u.length],link:`https://portal.nutanix.com/kb/${100+s}`,category:s%2===0?"KB":"Document",visibility:s===1?"AOS 6.6":void 0}))}function n({setup:e,showGreeting:u,showGeneratingLoader:m}){const[s]=se.useState(()=>{const S=ae({adapter:ie()});return e(S),S});return ne.useEffect(()=>()=>s.destroy(),[s]),t.jsx(re,{engine:s,children:t.jsx("div",{style:{height:600,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(oe,{showGreeting:u,showGeneratingLoader:m})})})}const be={title:"Components/Messages/MessageList",parameters:{layout:"padded",docs:{description:{component:"Scrollable message list with auto-scroll, greeting screen, streaming indicators, sources, and related queries. Uses hooks internally to read from the store."}}},tags:["autodocs"],decorators:[e=>t.jsx("div",{style:{maxWidth:800,margin:"0 auto",padding:24},children:t.jsx(e,{})})]},a={name:"Empty (Greeting)",render:()=>t.jsx(n,{setup:e=>{e.getState().ensureSession("s1"),e.getState().setActiveSession("s1")}})},r={name:"Conversation with Sources",render:()=>t.jsx(n,{setup:e=>{e.getState().ensureSession("s1"),e.getState().setActiveSession("s1"),e.getState().addMessage("s1",{id:"u1",type:"user",content:"What is the latest AOS version?",status:"complete",timestamp:new Date}),e.getState().addMessage("s1",{id:"a1",type:"assistant",content:`The latest AOS version is **7.3.0.6**. It was released on January 15, 2026 and includes several bug fixes and performance improvements.

### Key Changes

- Improved storage controller performance
- Fixed NTP synchronization issues on AHV
- Enhanced cluster health check reporting`,status:"complete",timestamp:new Date,sources:l(3),relatedQueries:["How to upgrade to AOS 7.3.0.6?","AOS 7.3.0.6 release notes","Is AOS 7.3.0.6 LTS or STS?"]}),e.getState().addMessage("s1",{id:"u2",type:"user",content:"How do I upgrade to it?",status:"complete",timestamp:new Date}),e.getState().addMessage("s1",{id:"a2",type:"assistant",content:`To upgrade to AOS 7.3.0.6, follow these steps:

1. Log into **Prism Central**
2. Navigate to **Settings > Upgrade Software**
3. Select the AOS upgrade
4. Click **Upgrade Now**

> **Note:** Ensure all health checks pass before starting the upgrade.`,status:"complete",timestamp:new Date,sources:l(5)})},onSourceClick:e=>console.log("Source clicked:",e),onRelatedQueryClick:e=>console.log("Related query clicked:",e)})},o={name:"Simple Conversation",render:()=>t.jsx(n,{setup:e=>{e.getState().ensureSession("s1"),e.getState().setActiveSession("s1"),e.getState().addMessage("s1",{id:"u1",type:"user",content:"Hello!",status:"complete",timestamp:new Date}),e.getState().addMessage("s1",{id:"a1",type:"assistant",content:"Hello! How can I help you today?",status:"complete",timestamp:new Date}),e.getState().addMessage("s1",{id:"u2",type:"user",content:"What is replication factor in Nutanix?",status:"complete",timestamp:new Date}),e.getState().addMessage("s1",{id:"a2",type:"assistant",content:`Replication Factor (RF) determines how many copies of data are stored across the cluster. Nutanix supports **RF2** (2 copies) and **RF3** (3 copies).

### RF2 vs RF3

| Feature | RF2 | RF3 |
|---------|-----|-----|
| Copies | 2 | 3 |
| Node failures tolerated | 1 | 2 |
| Storage overhead | 2x | 3x |`,status:"complete",timestamp:new Date})}})},i={name:"Streaming (Answer Events)",render:()=>t.jsx(n,{setup:e=>{e.getState().ensureSession("s1"),e.getState().setActiveSession("s1"),e.getState().addMessage("s1",{id:"u1",type:"user",content:"What are the best practices for AOS upgrades?",status:"complete",timestamp:new Date}),e.getState().createStreamingMessage("s1","a1"),e.getState().addAnswerEvent("s1",{type:"query_validation_complete",isComplete:!0,reasoning:null,data:null}),e.getState().addAnswerEvent("s1",{type:"retrieval_complete",isComplete:!0,reasoning:null,data:null}),e.getState().setSources("s1",l(5)),e.getState().addAnswerEvent("s1",{type:"generation_data",isComplete:!1,reasoning:null,data:null}),e.getState().appendStreamingContent("s1",`Based on the retrieved documents, here are the best practices for AOS upgrades:

1. **Run pre-upgrade health checks**
2. **Take a snapshot of CVMs before upgrading**`)}})},d={name:"Streaming (With Generating Loader)",render:()=>t.jsx(n,{showGeneratingLoader:!0,setup:e=>{e.getState().ensureSession("s1"),e.getState().setActiveSession("s1"),e.getState().addMessage("s1",{id:"u1",type:"user",content:"What are the best practices for AOS upgrades?",status:"complete",timestamp:new Date}),e.getState().createStreamingMessage("s1","a1"),e.getState().addAnswerEvent("s1",{type:"query_validation_complete",isComplete:!0,reasoning:null,data:null}),e.getState().addAnswerEvent("s1",{type:"retrieval_complete",isComplete:!0,reasoning:null,data:null}),e.getState().setSources("s1",l(3)),e.getState().addAnswerEvent("s1",{type:"generation_data",isComplete:!1,reasoning:null,data:null}),e.getState().appendStreamingContent("s1",`Based on the retrieved documents, here are the best practices for AOS upgrades:

1. **Run pre-upgrade health checks**`)}})},p={name:"Error State",render:()=>t.jsx(n,{setup:e=>{e.getState().ensureSession("s1"),e.getState().setActiveSession("s1"),e.getState().addMessage("s1",{id:"u1",type:"user",content:"How to configure VLANs on AHV?",status:"complete",timestamp:new Date}),e.getState().addMessage("s1",{id:"a1",type:"assistant",content:"",status:"error",timestamp:new Date,error:"Failed to generate response. The service is temporarily unavailable. Please try again."})}})},c={name:"Loading Messages",render:()=>t.jsx(n,{setup:e=>{e.getState().ensureSession("s1"),e.getState().setActiveSession("s1"),e.getState().setLoadingMessages("s1",!0)}})},g={name:"Messages Load Error",render:()=>t.jsx(n,{setup:e=>{e.getState().ensureSession("s1"),e.getState().setActiveSession("s1"),e.getState().setMessagesError("s1",new Error("Network error: Failed to fetch session messages"))}})};var h,y,v,w,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Empty (Greeting)',
  render: () => <StoryWrapper setup={engine => {
    engine.getState().ensureSession('s1');
    engine.getState().setActiveSession('s1');
  }} />
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"Empty state with greeting visible",...(A=(w=a.parameters)==null?void 0:w.docs)==null?void 0:A.description}}};var f,M,E,C,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Conversation with Sources',
  render: () => <StoryWrapper setup={engine => {
    engine.getState().ensureSession('s1');
    engine.getState().setActiveSession('s1');
    engine.getState().addMessage('s1', {
      id: 'u1',
      type: 'user',
      content: 'What is the latest AOS version?',
      status: 'complete',
      timestamp: new Date()
    });
    engine.getState().addMessage('s1', {
      id: 'a1',
      type: 'assistant',
      content: 'The latest AOS version is **7.3.0.6**. It was released on January 15, 2026 and includes several bug fixes and performance improvements.\\n\\n### Key Changes\\n\\n- Improved storage controller performance\\n- Fixed NTP synchronization issues on AHV\\n- Enhanced cluster health check reporting',
      status: 'complete',
      timestamp: new Date(),
      sources: makeSources(3),
      relatedQueries: ['How to upgrade to AOS 7.3.0.6?', 'AOS 7.3.0.6 release notes', 'Is AOS 7.3.0.6 LTS or STS?']
    });
    engine.getState().addMessage('s1', {
      id: 'u2',
      type: 'user',
      content: 'How do I upgrade to it?',
      status: 'complete',
      timestamp: new Date()
    });
    engine.getState().addMessage('s1', {
      id: 'a2',
      type: 'assistant',
      content: 'To upgrade to AOS 7.3.0.6, follow these steps:\\n\\n1. Log into **Prism Central**\\n2. Navigate to **Settings > Upgrade Software**\\n3. Select the AOS upgrade\\n4. Click **Upgrade Now**\\n\\n> **Note:** Ensure all health checks pass before starting the upgrade.',
      status: 'complete',
      timestamp: new Date(),
      sources: makeSources(5)
    });
  }} onSourceClick={source => console.log('Source clicked:', source)} onRelatedQueryClick={q => console.log('Related query clicked:', q)} />
}`,...(E=(M=r.parameters)==null?void 0:M.docs)==null?void 0:E.source},description:{story:"Multi-turn conversation with per-message sources and related queries",...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.description}}};var R,O,k,W,_;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Simple Conversation',
  render: () => <StoryWrapper setup={engine => {
    engine.getState().ensureSession('s1');
    engine.getState().setActiveSession('s1');
    engine.getState().addMessage('s1', {
      id: 'u1',
      type: 'user',
      content: 'Hello!',
      status: 'complete',
      timestamp: new Date()
    });
    engine.getState().addMessage('s1', {
      id: 'a1',
      type: 'assistant',
      content: 'Hello! How can I help you today?',
      status: 'complete',
      timestamp: new Date()
    });
    engine.getState().addMessage('s1', {
      id: 'u2',
      type: 'user',
      content: 'What is replication factor in Nutanix?',
      status: 'complete',
      timestamp: new Date()
    });
    engine.getState().addMessage('s1', {
      id: 'a2',
      type: 'assistant',
      content: 'Replication Factor (RF) determines how many copies of data are stored across the cluster. Nutanix supports **RF2** (2 copies) and **RF3** (3 copies).\\n\\n### RF2 vs RF3\\n\\n| Feature | RF2 | RF3 |\\n|---------|-----|-----|\\n| Copies | 2 | 3 |\\n| Node failures tolerated | 1 | 2 |\\n| Storage overhead | 2x | 3x |',
      status: 'complete',
      timestamp: new Date()
    });
  }} />
}`,...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.source},description:{story:"Simple conversation without sources",...(_=(W=o.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};var b,L,D,N,F;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Streaming (Answer Events)',
  render: () => <StoryWrapper setup={engine => {
    engine.getState().ensureSession('s1');
    engine.getState().setActiveSession('s1');
    engine.getState().addMessage('s1', {
      id: 'u1',
      type: 'user',
      content: 'What are the best practices for AOS upgrades?',
      status: 'complete',
      timestamp: new Date()
    });
    engine.getState().createStreamingMessage('s1', 'a1');
    engine.getState().addAnswerEvent('s1', {
      type: 'query_validation_complete',
      isComplete: true,
      reasoning: null,
      data: null
    });
    engine.getState().addAnswerEvent('s1', {
      type: 'retrieval_complete',
      isComplete: true,
      reasoning: null,
      data: null
    });
    engine.getState().setSources('s1', makeSources(5));
    engine.getState().addAnswerEvent('s1', {
      type: 'generation_data',
      isComplete: false,
      reasoning: null,
      data: null
    });
    engine.getState().appendStreamingContent('s1', 'Based on the retrieved documents, here are the best practices for AOS upgrades:\\n\\n1. **Run pre-upgrade health checks**\\n2. **Take a snapshot of CVMs before upgrading**');
  }} />
}`,...(D=(L=i.parameters)==null?void 0:L.docs)==null?void 0:D.source},description:{story:"Currently streaming with answer events",...(F=(N=i.parameters)==null?void 0:N.docs)==null?void 0:F.description}}};var H,T,j,q,G;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Streaming (With Generating Loader)',
  render: () => <StoryWrapper showGeneratingLoader setup={engine => {
    engine.getState().ensureSession('s1');
    engine.getState().setActiveSession('s1');
    engine.getState().addMessage('s1', {
      id: 'u1',
      type: 'user',
      content: 'What are the best practices for AOS upgrades?',
      status: 'complete',
      timestamp: new Date()
    });
    engine.getState().createStreamingMessage('s1', 'a1');
    engine.getState().addAnswerEvent('s1', {
      type: 'query_validation_complete',
      isComplete: true,
      reasoning: null,
      data: null
    });
    engine.getState().addAnswerEvent('s1', {
      type: 'retrieval_complete',
      isComplete: true,
      reasoning: null,
      data: null
    });
    engine.getState().setSources('s1', makeSources(3));
    engine.getState().addAnswerEvent('s1', {
      type: 'generation_data',
      isComplete: false,
      reasoning: null,
      data: null
    });
    engine.getState().appendStreamingContent('s1', 'Based on the retrieved documents, here are the best practices for AOS upgrades:\\n\\n1. **Run pre-upgrade health checks**');
  }} />
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"Streaming with generating loader enabled (opt-in, shows loader during content generation)",...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var I,P,V,B,U;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Error State',
  render: () => <StoryWrapper setup={engine => {
    engine.getState().ensureSession('s1');
    engine.getState().setActiveSession('s1');
    engine.getState().addMessage('s1', {
      id: 'u1',
      type: 'user',
      content: 'How to configure VLANs on AHV?',
      status: 'complete',
      timestamp: new Date()
    });
    engine.getState().addMessage('s1', {
      id: 'a1',
      type: 'assistant',
      content: '',
      status: 'error',
      timestamp: new Date(),
      error: 'Failed to generate response. The service is temporarily unavailable. Please try again.'
    });
  }} />
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"Error state for assistant message",...(U=(B=p.parameters)==null?void 0:B.docs)==null?void 0:U.description}}};var K,Q,z,J,$;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Loading Messages',
  render: () => <StoryWrapper setup={engine => {
    engine.getState().ensureSession('s1');
    engine.getState().setActiveSession('s1');
    engine.getState().setLoadingMessages('s1', true);
  }} />
}`,...(z=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:z.source},description:{story:"Loading state — shows the spinner when session messages are being fetched from the backend",...($=(J=c.parameters)==null?void 0:J.docs)==null?void 0:$.description}}};var X,Y,Z,ee,te;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Messages Load Error',
  render: () => <StoryWrapper setup={engine => {
    engine.getState().ensureSession('s1');
    engine.getState().setActiveSession('s1');
    engine.getState().setMessagesError('s1', new Error('Network error: Failed to fetch session messages'));
  }} />
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Error state — shows the error banner when fetching session messages fails",...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};const Le=["EmptyWithGreeting","ConversationWithSources","SimpleConversation","StreamingWithAnswerEvents","StreamingWithGeneratingLoader","ErrorState","LoadingMessages","MessagesLoadError"];export{r as ConversationWithSources,a as EmptyWithGreeting,p as ErrorState,c as LoadingMessages,g as MessagesLoadError,o as SimpleConversation,i as StreamingWithAnswerEvents,d as StreamingWithGeneratingLoader,Le as __namedExportsOrder,be as default};
