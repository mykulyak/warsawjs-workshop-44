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
