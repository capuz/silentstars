---
repo: "DmitryNFomin/pg_wait_tracer"
name: "pg_wait_tracer"
description: "BPF-based PostgreSQL wait event tracer using hardware watchpoints"
readmeQualityOk: true
url: "https://github.com/DmitryNFomin/pg_wait_tracer"
language: "C"
languages: ["C", "Python"]
languagePcts: [48, 29]
stars: 46
forks: 6
openIssues: 158
closedIssues: 155
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-02-20T16:46:00Z"
lastCommitAt: "2026-10-25T22:11:30Z"
lastReleaseAt: "2026-10-23T17:21:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 40
maintainers: ["DmitryNFomin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cd282884b8f7b9ac0d4001e0f2a91594f683bd2b42c0bc5c056a8d0f704df29/DmitryNFomin/pg_wait_tracer"
discussionCount: 1
---

# pg_wait_tracer

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
(5/5 events, every rate, every run measured) — but its CPU-share estimate still
runs low, by a tenth to a quarter, after the
[read-order bias](https://github.com/DmitryNFomin/pg_wait_tracer/issues/294)
that used to account for most of it was fixed. See [Cross-validation: sampling
vs…
