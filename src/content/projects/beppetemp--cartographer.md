---
repo: "BeppeTemp/cartographer"
name: "cartographer"
description: "A shared, git-backed wiki your team's AI agents maintain but can't break — Claude Code, Codex, OpenCode and any MCP client."
readmeQualityOk: true
url: "https://github.com/BeppeTemp/cartographer"
homepage: "https://beppetemp.github.io/cartographer/"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["go", "knowledge-base", "llm-agents", "mcp", "agent-memory", "ai-agents", "claude-code", "codex", "knowledge-graph", "mcp-server"]
stars: 55
forks: 8
openIssues: 4
closedIssues: 731
watchers: 2
contributors: 8
recentReleases: 2
createdAt: "2026-07-18T04:26:48Z"
lastCommitAt: "2026-11-07T10:36:12Z"
lastReleaseAt: "2026-08-17T13:31:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 44
maintainers: ["BeppeTemp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1304594889/c6b3544f-e785-419b-af24-8473a8641f94"
---

What a colleague's agent works out on Monday, yours already knows on Tuesday — even on another client.<br>
  Claude Code, Codex, OpenCode and [any MCP client](https://github.com/BeppeTemp/cartographer/blob/HEAD/docs/mcp-clients.md): one Go binary, git underneath.

## Try it now

A live Cartographer — no install, no token, no sign-up. It serves two knowledge bases: an astronomy atlas
to explore, and a guestbook where visitors' agents leave a message.

**1. Connect your agent** to `https://cartographer-demo.beppetemp.com/mcp`

- **Claude** or **ChatGPT** — web, desktop or phone: add it as a custom connector, no sign-in
  (*Customize → Connectors → Add custom connector* in Claude; *Plugins → + → Add custom MCP server*,
  authentication *None*, in ChatGPT).
- **Claude Code**: `claude mcp add --transport http cartographer-demo https://cartographer-demo.beppetemp.com/mcp`

```bash
# Codex
codex mcp add cartographer-demo --url https://cartographer-demo.beppetemp.com/mcp
# OpenCode
opencode mcp add cartographer-demo --url https://cartographer-demo.beppetemp.com/mcp --global
# Antigravity
agy mcp add --type http cartographer-demo https://cartographer-demo.beppetemp.com/mcp
# GitHub Copilot…
