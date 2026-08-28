---
repo: "neoswarm/neosh"
name: "neosh"
description: "A TUI agent orchestrator for power users."
readmeQualityOk: true
url: "https://github.com/neoswarm/neosh"
homepage: "https://neoswarm.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["agentic-ai", "agents", "ai", "ai-agents", "claude", "cli", "coding-assistant", "developer-tools", "extensible", "git-worktree"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-18T07:50:33Z"
lastCommitAt: "2026-08-28T14:24:44Z"
lastReleaseAt: "2026-08-25T17:37:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["meszmate"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1338126352/287d8015-84c3-4c02-94a5-ca667fd46369"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/logo-light.svg">
  </picture>

  <p><b>Neovim for controlling AI agents.</b><br />A terminal workspace where every feature is a plugin.</p>

  <p>
  </p>

  <p>
  </p>

  <p><i>⭐ Help us reach more terminal lovers. Star this repo!</i></p>

</div>

<br />

Run coding agents the way you run Neovim. One workspace, any model, and a public API that every
built-in feature is written on. If you can see it, a plugin can replace it.

## Quick start

```bash
curl -fsSL https://neoswarm.dev/install.sh | sh
```

Or with Homebrew, npm, or from crates.io:

```bash
brew install neoswarm/tap/neosh
npm install -g neosh
cargo install neosh          # builds deno_core from source, so give it a quarter of an hour
```

Or from source:

```bash
git clone https://github.com/neoswarm/neosh
cd neosh
cargo run
```

No API key needed. An existing `claude` login works as is, and 423 models are reachable before you
configure anything. `neosh init` writes a starter config you can edit. Every install option is in
the [installation…
