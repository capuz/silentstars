---
repo: "mlm-games/Mages"
name: "Mages"
description: "Multiplatform Matrix chat client"
readmeQualityOk: true
url: "https://github.com/mlm-games/Mages"
homepage: "https://mlm-games.github.io/Mages/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
topics: ["chat-application", "decentralized-applications", "matrix", "chatting-app", "compose-multiplatform", "jni", "kotlin-multiplatform", "rust"]
stars: 181
forks: 15
openIssues: 14
closedIssues: 167
watchers: 6
contributors: 6
recentReleases: 0
createdAt: "2025-09-25T02:18:40Z"
lastCommitAt: "2026-11-05T11:24:17Z"
lastReleaseAt: "2025-11-26T14:52:55Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 44
maintainers: ["mlm-games", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c3349c24fc60ed1331cb27bc87ea464309dc37b65df3ee8271ea99adb177aff/mlm-games/Mages"
fundingLinks: ["GITHUB:https://github.com/mlm-games"]
discussionCount: 7
---

# Mages

Mages is an experimental matrix chat client.

- UI: [Compose Multiplatform](https://www.jetbrains.com/lp/compose-multiplatform/)
- Core: a Rust library built on top of [matrix-rust-sdk](https://github.com/matrix-org/matrix-rust-sdk), exposed to Kotlin via UniFFI (not using matrix-sdk-ffi)

The goal was to have a cross-platform desktop/mobile client, while not being as heavy as web apps (initially there were very few alternatives to element-desktop which notify, with proper screen-sharing support and that stay hidden in my tray (unlike neochat, though it has linux-specific push notifs via kunifiedpush, while this currently polls)). 

The client might work well for most, but is never aiming to be as stable as element's clients (or other clients like fluffy or fractal, for example, which seem to have a user-focused goal)

## Status 

This is experimental-stage software. It is still in its early stages, and might lack common features or have (game/use-breaking?) bugs (do open an issue if you've encountered any)

## Features (as of the last README update)

- Room list with previews and unread counts
- Room and thread timelines (text, media, polls, live-location sharing)
-…
