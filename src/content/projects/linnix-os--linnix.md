---
repo: "linnix-os/linnix"
name: "linnix"
description: "eBPF-powered Linux observability with AI incident detection. AGPL-3.0 licensed."
readmeQualityOk: true
url: "https://github.com/linnix-os/linnix"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["ai", "ebpf", "monitoring", "observability", "rust"]
stars: 249
forks: 15
openIssues: 5
closedIssues: 6
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-11-01T03:42:34Z"
lastCommitAt: "2026-08-23T04:08:38Z"
lastReleaseAt: "2025-11-26T05:24:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 30
maintainers: ["parth21shah", "mavimo", "parth-rs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1087505951/29f1c23d-fdb7-4daa-956d-5a5372ed6570"
discussionCount: 5
---

# Linnix

**Find which process is hurting your SLOs — not just who's using CPU, but who's causing stalls.**

---

## The Problem

`top` shows 80% CPU. Prometheus shows high latency. But *which pod* is actually stalling your payment service?

Linnix uses **eBPF** + **PSI (Pressure Stall Information)** to answer this. PSI measures actual stall time — not usage, but contention. A pod using 40% CPU with 60% PSI is worse than one using 100% CPU with 5% PSI.

**What Linnix detects:**
- **Noisy Neighbors**: Which container is starving others
- **Fork Storms**: Runaway process creation before it crashes the node
- **Stall Attribution**: "Pod X caused 300ms stall to Pod Y" — exposed as a Prometheus counter keyed on the offender/victim pair
- **PSI Saturation**: CPU/IO/Memory pressure that doesn't show in `top`

> [!IMPORTANT]
> **Monitor-only by default.** Linnix detects and reports — it never takes action without explicit configuration.

> [!NOTE]
> **We tell you when attribution is degraded.** If eBPF can't attach (unsupported kernel, missing BTF), Linnix keeps serving PSI from `/proc/pressure` — pressure exists, but you lose *who caused it*, the reason you installed Linnix. `/readyz`…
