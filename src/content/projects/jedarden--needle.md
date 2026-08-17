---
repo: "jedarden/NEEDLE"
name: "NEEDLE"
description: "Headless agent orchestrator with deterministic state machine — processes a bead queue, dispatches to any LLM CLI, handles every outcome. Rust."
readmeQualityOk: true
url: "https://github.com/jedarden/NEEDLE"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["agentic-ai", "ai-agents", "autonomous-agents", "claude", "llm", "orchestration", "rust"]
stars: 16
forks: 2
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-03-21T01:27:43Z"
lastCommitAt: "2026-08-17T04:19:28Z"
lastReleaseAt: "2026-07-06T03:56:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/26aeeabac39db12a56b8e8278c1e729e7048069c390159d6ac33daff4c725b6b/jedarden/NEEDLE"
---

# 🧵 NEEDLE

**N**avigates **E**very **E**nqueued **D**eliverable, **L**ogs **E**ffort

> Deterministic bead processing with explicit outcome paths.

NEEDLE is a universal wrapper for headless coding CLI agents. It processes a shared bead queue in deterministic order, dispatching work to any headless CLI (Claude Code, OpenCode, Codex, Aider) and handling every outcome through an explicit, predefined path.

---

## 🚀 Quickstart

```bash
# Install the latest release (prebuilt binary, Linux x86_64/aarch64)
curl -fsSL https://raw.githubusercontent.com/jedarden/NEEDLE/main/install.sh | bash

# Or build from source (needs Rust 1.75+, see rust-toolchain.toml)
cargo install --git https://github.com/jedarden/NEEDLE

# Run a worker against a bead-tracked workspace
cd /path/to/your/workspace
needle run --agent claude --identity alpha
```

The installer drops `needle` in `~/.local/bin` (override with `NEEDLE_INSTALL_PATH`);
make sure that directory is on your `PATH`.

A worker starts, claims the next bead, dispatches to your chosen agent CLI, and loops. Multiple workers can run in parallel against the same workspace — coordination is handled by the shared bead queue (no central…
