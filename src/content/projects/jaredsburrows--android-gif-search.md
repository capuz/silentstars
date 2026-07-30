---
repo: "jaredsburrows/android-gif-search"
name: "android-gif-search"
description: "Gif LazyVerticalGrid MVVM using Dagger 2 + Hilt with Retrofit 2, Moshi, Kotlin Coroutines, JUnit, Compose and Robolectric tests!"
readmeQualityOk: true
url: "https://github.com/jaredsburrows/android-gif-search"
homepage: "https://play.google.com/store/apps/details?id=com.burrowsapps.gif.search"
language: "Kotlin"
languages: ["Kotlin", "HTML"]
languagePcts: [71, 29]
topics: ["espresso", "junit", "android-gif", "moshi", "kotlin-dsl", "kotlin", "kotlin-android", "robolectric", "ktlint", "dagger2"]
stars: 411
forks: 51
openIssues: 2
closedIssues: 22
watchers: 9
contributors: 4
recentReleases: 0
createdAt: "2016-06-20T04:47:57Z"
lastCommitAt: "2026-07-30T06:06:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 38
maintainers: ["renovate[bot]", "jaredsburrows", "njayawa"]
openGraphImageUrl: "https://opengraph.githubassets.com/61580dc7d9d73137a27ac551eee6097a653ec37585f706e9dec99071df17e12c/jaredsburrows/android-gif-search"
fundingLinks: ["GITHUB:https://github.com/jaredsburrows", "PATREON:https://patreon.com/jaredsburrows", "OPEN_COLLECTIVE:https://opencollective.com/jaredsburrows", "KO_FI:https://ko-fi.com/jaredsburrows", "LIBERAPAY:https://liberapay.com/jaredsburrows", "CUSTOM:https://paypal.me/jaredsburrows", "CUSTOM:https://venmo.com/jaredsburrows", "CUSTOM:https://cash.app/$jaredburrows", "CUSTOM:https://buymeacoffee.com/jaredsburrows"]
---

# Gif Search using Jetpack Compose + Kotlin

Gif LazyVerticalGrid MVVM using Dagger 2 + Hilt with Retrofit 2, Moshi, Kotlin Coroutines,
JUnit, Compose and Robolectric tests!

</p>

</p>

## Build

**Build the APK:**

```shell
gradlew assembleDebug
```

**Install the APK:**

```shell
gradlew installDebug
```

## Test

**Run [Junit](https://junit.org/junit4/) Unit Tests:**

```shell
gradlew testDebug
```

**Run [Espresso](https://developer.android.com/training/testing/ui-testing/espresso-testing.html)
Instrumentation Tests:**

```shell
gradlew connectedDebugAndroidTest
```

## Report

**Generate [Dex Method Count](https://github.com/KeepSafe/dexcount-gradle-plugin) Report:**

```shell
gradlew countDebugDexMethods
```

**Generate [License](https://github.com/jaredsburrows/gradle-license-plugin) Report:**

```shell
gradlew licenseDebugReport
```

**Generate [Lint](https://developer.android.com/tools/help/lint.html) Report:**

```shell
gradlew lintDebug
```

## Local Debug Run

```shell
gradlew dependencyUpdates
```

```shell
osv-scanner -r . && \

gradlew ktlintCheck && \
gradlew ktlintFormat && \

gradlew lintDebug && \
gradlew lintFixDebug  && \

gradlew testDebug
```

## License…
