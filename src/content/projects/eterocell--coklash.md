---
repo: "Eterocell/CoKlash"
name: "CoKlash"
description: "A rule-based tunnel for Android. Forked from https://github.com/MetaCubeX/ClashMetaForAndroid"
readmeQualityOk: true
url: "https://github.com/Eterocell/CoKlash"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [85]
stars: 34
forks: 2
openIssues: 5
closedIssues: 5
watchers: 1
contributors: 29
recentReleases: 0
createdAt: "2024-04-09T04:02:27Z"
lastCommitAt: "2026-08-03T06:44:44Z"
lastReleaseAt: "2024-12-24T02:45:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 52
maintainers: ["renovate[bot]", "Eterocell", "clash-meta-maintainer[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/43359e4368f9701d4463862b34cddb4fbbdf7310e73fec749eada82a93532eee/Eterocell/CoKlash"
---

## Clash Meta for Android

A Graphical user interface of [Clash.Meta](https://github.com/MetaCubeX/Clash.Meta) for Android

### Feature

Feature of [Clash.Meta](https://github.com/MetaCubeX/Clash.Meta)

[<img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
     alt="Get it on F-Droid"
     height="80">](https://f-droid.org/packages/com.github.metacubex.clash.meta/)

### Requirement

- Android 5.0+ (minimum)
- Android 7.0+ (recommend)
- `armeabi-v7a` , `arm64-v8a`, `x86` or `x86_64` Architecture

### Build

1. Update submodules

   ```bash
   git submodule update --init --recursive
   ```

2. Install **OpenJDK 11**, **Android SDK**, **CMake** and **Golang**

3. Create `local.properties` in project root with

   ```properties
   sdk.dir=/path/to/android-sdk
   ```

4. (Optional) Custom app package name. Add the following configuration to `local.properties`.

   ```properties
   # config your ownn applicationId, or it will be 'com.github.metacubex.clash'
   custom.application.id=com.my.compile.clash
   # remove application id suffix, or the applicaion id will be 'com.github.metacubex.clash.alpha'
   remove.suffix=true

5. Create `signing.properties` in project root with…
