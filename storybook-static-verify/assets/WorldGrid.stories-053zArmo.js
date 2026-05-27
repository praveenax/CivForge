import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-BtY4eHRp.js";import{t as r}from"./jsx-runtime-BNO8td4Y.js";import{n as i,t as a}from"./Minimap-Dc8ckyyy.js";import{n as o,t as s}from"./Tile-CBq_2Ema.js";function c({tiles:e,cities:t,players:n,locateRequest:r,selectedTileId:i,onSelectTile:o,onSelectCity:c}){let f=(0,l.useRef)(null),[p,m]=(0,l.useState)({left:0,top:0,width:0,height:0}),h=(0,l.useMemo)(()=>{let e=new Map;return t.forEach(t=>e.set(`${t.x}-${t.y}`,t)),e},[t]),g=(0,l.useMemo)(()=>{let e=new Map;return n.forEach(t=>{e.set(t.id,t.civilizationId??null)}),e},[n]),_=(0,l.useMemo)(()=>Math.max(...e.map(e=>e.x))+1,[e]),v=(0,l.useMemo)(()=>Math.max(...e.map(e=>e.y))+1,[e]),y=_*d,b=v*d;return(0,l.useEffect)(()=>{let e=f.current;if(!e)return;let t=()=>{m({left:e.scrollLeft,top:e.scrollTop,width:e.clientWidth,height:e.clientHeight})};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[e]),(0,l.useEffect)(()=>{if(!r)return;let e=f.current;if(!e)return;let t=r.x*d+d/2,n=r.y*d+d/2,i=Math.min(Math.max(0,t-e.clientWidth/2),Math.max(0,y-e.clientWidth)),a=Math.min(Math.max(0,n-e.clientHeight/2),Math.max(0,b-e.clientHeight));e.scrollTo({left:i,top:a,behavior:`smooth`})},[r,b,y]),(0,u.jsxs)(`section`,{className:`world-grid-wrapper`,children:[(0,u.jsx)(`div`,{ref:f,className:`world-grid-scroll-shell`,children:(0,u.jsx)(`div`,{className:`world-grid`,style:{gridTemplateColumns:`repeat(${_}, minmax(80px, 1fr))`},children:e.map(e=>{let t=h.get(`${e.x}-${e.y}`);return(0,u.jsx)(s,{tile:e,ownerCivilizationId:e.owner?g.get(e.owner):null,isSelected:i===e.id,hasCity:!!t,onClick:()=>{o(e.id),t&&c(t.id)}},e.id)})})}),(0,u.jsx)(a,{tiles:e,cities:t,players:n,selectedTileId:i,gridWidth:_,gridHeight:v,worldPixelWidth:y,worldPixelHeight:b,viewport:p,onJumpTo:({worldX:e,worldY:t})=>{let n=f.current;if(!n)return;let r=Math.min(Math.max(0,e-n.clientWidth/2),Math.max(0,y-n.clientWidth)),i=Math.min(Math.max(0,t-n.clientHeight/2),Math.max(0,b-n.clientHeight));n.scrollTo({left:r,top:i,behavior:`smooth`})}})]})}var l,u,d,f=e((()=>{l=t(n(),1),i(),o(),u=r(),d=80,c.__docgenInfo={description:``,methods:[],displayName:`WorldGrid`}})),p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{f(),p=r(),m=14,h=10,g=[{id:`player1`,name:`Rome`,civilizationId:`rome`},{id:`player2`,name:`Greece`,civilizationId:`greece`}],_=[`grassland`,`forest`,`hill`,`grassland`,`river`,`grassland`,`forest`,`desert`,`grassland`,`mountain`],v=Array.from({length:m*h},(e,t)=>{let n=t%m,r=Math.floor(t/m),i=null;n<=4&&r<=4?i=`player1`:n>=8&&r>=5&&(i=`player2`);let a=null;n===3&&r===2&&(a=`wheat`),n===10&&r===6&&(a=`iron`),n===8&&r===8&&(a=`gems`);let o=null;n===3&&r===2&&(o=`farm`),n===10&&r===6&&(o=`mine`);let s=null;return n===2&&r===2&&(s=`city-roma`),n===9&&r===7&&(s=`city-sparta`),{id:`tile-${n}-${r}`,x:n,y:r,terrain:_[r]??`grassland`,owner:i,resource:a,improvement:o,cityId:s}}),y=[{id:`city-roma`,x:2,y:2,owner:`player1`,name:`Roma`},{id:`city-sparta`,x:9,y:7,owner:`player2`,name:`Sparta`}],b={minHeight:`100vh`,padding:`1rem`,background:`linear-gradient(180deg, #0f171c 0%, #1a252c 100%)`},x={title:`Screens/World Grid`,component:c,parameters:{layout:`fullscreen`},render:e=>(0,p.jsx)(`div`,{style:b,children:(0,p.jsx)(c,{...e})})},S={args:{tiles:v,cities:y,players:g,locateRequest:null,selectedTileId:`tile-3-2`,onSelectTile:()=>{},onSelectCity:()=>{}}},C={args:{tiles:v,cities:y,players:g,locateRequest:{x:9,y:7},selectedTileId:`tile-9-7`,onSelectTile:()=>{},onSelectCity:()=>{}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tiles,
    cities,
    players,
    locateRequest: null,
    selectedTileId: "tile-3-2",
    onSelectTile: () => {},
    onSelectCity: () => {}
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tiles,
    cities,
    players,
    locateRequest: {
      x: 9,
      y: 7
    },
    selectedTileId: "tile-9-7",
    onSelectTile: () => {},
    onSelectCity: () => {}
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`LocateCity`]}))();export{S as Default,C as LocateCity,w as __namedExportsOrder,x as default};