---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "fak — the Fused Agent Kernel: one Go binary that turns a tool-using agent (Claude Code, Codex, Cursor, any OpenAI/Anthropic/MCP client) into a managed agent: cache-stable model traffic, context compaction + crash resume, nanosecond tool-call policy, local GGUF serving with SSD expert offload."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "llmops"]
stars: 30
forks: 12
openIssues: 1319
closedIssues: 4754
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-08-10T05:00:15Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — the Fused Agent Kernel

**A management layer for the AI agent you already use.**

Run Claude Code, Codex, OpenCode, or your own client through one binary to reuse stable model work, compact long sessions, enforce tool policy, recover interrupted runs, and see what the agent actually did.

The agent still owns the task and user interface. Your provider or local server still generates the tokens. fak sits between them as the management plane for the session, where it can manage model traffic, context, tools, and recovery without asking you to adopt a new agent framework.

> **TL;DR:** install fak, then run `fak guard -- claude`. You keep the same agent, interface, and login; fak reduces repeated model work, keeps long sessions within a context budget, and can stop out-of-policy tools before they run.

*This page is the front door, and the only one aimed at a reader who has not decided yet. Every other root page is narrower:…
