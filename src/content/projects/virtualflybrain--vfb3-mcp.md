---
repo: "VirtualFlyBrain/VFB3-MCP"
name: "VFB3-MCP"
description: "Explore Virtual Fly Brain data directly through your favourite LLM with the new VFB Model Context Protocol (MCP) tool"
readmeQualityOk: true
url: "https://github.com/VirtualFlyBrain/VFB3-MCP"
homepage: "https://vfb3-mcp.virtualflybrain.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["drosophila-melanogaster", "mcp", "mcp-server", "connectomics", "llm", "neuroscience", "ontology", "virtualflybrain"]
stars: 9
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-07T05:52:26Z"
lastCommitAt: "2026-11-13T18:31:07Z"
lastReleaseAt: "2026-02-10T12:01:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 45
maintainers: ["Robbie1977", "Clare72", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb14b2636f08ad08dc79c3cd8ac1e8e77321a77febf4929def4259faecf4e0bf/VirtualFlyBrain/VFB3-MCP"
---

# VFB3-MCP Server

A Model Context Protocol (MCP) server for Virtual Fly Brain (VFB): query *Drosophila melanogaster* neuroanatomy, connectomics, expression and reagent data from Claude, Copilot or any other MCP client.

**Canonical repository:** [VirtualFlyBrain/VFB3-MCP](https://github.com/VirtualFlyBrain/VFB3-MCP) (this one) — maintained by the Virtual Fly Brain team.
**Hosted service:** `https://mcp.virtualflybrain.org` — no installation, no API key, no account. (The older address `https://vfb3-mcp.virtualflybrain.org` is the same server and keeps working.)

```bash
claude mcp add --transport http virtual-fly-brain https://mcp.virtualflybrain.org
```

The earlier copy at `Robbie1977/VFB3-MCP` is archived at v1.3.0 and is not maintained; use this repository and the URL above.

This server provides tools to query VFB data, run queries, and search for terms. In HTTP mode it runs statelessly (no session tracking), so any replica can handle any request and standard load balancing works.

## 🚀 Quick Start

### Use the Live Service (Recommended)

The easiest way to use VFB3-MCP is through our hosted service at `https://mcp.virtualflybrain.org`. This requires no installation or setup…
