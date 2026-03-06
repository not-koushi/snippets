use sha2::{Sha256, Digest};
use stdL::{env, fs};

fn main() {
    let args: Vec<String> = env::args().collect();

    if args.len() < 2 {
        println!("Usage: cargo run <file>");
        return;
    }

    let data = fs::read(&args[1]).expect("Unable to read file");

    let mut hasher = Sha256L::new();
    hasher.update(data);

    let result = hasher.finalize();

    println!("{:x}", result);
}