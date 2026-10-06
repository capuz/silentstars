---
repo: "Attacktive/Wallhavend-android"
name: "Wallhavend-android"
description: "Android app that automatically rotates wallpapers from Wallhaven."
readmeQualityOk: true
url: "https://github.com/Attacktive/Wallhavend-android"
homepage: "https://play.google.com/store/apps/details?id=xyz.attacktive.wallhavend"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["android", "jetpack-compose", "kotlin", "wallpaper-switcher"]
stars: 28
forks: 4
openIssues: 3
closedIssues: 44
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-05-17T13:19:52Z"
lastCommitAt: "2026-10-06T10:43:26Z"
lastReleaseAt: "2026-05-26T03:55:37Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 45
maintainers: ["Attacktive", "dependabot[bot]", "attacktive-gremlin[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/03ea1d47d6ca5d4af6f538106449c8c2b7804f0d727416792e0dc6bb3900aac4/Attacktive/Wallhavend-android"
fundingLinks: ["KO_FI:https://ko-fi.com/attacktive"]
---

# Wallhavend

Android app that automatically rotates wallpapers from [Wallhaven](https://wallhaven.cc).

Supports filtering by category, purity, and aspect ratio. Runs as a foreground service on a configurable schedule (1 min – 24 hr). Requires an API key for NSFW content only.

**Min SDK:** Android 8.0 (API 26)

## Sister project

[Weatherd](https://github.com/Attacktive/weatherd) paints a live, procedurally animated weather scene as your wallpaper — same bones, opposite art department.
[Get it on Google Play](https://play.google.com/store/apps/details?id=xyz.attacktive.weatherd).

## Building from source

Requires JDK 17 and the Android SDK ([Android Studio](https://developer.android.com/studio) bundles both).

```sh
git clone https://github.com/Attacktive/Wallhavend-android.git
cd Wallhavend-android
./gradlew assembleDebug
```

Debug builds need no secrets. The Wallhaven API key is entered in the app at runtime (for NSFW content only), and `release.keystore` with `KEYSTORE_PASSWORD` are needed only for release signing.

Run the unit tests with `./gradlew test`.

## Contributing

The codebase follows a formatting style that differs from the IDE defaults — see…
