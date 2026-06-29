---
repo: "nakajijapan/PhotoSlider"
name: "PhotoSlider"
description: "PhotoSlider is a simple photo slider and can delete slider with swiping."
url: "https://github.com/nakajijapan/PhotoSlider"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["swift", "kingfisher", "carthage", "viewcontroller", "photo-slider", "sdwebimage", "xcode"]
stars: 247
forks: 56
openIssues: 1
closedIssues: 25
watchers: 8
contributors: 11
recentReleases: 0
createdAt: "2015-04-12T11:40:43Z"
lastCommitAt: "2026-06-29T06:50:12Z"
lastReleaseAt: "2015-11-21T16:11:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 32
maintainers: ["nakajijapan"]
openGraphImageUrl: "https://opengraph.githubassets.com/6814684abbf0b65dc637b05fac3d6f9a8ad13feafa9a7dbfae8cd4024b0b36e7/nakajijapan/PhotoSlider"
---

# PhotoSlider for Swift

PhotoSlider is a simple, full-screen photo viewer. Swipe horizontally to page, swipe
vertically to dismiss, pinch / double-tap to zoom.

## 2.0 — SwiftUI rewrite

PhotoSlider 2.0 has a brand-new **SwiftUI-first API**, while keeping the **exact same
interactions** as 1.x. The proven `UIScrollView`-based interaction engine (paging,
vertical swipe-to-dismiss with linear background fade, pinch / tap-point double-tap zoom
with momentum & bounce) is reused internally and wrapped for SwiftUI, so the feel is
byte-for-byte identical to 1.5.0.

What changed:

- ✅ SwiftUI API: `PhotoSliderView`, `.photoSlider(isPresented:...)`
- ✅ Swift 6 / strict concurrency, iOS 18+
- ✅ Kingfisher is **no longer required** — image loading is abstracted behind the
  `ImageLoader` protocol (default is a `URLSession`-based loader). Kingfisher is available
  as an optional `PhotoSliderKingfisher` product.
- ⚠️ The UIKit API (`PhotoSlider.ViewController`, `Photo`, `PhotoSliderDelegate`, …) is
  removed. Use 1.5.0 if you need it.

## Requirements

- Xcode 16+
- Swift 6
- iOS 18+

## Installation

### Swift Package Manager

```swift
dependencies: [
    .package(url:…
