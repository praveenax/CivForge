import { BUILDINGS } from "../data/buildings";

const pickBestAiBuilding = (player, city) => {
  const options = Object.values(BUILDINGS).filter((building) => {
    if (city.buildings.includes(building.id)) {
      return false;
    }

    if (!building.requiredTech) {
      return true;
    }

    return player.unlockedTechs.includes(building.requiredTech);
  });

  if (options.length === 0) {
    return null;
  }

  return options.sort((a, b) => a.cost - b.cost)[0];
};

export const processAiTurn = ({ players, cities }) => {
  const nextCities = [...cities];

  players
    .filter((player) => player.type === "ai")
    .forEach((aiPlayer) => {
      nextCities.forEach((city, index) => {
        if (city.owner !== aiPlayer.id || city.queue.length > 0) {
          return;
        }

        const choice = pickBestAiBuilding(aiPlayer, city);

        if (!choice) {
          return;
        }

        nextCities[index] = {
          ...city,
          queue: [
            ...city.queue,
            {
              type: "building",
              id: choice.id,
              progress: 0,
            },
          ],
        };
      });
    });

  return nextCities;
};
