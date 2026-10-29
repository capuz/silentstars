---
repo: "2AMLogic/klayout-tools"
name: "klayout-tools"
description: "Tools for AI agents to work with IC layout (GDSII/OASIS via KLayout)"
readmeQualityOk: true
url: "https://github.com/2AMLogic/klayout-tools"
homepage: "https://klayout-tools.org"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [66, 29]
stars: 6
forks: 2
openIssues: 80
closedIssues: 2270
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-07-28T20:56:04Z"
lastCommitAt: "2026-10-29T11:58:33Z"
lastReleaseAt: "2026-09-15T02:19:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 71
maintainers: ["loom-fleet-dispatch[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8661ec1bdc7afe0acfd9ab37849e98e297bb5e357743bb51375f8d9844d4097e/2AMLogic/klayout-tools"
postedAt: "2026-10-16T08:33:31.631Z"
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
