---
repo: "piperhex/codex-switch"
name: "codex-switch"
description: "official website"
originalDescription: "official website"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/piperhex/codex-switch"
homepage: "https://blog.onepiper.cloud/codex-switch/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [53, 25]
topics: ["codex", "codex-switch", "codex-switcher", "codex-account-manager", "codex-switch-dashbord"]
stars: 50
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-01T15:46:22Z"
lastCommitAt: "2026-07-20T06:32:41Z"
lastReleaseAt: "2026-07-03T03:30:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ba911b0b481994bde9a6951575347ce19294c0e995efe238a4bb27adfc5b36b1/piperhex/codex-switch"
---

# Codex Switch

> For English documentation, please see [README_EN.md](https://github.com/piperhex/codex-switch/blob/HEAD/README_EN.md).

Codex Switch is a Tauri 2 desktop application that prioritizes local usage, designed for logging in, saving, and switching between multiple Codex / ChatGPT accounts. It also supports managing third-party model service providers, optional local hot-switching proxies, and syncing with a self-built backend for management backend and read-only mobile use.

QQ Technical Exchange Group: `1051213898`.

## Product Screenshots

### Account Management and Local Proxy

### Third-party Model Service Providers

### Token Consumption Summary

### Settings

### Floating Usage Ball

### Dream Skin Skinning

Dream Skin project repository: [Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin)

## Features

- Reuses the OAuth 2.0 + PKCE login flow of Codex CLI.
- Supports in-app login window and system browser login.
- Supports importing and managing multiple `auth.json` files, including common third-party JSON exports and multi-account JSON files.
- Atomic switching of `$CODEX_HOME/auth.json` (default is `~/.codex/auth.json`).
- Export and…
