# AES-256 Encryption Utility

## What it does

Encrypts and decrypts data using AES-256-CBC symmetric encryption.

## Usage

```js
const { encrypt, decrypt } = require("./aes");

const encrypted = encrypt("secret data");
const decrypted = decrypt(encrypted);
```

## Notes

- Uses Node.js built-in `crypto` module.
- Store encryption key securely (environment variables or key vault).
- Do not regenerate keys per request in production.