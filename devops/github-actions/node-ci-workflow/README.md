# GitHub Actions CI (Node.js)

## What it does

Automatically installs dependencies, runs tests, and builds a Node.js project on every push or pull request to `main`.

## Usage

Place this file inside:
`.github/workflows/node-ci.yml`

## Features

- Runs on Ubuntu
- Tests against Node 18 and Node 20
- Executes install, test and build steps

## Notes

- Replace `npm test` and `npm run build` with project-specific scripts if needed.
- Extend with linting or Docker builds for production pipelines.