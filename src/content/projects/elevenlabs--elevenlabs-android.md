---
repo: "elevenlabs/elevenlabs-android"
name: "elevenlabs-android"
description: "Official ElevenLabs Kotlin SDK"
readmeQualityOk: true
url: "https://github.com/elevenlabs/elevenlabs-android"
homepage: "https://elevenlabs.io/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["artificial-intelligence", "convai", "conversational-ai", "elevenlabs"]
stars: 28
forks: 13
openIssues: 2
closedIssues: 18
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2025-01-20T15:54:10Z"
lastCommitAt: "2026-09-23T08:47:38Z"
lastReleaseAt: "2025-11-25T17:21:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 65
maintainers: ["Crysis21", "renal128", "nathanpogue6"]
openGraphImageUrl: "https://opengraph.githubassets.com/061933f3e15d48776a7a385df78611257ba9dfa9305434261cdf44e8adf468c8/elevenlabs/elevenlabs-android"
---

## ElevenAgents SDK for Android (Kotlin)

Official ElevenAgents SDK for Android.

### Features

- Audio‑first, low‑latency sessions over LiveKit (WebRTC)
- Text‑only sessions over the ConvAI WebSocket (no LiveKit, no mic permission)
- Public agents (token fetched client‑side from `agentId`) and private agents (pre‑issued `conversationToken` for voice or `signedUrl` for text‑only)
- Strongly‑typed events and callbacks (connect, messages, mode changes, feedback availability, unhandled client tools)
- Data channel messaging (user message, contextual update, user activity/typing)
- Feedback (like/dislike) associated with agent responses
- Microphone mute/unmute control
- Real-time audio level tracking for agent voice volume (0.0 to 1.0)

---

## Installation

Add Maven Central and the SDK dependency to your Gradle configuration.

### settings.gradle.kts
```kotlin
pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }
}

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}
```

### app/build.gradle.kts
```kotlin…
