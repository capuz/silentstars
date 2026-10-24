---
repo: "zqk-os/zqk"
name: "zqk"
description: "The Operating System for Autonomous Agent Swarms The Substrate for Living Software: Sovereign Cells. Verified Truth. Autonomous Organisms."
readmeQualityOk: true
url: "https://github.com/zqk-os/zqk"
homepage: "https://zqk.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-07-31T23:27:23Z"
lastCommitAt: "2026-10-24T08:20:06Z"
lastReleaseAt: "2026-10-23T05:23:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 68
maintainers: ["lanceman", "zqk-lance"]
openGraphImageUrl: "https://opengraph.githubassets.com/f29215f4f57dae59964af2ce0b0fa75188e05c67724cdd511d9abba29173b3db/zqk-os/zqk"
discussionCount: 4
---

# ZQK OS

**The Cellular Knowledge Operating System for autonomous agent swarms.** This repository is **ZQK Core**, the open-core community microkernel. Canonical portal: [Community First-Run Guide](https://github.com/zqk-os/zqk/blob/HEAD/docs/onboarding/COMMUNITY_FIRST_RUN.md).

## Quickstart

### Installation (macOS & Linux)

```sh
# Single-command install (defaults to interactive choice: Go Fast or Walk Through)
curl -sSL https://raw.githubusercontent.com/zqk-os/zqk/main/scripts/install.sh | sh
```

Or install via Homebrew:
```sh
brew tap zqk-os/tap && brew install zqk
```

---

### Choose Your Path: Go Fast vs. Walk Through

ZQK offers two paths for Polyglot projects (Go, Python, TypeScript, Rust):

#### Option 1: Go Fast
*For developers who want immediate token savings with zero learning curve.*

Installs `zqk` and links `zgrep` (`zqk grep`) into your PATH. Drop it directly into Cursor, Claude Code, Cline, or Aider to stop context-window blowouts:

```sh
# Token-budgeted search via zqk grep / zgrep (default 500 tokens, sub-15ms)
zgrep "HandleRequest" --max-tokens 500 -f json

# Go AST structural search
zgrep --ast --kind struct MemoryStore
```

Add this to `.cursorrules`,…
