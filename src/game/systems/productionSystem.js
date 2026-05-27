import { BUILDINGS } from "../data/buildings";
import { getValidSettlementTiles, IMPROVEMENTS } from "../data/improvements";
import { UNITS } from "../data/units";

const getCost = (item) => {
  if (item.type === "building") {
    return BUILDINGS[item.id]?.cost ?? Number.MAX_SAFE_INTEGER;
  }

  if (item.type === "unit") {
    return UNITS[item.id]?.cost ?? Number.MAX_SAFE_INTEGER;
  }

  if (item.type === "improvement") {
    return IMPROVEMENTS[item.id]?.cost ?? Number.MAX_SAFE_INTEGER;
  }

  return Number.MAX_SAFE_INTEGER;
};

export const processProductionQueue = (city, tiles, cities = []) => {
  if (city.queue.length === 0) {
    return {
      city,
      tiles,
      completedSettlement: null,
    };
  }

  const [current, ...rest] = city.queue;
  const nextProgress = current.progress + city.yields.production;
  const itemCost = getCost(current);

  if (nextProgress < itemCost) {
    return {
      city: {
        ...city,
        queue: [{ ...current, progress: nextProgress }, ...rest],
      },
      tiles,
      completedSettlement: null,
    };
  }

  if (current.type === "building") {
    return {
      city: {
        ...city,
        buildings: city.buildings.includes(current.id)
          ? city.buildings
          : [...city.buildings, current.id],
        queue: rest,
      },
      tiles,
      completedSettlement: null,
    };
  }

  if (current.type === "unit") {
    return {
      city: {
        ...city,
        units: [...city.units, current.id],
        queue: rest,
      },
      tiles,
      completedSettlement: null,
    };
  }

  if (current.type === "improvement") {
    const tileId = current.tileId;
    const targetTile = tiles.find((tile) => tile.id === tileId);

    if (!targetTile) {
      return {
        city: {
          ...city,
          queue: rest,
        },
        tiles,
        completedSettlement: null,
      };
    }

    const isSettlement = current.id === "settlement";
    if (!isSettlement && targetTile.cityId !== city.id) {
      return {
        city: {
          ...city,
          queue: rest,
        },
        tiles,
        completedSettlement: null,
      };
    }

    if (isSettlement) {
      const validSettlementTileIds = new Set(
        getValidSettlementTiles(city, tiles, cities).map((entry) => entry.id),
      );
      if (!validSettlementTileIds.has(targetTile.id)) {
        return {
          city: {
            ...city,
            queue: rest,
          },
          tiles,
          completedSettlement: null,
        };
      }
    }

    const updatedTiles = tiles.map((tile) => {
      if (tile.id !== tileId) {
        return tile;
      }

      return {
        ...tile,
        improvement: current.id,
        owner: isSettlement ? city.owner : tile.owner,
        cityId: isSettlement ? city.id : tile.cityId,
      };
    });

    return {
      city: {
        ...city,
        queue: rest,
      },
      tiles: updatedTiles,
      completedSettlement: isSettlement
        ? {
            tileId,
            ownerId: city.owner,
            sourceCityId: city.id,
          }
        : null,
    };
  }

  return {
    city: {
      ...city,
      queue: rest,
    },
    tiles,
    completedSettlement: null,
  };
};
