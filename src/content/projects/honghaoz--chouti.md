---
repo: "honghaoz/ChouTi"
name: "ChouTi"
description: "ChouTi is a repository of Swift packages that provides frameworks, utilities and extensions to enhance development on Apple platforms (macOS, iOS, tvOS, visionOS and watchOS)."
readmeQualityOk: true
url: "https://github.com/honghaoz/ChouTi"
language: "Swift"
languages: ["Swift"]
languagePcts: [92]
topics: ["ios", "macos", "swift", "tvos", "visionos", "xcode", "osx", "apple", "chouti", "watchos"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-10T07:38:03Z"
lastCommitAt: "2026-11-05T08:05:37Z"
lastReleaseAt: "2026-01-05T01:16:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 59
maintainers: ["honghaoz"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9b199e036aadfcd19e138a9bfd599636b6565c4ef85cdc87ac3b8482af70138/honghaoz/ChouTi"
---

# ChouTi

**ChouTi** is a repository of Swift packages that provides frameworks, utilities and extensions to enhance development on Apple platforms.

## Installation

### Swift Package Manager

Add the following to your `Package.swift` file:

```swift
dependencies: [
  // add the package to your package dependencies
  .package(url: "https://github.com/honghaoz/ChouTi", from: "0.0.11"),
],
targets: [
  // add products to your target dependencies
  .target(
    name: "MyTarget",
    dependencies: [
      .product(name: "ChouTi", package: "ChouTi"),
    ]
  ),
  .testTarget(
    name: "MyTargetTests",
    dependencies: [
      .product(name: "ChouTiTest", package: "ChouTi"),
    ]
  ),
]
```

## Packages

### ChouTi

[**ChouTi**](https://github.com/honghaoz/ChouTi/blob/HEAD/packages/ChouTi) is a Swift framework that provides common utilities and extensions to enhance development on Apple platforms.

```swift
import ChouTi

...
```

### ChouTiTest

[**ChouTiTest**](https://github.com/honghaoz/ChouTi/blob/HEAD/packages/ChouTiTest) is a Swift testing framework for writing tests with simple, expressive syntax.

```swift
import ChouTiTest

class SomeTests: XCTestCase {

  func…
