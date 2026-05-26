export const IMPROVEMENTS = {
  mine: {
    id: "mine",
    name: "Mine",
    cost: 45,
    effects: {
      production: 2,
      gold: 1,
    },
    requiredTech: "mining",
    resources: ["stone", "iron", "gems"],
  },
  farm: {
    id: "farm",
    name: "Farm",
    cost: 35,
    effects: {
      food: 2,
    },
    requiredTech: "agriculture",
    resources: ["wheat"],
  },
  archive: {
    id: "archive",
    name: "Archive",
    cost: 55,
    effects: {
      science: 2,
      culture: 1,
    },
    requiredTech: "writing",
    resources: ["manuscripts"],
  },
};

export const getImprovementIdForResource = (resourceId) => {
  if (!resourceId) {
    return null;
  }

  const matched = Object.values(IMPROVEMENTS).find((improvement) =>
    improvement.resources.includes(resourceId),
  );

  return matched?.id ?? null;
};
