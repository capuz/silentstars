---
repo: "carlosmazzei/Kurn"
name: "Kurn"
description: "Simple app to record and transcribe meetings"
readmeQualityOk: true
url: "https://github.com/carlosmazzei/Kurn"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-06-20T19:52:05Z"
lastCommitAt: "2026-09-01T08:47:45Z"
lastReleaseAt: "2026-08-23T19:41:32Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["claude", "carlosmazzei", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/99861cedf8e142f8f57cd2eacf8539a0f81e2ee7d66596af94deebb1b8132dc7/carlosmazzei/Kurn"
fundingLinks: ["GITHUB:https://github.com/carlosmazzei"]
discussionCount: 0
---

</p>

<h1 align="center">Kurn</h1>

Kurn is a local-first iOS and watchOS app for recording meetings,
transcribing audio, identifying speakers, and generating structured AI
summaries. It is built with Swift 6, SwiftUI, SwiftData, AVFoundation, Apple's
Speech framework, ActivityKit, and WatchConnectivity.

Recordings and meeting data are stored on device by default. Network requests
only happen when the user chooses cloud (Whisper-compatible) transcription or
generates a summary with a configured AI provider.

> **Kurn is available on the App Store:**
> [apps.apple.com/app/id6804278920](https://apps.apple.com/app/id6804278920).
> You can also build it yourself from this repo (see
> [Getting Started](#getting-started)).

## Current App

- Native iPhone and iPad app targeting iOS 26.0 or newer, built around the
  system's Liquid Glass navigation chrome.
- Companion Apple Watch app targeting watchOS 10.0 or newer.
- Lock Screen and Dynamic Island Live Activity for active recordings.
- Local SwiftData store for meetings, recordings, speakers, transcripts, and
  summaries.
- Local `.m4a` audio files saved in a protected subdirectory of the app's
  Documents directory, encrypted at rest…
