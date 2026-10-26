---
repo: "nuetzliches/croniq"
name: "croniq"
description: "⚙️ Better Cron — distributed job scheduling platform built in Rust"
readmeQualityOk: true
url: "https://github.com/nuetzliches/croniq"
homepage: "https://nuetzliches.github.io/croniq/"
language: "Rust"
languages: ["Rust"]
languagePcts: [64]
topics: ["cron", "devops", "distributed-systems", "job-scheduler", "rust", "scheduler"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 244
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-02T21:55:07Z"
lastCommitAt: "2026-10-26T09:16:57Z"
lastReleaseAt: "2026-05-03T13:50:45Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 77
maintainers: ["7schmiede", "p-i-p", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea75a239de0a75215f0cb6765b5a6ba0de4db6edcec8a4822471fed26345787b/nuetzliches/croniq"
discussionCount: 0
---

# Croniq

**Distributed cron that just works.** Single binary. SQLite default. Production-ready retries.

Reliable distributed job scheduling with built-in retries, calendar-aware scheduling, a Vue dashboard, and an AI-native MCP server. Deploy as a single binary or Docker container — no cluster required.

Full API documentation: [`openapi.yaml`](https://github.com/nuetzliches/croniq/blob/HEAD/openapi.yaml)

---

## Why Croniq?

| Problem | Croniq |
|---|---|
| Cron jobs fail silently — nobody notices for days | Dead letter queue, execution logs, Prometheus metrics, failure notification hooks |
| Single server = single point of failure | Pull-based runner protocol — scale runners independently |
| No retries, no backoff, no timeout | Exponential, linear, fixed retry with jitter. Per-job timeout enforcement |
| Most schedulers need a cluster just to get started | Single binary, SQLite by default, Docker one-liner |
| Timezone and DST edge cases break everything | Per-job timezone, calendar system with business day rules |
| Teams can't self-service their own schedules | Hybrid model: Croniqfile DSL for ops, REST API + Runner SDK for developers |

## Who Is It For?

- **Small-to-mid…
