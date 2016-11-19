fn main() {
  for i in 1..200000 {
    println!("{} has {} Collatz steps", i, collatz(i));
  }
}

fn collatz(n: i64) -> i64 {
  if n == 1 { return 0 }

  match n % 2 {
	0 => { 1 + collatz(n/2) }
	_ => { 1 + collatz(n*3+1) }
  }
}
