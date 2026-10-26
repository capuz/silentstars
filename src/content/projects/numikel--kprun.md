---
repo: "numikel/kprun"
name: "kprun"
description: "Stop storing API keys in mcp.json and shell profiles. kprun solves this by keeping secrets in an encrypted KeePass vault and injecting them only into spawned processes. Designed for MCP servers, coding agents, and dev scripts. Features: per-proces injection, audit logging, cross-platform, KeePassXC-compatible, CI/CD-ready."
readmeQualityOk: true
url: "https://github.com/numikel/kprun"
homepage: "https://kprun.michalsk.pl/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["cli", "developer-tools", "environment-variables", "keepass", "keepassxc", "mcp", "model-context-protocol", "rust", "secrets-management", "security"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-22T19:04:01Z"
lastCommitAt: "2026-10-26T09:17:31Z"
lastReleaseAt: "2026-07-07T22:38:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 37
maintainers: ["numikel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c850906e767af990c4ed3a38f993120a0b15a66a9bc85f2b53411b45da79b468/numikel/kprun"
discussionCount: 0
---

# kprun v0.7.5

**Stop storing API keys in `mcp.json` and shell profiles.** kprun solves this by keeping secrets in an encrypted KeePass vault and injecting them only into spawned processes — no shell-wide exports, no plaintext config files. Designed for MCP servers, coding agents, and dev scripts. Features: per-process injection, audit logging (key names only), cross-platform (Linux/macOS/Windows), KeePassXC-compatible, CI/CD-ready.

[Releases](https://github.com/numikel/kprun/releases) · [Changelog](https://github.com/numikel/kprun/blob/HEAD/CHANGELOG.md)

**Sections:**
[About](#about) · [How it works](#how-it-works) · [Features](#features) · [Requirements](#requirements) · [Installation](#installation) · [Updating](#updating) · [Quick start](#quick-start) · [Scripts & automation](#scripts-and-automation) · [Coding agents & OpenRouter](#coding-agents-and-openrouter) · [Configuration](#configuration) · [CLI reference](#cli-reference) · [CLI Functions](#cli-functions) · [Export and import](#export-and-import) · [MCP integration](#mcp-integration) · [Automation and cron](#automation-and-cron) · [Project structure](#project-structure) · [Development](#development) · [Security…
