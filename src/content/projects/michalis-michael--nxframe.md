---
repo: "Michalis-Michael/nxframe"
name: "nxframe"
description: "Linux-based broadcast contribution encoder/decoder for low-latency SDI-over-IP workflows."
readmeQualityOk: true
url: "https://github.com/Michalis-Michael/nxframe"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-30T12:24:49Z"
lastCommitAt: "2026-07-13T06:37:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 32
maintainers: ["Michalis-Michael"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf705bbde58ca3922a5bc58a62e4c1ba303a990091442d0679ae035e4cb7248a/Michalis-Michael/nxframe"
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
- Provides JSON presets for sender and receiver…
