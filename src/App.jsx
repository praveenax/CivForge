import { useEffect } from "react";
import CityOverlay from "./components/CityOverlay";
import TechTreeOverlay from "./components/TechTreeOverlay";
import TileInfoPanel from "./components/TileInfoPanel";
import TopBar from "./components/TopBar";
import WorldGrid from "./components/WorldGrid";
import { useGameStore } from "./game/store/gameStore";

function App() {
  const turn = useGameStore((state) => state.turn);
  const tiles = useGameStore((state) => state.tiles);
  const cities = useGameStore((state) => state.cities);
  const players = useGameStore((state) => state.players);
  const selectedCityId = useGameStore((state) => state.selectedCityId);
  const selectedTileId = useGameStore((state) => state.selectedTileId);
  const isTechTreeOpen = useGameStore((state) => state.isTechTreeOpen);

  const selectCity = useGameStore((state) => state.selectCity);
  const closeCityOverlay = useGameStore((state) => state.closeCityOverlay);
  const selectTile = useGameStore((state) => state.selectTile);
  const queueProduction = useGameStore((state) => state.queueProduction);
  const setResearch = useGameStore((state) => state.setResearch);
  const toggleTechTree = useGameStore((state) => state.toggleTechTree);
  const endTurn = useGameStore((state) => state.endTurn);
  const resetGame = useGameStore((state) => state.resetGame);
  const getResearchProgress = useGameStore(
    (state) => state.getResearchProgress,
  );

  const player = players.find((entry) => entry.id === "player1") ?? null;
  const selectedCity =
    cities.find((city) => city.id === selectedCityId) ?? null;
  const selectedTile = tiles.find((tile) => tile.id === selectedTileId) ?? null;
  const researchProgress = getResearchProgress();

  useEffect(() => {
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
  }, [endTurn]);

  return (
    <div className="app-shell">
      <TopBar
        turn={turn}
        player={player}
        researchProgress={researchProgress}
        onToggleTechTree={toggleTechTree}
        onReset={resetGame}
        onEndTurn={endTurn}
      />

      <main className="game-layout">
        <WorldGrid
          tiles={tiles}
          cities={cities}
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
    </div>
  );
}

export default App;
