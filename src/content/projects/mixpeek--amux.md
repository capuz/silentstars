---
repo: "mixpeek/amux"
name: "amux"
description: "Open-source control plane for AI coding agents. Run an AI engineering team: parallel Claude Code, Codex, and Gemini workers with a shared board, atomic tasks, schedules, loops, origin-stamped messaging, model switching, and self-healing recovery. One dashboard, or your phone. MIT, single Rust binary."
readmeQualityOk: true
url: "https://github.com/mixpeek/amux"
homepage: "https://amux.io"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [47, 28]
topics: ["tmux", "agent-orchestration", "ai-agents", "claude", "claude-code", "developer-tools", "llm", "agentic-ai", "ai-coding-assistant", "anthropic"]
stars: 461
forks: 53
openIssues: 8
closedIssues: 38
watchers: 2
contributors: 16
recentReleases: 1
createdAt: "2026-02-18T14:30:56Z"
lastCommitAt: "2026-09-19T01:20:10Z"
lastReleaseAt: "2026-07-13T17:39:01Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 96
undervaluedScore: 29
maintainers: ["esteininger"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a0dae9bc2446c392554e2bb4bae1c03bb7da307e62c8ffb2979d39c753b886a/mixpeek/amux"
discussionCount: 3
---

</p>

**amux is the open-source control plane for AI coding agents.** Run an AI engineering team: dozens of parallel workers (Claude Code, Codex, Gemini CLI, OpenCode, Ollama) coordinated from one web dashboard or your phone. Local-first, self-hosted, SQLite-backed, one Rust binary.

What the fleet gets that a single agent never had:

- **Atomic tasks**: a shared kanban board where claiming is compare-and-swap, so two workers can never grab the same card; `done` requires evidence, `verified` requires a peer check
- **Worker awareness**: every worker sees the fleet (who is live, what they own, what they are doing) and can peek into any peer's terminal before interrupting
- **@ each other**: origin-stamped inter-worker messaging; the server records the true sender, so provenance is a fact rather than a claim
- **Steering**: type into any running session from the dashboard or phone; redirect mid-task without stopping the run
- **Schedules & loops**: cron-style recurring prompts (`daily at 9am`, `every 15m`) plus self-pacing autonomous loops for overnight runs
- **Groups & scope**: workers organize into lanes that share memory, environment, and gates; settings resolve card → worker →…
