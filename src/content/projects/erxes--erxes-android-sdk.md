---
repo: "erxes/erxes-android-sdk"
name: "erxes-android-sdk"
description: "erxes Android SDK, for integrating erxes into your android application"
url: "https://github.com/erxes/erxes-android-sdk"
homepage: "https://erxes.io"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "realm", "apollographql", "erxes", "android-sdk-erxes", "hacktoberfest"]
stars: 22
forks: 30
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2018-08-10T08:33:44Z"
lastCommitAt: "2026-06-25T01:32:16Z"
lastReleaseAt: "2019-08-22T08:25:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 66
maintainers: ["Munkhorgilb"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5a4ad1a1e995f0dbbdecf04a0a56f5c936c96bd16d8e61b92a405284e629e4c/erxes/erxes-android-sdk"
---

# erxes Android Messenger SDK

Native Android SDK that embeds a fully-featured erxes customer messenger — real-time
chat, knowledge base, and support tickets — into your Android app. Kotlin-first port
of the [erxes iOS SDK](https://github.com/erxes/erxes-ios-sdk).

> **Status: in development.** See [`ROADMAP.md`](ROADMAP.md) for what works today.

## Features (target parity)

- 🔴 Real-time chat over WebSocket (`graphql-ws`) with auto-reconnect
- 🤖 Bot conversations with typing indicators
- 🎈 Draggable launcher button that snaps to screen corners
- 📎 Image upload (PNG/JPEG) with progress
- 📚 Knowledge base browsing & search
- 🎫 Support ticket creation & tracking
- 👤 Optional user identification

## Requirements

- Android 7.0 (API 24)+
- Kotlin · Jetpack Compose
- An erxes backend endpoint + integration ID (Dashboard → Settings → Integrations)

## Install

```kotlin
// settings.gradle.kts → repositories { mavenCentral(); mavenLocal() }
dependencies {
    implementation("com.erxes:messenger-sdk:0.30.4")
}
```

## Quick start

```kotlin
// Application.onCreate()
ErxesMessenger.configure(
    context = this,
    config = MessengerConfig(
        endpoint =…
