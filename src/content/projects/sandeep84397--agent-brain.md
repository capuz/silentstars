---
repo: "sandeep84397/agent-brain"
name: "agent-brain"
description: "Persistent decision memory for AI coding agents. MCP server for Claude Code, Cursor, Cline."
readmeQualityOk: true
url: "https://github.com/sandeep84397/agent-brain"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["agent-memory", "ai-agents", "anthropic", "claude-code", "cursor", "developer-tools", "llm-tools", "mcp", "mcp-server", "python"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-10T15:49:53Z"
lastCommitAt: "2026-07-12T06:17:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 35
maintainers: ["sandeep84397"]
openGraphImageUrl: "https://opengraph.githubassets.com/78a8715cb6df1309101327a9d36957d58297fae25c756213eba056c889780357/sandeep84397/agent-brain"
---

# Agent Brain

**Enforced, persistent decision memory for AI code agent teams — that survives context compaction.** Agents log decisions and outcomes, learn from past rejections, and resume their pending roadmap after a `/compact` instead of re-researching it. Hooks make it mandatory (not "stored and hoped for"). And code reads route through SAN compression (~80% fewer tokens, tokenizer-measured) so the context window fills slower in the first place.

**Portable across agent runtimes — your knowledge isn't trapped in one tool.** Agent Brain is an [MCP](https://modelcontextprotocol.io) server, so **Claude Code** and **Codex** can both drive the *same* brain with MCP tools, standing protocol, and lifecycle hooks — switch agents for price or capability without resetting your project's accumulated decisions and SAN. Any MCP host works (Cursor, Cline, Continue, …). See [docs/adapters.md](https://github.com/sandeep84397/agent-brain/blob/HEAD/docs/adapters.md); run `./setup.sh` for the easiest install.

## Contents

- [What This Does](#what-this-does) · [Features](#features)
- [Quick Start](#quick-start) — install in 2 minutes
- [How To Use It](#how-to-use-it) — the agent loop, a worked…
