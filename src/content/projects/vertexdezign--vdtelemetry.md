---
repo: "VertexDezign/VDTelemetry"
name: "VDTelemetry"
description: "Export game state and visulize with custom Terminal Application"
readmeQualityOk: true
url: "https://github.com/VertexDezign/VDTelemetry"
language: "Kotlin"
languages: ["Kotlin", "Lua"]
languagePcts: [60, 40]
topics: ["fs25", "ls25", "gameglass"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 48
watchers: 2
contributors: 2
recentReleases: 3
createdAt: "2024-11-19T17:22:08Z"
lastCommitAt: "2026-09-15T08:55:26Z"
lastReleaseAt: "2026-09-11T19:16:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 83
maintainers: ["Grisu118", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2a8644463c3840b25e82c6c0bf88b4d8a0f36d23c107c166d28e4049ca397cf/VertexDezign/VDTelemetry"
---

# VDTelemetry

**Just want to run it?** → [Setup guide (English)](https://github.com/VertexDezign/VDTelemetry/blob/HEAD/docs/setup.en.md) ·
[Anleitung (Deutsch)](https://github.com/VertexDezign/VDTelemetry/blob/HEAD/docs/setup.de.md) · [Downloads](https://github.com/VertexDezign/VDTelemetry/releases)

A telemetry pipeline for **Farming Simulator 25**, in two parts:

- **[`vdTelemetry/`](https://github.com/VertexDezign/VDTelemetry/blob/HEAD/vdTelemetry/Readme.md)** — the in-game mod (Lua) that exports live game
  state to `vdTelemetry.json` and a set of sibling channel files, and takes commands back through a
  command channel.
- **[`VDTerminal/`](https://github.com/VertexDezign/VDTelemetry/blob/HEAD/VDTerminal/README.md)** — a Kotlin Multiplatform app that watches those files
  and renders a live web dashboard, on this machine or on a tablet or phone on the LAN.

The shared Kotlin model (`VDTerminal/shared/.../model/`) plus the `examples/json/` fixtures are
the contract between the two: changing the data shape means changing the Lua collectors and the
Kotlin model together, and refreshing the fixtures.

Requirements: the mod needs…
