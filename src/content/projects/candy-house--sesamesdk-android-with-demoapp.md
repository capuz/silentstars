---
repo: "CANDY-HOUSE/SesameSDK_Android_with_DemoApp"
name: "SesameSDK_Android_with_DemoApp"
description: "SesameSDK3.0 is a Bluetooth/AIoT library for iOS/Android/Embedded. It is open source, easy to use, powerful, and permanently free. The official Sesame app uses the same SesameSDK, and the official Sesame app itself is also provided as an open-source demo app (only AWS keys differ). By using SesameSDK, you can incorporate all the features that the Sesame app has into your company's app!"
originalDescription: "SesameSDK3.0は、iOS/Android/Embedded向けのBluetooth/AIoTライブラリです。オープンソースで、使いやすく、パワフル、永続的に無料です。公式セサミアプリも同じSesameSDKを使用しており、公式セサミアプリ自体もオープンソースのデモアプリとして提供されています(AWSキーのみ異なる)。SesameSDKをご利用頂く事で、貴社アプリにもセサミアプリが持つ全ての機能を組み込む事が可能！"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/CANDY-HOUSE/SesameSDK_Android_with_DemoApp"
homepage: "https://jp.candyhouse.co"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [92]
stars: 38
forks: 15
openIssues: 18
closedIssues: 21
watchers: 4
contributors: 5
recentReleases: 10
createdAt: "2020-07-19T10:40:09Z"
lastCommitAt: "2026-09-28T10:06:11Z"
lastReleaseAt: "2026-08-20T03:40:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 88
undervaluedScore: 63
maintainers: ["actions-user", "frey-shen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/280844064/a7fa4500-ca07-11ea-8ff1-7c7bde999398"
discussionCount: 3
---

# SesameOS3 Android

Japanese | [Simplified Chinese](https://github.com/CANDY-HOUSE/SesameSDK_Android_with_DemoApp/blob/HEAD/README_zh-CN.md) | [English](https://github.com/CANDY-HOUSE/SesameSDK_Android_with_DemoApp/blob/HEAD/README_en.md)

An open-source project containing CANDY HOUSE's Android app and Sesame SDK. Currently primarily centered on `co.candyhouse.sesame.ble.os3`, providing BLE connection, registration, operation, status synchronization, and firmware updates for Sesame OS3 devices.

- [CANDY HOUSE Official Website](https://jp.candyhouse.co/)
- [Google Play](https://play.google.com/store/apps/details?id=co.candyhouse.sesame2)
- [GitHub Releases](https://github.com/CANDY-HOUSE/SesameSDK_Android_with_DemoApp/releases)

## SDK Implementation

### System Requirements

- Android Studio
- JDK 17
- Android SDK 36
- minSdk 24

### 1. Add Dependencies

When using source code within the same project:

```groovy
dependencies {
    implementation project(':sesame-sdk')
}
```

When using JitPack, add the repository to `settings.gradle`.

```groovy
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        maven { url 'https://jitpack.io' }…
