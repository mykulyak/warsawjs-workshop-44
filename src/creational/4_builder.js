class Cell {
  constructor(type) {
    this.type = type;
  }
}

class Building {
  constructor(name) {
    this.name = name;
  }
}

class Chest {
  constructor(value) {
    this.value = value;
  }
}

class Map {
  constructor() {
    this.cells = [];
    this.buildings = [];
    this.chests = [];
  }
}

class MapBuilder {
  constructor(mapSize) {
    this.mapSize = mapSize;
    this.result = new Map();
  }

  buildCell({ x, y, type }) {
    this.cells[x * this.mapSize + y] = new Cell(type);
  }

  buildBuilding({ x, y, name }) {
    this.building[x * this.mapSize + y] = new Building(name);
  }

  buildChest({ x, y, value }) {
    this.chest[x * this.mapSize + y] = new Chest(value);
  }

  result() {
    return this.result;
  }
}


/*
{
  size: 10,
  cells: [
    { x, y, type },
    {},
    {},
  ],
  buildings: [
    { x, y, name },
  ],
  chest: [
    { x, y, value },
  ]
}
*/
function jsonMapFactory(jsonData) {
  const builder = new MapBuilder(jsonData.size);
  jsonData.cells.forEach(cell => builder.buildCell(cell));
  jsonData.buildBuilding.forEach(b => builder.buildBuilding(b));
  jsonData.buildChest.forEach(c => builder.buildChest(c));
  return builder.result();
}




const savedData = readAndParseJsonFile('saes-game.json');
const restoredMap = jsonMapFactory(savedData);
