---
repo: "Xlythe/ClockView"
name: "ClockView"
description: "An Android View that displays a clock"
readmeQualityOk: true
url: "https://github.com/Xlythe/ClockView"
language: "Java"
languages: ["Java"]
languagePcts: [76]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-10-09T08:55:44Z"
lastCommitAt: "2026-09-19T02:48:13Z"
lastReleaseAt: "2023-01-02T21:38:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 58
undervaluedScore: 43
maintainers: ["Xlythe"]
openGraphImageUrl: "https://opengraph.githubassets.com/0630688fc8a3b44f5e64c64052d1c7f601934418939d211dc301f53f4c999d3a/Xlythe/ClockView"
---

Clock View
====================

A View that displays a clock.
Supports WearOS watchfaces and widgets.

Where to Download
-----------------
```groovy
dependencies {
  implementation 'com.xlythe:clock-view:3.0.0'
}
```

Permissions
-----------------
WearOS apps require the following permissions in AndroidManifest.xml:
```xml
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="com.google.android.permission.PROVIDE_BACKGROUND" />
<uses-permission android:name="com.google.android.wearable.permission.RECEIVE_COMPLICATION_DATA" />
<uses-feature android:name="android.hardware.type.watch" android:required="false" />
```

Widgets targeting Android 14 (API level 34) or higher should include the exact alarm permission:
```xml
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
```

Clock
-----------------
`Clock` is a Composable for displaying time.

`Clock` includes optional parameters for drawable resources (`clockFaceRes`, `hourHandRes`, `minuteHandRes`, `secondHandRes`) and digital text styling (`digitalTextColor`, `digitalTextSizeSp`), along with attributes `clockStyle` [analog, digital], `showSeconds`,…
