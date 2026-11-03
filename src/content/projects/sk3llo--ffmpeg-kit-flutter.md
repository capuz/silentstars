---
repo: "sk3llo/ffmpeg_kit_flutter"
name: "ffmpeg_kit_flutter"
description: "Fork of the original FFmpeg Kit library to work with Android V2 bindings and Flutter 3+"
readmeQualityOk: true
url: "https://github.com/sk3llo/ffmpeg_kit_flutter"
language: "C"
languages: ["C", "C++"]
languagePcts: [52, 22]
topics: ["android", "audio-processing", "ffmpeg", "ffmpeg-kit", "flutter", "ios", "macos", "video-processing"]
stars: 185
forks: 124
openIssues: 8
closedIssues: 150
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2025-04-19T15:05:54Z"
lastCommitAt: "2026-11-03T10:53:07Z"
lastReleaseAt: "2025-10-21T18:02:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 90
undervaluedScore: 33
maintainers: ["sk3llo", "Nicoeevee"]
openGraphImageUrl: "https://opengraph.githubassets.com/f78e0d91148d13fa97c94e02651beda9ad504ca3a59351ccaa85005ee0186af5/sk3llo/ffmpeg_kit_flutter"
---

# FFmpegKit for Flutter: Full GPL

Run FFmpeg and FFprobe commands from Dart on Android, iOS, macOS, Windows and Linux.

This is a maintained fork of [FFmpegKit](https://github.com/arthenica/ffmpeg-kit/tree/main/flutter/flutter), which is no longer developed upstream, updated for the Android V2 embedding and current Flutter releases. `ffmpeg_kit_flutter_new` is the **Full GPL** variant: every supported library, including the GPL codecs. See [Choosing a package](#choosing-a-package) for the alternatives.

## Features

- FFmpeg 8.1.2 and FFprobe, with per-session logs, statistics and completion callbacks.
- One Dart API for Android, iOS, macOS, Windows (x86_64) and Linux (x86_64).
- Prebuilt native libraries for every platform, so nothing is compiled during your build.
- Hardware-accelerated encoding and decoding through VideoToolbox on iOS and macOS.
- Android Storage Access Framework (SAF) URIs can be used directly as inputs and outputs.
- iOS and macOS integrate through Swift Package Manager (Flutter 3.24 or later) or CocoaPods, using checksum-pinned XCFrameworks.

## Installation

```yaml
dependencies:
  ffmpeg_kit_flutter_new: ^4.6.3
```

```dart
import…
