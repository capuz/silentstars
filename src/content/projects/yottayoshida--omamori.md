---
repo: "yottayoshida/omamori"
name: "omamori"
description: "AI Agent's Omamori — protect your system from dangerous commands executed via AI CLI tools"
url: "https://github.com/yottayoshida/omamori"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 18
closedIssues: 121
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-13T07:07:22Z"
lastCommitAt: "2026-06-24T00:21:22Z"
lastReleaseAt: "2026-03-22T11:11:36Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 96
undervaluedScore: 50
maintainers: ["yottayoshida", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aab3f7db89b2241ab30d8b5c97834b6f2f4ce5ea545d47ca9680c0f2dcc26beb/yottayoshida/omamori"
---

# omamori

> Deterministic semantic guard for AI CLI tools. Blocks covered destructive commands and self-disablement attempts, with tamper-evident audit trails.
>
> Fast local checks — no model calls, no daemon, no network dependency.

omamori is not a sandbox or a permission classifier. It is a local deterministic semantic guard for AI-triggered shell commands: it blocks covered destructive command classes before execution, blocks AI-driven self-disablement attempts, and runs alongside sandbox isolation and provider-level permission systems.

**macOS only** — terminal commands are passed through unless an AI tool environment is detected. See [Tool Compatibility](#tool-compatibility) for supported AI tools and coverage.

## Quick Start

```bash
# Install (macOS)
brew install yottayoshida/tap/omamori

# One-command setup: shims + hooks + shell PATH + verify
omamori setup
```

That's it. `setup` installs shims and hooks, appends `$HOME/.omamori/shim` to your shell profile, and runs `omamori doctor` — all in one step. Works with Claude Code Auto mode, no extra config needed.

> **Already installed?** `omamori setup` is idempotent — safe to re-run after upgrades.
> For non-interactive…
