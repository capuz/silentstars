---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "fak — the Fused Agent Kernel: one Go binary for AI agent loops. Wrap Claude Code/Codex/Cursor, keep long sessions cache-efficient, route work per call, run local GGUF models, and adjudicate tool calls."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [76, 21]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "agent"]
stars: 8
forks: 5
openIssues: 1107
closedIssues: 2381
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-07-09T20:42:05Z"
lastReleaseAt: "2026-07-07T04:51:53Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 69
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

# fak — the Fused Agent Kernel

**Same agent, smaller bill. Wrap Claude Code, Codex, or Cursor in one command — cheaper, self-resuming, and checked on every tool call.**

fak is one small program you run in front of the agent you already use. Your model, IDE, and keys don't change.

```bash
fak guard -- claude   # run it in front of your agent: your Pro/Max plan, no API key, every tool call gets a verdict
```

**Pick your path:** [wrap your agent](#start-in-one-command) · [15-min tutorial — no key, no GPU](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/fak/tutorial.md) · [see it on video](https://github.com/anthony-chaudhary/fak/blob/HEAD/visuals/hero-video.mp4) · [install](#install)

## Why people run it

- 💸 **Pay less for the same run** — **~4.1× less work than a tuned warm-cache stack** (up to **6.95×** on bigger models). Every agent shares one cached setup instead of rebuilding it each turn, on top of your provider's cache discount.
- 🛟 **Sessions that don't die.** Long runs trim their own history (**~107K tokens** per trim at the high end) and restart themselves after a crash — you never babysit the context window.
- 🔒 **You stay in control.** Every tool call…
