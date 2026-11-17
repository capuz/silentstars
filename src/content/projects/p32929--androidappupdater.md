---
repo: "p32929/AndroidAppUpdater"
name: "AndroidAppUpdater"
description: "Lightweight Android update checker that reads a JSON file you host — supports forced updates, no Play Services"
readmeQualityOk: true
url: "https://github.com/p32929/AndroidAppUpdater"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android-library", "update-checker", "json", "android", "java", "app-updater", "force-update", "in-app-update", "jitpack", "versioning"]
stars: 26
forks: 8
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-05-29T06:28:09Z"
lastCommitAt: "2026-11-17T14:37:10Z"
lastReleaseAt: "2019-07-15T15:36:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 78
undervaluedScore: 43
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/ead63fb9e1fdf233c46acc99afdb7ae3e8faf95fd333cb05e29df78f9eb787dc/p32929/AndroidAppUpdater"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# AndroidAppUpdater

A small update checker for Android apps. You host one JSON file anywhere (GitHub, your server, S3). The library reads it, compares the version with the installed app, and can show a ready-made update dialog, or just hand you the data.

1. **You host the JSON:** no Play Services, no update SDK.
2. **Built-in dialog:** shows the new version and what's new, and follows your app's theme in light and dark mode.
3. **Forced updates:** set `"cancellable": false` and the dialog has no "Later" button.
4. **Or build your own UI:** get the parsed data and the whole JSON in a callback.
5. **Tiny:** a few small classes, written in Kotlin, works from Java too. Min SDK 21.

## Screenshots

| Light | Dark |
|---|---|
|  |  |

## Install

1. Add JitPack in `settings.gradle.kts`:

```kotlin
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        maven("https://jitpack.io")
    }
}
```

2. Add the dependency:

```kotlin
dependencies {
    implementation("com.github.p32929:AndroidAppUpdater:2.0.0")
}
```

## The JSON file

```json
{
  "versionCode": 2,
  "cancellable": true,
  "url":…
