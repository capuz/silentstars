---
repo: "tphakala/simd"
name: "simd"
description: "High-performance SIMD library for Go with AVX/NEON support"
readmeQualityOk: true
url: "https://github.com/tphakala/simd"
language: "Go"
languages: ["Go", "Assembly"]
languagePcts: [67, 33]
topics: ["avx", "float32", "float64", "go", "golang", "math", "neon", "performance", "simd", "vectorization"]
stars: 26
forks: 5
openIssues: 13
closedIssues: 127
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-11-21T22:40:23Z"
lastCommitAt: "2026-11-07T10:36:35Z"
lastReleaseAt: "2026-07-19T18:35:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 50
maintainers: ["tphakala"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b781f16e757d5bdda8000567f0b09e56dc9774288363c88986ee267ff902673/tphakala/simd"
---

# simd

A high-performance SIMD (Single Instruction, Multiple Data) library for Go providing vectorized operations on float64, float32, float16, int32, int16, int8, complex128, and complex64 slices.

## Features

- **Pure Go assembly** - Native Go assembler, simple cross-compilation
- **Runtime CPU detection** - Automatically selects optimal implementation (AVX-512, AVX+FMA, AVX without FMA, SSE2, NEON, NEON+FP16, or pure Go); the minimum amd64 SIMD tier is per-package (see [Architecture Support](#architecture-support))
- **Zero allocations** - All operations work on pre-allocated slices
- **150+ operations** - Arithmetic, reduction, statistical, vector, signal processing, activation functions, integer DSP, and complex number operations
- **Multi-architecture** - AMD64 (AVX-512/AVX+FMA/AVX/SSE2, c64 needs SSE4.1) and ARM64 (NEON/NEON+FP16) with pure Go fallback
- **Half-precision support** - Native FP16 SIMD on ARM64 with FP16 extension (Apple Silicon, Cortex-A55+); F16C-accelerated conversions on AMD64
- **Tunable dispatch** - `SIMD_DISABLE` env var masks feature tiers at startup (avoid AVX-512 downclocking, exercise lower tiers, benchmark tier-vs-tier)
- **Thread-safe**: all…
