---
repo: "hgaiser/pixelforge"
name: "pixelforge"
description: "A Vulkan-based video encoding library for Rust"
readmeQualityOk: true
url: "https://github.com/hgaiser/pixelforge"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 10
forks: 11
openIssues: 4
closedIssues: 3
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2025-12-22T08:32:53Z"
lastCommitAt: "2026-09-04T08:11:55Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 62
maintainers: ["DatCaptainHorse", "hgaiser", "urwrstkn8mare"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d20542cb8584a27c4c32118618eaa48374abcede8bf31125a400cec13dcd6a5/hgaiser/pixelforge"
---

# pixelforge

A Vulkan-based video encoding and decoding library for Rust, supporting H.264,
H.265 and AV1 encode, and H.264 decode.

## Features

- **Hardware-accelerated** video encoding and decoding using Vulkan Video extensions.
- **Multiple codec support**: H.264/AVC, H.265/HEVC, AV1 encode; H.264 decode.
- **Asynchronous pipelines**: both directions submit without waiting.
  Encoding hands back an [`EncodeFuture`]; decoding delivers frames through a
  [`DecodeSource`] as the GPU finishes with them.
- **GPU color conversion**: RGB/BGR → YUV via Vulkan compute shaders (BT.709, BT.2020, sRGB→BT.2020+PQ, scRGB-linear→BT.2020+PQ).
- **HDR support**: 10-bit encoding (P010, YUV444P10), PQ transfer function, BT.2020 color space.
- **GPU-native API**: Encode directly from Vulkan images (`vk::Image`).
- **Flexible configuration**: Rate control (CBR, VBR, CQP), quality levels, GOP settings.
- **Multiple input formats**: BGRx, RGBx, BGRA, RGBA, ABGR2101010 (10-bit packed), RGBA16F (FP16).
- **Utility helpers**: [`InputImage`] for easy YUV data upload to GPU.
- **Optional DMA-BUF support**: Zero-copy image import from external processes (Linux only).

> **Note**: B-frame support is not…
