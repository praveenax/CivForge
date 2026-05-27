import { createSlice } from "@reduxjs/toolkit";
import { CIVILIZATION_OPTIONS } from "../game/store/gameStore.constants";

export const GAME_SCREENS = {
  MENU: "menu",
  SETUP: "setup",
  PLAYING: "playing",
};

export const DEFAULT_SETUP = {
  civilizationId: CIVILIZATION_OPTIONS[0]?.id ?? "rome",
  opponentCount: 2,
};

const initialState = {
  screen: GAME_SCREENS.MENU,
  setup: DEFAULT_SETUP,
  menuError: "",
  isSimulationRunning: false,
  isResearchPromptOpen: false,
  isNoProductionPromptOpen: false,
  noProductionCityId: null,
  isListOverlayOpen: false,
  locateRequest: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
    setSetup: (state, action) => {
      state.setup = action.payload;
    },
    setMenuError: (state, action) => {
      state.menuError = action.payload;
    },
    setSimulationRunning: (state, action) => {
      state.isSimulationRunning = action.payload;
    },
    toggleSimulationRunning: (state) => {
      state.isSimulationRunning = !state.isSimulationRunning;
    },
    setResearchPromptOpen: (state, action) => {
      state.isResearchPromptOpen = action.payload;
    },
    setNoProductionPromptOpen: (state, action) => {
      state.isNoProductionPromptOpen = action.payload;
    },
    setNoProductionCityId: (state, action) => {
      state.noProductionCityId = action.payload;
    },
    setListOverlayOpen: (state, action) => {
      state.isListOverlayOpen = action.payload;
    },
    setLocateRequest: (state, action) => {
      state.locateRequest = action.payload;
    },
  },
});

export const {
  setScreen,
  setSetup,
  setMenuError,
  setSimulationRunning,
  toggleSimulationRunning,
  setResearchPromptOpen,
  setNoProductionPromptOpen,
  setNoProductionCityId,
  setListOverlayOpen,
  setLocateRequest,
} = uiSlice.actions;

export default uiSlice.reducer;
