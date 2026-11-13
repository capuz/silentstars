---
repo: "DmitryNFomin/pg_wait_tracer"
name: "pg_wait_tracer"
description: "BPF-based PostgreSQL wait event tracer using hardware watchpoints"
readmeQualityOk: true
url: "https://github.com/DmitryNFomin/pg_wait_tracer"
language: "C"
languages: ["C", "Python"]
languagePcts: [46, 29]
stars: 47
forks: 7
openIssues: 220
closedIssues: 274
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2026-02-20T16:46:00Z"
lastCommitAt: "2026-11-13T18:00:36Z"
lastReleaseAt: "2026-10-23T17:21:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 42
maintainers: ["DmitryNFomin"]
openGraphImageUrl: "https://opengraph.githubassets.com/160e026bc95c6fd670663533d6a18b1b3c8b6ab0bb1c170a511b9fd84ed83bd2/DmitryNFomin/pg_wait_tracer"
discussionCount: 1
---

# pg_wait_tracer

> **Working on this repository after 2026-11-10?** `docs/HANDOVER_2026-11-10.md`
> is the handover: open release blockers, open PRs, the decisions left unmade,
> and where the measurement evidence lives. `docs/OPERATING_MODEL.md` describes
> how the work was run.

Real-time, **tiered** PostgreSQL wait event tracer.

pg_wait_tracer attaches to a running PostgreSQL cluster and observes wait
events across all backends. It requires no PostgreSQL patches, no extensions,
and no restarts.

It runs in **two tiers** (default `--mode tiered`):

- An always-on, low-overhead **sampled** tier (ASH-style, pure userspace via
  `process_vm_readv` — ~0% impact on PostgreSQL) that you leave running 24/7.
- On-demand or anomaly-triggered **escalation** to the exact
  **hardware-watchpoint** tier, which captures every `wait_event_info`
  transition with nanosecond precision during bounded, budgeted windows.

This gives you Active Session History continuously, plus exact, every-transition
detail exactly when you need it — without paying the watchpoint overhead all the
time. The sampler's top-5 wait-event *ranking* matches the exact tier's
(5/5 events, every rate, every run measured)…
