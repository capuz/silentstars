---
repo: "sdsrss/claude-mem-lite"
name: "claude-mem-lite"
description: "Persistent long-term memory for Claude Code via MCP — captures coding decisions, bugfixes, and context across sessions. Hybrid FTS5 + TF-IDF search with episode batching. Single SQLite DB, no external services. Alternative to claude-mem with 600x lower cost."
readmeQualityOk: true
url: "https://github.com/sdsrss/claude-mem-lite"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["claude-code", "fts5", "hooks", "mcp", "memory", "persistence", "sqlite", "agent-memory", "ai-coding-assistant", "ai-memory"]
stars: 56
forks: 7
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-08T07:10:37Z"
lastCommitAt: "2026-09-02T08:01:10Z"
lastReleaseAt: "2026-03-16T20:11:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 36
maintainers: ["sdsrss", "pbakkerasfaudits"]
openGraphImageUrl: "https://opengraph.githubassets.com/587859904468c4e25728f6e84369e0c9e5374905a17935000892dcdb92882819/sdsrss/claude-mem-lite"
---

[English](https://github.com/sdsrss/claude-mem-lite/blob/HEAD/README.md) | [中文](https://github.com/sdsrss/claude-mem-lite/blob/HEAD/README.zh-CN.md)

# claude-mem-lite

`claude-mem-lite` is a **persistent memory** (also called *long-term memory* or *cross-session context*) system for **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** — Anthropic's CLI coding agent. It runs as an **[MCP](https://modelcontextprotocol.io/) server** plus a set of Claude Code hooks, automatically capturing coding observations, decisions, and bug fixes during sessions, then providing hybrid full-text + semantic search to recall them later.

Compared to general-purpose LLM memory frameworks like [`mem0`](https://github.com/mem0ai/mem0) or the MCP reference [`memory`](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) server, claude-mem-lite is purpose-built for Claude Code's hook lifecycle: episode batching cuts LLM calls 7–10× vs the original [claude-mem](https://github.com/thedotmack/claude-mem) (an estimated ~600× lower total cost — see the cost model below; this is an architecture estimate, not a measured benchmark), while the hybrid FTS5 + TF-IDF retriever…
