const getInstance = require('./2_singleton');

const inst1 = getInstance();
const inst2 = getInstance();

console.log(inst1 === inst2);
