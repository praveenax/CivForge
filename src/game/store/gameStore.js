import { create } from "zustand";
import { BUILDINGS } from "../data/buildings";
import { TECHS } from "../data/techs";
import { UNITS } from "../data/units";
import { generateMap } from "../systems/mapGenerator";
import { setResearchTarget } from "../systems/scienceSystem";
import { processTurn } from "../systems/turnSystem";

const PLAYER_ID = "player1";
export const GAME_SAVE_KEY = "civforge.save.v1";

export const CIVILIZATION_OPTIONS = [
  {
    id: "rome",
    name: "Rome",
    cityNames: ["Aurelia", "Roma", "Neapolis"],
  },
  {
    id: "india",
    name: "India",
    cityNames: ["Pataliputra", "Varanasi", "Ujjain"],
  },
  {
    id: "egypt",
    name: "Egypt",
    cityNames: ["Thebes", "Memphis", "Heliopolis"],
  },
  {
    id: "greece",
    name: "Greece",
    cityNames: ["Athens", "Sparta", "Corinth"],
  },
  {
    id: "china",
    name: "China",
    cityNames: ["Chang'an", "Luoyang", "Kaifeng"],
  },
  {
    id: "persia",
    name: "Persia",
    cityNames: ["Persepolis", "Susa", "Pasargadae"],
  },
  {
    id: "aztec",
    name: "Aztec",
    cityNames: ["Tenochtitlan", "Texcoco", "Tlacopan"],
  },
];

const DEFAULT_GAME_SETUP = {
  civilizationId: "rome",
  opponentCount: 2,
};

const START_POSITIONS = [
  { x: 5, y: 7 },
  { x: 22, y: 6 },
  { x: 7, y: 22 },
  { x: 22, y: 22 },
  { x: 15, y: 5 },
  { x: 15, y: 25 },
  { x: 4, y: 15 },
  { x: 25, y: 15 },
];

const getCivilizationById = (civilizationId) =>
  CIVILIZATION_OPTIONS.find((entry) => entry.id === civilizationId) ??
  CIVILIZATION_OPTIONS[0];

const normalizeGameSetup = (setup) => {
  const rawOpponentCount = Number(setup?.opponentCount);
  const opponentCount = Number.isFinite(rawOpponentCount)
    ? Math.max(1, Math.min(7, Math.round(rawOpponentCount)))
    : DEFAULT_GAME_SETUP.opponentCount;

  const civilization = getCivilizationById(
    setup?.civilizationId ?? DEFAULT_GAME_SETUP.civilizationId,
  );

  return {
    civilizationId: civilization.id,
    opponentCount,
  };
};

const getAiCivilizations = (playerCivilizationId, opponentCount) => {
  const pool = CIVILIZATION_OPTIONS.filter(
    (entry) => entry.id !== playerCivilizationId,
  );

  return Array.from({ length: opponentCount }, (_, index) => {
    const picked = pool[index % pool.length] ?? CIVILIZATION_OPTIONS[0];
    return {
      ...picked,
      id: `${picked.id}_${index + 1}`,
      baseId: picked.id,
    };
  });
};

const createPlayer = ({ id, name, type }) => ({
  id,
  name,
  type,
  unlockedTechs: ["agriculture"],
  currentResearch: "mining",
  scienceProgress: 0,
  stockpile: { food: 0, production: 0, gold: 0, science: 0, culture: 0 },
});

const createCity = ({ id, name, owner, x, y, isPlayerCity }) => ({
  id,
  name,
  owner,
  x,
  y,
  population: 2,
  food: 0,
  foodNeededForNextPop: 10,
  culture: 0,
  cultureLevel: 1,
  cultureNeededForNextLevel: 10,
  goldStored: 0,
  scienceStored: 0,
  buildings: isPlayerCity ? ["granary"] : [],
  queue: isPlayerCity
    ? [{ type: "building", id: "library", progress: 20 }]
    : [],
  units: ["scout"],
  yields: {
    food: isPlayerCity ? 5 : 3,
    production: isPlayerCity ? 3 : 2,
    gold: isPlayerCity ? 2 : 1,
    science: 1,
    culture: 1,
  },
});

