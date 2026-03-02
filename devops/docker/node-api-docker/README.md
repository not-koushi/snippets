# Dockerized Node.js API

## What it does

Runs a minimal Express API inside a Docker container.

## Build & Run

```bash
docker compose up --build
```

## Test

Open:

```
http://localhost:3000
```

## Files

- Dockerfile — container configuration
- docker-compose.yml — service orchestration
- server.js — sample API

## Notes

- Useful starting point for containerized backend services.
- Extend with databases or reverse proxies.