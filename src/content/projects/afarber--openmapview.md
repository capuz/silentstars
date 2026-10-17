---
repo: "afarber/OpenMapView"
name: "OpenMapView"
description: "Kotlin-first, MIT-licensed map view for Android, powered by OpenStreetMap. Familiar MapView API with markers, shapes, overlays and smooth camera animations, plus a Jetpack Compose OpenMap composable. No API keys, no Play Services."
readmeQualityOk: true
url: "https://github.com/afarber/OpenMapView"
homepage: "https://afarber.github.io/OpenMapView/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["android", "kotlin", "openstreetmap", "osm", "openmapview"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 17
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-24T10:52:48Z"
lastCommitAt: "2026-10-17T07:59:28Z"
lastReleaseAt: "2025-11-22T19:18:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 84
maintainers: ["afarber", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05aa50cf47ed84a994f1749032f3fafcf6cbe5da61edd974565d3884eeccf288/afarber/OpenMapView"
---

# OpenMapView

A modern, Kotlin-first MapView replacement for Android - powered by [OpenStreetMap](https://www.openstreetmap.org/).

## Installation

Add to your `build.gradle.kts`:

```kotlin
dependencies {
    implementation("de.afarber:openmapview:0.21.0")

    // Optional: the OpenMap composable for Jetpack Compose
    implementation("de.afarber:openmapview-compose:0.21.0")
}
```

**Requirements:** minSdk 23, compileSdk 37, Android Gradle Plugin 9.1 or newer and Kotlin 2.3 or newer.

The library is available on [Maven Central](https://central.sonatype.com/artifact/de.afarber/openmapview). Alternative distribution via [JitPack](https://jitpack.io/#afarber/OpenMapView) is also supported.

## License

OpenMapView is MIT licensed, so you can use it in commercial apps. Its four runtime dependencies (androidx core-ktx, lifecycle-runtime-ktx, Compose ui-graphics and ktor-client-android) are all Apache 2.0. See the [Dependency License Report](https://afarber.github.io/OpenMapView/licenses/) for details.

## Features

- Drop-in compatible with the `MapView` API of the Maps SDK for Android (non-deprecated methods only)
- Lightweight, pure Kotlin implementation without Play Services
-…