const buildInitialWorldActors = (setup) => {
  const normalizedSetup = normalizeGameSetup(setup);
  const playerCiv = getCivilizationById(normalizedSetup.civilizationId);
  const aiCivilizations = getAiCivilizations(
    normalizedSetup.civilizationId,
    normalizedSetup.opponentCount,
  );

  const players = [
    createPlayer({
      id: PLAYER_ID,
      name: playerCiv.name,
      type: "human",
    }),
    ...aiCivilizations.map((civ, index) =>
      createPlayer({
        id: `ai_${index + 1}`,
        name: civ.name,
        type: "ai",
      }),
    ),
  ];

  const cityDefinitions = [
    {
      owner: PLAYER_ID,
      name: playerCiv.cityNames[0] ?? "Capital",
      isPlayerCity: true,
    },
    ...aiCivilizations.map((civ, index) => ({
      owner: `ai_${index + 1}`,
      name: civ.cityNames[0] ?? `${civ.name} City`,
      isPlayerCity: false,
    })),
  ];

  const cities = cityDefinitions.map((definition, index) => {
    const start = START_POSITIONS[index] ?? START_POSITIONS[0];

    return createCity({
      id: `city_${index + 1}`,
      name: definition.name,
      owner: definition.owner,
      x: start.x,
      y: start.y,
      isPlayerCity: definition.isPlayerCity,
    });
  });

  return {
    players,
    cities,
    gameSetup: normalizedSetup,
  };
};

const initializeWorld = (setup = DEFAULT_GAME_SETUP) => {
  const tiles = generateMap(30, 30);
  const { cities, players, gameSetup } = buildInitialWorldActors(setup);

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
    players,
    gameSetup,
  };
};

const buildSaveSnapshot = (state) => ({
  turn: state.turn,
  selectedCityId: state.selectedCityId,
  selectedTileId: state.selectedTileId,
  isTechTreeOpen: state.isTechTreeOpen,
  tiles: state.tiles,
  cities: state.cities,
  players: state.players,
  gameSetup: normalizeGameSetup(state.gameSetup),
});

const isValidSnapshot = (snapshot) =>
  Boolean(
    snapshot &&
    Array.isArray(snapshot.tiles) &&
    Array.isArray(snapshot.cities) &&
    Array.isArray(snapshot.players),
  );

export const useGameStore = create((set, get) => {
  const initial = initializeWorld(DEFAULT_GAME_SETUP);

  return {
    turn: 1,
    selectedCityId: "city_1",
    selectedTileId: null,
    isTechTreeOpen: false,
    ...initial,

    startNewGame: (setup) => {
      const fresh = initializeWorld(setup);

      set({
        turn: 1,
        selectedCityId: fresh.cities[0]?.id ?? null,
        selectedTileId: null,
        isTechTreeOpen: false,
        ...fresh,
      });
    },

    resetGame: () => {
      const fresh = initializeWorld(get().gameSetup);
      set({
        turn: 1,
        selectedCityId: fresh.cities[0]?.id ?? null,
        selectedTileId: null,
        isTechTreeOpen: false,
        ...fresh,
      });
    },

    exportGameSnapshot: () => buildSaveSnapshot(get()),

    loadGameSnapshot: (snapshot) => {
      if (!isValidSnapshot(snapshot)) {
        return false;
      }

      const normalizedSetup = normalizeGameSetup(snapshot.gameSetup);

      set({
        turn: typeof snapshot.turn === "number" ? snapshot.turn : 1,
        selectedCityId:
          snapshot.selectedCityId ?? snapshot.cities[0]?.id ?? null,
        selectedTileId: snapshot.selectedTileId ?? null,
        isTechTreeOpen: Boolean(snapshot.isTechTreeOpen),
        tiles: snapshot.tiles,
        cities: snapshot.cities,
        players: snapshot.players,
        gameSetup: normalizedSetup,
      });

      return true;
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
