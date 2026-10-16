---
repo: "Divkix/Logwell"
name: "Logwell"
description: "Self-hosted logging platform with real-time streaming, full-text search, and OTLP-compatible ingestion. Deploy in minutes, own your data."
readmeQualityOk: true
url: "https://github.com/Divkix/Logwell"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["log-ingestion", "logging", "otlp", "postgresql", "self-hosted"]
stars: 44
forks: 1
openIssues: 0
closedIssues: 30
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-01T17:08:39Z"
lastCommitAt: "2026-10-16T08:26:20Z"
lastReleaseAt: "2026-01-14T16:14:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["Divkix", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1126327903/4ea96996-84eb-41aa-8fd7-b5dfddfb4015"
---

---

## What is Logwell?

Logwell is a lightweight, self-hosted log aggregation platform for developers who want structured logging without the complexity of ELK or the costs of cloud services.

**Use Logwell when you need:**

- A simple logging backend for your side project or startup
- Full-text search across logs without managing Elasticsearch
- Real-time log streaming during development and debugging
- Complete data ownership with no vendor lock-in

**Logwell is NOT for:**

- High-volume production systems (10k+ logs/second) — use Loki or Clickhouse
- Teams needing RBAC, audit trails, or compliance features — use a managed service
- Distributed tracing or metrics — Logwell is logs-only

## Features

- **OTLP-native ingestion** — Standard OpenTelemetry protocol, no proprietary SDKs required
- **PostgreSQL backend** — Full-text search via tsvector, no separate search cluster needed
- **Real-time streaming** — SSE-powered live log tailing with batching
- **Incident intelligence** — Error/fatal fingerprinting with incident timeline and correlation hints
- **Project isolation** — Per-project API keys with separate log streams
- **Zero telemetry** — No phone-home, no tracking, fully…
