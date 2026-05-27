function CityDetailsPanel({
  city,
  foodNeededForNextPop,
  growthProgressPct,
  cultureNeededForNextLevel,
  cultureProgressPct,
  buildingNames,
  unitNames,
  improvementNames,
}) {
  return (
    <section className="city-info-card">
      <h3>Growth & Culture</h3>
      <div className="city-progress-group">
        <div className="city-progress-row">
          <span>Growth</span>
          <strong>
            {city.food}/{foodNeededForNextPop} ({growthProgressPct}%)
          </strong>
        </div>
        <progress value={city.food} max={foodNeededForNextPop} />
      </div>
      <div className="city-progress-group">
        <div className="city-progress-row">
          <span>Culture</span>
          <strong>
            {city.culture ?? 0}/{cultureNeededForNextLevel} (
            {cultureProgressPct}
            %)
          </strong>
        </div>
        <progress value={city.culture ?? 0} max={cultureNeededForNextLevel} />
      </div>
      <div className="city-tag-block">
        <span>Buildings</span>
        <p>{buildingNames.length ? buildingNames.join(", ") : "None"}</p>
      </div>
      <div className="city-tag-block">
        <span>Units</span>
        <p>{unitNames.length ? unitNames.join(", ") : "None"}</p>
      </div>
      <div className="city-tag-block">
        <span>Improvements</span>
        <p>{improvementNames.length ? improvementNames.join(", ") : "None"}</p>
      </div>
    </section>
  );
}

export default CityDetailsPanel;
