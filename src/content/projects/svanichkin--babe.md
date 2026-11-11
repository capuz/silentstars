---
repo: "svanichkin/babe"
name: "babe"
description: "BABE (Bi-Level Adaptive Block Encoding) is a dual-tone block codec for images."
readmeQualityOk: true
url: "https://github.com/svanichkin/babe"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 25
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-11-17T22:41:55Z"
lastCommitAt: "2026-11-11T19:44:22Z"
lastReleaseAt: "2026-11-11T06:09:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["svanichkin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1098598003/9f3c6352-0694-4886-9bef-d71f1167a36e"
---

# Babe — Bi-Level Adaptive Block Encoding

**Babe** is an experimental dual‑tone block-based image codec designed for extremely lightweight compression with visually smooth output.
The encoder uses byte-symbol range coding with local frequency tables, parallel processing and reusable buffers. Qualities 0–99 are lossy; quality 100 preserves opaque 8-bit RGB pixels exactly.

## Features

- Two‑tone block encoding with adaptive subdivision
- Quality-dependent quantization of YCbCr block levels
- Delta-coded block levels
- Byte-symbol range coding with parallel stream compression and decompression
- Lossy qualities 0–99 and lossless 8-bit RGB at quality 100
- Minimal API: `Encode(image, quality, bw)` and `Decode(data, postfilter)`

## How It Works

At a high level, Babe is a block-based codec with a dual-tone model per block and three independent color streams.

1. **Color space and input**
   - At qualities 0–99 the source image is converted to a YUV-like space. At quality 100, the channels are instead `G`, `B-G`, and `R-G`, using reversible byte arithmetic.
   - Luma and chroma are processed with different sensitivity so that most detail is preserved in brightness while color is…
