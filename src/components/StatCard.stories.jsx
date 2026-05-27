import { faCoins } from "@fortawesome/free-solid-svg-icons";
import StatCard from "./StatCard";

const frameStyle = {
  minHeight: "100vh",
  padding: "1.25rem",
  background: "linear-gradient(180deg, #0f171c 0%, #1a252c 100%)",
};

export default {
  title: "UI/Stat Card",
  component: StatCard,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <div style={{ width: "min(240px, 100%)" }}>
        <StatCard {...args} />
      </div>
    </div>
  ),
};

export const Default = {
  args: {
    icon: faCoins,
    label: "Gold",
    value: 24,
  },
};

export const WithoutIcon = {
  args: {
    icon: null,
    label: "Turns",
    value: 12,
  },
};
