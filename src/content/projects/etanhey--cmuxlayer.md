---
repo: "EtanHey/cmuxlayer"
name: "cmuxlayer"
description: "cmux MCP server — 25 tools for terminal agent lifecycle management. Spawn, monitor, and orchestrate Claude, Codex, Cursor, Gemini, Kiro agents. Thinking-state detection, chunked input, layout management."
readmeQualityOk: true
url: "https://github.com/EtanHey/cmuxlayer"
homepage: "https://cmuxlayer.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai-agents", "claude-code", "mcp-server", "model-context-protocol", "orchestration", "terminal-multiplexer"]
stars: 16
forks: 2
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-15T01:37:34Z"
lastCommitAt: "2026-07-05T06:32:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 39
maintainers: ["EtanHey"]
openGraphImageUrl: "https://opengraph.githubassets.com/f89fc14861346a2cb75b42523dd12f26f6bb7e3de1570374db5800d63b974ed1/EtanHey/cmuxlayer"
---

# cmuxLayer

**Your AI agents can't see each other's terminals.** One runs in tab 1, another in tab 2 — and you're the clipboard between them. cmuxLayer fixes that: 35 MCP tools that give AI agents programmatic control over terminal workspaces.

</p>

## Quick Start

```bash
brew install etanhey/layers/cmuxlayer       # stable, pinned release
brew install --HEAD etanhey/layers/cmuxlayer # or: dogfood the latest main
```

This installs the `cmuxlayer` command (plus `cmuxlayer-app-server` /
`cmuxlayer-proxy`). Requires [cmux](https://github.com/manaflow-ai/cmux) to be
running. For how the golem fleet wires, versions, and dogfoods it — and the
`CMUX_SOCKET_PATH` instance pin — see
[docs/releases-and-brew.md](https://github.com/EtanHey/cmuxlayer/blob/HEAD/docs/releases-and-brew.md).

Add to your MCP config:

**Codex CLI / T3 Code**

T3 Code inherits MCP servers from the Codex CLI config file at `~/.codex/config.toml` (or `$CODEX_HOME/config.toml`).

```toml
[mcp_servers.cmuxlayer]
command = "cmuxlayer"
```

**Claude Code, Cursor, VS Code, Claude Desktop**

```json
{
  "mcpServers": {
    "cmuxlayer": {
      "command": "cmuxlayer"
    }
  }
}
```

> **Config locations:** Codex CLI /…
