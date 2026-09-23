---
repo: "viktorstrate/mactrix"
name: "mactrix"
description: "Native Matrix client for macOS "
readmeQualityOk: true
url: "https://github.com/viktorstrate/mactrix"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["matrix"]
stars: 249
forks: 19
openIssues: 24
closedIssues: 30
watchers: 11
contributors: 12
recentReleases: 0
createdAt: "2025-11-08T11:56:50Z"
lastCommitAt: "2026-09-23T08:47:20Z"
lastReleaseAt: "2026-06-22T11:17:18Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 74
undervaluedScore: 15
maintainers: ["glasfisch3000", "viktorstrate", "beezly"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9273dd2c33c2351e3c467f184b5b3fe06112e390d88b13dc081106bce600056/viktorstrate/mactrix"
discussionCount: 1
---

# Mactrix

A native macOS client for [Matrix](https://matrix.org) – an open protocol for decentralised, secure communications.

## Overview

Mactrix is built with Apple's [SwiftUI](https://developer.apple.com/swiftui/) framework to provide seamless native integration with macOS. It leverages the robust [matrix-rust-sdk](https://github.com/matrix-org/matrix-rust-sdk) for stability and performance.

Feel free to join our Matrix room at [#mactrix:qpqp.dk](https://matrix.to/#/#mactrix:qpqp.dk).

## Installation

Mactrix is currently in early development, which means that distribution with auto-updates does not exist yet. However, the latest version is built automatically and can be [downloaded here](https://github.com/viktorstrate/mactrix/actions/workflows/xcode-build.yml?query=branch%3Amain+event%3Apush). Simply select the latest build and download `Mactrix.app` under Artifacts.

## Build From Source

### Requirements

- macOS 15.7 or later
- Up-to-date Xcode installed

Xcode will automatically download all dependencies when building the project for the first time.

### Building

```bash
git clone https://github.com/viktorstrate/mactrix.git
cd mactrix
xed .
```

Then open the project…
