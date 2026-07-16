---
repo: "avifenesh/bw24"
name: "bw24"
description: "From-scratch Rust+CUDA inference engine, bit-exact by construction — NVFP4, MoE, MTP speculative decoding, tuned against measured limits of one RTX 5090 Laptop (sm_120a)."
readmeQualityOk: true
url: "https://github.com/avifenesh/bw24"
homepage: "https://huggingface.co/Avifenesh/bw24-bench"
language: "Rust"
languages: ["Rust", "Cuda"]
languagePcts: [53, 31]
topics: ["blackwell", "cuda", "gguf", "gpu-kernels", "llama-cpp", "llm-inference", "moe", "nvfp4", "rust", "speculative-decoding"]
stars: 266
forks: 31
openIssues: 0
closedIssues: 1
watchers: 23
contributors: 2
recentReleases: 10
createdAt: "2026-07-05T20:45:33Z"
lastCommitAt: "2026-07-16T05:59:46Z"
lastReleaseAt: "2026-07-10T00:12:53Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 33
maintainers: ["avifenesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/98f660525dd4700c878868f2bc1cbde6f28ce6c4deafa5b5b5c08b35accc22bd/avifenesh/bw24"
---

# bw24

-black.svg)

From-scratch LLM inference engine in Rust + CUDA, built for one machine: an RTX 5090 Laptop (Blackwell sm_120a, 24 GB). No frameworks, no ggml — every kernel written and tuned against measured hardware limits, with llama.cpp as the benchmark to beat on the same rig.

**Current standing: six supported models, all fully gated. Qwen leads llama.cpp on every cell (plain 1.06-1.08x, spec 1.1-1.9x). Gemma leads decisively where llama lacks the capability or the depth (31B spec 1.7k 1.16x, E4B spec ≥1.23x, E4B plain 1.10x) and sits at 0.99-1.06x elsewhere under the strictest best-vs-best pairing (2026-07-15 re-audit).** Every number below is a same-session, same-prompt, interleaved measurement against llama.cpp's best config; exactness is gated (argmax match + speculative self-consistency) on every kernel change, so speed never buys different outputs.

## Model support

| Tier | Models | State |
|---|---|---|
| **Supported** | Qwen3.5-9B, Qwen3.6-27B, Qwen3.6-35B-A3B MoE (NVFP4/IQ4_XS); Gemma-4 26B-A4B MoE, 31B dense, E4B (QAT Q4_0 + MTP drafters) | Board-published, fully gated, exactness-first; margins per model in the tables below |
| **In progress** | Hy3-REAP50,…
