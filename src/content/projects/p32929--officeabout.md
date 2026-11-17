---
repo: "p32929/OfficeAbout"
name: "OfficeAbout"
description: "JSON-driven About-us screen library for Android team apps — logo, social links and member list (see MaterialOfficeAbout for V2)"
readmeQualityOk: true
url: "https://github.com/p32929/OfficeAbout"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["about-us", "android", "android-library", "about-screen", "android-ui", "company-profile", "java", "jitpack", "json", "team-page"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-07-23T16:04:42Z"
lastCommitAt: "2026-11-17T14:37:25Z"
lastReleaseAt: "2019-09-24T07:58:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 78
undervaluedScore: 46
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/76312f538f7341522ace81d70cbe7f1028f58b8b8e4f7b37085780db761de1f7/p32929/OfficeAbout"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# OfficeAbout

A ready-made "About us" screen for Android apps made by a team. It shows your company name, logo, links and a card for every team member, all filled from one JSON file. You can host the JSON online and change the team without shipping an app update.

## Features

1. **Team cards:** photo (or initials when there is no photo), name, role and a Contact button.
2. **Company links** as chips: Google Play, Facebook page, community group, YouTube, GitHub and website. Links you leave empty are hidden.
3. **JSON from a URL or a string:** load it from the web, or from an asset in your app.
4. **Material 3, light and dark:** it follows the phone's dark mode, and you can give it your own colours.
5. **Loading and error states** with a Try again button.
6. **Small:** written in Kotlin with no image or JSON libraries. Works on Android 5.0 (API 21) and newer.

## Screenshots

## Install

1. Add JitPack to your repositories (in `settings.gradle.kts`):

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
dependencies {…
