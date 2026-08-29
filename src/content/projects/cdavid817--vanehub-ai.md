---
repo: "cdavid817/vanehub-ai"
name: "vanehub-ai"
description: "AI 编程智能体统一桌面工作台 | Desktop hub for managing Claude Code, Codex CLI, Gemini CLI & OpenCode. Tauri 2 · Rust · React · SQLite."
readmeQualityOk: true
url: "https://github.com/cdavid817/vanehub-ai"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [70, 24]
topics: ["ai-agents", "claude-code", "codex", "coding-agents", "desktop-app", "gemini", "opencode", "react", "tauri", "typescript"]
stars: 80
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-07-13T03:19:03Z"
lastCommitAt: "2026-08-29T10:21:07Z"
lastReleaseAt: "2026-08-25T08:16:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 28
maintainers: ["cdavid817", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bda0151d1c79b96f8cd24e6e182842f373cc96fd531ecf6b898271ee183800b/cdavid817/vanehub-ai"
---

**English**
· [简体中文](https://github.com/cdavid817/vanehub-ai/blob/HEAD/README.zh-CN.md)
· [日本語](https://github.com/cdavid817/vanehub-ai/blob/HEAD/README.ja.md)

</div>

# VaneHub AI

</p>

Desktop-first workspace for managing AI coding agents through one React interface and explicit Web/mock and Tauri runtime boundaries.

## Overview

VaneHub AI brings Claude Code, OpenCode, Codex CLI, Gemini CLI, and Antigravity CLI into a shared desktop workspace. It manages CLI availability, sessions, terminal execution, projects and worktrees, settings, tools, observability, and desktop integrations without letting React components depend directly on native APIs.

### Supported CLIs

One is enough to start. You do not need all five.

| Agent | Provider | Command | Model family | In-app install | Third-party model endpoint |
| --- | --- | --- | --- | --- | --- |
| Claude Code | Anthropic | `claude` | Anthropic | ✅ `@anthropic-ai/claude-code` | ✅ |
| Codex CLI | OpenAI | `codex` | OpenAI | ✅ `@openai/codex` | ✅ |
| OpenCode | OpenCode (open source) | `opencode` | Unknown | ✅ `opencode-ai` | ✅ |
| Gemini CLI | Google | `gemini` | Google | ✅ `@google/gemini-cli` | ⚠️ Custom endpoint allowed, but…
