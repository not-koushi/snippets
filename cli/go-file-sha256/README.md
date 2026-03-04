# Go SHA256 File Hasher

## What it does

Computes the SHA256 hash of a file using Go.

## Run

```bash
go run main.go example.txt
```

## Example Output

```
SHA256: 3a7bd3e2360a3d...
```

## Notes

- Uses Go’s built-in `crypto/sha256` package.
- Useful for verifying file integrity or download validation.