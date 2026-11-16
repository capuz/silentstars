---
repo: "appwrite/sdk-for-android"
name: "sdk-for-android"
description: "[READ-ONLY] Official Appwrite Android SDK 💚  🤖"
readmeQualityOk: true
url: "https://github.com/appwrite/sdk-for-android"
homepage: "https://appwrite.io"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "appwrite", "kotlin", "java", "baas", "firebase", "android-library", "sdk", "hacktoberfest"]
stars: 156
forks: 30
openIssues: 11
closedIssues: 35
watchers: 10
contributors: 15
recentReleases: 0
createdAt: "2021-06-08T11:05:53Z"
lastCommitAt: "2026-11-16T11:53:01Z"
lastReleaseAt: "2022-01-25T10:29:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 44
maintainers: ["ChiragAgg5k", "ArnabChatterjee20k", "abnegate"]
openGraphImageUrl: "https://opengraph.githubassets.com/58a7362dda9c1e2b0aa9b144fd4a4b201b713befbea6876747ef80d8c26af2ac/appwrite/sdk-for-android"
---

# Appwrite Android SDK

**This SDK targets Appwrite server version 2.7.x as shipped on Appwrite Cloud.** Self-hosted releases can lag behind Cloud — if you run an older self-hosted build, use a matching older SDK from [previous releases](https://github.com/appwrite/sdk-for-android/releases) when APIs differ.

Appwrite is an open-source backend as a service server that abstracts and simplifies complex and repetitive development tasks behind a very simple to use REST API. Appwrite aims to help you develop your apps faster and in a more secure way. Use the Android SDK to integrate your app with the Appwrite server to easily start interacting with all of Appwrite backend APIs and tools. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

## Installation

The SDK requires Android 7.0 (API level 24) or later and is published to Maven Central as `io.appwrite:sdk-for-android`. Make sure `mavenCentral()` is among your repositories (new Android Studio projects include it in `settings.gradle.kts`), then add the dependency to your app module's build file.

Kotlin DSL (`build.gradle.kts`):

```kotlin
dependencies {…
