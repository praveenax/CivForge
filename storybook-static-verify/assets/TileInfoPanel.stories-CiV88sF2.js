import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./resources-Bdv3vnQM.js";import{n as r,t as i}from"./terrain-CV1TTaf-.js";import{t as a}from"./jsx-runtime-BNO8td4Y.js";function o({tile:e}){if(!e)return(0,s.jsxs)(`aside`,{className:`panel tile-info`,children:[(0,s.jsx)(`h2`,{children:`Tile Inspector`}),(0,s.jsx)(`p`,{children:`Select a tile to inspect terrain, ownership, and resource yield.`})]});let t=i[e.terrain],r=e.resource?n[e.resource]:null;return(0,s.jsxs)(`aside`,{className:`panel tile-info`,children:[(0,s.jsx)(`h2`,{children:`Tile Inspector`}),(0,s.jsxs)(`p`,{children:[`Coordinates: `,e.x,`,`,e.y]}),(0,s.jsxs)(`p`,{children:[`Terrain: `,t?.name??e.terrain]}),(0,s.jsxs)(`p`,{children:[`Resource: `,r?.name??`None`]}),(0,s.jsxs)(`p`,{children:[`Owner: `,e.owner??`Unclaimed`]}),(0,s.jsxs)(`p`,{children:[`City: `,e.cityId??`None`]}),(0,s.jsxs)(`div`,{className:`tile-yields`,children:[(0,s.jsx)(`h3`,{children:`Yield`}),(0,s.jsxs)(`p`,{children:[`Food: `,(t?.yields.food??0)+(r?.yields.food??0)]}),(0,s.jsxs)(`p`,{children:[`Production:`,` `,(t?.yields.production??0)+(r?.yields.production??0)]}),(0,s.jsxs)(`p`,{children:[`Gold: `,(t?.yields.gold??0)+(r?.yields.gold??0)]}),(0,s.jsxs)(`p`,{children:[`Science:`,` `,(t?.yields.science??0)+(r?.yields.science??0)]})]})]})}var s,c=e((()=>{t(),r(),s=a(),o.__docgenInfo={description:``,methods:[],displayName:`TileInfoPanel`}})),l,u,d,f,p,m,h;e((()=>{c(),l=a(),u={minHeight:`100vh`,padding:`1.25rem`,background:`linear-gradient(180deg, #eff3f9 0%, #e2e9f4 100%)`},d={title:`UI/Tile Info Panel`,component:o,parameters:{layout:`fullscreen`},render:e=>(0,l.jsx)(`div`,{style:u,children:(0,l.jsx)(`div`,{style:{width:`min(360px, 100%)`},children:(0,l.jsx)(o,{...e})})})},f={args:{tile:null}},p={args:{tile:{id:`tile-3-5`,x:3,y:5,terrain:`grassland`,resource:null,owner:null,cityId:null}}},m={args:{tile:{id:`tile-7-4`,x:7,y:4,terrain:`river`,resource:`gems`,owner:`player1`,cityId:`city-aurora`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tile: null
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tile: {
      id: "tile-3-5",
      x: 3,
      y: 5,
      terrain: "grassland",
      resource: null,
      owner: null,
      cityId: null
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tile: {
      id: "tile-7-4",
      x: 7,
      y: 4,
      terrain: "river",
      resource: "gems",
      owner: "player1",
      cityId: "city-aurora"
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`EmptyState`,`UnclaimedTile`,`OwnedResourceTile`]}))();export{f as EmptyState,m as OwnedResourceTile,p as UnclaimedTile,h as __namedExportsOrder,d as default};