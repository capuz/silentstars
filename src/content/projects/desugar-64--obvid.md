---
repo: "desugar-64/obvid"
name: "obvid"
description: "Faster dropShadow and innerShadow for Jetpack Compose, with the same pixels"
readmeQualityOk: true
url: "https://github.com/desugar-64/obvid"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [56, 36]
topics: ["android", "jetpack-compose", "kotlin", "neon", "rust", "shadow"]
stars: 12
forks: 1
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-23T11:26:13Z"
lastCommitAt: "2026-11-25T13:17:24Z"
lastReleaseAt: "2026-11-24T07:49:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 43
maintainers: ["desugar-64"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa531f54996fbc41d3b9d8707754e2deb2a84c79e1f18ab6edd13a7da3c47c54/desugar-64/obvid"
---

**Obvid** (Ukrainian *обві́д*, "outline", pronounced [obˈʋid] (ob-veed)) replaces the `dropShadow` and `innerShadow`
modifiers of Jetpack Compose. Android's own `Canvas` draws the outline of each shape, and Obvid blurs it in NEON (Arm
SIMD) code. On Android 16–17, the pixels are identical to Compose's. On older versions, Obvid gives the same output as
on Android 16–17, which can differ a little from the Compose of that device. For most shapes, Obvid builds a shadow
7–13 times faster than Compose. For screens that open with many shadows, an opt-in builds them on worker threads, so
the main thread can go on with its frame.
