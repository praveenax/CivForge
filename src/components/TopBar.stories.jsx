import TopBar from "./TopBar";

export default {
  title: "UI/Top Bar",
  component: TopBar,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    turn: 12,
    player: {
      stockpile: {
        food: 18,
        production: 11,
        gold: 24,
        science: 9,
        culture: 6,
      },
    },
    researchProgress: {
      currentTech: {
        name: "Bronze Working",
      },
      progressPct: 64,
    },
    onToggleTechTree: () => {},
    onOpenList: () => {},
    isSimulationRunning: true,
    onToggleSimulation: () => {},
    onEndTurn: () => {},
  },
};
