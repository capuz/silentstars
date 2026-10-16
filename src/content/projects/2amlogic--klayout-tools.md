---
repo: "2AMLogic/klayout-tools"
name: "klayout-tools"
description: "Tools for AI agents to work with IC layout (GDSII/OASIS via KLayout)"
readmeQualityOk: true
url: "https://github.com/2AMLogic/klayout-tools"
homepage: "https://klayout-tools.org"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [62, 33]
stars: 5
forks: 2
openIssues: 241
closedIssues: 1635
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-07-28T20:56:04Z"
lastCommitAt: "2026-10-16T08:26:23Z"
lastReleaseAt: "2026-09-15T02:19:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 73
maintainers: ["loom-fleet-dispatch[bot]", "rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/66cdbf0787985f9c8d1c54387ef43cac26d640894e755a153889f8de38dc9bf3/2AMLogic/klayout-tools"
---

# klayout-tools

**Tools for AI agents to work with IC layout.**

🌐 **[klayout-tools.org](https://klayout-tools.org)** — project site.

The [kicad-tools](https://github.com/rjwalters/kicad-tools) playbook, one
layer down the stack: standalone Python tools that let AI agents (LLMs,
autonomous coding assistants) parse, analyze, and manipulate chip layouts —
GDSII/OASIS streams, DRC decks, LVS — programmatically, headless, with
machine-readable JSON everywhere. Built on [KLayout](https://www.klayout.de)'s
Python API the way kicad-tools builds on KiCad's file formats: the heavy
lifting stays in the proven engine; the agent-native surface is ours.

The target capability: **an agent can take a spec through one of three
peer paths on an open PDK, unaided, with every step headless and
JSON-contracted — analog (spec → schematic/generator → sized circuit →
layout → DRC/LVS clean → extracted netlist → simulation-verified),
digital (spec → RTL → synthesis → place-and-route → DRC/LVS clean →
timing-closed), and mixed-signal (both paths plus the signoff seam
between them).** [ROADMAP.md](https://github.com/2AMLogic/klayout-tools/blob/HEAD/ROADMAP.md) holds the build order,…
