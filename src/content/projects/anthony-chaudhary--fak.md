---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "fak — the Fused Agent Kernel: one Go binary for AI agent loops. Wrap Claude Code/Codex/Cursor, keep long sessions cache-efficient, route work per call, run local GGUF models, and adjudicate tool calls."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "agent"]
stars: 12
forks: 5
openIssues: 1452
closedIssues: 3314
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-07-15T05:52:38Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 61
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — the Fused Agent Kernel

**Same agent, smaller bill. Wrap Claude Code, Codex, or Cursor in one command — cheaper, self-resuming, and checked on every tool call.**

fak is one small program you run in front of the agent you already use. Your model, IDE, and keys don't change.

```bash
fak guard -- claude   # run it in front of your agent: your Pro/Max plan, no API key, every tool call gets a verdict
```

**Pick your path:** [wrap your agent](#start-in-one-command) · [run it at the level you need](#run-it-at-the-level-you-need) · [15-min tutorial — no key, no GPU](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/fak/tutorial.md) · [see it on video](https://github.com/anthony-chaudhary/fak/blob/HEAD/visuals/hero-video.mp4) · [install](#install)

## Why people run it

- 💸 **Pay less for the same run** — **~4.1× less work than a tuned warm-cache stack** (up to **6.95×** on bigger models). Every agent shares one cached setup instead of rebuilding it each turn, on top of your provider's cache…
