---
repo: "william0wang/zcode-acp"
name: "zcode-acp"
description: "ACP adapter for ZCode — drive GLM-5.3 from IDEA, VS Code, Zed or any ACP client; pair with zcode-acp-remote for phone/web access"
readmeQualityOk: true
url: "https://github.com/william0wang/zcode-acp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["acp", "agents", "zcode", "vscode", "zed", "glm-5-3", "idea"]
stars: 21
forks: 8
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-05T07:34:18Z"
lastCommitAt: "2026-09-01T08:51:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["william0wang", "lianxin255", "guanbear"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a0410100bd5c6dffa8f744cee2da0b9dc70b02dff235254cf2842e2428eef6d/william0wang/zcode-acp"
---

# zcode-acp-server

English | **[简体中文](https://github.com/william0wang/zcode-acp/blob/HEAD/README.zh-CN.md)**

A standalone [Agent Client Protocol](https://agentclientprotocol.com/) (ACP) server that bridges the headless **ZCode** app-server to ACP-compatible editors such as [Zed](https://zed.dev) and JetBrains IDEs.

The server launches the ZCode headless app-server (`zcode app-server --stdio`) as a subprocess, translates its internal event stream into ACP `session/update` notifications, and bridges ZCode's interaction channel to ACP — preferring `elicitation/create` when the client supports it, and falling back to `session/request_permission` otherwise — so an editor gets a first-class, native coding-agent experience.

## Status

In active development. Core bridging, slash commands and ZCode extensions,
auto-compaction, remote access for mobile/web clients, and the quota APIs are
in place; see the project board for what's next.

## Requirements

- **Node.js ≥ 22** (the bridge uses `node:sqlite` for tasks-index sync; the
  ZCode CLI runtime also requires Node ≥ 22)
- The ZCode CLI: auto-discovered from the desktop app bundle, or on `PATH`,
  or pointed at via `ZCODE_BIN` (see…
