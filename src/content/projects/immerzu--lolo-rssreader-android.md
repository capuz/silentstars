---
repo: "immerzu/lolo-rssreader-android"
name: "lolo-rssreader-android"
description: "Android source code for the RSS Reader app."
readmeQualityOk: true
url: "https://github.com/immerzu/lolo-rssreader-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [91]
stars: 12
forks: 1
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-26T16:17:40Z"
lastCommitAt: "2026-10-11T10:16:09Z"
lastReleaseAt: "2026-05-04T14:23:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/189d07b794b776614b4f9abadc8fbcdf9bb1c68fbe60e401f3c8caf3cca8748f/immerzu/lolo-rssreader-android"
---

English | [Deutsch](https://github.com/immerzu/lolo-rssreader-android/blob/HEAD/README_DE.md)

# RSS Reader

A simple Android project in Kotlin + Jetpack Compose.

## License
This project is licensed under the Apache License 2.0.
See [LICENSE](https://github.com/immerzu/lolo-rssreader-android/blob/HEAD/LICENSE) for details.

## Features
- Feed overview
- Add feed
- Load RSS/Atom
- Parser
- Room database
- Article list
- Reader view with text and images below
- Simple settings

## Getting Started
Open with Android Studio and use this repository root as the project — the Gradle project *is* the repository
(in the maintainer's local working copy the same folder is named `rss_reader_full_project`).
Alternatively, `start-android-studio.ps1` launches Android Studio already configured with the local JDK/SDK paths.

## Build
Via Android Studio through `Build > Build APK(s)` or locally via `gradlew.bat assembleDebug`.
Before a release candidate, additionally run `gradlew.bat exportReleaseApk` (builds, signs and copies the APK
into `../Ausgabe_APK/`) and use the checklist in…
