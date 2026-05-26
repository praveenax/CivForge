export const RESOURCE_TYPES = {
  wheat: {
    name: "Wheat",
    yields: { food: 1, production: 0, gold: 0, science: 0 },
  },
  iron: {
    name: "Iron",
    yields: { food: 0, production: 1, gold: 0, science: 0 },
  },
  gems: {
    name: "Gems",
    yields: { food: 0, production: 0, gold: 2, science: 0 },
  },
  manuscripts: {
    name: "Manuscripts",
    yields: { food: 0, production: 0, gold: 0, science: 1 },
  },
};

export const RESOURCE_POOL = [
  null,
  null,
  null,
  null,
  "wheat",
  "iron",
  "gems",
  "manuscripts",
];
