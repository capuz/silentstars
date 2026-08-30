---
repo: "matiaszanolli/ByroRedux"
name: "ByroRedux"
description: "Clean rebuild of the Gamebryo/Creation engine lineage in Rust + C++ with Vulkan"
readmeQualityOk: true
url: "https://github.com/matiaszanolli/ByroRedux"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["creation-engine", "ecs", "game-engine", "gamebryo", "linux", "rust", "vulkan"]
stars: 12
forks: 2
openIssues: 171
closedIssues: 3256
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-28T22:34:44Z"
lastCommitAt: "2026-08-30T00:33:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 50
maintainers: ["matiaszanolli"]
openGraphImageUrl: "https://opengraph.githubassets.com/37719d6b99630c6facf253fd214505685fdba7787c6430bf575c32c7ea54d738/matiaszanolli/ByroRedux"
---

</p>

# ByroRedux

A clean Rust + Vulkan rebuild of the Gamebryo / Creation engine lineage
(Oblivion → Starfield). Linux-first. Not a port — a ground-up rebuild
that understands the legacy architecture and builds modern equivalents.

*The Bannered Mare in Whiterun, loaded from `Skyrim.esm` + BSAs — RT multi-light on, though a few lighting glitches remain.*

*Anvil Heinrich Oaken Halls loaded directly from `Oblivion.esm` + meshes + textures BSAs — RT multi-light with ray-query shadows.*

*Prospector Saloon (Goodsprings) from `FalloutNV.esm` — streaming RIS
shadows on RTX 4070 Ti. Current entity count + bench numbers in
[ROADMAP Project Stats](https://github.com/matiaszanolli/ByroRedux/blob/HEAD/ROADMAP.md#project-stats) (refreshed per
`/session-close`).*

## At a glance

| | |
|-|-|
| **Games supported** | 7 — Oblivion · Fallout 3 · Fallout New Vegas · Skyrim SE · Fallout 4 · Fallout 76 · Starfield |
| **NIF parse rate** | 100% recoverable on all seven; per-game clean rates, sweep dates and residual truncation tails live in the [ROADMAP compatibility matrix](https://github.com/matiaszanolli/ByroRedux/blob/HEAD/ROADMAP.md#compatibility-matrix) — the single home for those figures. |…
