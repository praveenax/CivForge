import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BNO8td4Y.js";function n({isOpen:e,isTechTreeOpen:t,onToggleTechTree:n,onClose:i}){return e?(0,r.jsx)(`section`,{className:`research-prompt-overlay`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`research-prompt-title`,children:(0,r.jsxs)(`div`,{className:`research-prompt-card panel`,children:[(0,r.jsx)(`h2`,{id:`research-prompt-title`,children:`Research Needed`}),(0,r.jsx)(`p`,{children:`Simulation stopped because no active research is selected. Choose the next technology to continue.`}),(0,r.jsxs)(`div`,{className:`research-prompt-actions`,children:[(0,r.jsx)(`button`,{type:`button`,onClick:()=>{t||n(),i()},children:`Open Tech Tree`}),(0,r.jsx)(`button`,{type:`button`,onClick:i,children:`Close`})]})]})}):null}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`ResearchPromptModal`}})),a,o,s,c,l;e((()=>{i(),a={title:`UI/Research Prompt Modal`,component:n,parameters:{layout:`fullscreen`}},o={args:{isOpen:!0,isTechTreeOpen:!1,onToggleTechTree:()=>{},onClose:()=>{}}},s={args:{isOpen:!0,isTechTreeOpen:!0,onToggleTechTree:()=>{},onClose:()=>{}}},c={args:{isOpen:!1,isTechTreeOpen:!1,onToggleTechTree:()=>{},onClose:()=>{}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    isTechTreeOpen: false,
    onToggleTechTree: () => {},
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    isTechTreeOpen: true,
    onToggleTechTree: () => {},
    onClose: () => {}
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    isTechTreeOpen: false,
    onToggleTechTree: () => {},
    onClose: () => {}
  }
}`,...c.parameters?.docs?.source}}},l=[`Open`,`OpenWhenTechTreeAlreadyOpen`,`Closed`]}))();export{c as Closed,o as Open,s as OpenWhenTechTreeAlreadyOpen,l as __namedExportsOrder,a as default};