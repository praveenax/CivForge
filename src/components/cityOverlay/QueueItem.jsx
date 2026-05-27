import { BUILDINGS } from "../../game/data/buildings";
import { IMPROVEMENTS } from "../../game/data/improvements";
import { UNITS } from "../../game/data/units";

function QueueItem({ item, tileLabelById }) {
  const source =
    item.type === "building"
      ? BUILDINGS
      : item.type === "unit"
        ? UNITS
        : IMPROVEMENTS;
  const config = source[item.id];
  const cost = config?.cost ?? 0;
  const progress =
    cost > 0 ? Math.min(100, Math.round((item.progress / cost) * 100)) : 0;
  const tileLabel = item.tileId ? tileLabelById.get(item.tileId) : null;

  return (
    <li className="queue-item">
      <div>
        <strong>{config?.name ?? item.id}</strong>
        <p className="queue-item-meta">
          {item.type}
          {tileLabel ? ` - ${tileLabel}` : ""}
        </p>
      </div>
      <div className="queue-item-progress">
        <strong>{progress}%</strong>
        <progress value={item.progress} max={cost || 1} />
      </div>
    </li>
  );
}

export default QueueItem;
