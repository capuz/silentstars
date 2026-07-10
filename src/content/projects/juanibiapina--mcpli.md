---
repo: "juanibiapina/mcpli"
name: "mcpli"
description: "A command-line interface for interacting with MCP (Model Context Protocol) servers"
readmeQualityOk: true
url: "https://github.com/juanibiapina/mcpli"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "golang", "mcp", "mcp-client", "model-context-protocol"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-02-05T08:59:30Z"
lastCommitAt: "2026-07-10T07:00:42Z"
lastReleaseAt: "2026-07-08T13:42:25Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 27
maintainers: ["juanibiapina", "dependabot[bot]", "JuanAgentBot"]
openGraphImageUrl: "https://opengraph.githubassets.com/641593514b1b4efccb303b20f691add151acad4abbbebca47d01295c56b3508d/juanibiapina/mcpli"
---

# mcpli

**One command to turn any MCP server into a CLI tool.**

```bash
mcpli add knuspr https://mcp.knuspr.de/mcp/ \
  --header 'rhl-email: ${ROHLIK_USERNAME}' \
  --header 'rhl-pass: ${ROHLIK_PASSWORD}'
mcpli knuspr batch_search_products '{"queries": [{"keyword": "milk"}]}'
```

## Features

- ⚡ **Instant** — `mcpli add` connects, fetches tools, and you're ready to go. No manual setup
- 🔍 **Discoverable** — Tab completion for servers AND tools in your shell
- 📖 **Self-documenting** — `--help` shows full tool descriptions at every level
- 🔧 **Familiar** — Works like any CLI you already use (git, kubectl, etc.)
- 🤖 **Agent-friendly** — AI agents can add and use MCP servers with a single command

## Quick Start

```bash
# 1. Add a server (fetches and caches all tools)
mcpli add myserver https://example.com/mcp/

# 2. Explore available tools
mcpli myserver --help

# 3. Invoke a tool
mcpli myserver search '{"query": "hello"}'
```

## Installation

### Homebrew (macOS/Linux)

```bash
brew install juanibiapina/taps/mcpli
```

### Go

```bash
go install github.com/juanibiapina/mcpli@latest
```

### Build from source

```bash
git clone https://github.com/juanibiapina/mcpli
cd mcpli…
