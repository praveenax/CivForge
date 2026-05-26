function NoProductionPromptModal({ isOpen, city, onLocate, onClose }) {
  if (!isOpen || !city) {
    return null;
  }

  return (
    <section
      className="research-prompt-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="no-production-prompt-title"
    >
      <div className="research-prompt-card panel">
        <h2 id="no-production-prompt-title">No Production</h2>
        <p>Simulation stopped because {city.name} has no active production.</p>
        <div className="research-prompt-actions">
          <button type="button" onClick={onLocate}>
            Locate City
          </button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

export default NoProductionPromptModal;
