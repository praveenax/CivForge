import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <span className="stat-card-label">
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
        <span>{label}</span>
      </span>
      <strong>{value}</strong>
    </div>
  );
}

export default StatCard;
