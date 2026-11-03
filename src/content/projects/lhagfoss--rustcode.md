---
repo: "LHagfoss/rustcode"
name: "rustcode"
description: "Agent Harness or sum"
readmeQualityOk: true
url: "https://github.com/LHagfoss/rustcode"
homepage: "https://rustcode.lhagfoss.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["agent", "agent-harness", "ai", "ratatui", "rust", "tui", "llm", "agent-client-protocol", "ai-agent", "ai-coding-assistant"]
stars: 12
forks: 2
openIssues: 18
closedIssues: 798
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-06T08:53:35Z"
lastCommitAt: "2026-11-03T11:16:17Z"
lastReleaseAt: "2026-07-21T17:59:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["LHagfoss"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1290807019/78e2f657-c1ac-4676-97d7-5f000c0b14bd"
---

One app for your coding agents.<br/>

RustCode runs Claude Code, Codex, Gemini CLI, OpenCode, or its own agent,
side by side in one desktop app. Each thread picks its agent, model and
effort; threads can run in their own git worktree, and an agent can start
and message other threads.

## Install

```bash
curl -fsSL https://rustcode.lhagfoss.com/install.sh | bash   # macOS, Linux
irm https://rustcode.lhagfoss.com/install.ps1 | iex          # Windows
```

This installs two things: the **RustCode app** and the **`rustcode`
command**, RustCode's own agent in the terminal. Details and other options
are in the [install guide](https://github.com/LHagfoss/rustcode/blob/HEAD/docs/install.md).

## What you get

- **Every agent, one place.** Sign in to each agent once; switch harness,
  model and effort per thread ([harnesses](https://github.com/LHagfoss/rustcode/blob/HEAD/docs/harnesses.md)).
- **Work in parallel.** Worktree threads, a live sidebar of what runs and
  what waits for you, fan-out and compare ([orchestrator](https://github.com/LHagfoss/rustcode/blob/HEAD/docs/orchestrator.md)).
- **Stay in control.** Approvals, per-turn checkpoints, review of every
  change before it lands.
-…
