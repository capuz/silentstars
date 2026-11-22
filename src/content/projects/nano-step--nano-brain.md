---
repo: "nano-step/nano-brain"
name: "nano-brain"
description: "Persistent memory & code intelligence server for AI coding agents. Deploy on VPS for shared memory across machines. Hybrid search (BM25 + pgvector), knowledge graph, impact analysis. 14 MCP tools. Works with Claude Code, OpenCode, Cursor, and any MCP client."
readmeQualityOk: true
url: "https://github.com/nano-step/nano-brain"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["ai-agents", "ai-memory", "claude-code", "golang", "hybrid-search", "knowledge-graph", "mcp", "opencode", "pgvector", "rag"]
stars: 13
forks: 2
openIssues: 44
closedIssues: 299
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-23T15:24:46Z"
lastCommitAt: "2026-11-22T02:06:23Z"
lastReleaseAt: "2026-05-16T04:11:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 57
maintainers: ["kokorolx", "hoainho"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea6118da155a5a8f770f207b6aec3cda4a5cf4b7443712465a6c6e680c96f1a3/nano-step/nano-brain"
---

# nano-brain

**Built for agents. Not humans.**

Agent-oriented memory and code intelligence over MCP. AI agents don't read docs — they call tools. nano-brain gives them structured context, symbol lookup, call-chain tracing, and change-impact analysis across sessions and repos.

---

## What it is

nano-brain is an infrastructure layer between your AI agent and your code. It solves two problems agents have:

1. **Session amnesia** — agents forget everything when a session ends. nano-brain harvests, indexes, and retrieves past sessions and saved decisions.
2. **Codebase blindness** — agents can't cheaply trace dependencies, measure blast radius, or map an execution path. nano-brain builds a code graph and exposes it as MCP tools.

Self-hosted (Go binary + PostgreSQL), works with any MCP client (Claude Code, OpenCode, Cursor, …), and returns structured results — not raw file bytes.

---
