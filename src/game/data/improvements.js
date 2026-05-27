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
  stockExchangeHub: {
    id: "stockExchangeHub",
    name: "Stock Exchange Hub",
    cost: 120,
    effects: {
      gold: 4,
      production: 1,
    },
    requiredTech: "banking",
    resources: ["gems"],
  },
  steamMill: {
    id: "steamMill",
    name: "Steam Mill",
    cost: 130,
    effects: {
      production: 4,
      gold: 1,
    },
    requiredTech: "steamPower",
    resources: ["iron"],
  },
  industrialQuarry: {
    id: "industrialQuarry",
    name: "Industrial Quarry",
    cost: 125,
    effects: {
      production: 3,
      gold: 2,
    },
    requiredTech: "industrialization",
    resources: ["stone"],
  },
  mechanizedFarm: {
    id: "mechanizedFarm",
    name: "Mechanized Farm",
    cost: 115,
    effects: {
      food: 4,
      production: 1,
    },
    requiredTech: "industrialization",
    resources: ["wheat"],
  },
  digitalArchive: {
    id: "digitalArchive",
    name: "Digital Archive",
    cost: 160,
    effects: {
      science: 4,
      culture: 2,
      gold: 1,
    },
    requiredTech: "computers",
    resources: ["manuscripts"],
  },
};

export const getImprovementIdForResource = (resourceId, unlockedTechs) => {
  if (!resourceId) {
    return null;
  }

  const matches = Object.values(IMPROVEMENTS).filter((improvement) =>
    improvement.resources.includes(resourceId),
  );

  if (!matches.length) {
    return null;
  }

  if (!Array.isArray(unlockedTechs)) {
    return matches[0]?.id ?? null;
  }

  const unlockedSet = new Set(unlockedTechs);
  const unlockedMatches = matches.filter(
    (improvement) =>
      !improvement.requiredTech || unlockedSet.has(improvement.requiredTech),
  );

  if (!unlockedMatches.length) {
    return null;
  }

  return unlockedMatches[unlockedMatches.length - 1]?.id ?? null;
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
