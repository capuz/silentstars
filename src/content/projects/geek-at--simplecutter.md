---
repo: "geek-at/simplecutter"
name: "simplecutter"
description: "Simple Gaming clip video cutter built for the Drinking Team Austria"
readmeQualityOk: true
url: "https://github.com/geek-at/simplecutter"
homepage: "https://www.drinkingteam.at"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [68, 30]
topics: ["electron", "ffmpeg-wrapper", "ffmpeg", "windows", "video-cutter"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2017-03-11T14:19:13Z"
lastCommitAt: "2026-10-26T09:16:54Z"
lastReleaseAt: "2023-08-29T20:13:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 48
maintainers: ["geek-at"]
openGraphImageUrl: "https://opengraph.githubassets.com/c68dfb04557dc05541e420e05663c825564db15d2bb425ef1289b644a73a741d/geek-at/simplecutter"
---

# Simple cutter or DTA-Cutter

A simple ffmpeg powered video cutter for Windows.

Made for small gaming video clips.

[Usage Demo](https://pictshare.net/ovtjkb.mp4)

https://github.com/user-attachments/assets/bb0d3ec2-8665-4c2b-9019-aa424ff73cf2

## Features

- Multiple segments per clip, each with its own speed, mute and zoom region
- Hardware encoding (NVENC / AMD AMF / Intel QSV, VAAPI on Linux) with automatic detection
- Quality presets plus **Fit to size** — enter a maximum file size (e.g. 95 MB for Signal) and the bitrate is chosen to land under it
- Live estimate of the output file size while you edit
- GIF export with palette generation
- Frame-accurate navigation: `A` / `←` and `D` / `→` step one frame (hold `Shift` for one second); `I` / `O` mark start and end, `S` saves a screenshot
- Output options (quality, size limit, half resolution, 30 fps cap, hardware encoding, GIF settings) are remembered between sessions
- Render queue, screenshots, auto-update

```bash
npm install

# Run the app
npm start

# build it
npm run dist:win
```

Windows builds bundle FFmpeg (`ffmpeg/bin`, stored in git LFS; refresh with `update_ffmpeg.sh`).
Linux builds do not bundle FFmpeg and use…
