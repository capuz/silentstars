---
repo: "SmooAI/smooth"
name: "smooth"
description: "Smooth (th) — a security-first AI agent orchestration platform and CLI."
url: "https://github.com/SmooAI/smooth"
homepage: "https://smoo.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agent-orchestration", "ai-agent", "cli", "developer-tools", "llm", "rust"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-30T00:56:43Z"
lastCommitAt: "2026-07-03T06:23:50Z"
lastReleaseAt: "2026-04-18T17:58:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["brentrager"]
openGraphImageUrl: "https://opengraph.githubassets.com/819459570bd5346dc60b3dfa62b6485c563f11bbf9dc9c434fd7b9a36105e6ca/SmooAI/smooth"
---

</p>

</p>

</p>

</p>

---

> Smooth is the central CLI and orchestration platform for Smoo AI. It dispatches teams of AI agents — Smooth operatives — to work on real projects, with adversarial tool surveillance. No Docker. No Node.js. No runtime dependencies. One 10MB binary.

---

## Install

### Homebrew (recommended, macOS + Linux)

```bash
brew install SmooAI/tools/th

# verify
th --version
```

That taps [SmooAI/homebrew-tools](https://github.com/SmooAI/homebrew-tools) and installs the `th` binary on first use; `brew upgrade th` picks up future releases automatically. Every `vX.Y.Z` release bumps the formula's `version` + `sha256` in the tap, so `brew` always tracks the latest published build.

Platforms: Apple Silicon macOS, Linux x86_64, Linux arm64. Windows support is in flight (pearl `th-a165b4` — needs Cargo feature gating so the binary excludes the TUI on Windows; in the meantime, install via WSL).

### `curl | sh`

```bash
curl -fsSL https://raw.githubusercontent.com/SmooAI/smooth/main/install.sh | sh
```

### Build from source

```bash
git clone https://github.com/SmooAI/smooth.git
cd smooth
cargo install --path crates/smooth-cli
```

## Quick Start

```bash
#…
