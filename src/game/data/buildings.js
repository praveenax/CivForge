export const BUILDINGS = {
  // Ancient Era
  granary: {
    id: "granary",
    name: "Granary",
    cost: 40,
    effects: {
      foodPercent: 15,
    },
    requiredTech: "agriculture",
  },
  potteryWorkshop: {
    id: "potteryWorkshop",
    name: "Pottery Workshop",
    cost: 50,
    effects: {
      production: 2,
      food: 1,
    },
    requiredTech: "pottery",
  },
  quarry: {
    id: "quarry",
    name: "Quarry",
    cost: 45,
    effects: {
      production: 3,
    },
    requiredTech: "mining",
  },
  library: {
    id: "library",
    name: "Library",
    cost: 70,
    effects: {
      science: 4,
    },
    requiredTech: "writing",
  },
  monument: {
    id: "monument",
    name: "Monument",
    cost: 60,
    effects: {
      culture: 3,
    },
    requiredTech: "masonry",
  },
  stoneWalls: {
    id: "stoneWalls",
    name: "Stone Walls",
    cost: 80,
    effects: {
      defense: 4,
    },
    requiredTech: "masonry",
  },

  // Classical Era
  temple: {
    id: "temple",
    name: "Temple",
    cost: 90,
    effects: {
      culture: 4,
      faith: 3,
    },
    requiredTech: "calendar",
  },
  aqueduct: {
    id: "aqueduct",
    name: "Aqueduct",
    cost: 110,
    effects: {
      foodPercent: 20,
      health: 1,
    },
    requiredTech: "mathematics",
  },
  stable: {
    id: "stable",
    name: "Stable",
    cost: 85,
    effects: {
      production: 2,
      horseBonus: 25,
    },
    requiredTech: "horsebackRiding",
  },
  lighthouse: {
    id: "lighthouse",
    name: "Lighthouse",
    cost: 95,
    effects: {
      seaTrade: 30,
      food: 2,
    },
    requiredTech: "sailing",
  },

  // Medieval Era
  market: {
    id: "market",
    name: "Market",
    cost: 120,
    effects: {
      gold: 4,
      tradeRouteBonus: 20,
    },
    requiredTech: "currency",
  },
  workshop: {
    id: "workshop",
    name: "Workshop",
    cost: 130,
    effects: {
      production: 5,
    },
    requiredTech: "metalCasting",
  },
  forge: {
    id: "forge",
    name: "Forge",
    cost: 125,
    effects: {
      production: 4,
      ironBonus: 25,
    },
    requiredTech: "metalCasting",
  },
  colosseum: {
    id: "colosseum",
    name: "Colosseum",
    cost: 180,
    effects: {
      culture: 6,
      happiness: 3,
    },
    requiredTech: "construction",
  },

  // Renaissance Era
  university: {
    id: "university",
    name: "University",
    cost: 220,
    effects: {
      science: 8,
    },
    requiredTech: "education",
  },
  greatLibrary: {
    id: "greatLibrary",
    name: "Great Library",
    cost: 280,
    effects: {
      science: 10,
      culture: 4,
    },
    requiredTech: "education",
    isWonder: true,
  },
  merchantGuild: {
    id: "merchantGuild",
    name: "Merchant Guild",
    cost: 200,
    effects: {
      gold: 7,
      tradeRouteBonus: 35,
    },
    requiredTech: "guilds",
  },

  // Military Buildings
  barracks: {
    id: "barracks",
    name: "Barracks",
    cost: 75,
    effects: {
      unitProduction: 25,
    },
    requiredTech: "bronzeWorking",
  },
  siegeWorkshop: {
    id: "siegeWorkshop",
    name: "Siege Workshop",
    cost: 160,
    effects: {
      siegeProduction: 30,
    },
    requiredTech: "engineering",
  },
};
