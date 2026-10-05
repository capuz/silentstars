---
repo: "yuroyami/KitePlayer"
name: "KitePlayer"
description: "A native media playback library for Kotlin Multiplatform, Android, iOS, desktop (JVM) and web. As powerful as VLC and fine-tuned to perfection with Kotlin coroutine-first syntax. No expect/actual, no build scripts/NDK. It is 100% Kotlin core (no third-party players underneath). Can render directly into Compose multiplatform using Skiko API"
readmeQualityOk: true
url: "https://github.com/yuroyami/KitePlayer"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["audio-player", "av-sync", "coreaudio", "coroutines", "ffmpeg", "kmp", "kotlin", "kotlin-multiplatform", "kotlin-native", "macos"]
stars: 47
forks: 1
openIssues: 79
closedIssues: 445
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-08-09T14:42:18Z"
lastCommitAt: "2026-10-05T10:47:36Z"
lastReleaseAt: "2026-09-29T23:52:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 77
undervaluedScore: 41
maintainers: ["youzerseif"]
openGraphImageUrl: "https://opengraph.githubassets.com/41c0676fae85ca4aa0ccf9199804a88104909eb797fab1c1b5807be3ee88298b/yuroyami/KitePlayer"
---

A media playback library for Kotlin Multiplatform apps. Its engine is written in Kotlin and plays
  video, audio and subtitles on Android, iOS, macOS, the desktop JVM and the web, with FFmpeg already
  inside the artifacts through <a href="https://github.com/yuroyami/KiteFFmpeg">KiteFFmpeg</a>. It
  takes mpv and VLC as its models, and aims for their performance and range of features.

## What it is

**A library, not an app.**<br>
You add KitePlayer to your app with one Gradle line. Your code gets a player object, and your
screen shows the video in a native view or a Compose composable. The sample apps in this repository
only show how to use the library.

**Its own engine, not a wrapper.**<br>
KitePlayer does not put a common API over ExoPlayer, AVPlayer, mpv or VLC. The seeking, the audio
and video sync, the subtitle timing and the playback state are KitePlayer's own Kotlin code, so
every platform behaves the same way.

**FFmpeg inside.**<br>
FFmpeg reads and decodes the media, through [KiteFFmpeg](https://github.com/yuroyami/KiteFFmpeg).
Its libraries come inside the artifacts that Gradle downloads.

**Little from the platform.**<br>
Each platform supplies an audio output, a…
