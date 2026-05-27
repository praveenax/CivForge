export const PLAYER_ID = "player1";
export const GAME_SAVE_KEY = "civforge.save.v1";

export const CIVILIZATION_OPTIONS = [
  {
    id: "rome",
    name: "Rome",
    cityNames: ["Aurelia", "Roma", "Neapolis"],
  },
  {
    id: "india",
    name: "India",
    cityNames: ["Pataliputra", "Varanasi", "Ujjain"],
  },
  {
    id: "egypt",
    name: "Egypt",
    cityNames: ["Thebes", "Memphis", "Heliopolis"],
  },
  {
    id: "greece",
    name: "Greece",
    cityNames: ["Athens", "Sparta", "Corinth"],
  },
  {
    id: "china",
    name: "China",
    cityNames: ["Chang'an", "Luoyang", "Kaifeng"],
  },
  {
    id: "persia",
    name: "Persia",
    cityNames: ["Persepolis", "Susa", "Pasargadae"],
  },
  {
    id: "aztec",
    name: "Aztec",
    cityNames: ["Tenochtitlan", "Texcoco", "Tlacopan"],
  },
];

export const DEFAULT_GAME_SETUP = {
  civilizationId: "rome",
  opponentCount: 2,
};

export const START_POSITIONS = [
  { x: 5, y: 7 },
  { x: 22, y: 6 },
  { x: 7, y: 22 },
  { x: 22, y: 22 },
  { x: 15, y: 5 },
  { x: 15, y: 25 },
  { x: 4, y: 15 },
  { x: 25, y: 15 },
];
