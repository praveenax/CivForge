import CityProductionQueue from "./CityProductionQueue";
import { baseCity, frameStyle } from "./storybookMocks";

const tileLabelById = new Map([
  ["tile-wheat-1", "Tile 11,10"],
  ["tile-iron-1", "Tile 10,11"],
]);

export default {
  title: "UI/City Overlay/Production Queue",
  component: CityProductionQueue,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <CityProductionQueue {...args} />
    </div>
  ),
};

export const WithItems = {
  args: {
    queue: baseCity.queue,
    tileLabelById,
  },
};

export const Empty = {
  args: {
    queue: [],
    tileLabelById,
  },
};
