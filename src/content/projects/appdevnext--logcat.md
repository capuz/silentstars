---
repo: "AppDevNext/Logcat"
name: "Logcat"
description: "Show Logcat in release buildtype and Timber log when it logs to a file"
readmeQualityOk: true
url: "https://github.com/AppDevNext/Logcat"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["hacktoberfest"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 10
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-02-23T15:22:43Z"
lastCommitAt: "2026-10-12T11:16:30Z"
lastReleaseAt: "2021-07-05T07:34:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 71
maintainers: ["hannesa2", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f04a29728b7a5bde091096572da1a01ad7f575fde0ada61c1fe53758e09e574/AppDevNext/Logcat"
---

# Show Logcat in release buildtype and Timber log when it logs to a file

This library provides an easy way to show Logcat in **release** ! and Timber history, which was written to file.
Right Timber `FileLoggingTree.kt` is provided too  

## Include the library

The easiest way to add Logcat to your project is via Gradle. Just add the following lines to your `build.gradle`:

```groovy
dependencies {
    implementation "com.github.AppDevNext.Logcat:LogcatCoreLib:$latest_version"
    implementation "com.github.AppDevNext.Logcat:LogcatCoreUI:$latest_version" // UI related classes like Activity, Fragment
    implementation 'com.github.AppDevNext.Logcat:LogcatCrashlyticLib:$latest_version'
}
```

To tell Gradle where to find the library, make sure `build.gradle` also contains this:

```groovy
allprojects {
    repositories {
        maven { url "https://jitpack.io" }
    }
}
```
In `AndroidManifest.xml`
```
    <application
        android:name="info.hannes.logcat.LoggingApplication"
```
or for file logging
```
    <application
        android:name="info.hannes.logcat.FileLoggingApplication"
```

## Crashlytic integration

### Features

* Get crash reports
* Get non-fatal errors into…
