---
repo: "ssfun/CLIProxyAPI-Pro"
name: "CLIProxyAPI-Pro"
description: "CLIProxyAPI Pro is a minimal customization-layer for CLIProxyAPI with SQLite usage service and account-inspection scheduler."
originalDescription: "CLIProxyAPI Pro is a minimal customization-layer for CLIProxyAPI with SQLite usage service and account-inspection scheduler."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ssfun/CLIProxyAPI-Pro"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [48, 32]
stars: 91
forks: 19
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-08T03:13:53Z"
lastCommitAt: "2026-09-19T02:48:13Z"
lastReleaseAt: "2026-05-29T04:29:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 35
maintainers: ["ssfun", "dependabot[bot]", "jung0han"]
openGraphImageUrl: "https://opengraph.githubassets.com/895f629e47a7884e70f860560facc5558bee3910964945058d1e1af1c57047a2/ssfun/CLIProxyAPI-Pro"
---

# CLIProxyAPI Pro

CLIProxyAPI Pro is static business modules and a custom build layer based on two upstream projects:

- `cliproxyapi-pro-core/`: Backend Docker build customization based on `router-for-me/CLIProxyAPI`.
- `cliproxyapi-pro-management/`: Frontend management center customization based on `router-for-me/Cli-Proxy-API-Management-Center`.

This project does not maintain a complete fork of upstream; instead it maintains reusable patches, overlays, and build processes. When releasing, it pulls the latest upstream release, applies this project's customization layer, and generates Pro version artifacts.

## Core Features

- Persist request data with support for import, export, and WebDAV backup
- Account inspection supports Codex, Claude, Antigravity, Gemini CLI, Kimi, xAI
- Account inspection results (quota and account anomaly status) support persistence to quota management and authentication files
- Account inspection supports automated enabling, disabling, deletion, and proactive token refresh
- Account inspection provides optional deep detection for Antigravity soft bans and xAI availability anomalies
- Unified scheduling policy page managing upstream routing behavior…
