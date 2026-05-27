import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BNO8td4Y.js";function n({isOpen:e,city:t,onLocate:n,onClose:i}){return!e||!t?null:(0,r.jsx)(`section`,{className:`research-prompt-overlay`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`no-production-prompt-title`,children:(0,r.jsxs)(`div`,{className:`research-prompt-card panel`,children:[(0,r.jsx)(`h2`,{id:`no-production-prompt-title`,children:`No Production`}),(0,r.jsxs)(`p`,{children:[`Simulation stopped because `,t.name,` has no active production.`]}),(0,r.jsxs)(`div`,{className:`research-prompt-actions`,children:[(0,r.jsx)(`button`,{type:`button`,onClick:n,children:`Locate City`}),(0,r.jsx)(`button`,{type:`button`,onClick:i,children:`Close`})]})]})})}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`NoProductionPromptModal`}})),a,o,s,c,l,u;e((()=>{i(),a={id:`city-aurora`,name:`Aurora`},o={title:`UI/No Production Prompt Modal`,component:n,parameters:{layout:`fullscreen`}},s={args:{isOpen:!0,city:a,onLocate:()=>{},onClose:()=>{}}},c={args:{isOpen:!1,city:a,onLocate:()=>{},onClose:()=>{}}},l={args:{isOpen:!0,city:null,onLocate:()=>{},onClose:()=>{}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    city,
    onLocate: () => {},
    onClose: () => {}
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    city,
    onLocate: () => {},
    onClose: () => {}
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    city: null,
    onLocate: () => {},
    onClose: () => {}
  }
}`,...l.parameters?.docs?.source}}},u=[`Open`,`Closed`,`MissingCity`]}))();export{c as Closed,l as MissingCity,s as Open,u as __namedExportsOrder,o as default};