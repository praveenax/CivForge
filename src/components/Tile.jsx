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
      {hasCity ? (
        <span className="tile-city" aria-hidden="true">
          <svg
            className="tile-city-icon"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 14h12v-1H2v1zM4 13h2V8H4v5zm3 0h2V5H7v8zm3 0h2V9h-2v4zm-6-6h8V3H4v4z" />
          </svg>
        </span>
      ) : null}
    </button>
  );
}

export default Tile;
