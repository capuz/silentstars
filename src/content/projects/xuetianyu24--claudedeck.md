---
repo: "XueTianyu24/ClaudeDeck"
name: "ClaudeDeck"
description: "Local console for Claude Code: session monitoring + completion notifications + mobile push (Bark hook) + memory visualization. Tauri 2 + React."
originalDescription: "Claude Code 本地控制台：会话监控 + 完成通知 + 手机推送(Bark hook) + 记忆可视化。Tauri 2 + React。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XueTianyu24/ClaudeDeck"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [43, 40]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T03:24:59Z"
lastCommitAt: "2026-11-08T14:14:11Z"
lastReleaseAt: "2026-06-11T08:41:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 8
maintainers: ["XueTianyu24"]
openGraphImageUrl: "https://opengraph.githubassets.com/f590ba98e9c9df604a10bb4662f77822bb29421ee55342d9b7c904851ff0f3fc/XueTianyu24/ClaudeDeck"
---

# Beacon

> A local console for Claude Code. It is a desktop app that combines **session monitoring, completion notifications, memory visualization, skill management, multi-channel mobile push, a launcher, and usage billing**, and it supports **one-click in-app auto-update** (with signature verification).

It turns the state scattered across `~/.claude/` into a visual "cockpit". All data comes from the local `~/.claude/` directory, so no reverse engineering or hacks are needed.

> **About the name**: The app's display name is **Beacon** (lighthouse), but the GitHub repository, the download filename (`ClaudeDeck.exe`), and the app identifier still use **ClaudeDeck**, so that the auto-update pipeline for existing users is not interrupted. Both names refer to the same app.

## Features

- 📡 **Session monitoring** ✅: Shows in real time which Claude Code sessions are running, idle, waiting for input, or suspected of being stuck, along with the project each one runs in and how long it has been running.
- 🔔 **Completion notifications** ✅: When a long task finishes or authorization is needed, a **desktop popup and sound** alert you (the threshold is configurable and short Q&A is…
