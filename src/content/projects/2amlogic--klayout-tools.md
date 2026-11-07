---
repo: "2AMLogic/klayout-tools"
name: "klayout-tools"
description: "Tools for AI agents to work with IC layout (GDSII/OASIS via KLayout)"
readmeQualityOk: true
url: "https://github.com/2AMLogic/klayout-tools"
homepage: "https://klayout-tools.org"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [68, 28]
stars: 6
forks: 2
openIssues: 59
closedIssues: 2497
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-07-28T20:56:04Z"
lastCommitAt: "2026-11-07T15:43:55Z"
lastReleaseAt: "2026-09-15T02:19:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 66
maintainers: ["loom-fleet-dispatch[bot]", "rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe642deae7c030b61a50e09de1f17d76c33b667f2761848d082f358f32d4b5ad/2AMLogic/klayout-tools"
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
