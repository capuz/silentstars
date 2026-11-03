---
repo: "superuser404notfound/AetherEngine"
name: "AetherEngine"
description: "Media player engine for iOS, tvOS, macOS and visionOS. FFmpeg demux, VideoToolbox / dav1d / libavcodec decode, live TV with DVR timeshift and hardware deinterlace, Dolby Atmos passthrough, lossless TrueHD and DTS:X height channels, HDR10 / HDR10+ / Dolby Vision / HLG, text + bitmap + teletext subtitles, and an audio-only path. You ship the UI."
readmeQualityOk: true
url: "https://github.com/superuser404notfound/AetherEngine"
homepage: "https://aetherengine.superuser404.de"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["dolby-vision", "ffmpeg", "ios", "tvos", "video-player", "videotoolbox", "macos", "swift", "avfoundation", "hdr10"]
stars: 358
forks: 116
openIssues: 93
closedIssues: 362
watchers: 4
contributors: 43
recentReleases: 0
createdAt: "2026-04-12T04:13:55Z"
lastCommitAt: "2026-11-03T19:05:39Z"
lastReleaseAt: "2026-05-26T04:57:07Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 30
maintainers: ["pkajaba", "danielebogo", "mgeorgieff"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1208283887/1e50894f-d0c7-49a5-a8a9-8ad0100687d5"
fundingLinks: ["KO_FI:https://ko-fi.com/superuser404"]
discussionCount: 2
---

FFmpeg demuxes. VideoToolbox decodes. AVPlayer handles Dolby Atmos.<br>
  Video, live TV with DVR timeshift, or a lean audio-only path with system Now-Playing. You ship the UI.

---

## What it is

A player engine that gets the hard parts right (HDR, Dolby Vision, Dolby Atmos, container coverage, codec coverage) and exposes a single `AetherPlayerView` (UIKit / AppKit) or `AetherPlayerSurface` (SwiftUI) plus a handful of `async` methods. No `AVPlayerViewController`. No opinionated controls. No analytics. Bind the view, call `play()`, read the published properties for state.

The view is polymorphic: under the hood the engine swaps the hosted CALayer (`AVPlayerLayer` for the native AVPlayer path, `AVSampleBufferDisplayLayer` for the SW dav1d fallback path) per session without the host having to know.

You provide the transport bar. You provide the dropdowns. You provide the pretty.

## Used by

- [Sodalite](https://github.com/superuser404notfound/Sodalite): native Jellyfin client for Apple TV.
- [AetherPlayer](https://github.com/superuser404notfound/AetherPlayer): native macOS media player.
- [NowSeen](https://discord.com/invite/7AFh3Hy8p4): IPTV / Manifest app for tvOS.
-…
