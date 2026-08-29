---
repo: "umbrella22/Vesper"
name: "Vesper"
description: "a native-first, multi-platform player SDK for applications that need real platform playback behavior without rebuilding every product feature from scratch on each target. Android playback runs through Media3 ExoPlayer, iOS playback runs through AVPlayer, desktop playback uses native Rust pipelines"
readmeQualityOk: true
url: "https://github.com/umbrella22/Vesper"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
topics: ["android-library", "android-ui", "flutter-plugin", "ios-sdk", "ios-swift", "video-player"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-03-30T12:09:35Z"
lastCommitAt: "2026-08-29T10:21:47Z"
lastReleaseAt: "2026-08-18T14:06:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["umbrella22"]
openGraphImageUrl: "https://opengraph.githubassets.com/218ab42ce5a130bd7140be876af4d858a8bb8ce147377cdce5fa609e27f29bd8/umbrella22/Vesper"
---

</p>

# Vesper Player SDK

</p>

Vesper is a native-first, multi-platform player SDK for applications that need
real platform playback behavior without rebuilding every product feature from
scratch on each target. Android playback runs through Media3 ExoPlayer, iOS
playback runs through AVPlayer, desktop playback uses native Rust pipelines,
and Flutter mobile apps consume the same capabilities through a federated
plugin.

The shared Rust layer keeps cross-platform semantics aligned: runtime contracts,
timeline and live-DVR state, playback resilience, ABR policy, playlist
coordination, preload and download planning, DASH bridging, and the public C ABI.
Platform host kits stay responsible for the rendering surface, lifecycle, native
media stack integration, and platform-specific capability reporting.

## Product Boundary

Vesper targets modern arm64 mobile platforms: Android API 26+ on `arm64-v8a`,
and iOS 17+ on arm64 devices and Apple Silicon Simulator. This platform floor is
a product boundary, not a compatibility backlog; older mobile OS versions,
32-bit Android, Intel Android ABIs, and Intel iOS Simulator are not planned.

The mobile production path remains Media3 on Android…
