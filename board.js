var ship = require("./ship");

const rows = 10;
const columns = 10;
const ship_ids = {
  carrier: 1,
  battleship: 2,
  cruiser: 3,
  submarine: 4,
  destroyer: 5,
};
const ship_names = {
  1: "carrier",
  2: "battleship",
  3: "cruiser",
  4: "submarine",
  5: "destroyer",
};

function createBoard() {
  //0,0 is bottom left
  var board = Array(rows)
    .fill()
    .map(() => Array(columns).fill(0)); //0 = empty, 1 = carrier, 2 = battleship, 3 = cruiser, 4 = sub, 5 = destroyer
  const getBoard = () => board;
  //TODO fill an array same way, once selected as an attack change 0 to 1 or -1 to track status
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
        board[newCoord[0]][newCoord[1]] = ship_ids[name];
        shipCoords.push(newCoord);
      }
    }
  };
  const getShips = () => ships;

  const receiveAttack = (coords) => {
    if (board[coords[0]][coords[1]] == 0) {
      return false;
    } else {
      let hitShip = ships.find(
        (el) => el.name == ship_names[board[coords[0]][coords[1]]]
      );
      hitShip.hit();
      checkSunk();
      return true;
    }
  };
  const checkSunk = () => {
    for (const element of ships) {
      if (element.isSunk()) {
        return true;
      }
    }
    return false;
  };

  return { getBoard, placeShip, getShips, receiveAttack, checkSunk };
}

exports.createBoard = createBoard;
