---
repo: "open-telemetry/opentelemetry-android"
name: "opentelemetry-android"
description: "OpenTelemetry Tooling for Android"
readmeQualityOk: true
url: "https://github.com/open-telemetry/opentelemetry-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 304
forks: 119
openIssues: 92
closedIssues: 311
watchers: 23
contributors: 79
recentReleases: 0
createdAt: "2023-07-21T16:31:27Z"
lastCommitAt: "2026-10-27T09:16:28Z"
lastReleaseAt: "2025-01-22T00:07:34Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 94
undervaluedScore: 39
maintainers: ["renovate[bot]", "aranhave", "fractalwrench"]
openGraphImageUrl: "https://opengraph.githubassets.com/66b7c75212d506e08cf43169cd0ae2c7d40c3e86f495dcfe74a44e8834a53145/open-telemetry/opentelemetry-android"
---

# <img src="https://opentelemetry.io/img/logos/opentelemetry-logo-nav.png" alt="OpenTelemetry Icon" width="45" height=""> OpenTelemetry Android

* [About](#about)
* [Getting Started](#getting-started)
  * [Snapshot Builds](#snapshot-builds)
* [Features](#features)
* [Contributing](#contributing)

# About

The repository contains the `OpenTelemetry Android Agent`, which initializes the [OpenTelemetry Java SDK](https://github.com/open-telemetry/opentelemetry-java) and provides
auto-instrumentation of Android apps for real user monitoring (RUM).

While this project isn't 100% Kotlin, it has a "Kotlin-First" policy where usage in Kotlin-based Android apps will be prioritized in terms
of API and idioms. More details about this policy can be found [here](https://github.com/open-telemetry/opentelemetry-android/blob/HEAD/docs/KOTLIN_FIRST.md).

> [!IMPORTANT]
> We are currently seeking additional contributors! See [Contributing](#contributing) for details.

# Getting Started

> If your project's minSdk is lower than 26, then you must enable
> [corelib desugaring](https://developer.android.com/studio/write/java8-support#library-desugaring).
> See…
