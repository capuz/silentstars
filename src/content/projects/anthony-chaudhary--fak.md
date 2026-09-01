---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "Create your Agentic AIs."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "llmops"]
stars: 34
forks: 13
openIssues: 2591
closedIssues: 7857
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-09-01T08:46:13Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 50
maintainers: ["anthony-chaudhary"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — configure your agents for the task at hand

**One binary puts a fast, enforceable boundary between your agent and every tool call.**

> **In short:** run the offline proof, then wrap your existing agent with a capability floor.

## Try fak

Run the offline proof with no key, model, or GPU:

```bash
go build -o fak ./cmd/fak
./fak agent --offline  # -> task completed (booked)
```

The poisoned result and destructive operation are blocked; the safe task still completes.

Or wrap the agent you already use. In this example, fak forwards Codex's existing subscription credential and blocks tools outside the configured capability allow-list. The floor limits what the agent can do without stopping the safe task:

```bash
fak guard -- codex
```

The agent keeps working inside that boundary. See the [interactive showcase](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/showcase.html) for the guided tour.

## Latest hardware results — 2026-08-28

The front page shows one row per supported hardware…
