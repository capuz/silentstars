---
repo: "yuroyami/KitePlayer"
name: "KitePlayer"
description: "A native media playback library for Kotlin Multiplatform, Android, iOS, desktop (JVM) and web. Kotlin coroutine-first syntax, fine-tuned to perfection and as powerful as mpv and VLC. No expect/actual, no build scripts/NDK. It is 100% Kotlin core (no third-party players underneath). Can render directly into Compose multiplatform using Skiko API"
readmeQualityOk: true
url: "https://github.com/yuroyami/KitePlayer"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["audio-player", "av-sync", "coreaudio", "coroutines", "ffmpeg", "kmp", "kotlin", "kotlin-multiplatform", "kotlin-native", "macos"]
stars: 93
forks: 2
openIssues: 113
closedIssues: 845
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2026-08-09T14:42:18Z"
lastCommitAt: "2026-11-10T14:49:39Z"
lastReleaseAt: "2026-10-09T02:50:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 36
maintainers: ["youzerseif"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3b20b940012e7c8152dfeedb366932bc88f6986f9efed946f805e1233361d2f/yuroyami/KitePlayer"
---

A native media player for Kotlin Multiplatform. Its engine is written in Kotlin and built on FFmpeg.<br>
  It plays the video and audio formats that FFmpeg supports (through KiteFFmpeg) and every common subtitle format (with <code>libass</code> for ASS and SSA).<br>
  It runs on Android, iOS, macOS, the desktop JVM and the web, with one API in <code>commonMain</code>.<br>
  It gives you native video views on Android, iOS and the desktop, and a renderer that draws the video inside Compose for Compose Multiplatform apps.<br>
  It aims to match or beat mpv and VLC in performance and features.

  without them. Its author directed and reviewed all of the work.</sub>

## Why KitePlayer

A Kotlin Multiplatform player is usually a common API over ExoPlayer on Android and AVPlayer on
Apple. Your app then has two engines that support different files and behave differently.
KitePlayer doesn't wrap any platform player. It is one engine written in Kotlin with
FFmpeg underneath, which is why an MKV file with ASS subtitles plays the same way on a phone, on a
desktop and in a browser.

Since the seeking, the audio and video sync and the subtitle timing are all Kotlin code in
`commonMain`, a…
