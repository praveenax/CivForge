import CityDetailsPanel from "./CityDetailsPanel";
import { baseCity, frameStyle } from "./storybookMocks";

export default {
  title: "UI/City Overlay/Details Panel",
  component: CityDetailsPanel,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <div style={{ maxWidth: "520px" }}>
        <CityDetailsPanel {...args} />
      </div>
    </div>
  ),
};

export const Default = {
  args: {
    city: baseCity,
    foodNeededForNextPop: 30,
    growthProgressPct: 60,
    cultureNeededForNextLevel: 20,
    cultureProgressPct: 55,
    buildingNames: ["Granary"],
    unitNames: ["Scout"],
    improvementNames: ["Mine (Iron 10,11)"],
  },
};

export const EmptyLists = {
  args: {
    city: {
      ...baseCity,
      food: 2,
      culture: 1,
    },
    foodNeededForNextPop: 30,
    growthProgressPct: 7,
    cultureNeededForNextLevel: 20,
    cultureProgressPct: 5,
    buildingNames: [],
    unitNames: [],
    improvementNames: [],
  },
};
