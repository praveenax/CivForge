import CityOverviewKpis from "./CityOverviewKpis";
import { frameStyle } from "./storybookMocks";

export default {
  title: "UI/City Overlay/Overview KPIs",
  component: CityOverviewKpis,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <CityOverviewKpis {...args} />
    </div>
  ),
};

export const Default = {
  args: {
    population: 6,
    cultureLevel: 2,
    netFood: 3,
    foodConsumed: 6,
  },
};

export const NegativeFood = {
  args: {
    population: 10,
    cultureLevel: 4,
    netFood: -2,
    foodConsumed: 12,
  },
};
