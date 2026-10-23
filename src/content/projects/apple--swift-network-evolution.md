---
repo: "apple/swift-network-evolution"
name: "swift-network-evolution"
description: "Network protocol stack in Swift for transports like QUIC."
readmeQualityOk: true
url: "https://github.com/apple/swift-network-evolution"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 79
forks: 31
openIssues: 1
closedIssues: 6
watchers: 12
contributors: 22
recentReleases: 6
createdAt: "2026-05-29T04:53:01Z"
lastCommitAt: "2026-10-23T12:05:12Z"
lastReleaseAt: "2026-10-15T23:47:20Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 40
maintainers: ["agnosticdev", "rpaulo", "porchdog"]
openGraphImageUrl: "https://opengraph.githubassets.com/279a11ed52e9c7f463f1ac46ffbfa50d79efde4eaaf5f1b3be619d9c2e0b0142/apple/swift-network-evolution"
---

#  Swift Network Evolution

The Network framework provides implementations of transport protocols, such as QUIC, along with types used to communicate network endpoints (like IP addresses) and various parameters and preferences for how to set up transport connections.

This package provides access to the implementations of core networking objects and protocol stack architecture from [Network.framework](https://developer.apple.com/documentation/network) that is available on Apple platforms. This package is intended to be used by cross-platform projects like [SwiftNIO](https://github.com/apple/swift-nio) to be able to access a Swift-based implementation of protocols like QUIC.

On macOS, iOS, and other Apple platforms, apps should use the Network.framework that comes with the operating system.

> [!NOTE]
> At this time, all types exposed in this package are marked as SPI and subject to change at any time.
> There are no support guarantees that can be made until these SPIs transition to stable APIs at a later date.

## Getting Started

## Prerequisites

- [Swift 6.3 and up](https://swift.org/install)
- macOS 26.0 and up, Linux (Ubuntu 22.04+), Android API 23+
- Xcode 26.0 and up…
