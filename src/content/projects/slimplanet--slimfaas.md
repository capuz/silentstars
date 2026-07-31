---
repo: "SlimPlanet/SlimFaas"
name: "SlimFaas"
description: "SlimFaas : The slimmest and simplest Function As A Service"
readmeQualityOk: true
url: "https://github.com/SlimPlanet/SlimFaas"
homepage: "https://slimfaas.dev/"
language: "C#"
languages: ["C#"]
languagePcts: [86]
topics: ["function", "green", "kubernetes", "faas", "green-software", "library", "cncf-project"]
stars: 446
forks: 25
openIssues: 21
closedIssues: 64
watchers: 12
contributors: 24
recentReleases: 0
createdAt: "2023-03-06T14:10:52Z"
lastCommitAt: "2026-07-31T06:27:15Z"
lastReleaseAt: "2025-08-14T13:55:11Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 36
maintainers: ["guillaume-chervet", "Silthian", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/32bc5497c119d36457b4731a1615cb5c6c56870f099035acc79ea8617fc35669/SlimPlanet/SlimFaas"
---

</div>

  <h1>
  </h1>
</div>

# SlimFaas: The Slimmest, Simplest & Autoscaling-First Function-as-a-Service

SlimFaas is a lightweight, plug-and-play Function-as-a-Service (FaaS) platform for Kubernetes (and Docker-Compose / Podman-Compose).
It’s designed to be **fast**, **simple**, and **extremely slim** — with a very opinionated, **autoscaling-first** design:
- `0 → N` wake-up from HTTP history & schedules,
- `0 → N` wake-up from **Kafka lag** via the companion **SlimFaas Kafka** service,
- `N → M` scaling powered by PromQL,
- internal metrics store, debug endpoints, and scale-to-zero out of the box.
- built-in **User Interface** at the SlimFaas root address to see functions, jobs, queues, and real-time messages.
- temporary **Data Files** endpoints to ingest and stage binaries (from tiny to very large) with TTL-friendly storage — perfect for caching & agentic workflows.
- temporary **Data Sets** endpoints (`/data/sets`) to store small, Redis-like KV payloads (cache, JSON state, flags) with optional TTL — replicated through the cluster via a robust consensus layer.

> **Looking for MCP integration?**
> Check out **[SlimFaas MCP](https://slimfaas.dev/mcp)** — the companion…
