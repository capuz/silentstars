---
repo: "codingiran/SwiftyCache"
name: "SwiftyCache"
description: "A lightweight, elegant, and performant in-memory cache written purely in Swift"
url: "https://github.com/codingiran/SwiftyCache"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-04-10T08:21:35Z"
lastCommitAt: "2026-06-28T01:43:55Z"
lastReleaseAt: "2025-04-10T09:17:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: ["codingiran"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d4cd5abb5f680bd921053e8ea8e8a937a1e13db884961e50305945d3faef2a8/codingiran/SwiftyCache"
---

# 💾 SwiftyCache

**SwiftyCache** is a lightweight, elegant, and performant in-memory cache written purely in Swift.  
It supports Least-Recently-Used (LRU) eviction logic using Swift Collections’ [`OrderedDictionary`](https://github.com/apple/swift-collections), with optional cost-based cleanup and memory warning handling for Apple platforms.

> Simple. Fast. Swifty.

---

## 🚀 Features

- ✅ LRU (Least-Recently-Used) eviction strategy
- ✅ Cost-based cleanup (`totalCostLimit`)
- ✅ Count-based cleanup (`countLimit`)
- ✅ Memory-pressure cleanup via `DispatchSourceMemoryPressure`
- ✅ Actor-isolated thread-safe design
- ✅ No Objective-C / Foundation subclassing
- ✅ 100% Swift + SPM support
- ✅ Clean and minimal API

---

## 📦 Installation

### Swift Package Manager

```swift
dependencies: [
    .package(url: "https://github.com/codingiran/SwiftyCache.git", from: "1.0.0")
]
```

Then import where needed:

```swift
import SwiftyCache
```

---

## 🧩 Usage

### Create a cache

```swift
let cache = SwiftyCache<String, Data>(
    totalCostLimit: 10_000,  // Optional
    countLimit: 100          // Optional
)
```

### Store & retrieve values

```swift
func cacheAvatar(_ imageData: Data)…
