---
repo: "seifip/kilobat-cli"
name: "kilobat-cli"
description: "macOS network diagnostics CLI and MCP server"
readmeQualityOk: true
url: "https://github.com/seifip/kilobat-cli"
homepage: "https://kilobat.app"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["ai-agents", "cli", "macos", "mcp", "mcp-server", "model-context-protocol", "network-diagnostics", "network-monitor", "swift", "wifi"]
stars: 1
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-27T22:53:53Z"
lastCommitAt: "2026-11-02T15:33:49Z"
lastReleaseAt: "2026-10-31T15:03:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["seifip"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f47c67ed0e3199798340e676cd372abc3840d5e67c19fc939605e28b9120a71/seifip/kilobat-cli"
promoted: true
postedAt: "2026-10-30T11:11:14.626Z"
---

# Kilobat CLI

Kilobat is a macOS command-line tool and MCP server for network monitoring and diagnostics: which apps use the network, Wi-Fi signal and channels, latency and packet loss, DNS, speed tests, why one host or API won't connect, where traffic leaves (VPN or not), metered hotspots and data budgets, and keeping the Mac awake while long jobs and AI agents run. Every command speaks JSON. The native Kilobat menu-bar app is a separate product: https://kilobat.app.

## Use with AI agents (MCP)

`kilobat mcp` is a local stdio MCP server. Connected clients discover available tools with `tools/list`. Some tools change settings and request explicit confirmation in their descriptions; clients control permission prompts.

- **Claude Code:** `claude mcp add kilobat -- kilobat mcp`
- **Codex CLI:** `codex mcp add kilobat -- kilobat mcp`
- **Claude Desktop:** install the CLI, then configure a local stdio server with the full executable path returned by `/usr/bin/which kilobat` and argument `mcp`. See the [local-server setup guide](https://modelcontextprotocol.io/docs/develop/connect-local-servers).
- **Cursor, Windsurf, Zed, Gemini CLI, Cline and others:** add a stdio server with…
