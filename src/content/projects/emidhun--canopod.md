---
repo: "emidhun/canopod"
name: "canopod"
description: "Canopod - menu-bar git-worktree + dev-service manager. Every branch checked out, provisioned, and running side by side."
readmeQualityOk: true
url: "https://github.com/emidhun/canopod"
homepage: "https://emidhun.github.io/canopod/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [36, 32]
topics: ["developer-tools", "git-worktree", "macos", "react", "rust", "tauri"]
stars: 10
forks: 3
openIssues: 26
closedIssues: 50
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-07-19T04:49:04Z"
lastCommitAt: "2026-10-03T09:22:11Z"
lastReleaseAt: "2026-08-13T20:34:28Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 58
maintainers: ["emidhun", "dependabot[bot]", "Jeevanm2004"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1305426243/62ddb04b-47c2-4f45-ac70-fdcaec7c48e8"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/brandmark-dark.svg" />
  </picture>
</p>

<h1 align="center">canopod</h1>

Every branch checked out, provisioned, and running — side by side.</p>

</p>

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/demo-dark.gif" />
  </picture>
</p>

</p>

  <br/>
  <sub>Linux &amp; Windows builds are experimental — <a href="https://github.com/emidhun/canopod/issues">feedback welcome</a>. See <a href="#install">Install</a> for the one-line quarantine fix on macOS.</sub>
</p>

Canopod discovers every worktree of your registered repos, provisions each one (dependencies, an
isolated database, deterministic ports), and lets you start/stop services, watch logs, manage
databases, and change ports — from a tray popover and a main window. Built for fast multi-repo /
submodule workflows like ToolJet.

- **Platform:** macOS **arm64** (Apple Silicon). Linux & Windows ports are experimental — they compile and pass CI, but aren't yet validated on a desktop.
- **Stack:** Tauri 2 (Rust) + React + zustand
- **Latest version:** 0.5.0. See the [release…
