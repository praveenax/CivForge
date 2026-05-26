import { BUILDINGS } from "../data/buildings";
import { IMPROVEMENTS } from "../data/improvements";
import { RESOURCE_TYPES } from "../data/resources";
import { TERRAIN_TYPES } from "../data/terrain";
import { getNeighborTiles } from "./mapGenerator";

const EMPTY_YIELDS = {
  food: 0,
  production: 0,
  gold: 0,
  science: 0,
  culture: 0,
};

const normalizeYields = (yields) => ({
  food: yields?.food ?? 0,
  production: yields?.production ?? 0,
  gold: yields?.gold ?? 0,
  science: yields?.science ?? 0,
  culture: yields?.culture ?? 0,
});

const addYields = (base, extra) => ({
  food: (base.food ?? 0) + (extra.food ?? 0),
  production: (base.production ?? 0) + (extra.production ?? 0),
  gold: (base.gold ?? 0) + (extra.gold ?? 0),
  science: (base.science ?? 0) + (extra.science ?? 0),
  culture: (base.culture ?? 0) + (extra.culture ?? 0),
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
      const terrainYield = normalizeYields(TERRAIN_TYPES[tile.terrain]?.yields);
      const resourceYield = tile.resource
        ? normalizeYields(RESOURCE_TYPES[tile.resource]?.yields)
        : EMPTY_YIELDS;
      const improvementYield = tile.improvement
        ? normalizeYields(IMPROVEMENTS[tile.improvement]?.effects)
        : EMPTY_YIELDS;

      return addYields(
        sum,
        addYields(addYields(terrainYield, resourceYield), improvementYield),
      );
    },
    { food: 1, production: 1, gold: 1, science: 1, culture: 1 },
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
    yields.culture += building.effects.culture ?? 0;
  });

  return yields;
};

export const getFoodConsumedPerTurn = (city) => city.population * 2;

export const getFoodNeededForNextPopulation = (population) =>
  5 * 2 ** Math.max(0, population - 1);

export const getCultureNeededForNextLevel = (cultureLevel = 1) =>
  10 * 2 ** Math.max(0, cultureLevel - 1);

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

const getCityTiles = (tiles, city) =>
  tiles.filter((tile) => tile.cityId === city.id);

const getCandidateTilesForCityBorder = (tiles, city) => {
  const cityTiles = getCityTiles(tiles, city);

  return tiles
    .filter((tile) => tile.owner === null || tile.cityId === city.id)
    .filter((tile) => tile.cityId !== city.id)
    .filter((tile) =>
      cityTiles.some((ownedTile) => {
        const dx = Math.abs(tile.x - ownedTile.x);
        const dy = Math.abs(tile.y - ownedTile.y);

        return dx <= 1 && dy <= 1;
      }),
    )
    .sort((left, right) => {
      const leftDistance =
        Math.abs(left.x - city.x) + Math.abs(left.y - city.y);
      const rightDistance =
        Math.abs(right.x - city.x) + Math.abs(right.y - city.y);

      if (leftDistance !== rightDistance) {
        return leftDistance - rightDistance;
      }

      if (left.y !== right.y) {
        return left.y - right.y;
      }

      return left.x - right.x;
    });
};

export const expandCityBorder = (tiles, city, growthCount = 1) => {
  let nextTiles = tiles;

  for (let index = 0; index < growthCount; index += 1) {
    const [nextClaim] = getCandidateTilesForCityBorder(nextTiles, city);

    if (!nextClaim) {
      break;
    }

    nextTiles = nextTiles.map((tile) => {
      if (tile.id !== nextClaim.id) {
        return tile;
      }

      return {
        ...tile,
        owner: city.owner,
        cityId: city.id,
      };
    });
  }

  return nextTiles;
};

export const processCityCulture = (city) => {
  let culture = city.culture ?? 0;
  let cultureLevel = city.cultureLevel ?? 1;
  let borderGrowth = 0;

  culture += city.yields.culture ?? 0;

  while (culture >= getCultureNeededForNextLevel(cultureLevel)) {
    culture -= getCultureNeededForNextLevel(cultureLevel);
    cultureLevel += 1;
    borderGrowth += 1;
  }

  return {
    city: {
      ...city,
      culture,
      cultureLevel,
      cultureNeededForNextLevel: getCultureNeededForNextLevel(cultureLevel),
    },
    borderGrowth,
  };
};
