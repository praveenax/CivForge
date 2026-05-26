import { BUILDINGS } from "../game/data/buildings";
import { UNITS } from "../game/data/units";
import {
  getCultureNeededForNextLevel,
  getFoodConsumedPerTurn,
  getFoodNeededForNextPopulation,
} from "../game/systems/citySystem";

const getEntryLabel = (registry, id) => registry[id]?.name ?? id;

function QueueItem({ item }) {
  const source = item.type === "building" ? BUILDINGS : UNITS;
  const config = source[item.id];
  const cost = config?.cost ?? 0;
  const progress =
    cost > 0 ? Math.min(100, Math.round((item.progress / cost) * 100)) : 0;

  return (
    <li className="queue-item">
      <div>
        <strong>{config?.name ?? item.id}</strong>
        <p className="queue-item-meta">{item.type}</p>
      </div>
      <div className="queue-item-progress">
        <strong>{progress}%</strong>
        <progress value={item.progress} max={cost || 1} />
      </div>
    </li>
  );
}

function CityOverlay({ city, player, onClose, onQueueProduction }) {
  if (!city) {
    return null;
  }

  const availableBuildings = Object.values(BUILDINGS).filter((building) => {
    if (city.buildings.includes(building.id)) {
      return false;
    }

    if (!building.requiredTech) {
      return true;
    }

    return player?.unlockedTechs.includes(building.requiredTech);
  });

  const availableUnits = Object.values(UNITS).filter((unit) => {
    if (!unit.requiredTech) {
      return true;
    }

    return player?.unlockedTechs.includes(unit.requiredTech);
  });

  const foodConsumed = getFoodConsumedPerTurn(city);
  const netFood = city.yields.food - foodConsumed;
  const foodNeededForNextPop =
    city.foodNeededForNextPop ??
    getFoodNeededForNextPopulation(city.population);
  const growthProgressPct = Math.min(
    100,
    Math.round((city.food / foodNeededForNextPop) * 100),
  );
  const cultureNeededForNextLevel =
    city.cultureNeededForNextLevel ??
    getCultureNeededForNextLevel(city.cultureLevel ?? 1);
  const cultureProgressPct = Math.min(
    100,
    Math.round(((city.culture ?? 0) / cultureNeededForNextLevel) * 100),
  );
  const buildingNames = (city.buildings ?? []).map((buildingId) =>
    getEntryLabel(BUILDINGS, buildingId),
  );
  const unitNames = (city.units ?? []).map((unitId) =>
    getEntryLabel(UNITS, unitId),
  );
  const ownerName = player?.name ?? city.owner;

  return (
    <aside
      className="city-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="city-overlay-title"
    >
      <div className="city-overlay-panel panel">
        <div className="panel-header city-overlay-header">
          <div>
            <h2 id="city-overlay-title">{city.name}</h2>
            <p className="city-overlay-subtitle">Owner: {ownerName}</p>
          </div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <section className="city-kpi-grid" aria-label="City overview">
          <article className="city-kpi-card">
            <span>Population</span>
            <strong>{city.population}</strong>
          </article>
          <article className="city-kpi-card">
            <span>Culture Level</span>
            <strong>{city.cultureLevel ?? 1}</strong>
          </article>
          <article className="city-kpi-card">
            <span>Food/Turn</span>
            <strong>{netFood >= 0 ? `+${netFood}` : netFood}</strong>
          </article>
          <article className="city-kpi-card">
            <span>Consumption</span>
            <strong>{foodConsumed}/turn</strong>
          </article>
        </section>

        <div className="overlay-columns city-overlay-columns">
          <section className="city-info-card">
            <h3>Growth & Culture</h3>
            <div className="city-progress-group">
              <div className="city-progress-row">
                <span>Growth</span>
                <strong>
                  {city.food}/{foodNeededForNextPop} ({growthProgressPct}%)
                </strong>
              </div>
              <progress value={city.food} max={foodNeededForNextPop} />
            </div>
            <div className="city-progress-group">
              <div className="city-progress-row">
                <span>Culture</span>
                <strong>
                  {city.culture ?? 0}/{cultureNeededForNextLevel} (
                  {cultureProgressPct}%)
                </strong>
              </div>
              <progress
                value={city.culture ?? 0}
                max={cultureNeededForNextLevel}
              />
            </div>
            <div className="city-tag-block">
              <span>Buildings</span>
              <p>{buildingNames.length ? buildingNames.join(", ") : "None"}</p>
            </div>
            <div className="city-tag-block">
              <span>Units</span>
              <p>{unitNames.length ? unitNames.join(", ") : "None"}</p>
            </div>
          </section>

          <section className="city-info-card">
            <h3>Yield Per Turn</h3>
            <ul className="city-yield-list">
              <li>
                <span>Food</span>
                <strong>{city.yields.food}</strong>
              </li>
              <li>
                <span>Production</span>
                <strong>{city.yields.production}</strong>
              </li>
              <li>
                <span>Gold</span>
                <strong>{city.yields.gold}</strong>
              </li>
              <li>
                <span>Science</span>
                <strong>{city.yields.science}</strong>
              </li>
              <li>
                <span>Culture</span>
                <strong>{city.yields.culture}</strong>
              </li>
            </ul>
          </section>
        </div>

        <section>
          <h3>Production Queue</h3>
          {city.queue.length ? (
            <ul className="queue-list">
              {city.queue.map((item, index) => (
                <QueueItem
                  key={`${item.type}-${item.id}-${index}`}
                  item={item}
                />
              ))}
            </ul>
          ) : (
            <p className="city-empty-text">Queue is empty.</p>
          )}
        </section>

        <div className="overlay-columns city-actions-columns">
          <section className="city-info-card">
            <h3>Add Building</h3>
            <div className="action-grid">
              {availableBuildings.map((building) => (
                <button
                  key={building.id}
                  type="button"
                  onClick={() =>
                    onQueueProduction(city.id, "building", building.id)
                  }
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
            <h3>Train Unit</h3>
            <div className="action-grid">
              {availableUnits.map((unit) => (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => onQueueProduction(city.id, "unit", unit.id)}
                >
                  {unit.name} ({unit.cost})
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
}

export default CityOverlay;
