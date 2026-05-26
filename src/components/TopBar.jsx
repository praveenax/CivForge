import TurnButton from "./TurnButton";

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TopBar({
  turn,
  player,
  researchProgress,
  onToggleTechTree,
  onReset,
  onEndTurn,
}) {
  return (
    <header className="top-bar">
      {/* <div className="brand">
        <h1>CivForge</h1>
   
      </div> */}

      <div className="stats-row">
        <h3>CivForge</h3>
        <div className="stats-row-prod">
          <StatCard label="Turn" value={turn} />
          <StatCard label="Food" value={player?.stockpile.food ?? 0} />
          <StatCard
            label="Production"
            value={player?.stockpile.production ?? 0}
          />
          <StatCard label="Gold" value={player?.stockpile.gold ?? 0} />
          <StatCard label="Science" value={player?.stockpile.science ?? 0} />
        </div>

        <div className="top-actions">
          <button type="button" onClick={onToggleTechTree}>
            Tech Tree
          </button>
          <button type="button" onClick={onReset}>
            Reset World
          </button>
          <TurnButton onEndTurn={onEndTurn} />
        </div>
      </div>

      <div className="research-line">
        {researchProgress.currentTech
          ? `Researching ${researchProgress.currentTech.name}: ${researchProgress.progressPct}%`
          : "No active research"}
      </div>
    </header>
  );
}

export default TopBar;
