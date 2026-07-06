---
repo: "piperhex/codex-switch"
name: "codex-switch"
description: "official website"
readmeQualityOk: true
url: "https://github.com/piperhex/codex-switch"
homepage: "https://blog.cuddlebugs.cloud/codex-auth-manager/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [58, 31]
topics: ["codex", "codex-switch", "codex-switcher", "codex-account-manager", "codex-switch-dashbord"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-01T15:46:22Z"
lastCommitAt: "2026-07-06T07:02:43Z"
lastReleaseAt: "2026-07-03T03:30:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7e802b65919fdc502784c10ec8ffd644d34ad673c225bc0f4717abbe45103015/piperhex/codex-switch"
---

# Codex Switch

Codex Switch is a local-first Tauri 2 desktop application for signing in to, storing, and switching between multiple Codex / ChatGPT accounts. It also displays usage windows, reset credits, and lightweight desktop controls for the active account.

## Features

- Reuses the Codex CLI OAuth 2.0 + PKCE login flow
- Supports both an in-app login window and the system browser
- Imports and manages multiple `auth.json` files
- Atomically switches `$CODEX_HOME/auth.json` (defaults to `~/.codex/auth.json`)
- Displays account email, plan, 5-hour / weekly usage, and reset credits
- Refreshes one or all accounts manually or on a timer
- Provides a best-effort **Restart Codex** action from the dashboard and tray after switching accounts
- Adds system tray account switching and an optional always-on-top floating usage bubble
- Supports local UI language, accent color, and floating-bubble preferences
- Keeps tokens in the Rust backend and out of the React UI and application logs

> [!IMPORTANT]
> Credentials are stored in the local application data directory, but the application does not add another layer of encryption. Use a trusted device and protect your operating-system…
