---
repo: "VergeGroup/swift-state-graph"
name: "swift-state-graph"
description: "❄️ A next-generation graph-based state management library for SwiftUI and UIKit. Compatible with `@Observable`"
readmeQualityOk: true
url: "https://github.com/VergeGroup/swift-state-graph"
homepage: "https://swiftpackageindex.com/VergeGroup/swift-state-graph/main/documentation/stategraph"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["graph", "state-management", "swift"]
stars: 65
forks: 1
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-14T13:20:23Z"
lastCommitAt: "2026-07-13T06:37:10Z"
lastReleaseAt: "2025-05-30T14:39:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 32
maintainers: ["muukii"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdf0405a81222bf631640acc2187167d86691092a6608008963ee46e101fa490/VergeGroup/swift-state-graph"
fundingLinks: ["GITHUB:https://github.com/muukii", "PATREON:https://patreon.com/muukii", "KO_FI:https://ko-fi.com/muukii"]
---

# Swift State Graph

A graph-based reactive state management library for Swift.
For managing external(escaping) state, inspired by the concepts of React, Jotai and Recoil.

## Quick Start

```swift
import StateGraph

final class Counter {
  @GraphStored var count: Int = 0
  @GraphComputed var isEven: Bool

  init() {
    $isEven = .init { [$count] _ in
      $count.wrappedValue % 2 == 0
    }
  }
}

// Usage
let counter = Counter()
counter.count = 5
print(counter.isEven) // false - automatically computed
```

## Why Swift State Graph?

### Automatic Dependency Tracking

Computed properties automatically track their dependencies and update when source values change:

```swift
@GraphStored var firstName: String = "John"
@GraphStored var lastName: String = "Doe"
@GraphComputed var fullName: String

init() {
  $fullName = .init { [$firstName, $lastName] _ in
    "\($firstName.wrappedValue) \($lastName.wrappedValue)"
  }
}
// Change firstName → fullName updates automatically
```

### Works with SwiftUI and UIKit

Native integration with SwiftUI's reactive system and UIKit through tracking APIs:

```swift
// SwiftUI - just use the properties
struct CounterView: View {
  let counter:…
