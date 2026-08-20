---
repo: "BlazeFTL/FTL-Patches"
name: "FTL-Patches"
description: "Morphe patches to remove ads, analytics, apk junk, debug info, duplicate graphics, unused languages, and use custom dpi☠️"
readmeQualityOk: true
url: "https://github.com/BlazeFTL/FTL-Patches"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
stars: 13
forks: 1
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-08-07T18:47:52Z"
lastCommitAt: "2026-08-20T04:10:34Z"
lastReleaseAt: "2026-08-20T04:10:44Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 55
maintainers: ["BlazeFTL", "semantic-release-bot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/afad278ae16de04087554d8f67e5940c91d59684257a61c6b6447524c20fca2f/BlazeFTL/FTL-Patches"
---

# 👋🧩 FTL Patches

Personal collection of my Morphe Patches.

## ❓ About

Strips ads and analytics/crash-reporting SDKs at the bytecode level, cleans build artifacts and dex debug info, trims resource bloat — unused density buckets, unused language packs, lossless PNG recompression — and lets you scale the app's display density independent of system settings, for smaller, cleaner APKs.

## 🩹 Patches list

> **[v1.39.0-dev.2](https://github.com/BlazeFTL/FTL-Patches/releases/tag/v1.39.0-dev.2)**&nbsp;&nbsp;•&nbsp;&nbsp;`dev`&nbsp;&nbsp;•&nbsp;&nbsp;27 patches total
<details>
<summary>📦 Xender&nbsp;&nbsp;•&nbsp;&nbsp;3 patches</summary>
<br>

**🎯 Supported versions:**

| 18.8.0.prime |
| :---: |

| 💊&nbsp;Patch | 📜&nbsp;Description | ⚙️&nbsp;Options |
|----------|----------------|-----------|
| [Clean main UI](#clean-main-ui) | Hides the bottom navigation bar, the top-right guide icon, and the Rate/Help/About drawer items, keeps the connect/create/join buttons on top, and stops them from being auto-hidden. Reapplied on create, resume, and drawer open (and retried for ~1.8s after each) since some of these views are inflated lazily. |  |
| [Skip splash…
