---
repo: "yveskalume/elevenlabs-kmp"
name: "elevenlabs-kmp"
description: "A Kotlin-first Multiplatform SDK for the ElevenLabs API, built on coroutines."
readmeQualityOk: true
url: "https://github.com/yveskalume/elevenlabs-kmp"
homepage: "https://yveskalume.github.io/elevenlabs-kmp/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["elevenlabs", "kotlin", "kotlin-multiplatform", "voice-ai"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-08-15T10:45:28Z"
lastCommitAt: "2026-09-27T09:28:17Z"
lastReleaseAt: "2026-08-22T17:26:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 55
maintainers: ["yveskalume", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/602612726c29c3fde70a86cbe4d862b826798931aea008bc898abb867645dee4/yveskalume/elevenlabs-kmp"
---

# ElevenLabs KMP

A Kotlin-first Multiplatform SDK for the [ElevenLabs](https://elevenlabs.io/) API, with coroutine and `Flow`-based APIs for Android, iOS and JVM.

> Community-maintained SDK. Not affiliated with or endorsed by ElevenLabs.

## Installation

ElevenLabs KMP is available from Maven Central.

```kotlin
// settings.gradle.kts
dependencyResolutionManagement {
    repositories {
        mavenCentral()
    }
}
```

```kotlin
// Shared module's build.gradle.kts
kotlin {
    sourceSets {
        commonMain.dependencies {
            implementation("io.github.yveskalume:elevenlabs-kmp:0.1.0")
        }
    }
}
```

### Snapshots

Development snapshots are also published to the Central Portal snapshots repository:

```kotlin
// settings.gradle.kts
dependencyResolutionManagement {
    repositories {
        maven {
            url = uri("https://central.sonatype.com/repository/maven-snapshots/")
            content {
                includeModule("io.github.yveskalume", "elevenlabs-kmp")
            }
        }
        mavenCentral()
    }
}
```

Then replace `0.1.0` with `0.1.0-SNAPSHOT` in the dependency declaration.

## Quick start

Create a client in a trusted environment:…
