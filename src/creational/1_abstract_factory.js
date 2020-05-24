class HumanFootman {
  move() {}
  attack() {}
  defend() {}
  die() {}
}
class HumanArcher {}

class HumanFactory {
  createFootman() {
    return new HumanFootman();
  }
  createArcher() {
    return new HumanArcher();
  }
}

class OrcGrunt {}
class OrcAxeThrower {}

class OrcFactory {
  createFootman() {
    return new OrcGrunt();
  }
  createArcher() {
    return new OrcAxeThrower();
  }
}

// klient - nie powinien zalezez od typow jednostek

class Player {
  constructor(raceUnitFactory) {
    this.unitFactory = raceUnitFactory;
    this.units = [];
  }

  prepare() {
    const footman = this.unitFactory.createFootman();
    this.units.push(footman);
  }

  move() {
    // ... uzywamy this.units ...
  }

  printArmyStats() {
    console.log(this.units);
  }
}

// faktyczne uzycie

const humanFactory = new HumanFactory();
const orcFactory = new OrcFactory();
const elfPlayer = new ElfFactory();

// inicjalizacja

const player1 = new Player(humanFactory);
const player2 = new Player(elfFactory);

// ten kod rowniez nie zalezy od typow jednostek

player1.prepare();
player2.prepare();

player1.printArmyStats();
player2.printArmyStats();
