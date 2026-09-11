---
repo: "worldline/devview"
name: "devview"
description: "A powerful, modular developer tools framework for Kotlin Multiplatform applications"
readmeQualityOk: true
url: "https://github.com/worldline/devview"
homepage: "https://worldline.github.io/devview/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["android", "compose-multiplatform", "ios", "kotlin", "kotlin-multiplatform"]
stars: 10
forks: 2
openIssues: 18
closedIssues: 32
watchers: 0
contributors: 10
recentReleases: 7
createdAt: "2026-01-16T10:41:44Z"
lastCommitAt: "2026-09-11T08:15:59Z"
lastReleaseAt: "2026-09-10T13:21:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 65
maintainers: ["MaxMichel2", "VedantMadane", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1135609459/aa03076f-faba-4880-8375-74dd2b21d88d"
---

# DevView

</p>

A Kotlin Multiplatform library that adds an in-app developer overlay to Android and iOS apps. The overlay hosts pluggable modules for feature flags, analytics inspection, and network mocking.

**Full documentation:** [worldline.github.io/devview](https://worldline.github.io/devview/)

---

## Requirements

- Android minSdk 26
- iOS 16+
- Kotlin 2.x
- Compose Multiplatform

---

## Installation

DevView is published to Maven Central. Add the modules you need to your shared KMP module:

```kotlin
// build.gradle.kts (shared / commonMain)
dependencies {
    implementation("com.worldline.devview:devview:<version>")           // core — always required

    implementation("com.worldline.devview:devview-featureflip:<version>")   // feature flags
    implementation("com.worldline.devview:devview-analytics:<version>")     // analytics inspector
    implementation("com.worldline.devview:devview-consolelogger:<version>") // native console log viewer
    implementation("com.worldline.devview:devview-timecapsule:<version>")   // per-screen state history
    implementation("com.worldline.devview:devview-networkmock:<version>")   // network mock UI

    // Ktor plugin only (no…
