---
repo: "ecency/vision-mobile"
name: "vision-mobile"
description: "Ecency Mobile - reimagined social blogging, contribute and get rewarded (for Android and iOS)"
readmeQualityOk: true
url: "https://github.com/ecency/vision-mobile"
homepage: "https://ecency.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [85]
topics: ["esteem", "mobile", "blockchain", "ios", "android", "crypto", "epoint", "react-native", "rewarding", "social-media"]
stars: 262
forks: 76
openIssues: 3
closedIssues: 1176
watchers: 10
contributors: 21
recentReleases: 0
createdAt: "2018-07-13T19:03:12Z"
lastCommitAt: "2026-11-15T11:22:46Z"
lastReleaseAt: "2020-09-10T08:16:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 43
maintainers: ["feruzm"]
openGraphImageUrl: "https://opengraph.githubassets.com/70708fa9853e184381859bcf934b03609d134abf31e04238e40d695f14f612d6/ecency/vision-mobile"
---

# Ecency mobile

The Ecency app for iOS and Android (4.x): SwiftUI on iOS, Jetpack Compose on Android, over a shared Kotlin Multiplatform core. It ships to both stores as the update of the React Native 3.x app (`app.esteem.mobile.ios`, `app.esteem.mobile.android`), reading the RN app's stored accounts, keys and settings in place (below, "In-place upgrade from RN 3.x").

The React Native app was removed from this repository in #3627; its last state is the `rn-3.x-final` tag (`git checkout rn-3.x-final`). Where this README says "RN", it means that app, which the native one matches feature for feature.

## Layout

```
shared/          Kotlin Multiplatform core (Android + iOS), package com.ecency.core
androidApp/      Jetpack Compose app
iosApp/          SwiftUI app; project.yml is the source, the .xcodeproj is generated
build-logic/     Gradle build tools (the localization generator)
src/config/locales/  The translations (Crowdin syncs this path; the l10n generator reads it)
scripts/         Simulator, emulator, icon and release helpers
tools/           Golden fixture generators, run by hand (tools/README.md)
docs/            Release builds, design notes, brand sources (docs/brand)…
