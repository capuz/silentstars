---
repo: "xtruhlar/brew-automator"
name: "brew-automator"
description: "A CLI tool for automated Homebrew maintenance"
readmeQualityOk: true
url: "https://github.com/xtruhlar/brew-automator"
homepage: "https://medium.com/p/447353c8e3b7"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["automation", "cli-tool", "homebrew", "homebrew-tap", "maintenance", "python"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-22T08:26:38Z"
lastCommitAt: "2026-09-29T08:10:58Z"
lastReleaseAt: "2026-07-22T11:35:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 43
maintainers: ["xtruhlar"]
openGraphImageUrl: "https://opengraph.githubassets.com/962bc69ed5c7f34f3d2ce4d7cd49afe438f5aa9df6ac5408001db400045ae158/xtruhlar/brew-automator"
discussionCount: 1
---

# brew-automator

A CLI tool for automated Homebrew maintenance (`update`, `outdated`, `upgrade`, `cleanup`, `doctor`, `missing`) that sends a report after every run — by email via SMTP and/or to a webhook (ntfy, Slack, Discord or any JSON endpoint) — plus a local macOS notification. The subject line differs depending on whether everything is OK or a problem was found. Covers both formulae and casks, and keeps a history of every run.

## Requirements

- macOS (uses `launchd` for scheduling and `osascript` for notifications)
- Python 3.9+ (standard library only, no external dependencies)
- [Homebrew](https://brew.sh)
- An SMTP account and/or a webhook to send reports to — optional, see [Setup](#setup)

## Installation

```
brew tap xtruhlar/brew-automator
brew install brew-automator
```

Requires Python 3 (no external dependencies, standard library only).

Alternatively, run it directly from the repo without installing:

```
./bin/brew-automator init
```

## Setup

```
brew-automator init
```

Interactively asks where reports should go and stores the answers in `~/.config/brew-automator/config.env` (chmod 600). This file is never published or committed — it lives outside the…
