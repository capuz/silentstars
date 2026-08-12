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
stars: 38
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-03-23T13:35:41Z"
lastCommitAt: "2026-08-12T05:12:46Z"
lastReleaseAt: "2026-08-07T12:01:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["gustavoignis"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f052edc7a1e121c4afffdc9b9adef1d79327952e67fea22702867b861e81d90/ggui-ai/ggui"
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

### 1. Composed golden path — platform-composed (guuey-sdk)

One flow from a `guuey.json` to a rendered, interactive todo UI — every piece a published SDK. [guuey](https://guuey.com)'s dev tooling runs the agent (`@guuey/cli` + `@guuey/worker`), the ggui runtime is the dev router's injected MCP default, and…
