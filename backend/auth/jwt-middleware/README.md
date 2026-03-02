# JWT Authentication Middleware

## What it does

Protects API routes by validating JWT tokens from the Authorization header.

## Installation

```bash
npm install jsonwebtoken
```

## Usage

```js
const authMiddleware = require("./jwtMiddleware");

app.get("/protected", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});
```

## Expected Header

```
Authorization: Bearer <token>
```

## Notes

- Requires `process.env.JWT_SECRET`.
- Attach before protected routes.