---
repo: "h-d-engineer/OpenEMT"
name: "OpenEMT"
description: "The electromagnetic transient simulator built for AI agents"
readmeQualityOk: true
url: "https://github.com/h-d-engineer/OpenEMT"
homepage: "https://h-d-engineer.github.io/OpenEMT/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [51, 49]
topics: ["agpl", "ai-agents", "emt", "mcp", "power-systems", "simulation"]
stars: 5
forks: 5
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-08T17:45:14Z"
lastCommitAt: "2026-11-15T11:23:30Z"
lastReleaseAt: "2026-08-09T21:23:06Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 38
maintainers: ["h-d-engineer"]
openGraphImageUrl: "https://opengraph.githubassets.com/984ce7b75b423dc9116135ee2eb50bdce419eff992e6a0d6e0a7150589d7c24f/h-d-engineer/OpenEMT"
---

# OpenEMT

**The electromagnetic transient simulator built for AI agents.**

OpenEMT is an EMT (electromagnetic transient) simulator for power systems: an
EMTP-style trapezoidal nodal solver with a positive-sequence power flow, a
36-block catalog spanning lines, transformers, machines, converters and
protection, breaker switching events, and single-phase, 3-phase and DC studies.

What makes it different is that the solver core is **pure and deterministic,
and has three coequal frontends**. Humans get a drag-and-drop canvas in a
single self-contained HTML file, with no install and no server. Scripts and CI
get a CLI. Agents get an MCP server whose tool schemas are generated from the
block catalog itself, so an agent always sees the true parameter space rather
than a hand-maintained summary of it. All three call the same `simulate()` and
`solvePowerFlow()`. An agent can enumerate the physics catalog, build a
circuit, solve it, and query results by stable block ID: the same loop an
engineer runs in the canvas, not a wrapper bolted onto one.

Maturity: **beta, v0.1.1.** The block models are averaged and simplified by
design (the concept-validation layer that runs *before* anyone opens…
