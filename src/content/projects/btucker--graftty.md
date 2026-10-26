---
repo: "btucker/graftty"
name: "graftty"
description: "Worktree-centric libghostty-based terminal multiplexer for macOS, iOS & iPadOS"
readmeQualityOk: true
url: "https://github.com/btucker/graftty"
language: "Swift"
languages: ["Swift"]
languagePcts: [93]
topics: ["ghostty", "claude-code", "multi-agent", "terminal"]
stars: 5
forks: 1
openIssues: 72
closedIssues: 67
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-16T23:46:43Z"
lastCommitAt: "2026-10-26T18:07:11Z"
lastReleaseAt: "2026-04-29T20:29:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["btucker", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bb79d64f9480a2cf61cc3227efc5ebe6ec735751082b135ffbc74f94ad8d615/btucker/graftty"
---

# Graftty

A macOS worktree-aware terminal multiplexer built on [libghostty](https://ghostty.org) & [zmx.sh](https://zmx.sh/).

Graftty organizes persistent terminal sessions by git worktree. Each worktree in your sidebar has its own split layout of terminals that stay alive across worktree switches, and a CLI (`graftty`) lets running processes interact with the Graftty UI.

## Installing

```sh
brew tap btucker/graftty
brew install --cask graftty
```

Installs `Graftty.app` to `/Applications` and symlinks the `graftty` CLI onto `PATH`. On first launch, macOS will block the app with Gatekeeper — approve it under System Settings → Privacy & Security (on Sonoma, right-click → Open). Uninstall with `brew uninstall --cask --zap graftty`.

Graftty updates itself. On first launch, you'll be asked whether
Graftty may check for updates automatically — if you agree, a small
indicator appears in the window titlebar when a new version is
available, and clicking it installs the update. You can also trigger a
check manually from `Graftty → Check for Updates…`.

## Linux hosts

Run the headless Swift host on Ubuntu 24.04, then connect from the Mac app.
**Set Up Linux Host…** installs it over…
