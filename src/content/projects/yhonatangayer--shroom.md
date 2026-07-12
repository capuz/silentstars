---
repo: "Yhonatangayer/shroom"
name: "shroom"
description: "Spherical Harmonics ROOM, an open-source Python library for room acoustics simulation using Ambisonics, https://arxiv.org/abs/2603.27342, installable via {pip install pyshroom}."
readmeQualityOk: true
url: "https://github.com/Yhonatangayer/shroom"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ambisonics", "array", "audio", "hrtf", "image-source-model", "pyroomacoustics", "sphere", "spherical-geometry", "spherical-harmonics", "stft"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-23T13:11:12Z"
lastCommitAt: "2026-07-12T06:17:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 21
maintainers: ["Yhonatangayer"]
openGraphImageUrl: "https://opengraph.githubassets.com/086fa21fb27e1b698d9190e90cac1ffdb1ff9b58f911056f6ffdde515646d046/Yhonatangayer/shroom"
---

# shroom

**Spherical Harmonics Room**

A Python library for simulating room acoustics using Spherical Harmonics (Ambisonics). It provides tools for simulating room impulse responses (ARIR), microphone arrays, and binaural rendering.

## Features

*   **Room Simulation**: Image Source Method (ISM) adapted for Spherical Harmonics.
*   **Spatial Signals**: Unified handling of Time, Frequency, Space, and Spherical Harmonics (SH) domains.
*   **Processors**: Modular processing chain including:
    *   `ArrayDecoder`: Simulates spherical microphone arrays.
    *   `ASMEncoder`: Encodes microphone signals to Ambisonics (ASM).
    *   `BinauralDecoder`: Decodes Ambisonics to Binaural audio using HRTFs.
*   **Rotation**: Efficient rotation of sound fields and HRTFs using Wigner-D matrices, or via space domain grid rotation.
*   **Visualization**: 2D and 3D plotting of room geometry, sources, and receiver orientation.

## Installation

The package is published on PyPI as **`pyshroom`** (not `shroom`). There are two install flavors:

### 1. Minimal — just the core library

```bash
pip install pyshroom
```

Installs `shroom` and its runtime dependencies (numpy, scipy, matplotlib,…
