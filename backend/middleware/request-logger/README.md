# Request Logger Middleware

## What it does

Logs incoming HTTP requests along with response status and execution time.

## Usage

```js
const requestLogger = require("./requestLogger");

app.use(requestLogger);
```

## Example Log

```
GET /api/users 200 - 12ms
```

## Notes

- Useful for debugging and monitoring.
- Can be extended to write logs to files or logging services.