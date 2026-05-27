import SettlementNamingModal from "./SettlementNamingModal";

export default {
  title: "UI/Settlement Naming Modal",
  component: SettlementNamingModal,
  parameters: {
    layout: "fullscreen",
  },
};

export const Open = {
  args: {
    isOpen: true,
    onConfirm: () => {},
  },
};

export const Closed = {
  args: {
    isOpen: false,
    onConfirm: () => {},
  },
};
