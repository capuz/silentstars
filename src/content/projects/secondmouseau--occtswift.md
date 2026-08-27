---
repo: "SecondMouseAU/OCCTSwift"
name: "OCCTSwift"
description: "Swift wrapper for OpenCASCADE Technology (OCCT) - B-Rep solid modeling for iOS/macOS"
readmeQualityOk: true
url: "https://github.com/SecondMouseAU/OCCTSwift"
homepage: "https://secondmouseau.github.io/OCCTSwift/"
language: "Swift"
languages: ["Swift", "Objective-C++"]
languagePcts: [53, 26]
stars: 11
forks: 3
openIssues: 56
closedIssues: 548
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-28T06:02:09Z"
lastCommitAt: "2026-08-27T14:33:21Z"
lastReleaseAt: "2026-01-22T08:09:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["kilo-code-bot[bot]", "gsdali", "SMKiloBOT"]
openGraphImageUrl: "https://opengraph.githubassets.com/1616a1fea8a2c444b2996f452ad8b6d7ddf573d00ad17f908b11a8adf55f7698/SecondMouseAU/OCCTSwift"
---

# OCCTSwift

📖 **Documentation & cookbook:** <https://secondmouseau.github.io/OCCTSwift/>

A comprehensive Swift wrapper for [OpenCASCADE Technology (OCCT)](https://www.opencascade.com/) 8.0.1, providing B-Rep solid modeling for macOS and iOS. **v3.0.0. SemVer-stable; see [SEMVER.md](https://github.com/SecondMouseAU/OCCTSwift/blob/HEAD/docs/SEMVER.md#v300) before upgrading from v2.x.**

**4,368 wrapped operations** | macOS 12+ / iOS 15+ (arm64), visionOS and tvOS untested | OCCT 8.0.1

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
