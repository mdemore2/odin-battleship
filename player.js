var ship = require("./ship");
var board = require("./board");

const computerPlacements = [
  {
    carrier: [1, 7, 90],
    battleship: [4, 1, 0],
    cruiser: [1, 9, 90],
    submarine: [8, 4, 0],
    destroyer: [2, 4, 0],
  },
  {
    carrier: [3, 2, 90],
    battleship: [5, 3, 0],
    cruiser: [5, 0, 90],
    submarine: [1, 7, 0],
    destroyer: [8, 8, 0],
  },
  {
    carrier: [4, 1, 90],
    battleship: [6, 8, 90],
    cruiser: [2, 2, 0],
    submarine: [4, 5, 0],
    destroyer: [1, 8, 0],
  },
];

function getComputerPlacement() {
  let placement =
    computerPlacements[Math.floor(Math.random() * computerPlacements.length)];
  return placement;
}

function createPlayer(name, placement) {
  var playerName = name;
  var playerBoard = board.createBoard();
  for (const [key, value] of Object.entries(placement)) {
    playerBoard.placeShip(key, value[0], value[1], value[2]);
  }
  return { playerName, playerBoard };
}

exports.createPlayer = createPlayer;
