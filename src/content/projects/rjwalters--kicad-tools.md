---
repo: "rjwalters/kicad-tools"
name: "kicad-tools"
description: "Standalone Python tools for parsing and manipulating KiCad schematic and PCB files"
url: "https://github.com/rjwalters/kicad-tools"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 34
forks: 2
openIssues: 6
closedIssues: 1957
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-29T21:23:25Z"
lastCommitAt: "2026-06-24T00:24:32Z"
lastReleaseAt: "2026-01-05T05:22:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 40
maintainers: ["rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/979bd6fba5d87cf25052d5b6b5a271674d1801eaf812ff1c1c52c9b733d2e889/rjwalters/kicad-tools"
---

# kicad-tools

**Tools for AI agents to work with KiCad projects.**

🌐 **Live demo gallery: [kicad-tools.org](https://kicad-tools.org)** — explore example boards built end-to-end by these tools, with 2D/3D renders, routing & manufacturing metrics, downloadable fabrication packages, and an interactive in-browser PCB viewer.

This project provides standalone Python tools that enable AI agents (LLMs, autonomous coding assistants, etc.) to parse, analyze, and manipulate KiCad schematic and PCB files programmatically. All tools output machine-readable JSON and require no running KiCad instance.

## Why Agent-Focused?

Traditional EDA tools require GUIs and manual interaction. `kicad-tools` bridges the gap by providing:

- **Structured data access** - Parse KiCad files into clean Python objects
- **Machine-readable output** - All CLI commands support `--format json`
- **Programmatic modification** - Edit schematics and PCBs without a GUI
- **LLM reasoning interface** - Purpose-built module for LLM-driven PCB layout decisions

Whether you're building an AI assistant that reviews PCB designs, automating DRC checks in CI, or experimenting with LLM-driven routing, these tools provide the…
