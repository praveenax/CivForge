import { generateMap } from "../systems/mapGenerator";
import {
  CIVILIZATION_OPTIONS,
  DEFAULT_GAME_SETUP,
  PLAYER_ID,
  START_POSITIONS,
} from "./gameStore.constants";

export const getCivilizationById = (civilizationId) =>
  CIVILIZATION_OPTIONS.find((entry) => entry.id === civilizationId) ??
  CIVILIZATION_OPTIONS[0];

export const normalizeGameSetup = (setup) => {
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

export const inferCivilizationIdFromName = (name) => {
  const normalizedName = String(name ?? "")
    .trim()
    .toLowerCase();
  const matched = CIVILIZATION_OPTIONS.find(
    (entry) => entry.name.toLowerCase() === normalizedName,
  );

  return matched?.id ?? null;
};

export const normalizePlayers = (players = []) =>
  players.map((player) => ({
    ...player,
    civilizationId:
      player.civilizationId ??
      inferCivilizationIdFromName(player.name) ??
      (player.id === PLAYER_ID ? DEFAULT_GAME_SETUP.civilizationId : "greece"),
  }));

export const getAiCivilizations = (playerCivilizationId, opponentCount) => {
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

export const createPlayer = ({ id, name, type, civilizationId }) => ({
  id,
  name,
  type,
  civilizationId,
  unlockedTechs: ["agriculture"],
  currentResearch: "mining",
  scienceProgress: 0,
  stockpile: { food: 0, production: 0, gold: 0, science: 0, culture: 0 },
});

export const createCity = ({ id, name, owner, x, y, isPlayerCity }) => ({
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

export const createFoundedCity = ({ id, name, owner, x, y }) => ({
  id,
  name,
  owner,
  x,
  y,
  population: 1,
  food: 0,
  foodNeededForNextPop: 5,
  culture: 0,
  cultureLevel: 1,
  cultureNeededForNextLevel: 10,
  goldStored: 0,
  scienceStored: 0,
  buildings: [],
  queue: [],
  units: [],
  yields: {
    food: 2,
    production: 1,
    gold: 1,
    science: 1,
    culture: 1,
  },
});

export const getNextCityId = (cities) => {
  const maxId = cities.reduce((max, city) => {
    const numeric = Number(String(city.id).replace(/^city_/, ""));
    if (!Number.isFinite(numeric)) {
      return max;
    }
    return Math.max(max, numeric);
  }, 0);

  return `city_${maxId + 1}`;
};

export const buildInitialWorldActors = (setup) => {
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
      civilizationId: playerCiv.id,
    }),
    ...aiCivilizations.map((civ, index) =>
      createPlayer({
        id: `ai_${index + 1}`,
        name: civ.name,
        type: "ai",
        civilizationId: civ.baseId ?? civ.id,
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

export const initializeWorld = (setup = DEFAULT_GAME_SETUP) => {
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

export const buildSaveSnapshot = (state) => ({
  turn: state.turn,
  selectedCityId: state.selectedCityId,
  selectedTileId: state.selectedTileId,
  isTechTreeOpen: state.isTechTreeOpen,
  tiles: state.tiles,
  cities: state.cities,
  players: state.players,
  pendingCityFounding: state.pendingCityFounding,
  gameSetup: normalizeGameSetup(state.gameSetup),
});

export const isValidSnapshot = (snapshot) =>
  Boolean(
    snapshot &&
    Array.isArray(snapshot.tiles) &&
    Array.isArray(snapshot.cities) &&
    Array.isArray(snapshot.players),
  );
