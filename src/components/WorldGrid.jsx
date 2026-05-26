import { useEffect, useMemo, useRef, useState } from "react";
import Tile from "./Tile";

const TILE_SIZE = 80;
const MINIMAP_CELL_SIZE = 4;
const MINIMAP_LAND_COLOR = "#2ea043";
const MINIMAP_WATER_COLOR = "#2f81f7";
const MINIMAP_CITY_COLOR = "#111111";
const WATER_TERRAINS = new Set([
  "river",
  "water",
  "ocean",
  "coast",
  "lake",
  "sea",
]);

function WorldGrid({
  tiles,
  cities,
  players,
  selectedTileId,
  onSelectTile,
  onSelectCity,
}) {
  const worldWrapperRef = useRef(null);
  const minimapCanvasRef = useRef(null);

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

  useEffect(() => {
    const canvas = minimapCanvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    canvas.width = gridWidth * MINIMAP_CELL_SIZE;
    canvas.height = gridHeight * MINIMAP_CELL_SIZE;

    context.clearRect(0, 0, canvas.width, canvas.height);

    tiles.forEach((tile) => {
      context.fillStyle = WATER_TERRAINS.has(tile.terrain)
        ? MINIMAP_WATER_COLOR
        : MINIMAP_LAND_COLOR;
      context.fillRect(
        tile.x * MINIMAP_CELL_SIZE,
        tile.y * MINIMAP_CELL_SIZE,
        MINIMAP_CELL_SIZE,
        MINIMAP_CELL_SIZE,
      );
    });

    cities.forEach((city) => {
      context.fillStyle = MINIMAP_CITY_COLOR;
      context.fillRect(
        city.x * MINIMAP_CELL_SIZE,
        city.y * MINIMAP_CELL_SIZE,
        MINIMAP_CELL_SIZE,
        MINIMAP_CELL_SIZE,
      );
    });

    const selectedTile = tiles.find((tile) => tile.id === selectedTileId);
    if (selectedTile) {
      context.strokeStyle = "#f0c982";
      context.lineWidth = 1;
      context.strokeRect(
        selectedTile.x * MINIMAP_CELL_SIZE + 0.5,
        selectedTile.y * MINIMAP_CELL_SIZE + 0.5,
        MINIMAP_CELL_SIZE - 1,
        MINIMAP_CELL_SIZE - 1,
      );
    }

    const viewportX = (viewport.left / worldPixelWidth) * canvas.width;
    const viewportY = (viewport.top / worldPixelHeight) * canvas.height;
    const viewportWidth = (viewport.width / worldPixelWidth) * canvas.width;
    const viewportHeight = (viewport.height / worldPixelHeight) * canvas.height;

    context.strokeStyle = "rgba(242, 219, 157, 0.95)";
    context.fillStyle = "rgba(242, 219, 157, 0.22)";
    context.lineWidth = 1;
    context.fillRect(viewportX, viewportY, viewportWidth, viewportHeight);
    context.strokeRect(
      viewportX + 0.5,
      viewportY + 0.5,
      Math.max(0, viewportWidth - 1),
      Math.max(0, viewportHeight - 1),
    );
  }, [
    cities,
    gridHeight,
    gridWidth,
    selectedTileId,
    tiles,
    viewport,
    worldPixelHeight,
    worldPixelWidth,
  ]);

  const handleMinimapClick = (event) => {
    const wrapper = worldWrapperRef.current;
    const canvas = minimapCanvasRef.current;
    if (!wrapper || !canvas) {
      return;
    }

    const bounds = canvas.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    const targetWorldX = relativeX * worldPixelWidth;
    const targetWorldY = relativeY * worldPixelHeight;

    const nextScrollLeft = Math.min(
      Math.max(0, targetWorldX - wrapper.clientWidth / 2),
      Math.max(0, worldPixelWidth - wrapper.clientWidth),
    );
    const nextScrollTop = Math.min(
      Math.max(0, targetWorldY - wrapper.clientHeight / 2),
      Math.max(0, worldPixelHeight - wrapper.clientHeight),
    );

    wrapper.scrollTo({
      left: nextScrollLeft,
      top: nextScrollTop,
      behavior: "smooth",
    });
  };

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

      <aside className="minimap-shell" aria-label="World minimap">
        <div className="minimap-header">World Minimap</div>
        <canvas
          ref={minimapCanvasRef}
          className="minimap-canvas"
          onClick={handleMinimapClick}
          title="Click to jump to a world region"
        />
      </aside>
    </section>
  );
}

export default WorldGrid;
