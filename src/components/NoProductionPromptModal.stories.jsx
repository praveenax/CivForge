import NoProductionPromptModal from "./NoProductionPromptModal";

const city = {
  id: "city-aurora",
  name: "Aurora",
};

export default {
  title: "UI/No Production Prompt Modal",
  component: NoProductionPromptModal,
  parameters: {
    layout: "fullscreen",
  },
};

export const Open = {
  args: {
    isOpen: true,
    city,
    onLocate: () => {},
    onClose: () => {},
  },
};

export const Closed = {
  args: {
    isOpen: false,
    city,
    onLocate: () => {},
    onClose: () => {},
  },
};

export const MissingCity = {
  args: {
    isOpen: true,
    city: null,
    onLocate: () => {},
    onClose: () => {},
  },
};
