---
repo: "engram-app/Engram"
name: "Engram"
description: "Engram: memory for every AI, built from your own notes. Sync an Obsidian vault and let Claude, ChatGPT, Cursor or any MCP client search, read and write it. Self-hostable."
readmeQualityOk: true
url: "https://github.com/engram-app/Engram"
homepage: "https://engram.page"
language: "Elixir"
languages: ["Elixir", "TypeScript"]
languagePcts: [63, 29]
topics: ["elixir", "knowledge-base", "mcp", "obsidian", "phoenix", "rag", "vector-search"]
stars: 13
forks: 3
openIssues: 240
closedIssues: 421
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-27T05:27:03Z"
lastCommitAt: "2026-10-29T05:50:13Z"
lastReleaseAt: "2026-06-14T06:36:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 56
maintainers: ["Rasbandit", "engram-infra-tf[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/778c8c30895a3a2109fa96c4bce75711367bf92956c37070e846de37e0975fc3/engram-app/Engram"
fundingLinks: ["GITHUB:https://github.com/engram-app", "KO_FI:https://ko-fi.com/engrams_sync"]
---

# Engram

MCP-native · semantic + keyword search · real-time sync · self-hostable · source-available · Elixir/Phoenix

[Connect](#connect) · [Quickstart](#self-host-docker-compose) · [Self-host](https://engram.page/docs/self-host/) · [MCP](https://engram.page/docs/mcp/) · [API](https://engram.page/docs/api/) · [Architecture](https://engram.page/docs/self-host/architecture/) · [Plugin](https://github.com/engram-app/Engram-obsidian) · [Discord](https://discord.gg/NG9Vn9VcPS)

Your notes stay plain markdown that you and your AI assistants both read and
write. Pairs with the
[Engram Obsidian Sync](https://github.com/engram-app/Engram-obsidian) plugin to
sync your whole vault.

## Connect

Nothing to install. Point any MCP client at the hosted server and sign in when
prompted (OAuth):

```
https://mcp.engram.page
```

- **Claude Code:** `claude mcp add --transport http engram https://mcp.engram.page`
- **Claude.ai / ChatGPT:** add a custom connector with the URL above.
- **Cursor:** `{"mcpServers": {"engram": {"url": "https://mcp.engram.page"}}}` in `~/.cursor/mcp.json`
- **VS Code:** `{"servers": {"engram": {"type": "http", "url": "https://mcp.engram.page"}}}` in `.vscode/mcp.json`…
