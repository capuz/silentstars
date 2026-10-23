---
repo: "sarathsp06/sparrow"
name: "sparrow"
description: " Self-hosted webhook delivery platform with async fan-out, HMAC signing, Go-template payload transforms, and automatic retries"
readmeQualityOk: true
url: "https://github.com/sarathsp06/sparrow"
homepage: "https://sarathsp06.github.io/sparrow/"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["webhooks"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-01T08:16:11Z"
lastCommitAt: "2026-10-23T12:04:34Z"
lastReleaseAt: "2026-05-01T16:48:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 49
maintainers: ["sarathsp06", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1735bd981057255d59db8570387a90f4bf8d0cd3bcdd423145fc18779ca0012e/sarathsp06/sparrow"
discussionCount: 1
---

# Sparrow

**Self-hosted webhook delivery. Retries, signing, health tracking, and a dashboard, with PostgreSQL as the only dependency.**

[Quick start](#quick-start) · [What you get](#what-you-get) · [Satellites](#satellites) · [Documentation](#documentation) · [Contributing](#contributing)

Sparrow sends your webhooks so you don't have to build the boring, hard parts: async fan-out, retries with backoff, Standard Webhooks signatures, per-endpoint health, full delivery history, and a consumer portal where your customers manage their own endpoints.

It is one Go binary with an embedded Svelte dashboard. No Redis, no broker, no sidecar workers. PostgreSQL holds the data and, through [River](https://riverqueue.com), the job queue too. Payloads never leave your network.

```text
your services ──▶ Sparrow API + dashboard ──▶ PostgreSQL + River ──▶ signed deliveries to subscribers
```

## Quick start

**Run it** with Docker Compose. No clone, no secrets, ready for local evaluation:

```bash
curl -O https://raw.githubusercontent.com/sarathsp06/sparrow/main/deploy/docker-compose.yml
docker compose up -d
```

Open <http://localhost:8080> for the dashboard and <http://localhost:8080/docs>…
