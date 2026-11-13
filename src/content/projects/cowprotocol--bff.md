---
repo: "cowprotocol/bff"
name: "bff"
description: "Collection of typescript based services, mainly for the use of CoW Swap."
readmeQualityOk: true
url: "https://github.com/cowprotocol/bff"
homepage: "https://cow-web-services.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 10
closedIssues: 3
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2023-03-29T09:10:00Z"
lastCommitAt: "2026-11-13T10:25:53Z"
lastReleaseAt: "2024-05-17T15:11:03Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 63
maintainers: ["azebuado", "shoom3301", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de0f34d803ae50619a1d34651c420138b3a9f6d5ef9c4557ba8e753154383b83/cowprotocol/bff"
---

# BFF (Backend For Frontend)

Backend for frontend is a series of backend services and libraries that enhance user experience for the frontend.

## Getting Started

Install dependencies:

```bash
yarn
```

Create the `.env` file:

```bash
# If you are not using docker
cp .env.example .env

# If you are using docker (handy to launch a service directly using NX)
cp .env.example .env.docker
```

Start docker:

```bash
yarn compose:up
```

# Develop

## Notification Producer

See the [local notification stack guide](https://github.com/cowprotocol/bff/blob/HEAD/apps/notification-producer/README.md). It covers the producer, Telegram consumer, required services, environment variables, migrations, and verification without requiring the API or USD-price services.

## Create a new service or library

To add a new app or library, you can run the following command;

```bash
# New API
yarn new:fastify

# New Library
yarn new:lib

# New Node app
yarn new:node
```

For APIs and apps, it will create a Dockerfile. Please, remember to update:

- The `docker-compose.yml` file to include the new service.
- The github actions to include the new service (`.github/workflows/ci.yml`)

For more info, see:…
