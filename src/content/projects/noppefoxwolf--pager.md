---
repo: "noppefoxwolf/Pager"
name: "Pager"
description: "A small horizontal paging library"
readmeQualityOk: true
url: "https://github.com/noppefoxwolf/Pager"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["ios", "page", "tab", "ui"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2024-02-02T14:19:36Z"
lastCommitAt: "2026-11-04T13:04:50Z"
lastReleaseAt: "2026-09-23T15:49:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 59
maintainers: ["noppefoxwolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/32a81af055477d40f86c3b0df7d9c9febaee549294cb75a59231f29e80c05d5d/noppefoxwolf/Pager"
---

# Pager

UIKit pager view controller with a scroll-synced tab bar and indicator, built on compositional layout and diffable data sources.

## Features
- Host any `UIViewController` per page via `Page` providers; works inside navigation or tab stacks.
- Scroll-synced tab bar whose indicator width follows the current label; optional selection haptics.
- Shared tab bar state through `PageViewController.state`, including page titles and transition progress.
- Safe rotation/resizing: keeps the current page and indicator aligned on size changes.
- Customizable content insets per page (`itemContentInsets`) for floating headers / safe areas.
- Targets iOS 18+ and visionOS 2+ (Swift tools 6.2).

## Installation (Swift Package Manager)
Add the package to Xcode or your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/noppefoxwolf/Pager.git", from: "0.1.0")
]
```

Then add `Pager` to your target dependencies.

## Compatibility note

On iOS 26 and later, the background blur of the navigation bar palette does not work correctly when `UIDesignRequiresCompatibility` is set to `true`. Set it to `false` (or remove the key) to use the palette background blur normally.…
