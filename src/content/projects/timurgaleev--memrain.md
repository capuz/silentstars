---
repo: "timurgaleev/memrain"
name: "memrain"
description: "Long-term memory for your AI agents, in your own AWS account. Notes, decisions and code in one store that Claude, ChatGPT, Codex and other MCP clients search, with a source pointer on every result. Per-person keys and daily model-spend caps. MIT."
readmeQualityOk: true
url: "https://github.com/timurgaleev/memrain"
homepage: "https://memrain.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["bun", "mcp", "model-context-protocol", "pgvector", "second-brain", "self-hosted", "vector-search", "ai-agents", "ai-memory", "aws"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-11T19:48:10Z"
lastCommitAt: "2026-11-21T11:33:10Z"
lastReleaseAt: "2026-06-01T06:40:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["timurgaleev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1235933050/f6a132b0-0ae1-4c61-9570-4a789eb27c17"
---

**Long-term memory for your AI agents.**<br>
Your notes, decisions and code, searchable from Claude, ChatGPT and Codex. Every result points to the page it came from.

**For developers and small teams who work with AI agents every day.** Memrain is
free and open source (MIT). It runs in your own AWS account, so you pay only your
AWS bill: about $52 a month for the server and database, plus model usage if you
turn on the paid features. Ask and every paid background worker stay off
until you set a daily cap. **To start, follow [docs/QUICKSTART.md](https://github.com/timurgaleev/memrain/blob/HEAD/docs/QUICKSTART.md).**

## Why

- **Your agent forgets.** Every new chat starts from zero, so you paste the same context again and again.
- **Your knowledge is scattered.** Decisions sit in notes, the reasons in old chats, the details in code.
- **Answers without sources are guesses.** You cannot check an answer that does not say where it came from.

Memrain reads all of it, stores it in one place, and lets every agent you use
search it. Each result points to the exact page it came from.
