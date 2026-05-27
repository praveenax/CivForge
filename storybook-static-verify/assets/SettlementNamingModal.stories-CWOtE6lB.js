import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-BtY4eHRp.js";import{t as r}from"./jsx-runtime-BNO8td4Y.js";function i({isOpen:e,onConfirm:t}){let[n,r]=(0,a.useState)(``);return(0,a.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{r(``)},0);return()=>{window.clearTimeout(t)}},[e]),e?(0,o.jsx)(`section`,{className:`research-prompt-overlay`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`settlement-naming-title`,children:(0,o.jsxs)(`div`,{className:`research-prompt-card panel`,children:[(0,o.jsx)(`h2`,{id:`settlement-naming-title`,children:`Name New City`}),(0,o.jsx)(`p`,{children:`Your settlement is complete. Enter a city name to found it.`}),(0,o.jsxs)(`label`,{className:`menu-field`,htmlFor:`settlement-city-name-input`,children:[(0,o.jsx)(`span`,{children:`City Name`}),(0,o.jsx)(`input`,{id:`settlement-city-name-input`,type:`text`,value:n,onChange:e=>r(e.target.value),placeholder:`New Settlement`,autoFocus:!0})]}),(0,o.jsx)(`div`,{className:`research-prompt-actions`,children:(0,o.jsx)(`button`,{type:`button`,onClick:()=>t(n),children:`Found City`})})]})}):null}var a,o,s=e((()=>{a=t(n(),1),o=r(),i.__docgenInfo={description:``,methods:[],displayName:`SettlementNamingModal`}})),c,l,u,d;e((()=>{s(),c={title:`UI/Settlement Naming Modal`,component:i,parameters:{layout:`fullscreen`}},l={args:{isOpen:!0,onConfirm:()=>{}}},u={args:{isOpen:!1,onConfirm:()=>{}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onConfirm: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onConfirm: () => {}
  }
}`,...u.parameters?.docs?.source}}},d=[`Open`,`Closed`]}))();export{u as Closed,l as Open,d as __namedExportsOrder,c as default};