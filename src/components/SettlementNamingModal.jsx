import { useEffect, useState } from "react";

function SettlementNamingModal({ isOpen, onConfirm }) {
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCityName("");
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <section
      className="research-prompt-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settlement-naming-title"
    >
      <div className="research-prompt-card panel">
        <h2 id="settlement-naming-title">Name New City</h2>
        <p>Your settlement is complete. Enter a city name to found it.</p>
        <label className="menu-field" htmlFor="settlement-city-name-input">
          <span>City Name</span>
          <input
            id="settlement-city-name-input"
            type="text"
            value={cityName}
            onChange={(event) => setCityName(event.target.value)}
            placeholder="New Settlement"
            autoFocus
          />
        </label>
        <div className="research-prompt-actions">
          <button type="button" onClick={() => onConfirm(cityName)}>
            Found City
          </button>
        </div>
      </div>
    </section>
  );
}

export default SettlementNamingModal;
