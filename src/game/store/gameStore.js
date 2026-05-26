import { create } from "zustand";
import { BUILDINGS } from "../data/buildings";
import { TECHS } from "../data/techs";
import { UNITS } from "../data/units";
import { generateMap } from "../systems/mapGenerator";
import { setResearchTarget } from "../systems/scienceSystem";
import { processTurn } from "../systems/turnSystem";

const PLAYER_ID = "player1";

const getInitialCities = () => [
  {
    id: "city_1",
    name: "Aurelia",
    owner: PLAYER_ID,
    x: 5,
    y: 7,
    population: 2,
    food: 0,
    foodNeededForNextPop: 10,
    culture: 0,
    cultureLevel: 1,
    cultureNeededForNextLevel: 10,
    goldStored: 0,
    scienceStored: 0,
    buildings: ["granary"],
    queue: [{ type: "building", id: "library", progress: 20 }],
    units: ["scout"],
    yields: {
      food: 5,
      production: 3,
      gold: 2,
      science: 1,
      culture: 1,
    },
  },
  {
    id: "city_2",
    name: "Kharum",
    owner: "ai_1",
    x: 21,
    y: 18,
    population: 2,
    food: 0,
    foodNeededForNextPop: 10,
    culture: 0,
    cultureLevel: 1,
    cultureNeededForNextLevel: 10,
    goldStored: 0,
    scienceStored: 0,
    buildings: [],
    queue: [],
    units: ["scout"],
    yields: {
      food: 3,
      production: 2,
      gold: 1,
      science: 1,
      culture: 1,
    },
  },
];

const getInitialPlayers = () => [
  {
    id: PLAYER_ID,
    name: "Player",
    type: "human",
    unlockedTechs: ["agriculture"],
    currentResearch: "mining",
    scienceProgress: 0,
    stockpile: { food: 0, production: 0, gold: 0, science: 0, culture: 0 },
  },
  {
    id: "ai_1",
    name: "Iron Dominion",
    type: "ai",
    unlockedTechs: ["agriculture"],
    currentResearch: "mining",
    scienceProgress: 0,
    stockpile: { food: 0, production: 0, gold: 0, science: 0, culture: 0 },
  },
];

const initializeWorld = () => {
  const tiles = generateMap(30, 30);
  const cities = getInitialCities();

  const claimedTiles = tiles.map((tile) => {
    const matchedCity = cities.find(
      (city) =>
        Math.abs(tile.x - city.x) <= 1 && Math.abs(tile.y - city.y) <= 1,
    );

    if (!matchedCity) {
      return tile;
    }

    return {
      ...tile,
      owner: matchedCity.owner,
      cityId: matchedCity.id,
    };
  });

  return {
    tiles: claimedTiles,
    cities,
    players: getInitialPlayers(),
  };
};

export const useGameStore = create((set, get) => {
  const initial = initializeWorld();

  return {
    turn: 1,
    selectedCityId: "city_1",
    selectedTileId: null,
    isTechTreeOpen: false,
    ...initial,

    resetGame: () => {
      const fresh = initializeWorld();
      set({
        turn: 1,
        selectedCityId: "city_1",
        selectedTileId: null,
        isTechTreeOpen: false,
        ...fresh,
      });
    },

    selectCity: (cityId) => set({ selectedCityId: cityId }),

    closeCityOverlay: () => set({ selectedCityId: null }),

    selectTile: (tileId) => set({ selectedTileId: tileId }),

    toggleTechTree: () =>
      set((state) => ({ isTechTreeOpen: !state.isTechTreeOpen })),

    queueProduction: (cityId, type, id) =>
      set((state) => {
        const city = state.cities.find((entry) => entry.id === cityId);
        if (!city) {
          return state;
        }

        const player = state.players.find((entry) => entry.id === city.owner);
        const registry = type === "building" ? BUILDINGS : UNITS;
        const item = registry[id];

        if (!player || !item) {
          return state;
        }

        const techRequirement = item.requiredTech;
        if (
          techRequirement &&
          !player.unlockedTechs.includes(techRequirement)
        ) {
          return state;
        }

        if (type === "building" && city.buildings.includes(id)) {
          return state;
        }

        const updatedCities = state.cities.map((entry) => {
          if (entry.id !== cityId) {
            return entry;
          }

          return {
            ...entry,
            queue: [...entry.queue, { type, id, progress: 0 }],
          };
        });

        return {
          cities: updatedCities,
        };
      }),

    setResearch: (techId) =>
      set((state) => ({
        players: state.players.map((player) =>
          player.id === PLAYER_ID ? setResearchTarget(player, techId) : player,
        ),
      })),

    endTurn: () =>
      set((state) => {
        const next = processTurn({
          players: state.players,
          cities: state.cities,
          tiles: state.tiles,
        });

        return {
          ...next,
          turn: state.turn + 1,
        };
      }),

    getPlayer: () =>
      get().players.find((player) => player.id === PLAYER_ID) ?? null,

    getSelectedCity: () => {
      const state = get();
      return (
        state.cities.find((city) => city.id === state.selectedCityId) ?? null
      );
    },

    getSelectedTile: () => {
      const state = get();
      return (
        state.tiles.find((tile) => tile.id === state.selectedTileId) ?? null
      );
    },

    getResearchProgress: () => {
      const player = get().players.find((entry) => entry.id === PLAYER_ID);
      if (!player || !player.currentResearch) {
        return {
          currentTech: null,
          progressPct: 0,
        };
      }

      const tech = TECHS[player.currentResearch];
      const progressPct = tech
        ? Math.min(100, Math.round((player.scienceProgress / tech.cost) * 100))
        : 0;

      return {
        currentTech: tech,
        progressPct,
      };
    },
  };
});
