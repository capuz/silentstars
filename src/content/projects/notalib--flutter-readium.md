---
repo: "Notalib/flutter_readium"
name: "flutter_readium"
description: "Flutter plugin for reading EPUB and WebPub books. Based on the Readium toolkit components"
url: "https://github.com/Notalib/flutter_readium"
language: "Dart"
languages: ["Dart", "TypeScript", "Kotlin"]
languagePcts: [38, 22, 21]
topics: ["epub", "readium-2"]
stars: 26
forks: 11
openIssues: 11
closedIssues: 38
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2024-04-09T10:59:29Z"
lastCommitAt: "2026-07-03T12:39:06Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 61
maintainers: ["ddfreiling", "m-abs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b8d90ace58231dd89ac532e704c10e17db1f82cca3b081da35050326973774d/Notalib/flutter_readium"
discussionCount: 1
---

# flutter_readium

A Flutter plugin for reading EPUB, audiobook, and WebPub publications, wrapping the [Readium](https://readium.org) toolkits behind a unified Dart API.

flutter_readium is a federated Flutter plugin that delegates to the upstream Readium toolkits on each platform:

- **swift-toolkit 3.9.0** on iOS
- **kotlin-toolkit 3.2.0** on Android
- **ts-toolkit** (`@readium/shared`, `@readium/navigator`) on Web

The canonical version pins live in `flutter_readium/ios/flutter_readium.podspec`, `flutter_readium/android/build.gradle` (`ext.readium_version`), and `flutter_readium/package.json`. Run `bin/readium_versions` to print them at any time.

## Features
- EPUB 2 / EPUB 3 reading, with dynamic horizontal pagination and vertical scrolling modes
- PDF reading on iOS (PDFKit) and Android (PDFium), with layout, reading-progression, page-spacing, and fit preferences
- WebPub reading (including audiobook WebPub)
- Pre-recorded audio playback with track navigation and variable speed
- Synchronized Media Overlays in WebPubs (text-and-audio read-along)
- Platform-native text-to-speech with voice selection, speed, and pitch
- Reader preferences (typography, theme, scroll, columns,…
