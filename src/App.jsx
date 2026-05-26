import { useEffect, useMemo, useState } from "react";
import CityOverlay from "./components/CityOverlay";
import ListOverlay from "./components/ListOverlay";
import ResearchPromptModal from "./components/ResearchPromptModal";
import TechTreeOverlay from "./components/TechTreeOverlay";
import TileInfoPanel from "./components/TileInfoPanel";
import TopBar from "./components/TopBar";
import WorldGrid from "./components/WorldGrid";
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
  const [isListOverlayOpen, setIsListOverlayOpen] = useState(false);

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
  const selectedTile = tiles.find((tile) => tile.id === selectedTileId) ?? null;
  const researchProgress = getResearchProgress();
  const hasSavedGame = useMemo(() => {
    try {
      return Boolean(localStorage.getItem(GAME_SAVE_KEY));
    } catch {
      return false;
    }
  }, [screen]);

  useEffect(() => {
    if (!isSimulationRunning || screen !== GAME_SCREENS.PLAYING) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      endTurn();
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [endTurn, isSimulationRunning, screen]);

  useEffect(() => {
    if (screen === GAME_SCREENS.PLAYING) {
      return;
    }

    setIsSimulationRunning(false);
    setIsResearchPromptOpen(false);
    setIsListOverlayOpen(false);
  }, [screen]);

  useEffect(() => {
    if (screen !== GAME_SCREENS.PLAYING || !isSimulationRunning) {
      return;
    }

    if (researchProgress.currentTech) {
      return;
    }

    setIsSimulationRunning(false);
    setIsResearchPromptOpen(true);
  }, [isSimulationRunning, researchProgress.currentTech, screen]);

  useEffect(() => {
    if (!researchProgress.currentTech) {
      return;
    }

    setIsResearchPromptOpen(false);
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
    setScreen(GAME_SCREENS.SETUP);
  };

  const handleStartGame = () => {
    startNewGame(setup);
    setMenuError("");
    setIsSimulationRunning(false);
    setIsResearchPromptOpen(false);
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
      setIsListOverlayOpen(false);
      setScreen(GAME_SCREENS.PLAYING);
    } catch {
      setMenuError("Unable to load save data. Please start a new game.");
    }
  };

  if (screen === GAME_SCREENS.MENU) {
    return (
      <div className="app-shell menu-shell">
        <section className="menu-card">
          <h1>CivForge</h1>
          <p className="menu-subtitle">
            Forge your empire from the first dawn.
          </p>
          <div className="menu-actions">
            <button type="button" onClick={handleNewGame}>
              New Game
            </button>
            <button
              type="button"
              onClick={handleLoadGame}
              disabled={!hasSavedGame}
            >
              Load Game
            </button>
          </div>
          {!hasSavedGame ? (
            <p className="menu-hint">
              Load Game unlocks after your first auto-save.
            </p>
          ) : null}
          {menuError ? <p className="menu-error">{menuError}</p> : null}
        </section>
      </div>
    );
  }

  if (screen === GAME_SCREENS.SETUP) {
    return (
      <div className="app-shell menu-shell">
        <section className="menu-card setup-card">
          <h1>New Game Setup</h1>
          <label className="menu-field" htmlFor="civilization-select">
            <span>Civilization</span>
            <select
              id="civilization-select"
              value={setup.civilizationId}
              onChange={(event) =>
                setSetup((previous) => ({
                  ...previous,
                  civilizationId: event.target.value,
                }))
              }
            >
              {CIVILIZATION_OPTIONS.map((civilization) => (
                <option key={civilization.id} value={civilization.id}>
                  {civilization.name}
                </option>
              ))}
            </select>
          </label>

          <label className="menu-field" htmlFor="opponent-count-select">
            <span>Opponents</span>
            <select
              id="opponent-count-select"
              value={setup.opponentCount}
              onChange={(event) =>
                setSetup((previous) => ({
                  ...previous,
                  opponentCount: Number(event.target.value),
                }))
              }
            >
              {Array.from({ length: 7 }, (_, index) => index + 1).map(
                (count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ),
              )}
            </select>
          </label>

          <div className="menu-actions">
            <button
              type="button"
              className="secondary"
              onClick={() => setScreen(GAME_SCREENS.MENU)}
            >
              Back
            </button>
            <button type="button" onClick={handleStartGame}>
              Start Game
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <TopBar
        turn={turn}
        player={player}
        researchProgress={researchProgress}
        onToggleTechTree={toggleTechTree}
        onOpenList={() => setIsListOverlayOpen(true)}
        isSimulationRunning={isSimulationRunning}
        onToggleSimulation={() =>
          setIsSimulationRunning((previous) => !previous)
        }
        onEndTurn={endTurn}
      />

      <main className="game-layout">
        <WorldGrid
          tiles={tiles}
          cities={cities}
          players={players}
          selectedTileId={selectedTileId}
          onSelectTile={selectTile}
          onSelectCity={selectCity}
        />
      </main>

      <section className="side-column" style={{ display: "none" }}>
        <TileInfoPanel tile={selectedTile} />
      </section>

      {selectedCity ? (
        <CityOverlay
          city={selectedCity}
          player={player}
          onClose={closeCityOverlay}
          onQueueProduction={queueProduction}
        />
      ) : null}

      {isTechTreeOpen && player ? (
        <TechTreeOverlay
          player={player}
          onClose={toggleTechTree}
          onSelectTech={setResearch}
        />
      ) : null}

      <ResearchPromptModal
        isOpen={isResearchPromptOpen}
        isTechTreeOpen={isTechTreeOpen}
        onToggleTechTree={toggleTechTree}
        onClose={() => setIsResearchPromptOpen(false)}
      />

      <ListOverlay
        isOpen={isListOverlayOpen}
        cities={cities}
        tiles={tiles}
        players={players}
        onClose={() => setIsListOverlayOpen(false)}
      />
    </div>
  );
}

export default App;
