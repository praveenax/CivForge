import { useEffect, useMemo, useRef, useState } from "react";
import Minimap from "./Minimap";
import Tile from "./Tile";

const TILE_SIZE = 80;

function WorldGrid({
  tiles,
  cities,
  players,
  highlightedTileIds = [],
  locateRequest,
  selectedTileId,
  onSelectTile,
  onSelectCity,
}) {
  const worldWrapperRef = useRef(null);

  const [viewport, setViewport] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const cityLookup = useMemo(() => {
    const map = new Map();
    cities.forEach((city) => map.set(`${city.x}-${city.y}`, city));
    return map;
  }, [cities]);

  const ownerCivilizationLookup = useMemo(() => {
    const map = new Map();
    players.forEach((player) => {
      map.set(player.id, player.civilizationId ?? null);
    });
    return map;
  }, [players]);

  const gridWidth = useMemo(
    () => Math.max(...tiles.map((tile) => tile.x)) + 1,
    [tiles],
  );

  const gridHeight = useMemo(
    () => Math.max(...tiles.map((tile) => tile.y)) + 1,
    [tiles],
  );

  const worldPixelWidth = gridWidth * TILE_SIZE;
  const worldPixelHeight = gridHeight * TILE_SIZE;

  useEffect(() => {
    const wrapper = worldWrapperRef.current;
    if (!wrapper) {
      return undefined;
    }

    const syncViewport = () => {
      setViewport({
        left: wrapper.scrollLeft,
        top: wrapper.scrollTop,
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
      });
    };

    syncViewport();
    wrapper.addEventListener("scroll", syncViewport, { passive: true });
    window.addEventListener("resize", syncViewport);

    return () => {
      wrapper.removeEventListener("scroll", syncViewport);
      window.removeEventListener("resize", syncViewport);
    };
  }, [tiles]);

  const handleMinimapJump = ({ worldX, worldY }) => {
    const wrapper = worldWrapperRef.current;
    if (!wrapper) {
      return;
    }

    const nextScrollLeft = Math.min(
      Math.max(0, worldX - wrapper.clientWidth / 2),
      Math.max(0, worldPixelWidth - wrapper.clientWidth),
    );
    const nextScrollTop = Math.min(
      Math.max(0, worldY - wrapper.clientHeight / 2),
      Math.max(0, worldPixelHeight - wrapper.clientHeight),
    );

    wrapper.scrollTo({
      left: nextScrollLeft,
      top: nextScrollTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!locateRequest) {
      return;
    }

    const wrapper = worldWrapperRef.current;
    if (!wrapper) {
      return;
    }

    const worldX = locateRequest.x * TILE_SIZE + TILE_SIZE / 2;
    const worldY = locateRequest.y * TILE_SIZE + TILE_SIZE / 2;

    const nextScrollLeft = Math.min(
      Math.max(0, worldX - wrapper.clientWidth / 2),
      Math.max(0, worldPixelWidth - wrapper.clientWidth),
    );
    const nextScrollTop = Math.min(
      Math.max(0, worldY - wrapper.clientHeight / 2),
      Math.max(0, worldPixelHeight - wrapper.clientHeight),
    );

    wrapper.scrollTo({
      left: nextScrollLeft,
      top: nextScrollTop,
      behavior: "smooth",
    });
  }, [locateRequest, worldPixelHeight, worldPixelWidth]);

  return (
    <section className="world-grid-wrapper">
      <div ref={worldWrapperRef} className="world-grid-scroll-shell">
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
                ownerCivilizationId={
                  tile.owner ? ownerCivilizationLookup.get(tile.owner) : null
                }
                isSelected={selectedTileId === tile.id}
                isSettlementCandidate={highlightedTileIds.includes(tile.id)}
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
      </div>

      <Minimap
        tiles={tiles}
        cities={cities}
        players={players}
        selectedTileId={selectedTileId}
        gridWidth={gridWidth}
        gridHeight={gridHeight}
        worldPixelWidth={worldPixelWidth}
        worldPixelHeight={worldPixelHeight}
        viewport={viewport}
        onJumpTo={handleMinimapJump}
      />
    </section>
  );
}

export default WorldGrid;
