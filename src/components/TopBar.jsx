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
import StatCard from "./StatCard";
import TurnButton from "./TurnButton";

function TopBar({
  turn,
  player,
  researchProgress,
  onToggleTechTree,
  onOpenList,
  isSimulationRunning,
  onToggleSimulation,
  onEndTurn,
}) {
  const progressPct = Math.max(
    0,
    Math.min(100, researchProgress?.progressPct ?? 0),
  );

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
        <div className="research-line">
          {researchProgress.currentTech
            ? `Researching ${researchProgress.currentTech.name}: ${progressPct}%`
            : "No active research"}
        </div>
        <div
          className="research-progress"
          role="progressbar"
          aria-label="Research progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPct}
        >
          <div
            className="research-progress-fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="top-actions">
          <button type="button" onClick={onToggleTechTree}>
            Tech Tree
          </button>
          <button type="button" onClick={onOpenList}>
            List
          </button>
          <button type="button" onClick={onToggleSimulation}>
            {isSimulationRunning ? "Stop" : "Start"}
          </button>

          <TurnButton onEndTurn={onEndTurn} />
        </div>
      </div>
    </header>
  );
}

export default TopBar;
