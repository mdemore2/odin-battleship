var ship = require("./ship");

let testShip;

beforeEach(() => {
  testShip = ship.createShip("cruiser");
});

it("hasCorrectLength", () => {
  expect(testShip.length).toBe(3);
});

it("getsHit", () => {
  testShip.hit();
  expect(testShip.getHits()).toBe(1);
});

it("getsSunk", () => {
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
