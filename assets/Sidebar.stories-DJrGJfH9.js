import{j as e}from"./jsx-runtime-9Zi5AnTW.js";import{r as w,R as A}from"./index-DwAMp0GL.js";import{l as o}from"./index-yS6jhwZ_.js";import{c as F,C as L}from"./createChatEngine-C_-uyuES.js";import{S as N}from"./Sidebar-AfqAyT7O.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./clsx-CWrJxR-q.js";import"./i18n-CMj5lJeX.js";import"./useChatTranslation-DDuHb0UZ.js";import"./ChatHistory-D2R5wpO5.js";import"./HistoryItem-PZKH1WuT.js";import"./ChatHistory.module-Cfg-qQMF.js";import"./NewChatButton-DxQFp7M_.js";function T(){return{async*sendMessage(){}}}function z({setup:r,children:s}){const[t]=A.useState(()=>{const a=F({adapter:T()});return r(a),a});return w.useEffect(()=>()=>t.destroy(),[t]),e.jsx(L,{engine:t,children:s})}function u(r){const s=[{id:"s1",title:"How to upgrade AOS?"},{id:"s2",title:"Replication factor best practices"},{id:"s3",title:"AHV networking configuration guide"},{id:"s4",title:"Prism Central deployment steps"},{id:"s5",title:"NCC health check failures troubleshooting"}];for(const t of s)r.getState().ensureSession(t.id),r.getState().generateSessionTitle(t.id,t.title);r.getState().setActiveSession("s1")}function n({defaultExpanded:r=!0,setup:s,children:t,showInfoBanner:a}){const[m,k]=w.useState(r);return e.jsx(z,{setup:s,children:e.jsxs(o.FlexLayout,{flexDirection:"column",style:{height:600},children:[e.jsx(o.FlexLayout,{padding:"10px",style:{flexShrink:0},children:e.jsx(o.Button,{onClick:()=>k(R=>!R),children:m?"Collapse Sidebar":"Expand Sidebar"})}),e.jsxs(o.FlexLayout,{style:{flex:1,border:"1px solid #e0e0e0",borderRadius:8,overflow:"hidden"},children:[e.jsx(N,{isExpanded:m,showInfoBanner:a,children:t}),e.jsx("div",{style:{flex:1,padding:24,background:"#f8f9fa"},children:e.jsx("p",{style:{color:"#627386"},children:"Main content area"})})]})]})})}const $={title:"Components/Sidebar/Sidebar",parameters:{layout:"padded",docs:{description:{component:"Sidebar container with header, NewChatButton, ChatHistory list, and optional info banner. Supports expanded/collapsed states."}}},tags:["autodocs"]},d={name:"Expanded",render:()=>e.jsx(n,{defaultExpanded:!0,setup:u})},i={name:"Collapsed",render:()=>e.jsx(n,{defaultExpanded:!1,setup:u})},p={name:"With Custom Children",render:()=>e.jsx(n,{defaultExpanded:!0,setup:()=>{},children:e.jsxs("div",{style:{padding:20},children:[e.jsx("h4",{style:{margin:"0 0 12px"},children:"Custom Content"}),e.jsx("p",{style:{margin:0,color:"#627386",fontSize:14},children:"This sidebar renders custom children instead of the default ChatHistory."})]})})},c={name:"Without Info Banner",render:()=>e.jsx(n,{defaultExpanded:!0,setup:u,showInfoBanner:!1})},l={name:"Empty History",render:()=>e.jsx(n,{defaultExpanded:!0,setup:()=>{}})};var f,x,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Expanded',
  render: () => <InteractiveSidebar defaultExpanded={true} setup={createSessionsSetup} />
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,y,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Collapsed',
  render: () => <InteractiveSidebar defaultExpanded={false} setup={createSessionsSetup} />
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var g,E,b;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'With Custom Children',
  render: () => <InteractiveSidebar defaultExpanded={true} setup={() => {}}>
      <div style={{
      padding: 20
    }}>
        <h4 style={{
        margin: '0 0 12px'
      }}>Custom Content</h4>
        <p style={{
        margin: 0,
        color: '#627386',
        fontSize: 14
      }}>
          This sidebar renders custom children instead of the default ChatHistory.
        </p>
      </div>
    </InteractiveSidebar>
}`,...(b=(E=p.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var j,v,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Without Info Banner',
  render: () => <InteractiveSidebar defaultExpanded={true} setup={createSessionsSetup} showInfoBanner={false} />
}`,...(I=(v=c.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var H,W,B;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Empty History',
  render: () => <InteractiveSidebar defaultExpanded={true} setup={() => {}} />
}`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const ee=["Expanded","Collapsed","WithCustomChildren","WithoutInfoBanner","EmptyHistory"];export{i as Collapsed,l as EmptyHistory,d as Expanded,p as WithCustomChildren,c as WithoutInfoBanner,ee as __namedExportsOrder,$ as default};
