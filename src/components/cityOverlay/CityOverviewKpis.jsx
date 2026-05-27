function CityOverviewKpis({ population, cultureLevel, netFood, foodConsumed }) {
  return (
    <section className="city-kpi-grid" aria-label="City overview">
      <article className="city-kpi-card">
        <span>Population</span>
        <strong>{population}</strong>
      </article>
      <article className="city-kpi-card">
        <span>Culture Level</span>
        <strong>{cultureLevel}</strong>
      </article>
      <article className="city-kpi-card">
        <span>Food/Turn</span>
        <strong>{netFood >= 0 ? `+${netFood}` : netFood}</strong>
      </article>
      <article className="city-kpi-card">
        <span>Consumption</span>
        <strong>{foodConsumed}/turn</strong>
      </article>
    </section>
  );
}

export default CityOverviewKpis;
