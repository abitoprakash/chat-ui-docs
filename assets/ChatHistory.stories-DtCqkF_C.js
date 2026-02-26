import{j as t}from"./jsx-runtime-9Zi5AnTW.js";import{R as Q,r as Y}from"./index-DwAMp0GL.js";import{c as Z,C as ee}from"./createChatEngine-C_-uyuES.js";import{c as te,M as re,a as ne}from"./mockHistory-CuxjG-0y.js";import{C as n}from"./ChatHistory-D2R5wpO5.js";import"./i18n-CMj5lJeX.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./HistoryItem-PZKH1WuT.js";import"./ChatHistory.module-Cfg-qQMF.js";import"./useChatTranslation-DDuHb0UZ.js";function se(){return{async*sendMessage(){}}}function s({setup:e,adapter:a,children:r}){const[i]=Q.useState(()=>{const h=Z({adapter:a??se()});return e(h),h});return Y.useEffect(()=>()=>i.destroy(),[i]),t.jsx(ee,{engine:i,children:r})}function u(e){const a=[{id:"s1",title:"How to upgrade AOS?"},{id:"s2",title:"Replication factor best practices"},{id:"s3",title:"AHV networking configuration guide"},{id:"s4",title:"Prism Central deployment steps"},{id:"s5",title:"NCC health check failures troubleshooting"}];for(const r of a)e.getState().ensureSession(r.id),e.getState().generateSessionTitle(r.id,r.title);e.getState().setActiveSession("s1")}const be={title:"Components/Sidebar/ChatHistory",parameters:{layout:"padded",docs:{description:{component:"Hook-driven scrollable chat history list. Auto-fetches the session list via useLoadHistory on mount. Uses useChatHistory for data, and deleteSession calls the backend before removing locally."}}},tags:["autodocs"]},S={name:"Default",render:()=>{const e=te({historySessions:re,sessionMessages:ne,historyDelay:1200,sessionMessagesDelay:600});return t.jsx(s,{setup:()=>{},adapter:e,children:t.jsx("div",{style:{width:260,height:500,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(n,{})})})}},l={name:"Empty State",render:()=>t.jsx(s,{setup:()=>{},children:t.jsx("div",{style:{width:260,height:400,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(n,{})})})},o={name:"Loading State",render:()=>{const e={async*sendMessage(){},fetchHistory:()=>new Promise(()=>{})};return t.jsx(s,{setup:()=>{},adapter:e,children:t.jsx("div",{style:{width:260,height:500,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(n,{loadingItemCount:5})})})}},m={name:"With Streaming Session",render:()=>t.jsx(s,{setup:e=>{u(e),e.getState().createStreamingMessage("s2","a1"),e.getState().appendStreamingContent("s2","Generating...")},children:t.jsx("div",{style:{width:260,height:500,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(n,{})})})},d={name:"With Unread Items",render:()=>t.jsx(s,{setup:e=>{u(e),e.getState().setUnread("s2",!0),e.getState().setUnread("s4",!0)},children:t.jsx("div",{style:{width:260,height:500,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(n,{})})})},p={name:"Multiple Streaming Sessions",render:()=>t.jsx(s,{setup:e=>{u(e),e.getState().createStreamingMessage("s2","a1"),e.getState().appendStreamingContent("s2","Generating..."),e.getState().createStreamingMessage("s4","a2"),e.getState().appendStreamingContent("s4","Also generating..."),e.getState().createStreamingMessage("s5","a3")},children:t.jsx("div",{style:{width:260,height:500,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(n,{})})})},g={name:"Streaming + Unread Mixed",render:()=>t.jsx(s,{setup:e=>{u(e),e.getState().createStreamingMessage("s2","a1"),e.getState().appendStreamingContent("s2","Generating..."),e.getState().setUnread("s3",!0),e.getState().setUnread("s5",!0),e.getState().createStreamingMessage("s4","a2")},children:t.jsx("div",{style:{width:260,height:500,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(n,{})})})},c={name:"Many Items (Scrollable)",render:()=>t.jsx(s,{setup:e=>{const a=["How to upgrade AOS?","Replication factor best practices","AHV networking configuration guide","Prism Central deployment steps","NCC health check failures troubleshooting","Storage container policies","VM migration between clusters","Nutanix Files setup guide","Objects store configuration","Calm blueprint automation","Flow network security rules","Era database provisioning","LCM firmware updates","Karbon Kubernetes cluster setup","Xi Leap disaster recovery","Foundation node imaging","CVM memory configuration","Hypervisor comparison AHV vs ESXi"];for(let r=0;r<a.length;r++){const i=`s${r+1}`;e.getState().ensureSession(i),e.getState().generateSessionTitle(i,a[r])}e.getState().setActiveSession("s3"),e.getState().setUnread("s7",!0),e.getState().setUnread("s12",!0),e.getState().createStreamingMessage("s5","a1"),e.getState().appendStreamingContent("s5","Working...")},children:t.jsx("div",{style:{width:260,height:500,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:t.jsx(n,{})})})};var y,v,b;S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const adapter = createMockAdapter({
      historySessions: MOCK_SESSIONS,
      sessionMessages: MOCK_SESSION_MESSAGES,
      historyDelay: 1200,
      sessionMessagesDelay: 600
    });
    return <StoryWrapper setup={() => {}} adapter={adapter}>
        <div style={{
        width: 260,
        height: 500,
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
          <ChatHistory />
        </div>
      </StoryWrapper>;
  }
}`,...(b=(v=S.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,x,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Empty State',
  render: () => <StoryWrapper setup={() => {}}>
      <div style={{
      width: 260,
      height: 400,
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      overflow: 'hidden'
    }}>
        <ChatHistory />
      </div>
    </StoryWrapper>
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var M,C,j,W,H;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Loading State',
  render: () => {
    const pendingAdapter: ChatAdapter = {
      async *sendMessage() {},
      fetchHistory: () => new Promise(() => {})
    };
    return <StoryWrapper setup={() => {}} adapter={pendingAdapter}>
        <div style={{
        width: 260,
        height: 500,
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
          <ChatHistory loadingItemCount={5} />
        </div>
      </StoryWrapper>;
  }
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source},description:{story:"Loading state — adapter.fetchHistory returns a never-resolving promise so the skeleton stays visible",...(H=(W=o.parameters)==null?void 0:W.docs)==null?void 0:H.description}}};var A,R,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Streaming Session',
  render: () => <StoryWrapper setup={engine => {
    createSessionsSetup(engine);
    engine.getState().createStreamingMessage('s2', 'a1');
    engine.getState().appendStreamingContent('s2', 'Generating...');
  }}>
      <div style={{
      width: 260,
      height: 500,
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      overflow: 'hidden'
    }}>
        <ChatHistory />
      </div>
    </StoryWrapper>
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var U,k,I,O,L;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Unread Items',
  render: () => <StoryWrapper setup={engine => {
    createSessionsSetup(engine);
    engine.getState().setUnread('s2', true);
    engine.getState().setUnread('s4', true);
  }}>
      <div style={{
      width: 260,
      height: 500,
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      overflow: 'hidden'
    }}>
        <ChatHistory />
      </div>
    </StoryWrapper>
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:"Sessions with unread messages (green dot indicator)",...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.description}}};var N,V,D,G,K;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Multiple Streaming Sessions',
  render: () => <StoryWrapper setup={engine => {
    createSessionsSetup(engine);
    engine.getState().createStreamingMessage('s2', 'a1');
    engine.getState().appendStreamingContent('s2', 'Generating...');
    engine.getState().createStreamingMessage('s4', 'a2');
    engine.getState().appendStreamingContent('s4', 'Also generating...');
    engine.getState().createStreamingMessage('s5', 'a3');
  }}>
      <div style={{
      width: 260,
      height: 500,
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      overflow: 'hidden'
    }}>
        <ChatHistory />
      </div>
    </StoryWrapper>
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source},description:{story:"Multiple sessions streaming at the same time",...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};var _,F,P,X,T;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Streaming + Unread Mixed',
  render: () => <StoryWrapper setup={engine => {
    createSessionsSetup(engine);
    engine.getState().createStreamingMessage('s2', 'a1');
    engine.getState().appendStreamingContent('s2', 'Generating...');
    engine.getState().setUnread('s3', true);
    engine.getState().setUnread('s5', true);
    engine.getState().createStreamingMessage('s4', 'a2');
  }}>
      <div style={{
      width: 260,
      height: 500,
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      overflow: 'hidden'
    }}>
        <ChatHistory />
      </div>
    </StoryWrapper>
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:"Mix of streaming and unread sessions",...(T=(X=g.parameters)==null?void 0:X.docs)==null?void 0:T.description}}};var $,q,z,B,J;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Many Items (Scrollable)',
  render: () => <StoryWrapper setup={engine => {
    const topics = ['How to upgrade AOS?', 'Replication factor best practices', 'AHV networking configuration guide', 'Prism Central deployment steps', 'NCC health check failures troubleshooting', 'Storage container policies', 'VM migration between clusters', 'Nutanix Files setup guide', 'Objects store configuration', 'Calm blueprint automation', 'Flow network security rules', 'Era database provisioning', 'LCM firmware updates', 'Karbon Kubernetes cluster setup', 'Xi Leap disaster recovery', 'Foundation node imaging', 'CVM memory configuration', 'Hypervisor comparison AHV vs ESXi'];
    for (let i = 0; i < topics.length; i++) {
      const id = \`s\${i + 1}\`;
      engine.getState().ensureSession(id);
      engine.getState().generateSessionTitle(id, topics[i]);
    }
    engine.getState().setActiveSession('s3');
    engine.getState().setUnread('s7', true);
    engine.getState().setUnread('s12', true);
    engine.getState().createStreamingMessage('s5', 'a1');
    engine.getState().appendStreamingContent('s5', 'Working...');
  }}>
      <div style={{
      width: 260,
      height: 500,
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      overflow: 'hidden'
    }}>
        <ChatHistory />
      </div>
    </StoryWrapper>
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"Many items to demonstrate scrolling",...(J=(B=c.parameters)==null?void 0:B.docs)==null?void 0:J.description}}};const fe=["Default","Empty","Loading","WithStreaming","WithUnreadItems","MultipleStreaming","StreamingAndUnread","ManyItems"];export{S as Default,l as Empty,o as Loading,c as ManyItems,p as MultipleStreaming,g as StreamingAndUnread,m as WithStreaming,d as WithUnreadItems,fe as __namedExportsOrder,be as default};
