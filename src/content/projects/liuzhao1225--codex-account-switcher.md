---
repo: "liuzhao1225/codex-account-switcher"
name: "codex-account-switcher"
description: "Native Codex account switcher by Zhao Liu (liuzhao1225) for macOS and Windows. Local accounts, weekly/5h usage, confirmed Desktop switching."
readmeQualityOk: true
url: "https://github.com/liuzhao1225/codex-account-switcher"
homepage: "https://liuzhao1225.github.io/codex-account-switcher/"
language: "Swift"
languages: ["Swift", "HTML"]
languagePcts: [45, 31]
topics: ["account-switcher", "codex-desktop", "macos", "menu-bar-app", "swiftui", "codex-account-switcher", "multiple-accounts", "open-source", "menu-bar", "productivity"]
stars: 148
forks: 27
openIssues: 6
closedIssues: 7
watchers: 1
contributors: 10
recentReleases: 10
createdAt: "2026-08-17T09:22:46Z"
lastCommitAt: "2026-11-20T12:03:45Z"
lastReleaseAt: "2026-10-21T10:59:03Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 34
maintainers: ["liuzhao1225", "PKUCY2016", "ShannoonRuaaa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1336942951/a2eec01e-a151-4657-b494-f209986587cb"
discussionCount: 5
---

Add accounts once, then choose when you need them. No Terminal commands or config-file editing.

  English · <a href="README.zh-CN.md">中文</a>

Codex Account Switcher is a free, open-source native app for managing multiple authorized Codex accounts on macOS and Windows. Add personal, work, or client accounts through browser sign-in once, then switch accounts from the macOS menu bar or Windows system tray.

When you confirm a switch, the app closes Codex Desktop (if installed and running), updates `~/.codex/auth.json` atomically, verifies the target identity, and reopens Codex Desktop. CLI-only setups without Codex Desktop installed also switch cleanly. Saved account profiles stay local on your computer.

## Download

Get the [latest unified release](https://github.com/liuzhao1225/codex-account-switcher/releases/latest) with SHA-256 checksums:
