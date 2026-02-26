import{j as c}from"./jsx-runtime-9Zi5AnTW.js";import{S as f}from"./SourceList-Dxxlot37.js";import"./index-DwAMp0GL.js";import"./clsx-CWrJxR-q.js";import"./index-yS6jhwZ_.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./useChatTranslation-DDuHb0UZ.js";import"./i18n-CMj5lJeX.js";const t=[{id:"KB-1042",title:"Storage Configuration Guide",link:"https://docs.example.com/storage-config",category:"KB",visibility:"Public"},{id:"KB-2087",title:"Policy Best Practices for Enterprise Deployments",link:"https://docs.example.com/policies",category:"KB",visibility:"Internal"},{id:"",title:"API Reference",link:"https://docs.example.com/api",category:"API"},{id:"KB-3154",title:"Troubleshooting Replication Failures",link:"https://docs.example.com/replication",category:"KB",visibility:"Public"},{id:"DOC-501",title:"Disaster Recovery Planning - Comprehensive Guide to Nutanix DR Strategies",link:"https://docs.example.com/dr-planning",category:"Document",visibility:"Public"}],j={title:"Components/Sources/SourceList",component:f,parameters:{layout:"padded",docs:{description:{component:"Collapsible list of source citation cards with category badges, expand/collapse behavior, and click handlers."}}},tags:["autodocs"],decorators:[a=>c.jsx("div",{style:{maxWidth:600,margin:"0 auto",padding:24},children:c.jsx(a,{})})]},e={args:{sources:t,maxVisible:3}},s={name:"All Sources Visible",args:{sources:t.slice(0,3),maxVisible:5}},o={name:"Sources Without Category/Visibility",args:{sources:[{id:"1",title:"Document A",link:"https://example.com/a"},{id:"2",title:"Document B",link:"https://example.com/b"},{id:"",title:"Document C (no ID prefix)",link:"https://example.com/c"}]}},r={name:"Many Sources (Show More)",args:{sources:t,maxVisible:2}},i={name:"With Click Handler",args:{sources:t.slice(0,3),onSourceClick:a=>alert(`Clicked: ${a.title}`)}};var n,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    sources: sampleSources,
    maxVisible: 3
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'All Sources Visible',
  args: {
    sources: sampleSources.slice(0, 3),
    maxVisible: 5
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,S,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Sources Without Category/Visibility',
  args: {
    sources: [{
      id: '1',
      title: 'Document A',
      link: 'https://example.com/a'
    }, {
      id: '2',
      title: 'Document B',
      link: 'https://example.com/b'
    }, {
      id: '',
      title: 'Document C (no ID prefix)',
      link: 'https://example.com/c'
    }]
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var h,b,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Many Sources (Show More)',
  args: {
    sources: sampleSources,
    maxVisible: 2
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,C,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With Click Handler',
  args: {
    sources: sampleSources.slice(0, 3),
    onSourceClick: (source: Source) => alert(\`Clicked: \${source.title}\`)
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const H=["Default","AllVisible","NoBadges","ManySourcesCollapsed","WithClickHandler"];export{s as AllVisible,e as Default,r as ManySourcesCollapsed,o as NoBadges,i as WithClickHandler,H as __namedExportsOrder,j as default};
