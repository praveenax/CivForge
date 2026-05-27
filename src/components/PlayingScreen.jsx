import CityOverlay from "./Overlays/CityOverlay";
import ListOverlay from "./Overlays/ListOverlay";
import NoProductionPromptModal from "./Modals/NoProductionPromptModal";
import ResearchPromptModal from "./Modals/ResearchPromptModal";
import SettlementNamingModal from "./Modals/SettlementNamingModal";
import TechTreeOverlay from "./Overlays/TechTreeOverlay";
import TileInfoPanel from "./TileInfoPanel";
import TopBar from "./TopBar";
import WorldGrid from "./WorldGrid";

function PlayingScreen({
  turn,
  player,
  researchProgress,
  onToggleTechTree,
  onOpenList,
  isSimulationRunning,
  onToggleSimulation,
  onEndTurn,
  tiles,
  cities,
  players,
  locateRequest,
  selectedTileId,
  onSelectTile,
  onSelectCity,
  selectedTile,
  selectedCity,
  onCloseCityOverlay,
  onQueueProduction,
  isTechTreeOpen,
  onSetResearch,
  onSetResearchForPlayer,
  isResearchPromptOpen,
  onCloseResearchPrompt,
  isNoProductionPromptOpen,
  noProductionCity,
  onLocateNoProductionCity,
  onCloseNoProductionPrompt,
  isSettlementNamingOpen,
  onConfirmSettlementName,
  isListOverlayOpen,
  onCloseListOverlay,
  onLocateCity,
}) {
  return (
    <div className="app-shell">
      <TopBar
        turn={turn}
        player={player}
        researchProgress={researchProgress}
        onToggleTechTree={onToggleTechTree}
        onOpenList={onOpenList}
        isSimulationRunning={isSimulationRunning}
        onToggleSimulation={onToggleSimulation}
        onEndTurn={onEndTurn}
      />

      <main className="game-layout">
        <WorldGrid
          tiles={tiles}
          cities={cities}
          players={players}
          locateRequest={locateRequest}
          selectedTileId={selectedTileId}
          onSelectTile={onSelectTile}
          onSelectCity={onSelectCity}
        />
      </main>

      <section className="side-column" style={{ display: "none" }}>
        <TileInfoPanel tile={selectedTile} />
      </section>

      {selectedCity ? (
        <CityOverlay
          city={selectedCity}
          player={player}
          tiles={tiles}
          onClose={onCloseCityOverlay}
          onQueueProduction={onQueueProduction}
        />
      ) : null}

      {isTechTreeOpen && player ? (
        <TechTreeOverlay
          player={player}
          players={players}
          onClose={onToggleTechTree}
          onSelectTech={onSetResearch}
          onSelectTechForPlayer={onSetResearchForPlayer}
        />
      ) : null}

      <ResearchPromptModal
        isOpen={isResearchPromptOpen}
        isTechTreeOpen={isTechTreeOpen}
        onToggleTechTree={onToggleTechTree}
        onClose={onCloseResearchPrompt}
      />

      <NoProductionPromptModal
        isOpen={isNoProductionPromptOpen}
        city={noProductionCity}
        onLocate={onLocateNoProductionCity}
        onClose={onCloseNoProductionPrompt}
      />

      <SettlementNamingModal
        isOpen={isSettlementNamingOpen}
        onConfirm={onConfirmSettlementName}
      />

      <ListOverlay
        isOpen={isListOverlayOpen}
        cities={cities}
        tiles={tiles}
        players={players}
        onClose={onCloseListOverlay}
        onLocateCity={onLocateCity}
      />
    </div>
  );
}

export default PlayingScreen;
