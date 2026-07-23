---
repo: "facebookexperimental/triton"
name: "triton"
description: "Github mirror of trition-lang/triton repo."
readmeQualityOk: true
url: "https://github.com/facebookexperimental/triton"
language: "MLIR"
languages: ["MLIR", "Python", "C++"]
languagePcts: [44, 33, 22]
stars: 181
forks: 61
openIssues: 15
closedIssues: 210
watchers: 10
contributors: 221
recentReleases: 1
createdAt: "2024-11-11T17:31:22Z"
lastCommitAt: "2026-07-23T06:12:51Z"
lastReleaseAt: "2026-07-20T22:42:21Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 45
maintainers: ["njriasan", "htyu", "Youngzt998"]
openGraphImageUrl: "https://opengraph.githubassets.com/346b519c73f6a23b3c6bc041a367e3f5a374c99374738c47b9c97962f1702ba5/facebookexperimental/triton"
---

# TLX - Triton Low-level Language Extensions

## Introduction

TLX (Triton Low-level Language Extensions) is a low-level, warp-aware, hardware-near extension of the Triton DSL. It offers intrinsics and warp-specialized operations for fine-grained GPU control, hardware-oriented primitives for advanced kernel development, and explicit constructs for GPU memory, computation, and asynchronous control flow. TLX is designed for expert users pushing Triton closer to the metal.

Primarily targeting NVIDIA GPUs (for now), TLX extends Triton to support:

- Hardware-specific intrinsics (e.g., wgmma, async_copy, barrier)
- Shared and local memory allocation
- Instruction-level scheduling and control
- Cross-warpgroup synchronization

While this approach places more responsibility on the user, it reduces the compiler's role as a performance bottleneck. Although it may introduce divergence across hardware platforms, it empowers users to perform deeper, architecture-specific optimizations without relying solely on compiler heuristics.

## Nightly builds (fbtriton)

Nightly `.dev` wheels are published to a self-managed index (not PyPI):

    pip install --pre fbtriton \
      --index-url…
