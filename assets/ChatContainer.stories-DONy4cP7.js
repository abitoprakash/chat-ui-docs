import{j as e}from"./jsx-runtime-9Zi5AnTW.js";import{R as E,r as W}from"./index-DwAMp0GL.js";import{c as S,C as b}from"./createChatEngine-C_-uyuES.js";import{C as r}from"./ChatContainer-CE_3xLUh.js";import"./i18n-CMj5lJeX.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";function P(){return{async*sendMessage(){}}}function i({children:n}){const[d]=E.useState(()=>S({adapter:P()}));return W.useEffect(()=>()=>d.destroy(),[d]),e.jsx(b,{engine:d,children:n})}const c=()=>e.jsxs("div",{style:{padding:20,textAlign:"center",color:"#627386"},children:[e.jsx("p",{children:"Container content goes here"}),e.jsx("p",{style:{fontSize:13,marginTop:8},children:"Mode determines sizing and visual treatment"})]}),_={title:"Components/Core/ChatContainer",component:r,parameters:{layout:"fullscreen",docs:{description:{component:"Layout wrapper that applies mode-specific styling (fullscreen, chat, inline). Calls useSessionMessages() internally to fetch messages when the active session changes."}}},argTypes:{mode:{control:"select",options:["fullscreen","chat","inline"]}}},a={args:{mode:"fullscreen"},render:n=>e.jsx(i,{children:e.jsx("div",{style:{height:"400px",border:"1px dashed #ccc"},children:e.jsx(r,{...n,children:e.jsx(c,{})})})})},s={args:{mode:"chat"},render:n=>e.jsx(i,{children:e.jsx("div",{style:{padding:40,background:"#f2f4f6"},children:e.jsx(r,{...n,children:e.jsx(c,{})})})})},t={args:{mode:"inline"},render:n=>e.jsx(i,{children:e.jsx("div",{style:{maxWidth:800,margin:"0 auto",padding:20},children:e.jsx(r,{...n,children:e.jsx(c,{})})})})},o={args:{mode:"chat",className:"custom-container-class"},render:n=>e.jsx(i,{children:e.jsx("div",{style:{padding:40,background:"#f2f4f6"},children:e.jsx(r,{...n,children:e.jsx(c,{})})})})};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    mode: 'fullscreen'
  },
  render: args => <EngineWrapper>
      <div style={{
      height: '400px',
      border: '1px dashed #ccc'
    }}>
        <ChatContainer {...args}>
          <PlaceholderContent />
        </ChatContainer>
      </div>
    </EngineWrapper>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mode: 'chat'
  },
  render: args => <EngineWrapper>
      <div style={{
      padding: 40,
      background: '#f2f4f6'
    }}>
        <ChatContainer {...args}>
          <PlaceholderContent />
        </ChatContainer>
      </div>
    </EngineWrapper>
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var C,x,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    mode: 'inline'
  },
  render: args => <EngineWrapper>
      <div style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: 20
    }}>
        <ChatContainer {...args}>
          <PlaceholderContent />
        </ChatContainer>
      </div>
    </EngineWrapper>
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,y,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    mode: 'chat',
    className: 'custom-container-class'
  },
  render: args => <EngineWrapper>
      <div style={{
      padding: 40,
      background: '#f2f4f6'
    }}>
        <ChatContainer {...args}>
          <PlaceholderContent />
        </ChatContainer>
      </div>
    </EngineWrapper>
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const L=["Fullscreen","Chat","Inline","CustomClassName"];export{s as Chat,o as CustomClassName,a as Fullscreen,t as Inline,L as __namedExportsOrder,_ as default};
