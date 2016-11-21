const bindings = require('bindings');
const lib = bindings('addon');

for (let i = 1; i < 200000; i++) {
  console.log('%d has %d Collatz step', i , lib.collatz(i));
}
