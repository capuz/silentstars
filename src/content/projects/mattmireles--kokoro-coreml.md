---
repo: "mattmireles/kokoro-coreml"
name: "kokoro-coreml"
description: "PyTorch → CoreML conversion pipeline for Kokoro TTS. Unlocks fast on-device text-to-speech on Apple Neural Engine. "
readmeQualityOk: true
url: "https://github.com/mattmireles/kokoro-coreml"
language: "Python"
languages: ["Python", "Swift"]
languagePcts: [65, 22]
topics: ["apple-neural-engine", "apple-silicon", "on-device-ai", "text-to-speech"]
stars: 70
forks: 22
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 24
recentReleases: 0
createdAt: "2025-07-09T11:03:04Z"
lastCommitAt: "2026-10-21T18:09:49Z"
lastReleaseAt: "2026-04-07T22:18:12Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 48
maintainers: ["mattmireles", "willemkokke", "AhmedElhadidii"]
openGraphImageUrl: "https://opengraph.githubassets.com/094caa3cc5b0751fbdd4821a72c04c250c475a36d504689c7f7a67001d97ba82/mattmireles/kokoro-coreml"
fundingLinks: ["GITHUB:https://github.com/mattmireles"]
---

# Kokoro 82M TTS - Surgically Optimized for Apple Silicon

**30 seconds of speech in 1.6 s on an M1 Mac Mini, and in 287 ms on an M2 Ultra. 1.8-2.4x faster than MLX on the same Macs.**

[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) running natively on Apple Silicon via Core ML: four model families, one Swift pipeline, zero Python at inference time. Each stage runs on the part of the chip that suits it: the Neural Engine, the GPU, or the CPU.

> **Pre-converted `.mlpackage` files:** [huggingface.co/mattmireles/kokoro-coreml](https://huggingface.co/mattmireles/kokoro-coreml)

## Why split the model?

Apple Silicon isn't one processor. It's three — **CPU, GPU, and the Neural Engine (ANE)** — each built for different work. The ANE runs fixed-shape dense math at a fraction of the GPU's power draw. The GPU handles large convolutions the ANE rejects. The CPU handles small, data-dependent logic.

Each has rules. The ANE takes no dynamic shapes and no data-dependent control flow, and it rejects Kokoro's vocoder outright: the waveform tensors are too long for it. Most Core ML ports push the whole model through one policy and let the scheduler guess. It guesses badly.

This repo…
