---
repo: "docteur-turboss/trading-model"
name: "trading-model"
description: "Microservices-based AI trading architecture integrating multi-source data scraping, Transformer-based price prediction, and an autonomous Deep Reinforcement Learning trader, deployed under centralized supervision."
readmeQualityOk: true
url: "https://github.com/docteur-turboss/trading-model"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["algorithmic-trading", "artificial-intelligence", "market-prediction", "microservices", "trading-agent"]
stars: 8
forks: 3
openIssues: 41
closedIssues: 1525
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2025-11-02T00:31:39Z"
lastCommitAt: "2026-11-27T12:56:12Z"
lastReleaseAt: "2026-11-22T15:52:56Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 89
maintainers: ["VidharHorus", "Camille-Camomi", "docteur-turboss"]
openGraphImageUrl: "https://opengraph.githubassets.com/a776aa8986d0ab678fd0db09d08bb1789a4adf13f92a059ef146ffe375490d81/docteur-turboss/trading-model"
discussionCount: 1
---

# trading-model

Microservices-based AI trading platform. Ingests market data, trains autonomous agents via Genetic Algorithm + Deep Q-Learning, and routes inter-service messages through an internal pub/sub broker.

## Quick Start

```bash
git clone <repo-url> && cd trading-model
bun install --frozen-lockfile
cp .env.example .env   # then replace the example values, see below
docker compose up -d
```

Before the first `docker compose up`, replace the example secrets of `.env` with your own: the list is in [Quick Start, Step 0](https://github.com/docteur-turboss/trading-model/blob/HEAD/docs/getting-started/quickstart.md#step-0-create-env).

The Compose stack runs with `NODE_ENV=production` by default: without these values the gateway refuses to start.

> **Development only.** The Docker Compose stack has no scheduled backup: do not store real data in it. See [SETUP.md](https://github.com/docteur-turboss/trading-model/blob/HEAD/docs/deployment/SETUP.md#local-development-setup).

mTLS is automatic via SPIRE (ADR-0011) — no manual certificate generation.
