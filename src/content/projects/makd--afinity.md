---
repo: "MakD/AFinity"
name: "AFinity"
description: "A modern, native Android Jellyfin client built with Kotlin, Jetpack Compose, Material 3, and LibMPV."
readmeQualityOk: true
url: "https://github.com/MakD/AFinity"
homepage: "https://afinity.vercel.app"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["jellyfin", "jellyfin-client", "jellyfin-server", "jellyfin-web", "android", "android-app", "android-application", "jetpack-android", "jetpack-compose", "kotlin"]
stars: 202
forks: 13
openIssues: 14
closedIssues: 71
watchers: 0
contributors: 27
recentReleases: 0
createdAt: "2025-10-01T10:50:36Z"
lastCommitAt: "2026-07-11T05:55:57Z"
lastReleaseAt: "2025-10-15T12:14:13Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 35
maintainers: ["MakD", "arsenii-mitianin", "arifpedia"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1067758672/d0d74d09-4523-4ef7-b5c0-2410b2659309"
fundingLinks: ["KO_FI:https://ko-fi.com/m0rph3us"]
discussionCount: 2
---

# Afinity - Yet Another Jellyfin Client

[Download](#installation) • [View Screenshots](#screenshots) • [Report Bug](https://github.com/MakD/AFinity/issues) • [Request Feature](https://github.com/MakD/AFinity/issues)

</div>

## Overview

​AFinity is a native Android application that brings your Jellyfin media library to life with a
clean, responsive interface. Stream your movies, TV shows, and live TV with hardware-accelerated
playback, and discover new content through personalised recommendations. Beyond video, AFinity
extends your experience with optional Audiobookshelf integration for audiobooks and podcasts, and
direct media requests via Jellyseerr.

## Installation

</p>

#### Build From Source

```bash
git clone https://github.com/MakD/AFinity.git
cd AFinity
./gradlew assembleRelease
```

> **Note:** Without a `key.properties` file in the project root, release builds are signed with the
> debug key. They install fine, but can't update an official release — uninstall the official APK
> first. To sign with your own key, create `key.properties` with `storeFile`, `storePassword`,
> `keyAlias`, and `keyPassword` entries.

## Initial Setup

1. **Launch AFinity** on your Android…
