---
repo: "Codelessly/CodelesslyAPI"
name: "CodelesslyAPI"
description: "Codelessly API reference"
readmeQualityOk: true
url: "https://github.com/Codelessly/CodelesslyAPI"
homepage: "https://pub.dev/packages/codelessly_api"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["dart", "dart-library", "dartlang", "flutter", "flutter-apps", "flutter-package", "flutter-ui", "codelessly"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2023-03-21T15:18:09Z"
lastCommitAt: "2026-11-11T11:21:11Z"
lastReleaseAt: "2023-09-09T04:36:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 76
maintainers: ["claude", "rayliverified"]
openGraphImageUrl: "https://opengraph.githubassets.com/fffd27e67d53a64cedacb23147908f98a80a57fc00c90cf013f692d5383c8f40/Codelessly/CodelesslyAPI"
---

# Codelessly API

Flutter's widgets and layouts as plain, immutable data, with a JSON format. This is the model behind the
[Codelessly Editor](https://codelessly.com) and the [Codelessly SDK](https://pub.dev/packages/codelessly_sdk):
nodes, layouts, variables, conditions, actions, scripts, breakpoints and published apps.

*The model, between the Editor and the SDK.*

Pure Dart: no Flutter, no network, two small dependencies (`collection`, `meta`).

> **Looking to show Codelessly screens in a Flutter app?** Use
> [`codelessly_sdk`](https://pub.dev/packages/codelessly_sdk). It exports this package. Use `codelessly_api` on its
> own to read, build, check or transform layouts without Flutter: servers, CLIs, code generators, tests.

```dart
import 'package:codelessly_api/codelessly_api.dart';
```

## Install

```sh
dart pub add codelessly_api
```

Dart 3.12 or newer.

## A layout in 30 lines

```dart
import 'dart:convert';

import 'package:codelessly_api/codelessly_api.dart';

void main() {
  final document = LayoutDocument.fromJson({
    'schema': 2,
    'id': 'hello',
    'roots': ['home'],
    'nodes': {
      'home': {
        'type': 'canvas',
        'name': 'Home',…
