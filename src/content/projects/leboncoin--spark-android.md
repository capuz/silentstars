---
repo: "leboncoin/spark-android"
name: "spark-android"
description: "✨ Simple, Modular & Accessible UI Components for your Android Applications"
readmeQualityOk: true
url: "https://github.com/leboncoin/spark-android"
homepage: "https://leboncoin.github.io/spark-android/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "design-system"]
stars: 85
forks: 44
openIssues: 56
closedIssues: 345
watchers: 6
contributors: 42
recentReleases: 0
createdAt: "2023-02-07T18:09:23Z"
lastCommitAt: "2026-09-02T08:01:57Z"
lastReleaseAt: "2023-12-21T14:32:35Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 54
maintainers: ["dependabot[bot]", "soulcramer", "lbc-android"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/598741849/79e965b6-6e37-4bde-8f38-18d491296eed"
discussionCount: 8
---

# Spark Android Design System

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="art/spark-logo-dark.svg">
  </picture>
</p>

Spark Design System is based on Material 3 Compose artifact described
on the [official documentation](https://material.io/) and maintained by Google developers
and designers.

But these native components and tokens are overridden to respect Spark's Visual Identity. You'll
find
the design specifications and technical information for supported platforms by Adevinta on
[spark.adevinta.com](https://spark.adevinta.com).

Build and install the catalog app locally to browse all components:

```bash
./gradlew :catalog:installDebug
```

## 🚀 Getting Started

A `SparkTheme` is available from where you can get all
colors, typographies and shapes in your composable hierarchy. Note that this theme is
mandatory if you want to use any Spark composable.
Otherwise, a runtime error will be thrown.

```kotlin
SparkTheme {
    // Your composable declarations
}
```

## Installation

Add the main Spark dependency: [](https://central.sonatype.com/namespace/com.adevinta.spark)

```kotlin
dependencies {
    // Import the Spark BoM…
