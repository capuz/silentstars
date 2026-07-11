---
repo: "C-W-D-Harshit/ytdimmer"
name: "ytdimmer"
description: "YTDimmer is a Chrome extension that automatically detects bright content in videos and dims them in real-time to prevent eye strain, especially when watching in dark environments."
readmeQualityOk: true
url: "https://github.com/C-W-D-Harshit/ytdimmer"
homepage: "https://ytdimmer.com"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [73, 27]
topics: ["video", "wxt", "youtube"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-16T15:29:52Z"
lastCommitAt: "2026-07-11T05:58:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 22
maintainers: ["C-W-D-Harshit"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9b905adac9cb3563a657ac72fd1929a96ca5fee36c3aa5229b4f9e743cc619a/C-W-D-Harshit/ytdimmer"
---

# YT Dimmer

<details>
<summary>See protection in action</summary>

</details>

YT Dimmer is a privacy-first browser extension that softens sudden flashes and
sustained bright video scenes. It is designed for more comfortable late-night
viewing on YouTube, Twitch, Vimeo, and other sites that use HTML video.

> YT Dimmer is a viewing-comfort tool, not a medical device or a substitute for
> medical guidance, platform accessibility controls, or photosensitivity-safe
> content.

## What version 2 adds

- Temporal flash detection using changes between recent frames
- Bright-region and peak-luminance analysis, not only average brightness
- Fast dimming with gradual recovery and hysteresis
- Efficient video-frame scheduling with `requestVideoFrameCallback`
- Dominant-video selection for pages containing several players
- Gentle, Balanced, and Maximum protection profiles
- Per-site pause controls and a global keyboard shortcut
- Optional night-time protection boost that preserves manual settings
- Live scene-luminance status and local daily activation count
- A visual comfort calibration flow
- Import, export, and reset controls

All frame analysis happens in the current browser tab.…
