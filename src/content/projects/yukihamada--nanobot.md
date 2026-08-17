---
repo: "yukihamada/nanobot"
name: "nanobot"
description: "AI Agent Platform built in Rust — Multi-model, MCP tools, 14+ channel integrations. Self-host or use teai.io"
readmeQualityOk: true
url: "https://github.com/yukihamada/nanobot"
homepage: "https://teai.io"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [46, 45]
topics: ["agent", "ai", "ai-agent", "anthropic", "chatbot", "claude", "lambda", "line-bot", "llm", "mcp"]
stars: 7
forks: 3
openIssues: 3
closedIssues: 45
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-07T03:11:50Z"
lastCommitAt: "2026-08-17T04:20:48Z"
lastReleaseAt: "2026-02-09T12:27:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 64
maintainers: ["yukihamada", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f0e8421b2d0d1c8fad115024c4f85b6b76a9e897e3ab4b98423f046020930cd/yukihamada/nanobot"
---

# nanobot

**A production-grade AI agent platform written in pure Rust.**

One binary. Six channels. Fifty tools. Zero cold-start drama.

[Live Demo](https://chatweb.ai) &middot; [API Docs](https://teai.io) &middot; [Report Bug](https://github.com/yukihamada/nanobot/issues)

</div>

---

nanobot is a self-hostable, multi-channel AI assistant that ships as a single Rust binary. It connects to **8+ LLM providers** with automatic failover, exposes **50+ agentic tools**, and deploys to AWS Lambda for pennies. It powers [chatweb.ai](https://chatweb.ai) and [teai.io](https://teai.io) in production today.

## Why nanobot?

| | nanobot | Typical agent frameworks |
|---|---|---|
| **Language** | Rust (axum) | Python / TypeScript |
| **Cold start** | < 50 ms on Lambda ARM64 | 3-10 s |
| **Binary** | ~9 MB stripped | Hundreds of MB + runtime |
| **Channels** | Web, LINE, Telegram, Discord, Slack, Facebook | Usually 1-2 |
| **LLM failover** | Automatic round-robin + circuit breaker | Manual config |
| **Voice** | Built-in STT + TTS | External service required |
| **Self-host** | Single binary, zero dependencies | Docker + DB + queue + ... |
| **License** | MIT | Varies |

---

## Architecture…
