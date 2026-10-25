---
repo: "stakwork/stakgraph"
name: "stakgraph"
description: "A source code parser using treesitter, LSP, and neo4j, powering software knowledge graphs for AI agents."
readmeQualityOk: true
url: "https://github.com/stakwork/stakgraph"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [53, 23]
stars: 114
forks: 21
openIssues: 28
closedIssues: 255
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2025-03-07T19:04:33Z"
lastCommitAt: "2026-10-25T22:11:18Z"
lastReleaseAt: "2025-06-19T16:16:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 46
maintainers: ["Evanfeenstra", "tomsmith8"]
openGraphImageUrl: "https://opengraph.githubassets.com/5641bd5ff16051c391ecb12cdcb90cb9cfb469362fd6e38bd3a32d2d9c44c033/stakwork/stakgraph"
---

---

StakGraph parses source code into a graph of **functions, classes, endpoints, data models, tests**, and their relationships -- using [tree-sitter](https://tree-sitter.github.io/tree-sitter/), instantly, with zero config.

1. **CLI** -- install in 10 seconds, point at any file or directory
2. **MCP server** -- plug into Cursor, Claude Code, Windsurf, OpenCode
3. **Graph server** -- Neo4j-backed querying, embedding, and visualization

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/stakwork/stakgraph/refs/heads/main/install.sh | bash
```

Pre-built binaries for **Linux** (x86_64, aarch64), **macOS** (Intel, Apple Silicon), and **Windows**.

## CLI

Point `stakgraph` at a file, directory, or git scope to inspect code structure instead of raw text.

### Most useful commands

Parse a file and print extracted nodes:

```bash
stakgraph mcp/src/index.ts
stakgraph cli/src/main.rs --stats
```

Get a compact repo overview:

```bash
stakgraph overview .
```

Search for endpoints, functions, models, or tests:

```bash
stakgraph search GET --type Endpoint mcp/src
stakgraph search batch_process --context ast/src
```

Inspect structural git changes:

```bash
stakgraph…
