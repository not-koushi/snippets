# Rate Limiter Middleware

## What it does

Limits repeated API requests from the same IP address to prevent abuse and brute-force attacks.

## Installation

```bash
npm install express-rate-limit
```

## Usage

```js
const rateLimiter = require("./rateLimiter");

app.use(rateLimiter);
```

## Default Configuration

- 100 requests
- 15 minute window

## Notes

- Apply globally or per route.
- Useful for login and authentication endpoints.