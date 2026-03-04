use rand::{distributions::Alphanumeric, Rng};
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    let length: usize = if args.len() > 1 {
        args[1].parse().unwrap_or(16)
    } else {
        16
    };

    let password: String = rand::thread_rng()
        .sample_iter(&Alphanumeric)
        .take(length)
        .map(char::from)
        .collect();

    println!("Generated password: {}", password);
}