export const IMPROVEMENTS = {
  settlement: {
    id: "settlement",
    name: "Settlement",
    cost: 75,
    effects: {
      food: 1,
      production: 1,
      culture: 1,
    },
    requiredTech: "agriculture",
    resources: [],
    requiresTileSelection: true,
  },
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

export const getValidSettlementTiles = (city, tiles = []) => {
  if (!city) {
    return [];
  }

  const culturallyOwnedTiles = tiles.filter((tile) => tile.cityId === city.id);

  if (!culturallyOwnedTiles.length) {
    return [];
  }

  return tiles.filter((tile) => {
    if (tile.owner !== null || tile.cityId !== null || tile.improvement) {
      return false;
    }

    return culturallyOwnedTiles.some((ownedTile) => {
      const dx = Math.abs(tile.x - ownedTile.x);
      const dy = Math.abs(tile.y - ownedTile.y);
      return dx <= 1 && dy <= 1;
    });
  });
};
