import ResearchPromptModal from "./ResearchPromptModal";

export default {
  title: "UI/Research Prompt Modal",
  component: ResearchPromptModal,
  parameters: {
    layout: "fullscreen",
  },
};

export const Open = {
  args: {
    isOpen: true,
    isTechTreeOpen: false,
    onToggleTechTree: () => {},
    onClose: () => {},
  },
};

export const OpenWhenTechTreeAlreadyOpen = {
  args: {
    isOpen: true,
    isTechTreeOpen: true,
    onToggleTechTree: () => {},
    onClose: () => {},
  },
};

export const Closed = {
  args: {
    isOpen: false,
    isTechTreeOpen: false,
    onToggleTechTree: () => {},
    onClose: () => {},
  },
};
