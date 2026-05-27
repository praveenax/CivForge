import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BNO8td4Y.js";import{n,t as r}from"./Tile-CBq_2Ema.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={minHeight:`100vh`,padding:`1.25rem`,background:`linear-gradient(180deg, #0f171c 0%, #1a252c 100%)`,display:`grid`,alignContent:`start`,justifyContent:`start`,gap:`0.75rem`},o={id:`tile-4-6`,x:4,y:6,terrain:`grassland`,owner:null,resource:null,improvement:null},s={title:`UI/Tile`,component:r,parameters:{layout:`fullscreen`},render:e=>(0,i.jsx)(`div`,{style:a,children:(0,i.jsx)(r,{...e})})},c={args:{tile:o,ownerCivilizationId:null,isSelected:!1,hasCity:!1,onClick:()=>{}}},l={args:{tile:{...o,id:`tile-8-2`,x:8,y:2,terrain:`river`,resource:`wheat`},ownerCivilizationId:null,isSelected:!0,hasCity:!1,onClick:()=>{}}},u={args:{tile:{...o,id:`tile-2-1`,x:2,y:1,terrain:`forest`,owner:`player1`},ownerCivilizationId:`rome`,isSelected:!1,hasCity:!0,onClick:()=>{}}},d={args:{tile:{...o,id:`tile-6-3`,x:6,y:3,terrain:`hill`,owner:`player2`,resource:`iron`,improvement:`mine`},ownerCivilizationId:`greece`,isSelected:!1,hasCity:!1,onClick:()=>{}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tile: baseTile,
    ownerCivilizationId: null,
    isSelected: false,
    hasCity: false,
    onClick: () => {}
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tile: {
      ...baseTile,
      id: "tile-8-2",
      x: 8,
      y: 2,
      terrain: "river",
      resource: "wheat"
    },
    ownerCivilizationId: null,
    isSelected: true,
    hasCity: false,
    onClick: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tile: {
      ...baseTile,
      id: "tile-2-1",
      x: 2,
      y: 1,
      terrain: "forest",
      owner: "player1"
    },
    ownerCivilizationId: "rome",
    isSelected: false,
    hasCity: true,
    onClick: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tile: {
      ...baseTile,
      id: "tile-6-3",
      x: 6,
      y: 3,
      terrain: "hill",
      owner: "player2",
      resource: "iron",
      improvement: "mine"
    },
    ownerCivilizationId: "greece",
    isSelected: false,
    hasCity: false,
    onClick: () => {}
  }
}`,...d.parameters?.docs?.source}}},f=[`BasicGrassland`,`SelectedWithResource`,`OwnedCityTile`,`OwnedImprovedTile`]}))();export{c as BasicGrassland,u as OwnedCityTile,d as OwnedImprovedTile,l as SelectedWithResource,f as __namedExportsOrder,s as default};