import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-BtY4eHRp.js";import{t as r}from"./jsx-runtime-BNO8td4Y.js";function i({setup:e,civilizationOptions:t,onSetupChange:n,onBack:r,onStartGame:i}){return(0,a.jsx)(`div`,{className:`app-shell menu-shell`,children:(0,a.jsxs)(`section`,{className:`menu-card setup-card`,children:[(0,a.jsx)(`h1`,{children:`New Game Setup`}),(0,a.jsxs)(`label`,{className:`menu-field`,htmlFor:`civilization-select`,children:[(0,a.jsx)(`span`,{children:`Civilization`}),(0,a.jsx)(`select`,{id:`civilization-select`,value:e.civilizationId,onChange:e=>n(t=>({...t,civilizationId:e.target.value})),children:t.map(e=>(0,a.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),(0,a.jsxs)(`label`,{className:`menu-field`,htmlFor:`opponent-count-select`,children:[(0,a.jsx)(`span`,{children:`Opponents`}),(0,a.jsx)(`select`,{id:`opponent-count-select`,value:e.opponentCount,onChange:e=>n(t=>({...t,opponentCount:Number(e.target.value)})),children:Array.from({length:7},(e,t)=>t+1).map(e=>(0,a.jsx)(`option`,{value:e,children:e},e))})]}),(0,a.jsxs)(`div`,{className:`menu-actions`,children:[(0,a.jsx)(`button`,{type:`button`,className:`secondary`,onClick:r,children:`Back`}),(0,a.jsx)(`button`,{type:`button`,onClick:i,children:`Start Game`})]})]})})}var a,o=e((()=>{a=r(),i.__docgenInfo={description:``,methods:[],displayName:`SetupScreen`}}));function s(e){let[t,n]=(0,c.useState)(e.setup);return(0,l.jsx)(i,{...e,setup:t,onSetupChange:n})}var c,l,u,d,f,p,m;e((()=>{c=t(n(),1),o(),l=r(),u=[{id:`rome`,name:`Rome`},{id:`india`,name:`India`},{id:`egypt`,name:`Egypt`},{id:`greece`,name:`Greece`},{id:`china`,name:`China`},{id:`persia`,name:`Persia`},{id:`aztec`,name:`Aztec`}],d={title:`Screens/Setup Screen`,component:i,parameters:{layout:`fullscreen`},render:e=>(0,l.jsx)(s,{...e})},f={args:{setup:{civilizationId:`rome`,opponentCount:2},civilizationOptions:u,onSetupChange:()=>{},onBack:()=>{},onStartGame:()=>{}}},p={args:{setup:{civilizationId:`china`,opponentCount:7},civilizationOptions:u,onSetupChange:()=>{},onBack:()=>{},onStartGame:()=>{}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    setup: {
      civilizationId: "rome",
      opponentCount: 2
    },
    civilizationOptions,
    onSetupChange: () => {},
    onBack: () => {},
    onStartGame: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    setup: {
      civilizationId: "china",
      opponentCount: 7
    },
    civilizationOptions,
    onSetupChange: () => {},
    onBack: () => {},
    onStartGame: () => {}
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`MaximumOpponents`]}))();export{f as Default,p as MaximumOpponents,m as __namedExportsOrder,d as default};