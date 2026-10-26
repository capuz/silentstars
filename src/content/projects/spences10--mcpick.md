---
repo: "spences10/mcpick"
name: "mcpick"
description: "Vendor-neutral MCP configuration manager — one CLI to add, toggle, and audit MCP servers and skills across every AI client, with safety built in"
readmeQualityOk: true
url: "https://github.com/spences10/mcpick"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["anthropic", "claude", "claude-code", "cli", "marketplaces", "mcp", "plugins", "skills"]
stars: 95
forks: 15
openIssues: 9
closedIssues: 27
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2025-09-28T12:59:51Z"
lastCommitAt: "2026-10-26T09:18:24Z"
lastReleaseAt: "2026-10-11T08:59:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 51
maintainers: ["spences10", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b78db547048dd754ff8b8f87cec778f1c22d4b46a67e8088dab09c13f7695039/spences10/mcpick"
---

# MCPick

Vendor-neutral MCP configuration manager with first-class Claude Code
support.

MCPick helps humans and LLM agents inspect, toggle, and back up MCP
server configuration across multiple AI clients. Claude Code-specific
plugins, hooks, marketplaces, and cache commands remain available, but
they are no longer the core product model.

## Install

```bash
npm install -g mcpick
# or run without installing
npx mcpick --help
```

Requirements:

- Node.js 22+
- Claude Code is required only for Claude Code-specific commands
- The GitHub CLI (`gh`, authenticated) is required for portable skills
  commands; [check-skills](https://github.com/spences10/check-skills)
  validates skills before install when available

## Agent-first CLI

In non-TTY environments, MCPick shows help instead of launching the
interactive TUI. This makes it safer for prompts like:

> “Use mcpick to work out how to enable this MCP server.”

Start with:

```bash
npx mcpick --help
npx mcpick clients
npx mcpick list --json
```

MCPick redacts known secret patterns before printing output. MCP
configs often contain env vars and authorization headers, so `env` and
`headers` values are shown as `***` in JSON output.…
