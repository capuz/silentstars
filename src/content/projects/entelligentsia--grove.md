---
repo: "Entelligentsia/grove"
name: "grove"
description: "Structural, byte-precise, token-cheap codebase access for coding agents — tree-sitter over a CLI and an MCP server."
readmeQualityOk: true
url: "https://github.com/Entelligentsia/grove"
homepage: "https://entelligentsia.github.io/grove/"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [72, 26]
stars: 33
forks: 1
openIssues: 1
closedIssues: 19
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-21T12:54:12Z"
lastCommitAt: "2026-07-15T05:33:37Z"
lastReleaseAt: "2026-07-01T02:35:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 49
maintainers: ["devasur"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276024553/e2cf605e-9e3b-4a1f-af8b-21a31a297ba9"
discussionCount: 0
---

# grove

### structural sight for coding agents

One tree-sitter engine&nbsp;·&nbsp;seven tools&nbsp;·&nbsp;a CLI **and** an MCP server&nbsp;·&nbsp;27 languages at runtime

[Quick start](#60-second-start)&nbsp;·&nbsp;[How it works](#how-it-works)&nbsp;·&nbsp;[Proof](#proof)&nbsp;·&nbsp;[Tools](#the-seven-tools)&nbsp;·&nbsp;[Languages](#languages)&nbsp;·&nbsp;[Docs](#documentation)

<br>

<sub>asciinema cast: [`docs/assets/grove_demo.cast`](https://github.com/Entelligentsia/grove/blob/HEAD/docs/assets/grove_demo.cast) — replay with `asciinema play docs/assets/grove_demo.cast`</sub>

</div>

Coding agents burn tokens and round-trips `grep`-ing and reading whole files to
answer *where is this defined, what does it do, who calls it.* grove answers each
with **one symbol, by exact bytes** — behind a stable id the agent reuses across
turns. It's not an LSP; it's the cheap syntactic layer *beneath* one.

## 60-second start

### 1&nbsp;·&nbsp;Install

```bash
curl -fsSL https://raw.githubusercontent.com/Entelligentsia/grove/main/install.sh | sh
```

One line — detects your platform, verifies the sha256. Prefer Homebrew, npm,
cargo, or building from source? →…
