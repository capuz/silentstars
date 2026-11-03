---
repo: "jeremiah-k/fetchtastic"
name: "fetchtastic"
description: "Fetchtastic is a utility for downloading and managing the latest Meshtastic Android app and Firmware releases on your PC and/or phone (using Termux). It also provides optional notifications via NTFY."
readmeQualityOk: true
url: "https://github.com/jeremiah-k/fetchtastic"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["downloader", "lora", "meshtastic", "android", "firmware", "termux", "windows", "macos"]
stars: 14
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-07T02:41:42Z"
lastCommitAt: "2026-11-03T11:15:44Z"
lastReleaseAt: "2024-10-20T15:01:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 56
maintainers: ["renovate[bot]", "jeremiah-k"]
openGraphImageUrl: "https://opengraph.githubassets.com/b03734e707cb537981d6b3be4820a9b5fa96df88a9d7e3c9a62ce54bdc2d024f/jeremiah-k/fetchtastic"
---

# Fetchtastic

**A simple, cross-platform utility for downloading and managing Meshtastic firmware and client app releases.**

Fetchtastic automatically downloads the latest Meshtastic firmware and selected client app assets from GitHub, with support for notifications, scheduling, and repository browsing.

Requires Python 3.11+; Python 3.10 and earlier are unsupported.

## ✨ Features

- 🔄 **Automatic Downloads**: Latest firmware and Meshtastic client app assets
- ⚡ **Async Download Engine**: `aiohttp`-based downloads with connection pooling and retry/backoff
- 📱 **Cross-Platform**: Linux, macOS, Windows, and Android (Termux)
- 🗂️ **Repository Browser**: Browse and download files from meshtastic.github.io
- 🔔 **Notifications**: Push notifications via NTFY
- ⏰ **Scheduling**: Automatic downloads via cron/startup scripts
- 🎯 **Smart Selection**: Choose specific devices, APKs, and desktop installers
- 📦 **Auto-extraction**: Extract firmware files from zip archives
- ✅ **Stronger Integrity Checks**: Hash-based verification and ZIP integrity validation
- 🚦 **GitHub API Resilience**: Centralized release fetching, defensive parsing, caching, and rate-limit-aware behavior
- 🧵…
