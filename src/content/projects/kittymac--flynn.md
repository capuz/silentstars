---
repo: "KittyMac/flynn"
name: "flynn"
description: "Actor-model programming for Swift"
readmeQualityOk: true
url: "https://github.com/KittyMac/flynn"
language: "Swift"
languages: ["Swift", "C"]
languagePcts: [70, 29]
topics: ["swift", "actor-model"]
stars: 34
forks: 3
openIssues: 0
closedIssues: 23
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-05-10T16:59:07Z"
lastCommitAt: "2026-11-08T14:13:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 53
maintainers: ["KittyMac"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/262834317/b2634800-e147-11ea-94ca-e513f1503b4b"
---

Swift added its own [Swift Concurrency Model](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html) in Swift 5.5. If you are unfamiliar with it, you should likely go read up on it first. If you are still interested in learning Flynn after that, please continue :)

## Quick Start

### Swift Package Manager

To use Flynn make sure you are using **Swift 5.6** or later and make the following changes to your Package.swift

Add to your Package:

```swift
dependencies: [
    .package(url: "https://github.com/KittyMac/Flynn.git", from: "0.3.0"),
]
```

Add to the desired Target:

```swift
.target(
	...
	dependencies: [
		"Flynn"
	],
	plugins: [
		.plugin(name: "FlynnPlugin", package: "Flynn")
	]
)
```

### Actor-Model Programming

Flynn grafts Actor-Model programming onto Swift, providing safety and performance for your highly concurrent Swift code.  Flynn is heavily inspired by the [Pony programming language](https://www.ponylang.io). Here's what you need to know:

#### [Actors are concurrency safe Swift classes](https://github.com/KittyMac/flynn/blob/HEAD/docs/ACTOR.md)

Using Actors to separate concurrent logic provides safety, performance, and efficiency.

```swift
class…
