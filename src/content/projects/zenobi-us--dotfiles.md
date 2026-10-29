---
repo: "zenobi-us/dotfiles"
name: "dotfiles"
description: "my workstation setup for linux, windows and mac"
readmeQualityOk: true
url: "https://github.com/zenobi-us/dotfiles"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [36, 35]
topics: ["comtrya", "provisioning"]
stars: 68
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-04-16T23:01:02Z"
lastCommitAt: "2026-10-29T05:49:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 46
maintainers: ["airtonix"]
openGraphImageUrl: "https://opengraph.githubassets.com/be4e3fc092c41f23120bb4c6cf60a55cb26225e0a6132dc1ea9a7edc6fd5f4bc/zenobi-us/dotfiles"
discussionCount: 0
---

# My Dotfiles

Cross-platform configuration for:

- Zsh on Linux and macOS
- PowerShell on Windows
- Development tools managed by mise

## Getting started

Setup has two steps:

1. Install mise.
2. Bootstrap this repository.

## Install mise

### Linux and macOS

Run:

```bash
curl https://mise.run | sh
```

Open a new shell, then verify the installation:

```bash
mise --version
```

### Windows

Open PowerShell as an administrator. Enable the required Windows features:

```powershell
Enable-WindowsOptionalFeature `
  -Online `
  -FeatureName Microsoft-Windows-Subsystem-Linux,VirtualMachinePlatform `
  -All `
  -NoRestart
```

Restart Windows. Then open PowerShell and install mise:

```powershell
winget install --exact --id mise.run
```

Open a new PowerShell window, then verify the installation:

```powershell
mise --version
```

## Bootstrap the dotfiles

The first bootstrap clones this repository to a stable local path. It then applies the platform-specific packages, tools, and dotfiles.

### Linux and macOS

Run:

```bash
mise bootstrap \
  --from https://github.com/zenobi-us/dotfiles.git \
  --from-dir "$HOME/.local/share/dotfiles" \
  --yes
```

Open a new Zsh process after…
