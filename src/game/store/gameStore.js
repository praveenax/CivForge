import { create } from "zustand";
import { BUILDINGS } from "../data/buildings";
import {
  getImprovementIdForResource,
  getValidSettlementTiles,
  IMPROVEMENTS,
} from "../data/improvements";
import { TECHS } from "../data/techs";
import { UNITS } from "../data/units";
import { setResearchTarget } from "../systems/scienceSystem";
import { processTurn } from "../systems/turnSystem";
import {
  CIVILIZATION_OPTIONS,
  DEFAULT_GAME_SETUP,
  GAME_SAVE_KEY,
  PLAYER_ID,
} from "./gameStore.constants";
import {
  buildSaveSnapshot,
  createFoundedCity,
  getNextCityId,
  initializeWorld,
  isValidSnapshot,
  normalizeGameSetup,
  normalizePlayers,
} from "./gameStore.utils";

export { GAME_SAVE_KEY, CIVILIZATION_OPTIONS };

export const useGameStore = create((set, get) => {
  const initial = initializeWorld(DEFAULT_GAME_SETUP);

  return {
    turn: 1,
    selectedCityId: "city_1",
    selectedTileId: null,
    pendingCityFounding: null,
    isTechTreeOpen: false,
    ...initial,

    startNewGame: (setup) => {
      const fresh = initializeWorld(setup);

      set({
        turn: 1,
        selectedCityId: fresh.cities[0]?.id ?? null,
        selectedTileId: null,
        pendingCityFounding: null,
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
        pendingCityFounding: null,
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
        pendingCityFounding: snapshot.pendingCityFounding ?? null,
        isTechTreeOpen: Boolean(snapshot.isTechTreeOpen),
        tiles: snapshot.tiles,
        cities: snapshot.cities,
        players: normalizePlayers(snapshot.players),
        gameSetup: normalizedSetup,
      });

      return true;
    },

    selectCity: (cityId) => set({ selectedCityId: cityId }),

    closeCityOverlay: () => set({ selectedCityId: null }),

    selectTile: (tileId) => set({ selectedTileId: tileId }),

    toggleTechTree: () =>
      set((state) => ({ isTechTreeOpen: !state.isTechTreeOpen })),

    queueProduction: (cityId, type, id, options = {}) =>
      set((state) => {
        const city = state.cities.find((entry) => entry.id === cityId);
        if (!city) {
          return state;
        }

        const player = state.players.find((entry) => entry.id === city.owner);
        const registry =
          type === "building"
            ? BUILDINGS
            : type === "unit"
              ? UNITS
              : type === "improvement"
                ? IMPROVEMENTS
                : null;
        if (!registry) {
          return state;
        }

        const item = registry[id];

        if (!player || !item) {
          return state;
        }

        let queueEntry = {
          type,
          id,
          progress: 0,
        };

        if (type === "improvement") {
          const tile = state.tiles.find((entry) => entry.id === options.tileId);

          if (!tile) {
            return state;
          }

          if (id === "settlement") {
            const validSettlementTileIds = new Set(
              getValidSettlementTiles(city, state.tiles).map(
                (entry) => entry.id,
              ),
            );
            if (!validSettlementTileIds.has(tile.id)) {
              return state;
            }
          } else {
            if (tile.cityId !== city.id || !tile.resource) {
              return state;
            }

            const expectedImprovementId = getImprovementIdForResource(
              tile.resource,
              player.unlockedTechs,
            );
            if (expectedImprovementId !== id) {
              return state;
            }
          }

          if (tile.improvement) {
            return state;
          }

          const hasQueuedTileImprovement = city.queue.some(
            (entry) => entry.type === "improvement" && entry.tileId === tile.id,
          );
          if (hasQueuedTileImprovement) {
            return state;
          }

          queueEntry = {
            ...queueEntry,
            tileId: tile.id,
            resourceId: tile.resource ?? null,
          };
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
            queue: [...entry.queue, queueEntry],
          };
        });

        return {
          cities: updatedCities,
        };
      }),

    setResearchForPlayer: (playerId, techId) =>
      set((state) => ({
        players: state.players.map((player) =>
          player.id === playerId ? setResearchTarget(player, techId) : player,
        ),
      })),

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

        const completedSettlements = next.completedSettlements ?? [];
        const pendingCityFounding =
          state.pendingCityFounding ?? completedSettlements[0] ?? null;

        const nextState = { ...next };
        delete nextState.completedSettlements;

        return {
          ...nextState,
          pendingCityFounding,
          turn: state.turn + 1,
        };
      }),

    completeCityFounding: (name) =>
      set((state) => {
        const pending = state.pendingCityFounding;
        if (!pending) {
          return state;
        }

        const targetTile = state.tiles.find(
          (tile) => tile.id === pending.tileId,
        );
        if (!targetTile) {
          return {
            pendingCityFounding: null,
          };
        }

        const cityName = String(name ?? "").trim() || "New Settlement";
        const cityId = getNextCityId(state.cities);
        const foundedCity = createFoundedCity({
          id: cityId,
          name: cityName,
          owner: pending.ownerId,
          x: targetTile.x,
          y: targetTile.y,
        });

        const updatedTiles = state.tiles.map((tile) => {
          if (tile.id !== targetTile.id) {
            return tile;
          }

          return {
            ...tile,
            owner: pending.ownerId,
            cityId,
            improvement: null,
          };
        });

        return {
          cities: [...state.cities, foundedCity],
          tiles: updatedTiles,
          selectedCityId: cityId,
          selectedTileId: targetTile.id,
          pendingCityFounding: null,
        };
      }),

    dismissCityFounding: () => set({ pendingCityFounding: null }),

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
