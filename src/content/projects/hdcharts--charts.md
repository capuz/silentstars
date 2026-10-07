---
repo: "HDCharts/charts"
name: "charts"
description: "🟢 Charts for Jetpack Compose — Multiplatform (Android · iOS · Web · Desktop)"
readmeQualityOk: true
url: "https://github.com/HDCharts/charts"
homepage: "https://charts.hdcode.dev"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["charts", "jetpack-compose", "kotlin", "library", "compose-multiplatform", "android", "ios", "jetpack-compose-charts", "js", "jvm"]
stars: 462
forks: 26
openIssues: 60
closedIssues: 47
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2024-01-03T19:32:13Z"
lastCommitAt: "2026-10-07T10:30:18Z"
lastReleaseAt: "2025-03-09T15:07:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 88
undervaluedScore: 34
maintainers: ["hdcodedev", "dependabot[bot]", "mvanhorn"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/738676725/a92d839d-66da-48e0-b8ec-e3b696d2e0e5"
fundingLinks: ["GITHUB:https://github.com/hdcodedev"]
---

<img
    src="./readme-assets/hdcharts-logo-light.svg#gh-light-mode-only"
    alt="HDCharts logo"
    align="center"
    width="300"
  />
  <img
    src="./readme-assets/hdcharts-logo-dark.svg#gh-dark-mode-only"
    alt="HDCharts logo"
    align="center"
    width="300"
  />

  A Kotlin Multiplatform chart library built with Jetpack Compose.

---

## 📚 Documentation
https://charts.hdcode.dev/

## 🟢 Production Demo
https://charts.hdcode.dev/demo

## ✨ Snapshot Demo
https://charts.hdcode.dev/demo/snapshot/

## 🏀 Playground
https://charts.hdcode.dev/playground

## Get Started

> [!IMPORTANT]
> To try HDCharts, use the latest [snapshot](https://central.sonatype.com/repository/maven-snapshots/io/github/hdcharts/charts/maven-metadata.xml).
> It is the most capable build, with many new features and bug fixes.
> Add `maven("https://central.sonatype.com/repository/maven-snapshots/")` to your repositories to use it.

```kotlin
dependencyResolutionManagement {
    repositories {
        mavenCentral()
    }
}
```

### All chart types

Use the umbrella artifact when you want all chart types with the simplest setup.

```kotlin
commonMain.dependencies {…
