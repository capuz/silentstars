---
repo: "IntelligentElectron/universal-netlist"
name: "universal-netlist"
description: "Give AI agents the power to read Cadence, Altium, and KiCad designs"
readmeQualityOk: true
url: "https://github.com/IntelligentElectron/universal-netlist"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["altium", "cadence", "eda", "mcp", "netlist", "kicad", "schematic"]
stars: 70
forks: 14
openIssues: 1
closedIssues: 59
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-01-29T01:39:35Z"
lastCommitAt: "2026-11-25T03:21:10Z"
lastReleaseAt: "2026-01-30T07:19:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 45
maintainers: ["valentinozegna", "vzegnameta", "RuneSorensen"]
openGraphImageUrl: "https://opengraph.githubassets.com/018d0ac649455bedf4864b3c490380de16d57c4b15b6a6b6c7606a8b267f86ae/IntelligentElectron/universal-netlist"
---

# Universal Netlist MCP Server

The **Universal Netlist MCP Server** gives AI agents the tools to understand and analyze your electrical schematics, for powerful and comprehensive design reviews through natural conversations.

It reads Cadence, Altium, and KiCad design files directly on macOS, Linux, and Windows, with no Cadence or Altium installation and no EDA license required.

## Supported Formats

| Format | Input Files |
|--------|------------|
| Cadence (OrCAD / CIS) | `.DSN` schematic |
| Altium Designer | `.SchDoc` |
| KiCad | `.kicad_pro` (or root `.kicad_sch`) |
| Universal Netlist Format | `.netlist.json` |

## Install

Installing takes two steps: the `universal-netlist` binary, then the plugin for your agent. The plugin connects the MCP server to the agent, so there is no configuration to write.

### 1. Install the binary

**macOS / Linux:**

```bash
curl -fsSL https://raw.githubusercontent.com/IntelligentElectron/universal-netlist/main/install.sh | bash
```

**Windows (PowerShell):**

```powershell
irm https://raw.githubusercontent.com/IntelligentElectron/universal-netlist/main/install.ps1 | iex
```
