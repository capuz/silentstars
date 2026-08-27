---
repo: "zookanalytics/gc-toolkit"
name: "gc-toolkit"
description: "A Gas City pack with custom agents, formulas, and planning workflows, extending gastown"
readmeQualityOk: true
url: "https://github.com/zookanalytics/gc-toolkit"
language: "Shell"
languages: ["Shell"]
languagePcts: [74]
topics: ["ai-agents", "gastown", "gc", "multi-agent", "pack", "gas-city"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-11T04:40:29Z"
lastCommitAt: "2026-08-27T14:25:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["zook-bot", "johnzook"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8017f42d2d9dba1b478c0e033c28ade25d12f1c14a71905c3e60e575af9e2b8/zookanalytics/gc-toolkit"
---

# gc-toolkit

A pack for [Gas City](https://github.com/gastownhall/gascity), the multi-agent
runtime. gc-toolkit gets work done by relentlessly focusing on high-bandwidth
human interaction: agents do the cheap work before they interrupt, the surface
makes judgment easier rather than transferring work back to the operator, and
every lesson compounds into the pack so attention is never spent twice
([docs/foundation.md](https://github.com/zookanalytics/gc-toolkit/blob/HEAD/docs/foundation.md) is the charter).

The pack is its workflows. Every component belongs to one of six:

| Workflow | What it does | Entry points |
|---|---|---|
| **work** | a filed bead becomes a pushed branch | `mol-polecat-work`, `lifecycle/lifecycle.toml`, `assets/scripts/lifecycle.sh` |
| **review** | a gate verdict lands on the anchor | polecat pools (cadence-routed via `REVIEW_POOL`), `formulas/mol-review.toml`, `assets/scripts/signoff.sh` |
| **merge** | gates green at the live head become a landed PR | `orders/refinery-reconcile.toml` + 5 arms ([docs/refinery-merge-cadence.md](https://github.com/zookanalytics/gc-toolkit/blob/HEAD/docs/refinery-merge-cadence.md)) |
| **visit** | a human decision is…
