import { useEffect, useMemo, useRef } from "react";

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

const CIV_BORDER_COLORS = {
  rome: "#d64444",
  india: "#df8b36",
  egypt: "#c6a337",
  greece: "#467cd6",
  china: "#2ca880",
  persia: "#9460c3",
  aztec: "#329b82",
  neutral: "#b5bdc2",
};

function Minimap({
  tiles,
  cities,
  players,
  selectedTileId,
  gridWidth,
  gridHeight,
  worldPixelWidth,
  worldPixelHeight,
  viewport,
  onJumpTo,
}) {
  const canvasRef = useRef(null);

  const ownerCivilizationLookup = useMemo(() => {
    const map = new Map();
    players.forEach((player) => {
      map.set(player.id, player.civilizationId ?? "neutral");
    });
    return map;
  }, [players]);

  useEffect(() => {
    const canvas = canvasRef.current;
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

    tiles.forEach((tile) => {
      if (!tile.owner) {
        return;
      }

      const civilizationId =
        ownerCivilizationLookup.get(tile.owner) ?? "neutral";
      context.fillStyle =
        CIV_BORDER_COLORS[civilizationId] ?? CIV_BORDER_COLORS.neutral;
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
    ownerCivilizationLookup,
  ]);

  const handleClick = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const bounds = canvas.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    onJumpTo({
      worldX: relativeX * worldPixelWidth,
      worldY: relativeY * worldPixelHeight,
    });
  };

  return (
    <aside className="minimap-shell" aria-label="World minimap">
      <div className="minimap-header">World Minimap</div>
      <canvas
        ref={canvasRef}
        className="minimap-canvas"
        onClick={handleClick}
        title="Click to jump to a world region"
      />
    </aside>
  );
}

export default Minimap;
