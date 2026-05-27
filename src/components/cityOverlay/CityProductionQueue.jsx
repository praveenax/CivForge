import QueueItem from "./QueueItem";

function CityProductionQueue({ queue, tileLabelById }) {
  return (
    <section>
      <h3>Production Queue</h3>
      {queue.length ? (
        <ul className="queue-list">
          {queue.map((item, index) => (
            <QueueItem
              key={`${item.type}-${item.id}-${index}`}
              item={item}
              tileLabelById={tileLabelById}
            />
          ))}
        </ul>
      ) : (
        <p className="city-empty-text">Queue is empty.</p>
      )}
    </section>
  );
}

export default CityProductionQueue;
