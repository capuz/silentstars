---
repo: "natsuk4ze/gal"
name: "gal"
description: "Flutter plugin to save images and videos to the photo gallery, with albums and permission handling."
readmeQualityOk: true
url: "https://github.com/natsuk4ze/gal"
homepage: "https://pub.dev/packages/gal"
language: "Dart"
languages: ["Dart", "Java"]
languagePcts: [42, 25]
topics: ["dart", "flutter", "gallery", "image", "java", "plugin", "swift", "video", "package", "dart-library"]
stars: 215
forks: 37
openIssues: 3
closedIssues: 70
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2023-05-26T08:45:05Z"
lastCommitAt: "2026-11-13T05:37:10Z"
lastReleaseAt: "2023-08-18T11:05:26Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 44
maintainers: ["natsuk4ze"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/645703075/2fdfef47-1541-4cca-b721-0df237025d6c"
fundingLinks: ["GITHUB:https://github.com/natsuk4ze"]
discussionCount: 10
---

# Gal

**Save images and videos to the photo gallery with a single line of Dart.**

Android · iOS · macOS · Windows

[**pub.dev**](https://pub.dev/packages/gal) &nbsp;·&nbsp;
[**API Reference**](https://pub.dev/documentation/gal/latest/) &nbsp;·&nbsp;
[**DeepWiki**](https://deepwiki.com/natsuk4ze/gal) &nbsp;·&nbsp;
[**Example**](https://github.com/natsuk4ze/gal/blob/main/example/lib/main.dart) &nbsp;·&nbsp;
[**Q&A**](https://github.com/natsuk4ze/gal/discussions/categories/q-a)

```dart
import 'package:gal/gal.dart';

await Gal.putImage(path);       // Save an image file
await Gal.putVideo(path);       // Save a video file
await Gal.putImageBytes(bytes); // Save image bytes

await Gal.hasPermission();      // Check the permission
await Gal.requestPermission();  // Ask for the permission
```

## 💚 Support Gal

Gal is built and maintained by volunteers.<br>
If it saves you time, a like, a star or a sponsorship keeps it going.

## ✨ Highlights

- **Simple API** — Save with `putImage`, `putVideo` or `putImageBytes`. Each is a single static call.
- **Albums** — Save to a named album. It is created if it does not exist.
- **Permissions built in** — Gal asks for access only when it needs…
