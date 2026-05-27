import Tile from "./Tile";

const frameStyle = {
  minHeight: "100vh",
  padding: "1.25rem",
  background: "linear-gradient(180deg, #0f171c 0%, #1a252c 100%)",
  display: "grid",
  alignContent: "start",
  justifyContent: "start",
  gap: "0.75rem",
};

const baseTile = {
  id: "tile-4-6",
  x: 4,
  y: 6,
  terrain: "grassland",
  owner: null,
  resource: null,
  improvement: null,
};

export default {
  title: "UI/Tile",
  component: Tile,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <Tile {...args} />
    </div>
  ),
};

export const BasicGrassland = {
  args: {
    tile: baseTile,
    ownerCivilizationId: null,
    isSelected: false,
    hasCity: false,
    onClick: () => {},
  },
};

export const SelectedWithResource = {
  args: {
    tile: {
      ...baseTile,
      id: "tile-8-2",
      x: 8,
      y: 2,
      terrain: "river",
      resource: "wheat",
    },
    ownerCivilizationId: null,
    isSelected: true,
    hasCity: false,
    onClick: () => {},
  },
};

export const OwnedCityTile = {
  args: {
    tile: {
      ...baseTile,
      id: "tile-2-1",
      x: 2,
      y: 1,
      terrain: "forest",
      owner: "player1",
    },
    ownerCivilizationId: "rome",
    isSelected: false,
    hasCity: true,
    onClick: () => {},
  },
};

export const OwnedImprovedTile = {
  args: {
    tile: {
      ...baseTile,
      id: "tile-6-3",
      x: 6,
      y: 3,
      terrain: "hill",
      owner: "player2",
      resource: "iron",
      improvement: "mine",
    },
    ownerCivilizationId: "greece",
    isSelected: false,
    hasCity: false,
    onClick: () => {},
  },
};
