# Password Hashing using bcrypt

## What it does

Securely hashes passwords and verifies them using bcrypt.

## When to use

User authentication systems or credential storage.

## Installation

```bash
npm install bcrypt
```

## Usage

```js
const { hashPassword, verifyPassword } = require("./hash");

const hash = await hashPassword("mypassword");
const valid = await verifyPassword("mypassword", hash);
```

## Security Notes

- Never store plaintext passwords.
- Use salt rounds ≥ 10.