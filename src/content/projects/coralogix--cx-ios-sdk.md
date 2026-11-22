---
repo: "coralogix/cx-ios-sdk"
name: "cx-ios-sdk"
description: "Coralogix RUM SDK for iOS"
readmeQualityOk: true
url: "https://github.com/coralogix/cx-ios-sdk"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
stars: 6
forks: 7
openIssues: 0
closedIssues: 12
watchers: 4
contributors: 19
recentReleases: 0
createdAt: "2024-05-02T14:47:16Z"
lastCommitAt: "2026-11-22T11:48:32Z"
lastReleaseAt: "2025-06-24T18:37:34Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 88
maintainers: ["tomerhy", "dan-g-coralogix", "stas-rudevitsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/30189bd55337bc10a282b8861ea3aa6b191e4369ecb9a9a8020ae0dfdc76a462/coralogix/cx-ios-sdk"
---

# Official Coralogix SDK for iOS

## Overview

The Coralogix RUM Mobile SDK is a library for iOS, distributed through Swift Package Manager and CocoaPods. The SDK provides mobile Telemetry instrumentation that captures:

1. HTTP requests, using URLSession instrumentation
2. Unhandled exceptions (NSException, NSError, Error)
3. Custom Logs
4. Crashes - using PLCrashReporter
5. Page navigation (Swift use swizzling / SwiftUI use modifier)
6. User Actions (Clicks - UI elements)
7. ANR (Application Not Responding) detection
8. Mobile Vitals (FPS, CPU, Memory, Cold Start, Warm Start, Slow/Frozen Frames)

## Requirements

Coralogix RUM agent for iOS supports iOS 13 and higher, and tvOS 14 and higher when installed with Swift Package Manager.

## Installation

The integration requires minimal effort with a few lines of code. The SDK can
be installed with Swift Package Manager or CocoaPods.

### Swift Package Manager

1. Open **File > Add Package Dependencies**.
2. Search for `git@github.com:coralogix/cx-ios-sdk`.
3. Select the **Up to Next Major Version** option.

### CocoaPods

Add the Coralogix pod to your `Podfile`:
