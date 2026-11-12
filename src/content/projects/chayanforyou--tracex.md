---
repo: "chayanforyou/tracex"
name: "tracex"
description: "In-app network logger for Flutter and Dart. Monitor, inspect, and debug HTTP requests directly inside your app. Features include real-time network monitoring, request/response history, detailed logs, filtering, search, and easy sharing of reports for faster debugging."
readmeQualityOk: true
url: "https://github.com/chayanforyou/tracex"
homepage: "https://pub.dev/packages/tracex"
language: "Dart"
languages: ["Dart"]
languagePcts: [69]
topics: ["dart", "debugger", "flutter", "in-app", "logger", "logging", "tools", "tracer"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-09-23T03:56:30Z"
lastCommitAt: "2026-11-12T05:41:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["chayanforyou"]
openGraphImageUrl: "https://opengraph.githubassets.com/87b4c52738e8c0fc71c1e30621f76b22bed824058f77f333addedeef5e0c6d12/chayanforyou/tracex"
---

# TraceX

Advanced In-App Debugging Console for Flutter Applications with Network Monitoring

##  Screenshots

| Console               | Network Logs          | Custom FAB        |
|-----------------------|-----------------------|-------------------|
|  |  |  |

## Features

*  **In-app console**: Monitor your app inside your app
*  **Network inspector**: Track API calls and responses with beautiful formatting
*  **Custom FAB**: Use your own floating action button design
*  **Auto-stash**: FAB automatically hides to screen edge after inactivity
*  **Search & filter**: Find specific logs quickly
*  **Copy & export**: Share debug logs with your team
*  **Pretty logging**: Beautiful formatted console output
*  **Performance optimized**: Lightweight and efficient
*  **Theme support**: Adapts to your app's theme

##  Getting Started

### Add to pubspec.yaml

```yaml
dependencies:
  tracex: ^1.4.4
```

Then run `flutter pub get`.

##  Usage

### Initialize

Create a global `TraceX` instance:

```dart
final TraceX tracex = TraceX(
  // Pretty logger for beautiful console output
  logger: TraceXPrettyLogger(
    enabled: kDebugMode,
    compact: true,
    maxWidth: 100,
  ),
  
  //…
