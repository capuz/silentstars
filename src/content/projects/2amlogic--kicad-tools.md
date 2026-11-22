---
repo: "2AMLogic/kicad-tools"
name: "kicad-tools"
description: "Standalone Python tools for parsing and manipulating KiCad schematic and PCB files"
readmeQualityOk: true
url: "https://github.com/2AMLogic/kicad-tools"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 77
forks: 10
openIssues: 82
closedIssues: 4534
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-29T21:23:25Z"
lastCommitAt: "2026-11-22T02:14:45Z"
lastReleaseAt: "2026-01-05T05:22:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["rjwalters", "loom-fleet-dispatch[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/31554b598a284465c56e3269373e5b2fd304326a1b18b056f902405a85271194/2AMLogic/kicad-tools"
---

# kicad-tools

**Tools for AI agents to work with KiCad projects.**

🌐 **Live demo gallery: [kicad-tools.org](https://kicad-tools.org)** — explore example boards built end-to-end by these tools, with 2D/3D renders, routing & manufacturing metrics, downloadable fabrication packages, and an interactive in-browser PCB viewer.

This project provides standalone Python tools that enable AI agents (LLMs, autonomous coding assistants, etc.) to parse, analyze, and manipulate KiCad schematic and PCB files programmatically. All tools output machine-readable JSON and require no running KiCad instance.

## Why Agent-Focused?

Traditional EDA tools require GUIs and manual interaction. `kicad-tools` bridges the gap by providing:

- **Structured data access** - Parse KiCad files into clean Python objects
- **Machine-readable output** - Analysis and query commands offer JSON output; check each command’s `--help` for supported formats
- **Programmatic modification** - Edit schematics and PCBs without a GUI
- **LLM reasoning interface** - Purpose-built module for LLM-driven PCB layout decisions
