import WorldGrid from "./WorldGrid";

const gridWidth = 14;
const gridHeight = 10;

const players = [
  { id: "player1", name: "Rome", civilizationId: "rome" },
  { id: "player2", name: "Greece", civilizationId: "greece" },
];

const terrainByRow = [
  "grassland",
  "forest",
  "hill",
  "grassland",
  "river",
  "grassland",
  "forest",
  "desert",
  "grassland",
  "mountain",
];

const tiles = Array.from({ length: gridWidth * gridHeight }, (_, index) => {
  const x = index % gridWidth;
  const y = Math.floor(index / gridWidth);

  let owner = null;
  if (x <= 4 && y <= 4) {
    owner = "player1";
  } else if (x >= 8 && y >= 5) {
    owner = "player2";
  }

  let resource = null;
  if (x === 3 && y === 2) {
    resource = "wheat";
  }
  if (x === 10 && y === 6) {
    resource = "iron";
  }
  if (x === 8 && y === 8) {
    resource = "gems";
  }

  let improvement = null;
  if (x === 3 && y === 2) {
    improvement = "farm";
  }
  if (x === 10 && y === 6) {
    improvement = "mine";
  }

  let cityId = null;
  if (x === 2 && y === 2) {
    cityId = "city-roma";
  }
  if (x === 9 && y === 7) {
    cityId = "city-sparta";
  }

  return {
    id: `tile-${x}-${y}`,
    x,
    y,
    terrain: terrainByRow[y] ?? "grassland",
    owner,
    resource,
    improvement,
    cityId,
  };
});

const cities = [
  { id: "city-roma", x: 2, y: 2, owner: "player1", name: "Roma" },
  { id: "city-sparta", x: 9, y: 7, owner: "player2", name: "Sparta" },
];

const frameStyle = {
  minHeight: "100vh",
  padding: "1rem",
  background: "linear-gradient(180deg, #0f171c 0%, #1a252c 100%)",
};

export default {
  title: "Screens/World Grid",
  component: WorldGrid,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <WorldGrid {...args} />
    </div>
  ),
};

export const Default = {
  args: {
    tiles,
    cities,
    players,
    locateRequest: null,
    selectedTileId: "tile-3-2",
    onSelectTile: () => {},
    onSelectCity: () => {},
  },
};

export const LocateCity = {
  args: {
    tiles,
    cities,
    players,
    locateRequest: { x: 9, y: 7 },
    selectedTileId: "tile-9-7",
    onSelectTile: () => {},
    onSelectCity: () => {},
  },
};
