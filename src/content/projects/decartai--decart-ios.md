---
repo: "DecartAI/decart-ios"
name: "decart-ios"
description: "Native Swift SDK for Decart AI"
readmeQualityOk: true
url: "https://github.com/DecartAI/decart-ios"
homepage: "https://docs.platform.decart.ai/sdks/swift"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["ai", "decart", "ios", "realtime", "swift", "webrtc"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-08T12:29:55Z"
lastCommitAt: "2026-10-12T11:15:37Z"
lastReleaseAt: "2025-11-24T22:50:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 53
maintainers: ["AdirAmsalem", "tomershlasky", "VerioN1"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d6a8ffeb0c454d5cc07eb029eb61abef645df1d493757e0f0c76102fbd8e2e2/DecartAI/decart-ios"
---

# Decart iOS SDK

Native Swift SDK for [Decart AI](https://decart.ai) - Real-time video processing and AI generation for iOS & macOS.

## Overview

Decart iOS SDK provides three primary APIs:

- **RealtimeManager** - Real-time video processing with LiveKit streaming, automatic reconnection, and generation tracking
- **QueueClient** - Async video generation via the Queue API (`/v1/jobs/*`) with submit, poll, and download
- **ProcessClient** - Synchronous image generation

All APIs leverage modern Swift concurrency (async/await) with type-safe interfaces and comprehensive error handling.

## Features

- Real-time video processing with LiveKit
- Automatic reconnection with exponential backoff
- Generation tick events for billing/usage tracking
- Async Queue API for video generation (submit → poll → download)
- Synchronous image generation
- Native Swift with modern concurrency (async/await)
- AsyncStream events for reactive state management
- Type-safe API with compile-time guarantees
- iOS 15+ and macOS 12+ support
- SwiftUI ready

## Installation

### Swift Package Manager

Add to your `Package.swift`:

```swift
dependencies: [
    .package(url:…
