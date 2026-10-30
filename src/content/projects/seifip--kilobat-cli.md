---
repo: "seifip/kilobat-cli"
name: "kilobat-cli"
description: "macOS network diagnostics CLI and MCP server"
readmeQualityOk: true
url: "https://github.com/seifip/kilobat-cli"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["ai-agents", "cli", "macos", "mcp", "mcp-server", "model-context-protocol", "network-diagnostics", "network-monitor", "swift", "wifi"]
stars: 1
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-27T22:53:53Z"
lastCommitAt: "2026-10-30T11:02:02Z"
lastReleaseAt: "2026-10-30T11:02:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 28
maintainers: ["seifip"]
openGraphImageUrl: "https://opengraph.githubassets.com/9070120a13a183dd29bdfd720a4c0b8e035e33e7fecf28bfbccd93d02dc843d1/seifip/kilobat-cli"
promoted: true
---

# Kilobat CLI

Kilobat is a macOS command-line tool and MCP server for network monitoring and diagnostics: which apps use the network, Wi-Fi signal and channels, latency and packet loss, DNS, speed tests, why one host or API won't connect, where traffic leaves (VPN or not), metered hotspots and data budgets, and keeping the Mac awake while long jobs and AI agents run. Every command speaks JSON. The native Kilobat menu-bar app is a separate product: https://kilobat.app.

## Use with AI agents (MCP)

`kilobat mcp` is a stdio MCP server with 43 tools. Read-only tools need no confirmation; tools that change something tell the agent to ask you first.

- **Claude Code:** `claude mcp add kilobat -- kilobat mcp`
- **Codex CLI:** `codex mcp add kilobat -- kilobat mcp`
- **Claude Desktop:** download `kilobat-mcp-<version>.mcpb` from [Releases](https://github.com/seifip/kilobat-cli/releases/latest) and open it.
- **Cursor, Windsurf, Zed, Gemini CLI, Cline and others:** add a stdio server with command `kilobat` and argument `mcp`.

Step-by-step setup for each agent, with example prompts: https://kilobat.app/agents/. Agent skills that teach agents when and how to use Kilobat: `npx skills add…
