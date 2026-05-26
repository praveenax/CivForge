import { RESOURCE_POOL } from "../data/resources";
import { TERRAIN_POOL } from "../data/terrain";

const pickRandom = (items) => items[Math.floor(Math.random() * items.length)];

export const getTileId = (x, y) => `${x}-${y}`;

export const generateMap = (width = 30, height = 30) => {
  const tiles = [];

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      tiles.push({
        id: getTileId(x, y),
        x,
        y,
        terrain: pickRandom(TERRAIN_POOL),
        resource: pickRandom(RESOURCE_POOL),
        improvement: null,
        owner: null,
        cityId: null,
      });
    }
  }

  return tiles;
};

export const getTileByPosition = (tiles, x, y) =>
  tiles.find((tile) => tile.x === x && tile.y === y) ?? null;

export const getNeighborTiles = (tiles, x, y, radius = 1) =>
  tiles.filter((tile) => {
    const dx = Math.abs(tile.x - x);
    const dy = Math.abs(tile.y - y);
    return dx <= radius && dy <= radius;
  });
