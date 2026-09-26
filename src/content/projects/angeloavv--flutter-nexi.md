---
repo: "AngeloAvv/flutter_nexi"
name: "flutter_nexi"
description: "Unofficial Flutter plugin for integrating Nexi/XPay payments on Android and iOS."
readmeQualityOk: true
url: "https://github.com/AngeloAvv/flutter_nexi"
language: "Swift"
languages: ["Swift", "Kotlin", "Dart"]
languagePcts: [33, 32, 30]
topics: ["android", "flutter", "ios", "nexi", "payments"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-20T20:47:00Z"
lastCommitAt: "2026-09-26T08:46:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 68
undervaluedScore: 36
maintainers: ["renovate[bot]", "AngeloAvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/d57c32f64a22c47f983238d85ef1d37dc2718022f59aa17c047dac7a2494a522/AngeloAvv/flutter_nexi"
fundingLinks: ["GITHUB:https://github.com/AngeloAvv"]
---

# flutter_nexi

> ⚠️ **Unofficial Flutter plugin** for integrating Nexi/XPay payments on Android and iOS.

## Overview

`flutter_nexi` is a cross-platform plugin that allows you to integrate Nexi's [XPay SDK](https://developer.nexi.it/) into your Flutter apps. It provides a simple interface to initiate and handle payments on both Android and iOS using the official native libraries under the hood.

> **Note:** This is not an official Nexi package. Use it at your own discretion and verify compliance with Nexi's terms and security requirements.

---

## Features

- ✅ Payment processing via Nexi XPay
- 📱 Native integration on Android and iOS
- 🔁 Callback-based payment result handling
- 🧪 Test and production environment support

---

## Supported Platforms

- ✅ Android (API 21+)
- ✅ iOS (15.6+)

---

## Installation

Add the plugin to your `pubspec.yaml`:

```yaml
dependencies:
  flutter_nexi: ^1.0.0
```

## How to Make a Payment

You can trigger a payment using the `FlutterNexi` class. Here's a minimal example of how to initiate a payment when a button is pressed:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_nexi/flutter_nexi.dart';

class MyApp extends…
