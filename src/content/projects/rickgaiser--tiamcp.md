---
repo: "rickgaiser/TiaMcp"
name: "TiaMcp"
description: "MCP server for Siemens TIA Portal"
readmeQualityOk: true
url: "https://github.com/rickgaiser/TiaMcp"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 27
forks: 7
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-09-15T12:50:09Z"
lastCommitAt: "2026-11-05T11:24:33Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 42
maintainers: ["rickgaiser", "raphpa", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c3349c24fc60ed1331cb27bc87ea464309dc37b65df3ee8271ea99adb177aff/rickgaiser/TiaMcp"
---

# TiaMcp

MCP server for Siemens TIA Portal V21+ projects — reads and writes directly to TIA Portal via the Openness API, designed for a fast, LLM- and human-friendly workflow.

Special features that make TiaMcp fast for LLM's and human-readable friendly:
- STL is read/written as text AWL
- PLC tables are converted to/from Excel-compatible CSV
- HMI tables are converted to/from Excel-compatible CSV
- HMI alarms are converted to/from Excel-compatible CSV
- GRAPH is converted to/from compact text DSL (Domain Specific Language)

## Format reference

| Format / Language | File extension(s) | Read | Write |
|---|---|---|---|
| SCL | `.s7dcl` / `.s7res` | Yes | Yes |
| FBD | `.s7dcl` / `.s7res` | Yes | Yes |
| LAD | `.s7dcl` / `.s7res` | Yes | Yes |
| Global DB (`DATA_BLOCK`) | `.s7dcl` / `.s7res` | Yes | Yes |
| GRAPH (S7-GRAPH/SFC) | `.graph.il` | Yes | Partial |
| Instance-DB | `.s7dcl` + read-only `.interface.txt` (resolved member list) | Yes | Create-only |
| STL (whole-block) | `.awl` | Yes | Yes |
| STL (embedded in mixed FBD/LAD/SCL block) | `.stl-networks.awl` (or `.stl-networks.xml` fallback) + `.s7dcl`/`.s7res` | Yes | Through `.xml` only |
| UDT (PLC data type) | `.s7dcl` /…
