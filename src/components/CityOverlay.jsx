import { useState } from "react";
import { BUILDINGS } from "../game/data/buildings";
import {
  getImprovementIdForResource,
  getValidSettlementTiles,
  IMPROVEMENTS,
} from "../game/data/improvements";
import { RESOURCE_TYPES } from "../game/data/resources";
import { UNITS } from "../game/data/units";
import {
  getCultureNeededForNextLevel,
  getFoodConsumedPerTurn,
  getFoodNeededForNextPopulation,
} from "../game/systems/citySystem";
import CityDetailsPanel from "./cityOverlay/CityDetailsPanel";
import CityOverviewKpis from "./cityOverlay/CityOverviewKpis";
import CityProductionActions from "./cityOverlay/CityProductionActions";
import CityProductionQueue from "./cityOverlay/CityProductionQueue";
import CityYieldsPanel from "./cityOverlay/CityYieldsPanel";
import SettlementTilePicker from "./cityOverlay/SettlementTilePicker";

const getEntryLabel = (registry, id) => registry[id]?.name ?? id;

function CityOverlay({ city, player, tiles, onClose, onQueueProduction }) {
  const [isSettlementPickerOpen, setIsSettlementPickerOpen] = useState(false);

  if (!city) {
    return null;
  }

  const cityTiles = (tiles ?? []).filter((tile) => tile.cityId === city.id);
  const tileLabelById = new Map(
    cityTiles.map((tile) => [tile.id, `Tile ${tile.x},${tile.y}`]),
  );

  const availableBuildings = Object.values(BUILDINGS).filter((building) => {
    if (city.buildings.includes(building.id)) {
      return false;
    }

    if (!building.requiredTech) {
      return true;
    }

    return player?.unlockedTechs.includes(building.requiredTech);
  });

  const availableUnits = Object.values(UNITS).filter((unit) => {
    if (!unit.requiredTech) {
      return true;
    }

    return player?.unlockedTechs.includes(unit.requiredTech);
  });

  const availableImprovements = cityTiles
    .filter((tile) => tile.resource && !tile.improvement)
    .map((tile) => {
      const improvementId = getImprovementIdForResource(tile.resource);
      if (!improvementId) {
        return null;
      }

      const improvement = IMPROVEMENTS[improvementId];
      if (!improvement) {
        return null;
      }

      if (
        improvement.requiredTech &&
        !player?.unlockedTechs.includes(improvement.requiredTech)
      ) {
        return null;
      }

      const hasQueuedTileImprovement = city.queue.some(
        (entry) => entry.type === "improvement" && entry.tileId === tile.id,
      );
      if (hasQueuedTileImprovement) {
        return null;
      }

      return {
        tileId: tile.id,
        x: tile.x,
        y: tile.y,
        resourceId: tile.resource,
        improvement,
      };
    })
    .filter(Boolean);

  const settlementImprovement = IMPROVEMENTS.settlement ?? null;
  const isSettlementUnlocked = settlementImprovement
    ? !settlementImprovement.requiredTech ||
      player?.unlockedTechs.includes(settlementImprovement.requiredTech)
    : false;
  const validSettlementTiles = getValidSettlementTiles(city, tiles);

  const foodConsumed = getFoodConsumedPerTurn(city);
  const netFood = city.yields.food - foodConsumed;
  const foodNeededForNextPop =
    city.foodNeededForNextPop ??
    getFoodNeededForNextPopulation(city.population);
  const growthProgressPct = Math.min(
    100,
    Math.round((city.food / foodNeededForNextPop) * 100),
  );
  const cultureNeededForNextLevel =
    city.cultureNeededForNextLevel ??
    getCultureNeededForNextLevel(city.cultureLevel ?? 1);
  const cultureProgressPct = Math.min(
    100,
    Math.round(((city.culture ?? 0) / cultureNeededForNextLevel) * 100),
  );
  const buildingNames = (city.buildings ?? []).map((buildingId) =>
    getEntryLabel(BUILDINGS, buildingId),
  );
  const unitNames = (city.units ?? []).map((unitId) =>
    getEntryLabel(UNITS, unitId),
  );
  const improvementNames = cityTiles
    .filter((tile) => tile.improvement)
    .map((tile) => {
      const improvementName = getEntryLabel(IMPROVEMENTS, tile.improvement);
      const resourceName =
        RESOURCE_TYPES[tile.resource]?.name ?? tile.resource ?? "Resource";
      return `${improvementName} (${resourceName} ${tile.x},${tile.y})`;
    });
  const ownerName = player?.name ?? city.owner;

  const handleQueueSettlement = (tileId) => {
    onQueueProduction(city.id, "improvement", "settlement", { tileId });
    setIsSettlementPickerOpen(false);
  };

  return (
    <aside
      className="city-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="city-overlay-title"
    >
      <div className="city-overlay-panel panel">
        <div className="panel-header city-overlay-header">
          <div>
            <h2 id="city-overlay-title">{city.name}</h2>
            <p className="city-overlay-subtitle">Owner: {ownerName}</p>
          </div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <CityOverviewKpis
          population={city.population}
          cultureLevel={city.cultureLevel ?? 1}
          netFood={netFood}
          foodConsumed={foodConsumed}
        />

        <div className="overlay-columns city-overlay-columns">
          <CityDetailsPanel
            city={city}
            foodNeededForNextPop={foodNeededForNextPop}
            growthProgressPct={growthProgressPct}
            cultureNeededForNextLevel={cultureNeededForNextLevel}
            cultureProgressPct={cultureProgressPct}
            buildingNames={buildingNames}
            unitNames={unitNames}
            improvementNames={improvementNames}
          />

          <CityYieldsPanel yields={city.yields} />
        </div>

        <CityProductionQueue queue={city.queue} tileLabelById={tileLabelById} />

        <CityProductionActions
          cityId={city.id}
          availableBuildings={availableBuildings}
          availableUnits={availableUnits}
          availableImprovements={availableImprovements}
          settlementImprovement={settlementImprovement}
          isSettlementUnlocked={isSettlementUnlocked}
          validSettlementTiles={validSettlementTiles}
          onOpenSettlementPicker={() => setIsSettlementPickerOpen(true)}
          onQueueProduction={onQueueProduction}
        />
      </div>

      <SettlementTilePicker
        isOpen={isSettlementPickerOpen}
        validSettlementTiles={validSettlementTiles}
        onSelectTile={handleQueueSettlement}
        onClose={() => setIsSettlementPickerOpen(false)}
      />
    </aside>
  );
}

export default CityOverlay;
