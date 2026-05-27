function CityYieldsPanel({ yields }) {
  return (
    <section className="city-info-card">
      <h3>Yield Per Turn</h3>
      <ul className="city-yield-list">
        <li>
          <span>Food</span>
          <strong>{yields.food}</strong>
        </li>
        <li>
          <span>Production</span>
          <strong>{yields.production}</strong>
        </li>
        <li>
          <span>Gold</span>
          <strong>{yields.gold}</strong>
        </li>
        <li>
          <span>Science</span>
          <strong>{yields.science}</strong>
        </li>
        <li>
          <span>Culture</span>
          <strong>{yields.culture}</strong>
        </li>
      </ul>
    </section>
  );
}

export default CityYieldsPanel;
