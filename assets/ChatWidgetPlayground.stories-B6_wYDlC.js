import{j as t}from"./jsx-runtime-9Zi5AnTW.js";import{l as e}from"./index-yS6jhwZ_.js";import{c as f,M as A,a as I}from"./mockHistory-CuxjG-0y.js";import{S as l}from"./SparkleIcon-CIY3MwHb.js";import{C as k}from"./ChatWidget-QaBnOjM_.js";import"./index-DwAMp0GL.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./clsx-CWrJxR-q.js";import"./createChatEngine-C_-uyuES.js";import"./i18n-CMj5lJeX.js";import"./MessageList-DpJOWcma.js";import"./useSessionState-CaAypWQQ.js";import"./useChatTranslation-DDuHb0UZ.js";import"./AnswerEvents-CeT5N_3v.js";import"./AssistantMessage-C15-qYe2.js";import"./MarkdownRenderer-DAtZwI_u.js";import"./markdown-huzLI7hZ.js";import"./CopyButton-D7BXTTna.js";import"./SourceList-Dxxlot37.js";import"./RelatedQueries-CF9Rv8cG.js";import"./StreamingIndicator-OHAH8iXm.js";import"./Greeting-Bh9E91I8.js";import"./UserMessage-C7r9Ek-j.js";import"./ChatInput-lk6B8Q17.js";import"./ChatHistory-D2R5wpO5.js";import"./HistoryItem-PZKH1WuT.js";import"./ChatHistory.module-Cfg-qQMF.js";import"./ChatContainer-CE_3xLUh.js";import"./Disclaimer-DAJHJaHe.js";import"./ChatHeader-DRbm7X9V.js";import"./Sidebar-AfqAyT7O.js";import"./NewChatButton-DxQFp7M_.js";function F(){return f({debug:!0,delay:300,answerText:`To configure storage on your Nutanix cluster, navigate to **Prism Central > Storage > Containers**. You can create a new storage container or modify existing ones. Key settings include:

1. **Replication Factor** — Set RF2 or RF3 depending on fault tolerance requirements
2. **Compression** — Enable inline or post-process compression
3. **Deduplication** — Enable for VDI workloads

For more details, see the [Storage Best Practices Guide](https://portal.nutanix.com/storage).`,sources:[{id:"s1",title:"Storage Best Practices Guide",link:"https://portal.nutanix.com/kb/1",category:"kb_article",visibility:"public"},{id:"s2",title:"Prism Central Admin Guide",link:"https://portal.nutanix.com/kb/2",category:"documentation",visibility:"public"},{id:"s3",title:"AOS Release Notes",link:"https://portal.nutanix.com/kb/3",category:"kb_article",visibility:"public"}],relatedQueries:["What are the recommended replication factor settings?","How to enable compression on a storage container?","What is the difference between RF2 and RF3?"],historySessions:A,sessionMessages:I,historyDelay:1200,sessionMessagesDelay:600})}function N({children:r}){return t.jsxs(e.FlexLayout,{flexDirection:"column",style:{height:"100vh",width:"100%"},itemGap:"none",children:[t.jsx(e.NavBarLayout,{layout:e.NavBarLayout.NavBarLayoutTypes.CENTER,title:t.jsx(e.FlexLayout,{alignItems:"center",itemSpacing:"10px",children:t.jsx(e.Title,{size:e.Title.TitleSizes.H4,children:"Support & Insights"})}),accountActions:t.jsx(e.Button,{type:e.Button.ButtonTypes.SECONDARY,children:t.jsxs(e.FlexLayout,{alignItems:"center",itemSpacing:"5px",children:[t.jsx(l,{size:12,color:"#ffffff"}),t.jsx(e.TextLabel,{children:"Ask NIVA"})]})}),accountInfo:t.jsx(e.TextLabel,{type:e.TextLabel.TEXT_LABEL_TYPE.SECONDARY,children:"User"})}),t.jsx(e.FlexLayout,{style:{flex:1,minHeight:0},children:r})]})}function E({mode:r="fullscreen",showGreeting:c=!0,showSources:u=!0,maxSources:m=5,showSidebar:g=!0,showRelatedQueries:p=!0,showAnswerEvents:d=!0,showDisclaimer:h=!0,headerTitle:y="NIVA",greetingTitle:b="Hi, Joseph!",greetingSubtitle:x="I'm NIVA, your virtual assistant. How can I help you today?",greetingLearnMoreText:T="Learn more about NIVA",disclaimerText:w="NIVA can make mistakes, so double-check it.",inputPlaceholder:S="Ask a question..."}){return t.jsx(N,{children:t.jsx(k,{adapter:F(),mode:r,features:{greeting:{show:c,avatar:t.jsx(l,{size:40,color:"#2a60e4"})},sources:{show:u,maxCount:m},sidebar:{show:g},relatedQueries:{show:p},answerEvents:{show:d},disclaimer:{show:h}},translations:{"header.title":y,"greeting.title":b,"greeting.subtitle":x,"greeting.learnMoreText":T,"disclaimer.text":w,"input.placeholder":S},onChatEvent:a=>{console.log("[Playground ChatEvent]",a.type,a.payload)},onClose:()=>alert("Close clicked")})})}const ce={title:"Widgets/ChatWidget",component:E,parameters:{layout:"fullscreen"}},o={name:"Playground",args:{mode:"fullscreen",showGreeting:!0,showSources:!0,maxSources:5,showSidebar:!0,showRelatedQueries:!0,showAnswerEvents:!0,showDisclaimer:!0,headerTitle:"NIVA",greetingTitle:"Hi, Joseph!",greetingSubtitle:"I'm NIVA, your virtual assistant. How can I help you today?",greetingLearnMoreText:"Learn more about NIVA",disclaimerText:"NIVA can make mistakes, so double-check it.",inputPlaceholder:"Ask a question..."},argTypes:{mode:{control:"select",options:["fullscreen","chat","inline"],table:{category:"Layout"}},showGreeting:{control:"boolean",table:{category:"Features"}},showSources:{control:"boolean",table:{category:"Features"}},maxSources:{control:{type:"number",min:1,max:20},table:{category:"Features"}},showSidebar:{control:"boolean",table:{category:"Features"}},showRelatedQueries:{control:"boolean",table:{category:"Features"}},showAnswerEvents:{control:"boolean",table:{category:"Features"}},showDisclaimer:{control:"boolean",table:{category:"Features"}},headerTitle:{control:"text",table:{category:"Translations"}},greetingTitle:{control:"text",table:{category:"Translations"}},greetingSubtitle:{control:"text",table:{category:"Translations"}},greetingLearnMoreText:{control:"text",table:{category:"Translations"}},disclaimerText:{control:"text",table:{category:"Translations"}},inputPlaceholder:{control:"text",table:{category:"Translations"}}}};var s,i,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    mode: 'fullscreen',
    showGreeting: true,
    showSources: true,
    maxSources: 5,
    showSidebar: true,
    showRelatedQueries: true,
    showAnswerEvents: true,
    showDisclaimer: true,
    headerTitle: 'NIVA',
    greetingTitle: 'Hi, Joseph!',
    greetingSubtitle: "I'm NIVA, your virtual assistant. How can I help you today?",
    greetingLearnMoreText: 'Learn more about NIVA',
    disclaimerText: 'NIVA can make mistakes, so double-check it.',
    inputPlaceholder: 'Ask a question...'
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['fullscreen', 'chat', 'inline'],
      table: {
        category: 'Layout'
      }
    },
    showGreeting: {
      control: 'boolean',
      table: {
        category: 'Features'
      }
    },
    showSources: {
      control: 'boolean',
      table: {
        category: 'Features'
      }
    },
    maxSources: {
      control: {
        type: 'number',
        min: 1,
        max: 20
      },
      table: {
        category: 'Features'
      }
    },
    showSidebar: {
      control: 'boolean',
      table: {
        category: 'Features'
      }
    },
    showRelatedQueries: {
      control: 'boolean',
      table: {
        category: 'Features'
      }
    },
    showAnswerEvents: {
      control: 'boolean',
      table: {
        category: 'Features'
      }
    },
    showDisclaimer: {
      control: 'boolean',
      table: {
        category: 'Features'
      }
    },
    headerTitle: {
      control: 'text',
      table: {
        category: 'Translations'
      }
    },
    greetingTitle: {
      control: 'text',
      table: {
        category: 'Translations'
      }
    },
    greetingSubtitle: {
      control: 'text',
      table: {
        category: 'Translations'
      }
    },
    greetingLearnMoreText: {
      control: 'text',
      table: {
        category: 'Translations'
      }
    },
    disclaimerText: {
      control: 'text',
      table: {
        category: 'Translations'
      }
    },
    inputPlaceholder: {
      control: 'text',
      table: {
        category: 'Translations'
      }
    }
  }
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const ue=["Playground"];export{o as Playground,ue as __namedExportsOrder,ce as default};
