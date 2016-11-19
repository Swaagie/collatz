const ffi = require('ffi');
const lib = ffi.Library('../rust/target/release/libcollatz', {
    collatz: ['int', ['int']]
});

for (let i = 1; i < 200000; i++) {
  console.log('%d has %d Collatz step', i , lib.collatz(i));
}
