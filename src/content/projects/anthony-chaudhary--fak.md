---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "Agentic Runtime"
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "llmops"]
stars: 36
forks: 14
openIssues: 2712
closedIssues: 8720
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-09-05T07:46:57Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 50
maintainers: ["anthony-chaudhary"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — the fast local runtime for coding agents

**fak is an agent runtime: one binary puts a fast, cache-accelerated boundary between your coding agent and every tool call.**

> **In short:** run coding agents locally with workflow batching and cache reuse, protected by a default-deny capability floor (blocking unauthorized actions).

## Try fak

Run the offline proof with no key, model, or GPU:

```bash
go build -o fak ./cmd/fak
./fak agent --offline  # -> task completed (booked)
```

The poisoned result and destructive operation are blocked; safe tasks complete normally.

Or wrap the agent you already run with one command. In this example, fak forwards Codex subscription credentials with no API key required and blocks tools outside the allowed policy. The capability floor stops unsafe calls without breaking the task:

```bash
fak guard -- codex
```

The agent keeps working inside that boundary. See the [interactive showcase](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/showcase.html) for the…
