---
repo: "zt64/compose-pipette"
name: "compose-pipette"
description: "🎨 Compose multiplatform color pickers"
url: "https://github.com/zt64/compose-pipette"
homepage: "http://zt64.dev/compose-pipette/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["color-picker", "compose", "jetpack-compose", "kotlin", "kotlin-compose", "kotlin-multiplatform"]
stars: 62
forks: 3
openIssues: 1
closedIssues: 7
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-03-08T02:17:40Z"
lastCommitAt: "2026-06-27T00:46:28Z"
lastReleaseAt: "2025-07-28T04:31:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 46
maintainers: ["renovate[bot]", "zt64"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a404446eaea8ae5a16767e92c65b62d4c817431cc15053b0f6b0115b8a6a275/zt64/compose-pipette"
---

# 🎨 compose-pipette

A multiplatform color picker for Kotlin Compose, featuring components for selecting colors. Designed to be minimal and
dependency-free for easy integration into your project. A live demo can be
found [here](https://zt64.github.io/compose-pipette/).

Supported platforms:

- JVM
- Android (minimum API level 21)
- Kotlin/JS
- Kotlin/WASM
- macOS
- iOS

## Motivation

While there are several color picker libraries available for Compose, they all have opinionated designs and
implementations, making it difficult for developers to customize them to fit their needs.
Compose-pipette aims to fill this gap by providing the base components for color picking, allowing developers to
build their own custom color pickers on top of them. The library is designed to be minimal and dependency-free, making
it simple to integrate into any project.

## Styles

Compose-pipette comes with three different components for selecting colors: `CircularColorPicker`, `SquareColorPicker`
and `RingColorPicker`. Each component has a `thumb` parameter for passing a custom composable to be used for the thumb
component.

#### Circular Color Picker

The `CircularColorPicker` component is a simple…
