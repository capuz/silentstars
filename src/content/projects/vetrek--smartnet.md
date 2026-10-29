---
repo: "vetrek/SmartNet"
name: "SmartNet"
description: "Swift Networking Library"
readmeQualityOk: true
url: "https://github.com/vetrek/SmartNet"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["swift", "networking", "ios", "fast", "swift-library", "request", "response", "codable", "xcode", "http"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2021-07-21T06:49:05Z"
lastCommitAt: "2026-10-29T10:36:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 48
maintainers: ["vetrek"]
openGraphImageUrl: "https://opengraph.githubassets.com/9709ab4944795b62a234e8a882f9508cab2dde057635fb07f320048f8e898e22/vetrek/SmartNet"
---

# SmartNet

**Type-safe Swift HTTP networking**

SmartNet provides flexible, type-safe HTTP networking that adapts to any Swift project's programming paradigm. Zero dependencies, thread-safe by design.

## Features

- **Three programming paradigms**: async/await, Combine, closures
- **Type-safe generic endpoints**: `Endpoint<T>` with automatic decoding
- **Flexible path matching**: exact, wildcard, glob, regex patterns
- **Configurable retry policies**: exponential backoff, linear, immediate
- **Middleware system**: request/response interception with pattern matching
- **File operations**: upload/download with progress tracking
- **Zero external dependencies**
- **Thread-safe by design**

## Installation

Add SmartNet to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/vetrek/SmartNet.git", from: "2.0.1")
]
```

## Quick Start

```swift
let client = ApiClient(config: NetworkConfiguration(
    baseURL: URL(string: "https://api.example.com")!
))

struct User: Codable {
    let id: Int
    let name: String
}

let user: User = try await client.request(
    with: Endpoint(path: "users/1")
)
```

## Configuration

**Basic:**

```swift
let client =…
