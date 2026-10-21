---
repo: "home-operations/kromgo"
name: "kromgo"
description: "Build badges and graphs from PromQL and share them in your READMEs"
readmeQualityOk: true
url: "https://github.com/home-operations/kromgo"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["prometheus", "badges-markdown", "victoria-metrics", "graphs-markdown", "0ver", "kubernetes"]
stars: 162
forks: 8
openIssues: 1
closedIssues: 25
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2023-12-15T03:57:59Z"
lastCommitAt: "2026-10-21T21:15:56Z"
lastReleaseAt: "2024-08-16T22:18:20Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 43
maintainers: ["sticky-gecko[bot]", "renovate[bot]", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/fba42e6e95e5208e9d55e4a531ab238fba1293b8eef7349309202ab78d8b9cce/home-operations/kromgo"
---

# Kromgo

Safely expose individual Prometheus metric values to the public web. Define named endpoints backed by PromQL queries and serve them as SVG badges, themed SVG/PNG graphs, or JSON — without exposing your Prometheus instance directly.

Badges render as shields.io-style SVG, so you can embed `/badges/{id}` straight into an `<img>` tag — no shields.io round-trip required (though it's still supported via `?format=shields`).

## How it works

kromgo sits between the public web and your Prometheus. You define two kinds of endpoint:

- **Badges** (`/badges/{id}`) render an instant value as an SVG badge, shields.io JSON, or kromgo JSON.
- **Graphs** (`/graphs/{id}`) render a time series as a themed SVG/PNG chart or JSON.

Each maps a URL path to a PromQL query. Only the endpoints you define are reachable — Prometheus itself is never exposed.

The root path `/` serves a **gallery** that previews every endpoint next to its copy-paste Markdown snippet — handy for grabbing a badge for a README.

## Quick start

```bash
docker run -d \
  -e KROMGO_PROMETHEUS_URL=http://prometheus:9090 \
  -v /path/to/config.yaml:/config/config.yaml \
  -p 8080:8080 \…
