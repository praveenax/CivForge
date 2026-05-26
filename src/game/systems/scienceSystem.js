import { TECHS } from "../data/techs";

const canResearch = (player, techId) => {
  const tech = TECHS[techId];

  if (!tech || player.unlockedTechs.includes(techId)) {
    return false;
  }

  return tech.requires.every((dependency) =>
    player.unlockedTechs.includes(dependency),
  );
};

export const setResearchTarget = (player, techId) => {
  if (!canResearch(player, techId)) {
    return player;
  }

  return {
    ...player,
    currentResearch: techId,
    scienceProgress: 0,
  };
};

export const processScience = (player, sciencePerTurn) => {
  if (!player.currentResearch) {
    return player;
  }

  const tech = TECHS[player.currentResearch];
  const nextProgress = player.scienceProgress + sciencePerTurn;

  if (!tech || nextProgress < tech.cost) {
    return {
      ...player,
      scienceProgress: nextProgress,
    };
  }

  return {
    ...player,
    unlockedTechs: [...player.unlockedTechs, tech.id],
    currentResearch: null,
    scienceProgress: 0,
  };
};

export const getAvailableTechs = (player) =>
  Object.values(TECHS).filter((tech) => canResearch(player, tech.id));
