# Rust Random Password Generator

## What it does

Generates a secure random password using Rust.

## Run

```bash
cargo run -- 16
```

The number represents the password length.

## Example Output

```
Generated password: aB9x2Lk7QmT4Zp1C
```

## Notes

- Uses the `rand` crate for secure randomness.
- Default length is 16 characters if no argument is provided.