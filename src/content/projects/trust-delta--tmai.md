---
repo: "trust-delta/tmai"
name: "tmai"
description: "Tactful Multi Agents Interface - Monitor and control multiple AI agents (Claude Code, etc.) running in tmux"
url: "https://github.com/trust-delta/tmai"
homepage: "https://crates.io/crates/tmai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["agents", "ai", "claude", "codex", "tmux", "tui", "automation", "claude-code", "cli", "developer-tools"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 218
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-01-25T00:08:51Z"
lastCommitAt: "2026-06-27T00:36:34Z"
lastReleaseAt: "2026-05-10T17:12:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 70
maintainers: ["trust-delta", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38765d91915fb6b4172b559cb1e4858a1400116cde7687c0fdb3b43c0e0aca7c/trust-delta/tmai"
---

# tmai

**Tactful Multi Agent Interface** — the exoskeleton a *Producer* agent uses to run multi-project development, and the console you support and observe through.

You talk to one agent per project — the Producer. It remembers your past decisions, tracks what changed (CI, PRs, in-flight work), dispatches a worker when implementation would crowd the conversation, and brings *you* only the decisions that genuinely need a human. tmai is what makes that possible: the continuity layer, the worker spawn/steer surface, the always-on substrate, and the window you watch through.

> **日本語版**: [README.ja.md](./README.ja.md)

</p>

> **This is the tmai monorepo and release hub.** The UI clients (`clients/react/`, `clients/ratatui/`), the wire contract (`api-spec/`), the installer, and the release pipeline live here; only the engine source stays private in [`tmai-core`](https://github.com/trust-delta/tmai-core).

## What tmai is for

Run several coding projects in parallel: one **Producer** per project — a Claude Code session you talk to — and **workers** under it, one bounded-and-report-back agent per repo. The Producer is read-mostly: it holds the project's memory and current decisions,…
