# Graceful Shutdown (Node.js)

## What it does

Handles server shutdown signals and closes the server cleanly.

Useful for Docker containers and production services.

## Usage

```js
const http = require("http");
const gracefulShutdown = require("./gracefulShutdown");

const server = http.createServer(app);

server.listen(3000);

gracefulShutdown(server);
```

## Notes

- Handles `SIGINT` and `SIGTERM`
- Allows existing requests to finish
- Forces shutdown after 10 seconds if needed