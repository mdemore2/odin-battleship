var ship = require("./ship");

it("hasCorrectLength", () => {
  let testShip = ship.createShip("cruiser");
  expect(testShip.length).toBe(3);
});
