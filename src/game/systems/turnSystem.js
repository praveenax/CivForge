import { processAiTurn } from "./aiSystem";
import {
  calculateCityYields,
  claimTilesAroundCity,
  processCityGrowth,
} from "./citySystem";
import { processProductionQueue } from "./productionSystem";
import { processScience } from "./scienceSystem";

export const processTurn = ({ players, cities, tiles }) => {
  let updatedTiles = [...tiles];

  let updatedCities = cities.map((city) => {
    updatedTiles = claimTilesAroundCity(updatedTiles, city, 1);
    const yields = calculateCityYields(city, updatedTiles);

    return {
      ...city,
      yields,
      food: city.food + yields.food,
      goldStored: city.goldStored + yields.gold,
      scienceStored: city.scienceStored + yields.science,
    };
  });

  updatedCities = updatedCities.map((city) => processCityGrowth(city));
  updatedCities = updatedCities.map((city) => processProductionQueue(city));

  const citiesByOwner = updatedCities.reduce((acc, city) => {
    if (!acc[city.owner]) {
      acc[city.owner] = [];
    }

    acc[city.owner].push(city);
    return acc;
  }, {});

  let updatedPlayers = players.map((player) => {
    const ownedCities = citiesByOwner[player.id] ?? [];
    const sciencePerTurn = ownedCities.reduce(
      (sum, city) => sum + city.yields.science,
      0,
    );

    const nextPlayer = processScience(player, sciencePerTurn);

    return {
      ...nextPlayer,
      stockpile: {
        food: ownedCities.reduce((sum, city) => sum + city.yields.food, 0),
        production: ownedCities.reduce(
          (sum, city) => sum + city.yields.production,
          0,
        ),
        gold: ownedCities.reduce((sum, city) => sum + city.yields.gold, 0),
        science: sciencePerTurn,
      },
    };
  });

  updatedCities = processAiTurn({
    players: updatedPlayers,
    cities: updatedCities,
  });

  updatedPlayers = updatedPlayers.map((player) => {
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
  });

  return {
    players: updatedPlayers,
    cities: updatedCities,
    tiles: updatedTiles,
  };
};
