---
repo: "reers/ReerKit"
name: "ReerKit"
description: "Swift 基础库. A collection of Swift extensions and utilities."
readmeQualityOk: true
url: "https://github.com/reers/ReerKit"
homepage: "https://deepwiki.com/reers/ReerKit"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["swift", "yykit", "cocoapods", "extensions", "foundation", "ios", "ipados", "macos", "swift-extensions", "swift-library"]
stars: 107
forks: 6
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-06-11T16:46:29Z"
lastCommitAt: "2026-09-12T08:04:09Z"
lastReleaseAt: "2025-03-31T10:33:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 30
maintainers: ["vnixx"]
openGraphImageUrl: "https://opengraph.githubassets.com/fae20ce7b53a80d575916ea3e53b791dfb2d5afb45439ee80999de7ce87536e2/reers/ReerKit"
---

[简体中文](https://github.com/reers/ReerKit/blob/HEAD/README_CN.md)

# ReerKit
ReerKit is a collection of native Swift extensions that provide convenient methods, syntactic sugar, and performance improvements for various native data types, UIKit, and Cocoa classes for iOS, macOS, tvOS, watchOS, and Linux platforms.
All system type extensions in the framework have the `re` infix added to avoid ambiguity issues when calling the same name extension, such as 
```swift
SGVsbG\n8gV29ybGQh".re.base64Decoded

"123".re.md5String

view.re.addSwiftUIView(Color.red)
```

There are also a of other convenient features available.
```swift
// Access dictionary contents using dot notation implemented by dynamic member lookup
let dict: [String: Any] = ...
dict.dml.user_name.re.string <=> dict["user_name"] as? String

// Weak reference container, automatically removes elements when they are destroyed.
WeakSet, WeakMap

// Set grayscale mode for UIView
view.re.isGrayModeEnabled = true

// Data Structure Encapsulation
BinaryTree, Tree, LinkedList, Queue, BoundedQueue, Stack, OrderedSet, OrderDictionary

// Lock Encapsulation
MutexLock, ReadWriteLock, Synchronizing, UnfaireLock

// PropertyWrappers…
