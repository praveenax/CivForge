import { useMemo, useState } from "react";

const LIST_TABS = {
  CITIES: "cities",
  RESOURCES: "resources",
  UNITS: "units",
};

function ListOverlay({ isOpen, cities, tiles, players, onClose }) {
  const [activeTab, setActiveTab] = useState(LIST_TABS.CITIES);

  const playerId = useMemo(
    () => players.find((entry) => entry.type === "human")?.id ?? "player1",
    [players],
  );

  const playerNameById = useMemo(() => {
    const map = new Map();
    players.forEach((player) => {
      map.set(player.id, player.name);
    });
    return map;
  }, [players]);

  const playerCities = useMemo(
    () => cities.filter((city) => city.owner === playerId),
    [cities, playerId],
  );

  const resourceSummary = useMemo(() => {
    const counts = new Map();

    tiles.forEach((tile) => {
      if (tile.owner !== playerId) {
        return;
      }

      if (!tile.resource) {
        return;
      }

      const current = counts.get(tile.resource) ?? 0;
      counts.set(tile.resource, current + 1);
    });

    return Array.from(counts.entries())
      .map(([resourceId, count]) => ({
        resourceId,
        count,
      }))
      .sort((left, right) => right.count - left.count);
  }, [playerId, tiles]);

  const unitRows = useMemo(
    () =>
      playerCities.flatMap((city) =>
        (city.units ?? []).map((unitId, index) => ({
          id: `${city.id}-${unitId}-${index}`,
          unitId,
          cityName: city.name,
          ownerName: playerNameById.get(city.owner) ?? city.owner,
        })),
      ),
    [playerCities, playerNameById],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <section className="list-overlay" role="dialog" aria-modal="true">
      <div className="list-overlay-panel panel">
        <div className="list-overlay-header">
          <h2>World Lists</h2>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <div
          className="list-tab-row"
          role="tablist"
          aria-label="World lists tabs"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === LIST_TABS.CITIES}
            className={activeTab === LIST_TABS.CITIES ? "active" : ""}
            onClick={() => setActiveTab(LIST_TABS.CITIES)}
          >
            Cities
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === LIST_TABS.RESOURCES}
            className={activeTab === LIST_TABS.RESOURCES ? "active" : ""}
            onClick={() => setActiveTab(LIST_TABS.RESOURCES)}
          >
            Resources
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === LIST_TABS.UNITS}
            className={activeTab === LIST_TABS.UNITS ? "active" : ""}
            onClick={() => setActiveTab(LIST_TABS.UNITS)}
          >
            Show Units
          </button>
        </div>

        <div className="list-tab-content">
          {activeTab === LIST_TABS.CITIES ? (
            playerCities.length > 0 ? (
              <ul className="list-overlay-items">
                {playerCities.map((city) => (
                  <li key={city.id}>
                    <strong>{city.name}</strong> - Owner:{" "}
                    {playerNameById.get(city.owner) ?? city.owner} - Pop:{" "}
                    {city.population} - Location: ({city.x}, {city.y})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="list-overlay-empty">
                No player cities available yet.
              </p>
            )
          ) : null}

          {activeTab === LIST_TABS.RESOURCES ? (
            resourceSummary.length > 0 ? (
              <ul className="list-overlay-items">
                {resourceSummary.map((entry) => (
                  <li key={entry.resourceId}>
                    <strong>{entry.resourceId}</strong> - Total Tiles:{" "}
                    {entry.count}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="list-overlay-empty">No resources discovered yet.</p>
            )
          ) : null}

          {activeTab === LIST_TABS.UNITS ? (
            unitRows.length > 0 ? (
              <ul className="list-overlay-items">
                {unitRows.map((row) => (
                  <li key={row.id}>
                    <strong>{row.unitId}</strong> - City: {row.cityName} -
                    Owner: {row.ownerName}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="list-overlay-empty">
                No units available right now.
              </p>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ListOverlay;
