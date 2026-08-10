---
repo: "superuser404notfound/AetherEngine"
name: "AetherEngine"
description: "Media player engine for iOS, tvOS, macOS and visionOS. FFmpeg demux, VideoToolbox / dav1d / libavcodec decode (HEVC, H.264, AV1, VP9, MPEG-2, VC-1), live TV with DVR timeshift and hardware deinterlace, Dolby Atmos passthrough, HDR10 / HDR10+ / Dolby Vision / HLG, text + bitmap + teletext subtitles, plus a lean audio-only path. You ship the UI."
readmeQualityOk: true
url: "https://github.com/superuser404notfound/AetherEngine"
homepage: "https://aetherengine.superuser404.de"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["dolby-vision", "ffmpeg", "ios", "tvos", "video-player", "videotoolbox", "macos", "swift", "avfoundation", "hdr10"]
stars: 141
forks: 43
openIssues: 29
closedIssues: 179
watchers: 6
contributors: 15
recentReleases: 9
createdAt: "2026-04-12T04:13:55Z"
lastCommitAt: "2026-08-10T05:07:44Z"
lastReleaseAt: "2026-05-26T04:57:07Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 38
maintainers: ["superuser404notfound", "tschuegy", "jihongboo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1208283887/1e50894f-d0c7-49a5-a8a9-8ad0100687d5"
discussionCount: 0
---

</p>

<h1 align="center">AetherEngine</h1>

  <b>A media player engine for Apple platforms.</b><br>
  FFmpeg demuxes. VideoToolbox decodes. AVPlayer handles Dolby Atmos.<br>
  Video, live TV with DVR timeshift, or a lean audio-only path with system Now-Playing. You ship the UI.
</p>

</p>

---

## What it is

A player engine that gets the hard parts right (HDR, Dolby Vision, Dolby Atmos, container coverage, codec coverage) and exposes a single `AetherPlayerView` (UIKit / AppKit) or `AetherPlayerSurface` (SwiftUI) plus a handful of `async` methods. No `AVPlayerViewController`. No opinionated controls. No analytics. Bind the view, call `play()`, read the published properties for state.

The view is polymorphic: under the hood the engine swaps the hosted CALayer (`AVPlayerLayer` for the native AVPlayer path, `AVSampleBufferDisplayLayer` for the SW dav1d fallback path) per session without the host having to know.

You provide the transport bar. You provide the dropdowns. You provide the pretty.

## Used by

- [Sodalite](https://github.com/superuser404notfound/Sodalite): native Jellyfin client for Apple TV.
- [AetherPlayer](https://github.com/superuser404notfound/AetherPlayer): native…
