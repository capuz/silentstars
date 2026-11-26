---
repo: "oaslananka/kicad-mcp-pro"
name: "kicad-mcp-pro"
description: "MCP server for KiCad, connecting AI agents to schematic and PCB workflows, ERC/DRC validation, DFM checks, BOM analysis, and manufacturing preparation—with controlled edits and human-gated release workflows."
readmeQualityOk: true
url: "https://github.com/oaslananka/kicad-mcp-pro"
homepage: "https://oaslananka.github.io/kicad-mcp-pro/"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["ai-agent", "bom", "dfm", "drc", "eda", "eda-automation", "electronics", "erc", "kicad", "manufacturing"]
stars: 242
forks: 43
openIssues: 25
closedIssues: 357
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2026-05-31T23:45:08Z"
lastCommitAt: "2026-11-26T23:36:59Z"
lastReleaseAt: "2026-07-01T00:37:15Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 30
maintainers: ["oaslananka", "oaslananka-ops[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1255527274/066a5c46-4458-4b17-879d-88b757710a4a"
fundingLinks: ["GITHUB:https://github.com/oaslananka", "PATREON:https://patreon.com/oaslananka", "BUY_ME_A_COFFEE:https://buymeacoffee.com/oaslananka"]
discussionCount: 1
---

KiCad MCP Pro is a Model Context Protocol server for KiCad EDA workflows. It exposes tools, resources, and prompts for schematic, PCB, validation, DFM, and manufacturing export automation.

The server now starts with the bounded `default` profile: 25 read-only review tools instead of the complete expert catalog. Use `build` with write mode for controlled edits, `release` with manufacturing mode for human-gated handoff, or `expert`/`full` only for advanced trusted clients. Current catalog counts and context-size estimates come from [`docs/evidence/progressive-disclosure-profile-snapshot.json`](https://github.com/oaslananka/kicad-mcp-pro/blob/HEAD/docs/evidence/progressive-disclosure-profile-snapshot.json); see [`docs/agents/progressive-disclosure.md`](https://github.com/oaslananka/kicad-mcp-pro/blob/HEAD/docs/agents/progressive-disclosure.md).
