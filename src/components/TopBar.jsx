import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCoins,
  faDrumstickBite,
  faHammer,
  faLandmark,
  faMasksTheater,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import TurnButton from "./TurnButton";

function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <span className="stat-card-label">
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
        <span>{label}</span>
      </span>
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
        <h3 className="game-title">
          <FontAwesomeIcon icon={faLandmark} />
          <span>CivForge</span>
        </h3>
        <div className="stats-row-prod">
          <StatCard icon={faHourglassHalf} label="Turn" value={turn} />
          <StatCard
            icon={faDrumstickBite}
            label="Food"
            value={player?.stockpile.food ?? 0}
          />
          <StatCard
            icon={faHammer}
            label="Production"
            value={player?.stockpile.production ?? 0}
          />
          <StatCard
            icon={faCoins}
            label="Gold"
            value={player?.stockpile.gold ?? 0}
          />
          <StatCard
            icon={faBookOpen}
            label="Science"
            value={player?.stockpile.science ?? 0}
          />
          <StatCard
            icon={faMasksTheater}
            label="Culture"
            value={player?.stockpile.culture ?? 0}
          />
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
