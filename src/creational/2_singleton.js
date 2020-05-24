let factory = null;
let instance = null;

function initialize(value) {
  if (factory) {
    throw new Error('Already initialized');
  }
  factory = value;
}

function getInstance() {
  if (!instance) {
    instance = factory();
  }
  return instance;
}

exports.initialize = initialize;
exports.getInstance = getInstance;
