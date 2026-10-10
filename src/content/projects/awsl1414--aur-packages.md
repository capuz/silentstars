---
repo: "awsl1414/aur-packages"
name: "aur-packages"
description: "Maintaining some software packages I care about"
originalDescription: "维护一些自己在意的软件包"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/awsl1414/aur-packages"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-12-06T09:55:37Z"
lastCommitAt: "2026-10-10T09:59:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 69
maintainers: ["github-actions[bot]", "awsl1414"]
openGraphImageUrl: "https://opengraph.githubassets.com/1df8fc41116786800811e06f7491fee41018d3f281541c1667d544bb76823179/awsl1414/aur-packages"
---

# aur-packages

> Arch Linux AUR package maintenance monorepo: package metadata service + automatic update tool + PKGBUILD repository

This repository is a uv workspace monorepo containing two Python applications and AUR package assets:

| Project | Description |
| ---- | ---- |
| [`projects/aur-metadata`](https://github.com/awsl1414/aur-packages/blob/HEAD/projects/aur-metadata/) | Package metadata service: periodically tracks upstream versions, computes file hashes (b2/sha256/sha512), and serves them via HTTP API for the update tool to query |
| [`projects/aur-auto-update`](https://github.com/awsl1414/aur-packages/blob/HEAD/projects/aur-auto-update/) | AUR package auto-update tool: consumes the aur-metadata API and automatically updates the version numbers and checksums of PKGBUILDs under `packages/` |
| `packages/` | AUR PKGBUILDs and local source files (automatically published to AUR by CI after version updates) |

## Quick Start

```bash
git clone https://github.com/awsl1414/aur-packages.git
cd aur-packages

# Install system dependencies (fallback downloader for aur-auto-update)
sudo pacman -S aria2   # or sudo apt install aria2

# Sync dependencies (uv workspace, single…
