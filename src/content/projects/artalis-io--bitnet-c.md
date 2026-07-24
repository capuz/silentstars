---
repo: "artalis-io/bitnet.c"
name: "bitnet.c"
description: "Minimal, zero-dependency LLM inference in pure C11. CPU-first with NEON/AVX2 SIMD. Flash MoE (pread + LRU expert cache). TurboQuant 3-bit KV compression (8.9x less memory per session). 20+ GGUF quant formats. Compiles to WASM."
readmeQualityOk: true
url: "https://github.com/artalis-io/bitnet.c"
language: "C"
languages: ["C"]
languagePcts: [68]
topics: ["c", "cpu-inference", "gguf", "inference", "llm", "quantization", "simd", "wasm", "avx2", "kv-cache"]
stars: 22
forks: 8
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T15:56:49Z"
lastCommitAt: "2026-07-24T06:08:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["farkasmark"]
openGraphImageUrl: "https://opengraph.githubassets.com/aca0fba748ff47e57cfdd383404f530b8c9dc8b56679477ac22d1e6e77dc667b/artalis-io/bitnet.c"
---

# bitnet.c

Small C11 inference engine for GGUF LLMs, with a bias toward readable module
boundaries, CPU correctness, and optional GPU execution through explicit backend
interfaces.

The current codebase is no longer a single flat transformer loop. Model anatomy,
quant formats, backend-resident state, transformer planning, CPU execution, GPU
op emission, KV helpers, logits, and prefill now live in separate modules.

## What It Supports

- GGUF v3 model loading for dense, MoE, and hybrid SSM/attention families used by
  current Qwen, BitNet, Llama-style, Gemma-family, and related GGUF exports.
- Quantized CPU inference for `I2_S`, `TQ1_0`, `TQ2_0`, `Q4_0`, `Q4_1`,
  `Q8_0`, `Q2_K` through `Q8_K`, `IQ2` through `IQ4`, `F16`, `BF16`, and `F32`.
- CPU backends for scalar, ARM NEON/SDOT, x86 AVX2, x86 AVX512 BW/VNNI,
  and WASM SIMD where kernels exist.
- Optional native Metal and wgpu-native WebGPU backends.
- MoE expert routing with mmap, pread, and expert LRU cache modes.
- Hybrid SSM/attention execution, including CPU fallback for backend gaps.
- Per-request `BnSession` state with shared immutable `BnModel`.
- Prompt cache, stop strings, logprobs, chat formatting, SSE formatting,…
