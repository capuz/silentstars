---
repo: "thedracospark-prog/Shepherd-"
name: "Shepherd-"
description: "RF Sensing platform"
readmeQualityOk: true
url: "https://github.com/thedracospark-prog/Shepherd-"
language: "Dart"
languages: ["Dart", "Python"]
languagePcts: [69, 23]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-05T20:13:54Z"
lastCommitAt: "2026-10-21T21:15:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["thedracospark-prog"]
openGraphImageUrl: "https://opengraph.githubassets.com/fef16e1947af416718c8d493f3801952fcb71901d3277c7b7ee5a1116531aa8f/thedracospark-prog/Shepherd-"
---

# Shepherd

**Device-free RF sensing — a tripwire observatory that sees objects moving through radio noise.**

Shepherd turns the RF links of a mesh radio network into a sensing field. When an object crosses a link, the link's signal dips; Shepherd polls each radio's telemetry, tracks every link against a rolling baseline, and flags disturbances as crossing events — then fuses them into tracks with estimated size, distance, speed, and heading. No cameras, no tags, nothing worn or carried. Just the RF field itself.

Built by **Draco**.

> **Status note — v0.17.0:** the v0.17.0 features (adaptive baseline, RTI imaging weights, ESP32 CSI pipeline, Doppler refinement, WPP-IDP passive radar, validation benches) are implemented and tested in CI, but **field validation is still pending** — they have not yet been proven against live targets. Treat v0.17.0 capabilities as experimental until field-tested.

## What it does

- **Alert-first dashboard** — big DETECTED / CLEAR banner, per-radio status cards, live link telemetry.
- **Tracking map** — draggable field map with per-node GPS positions, radio-tomographic shadow heatmap, and deterministic cross-network track solving (grid-search…
