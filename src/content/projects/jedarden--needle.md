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
stars: 25
forks: 3
openIssues: 5
closedIssues: 11
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-03-21T01:27:43Z"
lastCommitAt: "2026-09-17T08:49:44Z"
lastReleaseAt: "2026-07-06T03:56:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 47
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8270edd4004515c04aa891415935717fcf461503acee1a377486032bca16ff1/jedarden/NEEDLE"
---

# 🧵 NEEDLE

**N**avigates **E**very **E**nqueued **D**eliverable, **L**ogs **E**ffort

> Deterministic bead processing with explicit outcome paths.

NEEDLE is a universal wrapper for headless coding CLI agents. It processes a shared bead queue in deterministic order, dispatching work to any headless CLI (Claude Code, OpenCode, Codex, Aider) and handling every outcome through an explicit, predefined path.

---

## 🚀 Quickstart

Prerequisites: `git`, `tmux`, and an agent CLI on your `PATH` — the flow below uses
[Claude Code](https://claude.ai/code) (`claude`). Prebuilt binaries are Linux x86_64;
everything else builds from source (see below).

```bash
# 1. Install needle, its transform helpers, and the bead-rs backend
curl -fsSL https://github.com/jedarden/NEEDLE/releases/latest/download/install.sh | bash

# 2. Initialize your repo with the bead-rs backend
cd <your-repo> && needle init --backend bead-rs

# 3. Make sure your branch has an upstream — the shipped-work gate (on by
#    default) verifies that each closed bead's commit was pushed
git push -u origin "$(git branch --show-current)"

# 4. Create the bead store
bead init --prefix <name>

# 5. Create your first bead
bead…
