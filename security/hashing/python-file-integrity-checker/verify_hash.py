import hashlib
import sys


def sha256_file(filepath):
    sha256 = hashlib.sha256()

    with open(filepath, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            sha256.update(chunk)

    return sha256.hexdigest()


if len(sys.argv) != 3:
    print("Usage: python verify_hash.py <file> <expected_hash>")
    sys.exit(1)

file_path = sys.argv[1]
expected_hash = sys.argv[2]

calculated_hash = sha256_file(file_path)

print("Calculated:", calculated_hash)
print("Expected:  ", expected_hash)

if calculated_hash == expected_hash:
    print("Integrity check: PASS")
else:
    print("Integrity check: FAIL")