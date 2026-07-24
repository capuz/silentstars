---
repo: "SecondMouseAU/OCCTSwift"
name: "OCCTSwift"
description: "Swift wrapper for OpenCASCADE Technology (OCCT) - B-Rep solid modeling for iOS/macOS"
readmeQualityOk: true
url: "https://github.com/SecondMouseAU/OCCTSwift"
homepage: "https://secondmouseau.github.io/OCCTSwift/"
language: "Swift"
languages: ["Swift", "Objective-C++"]
languagePcts: [56, 29]
stars: 9
forks: 3
openIssues: 3
closedIssues: 172
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-28T06:02:09Z"
lastCommitAt: "2026-07-24T06:07:57Z"
lastReleaseAt: "2026-01-22T08:09:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["gsdali"]
openGraphImageUrl: "https://opengraph.githubassets.com/68fc59cf06dcddd7a2d995162859548ef7d166085c0611622c4ea0d794808586/SecondMouseAU/OCCTSwift"
---

# OCCTSwift

📖 **Documentation & cookbook:** <https://secondmouseau.github.io/OCCTSwift/>

A comprehensive Swift wrapper for [OpenCASCADE Technology (OCCT)](https://www.opencascade.com/) 8.0.0p1, providing B-Rep solid modeling for macOS and iOS. **v1.0.0 — SemVer-stable as of 2026-05-07.**

**4,254 wrapped operations** | macOS 12+ / iOS 15+ / visionOS 1+ / tvOS 15+ (arm64) | OCCT 8.0.0p1

## Quick Start

### Installation

Add to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/SecondMouseAU/OCCTSwift.git", from: "1.0.0")
]
```

The package ships a pre-built `OCCT.xcframework` as a release asset, so no source build of OCCT is required for end users.

### Usage

```swift
import OCCTSwift

// Primitives
let box = Shape.box(width: 10, height: 5, depth: 3)
let cylinder = Shape.cylinder(radius: 2, height: 10)

// Boolean operations
let result = box - cylinder      // subtract
let combined = box + cylinder    // union
let common = box & cylinder      // intersect

// Modifications
let filleted = result.filleted(radius: 0.5)
let shelled = filleted.shelled(thickness: -0.3)

// Export
try Exporter.writeSTEP(shape: shelled, to: stepURL)
try…
