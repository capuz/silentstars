---
repo: "mlm-games/Mages"
name: "Mages"
description: "Multiplatform Matrix chat client"
readmeQualityOk: true
url: "https://github.com/mlm-games/Mages"
homepage: "https://mlm-games.github.io/Mages/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [86]
topics: ["chat-application", "decentralized-applications", "matrix", "chatting-app", "compose-multiplatform", "jni", "kotlin-multiplatform", "rust"]
stars: 179
forks: 15
openIssues: 27
closedIssues: 144
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2025-09-25T02:18:40Z"
lastCommitAt: "2026-10-31T07:45:41Z"
lastReleaseAt: "2025-11-26T14:52:55Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 43
maintainers: ["mlm-games", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fc775de093f20e559b82c28b2743c016e771c3905fbe8b0c85cd02f21acd328/mlm-games/Mages"
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
