---
repo: "megamen32/gptadmin_opensource"
name: "gptadmin_opensource"
description: "One MCP hub — any AI controls any infrastructure. Self-hosted, works with ChatGPT, Claude, Codex, DeepSeek, Qwen, Alice, GigaChat."
readmeQualityOk: true
url: "https://github.com/megamen32/gptadmin_opensource"
homepage: "https://became.bezrabotnyi.com"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [51, 30]
topics: ["ai-agent", "chatgpt", "claude", "mcp", "mcp-server", "self-hosted", "server-admin"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T13:18:56Z"
lastCommitAt: "2026-10-23T09:32:26Z"
lastReleaseAt: "2026-10-11T18:57:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/49e17cb85026d0a11899ef98ba42834bd2726122501af48650e2993389923496/megamen32/gptadmin_opensource"
---

# GPT‑Админ

**One MCP hub — any AI controls any infrastructure.**

GPT‑Админ is a self-hosted MCP hub that sits between your AI assistant and your
servers. Plug servers and any MCP tools into the hub, then connect your AI via
one of three adapters. Manage everything from server admin to running subagents
— from ChatGPT, Claude, Codex, DeepSeek, Qwen, even Yandex Alice or Sber
GigaChat.

> 🌐 Website & live docs: **https://became.bezrabotnyi.com**
> 📚 Full docs: **[docs/](https://github.com/megamen32/gptadmin_opensource/blob/HEAD/docs/Home.md)** — architecture, adapters, hub, install, config, API, security, FAQ
> 📦 Install: `curl -s https://raw.githubusercontent.com/megamen32/gptadmin_opensource/main/deploy/install.sh | bash`

---

## Why

Most "AI server admin" tools are either cloud-only, tied to one AI, or require
a paid API. GPT‑Админ is different:

- **Self-hosted** — your servers, your hub, your tokens. Nothing leaves your
  infra.
- **Any AI** — ChatGPT, Claude, Codex, OpenCode, DeepSeek, Qwen, Alice,
  GigaChat. Even free web chats work via a browser extension.
- **MCP-native** — the hub speaks MCP remote SSE, so any MCP client connects.
  Plug in chrome-devtools,…
