---
repo: "wycliffRotich-dev/aethergrid"
name: "aethergrid"
description: "Open-source distributed AI workload orchestration. Schedule jobs across distributed workers, coordinate execution through time-bound leases, enforce tenant isolation, and recover reliably from worker failures and stale state."
readmeQualityOk: true
url: "https://github.com/wycliffRotich-dev/aethergrid"
homepage: "https://aethergrid.co.ke/"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["ai", "clean-architecture", "distributed-systems", "domain-driven-design", "fastapi", "orchestration", "postgresql", "python", "react", "scheduler"]
stars: 19
forks: 25
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-02T10:47:07Z"
lastCommitAt: "2026-11-22T11:49:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 62
maintainers: ["wycliffRotich-dev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a413d78784aa4473ca847c05ea7cabe98b6b08b9cd3a4d9efb58a898d5e4ed3d/wycliffRotich-dev/aethergrid"
---

AetherGrid is the control plane for AI workloads. It places work on the compute you already own, and it keeps one rule under failure: a job has one owner at a time, held through a time-bound lease.

AetherGrid takes workloads, matches them against available compute nodes by resource requirements and constraints, and manages the full lifecycle: queued, scheduled, running, completed, failed, retried and cancelled. It is built for teams that run AI under audit, where a job that runs twice, a tenant that reads another tenant's data, or an upgrade that loses a row is an incident and not a bug.
