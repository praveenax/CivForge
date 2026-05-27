import { RESOURCE_TYPES } from "../../game/data/resources";

function CityProductionActions({
  cityId,
  availableBuildings,
  availableUnits,
  availableImprovements,
  settlementImprovement,
  isSettlementUnlocked,
  validSettlementTiles,
  onOpenSettlementPicker,
  onQueueProduction,
}) {
  return (
    <div className="overlay-columns city-actions-columns">
      <section className="city-info-card">
        <h3>Add Building</h3>
        <div className="action-grid">
          {availableBuildings.map((building) => (
            <button
              key={building.id}
              type="button"
              onClick={() => onQueueProduction(cityId, "building", building.id)}
            >
              {building.name} ({building.cost})
            </button>
          ))}
        </div>
        {!availableBuildings.length ? (
          <p className="city-empty-text">No new buildings available.</p>
        ) : null}
      </section>

      <section className="city-info-card">
        <h3>Add Improvement</h3>
        <div className="action-grid">
          {settlementImprovement ? (
            <button
              type="button"
              onClick={onOpenSettlementPicker}
              disabled={!isSettlementUnlocked || !validSettlementTiles.length}
            >
              {settlementImprovement.name} ({settlementImprovement.cost}) -
              Choose Tile
            </button>
          ) : null}
          {availableImprovements.map((entry) => {
            const resourceName =
              RESOURCE_TYPES[entry.resourceId]?.name ?? entry.resourceId;
            return (
              <button
                key={`${entry.tileId}-${entry.improvement.id}`}
                type="button"
                onClick={() =>
                  onQueueProduction(
                    cityId,
                    "improvement",
                    entry.improvement.id,
                    {
                      tileId: entry.tileId,
                    },
                  )
                }
              >
                {entry.improvement.name} ({entry.improvement.cost}) -{" "}
                {resourceName} {entry.x},{entry.y}
              </button>
            );
          })}
        </div>
        {!isSettlementUnlocked && settlementImprovement ? (
          <p className="city-empty-text">
            Settlement requires {settlementImprovement.requiredTech}.
          </p>
        ) : null}
        {!validSettlementTiles.length && settlementImprovement ? (
          <p className="city-empty-text">
            No valid settlement tile adjacent to your cultural border.
          </p>
        ) : null}
        {!availableImprovements.length ? (
          <p className="city-empty-text">
            No valid resource improvements available.
          </p>
        ) : null}
      </section>

      <section className="city-info-card">
        <h3>Train Unit</h3>
        <div className="action-grid">
          {availableUnits.map((unit) => (
            <button
              key={unit.id}
              type="button"
              onClick={() => onQueueProduction(cityId, "unit", unit.id)}
            >
              {unit.name} ({unit.cost})
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CityProductionActions;
