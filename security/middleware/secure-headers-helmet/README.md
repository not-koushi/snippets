# Secure HTTP Headers Middleware (Helmet)

## What it does

Adds security-related HTTP headers to protect Express applications from common vulnerabilities.

## Installation

```bash
npm install helmet
```

## Usage

```js
const secureHeaders = require("./secureHeaders");

app.use(secureHeaders);
```

## What it protects against

- XSS attacks
- Clickjacking
- MIME sniffing
- Some CSRF-related vectors

## Notes

- Configure Content Security Policy (CSP) explicitly in production.
- Apply early in middleware chain.