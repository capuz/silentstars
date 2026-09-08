---
repo: "elevenlabs/elevenlabs-swift-sdk"
name: "elevenlabs-swift-sdk"
description: "ElevenLabs Conversational AI Swift SDK"
readmeQualityOk: true
url: "https://github.com/elevenlabs/elevenlabs-swift-sdk"
homepage: "https://elevenlabs.io/docs/conversational-ai"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 117
forks: 64
openIssues: 5
closedIssues: 80
watchers: 19
contributors: 32
recentReleases: 0
createdAt: "2024-10-16T11:04:37Z"
lastCommitAt: "2026-09-08T08:17:20Z"
lastReleaseAt: "2025-02-26T01:52:15Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 39
maintainers: ["renal128", "kraenhansen", "lagercat"]
openGraphImageUrl: "https://opengraph.githubassets.com/62f058e1d34195aacff908475a1e2f30f2d8db989edcac12d21dd052523b87d5/elevenlabs/elevenlabs-swift-sdk"
---

# ElevenAgents Swift SDK

A Swift SDK for integrating ElevenAgents capabilities into your iOS and macOS applications. Built on top of LiveKit WebRTC for real-time audio streaming and communication.

---

## Why ElevenLabs Swift SDK?

- **Ultra-Low Latency**: Built on LiveKit WebRTC for high-performance, real-time audio streaming.
- **Human-Like Interaction**: Seamlessly handle interruptions and natural speech patterns.
- **Dev-First API**: Fully supports Swift Concurrency (Async/Await) and SwiftUI observation.
- **Extensible**: Native support for Client Tools and MCP (Model Context Protocol).
- **Native Performance**: Optimized for iOS and macOS, ensuring buttery-smooth UI.

---

## Quick Start

### 1. Installation

Add the package via Swift Package Manager:

```swift
dependencies: [
    .package(url: "https://github.com/elevenlabs/elevenlabs-swift-sdk.git", from: "3.3.1")
]
```

### 2. Requirements & Permissions

- **Platforms**: iOS 13.0+ · macOS 10.15+ · macCatalyst 14.0+ · visionOS 1.0+ · tvOS 17.0+
- **Tooling**: Xcode 15.0+ · Swift 5.9+
- **Privacy**: Add `NSMicrophoneUsageDescription` to your `Info.plist`. If connecting on local networks, you may also need…
