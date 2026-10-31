---
repo: "luqman-v1/9router-go"
name: "9router-go"
description: "High-performance Go proxy gateway for 9Router LLM routing — 32K RPS, 42MB RAM, CGO-free"
readmeQualityOk: true
url: "https://github.com/luqman-v1/9router-go"
homepage: "https://luqman-v1.github.io/9router-go/"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["9router", "api-gateway", "claude", "llm", "openai", "proxy", "sqlite", "sse", "deepseek", "gpt"]
stars: 260
forks: 95
openIssues: 3
closedIssues: 264
watchers: 1
contributors: 28
recentReleases: 3
createdAt: "2026-07-18T08:30:15Z"
lastCommitAt: "2026-10-31T15:58:47Z"
lastReleaseAt: "2026-08-06T10:14:00Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 36
maintainers: ["luqman-v1", "mriazh", "KunN-21"]
openGraphImageUrl: "https://opengraph.githubassets.com/d18cb3fec1ad54092cb30054b3d8c0081aae6696e26ca2d98869110a1a9db241/luqman-v1/9router-go"
---

# 9router-go — FREE AI Router & Token Saver (Single Binary)

**Never stop coding. Save 20-40% tokens with RTK + auto-fallback to FREE & cheap AI models.**

**Connect Claude Code, Cursor, Antigravity, Codex, Gemini, OpenCode, Cline, OpenClaw... to 40+ AI providers & 100+ models — no Node.js needed at runtime.**

[🚀 Quick Start](#-quick-start) • [💡 Features](#-key-features) • [⚙️ Setup](#-setup-guide) • [🔄 Share DB with 9Router](#-sharing-a-database-with-9router) • [🌐 Upstream](https://github.com/decolua/9router)

---

## 🤔 Why 9router-go?

Same idea as [9Router](https://github.com/decolua/9router), minus the Node.js runtime: **one Go binary** serves the proxy APIs + an embedded Svelte dashboard.

**Stop wasting money, tokens and hitting limits:**

- ❌ Subscription quota expires unused every month
- ❌ Rate limits stop you mid-coding
- ❌ Tool outputs (git diff, grep, ls...) burn tokens fast
- ❌ Manual switching between providers

**9router-go solves this:**

- ✅ **RTK Token Saver** — auto-compress tool_result content, save 20-40% tokens
- ✅ **Auto fallback** — Subscription → Cheap → Free, zero downtime
- ✅ **Extended combo routing** — per-combo strategy: fallback, round-robin,…
