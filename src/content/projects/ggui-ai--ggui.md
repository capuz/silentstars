---
repo: "ggui-ai/ggui"
name: "ggui"
description: "The universal interface layer between AI agents and humans. Generate rich UIs on demand via MCP."
readmeQualityOk: true
url: "https://github.com/ggui-ai/ggui"
homepage: "https://ggui.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent-framework", "agents", "ai", "llm", "mcp", "model-context-protocol", "react", "sdk", "typescript", "ui-generation"]
stars: 39
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-03-23T13:35:41Z"
lastCommitAt: "2026-08-07T05:15:08Z"
lastReleaseAt: "2026-07-30T10:56:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 42
maintainers: ["gustavoignis", "wanseob"]
openGraphImageUrl: "https://opengraph.githubassets.com/46d7c5d9d60e9e283f27b09dde5444bd5f8b57915f337bda95d9bde45ace87b1/ggui-ai/ggui"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logo-dark.svg" />
  </picture>
</p>

</p>

> 🚧 **Active development — iterating on `v0.1.0` release candidates.** APIs are converging; pin exact versions (see badges below) and watch [Releases](https://github.com/ggui-ai/ggui/releases) for the next RC and the v0.1.0 final.

---

Agents describe what they need in natural language; ggui generates ephemeral, interactive interfaces over MCP. No frontend code, no React templates, no custom components — agents talk, users see UI.

This repo is the **open protocol + reference runtime**. Self-host with `ggui serve`; pair against any MCP-aware agent runtime (Claude Desktop, Claude Code, claude.ai, Cursor, ChatGPT desktop, Goose, your own). Zero account required, zero managed infrastructure required, zero cloud dependency.

---

## Quick start — pick your path

### 1. Build an agentic app from the samples _(recommended for new apps)_

The fastest path to **ship an agent end-to-end**. The canonical samples are complete, runnable pieces of an agentic app — an agent backend per SDK, a stock ggui server config, a reference MCP server, and a web client. Compose them into…
