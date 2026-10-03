---
repo: "timokoethe/Localframe"
name: "Localframe"
description: "A SwiftUI-based iOS 26 app featuring a fully local image creator powered by Apple’s Image Playground Models. Private, fast, and cloud-free."
readmeQualityOk: true
url: "https://github.com/timokoethe/Localframe"
homepage: "https://itstimo.me/projects/localframe"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["apple", "imageplayground", "ios", "ios26", "swiftui", "ai", "xcode"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-19T16:37:08Z"
lastCommitAt: "2026-10-03T09:23:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 48
maintainers: ["timokoethe"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c8bc8ac87a030a716a266971aaef9fffc859a0dae36c30c2b82d850bbf94d64/timokoethe/Localframe"
---

# Localframe for iOS 26

**Localframe** is a small SwiftUI showcase app for experimenting with Apple’s Image Playground framework on iOS 26. It demonstrates how to create an `ImageCreator`, stream generated images from a text prompt, and present the result in a minimal native interface.

This project is intentionally lightweight. It is meant to document and demonstrate the API shape, not to serve as a production image generation product.

> [!WARNING]
> Localframe is a demonstration app and is not production-ready. Model output may be inaccurate, incomplete, or misleading.

> [!IMPORTANT]
> This app uses Apple’s `ImageCreator` class for direct programmatic on-device image generation. `ImageCreator` is deprecated as of iOS 27. Apple announced on June 11, 2026 that the class is being discontinued and will no longer work on iOS 27, iPadOS 27, macOS 27, and visionOS 27 or later.
> What that means for this repository:
> - iOS 26 is the intended showcase target.
> - On iOS 27 beta releases, the code continues to compile with Xcode warnings, but apps using `ImageCreator` do not function in TestFlight and cause a runtime error.
> - For public iOS 27 releases, code using `ImageCreator` no…
