---
repo: "wycliffRotich-dev/aethergrid"
name: "aethergrid"
description: "A decentralized compute orchestration platform powered by strict Domain-Driven Design (DDD). Decoupled domain core, event-driven state reconciliation, and zero-overhead cluster management."
readmeQualityOk: true
url: "https://github.com/wycliffRotich-dev/aethergrid"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["ai", "clean-architecture", "distributed-systems", "domain-driven-design", "fastapi", "orchestration", "postgresql", "python", "react", "scheduler"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-02T10:47:07Z"
lastCommitAt: "2026-09-20T08:45:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 54
maintainers: ["wycliffRotich-dev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/caced703d5db67b207382e04d8a524f05dbca6e82b6f62358a52e0aef9d57730/wycliffRotich-dev/aethergrid"
---

</p>

  A distributed AI workload orchestrator built around the problems that make scheduling hard at scale: exclusive execution ownership under failure, reconciliation after partial failures, and enforced resource limits. Not a CRUD tutorial with a scheduler theme.
</p>

</p>

AetherGrid takes workloads, matches them against available compute nodes based on resource requirements and constraints, and manages the full lifecycle: queued, scheduled, running, completed, failed, retried, cancelled. Jobs run through workers registered against nodes, and job execution ownership is enforced through time-bound leases rather than a simple assignment flag. Every route requires API key authentication, including the endpoint that issues keys.

  </a>
</p>

**Try it live**: the full console is deployed and reachable at [aethergrid-dashboard.onrender.com](https://aethergrid-dashboard.onrender.com) with real Postgres, real auth, and real API-key-gated endpoints.

---

## Why This Exists

Most scheduler side-projects are a single `main.py` script wrapped in a `while True` loop polling an in-memory dictionary. They work fine, right up until you need to swap the persistence engine, add a new…
