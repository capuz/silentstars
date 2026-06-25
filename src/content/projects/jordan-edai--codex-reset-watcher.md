---
repo: "jordan-edai/codex-reset-watcher"
name: "codex-reset-watcher"
description: "Local-first macOS menu bar app for Codex usage limits and reset credits."
url: "https://github.com/jordan-edai/codex-reset-watcher"
language: "Swift"
languages: ["Swift"]
languagePcts: [92]
topics: ["codex", "developer-tools", "macos", "menu-bar", "openai", "swift", "swiftui"]
stars: 46
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-06-18T18:45:07Z"
lastCommitAt: "2026-06-25T01:39:15Z"
lastReleaseAt: "2026-06-25T01:40:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 16
maintainers: ["jordan-edai"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d65bb863f0e2b27e195d32a657c9a74ffe66368441a263c63839d974a7d0a42/jordan-edai/codex-reset-watcher"
---

# Codex Reset Watcher

Unofficial macOS utility for checking Codex rate-limit windows and banked reset credits.

It reads your existing local Codex Desktop login from `~/.codex/auth.json`, calls the same internal Codex Desktop endpoints used by the app, and shows:

- current 5-hour usage remaining
- current weekly usage remaining
- menu bar display switching between weekly and 5-hour remaining usage
- active account label from the current local Codex login or usage response
- banked reset credits and expiry dates
- expiry urgency warnings as reset credits get closer to lapsing
- a reset-use nudge based on remaining 5h/weekly capacity, reset timing, reset-credit expiry, and reset credits in the bank

Codex Reset Watcher is read-only. It does not redeem resets, reset usage, modify your account, or send analytics.

## Requirements

- macOS 14 or newer
- Codex Desktop installed and signed in

No API key is required.

## Install

1. Download `Codex Reset Watcher.zip` from the latest GitHub release.
2. Unzip it.
3. Drag `Codex Reset Watcher.app` into `/Applications`.
4. Open it.

If macOS warns that the app is from an unidentified developer, right-click the app and choose **Open**.…
