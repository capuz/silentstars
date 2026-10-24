---
repo: "rjwalters/kicad-tools"
name: "kicad-tools"
description: "Standalone Python tools for parsing and manipulating KiCad schematic and PCB files"
readmeQualityOk: true
url: "https://github.com/rjwalters/kicad-tools"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 72
forks: 10
openIssues: 24
closedIssues: 3761
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-29T21:23:25Z"
lastCommitAt: "2026-10-24T00:15:03Z"
lastReleaseAt: "2026-01-05T05:22:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 44
maintainers: ["rjwalters", "loom-fleet-dispatch[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea672ec5e1a76b529112f2849e6f06c965e105736283891959030d13b33a0578/rjwalters/kicad-tools"
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

Whether you're building an AI assistant that reviews PCB designs, automating DRC checks in CI, or…
