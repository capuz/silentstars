---
repo: "LHagfoss/rustcode"
name: "rustcode"
description: "Agent Harness or sum"
readmeQualityOk: true
url: "https://github.com/LHagfoss/rustcode"
homepage: "https://rustcode.lhagfoss.com"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [79, 20]
topics: ["agent", "agent-harness", "ai", "ratatui", "rust", "tui", "llm", "agent-client-protocol", "ai-agent", "ai-coding-assistant"]
stars: 12
forks: 2
openIssues: 6
closedIssues: 713
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-06T08:53:35Z"
lastCommitAt: "2026-10-29T12:26:12Z"
lastReleaseAt: "2026-07-21T17:59:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["LHagfoss"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1290807019/78e2f657-c1ac-4676-97d7-5f000c0b14bd"
---

&nbsp;
  &nbsp;

`rustcode` is a lightweight terminal (TUI) coding agent. It started as a way to
test Apple's on-device Foundation Models and turned into a much deeper project.
It works with Ollama, any OpenAI-compatible API, and your existing ChatGPT,
GitHub Copilot or Claude subscription.

## Install

**macOS and Linux**

```bash
curl -fsSL https://rustcode.lhagfoss.com/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://rustcode.lhagfoss.com/install.ps1 | iex
```

**Homebrew (macOS)**

```bash
brew tap lhagfoss/tap
brew trust lhagfoss/tap
brew install rustcode
```

**From source**

```bash
git clone https://github.com/lhagfoss/rustcode.git
cd rustcode
cargo install --path rustcode/tui
```

Prebuilt binaries cover Linux x86_64 and ARM64, macOS Apple Silicon and Windows x86_64.
Update with `rustcode --update`, `/update` inside the TUI, or
`brew upgrade rustcode`. Platform details, the desktop app and source builds
are in the [install guide](https://github.com/LHagfoss/rustcode/blob/HEAD/docs/install.md).

## Quick start

```bash
rustcode                                  # open the TUI in the current project
rustcode --prompt "run the tests"         # one…
