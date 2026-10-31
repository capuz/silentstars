---
repo: "petauron/vastora"
name: "vastora"
description: "Petauron Vastora — self-hosted private-cloud control plane for containerized applications"
readmeQualityOk: true
url: "https://github.com/petauron/vastora"
homepage: "https://petauron.com"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["container-management", "docker", "golang", "private-cloud", "react", "self-hosted", "sqlite", "vps"]
stars: 5
forks: 0
openIssues: 9
closedIssues: 103
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T12:48:57Z"
lastCommitAt: "2026-10-31T09:54:27Z"
lastReleaseAt: "2026-08-19T16:22:00Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 67
maintainers: ["kuddy-on", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ad7c82cfd7abe84533b1761a760d834ff825bd99841cbac66a73d80c71baba8/petauron/vastora"
---

# Vastora

Current route lifecycle: [startup-only readiness](https://github.com/petauron/vastora/blob/HEAD/docs/startup-readiness.md).
This supersedes the historical periodic-health lease behavior described below.

Vastora is a self-hosted desired-state control plane for applications
across multiple Sites and Nodes. The Center stores intent and orchestration
state; one Agent binary is the only node-side executor for Docker workloads,
verified native probes, and an optional local Caddy Gateway. Existing applications and applied routes continue
when the Center is unavailable.

> **Pre-alpha.** The repository is intentionally published only with working,
> tested building blocks. Do not use it to manage production workloads yet.

## What is implemented now

- A Go `vastora` CLI with a Center HTTP API, one-time Agent enrollment,
  authenticated Agent heartbeats and Agent-local encrypted credentials.
- Schema 4 catalog consumption from the pinned independent
  [petauron/catalog](https://github.com/petauron/catalog) module, with generic
  Docker/systemd execution contracts. Catalog signing/publishing tools belong
  to that repository, not the Vastora CLI. Production cutover remains…
