import { TERRAIN_TYPES } from "../game/data/terrain";

const resourceGlyph = {
  wheat: "W",
  iron: "I",
  gems: "G",
  manuscripts: "M",
};

function Tile({ tile, isSelected, hasCity, onClick }) {
  const terrain = TERRAIN_TYPES[tile.terrain];

  return (
    <button
      type="button"
      className={`tile ${isSelected ? "selected" : ""} ${hasCity ? "city" : ""}`}
      style={{ backgroundColor: terrain?.color }}
      onClick={onClick}
      aria-label={`Tile ${tile.x},${tile.y} ${terrain?.name ?? tile.terrain}`}
    >
      <span className="tile-coord">
        {tile.x},{tile.y}
      </span>
      {tile.resource ? (
        <span className="tile-resource">{resourceGlyph[tile.resource]}</span>
      ) : null}
      {hasCity ? <span className="tile-city">C</span> : null}
    </button>
  );
}

export default Tile;
