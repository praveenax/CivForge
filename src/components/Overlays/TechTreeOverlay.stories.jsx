import TechTreeOverlay from "./TechTreeOverlay";

const playerEarlyGame = {
  id: "player1",
  name: "Rome",
  unlockedTechs: ["agriculture", "mining"],
  currentResearch: "writing",
};

const playerMidGame = {
  id: "player1",
  name: "Rome",
  unlockedTechs: [
    "agriculture",
    "mining",
    "pottery",
    "writing",
    "bronzeWorking",
    "masonry",
    "theWheel",
    "mathematics",
  ],
  currentResearch: "engineering",
};

export default {
  title: "UI/Tech Tree Overlay",
  component: TechTreeOverlay,
  parameters: {
    layout: "fullscreen",
  },
};

export const EarlyGameResearch = {
  args: {
    player: playerEarlyGame,
    onClose: () => {},
    onSelectTech: () => {},
  },
};

export const MidGameResearch = {
  args: {
    player: playerMidGame,
    onClose: () => {},
    onSelectTech: () => {},
  },
};
