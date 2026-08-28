---
repo: "drandyhaas/KiCadRoutingTools"
name: "KiCadRoutingTools"
description: "A set of Python/Rust tools to aid routing in KiCad"
readmeQualityOk: true
url: "https://github.com/drandyhaas/KiCadRoutingTools"
homepage: "https://hackaday.io/project/204891-kicad-automated-routing-tools"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["kicad", "pcb", "routing"]
stars: 363
forks: 53
openIssues: 49
closedIssues: 578
watchers: 12
contributors: 12
recentReleases: 6
createdAt: "2025-12-13T16:34:10Z"
lastCommitAt: "2026-08-28T14:33:05Z"
lastReleaseAt: "2026-06-18T00:26:30Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "community_hub"]
healthScore: 98
undervaluedScore: 36
maintainers: ["edgehero", "drandyhaas"]
openGraphImageUrl: "https://opengraph.githubassets.com/8074254f2839fcd11b4ec1f348524bdf307cd0b480b2c9a6f2bd813bdacaf3a4/drandyhaas/KiCadRoutingTools"
discussionCount: 22
---

</p>

# KiCad Routing Tools

A fast Rust-accelerated A* autorouter for KiCad PCB files. Compatible with **KiCad 9 and KiCad 10**. Available as both a **KiCad Plugin** with full GUI and a **Command-Line Interface** for scripting and automation.

</p>

## Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [KiCad Plugin](#kicad-plugin) — GUI, the AI **AI tab**, installation
- [Command-Line Interface](#command-line-interface) — routing, planes, verification
- [Documentation](#documentation) — full guide for every feature
- [Project Structure](#project-structure) & [Module Overview](#module-overview)
- [Performance](#performance)
- [Command Reference](#command-reference) — options per tool (full list: `--help` / [configuration.md](https://github.com/drandyhaas/KiCadRoutingTools/blob/HEAD/docs/configuration.md))
- [Requirements](#requirements) · [Limitations](#limitations) · [Contributing](#contributing) · [License](#license)

## Features

Fast, grid-based A\* routing with a native Rust core (~10× faster than pure Python): octilinear (H/V/45°) multi-layer routing with automatic vias, and batch routing with incremental obstacle caching. Highlights below link to the full…
