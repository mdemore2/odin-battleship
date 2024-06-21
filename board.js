var ship = require("./ship");

const rows = 10;
const columns = 10;

function createBoard() {
  //0,0 is bottom left
  var board = Array(rows)
    .fill()
    .map(() => Array(columns).fill(0)); // 0 = empty, 1 = ship, 2 = ship hit, -1 = miss
  const getBoard = () => board;

  var ships = [];
  const placeShip = (name, x, y, orientation) => {
    if (ships.some((el) => el.name === name)) {
      throw new Error("Attempted to create multiple ships of same type");
    }
    var newShip = ship.createShip(name);
    ships.push(newShip);
    let shipCoords = []; //if orientation = 0 then increment y, if orientation = 90 then increment x
    for (let i = 0; i < newShip.length; i++) {
      var newCoord;
      if (orientation == 0) {
        newCoord = [x, y + i];
      } else {
        newCoord = [x + i, y];
      }
      if (board[newCoord[0]][newCoord[1]] != 0) {
        throw new Error("Attempted to place ship on occupied grid");
      } else {
        board[newCoord[0]][newCoord[1]] = 1;
        shipCoords.push(newCoord);
      }
    }
  };

  return { getBoard, placeShip };
}

exports.createBoard = createBoard;
