---
repo: "jedarden/NEEDLE"
name: "NEEDLE"
description: "Headless agent orchestrator with deterministic state machine — processes a bead queue, dispatches to any LLM CLI, handles every outcome. Rust."
readmeQualityOk: true
url: "https://github.com/jedarden/NEEDLE"
homepage: "https://jedarden.com/projects/needle/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["agentic-ai", "ai-agents", "autonomous-agents", "claude", "llm", "orchestration", "rust"]
stars: 18
forks: 2
openIssues: 2
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-03-21T01:27:43Z"
lastCommitAt: "2026-08-30T00:41:15Z"
lastReleaseAt: "2026-07-06T03:56:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c62bb669d1014619211d480a4e6bc42be817c3d5af39551b9455a8e736a900/jedarden/NEEDLE"
---

# 🧵 NEEDLE

**N**avigates **E**very **E**nqueued **D**eliverable, **L**ogs **E**ffort

> Deterministic bead processing with explicit outcome paths.

NEEDLE is a universal wrapper for headless coding CLI agents. It processes a shared bead queue in deterministic order, dispatching work to any headless CLI (Claude Code, OpenCode, Codex, Aider) and handling every outcome through an explicit, predefined path.

---

## 🚀 Quickstart

```bash
# Install the latest release (prebuilt binary: Linux x86_64; other targets: build from source)
curl -fsSL https://github.com/jedarden/NEEDLE/releases/latest/download/install.sh | bash

# Or build from source (uses the toolchain pinned in rust-toolchain.toml)
cargo install --git https://github.com/jedarden/NEEDLE

# Install a bead backend (required)
# The bead-rs backend manages your workspace's bead store (SQLite + checkpoint)
cargo install --git https://github.com/jedarden/bead-rs --bin bead
# See https://github.com/jedarden/bead-rs for backend details and prebuilt installers (coming soon)

# Configure your bead workspace backend (required)
cd /path/to/your/workspace
cat > .needle.yaml << 'EOF'
bead_cli:
  backend: bead-rs  # or 'bead-forge' for…
