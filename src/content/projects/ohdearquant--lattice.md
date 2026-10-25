---
repo: "ohdearquant/lattice"
name: "lattice"
description: "Run AI models on Apple Silicon and Raspberry Pi"
readmeQualityOk: true
url: "https://github.com/ohdearquant/lattice"
homepage: "https://khive.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["apple-silicon", "embeddings", "fine-tuning", "graphdb", "inference", "llm", "local-llm", "machine-learning", "quantization", "retrieval"]
stars: 46
forks: 5
openIssues: 128
closedIssues: 635
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-13T15:22:45Z"
lastCommitAt: "2026-10-25T08:40:59Z"
lastReleaseAt: "2026-06-30T02:19:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 39
maintainers: ["ohdearquant"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec30c6c3f6264e2ef982e3b2fd9f59c070b6257ab56fecb1322716c4ef77e0ce/ohdearquant/lattice"
---

# Lattice

Pure Rust inference engine for transformer models on Apple Silicon, with a native macOS app.

**[Quick start](#quick-start-cli)** · **[Lattice Studio](#lattice-studio-macos-app)** · **[Benchmarks](#benchmarks)** · **[Roadmap](#roadmap)**

No ONNX. No Python. No CUDA. No external ML runtime. Lattice implements the full compute graph
in Rust: weight loading, tokenization, forward pass, vector operations, quantization, and LoRA
training. Hand-written Metal shaders accelerate inference on Apple Silicon. SIMD kernels (AVX2
on x86, NEON on ARM) handle the CPU path.

---

## What is Lattice

Lattice is two things in one repo.

**A Rust inference library.** Eleven crates covering embeddings, generation, quantization,
LoRA fine-tuning, and optimal transport. Use `lattice-embed` as a library dependency, or run
the `lattice` binary for interactive chat and an OpenAI-compatible HTTP server.

**Lattice Studio: a native macOS app.** A SwiftUI instrument panel that drives the Rust engine
via CLI subprocesses. Train LoRA adapters with a live loss oscilloscope, quantize models with
a before/after comparison, run multi-turn chat with persistent GPU model residency, and manage your
model…
