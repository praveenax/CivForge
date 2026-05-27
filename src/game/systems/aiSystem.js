import { BUILDINGS } from "../data/buildings";
import { getValidSettlementTiles, IMPROVEMENTS } from "../data/improvements";
import { UNITS } from "../data/units";

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

const pickBestAiUnit = (player) => {
  const options = Object.values(UNITS).filter((unit) => {
    if (!unit.requiredTech) {
      return true;
    }

    return player.unlockedTechs.includes(unit.requiredTech);
  });

  if (options.length === 0) {
    return null;
  }

  return options.sort((a, b) => a.cost - b.cost)[0];
};

export const processAiTurn = ({ players, cities, tiles }) => {
  const nextCities = [...cities];

  players
    .filter((player) => player.type === "ai")
    .forEach((aiPlayer) => {
      let hasQueuedSettlement = nextCities.some(
        (entry) =>
          entry.owner === aiPlayer.id &&
          entry.queue.some(
            (queueEntry) =>
              queueEntry.type === "improvement" &&
              queueEntry.id === IMPROVEMENTS.settlement.id,
          ),
      );

      nextCities.forEach((city, index) => {
        if (city.owner !== aiPlayer.id || city.queue.length > 0) {
          return;
        }

        if (!hasQueuedSettlement) {
          const validSettlementTiles = getValidSettlementTiles(
            city,
            tiles,
            nextCities,
          );

          if (validSettlementTiles.length > 0 && city.buildings.length >= 1) {
            nextCities[index] = {
              ...city,
              queue: [
                ...city.queue,
                {
                  type: "improvement",
                  id: IMPROVEMENTS.settlement.id,
                  tileId: validSettlementTiles[0].id,
                  resourceId: validSettlementTiles[0].resource ?? null,
                  progress: 0,
                },
              ],
            };
            hasQueuedSettlement = true;
            return;
          }
        }

        const choice = pickBestAiBuilding(aiPlayer, city);

        if (choice) {
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
          return;
        }

        const unitChoice = pickBestAiUnit(aiPlayer);
        if (!unitChoice) {
          return;
        }

        nextCities[index] = {
          ...city,
          queue: [
            ...city.queue,
            {
              type: "unit",
              id: unitChoice.id,
              progress: 0,
            },
          ],
        };
      });
    });

  return nextCities;
};
