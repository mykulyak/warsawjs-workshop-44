// init
const {initialize } = require('./2_singleton');

initialize(() => ({ data: new Array(1000000).fill(3) }));

// usage

const { getInstance } = require('./2_singleton');

const inst1 = getInstance();
const inst2 = getInstance();

console.log(inst1 === inst2);
