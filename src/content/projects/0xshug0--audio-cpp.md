---
repo: "0xShug0/audio.cpp"
name: "audio.cpp"
description: "An all-in-one, pure C++ inference engine for audio models, powered by ggml. Supports TTS, STT, VAD, voice conversion, music generation, and more, with highly optimized performance. No Python dependency."
readmeQualityOk: true
url: "https://github.com/0xShug0/audio.cpp"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 435
forks: 34
openIssues: 8
closedIssues: 12
watchers: 10
contributors: 6
recentReleases: 0
createdAt: "2026-06-23T15:40:46Z"
lastCommitAt: "2026-07-04T23:15:59Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors"]
healthScore: 86
undervaluedScore: 22
maintainers: ["0xShug0", "dkruyt", "CaptainArni"]
openGraphImageUrl: "https://opengraph.githubassets.com/524afdb6aa5f2df829b22e142b2c987f120f3fcbabeb7add0e2cc1961c63a3b9/0xShug0/audio.cpp"
discussionCount: 0
---

# audio.cpp

`audio.cpp` is a high-performance C++ audio inference framework built on top of `ggml`, designed to make modern local audio models practical, portable, and fast.

Tired of juggling a dozen Conda environments, hundreds of Python packages, and dependency conflicts just to try a few audio models? audio.cpp gives those paths a shared native runtime instead.

> [!IMPORTANT]
> **CUDA performance headline:** multiple TTS paths already run **1.8x-5.0x faster than their Python reference paths** while cutting end-to-end latency by **45%-80%**.
> **VibeVoice 1.5B:** generates a **93.9-minute podcast in 18.2 minutes** with **10 diffusion steps** and without quantization, running about **5.15x faster than real time**.

It is built for real end-to-end execution rather than one-off model demos: the same runtime powers TTS, voice cloning, voice conversion, ASR, diarization, VAD, source separation, alignment, codec-style models, and higher-level workflows through a common framework surface.

Highlights:

- **Parity.** Strong parity tooling against Python reference paths.
- **Performance.** Performance-focused execution, reusable sessions, and batch-style offline inference. **Optimized…
