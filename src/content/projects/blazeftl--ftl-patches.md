---
repo: "BlazeFTL/FTL-Patches"
name: "FTL-Patches"
description: "Morphe patches to remove ads, analytics, apk junk, debug info, duplicate graphics, unused languages, and use custom dpi☠️"
readmeQualityOk: true
url: "https://github.com/BlazeFTL/FTL-Patches"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [78, 22]
stars: 46
forks: 2
openIssues: 1
closedIssues: 32
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-08-07T18:47:52Z"
lastCommitAt: "2026-10-15T08:32:38Z"
lastReleaseAt: "2026-10-07T02:36:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 43
maintainers: ["BlazeFTL", "github-actions[bot]", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9542d11ade03c77d645e6e87b14d5ea12dd44d0d507409811623894646322aa/BlazeFTL/FTL-Patches"
---

# 👋🧩 FTL Patches

Personal collection of my Morphe Patches

## ❓ About

Strips ads and analytics/crash-reporting SDKs at the bytecode level, cleans build artifacts and dex debug info, trims resource bloat — unused density buckets, unused language packs, lossless PNG recompression — and lets you scale the app's display density independent of system settings, for smaller, cleaner APKs.

## 🩹 Patches list

> **[v1.43.3](https://github.com/BlazeFTL/FTL-Patches/releases/tag/v1.43.3)**&nbsp;&nbsp;•&nbsp;&nbsp;`main`&nbsp;&nbsp;•&nbsp;&nbsp;106 patches total

**🎯 Supported versions:**

| 1.9.8 |
| :---: |

| 💊&nbsp;Patch | 📜&nbsp;Description | ⚙️&nbsp;Options |
|----------|----------------|-----------|
| [Boost Splash Screen](#boost-splash-screen) | Fixes Remove Ads And Remove Ads Lite Gettings Stuck In Splash Screen Useless if you also select skip splash and language activity patch. Also stops the splash from hiding the on-screen navigation buttons. | • Splash duration (ms) |
| [Disable ad dialog when reopening app](#disable-ad-dialog-when-reopening-app) | Prevents the full-screen "loading ad" dialog from appearing when the app is reopened after being minimized. |  |
| [Disable…
