import TileInfoPanel from "./TileInfoPanel";

const frameStyle = {
  minHeight: "100vh",
  padding: "1.25rem",
  background: "linear-gradient(180deg, #eff3f9 0%, #e2e9f4 100%)",
};

export default {
  title: "UI/Tile Info Panel",
  component: TileInfoPanel,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <div style={{ width: "min(360px, 100%)" }}>
        <TileInfoPanel {...args} />
      </div>
    </div>
  ),
};

export const EmptyState = {
  args: {
    tile: null,
  },
};

export const UnclaimedTile = {
  args: {
    tile: {
      id: "tile-3-5",
      x: 3,
      y: 5,
      terrain: "grassland",
      resource: null,
      owner: null,
      cityId: null,
    },
  },
};

export const OwnedResourceTile = {
  args: {
    tile: {
      id: "tile-7-4",
      x: 7,
      y: 4,
      terrain: "river",
      resource: "gems",
      owner: "player1",
      cityId: "city-aurora",
    },
  },
};
