---
repo: "Captain-AI-Hub/IDA-MCP"
name: "IDA-MCP"
description: "IDA MCP"
originalDescription: "IDA MCP"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Captain-AI-Hub/IDA-MCP"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 251
forks: 48
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-08-18T02:09:09Z"
lastCommitAt: "2026-10-29T05:50:14Z"
lastReleaseAt: "2026-02-24T07:00:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6cc377dc39149b69becc37712e6f0fc9b6fd4dc29f94177e88a90d0f629f678e/Captain-AI-Hub/IDA-MCP"
---

# IDA-MCP-Hub

MCP (Model Context Protocol) server for IDA Pro: **stdio transport**, headless idalib worker, multi-instance lifecycle management, and official IDAPython documentation lookup. The tool catalog is this project's own full set of disassembly/decompilation/modification/debugging APIs (90 tools). **Pure idalib architecture: no GUI plugin, no dependency on an IDA executable path.**

```text
MCP client ──stdio──▶ idamcp-hub standalone process
                        │  ├─ Instance discovery: <IDAUSR>/ida-mcp/instances.json
                        │  └─ Direct connection to the JSON-RPC bridge inside each worker process (no gateway, no port-registration forwarding)
                        ▼
             Headless idalib worker ×N (automatically creates/analyzes .i64, includes debugger)
```

## Core Features

- **stdio is the only transport** (`uvx idamcp-hub stdio`). The HTTP/gateway/port-registration forwarding mechanism has been removed.
- **open_database**: attaches to an existing worker for the same file, or starts a **headless idalib worker** (automatically creates and analyzes the .i64).
- **Multiple instances (stateless routing)**: `list_databases / save_database /…
