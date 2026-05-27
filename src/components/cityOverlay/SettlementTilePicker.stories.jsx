import SettlementTilePicker from "./SettlementTilePicker";
import { baseTiles, frameStyle } from "./storybookMocks";

const validSettlementTiles = baseTiles.filter((tile) => tile.cityId === null);

export default {
  title: "UI/City Overlay/Settlement Tile Picker",
  component: SettlementTilePicker,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <SettlementTilePicker {...args} />
    </div>
  ),
};

export const Open = {
  args: {
    isOpen: true,
    validSettlementTiles,
    onSelectTile: () => {},
    onClose: () => {},
  },
};

export const Closed = {
  args: {
    isOpen: false,
    validSettlementTiles,
    onSelectTile: () => {},
    onClose: () => {},
  },
};
