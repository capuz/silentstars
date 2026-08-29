---
repo: "reygnn/Kolibri-Launcher"
name: "Kolibri-Launcher"
description: "Minimalist 'Android 16+ only' launcher focused on simplicity and speed. Built with modern architecture (MVVM, Clean Architecture, Kotlin Coroutines)."
readmeQualityOk: true
url: "https://github.com/reygnn/Kolibri-Launcher"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["android", "android-launcher", "f-droid", "foss", "kotlin", "launcher", "minimalist", "mvvm", "open-source", "android-16"]
stars: 7
forks: 0
openIssues: 7
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-08-08T18:39:07Z"
lastCommitAt: "2026-08-29T17:28:25Z"
lastReleaseAt: "2026-08-20T19:53:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 82
undervaluedScore: 75
maintainers: ["reygnn"]
openGraphImageUrl: "https://opengraph.githubassets.com/70268a9124dcaec19d0fffe1d9e6256f3c1081ffc6949bd663d7c2a49c34e255/reygnn/Kolibri-Launcher"
---

# Kolibri Launcher

A minimalist Android home-screen launcher. Opinionated, single-platform, no clutter.

## What it is

Kolibri replaces your home screen with a stripped-down view: time, date,
battery, and a hand-picked list of favourite apps. Everything else lives
in a swipe-up app drawer with instant search. No widgets. No icon grid.
No "discover" tabs.

It's also a private playground for trying current Android architecture
ideas — Hilt, Coroutines/Flow, Jetpack Navigation, Clean-Architecture
module split, Robolectric + Espresso, the works. The codebase is
deliberately over-engineered relative to its size; if you're poking
around for examples of how a given pattern looks in 2026, you'll
probably find one.

## Requirements

- **Android 16+** — `minSdk = 36`; compiled and targeted against API 37
  (Android 17). Exact levels in `app/build.gradle.kts`.
  No backwards-compat shims. If your device is older, this launcher
  won't install.
- **JDK 21** to build. Lower JDKs fail at the Robolectric / SDK-36
  test layer.

## Privacy & Crash Reporting

- **ACRA**, opt-in. Disabled by default; the consent dialog appears
  on first launch and the choice is remembered.
- **Self-hosted…
