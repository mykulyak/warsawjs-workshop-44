class Car {
  ride() {
    console.log('Jedziemy');
  }

  tank() {
    console.log('Tankujemy ...');
  }
}

class Bicycle {
  ride() {
    console.log('Jedziemy, ale wolniej');
  }
}

class BicycleAdapter extends Bicycle {
  tank() {
    console.log('Jemy batonik energetyczny');
  }
}

class BicycleAdapter2 {
  constructor(impl) {
    this.impl = impl;
  }
  ride() {
    this.impl.ride();
  }
  tank() {
    console.log('Jemy batonik energetyczny');
  }
}

// uzycie

function tripThereAndBack(vehicle) {
  vehicle.ride();
  vehicle.tank();
  vehicle.ride();
}

console.log('--- Podroz samochodem');
tripThereAndBack(new Car());

try {
  console.log('--- Podroz rowerem - v1');
  tripThereAndBack(new Bicycle());
} catch (err) {
  console.log(`Error: ${err.message}`);
}

console.log('--- Podroz rowerem - v2');
tripThereAndBack(new BicycleAdapter());

console.log('--- Podroz rowerem - v3');
tripThereAndBack(new BicycleAdapter2(new Bicycle()));
