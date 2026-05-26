# CivForge

CivForge is a lightweight browser-based 4X strategy prototype built with React, Vite, and Zustand. It generates a small world map, seeds rival cities, and lets you progress turn by turn through food growth, science research, production queues, and culture-driven border expansion.

## Current Features

- Procedurally generated 30x30 map with terrain and resource distribution.
- Two starting civilizations: the player and an AI opponent.
- City ownership and claimed territory around each founded city.
- City growth driven by food surplus and population-based food consumption.
- Culture as a city resource with level thresholds of 10, 20, 40, and so on.
- Border growth when a city gains a culture level, claiming an adjacent tile.
- Per-turn yields for food, production, gold, science, and culture.
- Production queues for buildings and units.
- Technology selection through an interactive science tree overlay.
- AI turn processing for non-player city management.
- Turn advancement by button click or the Enter key.
- Top bar stat cards with Font Awesome icons for the main empire resources.

## Included Game Content

### Terrain Types

- Grassland
- Forest
- Hill
- River
- Mountain
- Desert

### Resource Types

- Wheat
- Iron
- Gems
- Manuscripts

### Technologies

- Agriculture
- Mining
- Writing
- Bronze Working

### Buildings

- Granary
- Library
- Quarry

### Units

- Scout
- Spearman

## UI Overview

- World grid showing terrain, resources, and city locations.
- City overlay with population, food growth, culture progress, yields, queue, and available production choices.
- Science tree overlay powered by React Flow.
- Empire top bar with turn, food, production, gold, science, and culture.

## Tech Stack

- React 19
- Vite
- Zustand for game state
- React Flow for the tech tree
- Font Awesome for UI icons
- ESLint for linting

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run The Game

```bash
npm run dev
```

Open the local Vite URL shown in the terminal.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## How To Play

1. Click tiles on the world map to inspect the board and select cities.
2. Click a city to open the city overlay.
3. Queue buildings or units that are currently unlocked by your techs.
4. Open the Tech Tree to change your active research target.
5. End the turn with the turn button or press Enter.
6. Grow your cities through food and expand borders through culture.

## Project Structure

```text
src/
  components/    UI overlays, map tiles, top bar, world grid
  game/data/     Static definitions for techs, terrain, resources, units, buildings
  game/store/    Zustand game store and world initialization
  game/systems/  Turn processing, city systems, science, production, AI, map generation
```

## Current Scope Notes

- This is a prototype focused on the city and economy loop rather than full military movement or combat.
- Tile inspection exists in the codebase, but the side panel is currently hidden in the main app layout.
- The AI logic is intentionally lightweight and aimed at keeping the simulation moving.
