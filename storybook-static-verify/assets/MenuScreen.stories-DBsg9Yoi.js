import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BNO8td4Y.js";function n({hasSavedGame:e,menuError:t,onNewGame:n,onLoadGame:i}){return(0,r.jsx)(`div`,{className:`app-shell menu-shell`,children:(0,r.jsxs)(`section`,{className:`menu-card`,children:[(0,r.jsx)(`h1`,{children:`CivForge`}),(0,r.jsx)(`p`,{className:`menu-subtitle`,children:`Forge your empire from the first dawn.`}),(0,r.jsxs)(`div`,{className:`menu-actions`,children:[(0,r.jsx)(`button`,{type:`button`,onClick:n,children:`New Game`}),(0,r.jsx)(`button`,{type:`button`,onClick:i,disabled:!e,children:`Load Game`})]}),e?null:(0,r.jsx)(`p`,{className:`menu-hint`,children:`Load Game unlocks after your first auto-save.`}),t?(0,r.jsx)(`p`,{className:`menu-error`,children:t}):null]})})}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`MenuScreen`}})),a,o,s,c,l;e((()=>{i(),a={title:`Screens/Menu Screen`,component:n,parameters:{layout:`fullscreen`}},o={args:{hasSavedGame:!1,menuError:``,onNewGame:()=>{},onLoadGame:()=>{}}},s={args:{hasSavedGame:!0,menuError:``,onNewGame:()=>{},onLoadGame:()=>{}}},c={args:{hasSavedGame:!0,menuError:`Save file is corrupted. Start a new campaign.`,onNewGame:()=>{},onLoadGame:()=>{}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hasSavedGame: false,
    menuError: "",
    onNewGame: () => {},
    onLoadGame: () => {}
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hasSavedGame: true,
    menuError: "",
    onNewGame: () => {},
    onLoadGame: () => {}
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    hasSavedGame: true,
    menuError: "Save file is corrupted. Start a new campaign.",
    onNewGame: () => {},
    onLoadGame: () => {}
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`WithSavedGame`,`WithLoadError`]}))();export{o as Default,c as WithLoadError,s as WithSavedGame,l as __namedExportsOrder,a as default};