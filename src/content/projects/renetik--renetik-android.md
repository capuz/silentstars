---
repo: "renetik/renetik-android"
name: "renetik-android"
description: "Pragmatic Kotlin framework for reactive, MVC-style Android apps — events & observable properties, JSON, stores & presets, and a view-controller UI layer."
readmeQualityOk: true
url: "https://github.com/renetik/renetik-android"
homepage: "https://renetik.github.io/renetik-android/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android", "library", "rapid-development", "mvc-framework", "kotlin-android", "kotlin", "android-library", "reactive-programming"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-09-26T20:21:14Z"
lastCommitAt: "2026-11-13T05:36:59Z"
lastReleaseAt: "2022-06-24T02:14:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 71
maintainers: ["renetik"]
openGraphImageUrl: "https://opengraph.githubassets.com/d11ca778eddf775c12362b78f4b5d7266f9ce77c17bd5fe31186cc5d2d254373/renetik/renetik-android"
---

# Renetik Android

A pragmatic Kotlin library for Android application development: reactive
events and properties, JSON, persistent stores and presets, a view-controller
layer over a single Activity, and a set of UI widgets and extensions — the
foundation of the [Renetik Instruments](https://www.renetik.com) apps and
[Motorkari](https://play.google.com/store/apps/details?id=cz.motorkari.android) app.

- **API docs**: https://renetik.github.io/renetik-android/
- **Sample**: [`sample/`](https://github.com/renetik/renetik-android/blob/HEAD/sample) — its main screen is a live checklist that
  exercises every published module at runtime.
- **Changelog**: [CHANGELOG.md](https://github.com/renetik/renetik-android/blob/HEAD/CHANGELOG.md)

## Quickstart

```gradle
repositories {
    google()
    mavenCentral()
    maven { url = 'https://jitpack.io' }
}

dependencies {
    // everything at once (aggregate artifact):
    implementation 'com.github.renetik.renetik-android:renetik-android-framework:2.0.1'
    debugImplementation 'com.github.renetik.renetik-android:renetik-android-core-leakcanary:2.0.1'
}
```

Use `master-SNAPSHOT` instead of `2.0.1` to follow the current `master`.
Prefer…
