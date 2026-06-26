---
repo: "partout-io/partout"
name: "partout"
description: "The easiest way to build cross-platform tunnel apps."
url: "https://github.com/partout-io/partout"
language: "Swift"
languages: ["Swift"]
languagePcts: [73]
topics: ["combine", "ios", "macos", "network-extension", "openvpn", "openvpn-client", "osx", "ovpn", "tvos", "vpn"]
stars: 67
forks: 16
openIssues: 46
closedIssues: 72
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-01-13T08:41:03Z"
lastCommitAt: "2026-06-26T06:46:26Z"
lastReleaseAt: "2025-02-11T17:47:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 92
undervaluedScore: 49
maintainers: ["keeshux"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b4915db190b26ea3471c5a9a1403fabdd46fa1f31238e928c60253be327dcc4/partout-io/partout"
fundingLinks: ["GITHUB:https://github.com/partout-io", "CUSTOM:https://buymeacoffee.com/partout.io"]
---

![iOS 16+](https://img.shields.io/badge/ios-16+-green.svg)
![macOS 13+](https://img.shields.io/badge/macos-13+-green.svg)
![tvOS 17+](https://img.shields.io/badge/tvos-17+-green.svg)

# [Partout](https://partout.io)

_The easiest way to build cross-platform tunnel apps_.

Partout is a _multilanguage_ library using [Swift][swift] and C at its core. It provides VPN functionality through the [Network Extension][network-extension] framework on Apple platforms, but it partially works on Android, Linux, and Windows (with [Wintun][wintun]). I'm documenting the long journey of making Partout fully cross-platform [in a blog series][blog], where I write about the challenges of Swift on non-Apple targets, and how I'm overcoming them.

Partout is the backbone of [Passepartout][passepartout]. The footprint is kept in check on non-Apple platforms by reimplementing a small subset of Swift Foundation in the `MiniFoundation` targets.

## Usage

**As per the GPL, the public license is not suitable for the App Store and other closed-source distributions. If you want to use Partout for proprietary or commercial purposes, please [obtain a proper license][license-website].**

### SwiftPM

Import the…
