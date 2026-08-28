---
repo: "Center-for-AI-Innovation/Illinois-Chat"
name: "Illinois-Chat"
description: "A self-hostable version of Illinois Chat"
readmeQualityOk: true
url: "https://github.com/Center-for-AI-Innovation/Illinois-Chat"
homepage: "https://chat.illinois.edu"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [62]
stars: 10
forks: 4
openIssues: 37
closedIssues: 27
watchers: 1
contributors: 33
recentReleases: 1
createdAt: "2024-05-07T19:16:04Z"
lastCommitAt: "2026-08-27T21:51:55Z"
lastReleaseAt: "2026-08-14T10:40:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 75
maintainers: ["max-zilla", "ckouder", "longshuicy"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b6c92d80605e8b09313954151d0c68164914f0488fbc80182fb024cb3f853dd/Center-for-AI-Innovation/Illinois-Chat"
---

# Illinois Chat

Illinois Chat is a self-hostable AI chat platform for building course, research, and organization-specific assistants over curated documents and web content.

This repository contains the full monorepo needed to run Illinois Chat locally or in a Docker-based self-hosted environment.

## What Is Included

- `apps/frontend`: Next.js web application.
- `apps/backend`: Flask API and ingest worker.
- `apps/crawlee`: Crawlee service for web crawling.
- `infra/docker`: Docker Compose files for full-stack and local-development runs.
- `infra/db`: Postgres schema and database configuration.
- `infra/keycloak`: Keycloak realm and theme assets.

## Prerequisites

- Docker and Docker Compose
- Python 3.10 or 3.11 for local backend development
- Node.js 20.19+ or 22.12+ for local frontend development

## Quickstart

Use the full Docker stack when you want the closest self-hosted or e2e environment. It starts the application services and all required infrastructure.

```bash
# First run (empty database): create the schema too
bash infra/scripts/start-all.sh --create-schema

# Later runs (database already initialized)
bash infra/scripts/start-all.sh
```

The script creates a…
