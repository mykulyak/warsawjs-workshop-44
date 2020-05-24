const pool = require('./3_pool');

pool.setMaxSize(2);

const obj1 = pool.acquire();
console.log(obj1);

const obj2 = pool.acquire();
console.log(obj2);

try {
  const obj3 = pool.acquire();
  console.log(obj3);
} catch (err) {
  console.log(`Error: ${err.message}`);
}

pool.release(obj1);

pool.removeUnused();

const obj4 = pool.acquire();
console.log(obj4);
