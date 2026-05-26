function TurnButton({ onEndTurn }) {
  return (
    <button type="button" className="turn-button" onClick={onEndTurn}>
      End Turn
    </button>
  );
}

export default TurnButton;
