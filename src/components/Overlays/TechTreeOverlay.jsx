import { useEffect, useMemo, useState } from "react";
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
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const nodes = useMemo(
    () =>
      Object.values(TECHS).map((tech) => {
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
      }),
    [onSelectTech, player.currentResearch, player.unlockedTechs],
  );

  const edges = useMemo(
    () =>
      Object.values(TECHS).flatMap((tech) =>
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
      ),
    [],
  );

  useEffect(() => {
    if (!reactFlowInstance || !nodes.length) {
      return;
    }

    const sortedColumns = Array.from(
      new Set(
        Object.values(TECH_NODE_POSITIONS)
          .map((position) => position.x)
          .sort((left, right) => left - right),
      ),
    );

    const fallbackTech =
      player.currentResearch ||
      player.unlockedTechs
        .map((techId) => ({
          id: techId,
          x: TECH_NODE_POSITIONS[techId]?.x ?? -1,
        }))
        .sort((left, right) => right.x - left.x)[0]?.id ||
      "agriculture";

    const anchorX =
      TECH_NODE_POSITIONS[fallbackTech]?.x ?? sortedColumns[0] ?? 0;
    const anchorColumnIndex = sortedColumns.indexOf(anchorX);
    const startColumnIndex = Math.max(0, anchorColumnIndex);
    const targetColumns = sortedColumns.slice(
      startColumnIndex,
      startColumnIndex + 3,
    );
    const fallbackColumns = sortedColumns.slice(0, 3);
    const visibleColumns = targetColumns.length
      ? targetColumns
      : fallbackColumns;

    const focusNodes = nodes.filter((node) =>
      visibleColumns.includes(node.position.x),
    );

    if (!focusNodes.length) {
      return;
    }

    reactFlowInstance.fitView({
      nodes: focusNodes,
      padding: 0.35,
      duration: 350,
      minZoom: 0.8,
      maxZoom: 1.35,
    });
  }, [nodes, player.currentResearch, player.unlockedTechs, reactFlowInstance]);

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
          onInit={setReactFlowInstance}
          minZoom={0.45}
          maxZoom={1.6}
        >
          <Background color="#505860" gap={24} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </section>
  );
}

export default TechTreeOverlay;
