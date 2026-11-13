---
repo: "calghar/gh-account-switcher"
name: "gh-account-switcher"
description: "Tool for quickly switching between multiple GitHub accounts"
readmeQualityOk: true
url: "https://github.com/calghar/gh-account-switcher"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["account-switcher", "automation", "cli-tool", "cross-platform", "developer-tools", "git", "git-config", "github", "multi-account"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-07-07T11:39:08Z"
lastCommitAt: "2026-11-13T11:21:20Z"
lastReleaseAt: "2026-11-13T11:21:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["calghar"]
openGraphImageUrl: "https://opengraph.githubassets.com/66b7f7c859b1e3d7a9438f33bd5db26f7c6fc0e5135ef303d412a07c21fb2f03/calghar/gh-account-switcher"
discussionCount: 1
---

# GitHub Account Switcher

> Modern CLI tool for managing multiple Git identities with automatic switching

## ✨ Features

- **Git includeIf automation** - Set up once, switches automatically by directory
- **SSH config with IdentitiesOnly** - Proper multi-account SSH key isolation
- **Multi-email support** - Multiple emails per profile for different contexts
- **Auto SSH key management** - Platform-specific keychain integration
- **Profile import/export** - Share configurations across machines
- **GPG commit signing** - Automatic GPG key management per profile
- **Cross-platform** - Single binary for macOS, Linux, and Windows

## 🚀 Quick Start

### Installation

#### Option 1: Download Pre-built Binary (Recommended)

```bash
# macOS (Apple Silicon)
curl -L https://github.com/calghar/gh-account-switcher/releases/latest/download/gh-switch-darwin-arm64 -o gh-switch
chmod +x gh-switch
sudo mv gh-switch /usr/local/bin/

# macOS (Intel)
curl -L https://github.com/calghar/gh-account-switcher/releases/latest/download/gh-switch-darwin-amd64 -o gh-switch
chmod +x gh-switch
sudo mv gh-switch /usr/local/bin/

# Linux
curl -L…
