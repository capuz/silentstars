---
repo: "duckduckgo/apple-browsers"
name: "apple-browsers"
description: "DuckDuckGo iOS & macOS browsers"
readmeQualityOk: true
url: "https://github.com/duckduckgo/apple-browsers"
homepage: "https://duckduckgo.com/app"
language: "Swift"
languages: ["Swift"]
languagePcts: [85]
topics: ["browsers", "duckduckgo", "ios", "macos"]
stars: 252
forks: 81
openIssues: 4
closedIssues: 47
watchers: 23
contributors: 92
recentReleases: 0
createdAt: "2024-12-16T03:14:59Z"
lastCommitAt: "2026-08-28T14:20:18Z"
lastReleaseAt: "2025-02-20T06:45:11Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 43
maintainers: ["daxtheduck", "daxmobile", "jleandroperez"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c64d2a02bb1572a9cff15ffc0cb54c3418b314a86a87ddf14f01a9c1536ab5/duckduckgo/apple-browsers"
---

# DuckDuckGo Apple Browsers

This repo contains the source code for the DuckDuckGo iOS and macOS browsers, and the libraries that are shared between them to provide cross-platform features.

## Building

### Submodules

We use submodules, so you will need to bring them into the project in order to build and run it:

Run `git submodule update --init --recursive`

### External contributors: Duck Sans package

The project depends on a private `DuckSansFont` Swift package that ships our licensed Duck Sans typeface. The repository is private, so building a fork without access will fail at SPM resolution. To build as an external contributor, remove the package before building:

1. Open `iOS/DuckDuckGo-iOS.xcodeproj` (or the workspace) in Xcode.
2. Select the project in the Project Navigator, then open the **Package Dependencies** tab.
3. Select **DuckSansFont** and click the **−** button to remove it. The app will fall back to the system font at runtime.
4. Clean and rebuild the project.

### iOS developer details

If you're not part of the DuckDuckGo team, you should provide your Apple developer account id, app id, and group id prefix in an `ExternalDeveloper.xcconfig` file. To do…
