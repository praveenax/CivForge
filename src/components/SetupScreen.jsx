function SetupScreen({
  setup,
  civilizationOptions,
  onSetupChange,
  onBack,
  onStartGame,
}) {
  return (
    <div className="app-shell menu-shell">
      <section className="menu-card setup-card">
        <h1>New Game Setup</h1>
        <label className="menu-field" htmlFor="civilization-select">
          <span>Civilization</span>
          <select
            id="civilization-select"
            value={setup.civilizationId}
            onChange={(event) =>
              onSetupChange((previous) => ({
                ...previous,
                civilizationId: event.target.value,
              }))
            }
          >
            {civilizationOptions.map((civilization) => (
              <option key={civilization.id} value={civilization.id}>
                {civilization.name}
              </option>
            ))}
          </select>
        </label>

        <label className="menu-field" htmlFor="opponent-count-select">
          <span>Opponents</span>
          <select
            id="opponent-count-select"
            value={setup.opponentCount}
            onChange={(event) =>
              onSetupChange((previous) => ({
                ...previous,
                opponentCount: Number(event.target.value),
              }))
            }
          >
            {Array.from({ length: 7 }, (_, index) => index + 1).map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </label>

        <div className="menu-actions">
          <button type="button" className="secondary" onClick={onBack}>
            Back
          </button>
          <button type="button" onClick={onStartGame}>
            Start Game
          </button>
        </div>
      </section>
    </div>
  );
}

export default SetupScreen;
