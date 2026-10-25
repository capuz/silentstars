---
repo: "kagura-ai/memory-cloud"
name: "memory-cloud"
description: "Adaptive memory for AI agents & teams — beyond RAG. Self-hosted MCP server that gets smarter every time you search: hybrid search + a neural memory graph that learns. Works with Claude, ChatGPT & any MCP client."
readmeQualityOk: true
url: "https://github.com/kagura-ai/memory-cloud"
homepage: "https://www.kagura-ai.com"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["fastapi", "mcp", "mcp-server", "neural-memory", "nextjs", "postgresql", "qdrant", "rag", "vector-search", "ai-agents"]
stars: 12
forks: 11
openIssues: 40
closedIssues: 1076
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-28T18:28:03Z"
lastCommitAt: "2026-10-25T02:47:13Z"
lastReleaseAt: "2026-04-03T14:37:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 68
maintainers: ["JFK", "mikemikimike"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d444870a10a4e93d6a7f72b4901984626012ee1081cd6cafc30691cd43c9db6/kagura-ai/memory-cloud"
fundingLinks: ["GITHUB:https://github.com/JFK"]
discussionCount: 1
---

English · <a href="README.ja.md">日本語</a>

  An MCP server that gets smarter every time you search:<br>
  hybrid search + a neural memory graph that learns which memories belong together.

  Works with Claude, ChatGPT, Gemini, and any MCP-compatible client.<br>

## Why Kagura Memory Cloud?

> **Your AI forgets everything after each conversation. Kagura fixes that — and gets smarter every time you search.**

Most AI memory tools are just vector databases with a chat wrapper. Kagura is different — it implements the full **LLM Knowledge Base** pattern (Karpathy's [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)) at team scale:

| Approach | Storage | Compounding | Scale |
|---|---|---|---|
| Vector DB / RAG | Embedded chunks | None — retrieve-only | Any |
| Karpathy's LLM Wiki | Markdown files | LLM rewrites pages | Personal (~100 pages) |
| **Kagura Memory Cloud** | **PostgreSQL + Qdrant + Neural graph** | **Hebbian + Sleep Maintenance** | **Team / org** |

| Feature | Description |
|---------|-------------|
| **Adaptive Memory** | Every search automatically strengthens connections between related memories. The more you use it, the better `explore()`…
