function MenuScreen({ hasSavedGame, menuError, onNewGame, onLoadGame }) {
  return (
    <div className="app-shell menu-shell">
      <section className="menu-card">
        <h1>CivForge</h1>
        <p className="menu-subtitle">Forge your empire from the first dawn.</p>
        <div className="menu-actions">
          <button type="button" onClick={onNewGame}>
            New Game
          </button>
          <button type="button" onClick={onLoadGame} disabled={!hasSavedGame}>
            Load Game
          </button>
        </div>
        {!hasSavedGame ? (
          <p className="menu-hint">
            Load Game unlocks after your first auto-save.
          </p>
        ) : null}
        {menuError ? <p className="menu-error">{menuError}</p> : null}
      </section>
    </div>
  );
}

export default MenuScreen;
