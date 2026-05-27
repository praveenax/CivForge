import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BNO8td4Y.js";import{n,t as r}from"./CityProductionActions-BTQ_eSVD.js";import{i,r as a}from"./storybookMocks-N8WbKTk6.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i(),o=t(),s=[{id:`library`,name:`Library`,cost:70},{id:`monument`,name:`Monument`,cost:60}],c=[{id:`spearman`,name:`Spearman`,cost:55}],l=[{tileId:`tile-wheat-1`,x:11,y:10,resourceId:`wheat`,improvement:{id:`farm`,name:`Farm`,cost:35}}],u={id:`settlement`,name:`Settlement`,cost:75,requiredTech:`agriculture`},d=[{id:`tile-settle-a`,x:12,y:10}],f={title:`UI/City Overlay/Production Actions`,component:r,parameters:{layout:`fullscreen`},render:e=>(0,o.jsx)(`div`,{style:a,children:(0,o.jsx)(r,{...e})})},p={args:{cityId:`city-aurora`,availableBuildings:s,availableUnits:c,availableImprovements:l,settlementImprovement:u,isSettlementUnlocked:!0,validSettlementTiles:d,onOpenSettlementPicker:()=>{},onQueueProduction:()=>{}}},m={args:{cityId:`city-aurora`,availableBuildings:[],availableUnits:c,availableImprovements:[],settlementImprovement:u,isSettlementUnlocked:!1,validSettlementTiles:[],onOpenSettlementPicker:()=>{},onQueueProduction:()=>{}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    cityId: "city-aurora",
    availableBuildings,
    availableUnits,
    availableImprovements,
    settlementImprovement,
    isSettlementUnlocked: true,
    validSettlementTiles,
    onOpenSettlementPicker: () => {},
    onQueueProduction: () => {}
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    cityId: "city-aurora",
    availableBuildings: [],
    availableUnits,
    availableImprovements: [],
    settlementImprovement,
    isSettlementUnlocked: false,
    validSettlementTiles: [],
    onOpenSettlementPicker: () => {},
    onQueueProduction: () => {}
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`LockedSettlement`]}))();export{p as Default,m as LockedSettlement,h as __namedExportsOrder,f as default};