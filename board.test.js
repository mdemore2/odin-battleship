var board = require("./board");

let testBoard;

beforeAll(() => {
  testBoard = board.createBoard();
});

it("placesShip", () => {
  testBoard.placeShip("cruiser", 0, 0, 0);
  expect(testBoard.getBoard()[0][0]).toBe(1);
});

it("doesntOverlap", () => {
  expect(() => {
    testBoard.placeShip("submarine", 0, 1, 90);
  }).toThrowError("Attempted to place ship on occupied grid");
});

it("doesntDuplicateShips", () => {
  expect(() => {
    testBoard.placeShip("cruiser", 0, 5, 90);
  }).toThrowError("Attempted to create multiple ships of same type");
});
