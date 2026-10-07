---
repo: "duckduckgo/apple-browsers"
name: "apple-browsers"
description: "DuckDuckGo iOS & macOS browsers"
readmeQualityOk: true
url: "https://github.com/duckduckgo/apple-browsers"
homepage: "https://duckduckgo.com/app"
language: "Swift"
languages: ["Swift"]
languagePcts: [86]
topics: ["browsers", "duckduckgo", "ios", "macos"]
stars: 258
forks: 87
openIssues: 1
closedIssues: 51
watchers: 23
contributors: 87
recentReleases: 0
createdAt: "2024-12-16T03:14:59Z"
lastCommitAt: "2026-10-07T10:31:12Z"
lastReleaseAt: "2025-02-20T06:45:11Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 43
maintainers: ["daxtheduck", "Bunn", "daxmobile"]
openGraphImageUrl: "https://opengraph.githubassets.com/345ec9449a7bc26ada66aa416725d234ade9d2319456e58f7133107583007121/duckduckgo/apple-browsers"
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
