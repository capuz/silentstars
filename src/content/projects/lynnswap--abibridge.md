---
repo: "lynnswap/ABIBridge"
name: "ABIBridge"
description: "Resolve and invoke native APIs from Swift, Objective-C++, and C++ without writing mangled names or manual ABI casts."
readmeQualityOk: true
url: "https://github.com/lynnswap/ABIBridge"
homepage: "https://lynnswap.github.io/ABIBridge/"
language: "Swift"
languages: ["Swift"]
languagePcts: [68]
topics: ["ios", "macos", "swift", "tvos", "visionos", "watchos", "swift-package-manager", "reverse-engineering"]
stars: 63
forks: 2
openIssues: 5
closedIssues: 127
watchers: 2
contributors: 1
recentReleases: 6
createdAt: "2026-09-22T10:24:24Z"
lastCommitAt: "2026-09-29T08:10:21Z"
lastReleaseAt: "2026-09-28T00:49:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 43
maintainers: ["lynnswap"]
openGraphImageUrl: "https://opengraph.githubassets.com/343cb05503a096ab9e6d8076f5b04673832e338db7d9bee6ab44d2521bd115e3/lynnswap/ABIBridge"
---

# ABIBridge

Resolve mangled Swift and C++ symbols by source-level name, and call supported native functions and methods with ordinary Swift types and values.

## Requirements

- iOS 18.4+, macOS 15.4+, visionOS 2.4+, watchOS 11.4+, or tvOS 18.4+
- Xcode on macOS with Swift 6.3+

## Quick start

### Resolve a C++ function without writing its mangled name

For an already-loaded library defining `int Example::Math::add(int, int)`, a direct `dlsym` lookup with its loader handle requires the mangled name:

```swift
import Darwin

let address = dlsym(libraryHandle, "_ZN7Example4Math3addEii")
```

With ABIBridge, use the function's declaration name instead. The runtime finds the corresponding mangled symbol in loaded images automatically:

```swift
import ABIBridge

let runtime = ABIRuntime.shared
let symbol = try await runtime.resolve(
    NativeDeclaration(name: "Example::Math::add(int, int)", language: .cxx)
)
```

### Call C++ by its declaration

To call that function, provide its signature as a Swift function type. Specifying a framework acquires it when needed:

```swift
let add = try await runtime.cxxFunction(
    named: "Example::Math::add(int, int)", as: ((Int32, Int32) ->…
