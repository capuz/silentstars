---
repo: "raycast/extensions-swift-tools"
name: "extensions-swift-tools"
description: "Utility to use Swift in a Raycast extension"
readmeQualityOk: true
url: "https://github.com/raycast/extensions-swift-tools"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 110
forks: 9
openIssues: 2
closedIssues: 5
watchers: 7
contributors: 12
recentReleases: 0
createdAt: "2023-08-04T10:08:58Z"
lastCommitAt: "2026-11-17T12:20:06Z"
lastReleaseAt: "2026-07-21T21:13:13Z"
status: "thriving"
tags: []
healthScore: 66
undervaluedScore: 22
maintainers: ["chrismessina", "grzegorzkrukowski", "mervivian"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0756d96c6bb231185354353bb022b9290aa6c268142ed585090b438eb112cf9/raycast/extensions-swift-tools"
---

# Swift for Raycast Extensions

This Swift Package contains code generation macros and plugins to build a communication channel between [Raycast](https://raycast.com)'s React extensions and Swift native code. Basically, it lets you import Swift code into your Raycast extension in order to:
- leverage native macOS APIs that might not be exposed to TS/JS, or
- use Swift for targeted sections of your extension, letting you use all Swift language features (such as result builders, async/await, generics/existentials, etc.), or
- compartmentalize your extension into client-facing code (react) and system code (swift).

### Requirements

- Xcode 16.3 or later.

  Xcode needs to be installed in your system (version 16.3 or later, since the package requires the Swift 6 toolchain and depends on [swift-syntax](https://github.com/swiftlang/swift-syntax) 603). We are hoping to stop requiring Xcode in the future and just require the existence of a [Swift toolchain](https://www.swift.org/download/), alas we are not there yet. Please notice, you don't need to write the swift code in Xcode, you can use any other editor such as VSCode, Sublime, or Nova.

## Using the Package

We built a sample…
