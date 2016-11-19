for (let i = 1; i < 200000; i++) {
  console.log('%d has %d Collatz step', i , collatz(i));
}

function collatz(i) {
  if (i === 1) return 0;

  switch (i % 2) {
    case 0: return 1 + collatz(i/2);
    default: return 1 + collatz(i*3+1);
  }
}
