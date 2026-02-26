import{j as g}from"./jsx-runtime-9Zi5AnTW.js";import{A as K}from"./AnswerEvents-CeT5N_3v.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./useChatTranslation-DDuHb0UZ.js";import"./i18n-CMj5lJeX.js";import"./SparkleIcon-CIY3MwHb.js";function t(c){const p=["How to identify whether the installed AOS version is LTS or STS","What's New 7.0.1.8 Release Notes AOS v7_0_1_8 AOS","AOS 7.3.0.6 Release Notes 7.3.0.6 Release Notes AOS v7_3_0_6","AOS 7.3.0.6 Release Notes 7.3.0.6 Release Notes AOS v7_3_0_6","Provide AOS version info on ESXi host","Cluster health check failure after AOS upgrade","AOS upgrade path matrix for Nutanix clusters","Best practices for AOS version management"],u=["KB","Document","KB","Document","KB","Advisory","KB","Document"],m=["","AOS 6.6","NAI 1.2","","","","Public","Internal"];return Array.from({length:c},(j,e)=>({id:e===4?"":`KB${100+e}`,title:p[e%p.length],link:`https://portal.nutanix.com/kb/${100+e}`,category:u[e%u.length],visibility:m[e%m.length]||void 0}))}const ee={title:"Components/Sources/AnswerEvents",component:K,parameters:{layout:"padded",docs:{description:{component:"Collapsible pipeline progress steps showing query validation, retrieval, and generation phases during streaming. Each step shows a label, completion state, and optional sources."}}},tags:["autodocs"],decorators:[c=>g.jsx("div",{style:{maxWidth:720,margin:"0 auto",padding:24,background:"#ffffff"},children:g.jsx(c,{})})]},L=[{id:"analyze",label:"Analyzing the question",isComplete:!0},{id:"read",label:"Reading documents",isComplete:!0},{id:"generate",label:"Generating answer...",isComplete:!0}],n={name:"Default (All Complete)",args:{steps:L,isStreaming:!1}},s={name:"With Sources",args:{steps:[{id:"analyze",label:"Analyzing the question",isComplete:!0},{id:"read",label:"Reading documents",isComplete:!0,sources:t(8)},{id:"generate",label:"Generating answer...",isComplete:!0}],isStreaming:!1,maxVisibleSources:5}},a={name:"Streaming (In Progress)",args:{steps:[{id:"validate",label:"Validating query",isComplete:!0},{id:"analyze",label:"Analyzing the question",isComplete:!0},{id:"read",label:"Reading documents",isComplete:!1,sources:t(5)}],isStreaming:!0}},r={name:"Streaming (Last Step with Description)",args:{steps:[{id:"validate",label:"Validating query",isComplete:!0},{id:"analyze",label:"Analyzing the question",isComplete:!0,description:"Identified key entities and intent from the user query."},{id:"generate",label:"Generating answer...",isComplete:!1,description:"Composing a comprehensive response from retrieved documents."}],isStreaming:!0}},i={name:"With Descriptions",args:{steps:[{id:"validate",label:"Validating query",isComplete:!0,description:"Checked query length and language compliance."},{id:"analyze",label:"Analyzing the question",isComplete:!0,description:"Identified key entities and intent from the user query."},{id:"read",label:"Reading documents",isComplete:!0,description:"Retrieved and ranked 8 relevant documents from the knowledge base.",sources:t(4)},{id:"generate",label:"Generating answer...",isComplete:!0}],isStreaming:!1}},l={name:"Collapsed",args:{steps:[{id:"analyze",label:"Analyzing the question",isComplete:!0},{id:"read",label:"Reading documents",isComplete:!0,sources:t(5)},{id:"generate",label:"Generating answer...",isComplete:!0}],isStreaming:!1,defaultExpanded:!1}},B=[{id:"query_validation",label:"Understanding your question",isComplete:!0},{id:"query_validation_safety_check",label:"Checking content safety",isComplete:!0},{id:"retrieval",label:"Searching knowledge base",isComplete:!0},{id:"retrieval_follow_up_check",label:"Reviewing conversation history",isComplete:!0},{id:"retrieval_spell_check",label:"Scanning for spelling errors",isComplete:!0},{id:"retrieval_query_analysis",label:"Processing query intent",isComplete:!0},{id:"retrieval_rerank",label:"Organizing documents by relevance",isComplete:!0},{id:"retrieval_context_formulation",label:"Building context",isComplete:!0,sources:t(6)}],o={name:"With Excluded Events",args:{steps:B,isStreaming:!1,excludeEvents:["retrieval_follow_up_check","retrieval_spell_check","query_validation_safety_check"]},parameters:{docs:{description:{story:"Uses `excludeEvents` to hide verbose sub-steps. Compare with the full pipeline: 8 steps are provided but only 5 render because `retrieval_follow_up_check`, `retrieval_spell_check`, and `query_validation_safety_check` are excluded."}}}},d={name:"Full Pipeline (No Exclusions)",args:{steps:B,isStreaming:!1},parameters:{docs:{description:{story:'All 8 pipeline steps rendered without any exclusions. Compare with "With Excluded Events" to see the effect of `excludeEvents`.'}}}};var h,f,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Default (All Complete)',
  args: {
    steps: completeSteps,
    isStreaming: false
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,v,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Sources',
  args: {
    steps: [{
      id: 'analyze',
      label: 'Analyzing the question',
      isComplete: true
    }, {
      id: 'read',
      label: 'Reading documents',
      isComplete: true,
      sources: makeSources(8)
    }, {
      id: 'generate',
      label: 'Generating answer...',
      isComplete: true
    }],
    isStreaming: false,
    maxVisibleSources: 5
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var C,_,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Streaming (In Progress)',
  args: {
    steps: [{
      id: 'validate',
      label: 'Validating query',
      isComplete: true
    }, {
      id: 'analyze',
      label: 'Analyzing the question',
      isComplete: true
    }, {
      id: 'read',
      label: 'Reading documents',
      isComplete: false,
      sources: makeSources(5)
    }],
    isStreaming: true
  }
}`,...(k=(_=a.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var x,q,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Streaming (Last Step with Description)',
  args: {
    steps: [{
      id: 'validate',
      label: 'Validating query',
      isComplete: true
    }, {
      id: 'analyze',
      label: 'Analyzing the question',
      isComplete: true,
      description: 'Identified key entities and intent from the user query.'
    }, {
      id: 'generate',
      label: 'Generating answer...',
      isComplete: false,
      description: 'Composing a comprehensive response from retrieved documents.'
    }],
    isStreaming: true
  }
}`,...(w=(q=r.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var A,E,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Descriptions',
  args: {
    steps: [{
      id: 'validate',
      label: 'Validating query',
      isComplete: true,
      description: 'Checked query length and language compliance.'
    }, {
      id: 'analyze',
      label: 'Analyzing the question',
      isComplete: true,
      description: 'Identified key entities and intent from the user query.'
    }, {
      id: 'read',
      label: 'Reading documents',
      isComplete: true,
      description: 'Retrieved and ranked 8 relevant documents from the knowledge base.',
      sources: makeSources(4)
    }, {
      id: 'generate',
      label: 'Generating answer...',
      isComplete: true
    }],
    isStreaming: false
  }
}`,...(z=(E=i.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var R,W,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Collapsed',
  args: {
    steps: [{
      id: 'analyze',
      label: 'Analyzing the question',
      isComplete: true
    }, {
      id: 'read',
      label: 'Reading documents',
      isComplete: true,
      sources: makeSources(5)
    }, {
      id: 'generate',
      label: 'Generating answer...',
      isComplete: true
    }],
    isStreaming: false,
    defaultExpanded: false
  }
}`,...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var O,P,N;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With Excluded Events',
  args: {
    steps: realisticPipelineSteps,
    isStreaming: false,
    excludeEvents: ['retrieval_follow_up_check', 'retrieval_spell_check', 'query_validation_safety_check']
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses \`excludeEvents\` to hide verbose sub-steps. ' + 'Compare with the full pipeline: 8 steps are provided but only 5 render because ' + '\`retrieval_follow_up_check\`, \`retrieval_spell_check\`, and \`query_validation_safety_check\` are excluded.'
      }
    }
  }
}`,...(N=(P=o.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var G,I,V;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Full Pipeline (No Exclusions)',
  args: {
    steps: realisticPipelineSteps,
    isStreaming: false
  },
  parameters: {
    docs: {
      description: {
        story: 'All 8 pipeline steps rendered without any exclusions. ' + 'Compare with "With Excluded Events" to see the effect of \`excludeEvents\`.'
      }
    }
  }
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const te=["Default","WithSources","Streaming","StreamingLastStepWithDescription","WithDescriptions","Collapsed","WithExcludedEvents","FullPipeline"];export{l as Collapsed,n as Default,d as FullPipeline,a as Streaming,r as StreamingLastStepWithDescription,i as WithDescriptions,o as WithExcludedEvents,s as WithSources,te as __namedExportsOrder,ee as default};
