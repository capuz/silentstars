---
repo: "Michalis-Michael/nxframe"
name: "nxframe"
description: "Linux-based broadcast contribution encoder/decoder for low-latency SDI-over-IP workflows."
readmeQualityOk: true
url: "https://github.com/Michalis-Michael/nxframe"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 20
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-30T12:24:49Z"
lastCommitAt: "2026-09-29T08:10:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 26
maintainers: ["Michalis-Michael"]
openGraphImageUrl: "https://opengraph.githubassets.com/018d112cd6d8af0ab7cbf1383522924a93f1c4deeee2e880348e6fc7fb5d7dc5/Michalis-Michael/nxframe"
---

# NxFrame

NxFrame is a Linux-based broadcast contribution encoder/decoder for low-latency SDI-over-IP workflows.

It captures SDI video/audio from Blackmagic DeckLink cards, encodes the signal, muxes it into MPEG-TS, sends it over IP using SRT, UDP, or RTP, and can receive/decode the stream back to SDI output.

NxFrame is designed for broadcast engineering, contribution links, lab testing, and controlled evaluation of SDI-over-IP workflows.

## What NxFrame does

- Captures SDI input from Blackmagic DeckLink cards
- Normalizes DeckLink v210 input to an internal 10-bit 4:2:2 video format using a custom SIMD/AVX2 conversion path 
- Encodes video using libx264 up to 10-bit 4:2:2 1080p50/60
- Keeps FFmpeg/libx265 support for experimental HEVC testing
- Encodes audio using FFmpeg/libfdk-aac, or carries PCM/S302M audio including Dolby-E passthrough, with audio carried either in separate PIDs or packed together
- Muxes audio/video into MPEG-TS
- Sends MPEG-TS over:
  - SRT
  - raw UDP
  - RTP payload type 33
- Receives SRT/UDP/RTP transport streams
- Demuxes and decodes received streams
- Outputs decoded video/audio to DeckLink SDI output
- Provides CLI example presets, protected GUI…
