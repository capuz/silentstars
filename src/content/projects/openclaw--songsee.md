---
repo: "openclaw/songsee"
name: "songsee"
description: "🌊 FFT so pretty, your ears will be jealous. See your sound—spectrograms, mel, chroma, and more."
readmeQualityOk: true
url: "https://github.com/openclaw/songsee"
homepage: "http://songsee.sh/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [67, 33]
topics: ["agents", "music", "visualization"]
stars: 82
forks: 9
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 51
recentReleases: 0
createdAt: "2026-01-02T10:54:18Z"
lastCommitAt: "2026-08-27T14:25:41Z"
lastReleaseAt: "2026-05-10T04:50:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 22
maintainers: ["steipete", "vincentkoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a69115a5f250e0b41a8dd9c8b46f0baa9a3611e1f4b07d0404bc4b8c7d9a841a/openclaw/songsee"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# 🌊 songsee — FFT so pretty, your ears will be jealous.

## Features

- **9 visualization modes**: spectrogram, mel, chroma, hpss, selfsim, loudness, tempogram, mfcc, flux
- **6 color palettes**: classic, magma, inferno, viridis, gray, claw
- **Auto-contrast**: per-panel percentile normalization for readable heatmaps
- **Combine modes**: stack multiple visualizations in one grid image
- **Universal input**: WAV, MP3, or anything ffmpeg can handle
- **Fast**: native Go, no Python dependencies
- **Flexible output**: PNG or JPEG, customizable dimensions

## Install

```bash
brew install steipete/tap/songsee
```

```bash
go install github.com/steipete/songsee/cmd/songsee@latest
```

Docker:

```bash
docker build -t songsee .
docker run --rm -v "$PWD:/input:ro" -v "$PWD/out:/output" songsee /input/track.mp3 --output /output/track.png
```

The image includes `ffmpeg`, so batch and server runs do not depend on host audio tooling.

## Quick Start

```bash
# Basic spectrogram
songsee track.mp3

# Mel spectrogram with magma palette
songsee track.mp3 --viz mel --style magma

# All 9 modes combined
songsee track.mp3 --viz spectrogram,mel,chroma,hpss,selfsim,loudness,tempogram,mfcc,flux

#…
