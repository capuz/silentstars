---
repo: "SecondMouseAU/OCCTSwift"
name: "OCCTSwift"
description: "Swift wrapper for OpenCASCADE Technology (OCCT) - B-Rep solid modeling for iOS/macOS"
readmeQualityOk: true
url: "https://github.com/SecondMouseAU/OCCTSwift"
homepage: "https://secondmouseau.github.io/OCCTSwift/"
language: "Swift"
languages: ["Swift", "Objective-C++"]
languagePcts: [50, 26]
stars: 11
forks: 3
openIssues: 25
closedIssues: 654
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-28T06:02:09Z"
lastCommitAt: "2026-08-30T09:25:13Z"
lastReleaseAt: "2026-01-22T08:09:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 62
maintainers: ["gsdali"]
openGraphImageUrl: "https://opengraph.githubassets.com/191614a26731f734e7c22915e9e5e68d23f7bc189c155e15398f7ba76b519616/SecondMouseAU/OCCTSwift"
---

# OCCTSwift

📖 **Documentation & cookbook:** <https://secondmouseau.github.io/OCCTSwift/>

A comprehensive Swift wrapper for [OpenCASCADE Technology (OCCT)](https://www.opencascade.com/) 8.0.1, providing B-Rep solid modeling for macOS and iOS. **v3.0.0. SemVer-stable; see [SEMVER.md](https://github.com/SecondMouseAU/OCCTSwift/blob/HEAD/docs/SEMVER.md#v300) before upgrading from v2.x.**

**4,365 wrapped operations** | macOS 12+ / iOS 15+ (arm64), visionOS and tvOS untested | OCCT 8.0.1

## Quick Start

### Installation

Add to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/SecondMouseAU/OCCTSwift.git", from: "3.0.0")
]
```

The package ships a pre-built `OCCT.xcframework` as a release asset, so no source build of OCCT is required for end users.

A Swift target that does `import OCCTSwift` needs nothing else: no `cxxLanguageStandard`, no
`.interoperabilityMode(.Cxx)`, no extra build settings. A file of *yours* that includes an OCCT
header does have requirements, and a `.m` file fails there with `'type_traits' file not found`
(#967). See [Consuming the…
