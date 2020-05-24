class Observable {
  constructor() {
    this.observers = new Set();
  }

  observe(observer) {
    this.observers.add(observer);
  }

  unobserve(observer) {
    this.observers.delete(observer);
  }

  unobserveAll() {
    this.observers.clear();
  }

  notify(...args) {
    this.observers.forEach(fn => fn(...args));
  }
}

class ConcreteObservable extends Observable {
  constructor(value) {
    this.value = value;
  }

  increase() {
    this.value += 1;
    this.notify('increase', this.value);
  }
}

class Observer {
  observe(obj) {
    obj.observe(this);
  }
}

const concrete = new ConcreteObservable(12);

function observer1(change, newValue) {
  console.log('observer1', change, newValue);
}

function observer2(change, newValue) {
  console.log('observer2', change, newValue);
}

observer1.observe(concrete);
observer2.observe(concrete);

// concrete.observe(observer1);
// concrete.observe(observer2);

concrete.increase();
