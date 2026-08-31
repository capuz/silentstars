---
repo: "adobe/spacecat-api-service"
name: "spacecat-api-service"
description: "Edge Delivery services experience success as a service automation: SpaceCat + Star Catalogue"
readmeQualityOk: true
url: "https://github.com/adobe/spacecat-api-service"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 10
forks: 15
openIssues: 41
closedIssues: 49
watchers: 28
contributors: 366
recentReleases: 0
createdAt: "2023-10-04T09:25:26Z"
lastCommitAt: "2026-08-31T09:54:20Z"
lastReleaseAt: "2023-12-06T06:53:52Z"
status: "watched"
tags: ["needs_contributors", "hidden_gem", "community_watch", "fork_magnet"]
healthScore: 90
undervaluedScore: 63
maintainers: ["semantic-release-bot", "byteclimber", "rainer-friederich"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbe468a01bc976ea696ead7033bffb8a89b94125defa58d2febb81f18ec3f44c/adobe/spacecat-api-service"
---

# SpaceCat API Service

> Provides an HTTP API to interact with SpaceCat data

## HTTP API Doc

https://opensource.adobe.com/spacecat-api-service/

### Semrush proxy (`/serenity/*`)

Server-side proxy in front of the Semrush AIO API. See [docs/serenity.md](https://github.com/adobe/spacecat-api-service/blob/HEAD/docs/serenity.md)
for the operator guide (auth flow, workspace resolution, error envelopes, smoke
runbook).

### Build documentation locally

```bash
$ npm run docs
```

### Serve the documentation locally

```bash
$ npm run docs:serve
```

## Installation

```bash
$ npm install @adobe/spacecat-api-service
```

## Usage

See the [API documentation](https://github.com/adobe/spacecat-api-service/blob/HEAD/docs/API.md).

## Development

### Prerequisites

- **Node.js** (see `.nvmrc` for version)
- **Docker Desktop** (or equivalent Docker daemon)
- **AWS CLI** + ECR access for the private `mysticat-data-service` image

### Option 1: Local PostgreSQL via Docker (Recommended)

The API service uses PostgreSQL + PostgREST as its data backend. The same Docker Compose stack used by integration tests can be used for local development.

#### 1. Authenticate Docker to ECR (first time /…
