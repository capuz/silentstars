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
openIssues: 44
closedIssues: 187
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T14:13:21Z"
lastCommitAt: "2026-10-07T10:32:18Z"
lastReleaseAt: "2026-09-30T13:36:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 61
maintainers: ["shgew"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f1617705ec43c8a6f8777bed32231e72a0eeb290d9f5f757d6a2ebb448dab32/shgew/togi"
---

# togi

> [!WARNING]
> togi is pre-1.0. It writes Curve Optimizer offsets to your CPU through `ryzen_smu`, and finding each core's solo limit means running it until it fails: expect crashes, reboots and lost work in anything else running. A new version can refuse to continue a session written by an older one. Run it at your own risk.

Finds the deepest per-core Curve Optimizer offsets a Zen 5 desktop CPU sustains, then keeps testing them through full checking cycles. Choose how long to keep testing with `run --cycles N`, or let checking continue indefinitely.

- Searches each core alone, makes multi-core R7 cores self-sufficient through request-ordered partial loads and voltage-targeted backoffs, hunts unattributed failures outside multi-core R7, then deepens the profile before continuing checking.
- Tests with self-checking workloads (mprime, y-cruncher) across light, heavy, load-step, medium, SMT, idle and all-core regimes.
- Survives crashes: the next run reads its journal, attributes the crash and continues.
- Records every action in a plain-text journal you can read to see what it did and why.
- Reports the offsets; you enter them in BIOS.

*togi* (研ぎ) is Japanese for…
