function createShip(name) {
  switch (name) {
    case "carrier":
      var length = 5;
      break;
    case "battleship":
      var length = 4;
      break;
    case "cruiser":
      var length = 3;
      break;
    case "submarine":
      var length = 3;
      break;
    case "destroyer":
      var length = 3;
      break;
    default:
      throw new Error("Unknown ship name: " + name);
      break;
  }
  return { name, length };
}

exports.createShip = createShip;
