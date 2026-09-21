---
repo: "railwayapp/docs"
name: "docs"
description: "Railway documentation"
readmeQualityOk: true
url: "https://github.com/railwayapp/docs"
homepage: "https://docs.railway.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 316
forks: 1110
openIssues: 22
closedIssues: 60
watchers: 13
contributors: 190
recentReleases: 0
createdAt: "2021-01-14T01:07:23Z"
lastCommitAt: "2026-09-21T09:14:41Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 45
maintainers: ["paulocsanz", "codyde", "dizzydes"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/329471963/aca06d00-56bb-11eb-8d77-777dde7ba912"
---

# Railway Documentation

This is the official documentation for [Railway](https://railway.com). You can view it at [docs.railway.com](https://docs.railway.com).

## Local Development

You'll need to have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) installed. You can then install dependencies and start the development server by running the following commands:

```bash
pnpm install
pnpm dev
```

Open [localhost:3001](http://localhost:3001) to see the docs.

### Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3001 |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm clean` | Remove build artifacts |

## Local Search Setup

Search is powered by Meilisearch. To test search functionality locally, you'll need Docker.

### Prerequisites

Copy the environment file to enable local search in the frontend:
```bash
cp .env.example .env.local
```

### Search Commands

| Command | Description |
|---------|-------------|
| `pnpm search:start` | Start the Meilisearch container |
| `pnpm search:stop` | Stop the Meilisearch container |
| `pnpm search:build` | Index local…
