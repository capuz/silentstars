---
repo: "ismnoiet/border-beam-ios"
name: "border-beam-ios"
description: "A beautifully animated border beam for SwiftUI — with Metal shader rendering and custom colors."
readmeQualityOk: true
url: "https://github.com/ismnoiet/border-beam-ios"
language: "Swift"
languages: ["Swift", "Metal"]
languagePcts: [75, 23]
topics: ["ios", "swiftui"]
stars: 45
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-10T15:56:43Z"
lastCommitAt: "2026-11-11T11:15:25Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 7
maintainers: ["ismnoiet"]
openGraphImageUrl: "https://opengraph.githubassets.com/1824d12dcf01b4ea03ec248e76b84215e940847239860bf8cff25d7866dd2f04/ismnoiet/border-beam-ios"
---

| Dark | Light |
| :---: | :---: |
| <img src="./border-beam-ios-demo.gif" width="240" alt="BorderBeam iOS demo, dark theme" /> | <img src="./border-beam-ios-demo-light.gif" width="240" alt="BorderBeam iOS demo, light theme" /> |

A beautifully animated border beam for SwiftUI — with Metal shader rendering and custom colors.

* * *

## ✨ Features

- 🧩 **Wrap anything**: text fields, menus, pickers, buttons or plain views
- ⚡ **One GPU pass**: beam and glow drawn by a Metal shader, no blur layers, no per-frame gradient rebuilds
- 🔷 **Any shape**: rounded rectangle, capsule or circle, with seam-free glow on every one
- 🎨 **Your colors**: any `[Color]`, a single color, or ready-made palettes
- 🔀 **Direction, intensity, timing and speed** as parameters
- 🎯 **State-driven**: drive `active` from anything (focus, loading, hover) with a smooth fade
- 🌓 **Dark and light surfaces**
- ♿ **Reduce Motion aware**: shows a still beam

* * *

## Installation

**Swift Package Manager**: Xcode → *File → Add Package Dependencies…* and enter
`https://github.com/ismnoiet/border-beam-ios`, or in `Package.swift`:

```swift
.package(url: "https://github.com/ismnoiet/border-beam-ios", from: "1.0.0")…
