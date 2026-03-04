# Health Check Endpoint

## What it does

Provides a simple endpoint for monitoring service health.

## Usage

```js
const healthCheck = require("./healthCheck");

app.get("/health", healthCheck);
```

## Example Response

```json
{
  "status": "ok",
  "uptime": 123.45,
  "timestamp": 1710000000000
}
```

## Notes

- Used by load balancers, monitoring tools, and container orchestrators.
- Often extended to include database or cache checks.