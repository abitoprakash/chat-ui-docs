import{j as e}from"./jsx-runtime-9Zi5AnTW.js";import{R as W,r as M}from"./index-DwAMp0GL.js";import{c as R,C as I}from"./createChatEngine-C_-uyuES.js";import{C as n}from"./ChatInput-lk6B8Q17.js";import"./i18n-CMj5lJeX.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./useChatTranslation-DDuHb0UZ.js";import"./useSessionState-CaAypWQQ.js";function D(){return{async*sendMessage(){}}}function i({setup:r,children:v}){const[t]=W.useState(()=>{const u=R({adapter:D()});return r(u),u});return M.useEffect(()=>()=>t.destroy(),[t]),e.jsx(I,{engine:t,children:v(t)})}function p(r){r.getState().ensureSession("s1"),r.getState().setActiveSession("s1")}const U={title:"Components/Core/ChatInput",parameters:{layout:"padded",docs:{description:{component:"Multi-line text input with send/stop button. Supports fullscreen, chat, and inline modes. Uses useChatActions internally to send messages and useDraftQuery for input persistence."}}},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:720,margin:"0 auto",padding:24},children:e.jsx(r,{})})]},s={name:"Fullscreen Mode",render:()=>e.jsx(i,{setup:p,children:()=>e.jsx("div",{style:{border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(n,{mode:"fullscreen"})})})},a={name:"Chat Mode (Condensed)",render:()=>e.jsx(i,{setup:p,children:()=>e.jsx("div",{style:{border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(n,{mode:"chat"})})})},o={name:"Streaming (Stop Button)",render:()=>e.jsx(i,{setup:r=>{p(r),r.getState().createStreamingMessage("s1","a1"),r.getState().appendStreamingContent("s1","Generating...")},children:()=>e.jsx("div",{style:{border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(n,{mode:"fullscreen"})})})},d={name:"With Pre-filled Draft",render:()=>e.jsx(i,{setup:r=>{p(r),r.getState().setDraftQuery("s1","How do I upgrade AOS?")},children:()=>e.jsx("div",{style:{border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(n,{mode:"fullscreen"})})})};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  render: () => <StoryWrapper setup={defaultSetup}>
      {() => <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: 8
    }}>
          <ChatInput mode="fullscreen" />
        </div>}
    </StoryWrapper>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var S,g,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Chat Mode (Condensed)',
  render: () => <StoryWrapper setup={defaultSetup}>
      {() => <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: 8
    }}>
          <ChatInput mode="chat" />
        </div>}
    </StoryWrapper>
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Streaming (Stop Button)',
  render: () => <StoryWrapper setup={engine => {
    defaultSetup(engine);
    engine.getState().createStreamingMessage('s1', 'a1');
    engine.getState().appendStreamingContent('s1', 'Generating...');
  }}>
      {() => <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: 8
    }}>
          <ChatInput mode="fullscreen" />
        </div>}
    </StoryWrapper>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,b,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With Pre-filled Draft',
  render: () => <StoryWrapper setup={engine => {
    defaultSetup(engine);
    engine.getState().setDraftQuery('s1', 'How do I upgrade AOS?');
  }}>
      {() => <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: 8
    }}>
          <ChatInput mode="fullscreen" />
        </div>}
    </StoryWrapper>
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const k=["FullscreenMode","ChatMode","Streaming","WithDraft"];export{a as ChatMode,s as FullscreenMode,o as Streaming,d as WithDraft,k as __namedExportsOrder,U as default};
