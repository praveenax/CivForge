import ListOverlay from "./ListOverlay";

const players = [
  { id: "player1", name: "Ember Republic", type: "human" },
  { id: "player2", name: "Northwind Clan", type: "ai" },
];

const cities = [
  {
    id: "city-aurora",
    name: "Aurora",
    owner: "player1",
    population: 6,
    yields: { production: 8, science: 5, culture: 3, gold: 4 },
    queue: [
      { type: "building", id: "granary" },
      { type: "unit", id: "warrior" },
    ],
    units: ["warrior"],
    buildings: ["granary"],
  },
  {
    id: "city-harbor",
    name: "Harbor",
    owner: "player1",
    population: 4,
    yields: { production: 5, science: 2, culture: 1, gold: 7 },
    queue: [],
    units: ["scout", "settler"],
    buildings: ["market", "library"],
  },
];

const tiles = [
  { id: "tile-1", owner: "player1", resource: "iron" },
  { id: "tile-2", owner: "player1", resource: "wheat" },
  { id: "tile-3", owner: "player2", resource: "stone" },
];

export default {
  title: "UI/World Lists",
  component: ListOverlay,
  parameters: {
    layout: "fullscreen",
  },
};

export const CitiesTab = {
  args: {
    isOpen: true,
    cities,
    tiles,
    players,
    onClose: () => {},
    onLocateCity: () => {},
  },
};
