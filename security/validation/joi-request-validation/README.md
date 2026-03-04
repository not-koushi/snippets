# Request Validation Middleware (Joi)

## What it does

Validates incoming request bodies using Joi schemas.

## Installation

```bash
npm install joi
```

## Example Schema

```js
const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
```

## Usage

```js
const validateRequest = require("./validateRequest");

app.post("/register", validateRequest(userSchema), handler);
```

## Notes

- Prevents invalid payloads from reaching application logic.
- Should be used before route handlers.