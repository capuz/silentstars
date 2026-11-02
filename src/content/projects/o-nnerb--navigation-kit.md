---
repo: "o-nnerb/navigation-kit"
name: "navigation-kit"
description: "Navigation library for SwiftUI apps"
readmeQualityOk: true
url: "https://github.com/o-nnerb/navigation-kit"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["swift", "swiftui", "declarative", "navigation", "swift-package-manager", "tca", "ios"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-02-22T23:19:39Z"
lastCommitAt: "2026-11-02T13:39:10Z"
lastReleaseAt: "2025-11-22T18:51:47Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 68
undervaluedScore: 43
maintainers: ["o-nnerb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/693e9ec18cf319c85d3cc0e0620c4712d4e9931a9643159a3d645cab61268ffa/o-nnerb/navigation-kit"
fundingLinks: ["GITHUB:https://github.com/o-nnerb"]
---

# NavigationKit

NavigationKit is a library that extends SwiftUI's `NavigationStack` and
`NavigationSplitView` and adds more resources to manage the user interface
and decouple views from the navigation flow.

## Requirements

- Swift 6.4 or later
- iOS 16+, tvOS 16+, macOS 13+, watchOS 9+

## Installation

This repository is distributed through the Swift Package Manager, and it can
be added in two ways:

1. Xcode

In Xcode, go to `File > Add Package Dependencies...`, then paste in
`https://github.com/o-nnerb/navigation-kit.git`

2. Package.swift

```swift
// swift-tools-version: 6.4
import PackageDescription

let package = Package(
    name: "MyPackage",
    platforms: [.iOS(.v16), .tvOS(.v16), .macOS(.v13), .watchOS(.v9)],
    products: [
        .library(
            name: "MyPackage",
            targets: ["MyPackage"]
        )
    ],
    dependencies: [
        .package(url: "https://github.com/o-nnerb/navigation-kit.git", from: "2.0.0")
    ],
    targets: [
        .target(
            name: "MyPackage",
            dependencies: [
                .product(name: "NavigationKit", package: "navigation-kit")
            ]
        )
    ]
)
```

## Usage

The main features…
