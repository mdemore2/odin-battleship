var board = require("./board");

let testBoard;

beforeAll(() => {
  testBoard = board.createBoard();
});

it("placesShip", () => {
  testBoard.placeShip("cruiser", 0, 0, 0);
  expect(testBoard.getBoard()[0][0]).toBe(3);
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

it("receivesHit", () => {
  testBoard.receiveAttack([0, 0]);
  let ships = testBoard.getShips();
  let hitShip = ships.find((el) => el.name == "cruiser");
  expect(hitShip.getHits()).toBe(1);
});

it("reportsEnd", () => {
  testBoard.receiveAttack([0, 1]);
  testBoard.receiveAttack([0, 2]);
  expect(testBoard.checkSunk()).toBe(true);
});
