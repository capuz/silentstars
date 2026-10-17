---
repo: "muazdev26/HijriCalendar"
name: "HijriCalendar"
description: "Hijri Calendar Kotlin Multiplatform library"
readmeQualityOk: true
url: "https://github.com/muazdev26/HijriCalendar"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["android", "android-library", "glance-appwidget", "glance-widget", "glance-widgets", "kmp", "kmp-library", "koin", "kotlin", "kotlin-android"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-17T15:28:21Z"
lastCommitAt: "2026-10-17T07:59:06Z"
lastReleaseAt: "2026-10-15T13:03:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 55
maintainers: ["muazdev26"]
openGraphImageUrl: "https://opengraph.githubassets.com/df6e493b91f971be76fff94070507b3631571aae0164250f1b5bb94e0854dbe2/muazdev26/HijriCalendar"
---

# HijriCalendar

A Compose Multiplatform calendar component for displaying and interacting with Hijri (Islamic) calendar dates.

## Features

- Full month grid view with 6-week layout
- Month navigation (previous/next)
- Date selection with visual feedback
- Arabic-Indic numeral display
- RTL layout support
- Customizable theming (colors, today indicator, weekend styling)
- Configurable first day of week (default: Saturday)
- Animated month transitions
- Accessibility support (content descriptions, roles)
- Works on Android, iOS, and Desktop (JVM)

## Platform Support

| Platform | Status |
|----------|--------|
| Android  | Supported (minSdk 26) |
| iOS      | Supported (arm64, simulatorArm64) |
| Desktop  | Supported (JVM 11+) |

## Installation

The library is distributed via [JitPack](https://jitpack.io/#muazdev26/HijriCalendar).

### Gradle

Add the JitPack repository and the dependency to your module's `build.gradle.kts`:

```kotlin
repositories {
    maven("https://jitpack.io")
}

dependencies {
    implementation("com.github.muazdev26.HijriCalendar:hijri-calendar-compose:2.2.0")
}
```

### Maven

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>…
