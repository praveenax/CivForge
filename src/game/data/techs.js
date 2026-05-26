export const TECHS = {
  agriculture: {
    id: "agriculture",
    name: "Agriculture",
    cost: 30,
    unlocks: ["Granary", "Farms"],
    requires: [],
  },
  mining: {
    id: "mining",
    name: "Mining",
    cost: 40,
    unlocks: ["Mine", "Quarry"],
    requires: [],
  },
  writing: {
    id: "writing",
    name: "Writing",
    cost: 60,
    unlocks: ["Library"],
    requires: ["agriculture"],
  },
  bronzeWorking: {
    id: "bronzeWorking",
    name: "Bronze Working",
    cost: 80,
    unlocks: ["Spearman"],
    requires: ["mining"],
  },
};

export const TECH_NODE_POSITIONS = {
  agriculture: { x: 0, y: 30 },
  mining: { x: 0, y: 180 },
  writing: { x: 250, y: 30 },
  bronzeWorking: { x: 250, y: 180 },
};
