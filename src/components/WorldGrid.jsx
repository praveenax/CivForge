import { useMemo } from "react";
import Tile from "./Tile";

function WorldGrid({
  tiles,
  cities,
  selectedTileId,
  onSelectTile,
  onSelectCity,
}) {
  const cityLookup = useMemo(() => {
    const map = new Map();
    cities.forEach((city) => map.set(`${city.x}-${city.y}`, city));
    return map;
  }, [cities]);

  const gridWidth = useMemo(
    () => Math.max(...tiles.map((tile) => tile.x)) + 1,
    [tiles],
  );

  return (
    <section className="world-grid-wrapper">
      <div
        className="world-grid"
        style={{
          gridTemplateColumns: `repeat(${gridWidth}, minmax(80px, 1fr))`,
        }}
      >
        {tiles.map((tile) => {
          const city = cityLookup.get(`${tile.x}-${tile.y}`);

          return (
            <Tile
              key={tile.id}
              tile={tile}
              isSelected={selectedTileId === tile.id}
              hasCity={Boolean(city)}
              onClick={() => {
                onSelectTile(tile.id);
                if (city) {
                  onSelectCity(city.id);
                }
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default WorldGrid;
