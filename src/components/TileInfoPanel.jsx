import { RESOURCE_TYPES } from "../game/data/resources";
import { TERRAIN_TYPES } from "../game/data/terrain";

function TileInfoPanel({ tile }) {
  if (!tile) {
    return (
      <aside className="panel tile-info">
        <h2>Tile Inspector</h2>
        <p>Select a tile to inspect terrain, ownership, and resource yield.</p>
      </aside>
    );
  }

  const terrain = TERRAIN_TYPES[tile.terrain];
  const resource = tile.resource ? RESOURCE_TYPES[tile.resource] : null;

  return (
    <aside className="panel tile-info">
      <h2>Tile Inspector</h2>
      <p>
        Coordinates: {tile.x},{tile.y}
      </p>
      <p>Terrain: {terrain?.name ?? tile.terrain}</p>
      <p>Resource: {resource?.name ?? "None"}</p>
      <p>Owner: {tile.owner ?? "Unclaimed"}</p>
      <p>City: {tile.cityId ?? "None"}</p>
      <div className="tile-yields">
        <h3>Yield</h3>
        <p>
          Food: {(terrain?.yields.food ?? 0) + (resource?.yields.food ?? 0)}
        </p>
        <p>
          Production:{" "}
          {(terrain?.yields.production ?? 0) +
            (resource?.yields.production ?? 0)}
        </p>
        <p>
          Gold: {(terrain?.yields.gold ?? 0) + (resource?.yields.gold ?? 0)}
        </p>
        <p>
          Science:{" "}
          {(terrain?.yields.science ?? 0) + (resource?.yields.science ?? 0)}
        </p>
      </div>
    </aside>
  );
}

export default TileInfoPanel;
