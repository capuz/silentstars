---
repo: "CarlosGude/integrationEngine"
name: "integrationEngine"
description: "Connect external APIs to Symfony through configurable adapters, without writing repetitive clients."
readmeQualityOk: true
url: "https://github.com/CarlosGude/integrationEngine"
homepage: "https://integrationengine.dev/"
language: "PHP"
languages: ["PHP"]
languagePcts: [87]
topics: ["api-client", "bundle", "ddd", "hexagonal-architecture", "http-client", "integration", "php", "php8", "symfony", "symfony-bundle"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-30T22:18:34Z"
lastCommitAt: "2026-09-18T14:04:21Z"
lastReleaseAt: "2026-06-01T11:39:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 44
maintainers: ["CarlosGude"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f1b7df56898c6090e4831e1a86048856a44a5cdbcad59bdb7cf124c180f6b35/CarlosGude/integrationEngine"
discussionCount: 1
---

# IntegrationEngine

**Website:** [integrationengine.dev](https://integrationengine.dev)  
**Status:** v5.2.0 Live — Lifecycle Events + Observability  
**Roadmap:** [See public roadmap](https://github.com/CarlosGude/integrationEngine/blob/HEAD/ROADMAP.md) — Now/Next/Later, no dates, transparent progress.

**✨ v5.2.0 Features:**
- ✅ **Lifecycle events** (ActionStarted, ActionCompleted, ActionFailed)
- ✅ Built-in event dispatcher + Symfony EventDispatcher adapter
- ✅ `ObservabilitySetup` helper for instant logging + metrics + alerting
- ✅ Examples: custom logging, Prometheus metrics, Sentry integration, audit trails
- 🔗 [Quick setup: OBSERVABILITY.md](https://github.com/CarlosGude/integrationEngine/blob/HEAD/OBSERVABILITY.md) (recommended)
- 🔗 [Deep dive: LIFECYCLE.md](https://github.com/CarlosGude/integrationEngine/blob/HEAD/LIFECYCLE.md)

**v5.1.0 Features:**
- ✅ **Inbound webhook framework** (Shopify, WooCommerce, extensible)
- ✅ HMAC signature verification per platform
- ✅ Idempotency & replay protection (24h fingerprint window)
- ✅ Dead-letter queue for failed webhooks
- ✅ State machine & immutable audit trail
- ✅ Async processing via Symfony Messenger
- ✅ Multi-platform…
