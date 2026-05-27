import QueueItem from "./QueueItem";
import { frameStyle } from "./storybookMocks";

const tileLabelById = new Map([["tile-wheat-1", "Tile 11,10"]]);

export default {
  title: "UI/City Overlay/Queue Item",
  component: QueueItem,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <ul className="queue-list" style={{ maxWidth: "420px" }}>
        <QueueItem {...args} />
      </ul>
    </div>
  ),
};

export const Building = {
  args: {
    item: {
      type: "building",
      id: "library",
      progress: 20,
    },
    tileLabelById,
  },
};

export const Improvement = {
  args: {
    item: {
      type: "improvement",
      id: "farm",
      tileId: "tile-wheat-1",
      progress: 12,
    },
    tileLabelById,
  },
};
