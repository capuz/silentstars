---
repo: "Codelessly/CodelesslySDK"
name: "CodelesslySDK"
description: "Codelessly Cloud UI SDK"
readmeQualityOk: true
url: "https://github.com/Codelessly/CodelesslySDK"
homepage: "https://pub.dev/packages/codelessly_sdk"
language: "Dart"
languages: ["Dart"]
languagePcts: [97]
topics: ["cloud", "cloud-ui", "codelessly", "dart", "dart-library", "dartlang", "flutter", "flutter-apps", "flutter-package", "flutter-ui"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-03-21T15:59:16Z"
lastCommitAt: "2026-10-20T08:48:58Z"
lastReleaseAt: "2023-09-09T04:57:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["rayliverified", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9fc787f2413253e3b7ce721e907d5f996745ebf8635c9fecdf403a2e959fbb2/Codelessly/CodelesslySDK"
---

# Codelessly CloudUI™ SDK

> ### Dynamic UI and real-time updates for Flutter apps

Supercharge your Flutter apps with dynamic UI and real-time updates. Build and publish UI without code!

- **Real-Time UI Updates:** Adjust your UI as often as you need, all in real-time. Adapt to trends, feedback, and
  business needs on the fly.
- **Intuitive UI Editor:** Easily create and update UI with our user-friendly Codelessly Editor.
- **Empower Non-Technical Team Members:** Enable anyone on your team to build UI without learning how to code.

## Quickstart

#### **Step 1: Import Library**

```yaml
codelessly_sdk: ^latest_version
```

#### **Step 2: Initialize the SDK**

Initialize Codelessly before calling `runApp()`.

```dart
void main() {
  WidgetsFlutterBinding.ensureInitialized();

  // Initialize SDK.
  Codelessly.instance.initialize(
    config: CodelesslyConfig(
      authToken: AUTH_TOKEN,
      isPreview: kDebugMode,
    ),
  );

  runApp(const MyApp());
}
```

The `authToken`can be found for each project under `Publish > Settings > Settings`.

#### **Step 3: Embed the CodelesslyWidget**

Easily embed any design from the Codelessly Editor into your app using the `layoutID`.…
