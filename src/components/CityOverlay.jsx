import { BUILDINGS } from "../game/data/buildings";
import { UNITS } from "../game/data/units";
import {
  getCultureNeededForNextLevel,
  getFoodConsumedPerTurn,
  getFoodNeededForNextPopulation,
} from "../game/systems/citySystem";

function QueueItem({ item }) {
  const source = item.type === "building" ? BUILDINGS : UNITS;
  const config = source[item.id];
  const cost = config?.cost ?? 0;
  const progress = Math.min(100, Math.round((item.progress / cost) * 100));

  return (
    <li className="queue-item">
      <span>
        {config?.name ?? item.id} ({item.type})
      </span>
      <strong>{progress}%</strong>
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

  return (
    <aside className="panel city-overlay">
      <div className="panel-header">
        <h2>{city.name}</h2>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>

      <div className="overlay-columns">
        <section>
          <h3>City Stats</h3>
          <p>Population: {city.population}</p>
          <p>Culture Level: {city.cultureLevel ?? 1}</p>
          <p>Food Consumption: {foodConsumed}/turn</p>
          <p>Net Food: {netFood >= 0 ? `+${netFood}` : netFood}/turn</p>
          <p>
            Growth Progress: {city.food}/{foodNeededForNextPop} (
            {growthProgressPct}
            %)
          </p>
          <progress value={city.food} max={foodNeededForNextPop} />
          <p>
            Culture Progress: {city.culture ?? 0}/{cultureNeededForNextLevel} (
            {cultureProgressPct}
            %)
          </p>
          <progress value={city.culture ?? 0} max={cultureNeededForNextLevel} />
          <p>
            Buildings:{" "}
            {city.buildings.length ? city.buildings.join(", ") : "None"}
          </p>
          <p>Units: {city.units.length ? city.units.join(", ") : "None"}</p>
        </section>

        <section>
          <h3>Yield Per Turn</h3>
          <p>Food: {city.yields.food}</p>
          <p>Production: {city.yields.production}</p>
          <p>Gold: {city.yields.gold}</p>
          <p>Science: {city.yields.science}</p>
          <p>Culture: {city.yields.culture}</p>
        </section>
      </div>

      <section>
        <h3>Production Queue</h3>
        {city.queue.length ? (
          <ul className="queue-list">
            {city.queue.map((item, index) => (
              <QueueItem key={`${item.type}-${item.id}-${index}`} item={item} />
            ))}
          </ul>
        ) : (
          <p>Queue is empty.</p>
        )}
      </section>

      <section>
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
      </section>

      <section>
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
    </aside>
  );
}

export default CityOverlay;
