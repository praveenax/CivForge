import CityProductionActions from "./CityProductionActions";
import { frameStyle } from "./storybookMocks";

const availableBuildings = [
  { id: "library", name: "Library", cost: 70 },
  { id: "monument", name: "Monument", cost: 60 },
];

const availableUnits = [{ id: "spearman", name: "Spearman", cost: 55 }];

const availableImprovements = [
  {
    tileId: "tile-wheat-1",
    x: 11,
    y: 10,
    resourceId: "wheat",
    improvement: { id: "farm", name: "Farm", cost: 35 },
  },
];

const settlementImprovement = {
  id: "settlement",
  name: "Settlement",
  cost: 75,
  requiredTech: "agriculture",
};

const validSettlementTiles = [{ id: "tile-settle-a", x: 12, y: 10 }];

export default {
  title: "UI/City Overlay/Production Actions",
  component: CityProductionActions,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <CityProductionActions {...args} />
    </div>
  ),
};

export const Default = {
  args: {
    cityId: "city-aurora",
    availableBuildings,
    availableUnits,
    availableImprovements,
    settlementImprovement,
    isSettlementUnlocked: true,
    validSettlementTiles,
    onOpenSettlementPicker: () => {},
    onQueueProduction: () => {},
  },
};

export const LockedSettlement = {
  args: {
    cityId: "city-aurora",
    availableBuildings: [],
    availableUnits,
    availableImprovements: [],
    settlementImprovement,
    isSettlementUnlocked: false,
    validSettlementTiles: [],
    onOpenSettlementPicker: () => {},
    onQueueProduction: () => {},
  },
};
