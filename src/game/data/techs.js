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
  pottery: {
    id: "pottery",
    name: "Pottery",
    cost: 35,
    unlocks: ["Pottery Workshop", "Granary"],
    requires: [],
  },
  animalHusbandry: {
    id: "animalHusbandry",
    name: "Animal Husbandry",
    cost: 45,
    unlocks: ["Pasture", "Sheep", "Cattle"],
    requires: [],
  },
  archery: {
    id: "archery",
    name: "Archery",
    cost: 50,
    unlocks: ["Archer"],
    requires: [],
  },

  // Tier 2
  writing: {
    id: "writing",
    name: "Writing",
    cost: 60,
    unlocks: ["Library", "Scribe"],
    requires: ["agriculture"],
  },
  bronzeWorking: {
    id: "bronzeWorking",
    name: "Bronze Working",
    cost: 80,
    unlocks: ["Spearman", "Bronze Weapons"],
    requires: ["mining"],
  },
  theWheel: {
    id: "theWheel",
    name: "The Wheel",
    cost: 70,
    unlocks: ["Chariot", "Roads"],
    requires: ["mining"],
  },
  masonry: {
    id: "masonry",
    name: "Masonry",
    cost: 65,
    unlocks: ["Stone Walls", "Monument"],
    requires: ["mining"],
  },
  sailing: {
    id: "sailing",
    name: "Sailing",
    cost: 75,
    unlocks: ["Galley", "Lighthouse"],
    requires: ["pottery"],
  },

  // Tier 3
  mathematics: {
    id: "mathematics",
    name: "Mathematics",
    cost: 110,
    unlocks: ["Aqueduct", "Catapult"],
    requires: ["writing"],
  },
  ironWorking: {
    id: "ironWorking",
    name: "Iron Working",
    cost: 120,
    unlocks: ["Swordsman", "Iron Mine"],
    requires: ["bronzeWorking"],
  },
  construction: {
    id: "construction",
    name: "Construction",
    cost: 105,
    unlocks: ["Road Network", "Colosseum"],
    requires: ["masonry", "theWheel"],
  },
  horsebackRiding: {
    id: "horsebackRiding",
    name: "Horseback Riding",
    cost: 95,
    unlocks: ["Horseman", "Stable"],
    requires: ["animalHusbandry", "theWheel"],
  },
  calendar: {
    id: "calendar",
    name: "Calendar",
    cost: 100,
    unlocks: ["Plantation", "Temple"],
    requires: ["pottery", "writing"],
  },

  // Tier 4
  philosophy: {
    id: "philosophy",
    name: "Philosophy",
    cost: 140,
    unlocks: ["Market", "Philosopher"],
    requires: ["writing", "mathematics"],
  },
  currency: {
    id: "currency",
    name: "Currency",
    cost: 150,
    unlocks: ["Market", "Trade Route"],
    requires: ["mathematics"],
  },
  engineering: {
    id: "engineering",
    name: "Engineering",
    cost: 160,
    unlocks: ["Catapult", "Aqueduct", "Siege Workshop"],
    requires: ["construction", "mathematics"],
  },
  metalCasting: {
    id: "metalCasting",
    name: "Metal Casting",
    cost: 170,
    unlocks: ["Forge", "Workshop"],
    requires: ["ironWorking"],
  },

  // Tier 5
  education: {
    id: "education",
    name: "Education",
    cost: 220,
    unlocks: ["University", "Great Library"],
    requires: ["philosophy"],
  },
  guilds: {
    id: "guilds",
    name: "Guilds",
    cost: 210,
    unlocks: ["Workshop", "Merchant Guild"],
    requires: ["currency"],
  },
  chivalry: {
    id: "chivalry",
    name: "Chivalry",
    cost: 230,
    unlocks: ["Knight"],
    requires: ["horsebackRiding", "currency"],
  },
  // === TIER 6 - Renaissance ===
  printingPress: {
    id: "printingPress",
    name: "Printing Press",
    cost: 280,
    unlocks: ["Printing House", "Newspaper"],
    requires: ["education"],
  },
  banking: {
    id: "banking",
    name: "Banking",
    cost: 260,
    unlocks: ["Bank", "Stock Exchange"],
    requires: ["currency", "guilds"],
  },
  astronomy: {
    id: "astronomy",
    name: "Astronomy",
    cost: 270,
    unlocks: ["Observatory", "Caravel"],
    requires: ["education", "sailing"],
  },
  gunpowder: {
    id: "gunpowder",
    name: "Gunpowder",
    cost: 290,
    unlocks: ["Musketman", "Cannon"],
    requires: ["metalCasting", "chivalry"],
  },

  // === TIER 7 - Industrial Era ===
  steamPower: {
    id: "steamPower",
    name: "Steam Power",
    cost: 360,
    unlocks: ["Factory", "Ironclad", "Railroad"],
    requires: ["banking", "gunpowder"],
  },
  industrialization: {
    id: "industrialization",
    name: "Industrialization",
    cost: 380,
    unlocks: ["Assembly Plant", "Coal Mine"],
    requires: ["steamPower"],
  },
  electricity: {
    id: "electricity",
    name: "Electricity",
    cost: 400,
    unlocks: ["Power Plant", "Electric Grid"],
    requires: ["steamPower"],
  },
  rifling: {
    id: "rifling",
    name: "Rifling",
    cost: 340,
    unlocks: ["Rifleman"],
    requires: ["gunpowder"],
  },

  // === TIER 8 - Modern Era ===
  combustion: {
    id: "combustion",
    name: "Combustion",
    cost: 480,
    unlocks: ["Tank", "Oil Well"],
    requires: ["industrialization"],
  },
  flight: {
    id: "flight",
    name: "Flight",
    cost: 500,
    unlocks: ["Fighter", "Bomber", "Airport"],
    requires: ["electricity"],
  },
  radio: {
    id: "radio",
    name: "Radio",
    cost: 450,
    unlocks: ["Broadcast Tower", "Propaganda"],
    requires: ["electricity"],
  },
  atomicTheory: {
    id: "atomicTheory",
    name: "Atomic Theory",
    cost: 520,
    unlocks: ["Nuclear Plant", "Atomic Bomb"],
    requires: ["electricity", "industrialization"],
  },

  // === TIER 9 - Information / Future Era ===
  computers: {
    id: "computers",
    name: "Computers",
    cost: 620,
    unlocks: ["Research Lab", "Computer Center"],
    requires: ["atomicTheory", "radio"],
  },
  globalization: {
    id: "globalization",
    name: "Globalization",
    cost: 650,
    unlocks: ["International Trade", "World Trade Center"],
    requires: ["flight", "computers"],
  },
  robotics: {
    id: "robotics",
    name: "Robotics",
    cost: 680,
    unlocks: ["Drone", "Automation Factory"],
    requires: ["computers"],
  },
  nuclearFusion: {
    id: "nuclearFusion",
    name: "Nuclear Fusion",
    cost: 720,
    unlocks: ["Fusion Plant"],
    requires: ["atomicTheory"],
  },
};

export const TECH_NODE_POSITIONS = {
  // Tier 1
  agriculture: { x: 0, y: 30 },
  mining: { x: 0, y: 150 },
  pottery: { x: 0, y: 270 },
  animalHusbandry: { x: 0, y: 390 },
  archery: { x: 0, y: 510 },

  // Tier 2
  writing: { x: 280, y: 30 },
  bronzeWorking: { x: 280, y: 150 },
  theWheel: { x: 280, y: 270 },
  masonry: { x: 280, y: 390 },
  sailing: { x: 280, y: 510 },

  // Tier 3
  mathematics: { x: 560, y: 30 },
  ironWorking: { x: 560, y: 150 },
  construction: { x: 560, y: 270 },
  horsebackRiding: { x: 560, y: 390 },
  calendar: { x: 560, y: 510 },

  // Tier 4
  philosophy: { x: 840, y: 90 },
  currency: { x: 840, y: 230 },
  engineering: { x: 840, y: 370 },
  metalCasting: { x: 840, y: 510 },

  // Tier 5
  education: { x: 1120, y: 120 },
  guilds: { x: 1120, y: 290 },
  chivalry: { x: 1120, y: 460 },
};
