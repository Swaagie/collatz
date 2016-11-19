mod lib;

fn main() {
  for i in 1..200000 {
    println!("{} has {} Collatz steps", i, lib::collatz(i));
  }
}
