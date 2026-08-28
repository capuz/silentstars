---
repo: "jedarden/NEEDLE"
name: "NEEDLE"
description: "Headless agent orchestrator with deterministic state machine — processes a bead queue, dispatches to any LLM CLI, handles every outcome. Rust."
readmeQualityOk: true
url: "https://github.com/jedarden/NEEDLE"
homepage: "https://jedarden.com/projects/needle/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agentic-ai", "ai-agents", "autonomous-agents", "claude", "llm", "orchestration", "rust"]
stars: 17
forks: 2
openIssues: 2
closedIssues: 8
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-03-21T01:27:43Z"
lastCommitAt: "2026-08-28T12:22:26Z"
lastReleaseAt: "2026-07-06T03:56:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 55
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d23519440e47ba5b1f4d957e3cf14ca63056d1368c9736bfe15fe0868f2b7ed/jedarden/NEEDLE"
---

# 🧵 NEEDLE

**N**avigates **E**very **E**nqueued **D**eliverable, **L**ogs **E**ffort

> Deterministic bead processing with explicit outcome paths.

NEEDLE is a universal wrapper for headless coding CLI agents. It processes a shared bead queue in deterministic order, dispatching work to any headless CLI (Claude Code, OpenCode, Codex, Aider) and handling every outcome through an explicit, predefined path.

---

## 🚀 Quickstart

```bash
# Install the latest release (prebuilt binary, Linux x86_64/aarch64)
curl -fsSL https://github.com/jedarden/NEEDLE/releases/latest/download/install.sh | bash

# Or build from source (needs Rust 1.75+, see rust-toolchain.toml)
cargo install --git https://github.com/jedarden/NEEDLE

# Configure your bead workspace backend (required)
cd /path/to/your/workspace
cat > .needle.yaml << 'EOF'
bead_cli:
  backend: bead-rs  # or 'bead-forge' for legacy bf/br workspaces
EOF

# Run a worker
needle run --agent claude --identity alpha
```

The installer drops `needle` in `~/.local/bin` (override with `NEEDLE_INSTALL_PATH`);
make sure that directory is on your `PATH`.

### 🔒 Security Note

The installer automatically verifies SHA-256 checksums to ensure the…
