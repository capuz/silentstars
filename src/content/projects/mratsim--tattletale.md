---
repo: "mratsim/tattletale"
name: "tattletale"
description: "Stealth LLM inference engine"
readmeQualityOk: true
url: "https://github.com/mratsim/tattletale"
language: "Nim"
languages: ["Nim"]
languagePcts: [79]
stars: 49
forks: 4
openIssues: 28
closedIssues: 24
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-02-03T23:48:54Z"
lastCommitAt: "2026-10-21T06:34:09Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 86
undervaluedScore: 35
maintainers: ["mratsim"]
openGraphImageUrl: "https://opengraph.githubassets.com/20bbf69f7e0a254b45b3b4693e0dd201bc2832625c7378ea9730ce7cc3598780/mratsim/tattletale"
---

# Tattletale

A high-performance inference engine project.

See motivation and MVP goals at https://github.com/mratsim/tattletale/issues/1

TL;DR of goals (README-driven development):
- High-performance: concurrent queries, 1M+ context per queries, highly-tuned kernels, fused kernels, SOTA CPU threadpool and kernels
- Embeddable: Single-binary, callable from C, C++, Rust, Python, ...
- Multi-hardware: Currently Cuda, OpenCL, Vulkan, WebGPU. Future HIP and Metal and why not DX12
- Multi-modality: Audio and Image input AND generation
- Maintainable and easy to extend
- Cryptography-inspired engineering practices: Lean4 formalization of complex state management
- First class support of EXL3 quantization, the SOTA quantization in 2026 with random Welsh-Hadamard transforms, trellis and lattice codebooks.

Killer apps:
- Being an engine embeddable in a game that can handle parallel NPC dialogs and actions
- Text + Audio + Video assistant on desktop and phone with concurrent agents handling

## Highlights

_At the moment the project is still in its infancy, we present key differentiators that will hopefully snowball into an unique product in the landscape._

- Promising performance with…
