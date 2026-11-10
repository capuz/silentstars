---
repo: "shgew/togi"
name: "togi"
description: "Per-core Curve Optimizer tuning for Zen 5 desktop CPUs on NixOS"
readmeQualityOk: true
url: "https://github.com/shgew/togi"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["amd", "curve-optimizer", "go", "nixos", "ryzen", "undervolting", "zen5"]
stars: 5
forks: 1
openIssues: 27
closedIssues: 729
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T14:13:21Z"
lastCommitAt: "2026-11-10T11:39:00Z"
lastReleaseAt: "2026-09-30T13:36:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 67
maintainers: ["shgew", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b77176dc966284ad5808e63f90f277a742398a8a8f46ceba576c18c2874d7ca3/shgew/togi"
---

# togi

> [!WARNING]
> togi is pre-1.0. It writes Curve Optimizer offsets to your CPU through `ryzen_smu`, and mapping where each CCD fails means running it until it fails: expect crashes, reboots and lost work in anything else running. A new version can refuse to continue a session written by an older one. Run it at your own risk.

The goal is to find per-core Curve Optimizer offsets for a Zen 5 desktop CPU automatically. Today, togi tunes per CCD, as far as its own test evidence supports: nights test, days apply and observe. A night runs until you end it (Ctrl-C, F10 in the dashboard, or a reboot); a crash reboot continues it, and the next run after you end it opens the next night.

- Nights [map](https://github.com/shgew/togi/blob/HEAD/docs/spec/tuner.md#night-edge-u) each CCD's failure edge alone, derive each CCD's [cap](https://github.com/shgew/togi/blob/HEAD/docs/spec/tuner.md#cap-s-margin-from-measured-slope) from the measured failure rate and qualify the exact next day profile across the whole [coverage matrix](https://github.com/shgew/togi/blob/HEAD/docs/spec/workloads.md#coverage-matrix). No trial runs an all-zero profile: the `togi night` confirmation that the machine…
