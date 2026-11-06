---
repo: "wireapp/kalium"
name: "kalium"
description: "🍌 An SDK for creating Wire clients on Android and JVM. Expanding to iOS and Web."
readmeQualityOk: true
url: "https://github.com/wireapp/kalium"
homepage: "https://wireapp.github.io/kalium/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android-library", "chat-application", "chat-sdk", "e2ee", "jvm", "kotlin", "kotlin-multiplatform", "multiplatform-kotlin-library"]
stars: 72
forks: 13
openIssues: 1
closedIssues: 93
watchers: 16
contributors: 54
recentReleases: 0
createdAt: "2021-11-08T14:07:20Z"
lastCommitAt: "2026-11-06T11:46:55Z"
lastReleaseAt: "2026-06-18T13:47:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["MohamadJaara", "Garzas", "sbakhtiarov"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d9cc3b7c5da60223655d15d73430fa8f26a45b4a5d0595140457141f2c472f1/wireapp/kalium"
---

# Kalium

Kalium is Wire's Kotlin Multiplatform SDK for messaging, end-to-end encryption, conversation state, backup, calling integration, and Wire backend access.

It is primarily built for Wire clients and currently targets Android, JVM, and Apple platforms. JavaScript support exists where individual modules enable it.

## Use Kalium

Release builds are published under the Maven group `com.wire.kalium`. The main SDK entry point is the `:logic` module:

```kotlin
dependencies {
    implementation("com.wire.kalium:logic:<version>")
}
```

Use the version from GitHub releases or Maven Central metadata.

## Supported Platforms

| Platform | Status | Notes |
| --- | --- | --- |
| Android | Supported | Main production target. |
| JVM | Supported | Used by tests, tools, and the CLI sample. |
| iOS/macOS Apple Silicon | Supported | Frameworks for the app, the Notification Service Extension and the share extension; see the [Apple build guide](https://github.com/wireapp/kalium/blob/HEAD/docs/IOS_BUILD.md). |
| JavaScript | Limited | Experimental and module-dependent. |

## Build From Source

Requirements:

- JDK 21
- Git
- macOS on Apple Silicon for Apple target builds

Common commands:…
