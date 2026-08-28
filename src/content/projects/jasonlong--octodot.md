---
repo: "jasonlong/octodot"
name: "octodot"
description: "Fast, native keyboard-centric macOS menubar app for GitHub notifications"
readmeQualityOk: true
url: "https://github.com/jasonlong/octodot"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["github", "menubar", "native", "notifications", "swift", "github-notifications", "macos"]
stars: 49
forks: 3
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-02T15:24:05Z"
lastCommitAt: "2026-08-28T14:28:01Z"
lastReleaseAt: "2026-04-04T00:54:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 30
maintainers: ["jasonlong", "robertlyson"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1199665863/5300dd9e-56b9-41e6-9899-371ccb83c06d"
---

# Octodot

Octodot is a native macOS menu bar app for triaging GitHub notifications with a keyboard-first workflow. It is built for fast inbox processing.

https://github.com/user-attachments/assets/0e62ca94-3b98-4b13-8cd0-d77761b9b788

## Overview

Octodot lives in the macOS menu bar and opens a focused notifications panel. It is designed for quick review and triage without keeping the GitHub inbox open in a browser.

Current behavior includes:

- unread badge state in the menu bar icon
- `Inbox` and `Unread` inbox modes
- `Inbox` is designed to feel closer to GitHub's active inbox rather than a raw archive feed
- repository grouping with recency-aware ordering
- optimistic local actions that survive refreshes and relaunches
- background polling that respects GitHub polling headers
- configurable global shortcut
- Vim-style navigation and commands
- native settings window for account, appearance, and shortcuts
- issue and pull request notifications only
- pull request CI status indicators in the list

## Installation

```sh
brew install jasonlong/tap/octodot
```

Requires macOS 14 Sonoma or newer.

Then launch Octodot and sign in with a [classic GitHub…
