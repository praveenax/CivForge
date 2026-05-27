import { processAiTurn } from "./aiSystem";
import {
  calculateCityYields,
  claimTilesAroundCity,
  expandCityBorder,
  getFoodConsumedPerTurn,
  processCityCulture,
  processCityGrowth,
} from "./citySystem";
import { processProductionQueue } from "./productionSystem";
import { processScience } from "./scienceSystem";

const assignDefaultAiResearch = (player) => {
  if (player.type !== "ai" || player.currentResearch) {
    return player;
  }

  const defaultPick = [
    "agriculture",
    "mining",
    "writing",
    "bronzeWorking",
  ].find((techId) => !player.unlockedTechs.includes(techId));

  if (!defaultPick) {
    return player;
  }

  return {
    ...player,
    currentResearch: defaultPick,
    scienceProgress: 0,
  };
};

export const processTurn = ({ players, cities, tiles }) => {
  let updatedTiles = [...tiles];
  const completedSettlements = [];

  let updatedCities = cities.map((city) => {
    updatedTiles = claimTilesAroundCity(updatedTiles, city, 1);
    const yields = calculateCityYields(city, updatedTiles);

    return {
      ...city,
      yields,
      goldStored: city.goldStored + yields.gold,
      scienceStored: city.scienceStored + yields.science,
    };
  });

  updatedCities = updatedCities.map((city) => processCityGrowth(city));
  updatedCities = updatedCities.map((city) => {
    const { city: updatedCity, borderGrowth } = processCityCulture(city);

    if (borderGrowth > 0) {
      updatedTiles = expandCityBorder(updatedTiles, updatedCity, borderGrowth);
    }

    return updatedCity;
  });

  const citiesByOwner = updatedCities.reduce((acc, city) => {
    if (!acc[city.owner]) {
      acc[city.owner] = [];
    }

    acc[city.owner].push(city);
    return acc;
  }, {});

  const playersWithAiResearch = players.map(assignDefaultAiResearch);

  const updatedPlayers = playersWithAiResearch.map((player) => {
    const ownedCities = citiesByOwner[player.id] ?? [];
    const sciencePerTurn = ownedCities.reduce(
      (sum, city) => sum + city.yields.science,
      0,
    );

    const nextPlayer = processScience(player, sciencePerTurn);

    return {
      ...nextPlayer,
      stockpile: {
        food: ownedCities.reduce(
          (sum, city) =>
            sum + (city.yields.food - getFoodConsumedPerTurn(city)),
          0,
        ),
        production: ownedCities.reduce(
          (sum, city) => sum + city.yields.production,
          0,
        ),
        gold: ownedCities.reduce((sum, city) => sum + city.yields.gold, 0),
        science: sciencePerTurn,
        culture: ownedCities.reduce(
          (sum, city) => sum + city.yields.culture,
          0,
        ),
      },
    };
  });

  updatedCities = processAiTurn({
    players: playersWithAiResearch,
    cities: updatedCities,
    tiles: updatedTiles,
  });

  const citiesAfterProduction = [];
  updatedCities.forEach((city) => {
    const result = processProductionQueue(city, updatedTiles, updatedCities);
    updatedTiles = result.tiles;
    citiesAfterProduction.push(result.city);
    if (result.completedSettlement) {
      completedSettlements.push(result.completedSettlement);
    }
  });
  updatedCities = citiesAfterProduction;

  return {
    players: updatedPlayers,
    cities: updatedCities,
    tiles: updatedTiles,
    completedSettlements,
  };
};
