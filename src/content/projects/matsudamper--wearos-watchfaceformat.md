---
repo: "matsudamper/WearOS-WatchFaceFormat"
name: "WearOS-WatchFaceFormat"
description: "WearOSのWatch Face.Watch Face Format対応"
readmeQualityOk: true
url: "https://github.com/matsudamper/WearOS-WatchFaceFormat"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-08-09T11:12:09Z"
lastCommitAt: "2026-11-03T10:52:33Z"
lastReleaseAt: "2024-08-12T22:39:14Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 62
maintainers: ["matsudamper", "renovate[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0987e71205f8002d4a77eeeabfe0f5cf5ecc0e06b99424f09b850f720fbfc7c6/matsudamper/WearOS-WatchFaceFormat"
---

# My Watchface

# 仕組み
DSLを通して[Watch Face Format](https://developer.android.com/training/wearables/wff)形式のXMLを出力する。  
Sassのようなもの。  

記述部分  
https://github.com/matsudamper/WearOS-WatchFaceFormat/blob/main/build-logic/src/main/kotlin/net/matsudamper/WatchFaceFormatGeneratorPlugin.kt  

# インストール方法
## Release
```shell
./gradlew assembleRelease
adb install ./app/build/outputs/apk/release/app-release.apk
adb shell am broadcast -a com.google.android.wearable.app.DEBUG_SURFACE --es operation set-watchface --es watchFaceId net.matsudamper.watchface
```

## Debug
```shell
./gradlew assembleDebug
adb install ./app/build/outputs/apk/debug/app-debug.apk
adb shell am broadcast -a com.google.android.wearable.app.DEBUG_SURFACE --es operation set-watchface --es watchFaceId net.matsudamper.watchface
```
