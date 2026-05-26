export const BUILDINGS = {
  granary: {
    id: "granary",
    name: "Granary",
    cost: 40,
    effects: {
      foodPercent: 10,
    },
    requiredTech: "agriculture",
  },
  library: {
    id: "library",
    name: "Library",
    cost: 60,
    effects: {
      science: 3,
    },
    requiredTech: "writing",
  },
  quarry: {
    id: "quarry",
    name: "Quarry",
    cost: 45,
    effects: {
      production: 2,
    },
    requiredTech: "mining",
  },
};
