---
repo: "galpt/infinity-scheduler"
name: "infinity-scheduler"
description: "Limit-inspired asymptotic EMA CPU-GPU scheduler"
readmeQualityOk: true
url: "https://github.com/galpt/infinity-scheduler"
language: "Shell"
languages: ["Shell", "Python", "C"]
languagePcts: [45, 31, 24]
stars: 40
forks: 2
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-23T19:52:55Z"
lastCommitAt: "2026-07-08T05:46:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 33
maintainers: ["galpt"]
openGraphImageUrl: "https://opengraph.githubassets.com/792320312063920b3b103dd0e7645f1a91e602daf11e779ce0194109598d414b/galpt/infinity-scheduler"
---

# infinity-scheduler (v4.6-gpu)

A fair-share CPU scheduler based on the limit concept in mathematics — every scheduling parameter approaches its bound asymptotically without discrete thresholds. Interactive tasks that sleep frequently naturally keep their budget while CPU-bound tasks converge toward a minimum, and real-time tasks get adaptive RR timeslices based on CPU burstiness. Built into CFS/EEVDF and RT with a focus on desktop interactivity.

```mermaid
flowchart TB
    classDef fair fill:#0000,stroke:#3b82f6,stroke-width:2
    classDef algo fill:#0000,stroke:#6366f1,stroke-width:2
    classDef wake fill:#0000,stroke:#14b8a6,stroke-width:2
    classDef rtN fill:#0000,stroke:#d97706,stroke-width:2
    classDef infra fill:#0000,stroke:#94a3b8,stroke-width:2

    subgraph FAIR["Fair tasks (SCHED_OTHER)"]
        TASK["Task"] --> GAUGE["EMA gauge\n───\n0 → BUDGET_MAX\nα = 2048–4096\n(scales with cpu_capacity)"]
        class GAUGE fair

        GAUGE --> WEIGHT["infinity_update_weight()\n───\nreweight_entity()\nweight = base × (100 - pct×98/100) / 100\nat EMA=100%: base × 2%"]
        class WEIGHT algo

        WEIGHT --> EEVDF["EEVDF\n───\ndeadline = vruntime +…
