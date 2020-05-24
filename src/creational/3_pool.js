// pool object

class PoolObject {}

// Pool implementation

let objects = [];
let used = [];
let maxSize = 10;

function setMaxSize(value) {
  maxSize = value;
}

function acquire() {
  if (objects.length + 1 > maxSize) {
    throw new Error(`Pool capacity exceeded`);
  }
  let newObject = objects.find(obj => used.indexOf(obj) < 0);
  if (!newObject) {
    newObject = new PoolObject();
  }
  objects.push(newObject);
  used.push(newObject);
  return newObject;
}

function release(poolObject) {
  const usedIndex = used.indexOf(poolObject);
  if (usedIndex >= 0) {
    used.splice(usedIndex, 1);
  }
}

function removeUnused() {
  objects = objects.filter(obj => used.indexOf(obj) < 0);
}

exports.setMaxSize = setMaxSize;
exports.acquire = acquire;
exports.release = release;
exports.removeUnused = removeUnused;
