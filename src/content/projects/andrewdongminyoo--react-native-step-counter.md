---
repo: "AndrewDongminYoo/react-native-step-counter"
name: "react-native-step-counter"
description: "[리액트 네이티브 라이브러리] 사용자의 걸음 수를 계산합니다. Android는 StepCounter (or Accelerometer) 센서 API를, iOS는 CoreMotion CMPedometer 를 사용하여 걸음 수를 측정합니다."
readmeQualityOk: true
url: "https://github.com/AndrewDongminYoo/react-native-step-counter"
homepage: "https://andrewdongminyoo.github.io/react-native-step-counter/"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [28, 24]
topics: ["android", "ios", "pedometer", "react-native", "stepcounter", "typescript", "aosp", "gasp", "cmpedometer"]
stars: 44
forks: 21
openIssues: 0
closedIssues: 28
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-01-31T09:59:32Z"
lastCommitAt: "2026-08-29T10:19:47Z"
lastReleaseAt: "2023-08-20T14:52:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 55
maintainers: ["AndrewDongminYoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/da884de14bb72ba4a3feea22fe373d868d8d94d32def6a76aa2090fd77c7a00d/AndrewDongminYoo/react-native-step-counter"
fundingLinks: ["KO_FI:https://ko-fi.com/dongminyu"]
---

# React-Native Step Counter Library

한국어 사용자는 [Korean version.](https://github.com/AndrewDongminYoo/react-native-step-counter/blob/HEAD/README.kr.md)를 참조하십시오.

This library provides an interface for tracking the number of steps taken by the user in a React Native app. It uses the Android `StepCounter` sensor, an accelerometer fallback on Android devices without a step counter sensor, and Apple's `Core Motion` framework on iOS.

## Installation

```shell
npm install react-native-step-counter-newarch
```

```shell
yarn add react-native-step-counter-newarch
```

Native modules will automatically connect after React Native 0.60 version. So you don't need to link the native modules manually.

## Requirements

- React Native `>=0.71.0`
- React Native CLI apps. Expo Go is not supported because this package includes native code.

### ANDROID

Add the motion permission and sensor feature declarations if your app does not already include them.

```xml

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.stepcounter">
  <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
  <uses-permission…
