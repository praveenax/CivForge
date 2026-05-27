import MenuScreen from "./MenuScreen";

export default {
  title: "Screens/Menu Screen",
  component: MenuScreen,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    hasSavedGame: false,
    menuError: "",
    onNewGame: () => {},
    onLoadGame: () => {},
  },
};

export const WithSavedGame = {
  args: {
    hasSavedGame: true,
    menuError: "",
    onNewGame: () => {},
    onLoadGame: () => {},
  },
};

export const WithLoadError = {
  args: {
    hasSavedGame: true,
    menuError: "Save file is corrupted. Start a new campaign.",
    onNewGame: () => {},
    onLoadGame: () => {},
  },
};
