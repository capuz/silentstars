---
repo: "ggui-ai/ggui"
name: "ggui"
description: "The universal interface layer between AI agents and humans. Generate rich UIs on demand via MCP."
readmeQualityOk: true
url: "https://github.com/ggui-ai/ggui"
homepage: "https://ggui.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent-framework", "agents", "ai", "llm", "mcp", "model-context-protocol", "react", "sdk", "typescript", "ui-generation"]
stars: 39
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-03-23T13:35:41Z"
lastCommitAt: "2026-09-05T07:45:46Z"
lastReleaseAt: "2026-08-07T12:01:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["gustavoignis"]
openGraphImageUrl: "https://opengraph.githubassets.com/050c9aed1bfedeca12a5841bf88103a922b75f0a81c4d17ba6e8213463d2b0b7/ggui-ai/ggui"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logo-dark.svg" />
  </picture>
</p>

</p>

> 🚧 **Active development — pre-1.0.** All 32 `@ggui-ai/*` packages ship in lockstep minor waves — the badges below show the current one; the protocol is a draft and may still change between waves. Pin exact versions (see badges below) and watch [Releases](https://github.com/ggui-ai/ggui/releases) for each wave's notes; `v1.0` marks the protocol freeze.

---

Agents describe what they need in natural language; ggui generates ephemeral, interactive interfaces over MCP. No frontend code, no React templates, no custom components — agents talk, users see UI.

This repo is the **open protocol + reference runtime**. Self-host with `ggui serve`; pair against any MCP-aware agent runtime (Claude Desktop, Claude Code, claude.ai, Cursor, ChatGPT desktop, Goose, your own). Zero account required, zero managed infrastructure required, zero cloud dependency.

---

## Quick start — pick your path

### 1. Composed golden path — platform-composed (guuey-sdk)

One flow from a `guuey.json` to a rendered, interactive todo UI — every piece a published SDK. [guuey](https://guuey.com)'s…
