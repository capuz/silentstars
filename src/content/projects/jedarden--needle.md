---
repo: "jedarden/NEEDLE"
name: "NEEDLE"
description: "Headless agent orchestrator with deterministic state machine — processes a bead queue, dispatches to any LLM CLI, handles every outcome. Rust."
readmeQualityOk: true
url: "https://github.com/jedarden/NEEDLE"
homepage: "https://jedarden.com/projects/needle/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["agentic-ai", "ai-agents", "autonomous-agents", "claude", "llm", "orchestration", "rust"]
stars: 31
forks: 4
openIssues: 5
closedIssues: 11
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-21T01:27:43Z"
lastCommitAt: "2026-10-29T10:32:59Z"
lastReleaseAt: "2026-07-06T03:56:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 45
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/098d558617b3029fe675bab20704905939d2e48b4e8d081bfd63e5b0b61ec4ff/jedarden/NEEDLE"
---

# 🧵 NEEDLE

**N**avigates **E**very **E**nqueued **D**eliverable, **L**ogs **E**ffort

> Deterministic bead processing with explicit outcome paths.

NEEDLE is a wrapper for headless coding CLI agents. It processes a shared bead queue in deterministic order, dispatching work through its supported built-in adapters (Claude Code, OpenCode, Codex, and Aider) and handling every outcome through an explicit, predefined path.

---

## 🚀 Quickstart

Prerequisites: `git`, `tmux`, and an agent CLI on your `PATH` — the flow below uses
[Claude Code](https://claude.ai/code) (`claude`). Prebuilt binaries are Linux x86_64;
everything else builds from source (see below).

```bash
# 1. Install needle, its transform helpers, and the bead-rs backend.
#    Release assets are published on the GitHub mirror; source remains Forgejo.
curl -fsSL https://github.com/jedarden/NEEDLE/releases/latest/download/install.sh | bash

# 2. Initialize your repo with the bead-rs backend
cd <your-repo> && needle init --backend bead-rs

# 3. Make sure your branch has an upstream — the shipped-work gate (on by
#    default) verifies that each closed bead's commit was pushed
git push -u origin "$(git branch…
