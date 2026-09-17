---
repo: "Skyscanner/backpack-ios"
name: "backpack-ios"
description: "Backpack Design System"
readmeQualityOk: true
url: "https://github.com/Skyscanner/backpack-ios"
homepage: "https://skyscanner.design"
language: "Swift"
languages: ["Swift", "Objective-C"]
languagePcts: [67, 29]
topics: ["backpack", "ios", "component-library"]
stars: 125
forks: 42
openIssues: 1
closedIssues: 29
watchers: 95
contributors: 93
recentReleases: 0
createdAt: "2018-01-10T14:23:03Z"
lastCommitAt: "2026-09-17T08:50:35Z"
lastReleaseAt: "2022-08-03T00:58:31Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 45
maintainers: ["darioroa", "faurevid", "novinfard"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/522811?s=400&v=4"
---

# Backpack iOS

> Backpack is a collection of design resources, reusable components and guidelines for creating Skyscanner's products.

## Installation

Backpack is distributed through [Swift Package Manager](https://swift.org/package-manager/).

In Xcode, choose **File → Add Package Dependencies** and enter:

```
https://github.com/Skyscanner/backpack-ios
```

Or add it to a `Package.swift`:

```swift
dependencies: [
  .package(url: "https://github.com/Skyscanner/backpack-ios", from: "92.1.0")
]
```

Four products are available: `Backpack` (UIKit), `Backpack-SwiftUI`, `Backpack-Common` and
`Backpack-Fonts`. Depend on the ones you need:

```swift
.target(
  name: "YourApp",
  dependencies: [
    .product(name: "Backpack", package: "backpack-ios"),
    .product(name: "Backpack-SwiftUI", package: "backpack-ios")
  ]
)
```

### CocoaPods (removed)

> [!IMPORTANT]
> **CocoaPods support has been removed.** `92.1.0` is the last version published to the CocoaPods
> trunk. The podspecs and the publishing pipeline are gone, so there will be no further pod releases.
> Swift Package Manager is the only supported way to depend on Backpack.

**Existing Podfiles keep working.** Every version…
