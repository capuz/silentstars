---
repo: "JameSanderlanding/PIXTONE"
name: "PIXTONE"
description: "There’s nothing better than listening to music in our fast and convenient music player."
readmeQualityOk: true
url: "https://github.com/JameSanderlanding/PIXTONE"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 4
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-11-02T23:50:06Z"
lastCommitAt: "2026-11-11T11:22:59Z"
lastReleaseAt: "2026-11-07T23:01:09Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 56
maintainers: ["JameSanderlanding", "TolyanL"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbbe2327a99ec6db62355fcdbf0095e888b9fb55191f7def0e9bfb584fcee2fa/JameSanderlanding/PIXTONE"
---

PIXTONE plays the music stored on your device. Just a folder, a queue and an interface built around dots, segments and pixels. Nothing is uploaded anywhere: network access is used only for optional lyrics and cover lookup.

## 01 — Screenshots

All screenshots show the English interface with a generated demo library. Track titles and cover art are original and created for this project; the lyrics shown are from the public-domain hymn "Amazing Grace".

## 02 — Features

## 03 — Tech stack

| Layer | Technology |
|---|---|
| **Language** | Kotlin 2.2 |
| **UI** | Jetpack Compose, Material 3, custom design system |
| **Playback** | AndroidX Media3 (ExoPlayer), MediaSessionService, system audio effects and a custom reverb AudioProcessor |
| **Async** | Kotlin Coroutines, StateFlow / SharedFlow |
| **Images** | Coil |
| **Networking** | OkHttp, org.json, Jsoup |
| **Storage** | SQLiteOpenHelper, SharedPreferences, Storage Access Framework |
| **Architecture** | Single-Activity, state-driven UI, ViewModel + repository layer, manual DI (`AppContainer`) |
| **Build** | Gradle 9.6, Android Gradle Plugin 9.4.1, JDK 21 |
| **SDK** | minSdk 26, targetSdk 37, compileSdk 37 |

## 04 —…
