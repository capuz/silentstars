---
repo: "zajca/pohunek"
name: "pohunek"
description: "Headless multihost backbone for coding agents. Durable sessions, one JSON contract, your own tooling on top."
readmeQualityOk: true
url: "https://github.com/zajca/pohunek"
homepage: "https://pohunek.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["agent-orchestration", "ai-agents", "claude-code", "cli", "codex", "coding-agents", "daemon", "developer-tools", "hermes-agent", "multihost"]
stars: 8
forks: 1
openIssues: 258
closedIssues: 717
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-20T19:52:19Z"
lastCommitAt: "2026-11-02T13:38:53Z"
lastReleaseAt: "2026-06-29T14:16:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 54
maintainers: ["zajca"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1275518994/06678e71-a18a-4bc5-8eca-5440296477be"
---

·
  ·
  ·

**pohunek** is a headless, multihost backbone for coding agents. One small Rust
daemon per machine. One durable terminal per Codex, Claude Code, or Hermes
Agent session. One versioned JSON contract for everything you build on top.

> A *pohunek* is the farmhand boy who drives the draft animals. He does not
> plow himself — he keeps the team moving.

The agents do the plowing. pohunek keeps them running on the right machine, in
the right worktree, and tells you or your tooling when one of them needs
attention.

> **Status: pre-1.0, experimental.** Wire shapes, config files, and on-disk
> metadata may change freely between releases. Runs on Linux x86_64 and on
> macOS on Apple Silicon.

## Two machines, one minute

```bash
# Which of your overlay peers already run a daemon? No tokens, no server.
pohunek host discover

# Start Codex on the build box, in a fresh worktree, with its first prompt.
# Codex (like Claude Code and Hermes) is served only by its official package:
# install it on buildbox first, then its hooks with `pohunek integration install
# --agent codex` (docs/install.md, "Install official runtime packages from the
# release archive").
# The project name…
