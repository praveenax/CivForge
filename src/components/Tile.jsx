import { TERRAIN_TYPES } from "../game/data/terrain";

const resourceGlyph = {
  wheat: "W",
  iron: "I",
  stone: "S",
  gems: "G",
  manuscripts: "M",
};

const improvementGlyph = {
  mine: "MI",
  farm: "FA",
  archive: "AR",
};

const CIV_CLASS_BY_ID = {
  rome: "owner-civ-rome",
  india: "owner-civ-india",
  egypt: "owner-civ-egypt",
  greece: "owner-civ-greece",
  china: "owner-civ-china",
  persia: "owner-civ-persia",
  aztec: "owner-civ-aztec",
};

function Tile({ tile, ownerCivilizationId, isSelected, hasCity, onClick }) {
  const terrain = TERRAIN_TYPES[tile.terrain];
  const civClassName =
    CIV_CLASS_BY_ID[ownerCivilizationId ?? ""] ?? "owner-civ-neutral";
  const tileClassName = [
    "tile",
    isSelected ? "selected" : "",
    hasCity ? "city" : "",
    tile.owner ? "owned-tile" : "",
    tile.owner ? civClassName : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={tileClassName}
      style={{ backgroundColor: terrain?.color }}
      onClick={onClick}
      aria-label={`Tile ${tile.x},${tile.y} ${terrain?.name ?? tile.terrain}`}
    >
      {/* <span className="tile-coord">
        {tile.x},{tile.y}
      </span> */}
      {tile.resource ? (
        <span className="tile-resource">{resourceGlyph[tile.resource]}</span>
      ) : null}
      {tile.improvement ? (
        <span className="tile-improvement">
          {improvementGlyph[tile.improvement] ?? "IM"}
        </span>
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
