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

  // === INDUSTRIAL ERA ===
  factory: {
    id: "factory",
    name: "Factory",
    cost: 320,
    effects: { production: 8, pollution: 2 },
    requiredTech: "steamPower",
  },
  coalMine: {
    id: "coalMine",
    name: "Coal Mine",
    cost: 180,
    effects: { production: 6 },
    requiredTech: "industrialization",
  },
  assemblyPlant: {
    id: "assemblyPlant",
    name: "Assembly Plant",
    cost: 340,
    effects: { production: 10 },
    requiredTech: "industrialization",
  },
  powerPlant: {
    id: "powerPlant",
    name: "Power Plant",
    cost: 350,
    effects: { productionBonus: 25, energy: 10 },
    requiredTech: "electricity",
  },

  // === MODERN ERA ===
  broadcastTower: {
    id: "broadcastTower",
    name: "Broadcast Tower",
    cost: 280,
    effects: { culture: 8, happiness: 2 },
    requiredTech: "radio",
  },
  airport: {
    id: "airport",
    name: "Airport",
    cost: 420,
    effects: { airTrade: 40, unitSpeed: 20 },
    requiredTech: "flight",
  },
  oilWell: {
    id: "oilWell",
    name: "Oil Well",
    cost: 250,
    effects: { production: 5, oilBonus: 30 },
    requiredTech: "combustion",
  },
  nuclearPlant: {
    id: "nuclearPlant",
    name: "Nuclear Plant",
    cost: 480,
    effects: { productionBonus: 40, energy: 15 },
    requiredTech: "atomicTheory",
  },

  // === INFORMATION / FUTURE ERA ===
  researchLab: {
    id: "researchLab",
    name: "Research Lab",
    cost: 520,
    effects: { science: 12 },
    requiredTech: "computers",
  },
  computerCenter: {
    id: "computerCenter",
    name: "Computer Center",
    cost: 550,
    effects: { science: 15, production: 6 },
    requiredTech: "computers",
  },
  automationFactory: {
    id: "automationFactory",
    name: "Automation Factory",
    cost: 580,
    effects: { production: 14, robotBonus: 30 },
    requiredTech: "robotics",
  },
  fusionPlant: {
    id: "fusionPlant",
    name: "Fusion Plant",
    cost: 650,
    effects: { productionBonus: 50, energy: 25, pollution: -3 },
    requiredTech: "nuclearFusion",
  },
};
