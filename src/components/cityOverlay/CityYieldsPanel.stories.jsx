import CityYieldsPanel from "./CityYieldsPanel";
import { baseCity, frameStyle } from "./storybookMocks";

export default {
  title: "UI/City Overlay/Yields Panel",
  component: CityYieldsPanel,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <div style={{ maxWidth: "420px" }}>
        <CityYieldsPanel {...args} />
      </div>
    </div>
  ),
};

export const Default = {
  args: {
    yields: baseCity.yields,
  },
};
