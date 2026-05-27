import TurnButton from "./TurnButton";

const frameStyle = {
  minHeight: "100vh",
  padding: "1.25rem",
  background: "linear-gradient(180deg, #0f171c 0%, #1a252c 100%)",
};

export default {
  title: "UI/Turn Button",
  component: TurnButton,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={frameStyle}>
      <div style={{ width: "min(280px, 100%)" }}>
        <TurnButton {...args} />
      </div>
    </div>
  ),
};

export const Default = {
  args: {
    onEndTurn: () => {},
  },
};
