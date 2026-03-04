# Python File Integrity Checker

## What it does

Verifies the SHA256 hash of a file to confirm its integrity.

## Usage

```bash
python verify_hash.py <file> <expected_sha256_hash>
```

## Example

```bash
python verify_hash.py download.zip a54d88e06612d820bc3be72877c74f257b561b19
```

## Example Output

```
Calculated: a54d88e06612d820bc3be72877c74f257b561b19
Expected:   a54d88e06612d820bc3be72877c74f257b561b19
Integrity check: PASS
```

## Notes

- Uses Python's built-in `hashlib` module.
- Reads the file in chunks to handle large files efficiently.