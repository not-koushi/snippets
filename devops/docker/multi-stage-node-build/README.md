# Docker Multi-Stage Node Build

## What it does

Builds a Node.js application using a multi-stage Docker build to reduce final image size.

## Build Image

```bash
docker build -t my-node-app .
```

## Run Container

```bash
docker run -p 3000:3000 my-node-app
```

## Benefits

- Smaller final image
- Faster deployments
- Production-only dependencies