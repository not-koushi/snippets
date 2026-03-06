# Secure Random Token Generator

## What it does

Generates cryptographically secure random tokens.

Useful for:

- password reset tokens
- API keys
- session identifiers

## Usage

```js
const generateToken = require("./generateToken");

const token = generateToken();
console.log(token);
```

## Notes

Uses Node.js `crypto.randomBytes` for secure randomness.