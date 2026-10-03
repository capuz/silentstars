---
repo: "shgew/togi"
name: "togi"
description: "Per-core Curve Optimizer tuning for Zen 5 desktop CPUs on NixOS"
readmeQualityOk: true
url: "https://github.com/shgew/togi"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["amd", "curve-optimizer", "go", "nixos", "ryzen", "undervolting", "zen5"]
stars: 5
forks: 0
openIssues: 43
closedIssues: 135
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T14:13:21Z"
lastCommitAt: "2026-10-03T22:03:29Z"
lastReleaseAt: "2026-09-30T13:36:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 95
undervaluedScore: 60
maintainers: ["shgew"]
openGraphImageUrl: "https://opengraph.githubassets.com/351dcfb9c90ddd07df19ef1f5622ea4e8aa7ac2b14cbfd922902bff76b05d77f/shgew/togi"
---

# togi

> [!WARNING]
> togi is pre-1.0. It writes Curve Optimizer offsets to your CPU through `ryzen_smu`, and finding each core's edge means running it until it fails: expect crashes, reboots and lost work in anything else running. A new version can refuse to continue a session written by an older one. Run it at your own risk.

Finds the deepest per-core Curve Optimizer offsets a Zen 5 desktop CPU sustains, then keeps testing them through qualifying guard rotations. Choose how long to keep testing with `run --rotations N`, or let guard continue indefinitely.

- Searches each core in isolation, hunts the cores behind unattributed failures, then refines the resident profile to the most total depth its marks allow before continuing guard.
- Tests with self-checking workloads (mprime, y-cruncher) across light, heavy, load-step, medium, SMT, idle and all-core regimes.
- Survives crashes: the next run reads its journal, attributes the crash and continues.
- Records every action in a plain-text journal you can read to see what it did and why.
- Reports the offsets; you enter them in BIOS.

*togi* (研ぎ) is Japanese for polishing a blade: coarse stones first, then fine ones, until the edge…
