---
repo: "smart-mcp-proxy/mcpproxy-go"
name: "mcpproxy-go"
description: "Supercharge AI Agents, Safely"
readmeQualityOk: true
url: "https://github.com/smart-mcp-proxy/mcpproxy-go"
homepage: "https://mcpproxy.app"
language: "Go"
languages: ["Go"]
languagePcts: [75]
topics: ["ai", "ai-agents", "mcp", "mcp-server", "security", "audit-logging", "bm25", "cli", "context-window", "developer-tools"]
stars: 398
forks: 66
openIssues: 26
closedIssues: 351
watchers: 2
contributors: 35
recentReleases: 0
createdAt: "2025-06-18T03:59:17Z"
lastCommitAt: "2026-10-22T08:52:07Z"
lastReleaseAt: "2025-06-25T08:06:48Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 98
undervaluedScore: 39
maintainers: ["Dumbris", "dependabot[bot]", "rudycelekli"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1004056914/212d4644-f7da-46a6-bd9b-4ef568330e5b"
discussionCount: 13
---

> The demo above shows the **embedded web UI**. The MCPProxy **core is a single binary for macOS, Linux, and Windows** — the web UI ships inside it, with no extra service to run. On **macOS**, an optional **menu‑bar app** adds one‑click convenience (start/stop, server health, quarantine, logs).

  &nbsp;&nbsp;&nbsp;&nbsp;

## Why MCPProxy?

- **Scale beyond API limits** – Federate hundreds of MCP servers while bypassing Cursor's 40-tool limit and OpenAI's 128-function cap.
- **Spend less context on tool definitions** – Agents see a small set of MCPProxy discovery and execution tools (`retrieve_tools`, `describe_tool`, the `call_tool_*` variants and a few management tools) instead of the full upstream tool catalog, and fetch schemas on demand (in `retrieve_tools` and `code_execution` routing; `direct` routing exposes upstream tools individually, see [Routing modes](https://docs.mcpproxy.app/features/routing-modes/)). How much context this saves depends on the number of tools, the routing mode, the client and the task; see [Token savings: what is and is not measured](#token-savings-what-is-and-is-not-measured).
- **Review before use** – New servers are quarantined and their tools…
