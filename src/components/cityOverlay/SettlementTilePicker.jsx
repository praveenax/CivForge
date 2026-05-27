import { RESOURCE_TYPES } from "../../game/data/resources";

function SettlementTilePicker({
  isOpen,
  validSettlementTiles,
  onSelectTile,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <section
      className="city-tile-picker-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settlement-tile-picker-title"
    >
      <div className="city-tile-picker-card panel">
        <h3 id="settlement-tile-picker-title">Choose Settlement Tile</h3>
        <p>
          Select a tile next to a culturally owned tile to place your
          settlement.
        </p>
        <div className="city-tile-picker-grid">
          {validSettlementTiles.map((tile) => (
            <button
              key={tile.id}
              type="button"
              onClick={() => onSelectTile(tile.id)}
            >
              Tile {tile.x},{tile.y}
              {tile.resource
                ? ` - ${RESOURCE_TYPES[tile.resource]?.name ?? tile.resource}`
                : ""}
            </button>
          ))}
        </div>
        <div className="research-prompt-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default SettlementTilePicker;
