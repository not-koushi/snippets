# Global Error Handler (Express)

## What it does

Centralized error handling middleware for Express applications.

## Usage

```js
const errorHandler = require("./errorHandler");

app.use(errorHandler);
```

## Example Throw

```js
const error = new Error("Unauthorized");
error.statusCode = 401;
next(error);
```

## Notes

- Must be the last middleware registered.
- Prevents duplicated try/catch blocks.