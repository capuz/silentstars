---
repo: "Bizjak-Tech-OU/carbide"
name: "carbide"
description: "Port of the IBM Carbon Design System to Flutter"
readmeQualityOk: true
url: "https://github.com/Bizjak-Tech-OU/carbide"
homepage: "https://bizjak-tech-ou.github.io/carbide/"
language: "Dart"
languages: ["Dart"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 14
closedIssues: 125
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-06-09T06:09:59Z"
lastCommitAt: "2026-07-05T06:33:21Z"
lastReleaseAt: "2026-07-05T05:26:56Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 65
maintainers: ["sunderee", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5466f56cd51c409f8acf6040129a771c33557d2e56cf9a03d0884413cabc75fd/Bizjak-Tech-OU/carbide"
---

# Carbide

**An unofficial Flutter port of the IBM Carbon Design System.**

Carbide brings the [IBM Carbon Design System][carbon] to Flutter, built
**strictly on Flutter's base widgets** — no Material, no Cupertino. Every design
token, theme, and component is implemented from `package:flutter/widgets.dart`,
so the result follows Carbon's specification rather than Material's.

[**▶ Explore the live gallery**](https://bizjak-tech-ou.github.io/carbide/) —
every component, every theme, with live controls and copyable code.

## Install

```sh
flutter pub add carbide
```

Carbide bundles the IBM Plex fonts, so no extra font setup is required.

## Quick start

Carbide has no app-level widget of its own: drop a `CarbonTheme` above your
widget tree and build with `Carbon*` components. Components read the active
theme's tokens through `CarbonTheme.of(context)`.

```dart
import 'package:carbide/carbide.dart';
import 'package:flutter/widgets.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return CarbonTheme(
      data: CarbonThemeData.white,
      child: WidgetsApp(…
