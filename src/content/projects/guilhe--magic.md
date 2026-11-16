---
repo: "GuilhE/Magic"
name: "Magic"
description: "KMP Magic Deck Cards"
readmeQualityOk: true
url: "https://github.com/GuilhE/Magic"
language: "Kotlin"
languages: ["Kotlin", "Swift"]
languagePcts: [54, 46]
topics: ["kotlin", "kotlin-multiplatform", "swift"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-24T19:15:19Z"
lastCommitAt: "2026-11-16T11:53:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 43
maintainers: ["GuilhE", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8464adf356cbf3a59dbad7b1b034876afb10e97f22b0ad18b20a6bed234b97d9/GuilhE/Magic"
---

# Magic

KMP sample project acting as a playground to illustrate what's discussed in this article:

## Details

> [!NOTE]
> The `main` branch currently uses [Swift export](https://kotlinlang.org/docs/native-swift-export.html).  
> For Objective-C/Swift interoperability (as mentioned in the article), please use the [`objc-interop` tag](https://github.com/GuilhE/Magic/tree/objc-interop).
> 
> A new article covering the `swiftExport` approach will be published in the near future.

### Shared

The modules `data-models`, `core-database`, and `core-network` are independent, while `data-managers` depends on all three.
Each module is responsible for providing its own Dependency Injection (DI) logic, but the `core-di` module manages the root DI system, utilised by all platforms.
This is why the `core-di` module depends on all other modules and will also contain the `xcframework` settings.  

These five modules constitute the Shared Data Layer.

### Platforms

#### Android

The `MagicApp` serves as the entry point and includes the setup for DI. There's no Domain Layer and `Shared Data Layer` is the Data Layer itself. Finally, the `presentation` contains all the logic related to the UI…
