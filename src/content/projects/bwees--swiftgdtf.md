---
repo: "bwees/SwiftGDTF"
name: "SwiftGDTF"
description: "Swift library for interacting with General Device Type Format (GDTF) fixture files."
readmeQualityOk: true
url: "https://github.com/bwees/SwiftGDTF"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["gdtf", "swift"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-07-03T23:33:51Z"
lastCommitAt: "2026-07-17T05:57:58Z"
lastReleaseAt: "2025-05-04T23:43:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["bwees"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae27931fa7ef4802bab23b601b50fb3538acc30465bc07ceb6cd4647e9aa37b0/bwees/SwiftGDTF"
---

# SwiftGDTF
A Swift library for interacting with GDTF files.

This library:
- Handles the decompression and parsing of GDTF Files, and their file resources (when using `loadFixtureModePackage`)
- Resolves node links present in attributes
  - This allows you to get all necessary data by just parsing a DMXMode
  - We cannot resolve the following nodes, they are currently represented as a String:
    - `modeMaster` in `ChannelFunction`
    - `mainAttribute` in `FixtureAttribute`
- Does not currenty parse Geometries (and geometry tags in other elements), Models, FTPresets, or Protocols nodes currently, if you would like to add support, submit a PR!

## Installation
Install with SPM with the following:

```
dependencies: [
    .package(url: "https://github.com/bwees/SwiftGDTF.git", from: "1.0.0")
]
```
