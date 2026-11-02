---
repo: "simonbs/TreeSitterLanguages"
name: "TreeSitterLanguages"
description: "Languages for Tree-sitter wrapped in Swift packages"
readmeQualityOk: true
url: "https://github.com/simonbs/TreeSitterLanguages"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 71
forks: 38
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2022-01-20T16:55:01Z"
lastCommitAt: "2026-11-02T11:36:41Z"
lastReleaseAt: "2024-02-14T12:58:14Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 33
maintainers: ["simonbs", "dxnnv", "Lakr233"]
openGraphImageUrl: "https://opengraph.githubassets.com/13027add02f7360ed865e191ae2ce94629703bd5b0571edc4c6c2a541e111136/simonbs/TreeSitterLanguages"
---

# TreeSitterLanguages

Languages for the [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser generator wrapped in Swift packages.

## Motivation

There are two reasons this package exists:

1. As an easy way to add several Tree-sitter languages to an app and particularly to an app that uses the [Runestone](https://github.com/simonbs/runestone) framework.
2. To show how a Tree-sitter language can be wrapped in a Swift package.

It is not recommended to use this package if you only need to add a few Tree-sitter languages to your app. Instead you should add the languages manually.

## Installation

The languages are distributed using the [Swift Package Manager](https://www.swift.org/package-manager/) as separated libraries in a single Swift package. Install the package in your project by adding it as a dependency in your Package.swift manifest or through "Package Dependencies" in your project settings.

```swift
let package = Package(
    dependencies: [
        .package(url: "git@github.com:simonbs/TreeSitterLanguages.git", from: "0.1.0")
    ]
)
```

## Usage

The Swift package contains multiple libraries. Each language is wrapped in its own Swift package so you don't…
