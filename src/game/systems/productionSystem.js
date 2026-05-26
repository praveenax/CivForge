import { BUILDINGS } from "../data/buildings";
import { UNITS } from "../data/units";

const getCost = (item) => {
  if (item.type === "building") {
    return BUILDINGS[item.id]?.cost ?? Number.MAX_SAFE_INTEGER;
  }

  if (item.type === "unit") {
    return UNITS[item.id]?.cost ?? Number.MAX_SAFE_INTEGER;
  }

  return Number.MAX_SAFE_INTEGER;
};

export const processProductionQueue = (city) => {
  if (city.queue.length === 0) {
    return city;
  }

  const [current, ...rest] = city.queue;
  const nextProgress = current.progress + city.yields.production;
  const itemCost = getCost(current);

  if (nextProgress < itemCost) {
    return {
      ...city,
      queue: [{ ...current, progress: nextProgress }, ...rest],
    };
  }

  if (current.type === "building") {
    return {
      ...city,
      buildings: city.buildings.includes(current.id)
        ? city.buildings
        : [...city.buildings, current.id],
      queue: rest,
    };
  }

  if (current.type === "unit") {
    return {
      ...city,
      units: [...city.units, current.id],
      queue: rest,
    };
  }

  return {
    ...city,
    queue: rest,
  };
};
