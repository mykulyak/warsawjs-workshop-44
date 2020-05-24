class HeavyObject {
  constructor() {
    this.data = new Array(1000000).fill(3);
  }
}

let instance = null;

function getInstance() {
  
  if (!instance) {
    instance = new HeavyObject();
  }
  return instance;
}

module.exports = getInstance;
