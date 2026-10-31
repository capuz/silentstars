---
repo: "FreewareAdvancedAudio/faac"
name: "faac"
description: "FAAC is an open-source, dependency-free AAC encoder, with FAAD as its decoder, aimed at embedded and pipeline use cases where footprint and throughput matter as much as quality."
readmeQualityOk: true
url: "https://github.com/FreewareAdvancedAudio/faac"
homepage: "https://freewareadvancedaudio.github.io"
language: "C"
languages: ["C"]
languagePcts: [90]
stars: 6
forks: 2
openIssues: 0
closedIssues: 12
watchers: 2
contributors: 17
recentReleases: 8
createdAt: "2026-08-25T00:51:06Z"
lastCommitAt: "2026-10-31T15:07:36Z"
lastReleaseAt: "2026-10-01T13:37:02Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 69
maintainers: ["nschimme", "fabiangreffrath", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/504d7890d74f6ff8d8c1fd808d7153b0714f062e95e71353368d0b8edfda7616/FreewareAdvancedAudio/faac"
discussionCount: 0
---

# <img src="frontend/faac.svg" alt="FAAC" width="48" height="48" align="top" /> Freeware Advanced Audio Coder

FAAC is an open-source, dependency-free AAC encoder, with FAAD as its decoder, aimed at embedded and pipeline use cases where footprint and throughput matter as much as quality.

### Key features:

- MPEG-4 AAC-LC, HE-AAC v1 (SBR) and HE-AAC v2 (PS) encoding and decoding
- Sample rates from 8 kHz to 96 kHz, supporting mono up to 7.1 multichannel
- VBR, ABR and CBR rate control
- Advanced encoding tools: Dynamic block-switching, PNS, and TNS
- Flexible output options: ADTS and raw AAC streams
- PCM sample-rate conversion with Fast, Good, and High presets; downsampling
  input above 48 kHz uses High

### Command-line tools:

- `faac` encodes WAV or raw PCM to AAC in ADTS or MP4/M4A; MP4 output includes
  gapless playback info
- `faad` decodes ADTS or MP4/M4A AAC to WAV or raw PCM, with optional mono or
  stereo downmixing and stdin/stdout support
- `faar` changes the sample rate of WAV or raw PCM audio, with adjustable
  quality and optional dithering when converting to integer PCM
- `faam` muxes, demuxes and tags MP4/M4A/M4B (AAC, H.264/H.265)

> **Important:** The use of…
