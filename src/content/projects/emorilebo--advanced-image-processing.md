---
repo: "emorilebo/advanced_image_processing"
name: "advanced_image_processing"
description: "A comprehensive Flutter plugin for advanced image processing, featuring real-time filters, object recognition, and AR capabilities."
readmeQualityOk: true
url: "https://github.com/emorilebo/advanced_image_processing"
homepage: "https://pub.dev/packages/advanced_image_processing_toolkit"
language: "Dart"
languages: ["Dart"]
languagePcts: [91]
topics: ["image", "processing", "toolkit"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-19T21:42:24Z"
lastCommitAt: "2026-11-20T11:59:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["emorilebo"]
openGraphImageUrl: "https://opengraph.githubassets.com/f19f95a3b76647c028a8f8e4b27961d4a5c980028258cd6be09ce50980cb50a6/emorilebo/advanced_image_processing"
---

# Advanced Image Processing Toolkit

Fast, private, on-device image processing for Flutter.

- **One decode, one encode.** Chain any number of steps in an `ImagePipeline`.
  Consecutive colour steps fuse into a single pass over the pixels.
- **Never blocks the UI.** Pipelines run on a background isolate on Android,
  iOS and desktop.
- **Live previews that match the export.** Presets and colour adjustments
  render on the GPU with `ColorFiltered`, using the same matrix the
  pipeline applies when you save.
- **Professional colour.** Load `.cube` LUTs straight from DaVinci Resolve,
  Premiere or Photoshop.
- **Private by default.** EXIF and GPS are stripped on export, faces and text
  can be redacted on device with ML Kit, and oversized uploads are refused
  before they can exhaust memory.
- **Correct output.** JPEG stays JPEG, PNG keeps its transparency, blur is
  alpha-aware, and photos come out upright.
