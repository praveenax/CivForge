import { BUILDINGS } from "../data/buildings";
import { IMPROVEMENTS } from "../data/improvements";
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

export const processProductionQueue = (city, tiles) => {
  if (city.queue.length === 0) {
    return {
      city,
      tiles,
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
    };
  }

  if (current.type === "improvement") {
    const tileId = current.tileId;
    const targetTile = tiles.find((tile) => tile.id === tileId);

    if (!targetTile || targetTile.cityId !== city.id) {
      return {
        city: {
          ...city,
          queue: rest,
        },
        tiles,
      };
    }

    const updatedTiles = tiles.map((tile) => {
      if (tile.id !== tileId) {
        return tile;
      }

      return {
        ...tile,
        improvement: current.id,
      };
    });

    return {
      city: {
        ...city,
        queue: rest,
      },
      tiles: updatedTiles,
    };
  }

  return {
    city: {
      ...city,
      queue: rest,
    },
    tiles,
  };
};
