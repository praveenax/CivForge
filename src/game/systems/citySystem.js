import { BUILDINGS } from "../data/buildings";
import { RESOURCE_TYPES } from "../data/resources";
import { TERRAIN_TYPES } from "../data/terrain";
import { getNeighborTiles } from "./mapGenerator";

const addYields = (base, extra) => ({
  food: base.food + extra.food,
  production: base.production + extra.production,
  gold: base.gold + extra.gold,
  science: base.science + extra.science,
});

export const claimTilesAroundCity = (tiles, city, radius = 1) =>
  tiles.map((tile) => {
    const dx = Math.abs(tile.x - city.x);
    const dy = Math.abs(tile.y - city.y);

    if (dx <= radius && dy <= radius) {
      return {
        ...tile,
        owner: city.owner,
        cityId: city.id,
      };
    }

    return tile;
  });

export const calculateCityYields = (city, tiles) => {
  const workedTiles = getNeighborTiles(tiles, city.x, city.y, 1).filter(
    (tile) => tile.cityId === city.id,
  );

  let yields = workedTiles.reduce(
    (sum, tile) => {
      const terrainYield = TERRAIN_TYPES[tile.terrain]?.yields ?? {
        food: 0,
        production: 0,
        gold: 0,
        science: 0,
      };
      const resourceYield = tile.resource
        ? (RESOURCE_TYPES[tile.resource]?.yields ?? {
            food: 0,
            production: 0,
            gold: 0,
            science: 0,
          })
        : { food: 0, production: 0, gold: 0, science: 0 };

      return addYields(sum, addYields(terrainYield, resourceYield));
    },
    { food: 1, production: 1, gold: 1, science: 1 },
  );

  city.buildings.forEach((buildingId) => {
    const building = BUILDINGS[buildingId];
    if (!building) {
      return;
    }

    if (building.effects.foodPercent) {
      yields.food += Math.floor(
        (yields.food * building.effects.foodPercent) / 100,
      );
    }

    yields.food += building.effects.food ?? 0;
    yields.production += building.effects.production ?? 0;
    yields.gold += building.effects.gold ?? 0;
    yields.science += building.effects.science ?? 0;
  });

  return yields;
};

export const getFoodConsumedPerTurn = (city) => city.population * 2;

export const getFoodNeededForNextPopulation = (population) =>
  5 * 2 ** Math.max(0, population - 1);

export const processCityGrowth = (city) => {
  let population = city.population;
  let growthProgress = city.food;
  const excessFood = Math.max(
    0,
    city.yields.food - getFoodConsumedPerTurn(city),
  );

  growthProgress += excessFood;

  while (growthProgress >= getFoodNeededForNextPopulation(population)) {
    growthProgress -= getFoodNeededForNextPopulation(population);
    population += 1;
  }

  const foodNeededForNextPop = getFoodNeededForNextPopulation(population);

  return {
    ...city,
    population,
    food: growthProgress,
    foodNeededForNextPop,
  };
};
