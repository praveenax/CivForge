export const TERRAIN_TYPES = {
  grassland: {
    name: "Grassland",
    yields: { food: 2, production: 0, gold: 0, science: 0 },
    color: "#a8dba2",
  },
  forest: {
    name: "Forest",
    yields: { food: 1, production: 1, gold: 0, science: 0 },
    color: "#8ebd82",
  },
  hill: {
    name: "Hill",
    yields: { food: 0, production: 2, gold: 0, science: 0 },
    color: "#b8b08f",
  },
  river: {
    name: "River",
    yields: { food: 1, production: 0, gold: 1, science: 0 },
    color: "#4f93c7",
  },
  mountain: {
    name: "Mountain",
    yields: { food: 0, production: 0, gold: 0, science: 1 },
    color: "#c2c8cf",
  },
  desert: {
    name: "Desert",
    yields: { food: 0, production: 0, gold: 1, science: 0 },
    color: "#dfcca0",
  },
};

export const TERRAIN_POOL = [
  "grassland",
  "grassland",
  "grassland",
  "forest",
  "forest",
  "hill",
  "river",
  "mountain",
  "desert",
];
