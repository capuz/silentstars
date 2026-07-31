---
repo: "suprsend/suprsend-android-sdk"
name: "suprsend-android-sdk"
description: "Suprsend SDK for native android applications"
readmeQualityOk: true
url: "https://github.com/suprsend/suprsend-android-sdk"
homepage: "https://suprsend.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "notifications", "suprsend"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-12-22T13:06:35Z"
lastCommitAt: "2026-07-31T06:29:23Z"
lastReleaseAt: "2022-09-04T14:29:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 52
maintainers: ["ssniks", "sivaram000"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9a3930edff1824fb6af7b60bd81c2d8ee420b533a8d598e6d7c1776b552e540/suprsend/suprsend-android-sdk"
---

# suprsend-android-sdk

## Compatibility

This SDK is compatible with:

- **Android SDK**: 
  - Minimum SDK: 19 (Android 4.4 KitKat)
  - Target SDK: 33 (Android 13)
  - Compile SDK: 33
- **JDK / JVM**: 
  - JDK 1.8 or higher (for building)
  - JVM target 1.8
  - The library is compiled with JVM target 1.8
- **Kotlin**: 
  - Kotlin 1.3.72 (used in SDK compilation)
  - Compatible with Kotlin 1.3.72 and higher versions

**Minimum Requirements:**
- Android SDK 19 or higher
- Kotlin 1.3.72 or higher
- JDK 1.8 or higher (for building)
- JVM target 1.8

#Release Notes

```
2.0.0
- Feature: JWT support on 2.0.0

1.2.8
- Added bundle_id in push events  

1.2.6
- Anr fix in init 

1.2.5
- Performance improvements
  - ANR fixes on slower devices

1.0.3
- User Preferences

1.0.2
- Notification Channel Sound Support

1.0.1
- Logging Support

0.1.10
- Compile with API 33
- Xiaomi sdk updated from 4.8.3 to 5.1.1
- Push Notification permission implemented
- remove push token on reset call
- Unsubscribe flag in reset

Developer Change
- Developers will have to add xiaomi sdk aar manually to the project
- Update proguard rules of app

0.1.9
- Set Preferred Language
- Tracking notification if…
