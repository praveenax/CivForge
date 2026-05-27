import { useState } from "react";
import SetupScreen from "./SetupScreen";

const civilizationOptions = [
  { id: "rome", name: "Rome" },
  { id: "india", name: "India" },
  { id: "egypt", name: "Egypt" },
  { id: "greece", name: "Greece" },
  { id: "china", name: "China" },
  { id: "persia", name: "Persia" },
  { id: "aztec", name: "Aztec" },
];

function StatefulSetupScreen(args) {
  const [setup, setSetup] = useState(args.setup);

  return <SetupScreen {...args} setup={setup} onSetupChange={setSetup} />;
}

export default {
  title: "Screens/Setup Screen",
  component: SetupScreen,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => <StatefulSetupScreen {...args} />,
};

export const Default = {
  args: {
    setup: {
      civilizationId: "rome",
      opponentCount: 2,
    },
    civilizationOptions,
    onSetupChange: () => {},
    onBack: () => {},
    onStartGame: () => {},
  },
};

export const MaximumOpponents = {
  args: {
    setup: {
      civilizationId: "china",
      opponentCount: 7,
    },
    civilizationOptions,
    onSetupChange: () => {},
    onBack: () => {},
    onStartGame: () => {},
  },
};
