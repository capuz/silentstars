---
repo: "ultralytics/yolo-flutter-app"
name: "yolo-flutter-app"
description: "Flutter plugin for Ultralytics YOLO"
url: "https://github.com/ultralytics/yolo-flutter-app"
homepage: "https://pub.dev/packages/ultralytics_yolo"
language: "Dart"
languages: ["Dart", "Kotlin"]
languagePcts: [41, 36]
topics: ["ai", "android", "coreml", "dart", "flutter", "ios", "mobile", "object-detection", "tflite", "yolo"]
stars: 446
forks: 167
openIssues: 1
closedIssues: 235
watchers: 8
contributors: 38
recentReleases: 0
createdAt: "2024-03-12T19:29:41Z"
lastCommitAt: "2026-06-26T21:32:35Z"
lastReleaseAt: "2025-06-05T09:19:44Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 95
undervaluedScore: 40
maintainers: ["glenn-jocher", "asabri97", "UltralyticsAssistant"]
openGraphImageUrl: "https://opengraph.githubassets.com/16e90aaeaf365cf25bf03cf71a17aa2e4f0b94807d99bb587693371c4f9b634a/ultralytics/yolo-flutter-app"
fundingLinks: ["GITHUB:https://github.com/glenn-jocher", "PATREON:https://patreon.com/ultralytics", "OPEN_COLLECTIVE:https://opencollective.com/ultralytics"]
---

[English](README.md) | [简体中文](README.zh-CN.md)

# 🚀 YOLO Flutter - Ultralytics Official Plugin

Ultralytics YOLO Flutter is the official plugin for running YOLO models in Flutter apps on iOS and Android. It supports [detection](https://docs.ultralytics.com/tasks/detect), [instance segmentation](https://docs.ultralytics.com/tasks/segment), [semantic segmentation](https://docs.ultralytics.com/tasks/semantic), [classification](https://docs.ultralytics.com/tasks/classify), [pose](https://docs.ultralytics.com/tasks/pose), and [OBB](https://docs.ultralytics.com/tasks/obb) with two simple entry points:

- `YOLO` for single-image inference
- `YOLOView` for real-time camera inference

The main goal is simple integration: use an official model ID, or drop in your own exported model and let the plugin resolve task metadata for you.

  <br>
  <br>
  <br>
  &nbsp;&nbsp;
</div>

## ✨ Features

- Official Ultralytics plugin for Flutter
- One Dart API for Android and iOS
- Metadata-first model loading with official model download and caching
- Real-time camera inference and single-image inference
- Controls for thresholds, accelerator selection, and result streaming
- YOLO26 and YOLO11 model…
