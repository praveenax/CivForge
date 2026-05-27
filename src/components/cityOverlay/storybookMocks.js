export const frameStyle = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #f4f6fb 0%, #e8eefb 100%)",
  padding: "2rem",
};

export const baseCity = {
  id: "city-aurora",
  name: "Aurora",
  owner: "player1",
  population: 6,
  cultureLevel: 2,
  food: 18,
  foodNeededForNextPop: 30,
  culture: 11,
  cultureNeededForNextLevel: 20,
  yields: {
    food: 9,
    production: 7,
    gold: 4,
    science: 3,
    culture: 2,
  },
  buildings: ["granary"],
  units: ["scout"],
  queue: [
    {
      type: "building",
      id: "library",
      progress: 20,
    },
    {
      type: "improvement",
      id: "farm",
      tileId: "tile-wheat-1",
      progress: 10,
    },
  ],
};

export const baseTiles = [
  {
    id: "tile-city-1",
    x: 10,
    y: 10,
    owner: "player1",
    cityId: "city-aurora",
    resource: null,
    improvement: null,
  },
  {
    id: "tile-wheat-1",
    x: 11,
    y: 10,
    owner: "player1",
    cityId: "city-aurora",
    resource: "wheat",
    improvement: null,
  },
  {
    id: "tile-iron-1",
    x: 10,
    y: 11,
    owner: "player1",
    cityId: "city-aurora",
    resource: "iron",
    improvement: "mine",
  },
  {
    id: "tile-settle-a",
    x: 12,
    y: 10,
    owner: null,
    cityId: null,
    resource: null,
    improvement: null,
  },
  {
    id: "tile-settle-b",
    x: 11,
    y: 11,
    owner: null,
    cityId: null,
    resource: "stone",
    improvement: null,
  },
];

export const playerWithEarlyTech = {
  id: "player1",
  name: "Ember Republic",
  unlockedTechs: ["agriculture", "mining", "writing", "bronzeWorking"],
};
