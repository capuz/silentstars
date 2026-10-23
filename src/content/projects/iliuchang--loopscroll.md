---
repo: "iLiuChang/LoopScroll"
name: "LoopScroll"
description: "An infinitely looping scrolling control implemented using UICollectionView."
readmeQualityOk: true
url: "https://github.com/iLiuChang/LoopScroll"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["objective-c", "banner", "infinite-scroll", "ios", "swift", "uiscrollview"]
stars: 185
forks: 11
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2021-01-14T07:14:46Z"
lastCommitAt: "2026-10-23T09:33:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 76
undervaluedScore: 20
maintainers: ["iLiuChang"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c6d3aa3f635592f142934a05d52292fbe12d619bc7ecbbfa126aa753d167686/iLiuChang/LoopScroll"
---

# LoopScroll

## Overview

An infinitely looping scroll control for iOS, built on `UICollectionView`. Provides two components:

- **LoopCollectionView** — flexible infinite scrolling with custom item sizing and spacing
- **LoopPagingView** — page-based infinite scrolling with configurable auto-scroll

## Features

- **Infinite Scrolling** — seamlessly loops through items in both directions using boundary-element padding
- **Custom Item Size & Spacing** — configure `itemSize` and `itemSpacing` for non-full-width items, or leave default for full-page paging
- **Horizontal & Vertical** — switch scroll direction with a single property
- **Auto Scroll** — configurable timer-based automatic paging (LoopPagingView)
- **DataSource & Delegate** — familiar `UICollectionView`-style protocols
- **Objective-C Compatible** — all public APIs are `@objc` exposed

## Requirements

- iOS 11.0+
- Swift 5.0+

## Installation

### Swift Package Manager

```swift
dependencies: [
    .package(url: "https://github.com/iLiuChang/LoopScroll.git", from: "1.0.2")
]
```

### CocoaPods

```ruby
pod 'LoopScroll'
```

## Usage

### LoopCollectionView — Infinite Scrolling

```swift
import LoopScroll

let loopView…
