import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgMusic from "./assets/bg.mp3";
import MenuScreen from "./components/MenuScreen";
import PlayingScreen from "./components/PlayingScreen";
import SetupScreen from "./components/SetupScreen";
import {
  CIVILIZATION_OPTIONS,
  GAME_SAVE_KEY,
  useGameStore,
} from "./game/store/gameStore";
import {
  GAME_SCREENS,
  setListOverlayOpen,
  setLocateRequest,
  setMenuError,
  setNoProductionCityId,
  setNoProductionPromptOpen,
  setResearchPromptOpen,
  setScreen,
  setSetup,
  setSimulationRunning,
  toggleSimulationRunning,
} from "./store/uiSlice";

function App() {
  const bgAudioRef = useRef(null);
  const dispatch = useDispatch();

  const screen = useSelector((state) => state.ui.screen);
  const setup = useSelector((state) => state.ui.setup);
  const menuError = useSelector((state) => state.ui.menuError);
  const isSimulationRunning = useSelector(
    (state) => state.ui.isSimulationRunning,
  );
  const isResearchPromptOpen = useSelector(
    (state) => state.ui.isResearchPromptOpen,
  );
  const isNoProductionPromptOpen = useSelector(
    (state) => state.ui.isNoProductionPromptOpen,
  );
  const noProductionCityId = useSelector(
    (state) => state.ui.noProductionCityId,
  );
  const isListOverlayOpen = useSelector((state) => state.ui.isListOverlayOpen);
  const locateRequest = useSelector((state) => state.ui.locateRequest);

  const turn = useGameStore((state) => state.turn);
  const tiles = useGameStore((state) => state.tiles);
  const cities = useGameStore((state) => state.cities);
  const players = useGameStore((state) => state.players);
  const selectedCityId = useGameStore((state) => state.selectedCityId);
  const selectedTileId = useGameStore((state) => state.selectedTileId);
  const isTechTreeOpen = useGameStore((state) => state.isTechTreeOpen);
  const pendingCityFounding = useGameStore(
    (state) => state.pendingCityFounding,
  );
  const gameSetup = useGameStore((state) => state.gameSetup);

  const selectCity = useGameStore((state) => state.selectCity);
  const closeCityOverlay = useGameStore((state) => state.closeCityOverlay);
  const selectTile = useGameStore((state) => state.selectTile);
  const queueProduction = useGameStore((state) => state.queueProduction);
  const setResearch = useGameStore((state) => state.setResearch);
  const toggleTechTree = useGameStore((state) => state.toggleTechTree);
  const endTurn = useGameStore((state) => state.endTurn);
  const completeCityFounding = useGameStore(
    (state) => state.completeCityFounding,
  );
  const dismissCityFounding = useGameStore(
    (state) => state.dismissCityFounding,
  );
  const startNewGame = useGameStore((state) => state.startNewGame);
  const loadGameSnapshot = useGameStore((state) => state.loadGameSnapshot);
  const exportGameSnapshot = useGameStore((state) => state.exportGameSnapshot);
  const getResearchProgress = useGameStore(
    (state) => state.getResearchProgress,
  );

  const player = players.find((entry) => entry.id === "player1") ?? null;
  const selectedCity =
    cities.find((city) => city.id === selectedCityId) ?? null;
  const noProductionCity =
    cities.find((city) => city.id === noProductionCityId) ?? null;
  const selectedTile = tiles.find((tile) => tile.id === selectedTileId) ?? null;
  const researchProgress = getResearchProgress();
  const hasSavedGame = (() => {
    try {
      return Boolean(localStorage.getItem(GAME_SAVE_KEY));
    } catch {
      return false;
    }
  })();

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.3;
    bgAudioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      bgAudioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = bgAudioRef.current;
    if (!audio) {
      return;
    }

    audio.loop = true;
    audio.volume = 0;

    if (screen === GAME_SCREENS.PLAYING) {
      const maybePromise = audio.play();
      if (maybePromise?.catch) {
        maybePromise.catch(() => {
          // Ignore autoplay restrictions until user interacts.
        });
      }
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  }, [screen]);

  useEffect(() => {
    if (!isSimulationRunning || screen !== GAME_SCREENS.PLAYING) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      endTurn();
    }, 2000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [endTurn, isSimulationRunning, screen]);

  useEffect(() => {
    if (screen !== GAME_SCREENS.PLAYING || !isSimulationRunning) {
      return;
    }

    if (researchProgress.currentTech) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      dispatch(setSimulationRunning(false));
      dispatch(setResearchPromptOpen(true));
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [dispatch, isSimulationRunning, researchProgress.currentTech, screen]);

  useEffect(() => {
    if (screen !== GAME_SCREENS.PLAYING || !isSimulationRunning || !player) {
      return;
    }

    const blockedCity = cities.find((city) => {
      if (city.owner !== player.id) {
        return false;
      }

      return (city.queue ?? []).length === 0;
    });

    if (!blockedCity) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      dispatch(setSimulationRunning(false));
      dispatch(setNoProductionCityId(blockedCity.id));
      dispatch(setNoProductionPromptOpen(true));
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [cities, dispatch, isSimulationRunning, player, screen]);

  useEffect(() => {
    if (
      screen !== GAME_SCREENS.PLAYING ||
      !pendingCityFounding ||
      !isSimulationRunning
    ) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      dispatch(setSimulationRunning(false));
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [dispatch, isSimulationRunning, pendingCityFounding, screen]);

  useEffect(() => {
    if (!researchProgress.currentTech) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      dispatch(setResearchPromptOpen(false));
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [dispatch, researchProgress.currentTech]);

  useEffect(() => {
    if (screen !== GAME_SCREENS.PLAYING) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key !== "Enter" || event.repeat) {
        return;
      }

      const target = event.target;
      const tagName = target?.tagName?.toLowerCase();
      const isTypingField =
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        target?.isContentEditable;

      if (isTypingField) {
        return;
      }

      event.preventDefault();
      endTurn();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [endTurn, screen]);

  useEffect(() => {
    if (screen !== GAME_SCREENS.PLAYING) {
      return;
    }

    try {
      const snapshot = exportGameSnapshot();
      localStorage.setItem(GAME_SAVE_KEY, JSON.stringify(snapshot));
    } catch {
      // Ignore storage errors so gameplay remains uninterrupted.
    }
  }, [
    cities,
    exportGameSnapshot,
    gameSetup,
    isTechTreeOpen,
    players,
    screen,
    selectedCityId,
    selectedTileId,
    tiles,
    turn,
  ]);

  const handleNewGame = () => {
    dispatch(setMenuError(""));
    dispatch(setSimulationRunning(false));
    dispatch(setNoProductionPromptOpen(false));
    dispatch(setNoProductionCityId(null));
    dismissCityFounding();
    dispatch(setScreen(GAME_SCREENS.SETUP));
  };

  const handleStartGame = () => {
    startNewGame(setup);
    dispatch(setMenuError(""));
    dispatch(setSimulationRunning(false));
    dispatch(setResearchPromptOpen(false));
    dispatch(setNoProductionPromptOpen(false));
    dispatch(setNoProductionCityId(null));
    dismissCityFounding();
    dispatch(setListOverlayOpen(false));
    dispatch(setScreen(GAME_SCREENS.PLAYING));
  };

  const handleLoadGame = () => {
    dispatch(setMenuError(""));

    try {
      const raw = localStorage.getItem(GAME_SAVE_KEY);
      if (!raw) {
        dispatch(setMenuError("No saved game found. Start a new game first."));
        return;
      }

      const parsed = JSON.parse(raw);
      const didLoad = loadGameSnapshot(parsed);

      if (!didLoad) {
        dispatch(
          setMenuError("Saved game data is invalid. Please start a new game."),
        );
        return;
      }

      dispatch(setSimulationRunning(false));
      dispatch(setResearchPromptOpen(false));
      dispatch(setNoProductionPromptOpen(false));
      dispatch(setNoProductionCityId(null));
      dismissCityFounding();
      dispatch(setListOverlayOpen(false));
      dispatch(setScreen(GAME_SCREENS.PLAYING));
    } catch {
      dispatch(
        setMenuError("Unable to load save data. Please start a new game."),
      );
    }
  };

  const handleLocateCity = (city) => {
    const tile = tiles.find(
      (entry) => entry.x === city.x && entry.y === city.y,
    );

    if (tile) {
      selectTile(tile.id);
    }

    dispatch(
      setLocateRequest({
        x: city.x,
        y: city.y,
        cityId: city.id,
        requestId: Date.now(),
      }),
    );
    dispatch(setListOverlayOpen(false));
  };

  const handleLocateNoProductionCity = () => {
    if (!noProductionCity) {
      return;
    }

    selectCity(noProductionCity.id);
    handleLocateCity(noProductionCity);
    dispatch(setNoProductionPromptOpen(false));
  };

  const handleSetupChange = (nextSetupOrUpdater) => {
    const nextSetup =
      typeof nextSetupOrUpdater === "function"
        ? nextSetupOrUpdater(setup)
        : nextSetupOrUpdater;
    dispatch(setSetup(nextSetup));
  };

  const handleConfirmSettlementName = (name) => {
    completeCityFounding(name);
  };

  if (screen === GAME_SCREENS.MENU) {
    return (
      <MenuScreen
        hasSavedGame={hasSavedGame}
        menuError={menuError}
        onNewGame={handleNewGame}
        onLoadGame={handleLoadGame}
      />
    );
  }

  if (screen === GAME_SCREENS.SETUP) {
    return (
      <SetupScreen
        setup={setup}
        civilizationOptions={CIVILIZATION_OPTIONS}
        onSetupChange={handleSetupChange}
        onBack={() => dispatch(setScreen(GAME_SCREENS.MENU))}
        onStartGame={handleStartGame}
      />
    );
  }

  return (
    <PlayingScreen
      turn={turn}
      player={player}
      researchProgress={researchProgress}
      onToggleTechTree={toggleTechTree}
      onOpenList={() => dispatch(setListOverlayOpen(true))}
      isSimulationRunning={isSimulationRunning}
      onToggleSimulation={() => dispatch(toggleSimulationRunning())}
      onEndTurn={endTurn}
      tiles={tiles}
      cities={cities}
      players={players}
      locateRequest={locateRequest}
      selectedTileId={selectedTileId}
      onSelectTile={selectTile}
      onSelectCity={selectCity}
      selectedTile={selectedTile}
      selectedCity={selectedCity}
      onCloseCityOverlay={closeCityOverlay}
      onQueueProduction={queueProduction}
      isTechTreeOpen={isTechTreeOpen}
      onSetResearch={setResearch}
      isResearchPromptOpen={isResearchPromptOpen}
      onCloseResearchPrompt={() => dispatch(setResearchPromptOpen(false))}
      isNoProductionPromptOpen={isNoProductionPromptOpen}
      noProductionCity={noProductionCity}
      onLocateNoProductionCity={handleLocateNoProductionCity}
      onCloseNoProductionPrompt={() =>
        dispatch(setNoProductionPromptOpen(false))
      }
      isSettlementNamingOpen={Boolean(pendingCityFounding)}
      onConfirmSettlementName={handleConfirmSettlementName}
      isListOverlayOpen={isListOverlayOpen}
      onCloseListOverlay={() => dispatch(setListOverlayOpen(false))}
      onLocateCity={handleLocateCity}
    />
  );
}

export default App;
