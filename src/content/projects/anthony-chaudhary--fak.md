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
openIssues: 1382
closedIssues: 4443
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-08-07T05:13:33Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — the Fused Agent Kernel

**fak turns a tool-using agent into a managed agent.**

The agent keeps its interface and model. A fak *kernel* — a management plane for one model session, not an OS kernel and not a GPU compute kernel — owns four things from outside it: model traffic and cache reuse, context lifetime, capabilities, and recovery. That pairing is what this page means by a *managed agent*.

> **TL;DR:** install one binary and run `fak agent --offline`. The managed agent still finishes its task while the kernel blocks a poisoned tool result and a destructive operation. No API key, model download, or GPU needed.

*This page is the front door, and the only one aimed at a reader who has not decided yet. Every other root page is narrower: [`GETTING-STARTED.md`](https://github.com/anthony-chaudhary/fak/blob/HEAD/GETTING-STARTED.md) installs it and owns the verbatim proof output, [`START-HERE.md`](https://github.com/anthony-chaudhary/fak/blob/HEAD/START-HERE.md) routes a job you already have,…
