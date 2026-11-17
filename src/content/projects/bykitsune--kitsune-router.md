---
repo: "ByKitsune/kitsune-router"
name: "kitsune-router"
description: "Kitsune Router — Your models. Your routes. A provider-neutral, self-hosted AI gateway maintained by ByKitsune."
readmeQualityOk: true
url: "https://github.com/ByKitsune/kitsune-router"
homepage: "https://bykitsune.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-gateway", "ai-routing", "anthropic-compatible", "developer-tools", "javascript", "local-first", "model-routing", "nextjs", "openai-compatible", "provider-neutral"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 257
recentReleases: 10
createdAt: "2026-08-27T12:04:55Z"
lastCommitAt: "2026-11-17T14:37:25Z"
lastReleaseAt: "2026-09-20T06:41:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 70
maintainers: ["joyccn", "ortseam-88"]
openGraphImageUrl: "https://opengraph.githubassets.com/301dc27acf1409a9a1ac6eed9de3d6e9b8d0ae96fe73cdf7af49858c3c7b9538/ByKitsune/kitsune-router"
---

Kitsune Router connects coding tools, agents and SDKs to the providers **you choose** through a local dashboard and compatible APIs. Configure accounts, model combos, fallback, translation and usage tracking without a required ByKitsune account or a prescribed provider order. Requests still go to the upstreams you configure; local-first does not mean offline inference.

## Current source development

The [November 17 dependency and runtime audit](https://github.com/ByKitsune/kitsune-router/blob/HEAD/docs/audit/2026-11-17-dependency-runtime-audit.md)
covers the current dependency refresh, SQLite/OAuth resource bounds, video
cancellation, streamed tool consistency and Codex cache-lifetime support.
Client release metadata is reviewed separately from SDK/API/signature contracts;
a version header cannot establish provider entitlement or prevent an account ban.

The [upstream reconciliation](https://github.com/ByKitsune/kitsune-router/blob/HEAD/docs/audit/2026-11-17-upstream-reconciliation.md)
records selective fixes from the diverged 9Router history and actual issue
reports, including STT multipart, model selection/catalogs and tray readiness.

The source dashboard now uses locally…
