---
repo: "StreamDek/StreamDekMobile"
name: "StreamDekMobile"
description: "An Android and iOS mobile media aggregator app"
readmeQualityOk: true
url: "https://github.com/StreamDek/StreamDekMobile"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 14
forks: 0
openIssues: 2
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-03T14:56:14Z"
lastCommitAt: "2026-09-16T08:48:29Z"
lastReleaseAt: "2026-09-11T17:35:52Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 53
maintainers: ["StreamDek"]
openGraphImageUrl: "https://opengraph.githubassets.com/82c611ace4f3cb9abe90197f00ff8396e02bcb087784aa20c2f23533624524f1/StreamDek/StreamDekMobile"
discussionCount: 1
---

# StreamDek Android Kotlin

Native Android StreamDek client built with Kotlin and Jetpack Compose.

This is the canonical `StreamDek/StreamDekMobile` repository. The old React
Native / Expo app has been retired; the repository and release flow contain
only the Kotlin/Android application.

## What is here

- Native app UI in `android/app/src/main/java/net/streamdek/mobile/nativeapp/`
- Android entrypoint in `android/app/src/main/java/net/streamdek/mobile/MainActivity.kt`
- Native MPV playback via `android/app/src/main/java/net/streamdek/mobile/mpv/MPVView.kt`

## Requirements

- Android Studio or JDK 17+
- Android SDK Platform 36
- A backend URL in the root `.env`

Example:

```env
STREAMDEK_API_URL=http://192.168.x.x:3000
```

## Build

From `android/`:

```powershell
.\gradlew :app:compileDebugKotlin
.\gradlew :app:assembleDebug
.\gradlew :app:installDebug
.\gradlew :app:assembleRelease
```

## Device install

```powershell
adb devices
adb install -r .\app\build\outputs\apk\debug\app-debug.apk
```

## Production release

Production Android releases are published from `StreamDek/StreamDekMobile` by
.github/workflows/release.yml. Pushing a semantic version tag such as vX.Y.Z
builds…
