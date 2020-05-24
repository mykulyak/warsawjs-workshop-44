function timeit(fn) {
  return function (...args) {
    const start = Date.now();
    const result = fn(...args);
    console.log(`Wykonal sie z argumentami ${args} za ${Date.now() - start} ms`);
    return result;
  }
}

function heavyCalculations(n) {
  let result = 0.0;
  for (let i = 0; i < n; i += 1) {
    result += Math.sqrt(i);
  }
  return result;
}

const timedHeavyCalculations = timeit(heavyCalculations);

console.log(timedHeavyCalculations(1000));
console.log(timedHeavyCalculations(1000000));
