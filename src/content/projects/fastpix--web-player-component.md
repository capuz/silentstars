---
repo: "FastPix/web-player-component"
name: "web-player-component"
description: "FastPix Player SDK is a customizable video player for on-demand and live streaming"
readmeQualityOk: true
url: "https://github.com/FastPix/web-player-component"
homepage: "https://www.npmjs.com/package/@fastpix/fp-player"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["adaptive-streaming", "hls-video-player", "html5-video-player", "m3u8-player", "customizable-video-player", "fastpix-player", "live-streaming-player", "low-latency-streaming", "video-playback-sdk", "vod-player"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-12-08T11:39:40Z"
lastCommitAt: "2026-10-29T10:36:37Z"
lastReleaseAt: "2025-10-17T06:43:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 63
maintainers: ["FastPix-dev", "Sravani289"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c56ce9253c5aeb3292a4d098d5debafd70dd7ec873e7c719d356a0694fbb854/FastPix/web-player-component"
---

# Introduction:

This SDK simplifies HLS video playback by offering a wide range of customization options for an enhanced viewing experience. It streamlines streaming setup by utilizing playback IDs that have reached the "ready" status to generate stream URLs. These playback IDs enable seamless integration and video playback within the FastPix-player, making the entire streaming process efficient and user-friendly.

# Key Features:

- ## Playback Control:

  - The `playback-id` allows for easy video playback by linking directly to the media file. Playback is available as soon as the media status is "ready."
  
  - `auto-play`: Automatically starts playback once the video is loaded, providing a seamless user experience.

  - `loop`: Allows the video to repeat automatically after it finishes, perfect for continuous viewing scenarios.
 
  - `muted`: Starts the video without sound; useful for autoplay compliance and shorts/reel-style viewing.

  - `autoplay-shorts`: Tuned autoplay behavior for vertical shorts; starts playback quickly when the short is in view, often used with `muted` for best browser compatibility.

  - **Note** : Some browsers restrict `auto-play` functionality,…
