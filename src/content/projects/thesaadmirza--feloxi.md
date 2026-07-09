---
repo: "thesaadmirza/feloxi"
name: "feloxi"
description: "Real-time Celery task queue monitoring — Rust/Axum backend, Next.js dashboard, ClickHouse analytics"
readmeQualityOk: true
url: "https://github.com/thesaadmirza/feloxi"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [56, 40]
stars: 32
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-03-05T00:01:36Z"
lastCommitAt: "2026-07-09T20:47:48Z"
lastReleaseAt: "2026-06-09T21:47:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["thesaadmirza"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf3928769bb4e44ca492cc269446396b8eb339d83b9c4d8f07d3106c2acc2d06/thesaadmirza/feloxi"
---

</p>

<h1 align="center">Feloxi</h1>

  <strong>Self-hosted monitoring for Python task queues.</strong><br/>
  Live dashboards, searchable task history, and alerting that fires.
</p>

</p>

---

  </a>
  <br/>
  <sub><a href="https://youtu.be/rcOrdcSi4gE">▶ Watch the walkthrough on YouTube</a></sub>
</p>

</p>

Feloxi is a self-hosted Celery monitoring platform. It connects to your broker (Redis or RabbitMQ), reads the events Celery already emits, and stores them in ClickHouse so they outlive a restart. The dashboard runs on WebSocket for live updates. There's no agent to install and no SDK to integrate.

## What you can do

### Find any task

Full-text search across task ID, name, args, kwargs, result, and exception. Filter by state, queue, worker, and time range. Click any task for the state timeline, traceback, runtime, retries, and retry/revoke actions sent through the broker. Switch to the failures view to see exceptions grouped by type — one row per unique exception with occurrence counts, affected task names, and an expandable traceback.

</p>

### Watch worker health

CPU, memory, pool size, active task counts, and heartbeat gaps. Load averages over 1m/5m/15m. Remote…
