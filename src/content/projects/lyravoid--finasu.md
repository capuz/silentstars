---
repo: "LyraVoid/FinaSU"
name: "FinaSU"
description: "KernelSU for a beautiful world"
readmeQualityOk: true
url: "https://github.com/LyraVoid/FinaSU"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [47]
stars: 148
forks: 17
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 56
recentReleases: 10
createdAt: "2026-02-02T11:54:17Z"
lastCommitAt: "2026-10-25T08:38:25Z"
lastReleaseAt: "2026-10-11T09:01:17Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 75
undervaluedScore: 34
maintainers: ["matsuzaka-yuki", "5ec1cff", "aviraxp"]
openGraphImageUrl: "https://opengraph.githubassets.com/91c458ac3cc41815e4ac2ba6d73f8e85ce6077ae866b4d0011267ff624733b62/LyraVoid/FinaSU"
fundingLinks: ["GITHUB:https://github.com/tiann", "PATREON:https://patreon.com/weishu"]
---

**Language:** [English](https://github.com/LyraVoid/FinaSU/blob/HEAD/README.md) / [中文](https://github.com/LyraVoid/FinaSU/blob/HEAD/README_CN.md)

FinaSU is a kernel-based root solution for Android, built on [KernelSU](https://github.com/tiann/KernelSU). It combines kernel-level `su` and root access management with a module system, a built-in Zygisk engine, SUSFS support, and a configurable modern manager.

---

## Overview

FinaSU provides:

- Kernel-based `su` with whitelist-based root access management
- A Magisk-like module system based on overlayfs and metamodules
- App Profile, to confine root power to a per-app policy
- The built-in FolkZygisk engine, with manager controls
- The built-in Sui extension, which serves the Shizuku API to supported apps
- SUSFS support, gated by kernel capability
- Kernel-level hiding: mount hiding, SELinux hiding, AVC log spoofing, and unmount policy
- `.fpt` themes with FolkPatch-compatible exchange, plus an online theme store
- Multi-page wallpapers, custom fonts, and a launcher icon switcher
- Module repository browsing and one-tap installation
- An in-app language picker with community translations

## Requirements

- An ARM64 (arm64-v8a)…
