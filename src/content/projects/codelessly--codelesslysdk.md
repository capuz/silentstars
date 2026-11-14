---
repo: "Codelessly/CodelesslySDK"
name: "CodelesslySDK"
description: "Codelessly Cloud UI SDK"
readmeQualityOk: true
url: "https://github.com/Codelessly/CodelesslySDK"
homepage: "https://pub.dev/packages/codelessly_sdk"
language: "Dart"
languages: ["Dart"]
languagePcts: [96]
topics: ["cloud", "cloud-ui", "codelessly", "dart", "dart-library", "dartlang", "flutter", "flutter-apps", "flutter-package", "flutter-ui"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2023-03-21T15:59:16Z"
lastCommitAt: "2026-11-14T10:47:08Z"
lastReleaseAt: "2023-09-09T04:57:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 68
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1027c9a6bb43f4032f01e434f514b251e9ed331b9f3227779ffb67fa52b540c9/Codelessly/CodelesslySDK"
---

# Codelessly SDK

Server-driven UI for Flutter. Design screens in the [Codelessly Editor](https://codelessly.com), publish, and show
them in your app with one widget. The SDK renders a published layout natively, straight into Flutter render objects,
and runs it: variables, conditions, actions, navigation, data, APIs and scripts. A new publish reaches running apps
without an app release.

*One widget, three ways to load a project.*

```dart
final codelessly = Codelessly(config: const CodelesslyConfig(slug: 'my-project'));

runApp(MaterialApp(home: CodelesslyWidget(codelessly: codelessly)));
```

- [Install](#install)
- [Quickstart](#quickstart): by [slug](#1-a-published-slug-http), by [project token](#2-a-project-token-firebase-live-updates), or [offline](#3-a-bundle-shipped-with-the-app-offline)
- [`CodelesslyWidget` essentials](#codelesslywidget-essentials)
- [Developer guide](#developer-guide)

## Install

```sh
flutter pub add codelessly_sdk
```

Requires Dart 3.12 and Flutter 3.35 or newer. Runs on Android, iOS, web, macOS, Windows and Linux.

```dart
import 'package:codelessly_sdk/codelessly_sdk.dart';
```

## Quickstart

A `Codelessly` is one published project. A…
