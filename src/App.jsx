import { useEffect, useState } from "react";
import MenuScreen from "./components/MenuScreen";
import PlayingScreen from "./components/PlayingScreen";
import SetupScreen from "./components/SetupScreen";
import {
  CIVILIZATION_OPTIONS,
  GAME_SAVE_KEY,
  useGameStore,
} from "./game/store/gameStore";

const GAME_SCREENS = {
  MENU: "menu",
  SETUP: "setup",
  PLAYING: "playing",
};

const DEFAULT_SETUP = {
  civilizationId: CIVILIZATION_OPTIONS[0]?.id ?? "rome",
  opponentCount: 2,
};

function App() {
  const [screen, setScreen] = useState(GAME_SCREENS.MENU);
  const [setup, setSetup] = useState(DEFAULT_SETUP);
  const [menuError, setMenuError] = useState("");
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [isResearchPromptOpen, setIsResearchPromptOpen] = useState(false);
  const [isNoProductionPromptOpen, setIsNoProductionPromptOpen] =
    useState(false);
  const [noProductionCityId, setNoProductionCityId] = useState(null);
  const [isListOverlayOpen, setIsListOverlayOpen] = useState(false);
  const [locateRequest, setLocateRequest] = useState(null);

  const turn = useGameStore((state) => state.turn);
  const tiles = useGameStore((state) => state.tiles);
  const cities = useGameStore((state) => state.cities);
  const players = useGameStore((state) => state.players);
  const selectedCityId = useGameStore((state) => state.selectedCityId);
  const selectedTileId = useGameStore((state) => state.selectedTileId);
  const isTechTreeOpen = useGameStore((state) => state.isTechTreeOpen);
  const gameSetup = useGameStore((state) => state.gameSetup);

  const selectCity = useGameStore((state) => state.selectCity);
  const closeCityOverlay = useGameStore((state) => state.closeCityOverlay);
  const selectTile = useGameStore((state) => state.selectTile);
  const queueProduction = useGameStore((state) => state.queueProduction);
  const setResearch = useGameStore((state) => state.setResearch);
  const toggleTechTree = useGameStore((state) => state.toggleTechTree);
  const endTurn = useGameStore((state) => state.endTurn);
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
      setIsSimulationRunning(false);
      setIsResearchPromptOpen(true);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isSimulationRunning, researchProgress.currentTech, screen]);

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
      setIsSimulationRunning(false);
      setNoProductionCityId(blockedCity.id);
      setIsNoProductionPromptOpen(true);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [cities, isSimulationRunning, player, screen]);

  useEffect(() => {
    if (!researchProgress.currentTech) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsResearchPromptOpen(false);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [researchProgress.currentTech]);

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
    setMenuError("");
    setIsSimulationRunning(false);
    setIsNoProductionPromptOpen(false);
    setNoProductionCityId(null);
    setScreen(GAME_SCREENS.SETUP);
  };

  const handleStartGame = () => {
    startNewGame(setup);
    setMenuError("");
    setIsSimulationRunning(false);
    setIsResearchPromptOpen(false);
    setIsNoProductionPromptOpen(false);
    setNoProductionCityId(null);
    setIsListOverlayOpen(false);
    setScreen(GAME_SCREENS.PLAYING);
  };

  const handleLoadGame = () => {
    setMenuError("");

    try {
      const raw = localStorage.getItem(GAME_SAVE_KEY);
      if (!raw) {
        setMenuError("No saved game found. Start a new game first.");
        return;
      }

      const parsed = JSON.parse(raw);
      const didLoad = loadGameSnapshot(parsed);

      if (!didLoad) {
        setMenuError("Saved game data is invalid. Please start a new game.");
        return;
      }

      setIsSimulationRunning(false);
      setIsResearchPromptOpen(false);
      setIsNoProductionPromptOpen(false);
      setNoProductionCityId(null);
      setIsListOverlayOpen(false);
      setScreen(GAME_SCREENS.PLAYING);
    } catch {
      setMenuError("Unable to load save data. Please start a new game.");
    }
  };

  const handleLocateCity = (city) => {
    const tile = tiles.find(
      (entry) => entry.x === city.x && entry.y === city.y,
    );

    if (tile) {
      selectTile(tile.id);
    }

    setLocateRequest({
      x: city.x,
      y: city.y,
      cityId: city.id,
      requestId: Date.now(),
    });
    setIsListOverlayOpen(false);
  };

  const handleLocateNoProductionCity = () => {
    if (!noProductionCity) {
      return;
    }

    selectCity(noProductionCity.id);
    handleLocateCity(noProductionCity);
    setIsNoProductionPromptOpen(false);
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
        onSetupChange={setSetup}
        onBack={() => setScreen(GAME_SCREENS.MENU)}
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
      onOpenList={() => setIsListOverlayOpen(true)}
      isSimulationRunning={isSimulationRunning}
      onToggleSimulation={() => setIsSimulationRunning((previous) => !previous)}
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
      onCloseResearchPrompt={() => setIsResearchPromptOpen(false)}
      isNoProductionPromptOpen={isNoProductionPromptOpen}
      noProductionCity={noProductionCity}
      onLocateNoProductionCity={handleLocateNoProductionCity}
      onCloseNoProductionPrompt={() => setIsNoProductionPromptOpen(false)}
      isListOverlayOpen={isListOverlayOpen}
      onCloseListOverlay={() => setIsListOverlayOpen(false)}
      onLocateCity={handleLocateCity}
    />
  );
}

export default App;
