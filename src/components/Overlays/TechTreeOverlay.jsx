import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { TECHS, TECH_NODE_POSITIONS } from "../../game/data/techs";

const getNodeStyle = (status) => {
  if (status === "unlocked") {
    return {
      background: "#3d6f3c",
      color: "#f7f5ee",
      border: "2px solid #89b788",
    };
  }

  if (status === "researching") {
    return {
      background: "#d09a35",
      color: "#1f1a10",
      border: "2px solid #f2ce86",
    };
  }

  return {
    background: "#32383d",
    color: "#d8dde2",
    border: "2px solid #59626a",
  };
};

function TechTreeOverlay({ player, onClose, onSelectTech }) {
  const nodes = Object.values(TECHS).map((tech) => {
    const status = player.unlockedTechs.includes(tech.id)
      ? "unlocked"
      : player.currentResearch === tech.id
        ? "researching"
        : "locked";

    return {
      id: tech.id,
      position: TECH_NODE_POSITIONS[tech.id] ?? { x: 0, y: 0 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      data: {
        label: (
          <button
            type="button"
            className="tech-node-button"
            disabled={status === "unlocked"}
            onClick={() => onSelectTech(tech.id)}
          >
            <strong>{tech.name}</strong>
            <span>Cost: {tech.cost}</span>
            <span>Status: {status}</span>
          </button>
        ),
      },
      style: getNodeStyle(status),
      draggable: false,
    };
  });

  const edges = Object.values(TECHS).flatMap((tech) =>
    tech.requires.map((dependency) => ({
      id: `${dependency}->${tech.id}`,
      source: dependency,
      target: tech.id,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "#989da2",
      },
      style: { stroke: "#989da2", strokeWidth: 2 },
    })),
  );

  return (
    <section className="tech-overlay">
      <div className="panel-header">
        <h2>Science Tree</h2>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="tech-flow-shell">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={{ padding: 0.25 }}
        >
          <Background color="#505860" gap={24} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </section>
  );
}

export default TechTreeOverlay;
