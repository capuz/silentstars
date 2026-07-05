---
repo: "fethica/FRadioPlayer"
name: "FRadioPlayer"
description: "A simple radio player framework for iOS"
readmeQualityOk: true
url: "https://github.com/fethica/FRadioPlayer"
homepage: "https://fethica.github.io/FRadioPlayer/"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["player", "radio", "swift", "music", "avplayer", "album-artwork", "cocoapods", "itunes-api", "radio-url", "audio-player"]
stars: 296
forks: 64
openIssues: 12
closedIssues: 47
watchers: 23
contributors: 9
recentReleases: 0
createdAt: "2017-12-03T21:15:52Z"
lastCommitAt: "2026-07-05T20:58:51Z"
lastReleaseAt: "2018-03-18T02:58:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 26
maintainers: ["fethica"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df38d84e3d7fe96eb5669aad77c694f9dbd67046aeceaebbe3acb7aa937e97e/fethica/FRadioPlayer"
fundingLinks: ["GITHUB:https://github.com/fethica", "CUSTOM:https://www.paypal.me/fethicaEH"]
discussionCount: 5
---

</p>

# FRadioPlayer

FRadioPlayer is a wrapper around AVPlayer to handle internet radio playback.

## Example

SwiftUI demo source lives under `Example/FRadioPlayerDemo/`.

Use XcodeGen to generate and open the demo project:

```sh
brew install xcodegen    # once
cd Example
xcodegen                 # generates FRadioPlayerDemo.xcodeproj
open FRadioPlayerDemo.xcodeproj
```

## Features
- [x] Support internet radio URL playback
- [x] Update and parse track metadata
- [x] Update and show album artwork (via iTunes API)
- [x] Automatic handling of interruptions
- [x] Automatic handling of route changes
- [x] Support bluetooth playback
- [x] Network interruptions handling
- [x] Support for Swift Package Manager SPM

## Requirements
- iOS 14.0+
- macOS 11.0+
- tvOS 14.0+
- Xcode 15+
- Swift 5.9+

## Installation

### Swift Package Manager

FRadioPlayer is available through [SPM](https://github.com/apple/swift-package-manager). To add it in Xcode: File > Add Packages… and use the URL of this repository. Or add the dependency in `Package.swift`:

```swift
.package(url: "https://github.com/fethica/FRadioPlayer.git", from: "0.2.3")
```

## Quick Start

Add the package, then use the shared…
