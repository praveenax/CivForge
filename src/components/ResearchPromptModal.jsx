function ResearchPromptModal({
  isOpen,
  isTechTreeOpen,
  onToggleTechTree,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <section
      className="research-prompt-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="research-prompt-title"
    >
      <div className="research-prompt-card panel">
        <h2 id="research-prompt-title">Research Needed</h2>
        <p>
          Simulation stopped because no active research is selected. Choose the
          next technology to continue.
        </p>
        <div className="research-prompt-actions">
          <button
            type="button"
            onClick={() => {
              if (!isTechTreeOpen) {
                onToggleTechTree();
              }
              onClose();
            }}
          >
            Open Tech Tree
          </button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResearchPromptModal;
