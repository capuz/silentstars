---
repo: "superuser404notfound/AetherEngine"
name: "AetherEngine"
description: "Media player engine for iOS, tvOS and macOS. FFmpeg demux, VideoToolbox / dav1d / libavcodec decode (HEVC, H.264, AV1, VP9, MPEG-2, VC-1), live TV with DVR timeshift, Dolby Atmos passthrough, HDR10 / HDR10+ / Dolby Vision / HLG, inline text + bitmap subtitle decode, plus a lean audio-only path with system Now-Playing. You ship the UI."
url: "https://github.com/superuser404notfound/AetherEngine"
homepage: "https://aetherengine.superuser404.de"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["dolby-vision", "ffmpeg", "ios", "tvos", "video-player", "videotoolbox", "apple", "macos", "swift", "avfoundation"]
stars: 98
forks: 27
openIssues: 11
closedIssues: 66
watchers: 6
contributors: 7
recentReleases: 10
createdAt: "2026-04-12T04:13:55Z"
lastCommitAt: "2026-07-03T12:38:46Z"
lastReleaseAt: "2026-05-26T04:57:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 40
maintainers: ["superuser404notfound", "thatcube"]
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

## What it handles

A scannable summary; the depth for each row lives in **[docs/formats.md](docs/formats.md)**.

| Area | Summary |
| --- | --- |
| Containers | MKV, MP4, WebM, MPEG-TS, AVI,…
