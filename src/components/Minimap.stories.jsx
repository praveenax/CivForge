import Minimap from "./Minimap";

const gridWidth = 12;
const gridHeight = 8;
const worldPixelWidth = gridWidth * 80;
const worldPixelHeight = gridHeight * 80;

const players = [
  {
    id: "player1",
    name: "Roma",
    civilizationId: "rome",
  },
  {
    id: "player2",
    name: "Nile",
    civilizationId: "egypt",
  },
];

const tiles = Array.from({ length: gridWidth * gridHeight }, (_, index) => {
  const x = index % gridWidth;
  const y = Math.floor(index / gridWidth);
  const isWaterBand = y === 3 || y === 4;

  let owner = null;
  if (x <= 4 && y <= 2) {
    owner = "player1";
  } else if (x >= 8 && y >= 5) {
    owner = "player2";
  }

  return {
    id: `tile-${x}-${y}`,
    x,
    y,
    terrain: isWaterBand ? "water" : "plains",
    owner,
  };
});

const cities = [
  { id: "city-roma", name: "Roma", x: 2, y: 1, owner: "player1" },
  { id: "city-memphis", name: "Memphis", x: 9, y: 6, owner: "player2" },
];

export default {
  title: "UI/Minimap",
  component: Minimap,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={{ minHeight: "100vh", padding: "1.25rem" }}>
      <Minimap {...args} />
    </div>
  ),
};

export const Default = {
  args: {
    tiles,
    cities,
    players,
    selectedTileId: "tile-2-1",
    gridWidth,
    gridHeight,
    worldPixelWidth,
    worldPixelHeight,
    viewport: {
      left: 80,
      top: 80,
      width: 320,
      height: 240,
    },
    onJumpTo: () => {},
  },
};

export const ShiftedViewport = {
  args: {
    tiles,
    cities,
    players,
    selectedTileId: "tile-9-6",
    gridWidth,
    gridHeight,
    worldPixelWidth,
    worldPixelHeight,
    viewport: {
      left: 480,
      top: 320,
      width: 320,
      height: 240,
    },
    onJumpTo: () => {},
  },
};
