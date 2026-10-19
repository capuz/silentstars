---
repo: "LostBeard/SpawnDev.ILGPU.ML"
name: "SpawnDev.ILGPU.ML"
description: "Hardware-agnostic machine learning infrastructure for .NET. Implements high-performance neural network layers in C# that are transpiled to run on WebGPU, CUDA, OpenCL, WebGL, CPU, and Wasm via SpawnDev.ILGPU. Optimized for Blazor WebAssembly and native GPU execution."
readmeQualityOk: true
url: "https://github.com/LostBeard/SpawnDev.ILGPU.ML"
homepage: "https://lostbeard.github.io/SpawnDev.ILGPU.ML/"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["blazor", "blazor-webassembly", "cuda", "machine-learning", "opencl", "webgl", "webgpu", "gguf", "onnx", "pytorch"]
stars: 21
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-03-17T20:48:57Z"
lastCommitAt: "2026-10-19T09:14:54Z"
lastReleaseAt: "2026-10-17T22:56:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 41
maintainers: ["LostBeard"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd577a42fe125b1621ad014c34d298db533ee3814287700fa254fd9fc852f85c/LostBeard/SpawnDev.ILGPU.ML"
---

# SpawnDev.ILGPU.ML

[**Live Demo**](https://lostbeard.github.io/SpawnDev.ILGPU.ML/) — interactive GPU demos: **text & image to 3D**, classification, style transfer, depth estimation, object detection, pose estimation, text generation, background removal, zero-shot CLIP, and more — running on your GPU in your browser, no server. ([Which are verified vs WIP →](https://github.com/LostBeard/SpawnDev.ILGPU.ML/blob/HEAD/Docs/DEMO_AND_MODEL_STATUS.md))

> **New in 5.3.18: [FLUX.2 klein 4B](https://lostbeard.github.io/SpawnDev.ILGPU.ML/text-to-3d) draws the picture for text to 3D.** Black Forest Labs' step-distilled 4B text-to-image model (Apache-2.0) re-implemented on ILGPU (Qwen3-4B text encoder, 3.9B flow transformer, VAE; 4-bit weights, 4.4 GB, 2.6 GB on the GPU at a time) replaces SD Turbo's 2023 look: full-body characters with real hands and armour. New in the demo: draw 4 or 8 pictures of one prompt (the extra ones cost ~7 s each) and pick the one to build in 3D. Every stage gated against diffusers. [How it works →](https://github.com/LostBeard/SpawnDev.ILGPU.ML/blob/HEAD/Docs/flux2.md)
>
> **5.3.17 (fix):** drawing with SD Turbo no longer loses the WebGPU device on stable Chrome…
