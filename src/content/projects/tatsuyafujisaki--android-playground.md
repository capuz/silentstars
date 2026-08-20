---
repo: "tatsuyafujisaki/android-playground"
name: "android-playground"
description: "Personal playground for Android"
readmeQualityOk: true
url: "https://github.com/tatsuyafujisaki/android-playground"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "kotlin", "playground"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-01-05T02:37:52Z"
lastCommitAt: "2026-08-20T04:08:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 62
maintainers: ["tatsuyafujisaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/22e13c5d484d3b02eb740cabe4e1af3575cd072f1775e0dff40b366f8258c52a/tatsuyafujisaki/android-playground"
---

# How to show a dependency tree

```shell
./gradlew [module:]dependencies
```

# How to build an Android app

```shell
./gradlew assemble[buildVariant]
```

# How to install an Android app

```shell
./gradlew install[buildVariant]
```

# Testing

## How to run a local unit test

```shell
./gradlew [module:]test[buildVariant]UnitTest
```

## How to run an instrumented test

```shell
./gradlew [module:]connected[buildVariant]AndroidTest
```

# Meaning of `task clean` in project-level `build.gradle`

The following custom task in the project-level `build.gradle` is to delete the project-level `build`
directory when clicking the menu bar > `Build` > `Clean Project`.

```gradle
task clean(type: Delete) {
    delete rootProject.buildDir
}
```

# String

# How to encode HTML entities

```kotlin
val encoded: String = "<>&'\"".htmlEncode() // &lt;&gt;&amp;&#39;&quot;
```

# How to decode HTML entities

```kotlin
val decoded: String = String =
    Html.fromHtml("&lt;&gt;&amp;&#39;&quot;", Html.FROM_HTML_MODE_COMPACT).toString() // <>&'"
```

[String.htmlEncode](https://developer.android.com/reference/kotlin/androidx/core/text/package-summary#htmlencode)
is a part of the Core KTX library and…
