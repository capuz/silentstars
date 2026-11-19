---
repo: "ccomb/volca"
name: "volca"
description: "Fast open-source LCA engine with API, Python library, CLI, MCP."
readmeQualityOk: true
url: "https://github.com/ccomb/volca"
homepage: "https://volca.run"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [90]
topics: ["api", "environmental-data", "haskell", "lca", "lci", "lcia", "life-cycle-assessment", "mcp", "open-source", "python"]
stars: 12
forks: 2
openIssues: 4
closedIssues: 23
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-12T22:02:17Z"
lastCommitAt: "2026-11-19T11:57:08Z"
lastReleaseAt: "2026-05-29T12:09:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 72
maintainers: ["ccomb", "backkem"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1095309995/3d2630c1-d5ad-4073-9d53-c6a1d6685a58"
discussionCount: 0
---

# VoLCA

**VoLCA** is a Life Cycle Assessment engine that turns LCA databases into inspectable, queryable answers – fast.

It loads EcoSpold2, EcoSpold1, SimaPro CSV, ILCD process, openLCA JSON-LD, and Brightway Excel databases, builds supply chain dependency trees, computes life cycle inventories using sparse matrix algebra, and applies characterization methods for impact assessment. Everything runs in-memory against your own data.

## What It Does

- **Browse** activities and flows across multiple databases
- **Explore** supply chain trees, force-directed dependency graphs, downstream consumers, shortest-path routing, and supply chain analysis by sector classification
- **Compute** life cycle inventories (LCI) and impact scores (LCIA) – single method or whole collection – with per-flow and per-activity contribution breakdowns
- **What-if substitutions** – swap an upstream activity (or a cross-database supplier) and recompute inventory and impacts in a single call
- **Normalize and weight** LCIA results; a single score in Pt for every scoring set, whether a SimaPro method file brings it or the configuration declares it
- **Map** method characterization factors to database flows…
