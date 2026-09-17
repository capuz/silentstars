---
repo: "SchildiChat/schildi-revenge"
name: "schildi-revenge"
description: "Matrix client for desktop & Android, written in Kotlin and using the Matrix Rust SDK"
readmeQualityOk: true
url: "https://github.com/SchildiChat/schildi-revenge"
homepage: "https://schildi.chat/revenge/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 148
forks: 14
openIssues: 14
closedIssues: 23
watchers: 4
contributors: 33
recentReleases: 3
createdAt: "2025-11-25T20:47:33Z"
lastCommitAt: "2026-09-17T08:36:48Z"
lastReleaseAt: "2026-08-08T07:13:07Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 85
undervaluedScore: 41
maintainers: ["SpiritCroc", "bmarty", "Chirunos"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f96900b3e80e9a0bbb07276a8127fb333ddf2a95d9cb8242198cbaf8d774100/SchildiChat/schildi-revenge"
---

# SchildiChat Revenge

A desktop & Android Matrix client written in kotlin / Jetpack Compose, based on the Matrix Rust SDK.  
Currently still in its beta phase, so you should still expect some missing functionality, but feel free to open issues if you're
noticing/missing something particular that's not already tracked in an existing issue.

## Downloads

- Desktop: [GitHub releases](https://github.com/SchildiChat/schildi-revenge/releases)
- Android: [SpiritCroc F-Droid repo](https://s2.spiritcroc.de/fdroid/repo/)
- Known third-party packages:
    - AUR: [schildichat-revenge-git](https://aur.archlinux.org/packages/schildichat-revenge-git)

## Main goals

- Fully controllable via keyboard, including command mode and highly configurable key-bindings
- Native multi-account from the start, not as an afterthought
    - Allows a merged inbox
    - But also allow filtering by account if desired
- Hierarchical spaces
    - Including mutli-account space merging if it's the same space with a shared parent spaces
- Faster than the old web-based client
- Multi-window
    - For individual chats
    - To have multiple inbox views open to allow viewing separate filters at once
- Should work fine…
