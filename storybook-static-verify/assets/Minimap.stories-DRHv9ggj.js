import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BNO8td4Y.js";import{n,t as r}from"./Minimap-Dc8ckyyy.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a=12,o=8,s=a*80,c=o*80,l=[{id:`player1`,name:`Roma`,civilizationId:`rome`},{id:`player2`,name:`Nile`,civilizationId:`egypt`}],u=Array.from({length:a*o},(e,t)=>{let n=t%a,r=Math.floor(t/a),i=r===3||r===4,o=null;return n<=4&&r<=2?o=`player1`:n>=8&&r>=5&&(o=`player2`),{id:`tile-${n}-${r}`,x:n,y:r,terrain:i?`water`:`plains`,owner:o}}),d=[{id:`city-roma`,name:`Roma`,x:2,y:1,owner:`player1`},{id:`city-memphis`,name:`Memphis`,x:9,y:6,owner:`player2`}],f={title:`UI/Minimap`,component:r,parameters:{layout:`fullscreen`},render:e=>(0,i.jsx)(`div`,{style:{minHeight:`100vh`,padding:`1.25rem`},children:(0,i.jsx)(r,{...e})})},p={args:{tiles:u,cities:d,players:l,selectedTileId:`tile-2-1`,gridWidth:a,gridHeight:o,worldPixelWidth:s,worldPixelHeight:c,viewport:{left:80,top:80,width:320,height:240},onJumpTo:()=>{}}},m={args:{tiles:u,cities:d,players:l,selectedTileId:`tile-9-6`,gridWidth:a,gridHeight:o,worldPixelWidth:s,worldPixelHeight:c,viewport:{left:480,top:320,width:320,height:240},onJumpTo:()=>{}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tiles,
    cities,
    players,
    selectedTileId: "tile-2-1",
    gridWidth,
    gridHeight,
    worldPixelWidth,
    worldPixelHeight,
    viewport: {
      left: 80,
      top: 80,
      width: 320,
      height: 240
    },
    onJumpTo: () => {}
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tiles,
    cities,
    players,
    selectedTileId: "tile-9-6",
    gridWidth,
    gridHeight,
    worldPixelWidth,
    worldPixelHeight,
    viewport: {
      left: 480,
      top: 320,
      width: 320,
      height: 240
    },
    onJumpTo: () => {}
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`ShiftedViewport`]}))();export{p as Default,m as ShiftedViewport,h as __namedExportsOrder,f as default};