---
repo: "isthisgitlab/gurushots-auto-vote"
name: "gurushots-auto-vote"
description: "Cross-platform Electron app for automated voting on GuruShots photography challenges. Features both GUI, android and CLI interfaces with mock mode for testing. Built with Node.js and modern web technologies."
url: "https://github.com/isthisgitlab/gurushots-auto-vote"
homepage: "https://isthisgitlab.github.io/gurushots-auto-vote/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["automation", "autovote", "bot", "cli", "electron", "gui", "gurushots", "nodejs", "autovoting", "android"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-01T20:00:12Z"
lastCommitAt: "2026-06-28T01:32:58Z"
lastReleaseAt: "2025-09-20T21:36:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 78
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0fa012cdb2e8601ec7f01a79acb2a145269cfe5216b9ecd0ee0b6da4c4ee9bb/isthisgitlab/gurushots-auto-vote"
fundingLinks: ["ISSUEHUNT:https://issuehunt.io/r/isthisgitlab/gurushots-auto-vote"]
---

# GuruShots Auto Voter

Automated voting for GuruShots challenges. The same voting engine ships three ways: a desktop **GUI** (Electron), a **CLI** (`gurucli`), and an **Android** app (sideloaded APK) that keeps voting in the background.

**🇱🇻 [Instalācijas un lietošanas ceļvedis latviešu valodā →](docs/INSTALACIJA.md)**

## Table of Contents

- [⚠️ Single-Instance Warning](#️-single-instance-warning)
- [🚀 Features](#-features)
- [📥 Download & Install](#-download--install)
- [🎯 Quick Start](#-quick-start)
- [🔧 Usage](#-usage)
- [⚙️ How Voting Works](#️-how-voting-works)
- [🎛️ Settings Reference](#️-settings-reference)
- [📐 Recommended Setups](#-recommended-setups)
- [📝 Logging](#-logging)
- [🔍 Troubleshooting](#-troubleshooting)
- [🔒 Security](#-security)
- [📄 License & Support](#-license--support)

## ⚠️ Single-Instance Warning

**Run only ONE instance at a time** — one GUI **or** one CLI **or** one phone, never several at once. Multiple instances hammer the GuruShots API in parallel and can cause:

- **Rate-limit errors** — GuruShots blocks your requests
- **Failed voting** — cycles stop working correctly
- **Account restrictions** — temporary limits on your account…
