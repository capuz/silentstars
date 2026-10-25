---
repo: "LostBeard/SpawnDev.ILGPU.ML"
name: "SpawnDev.ILGPU.ML"
description: "Hardware-agnostic machine learning infrastructure for .NET. Implements high-performance neural network layers in C# that are transpiled to run on WebGPU, CUDA, OpenCL, WebGL, CPU, and Wasm via SpawnDev.ILGPU. Optimized for Blazor WebAssembly and native GPU execution."
readmeQualityOk: true
url: "https://github.com/LostBeard/SpawnDev.ILGPU.ML"
homepage: "https://lostbeard.github.io/SpawnDev.ILGPU.ML/"
language: "C#"
languages: ["C#"]
languagePcts: [88]
topics: ["blazor", "blazor-webassembly", "cuda", "machine-learning", "opencl", "webgl", "webgpu", "gguf", "onnx", "safetensors"]
stars: 23
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-03-17T20:48:57Z"
lastCommitAt: "2026-10-25T22:11:01Z"
lastReleaseAt: "2026-10-20T15:52:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 43
maintainers: ["LostBeard"]
openGraphImageUrl: "https://opengraph.githubassets.com/b058c3020ca81f44a88288ef86976dae1700856ad5c8c316a324bda86261b824/LostBeard/SpawnDev.ILGPU.ML"
---

# SpawnDev.ILGPU.ML

**Neural network inference and training in C#, on any GPU, in the browser or on the desktop.**

Compute kernels written in C# run as WGSL, GLSL, PTX, OpenCL C, WebAssembly or SIMD CPU code through [SpawnDev.ILGPU](https://github.com/LostBeard/SpawnDev.ILGPU).
No ONNX Runtime. No native inference binaries. No server.

[**Live demo**](https://lostbeard.github.io/SpawnDev.ILGPU.ML/) | [Docs](https://github.com/LostBeard/SpawnDev.ILGPU.ML/blob/HEAD/Docs/README.md) | [Examples](https://github.com/LostBeard/SpawnDev.ILGPU.ML/blob/HEAD/Examples/README.md) | [Changelog](https://github.com/LostBeard/SpawnDev.ILGPU.ML/blob/HEAD/CHANGELOG.md) | [What is verified](https://github.com/LostBeard/SpawnDev.ILGPU.ML/blob/HEAD/Docs/DEMO_AND_MODEL_STATUS.md)

---

## What it is

SpawnDev.ILGPU.ML is an inference and training engine for .NET whose every layer, from matrix multiply to a 5.6B-parameter image model, is a C# kernel that [ILGPU](https://github.com/m4rs-mt/ILGPU) compiles for the device in front of it. The same library, the same kernels and the same models run:

- **in the browser** (Blazor WebAssembly) on WebGPU, WebGL or WebAssembly, with nothing leaving the user's…
