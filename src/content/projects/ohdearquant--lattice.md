---
repo: "ohdearquant/lattice"
name: "lattice"
description: "Run, quantize, and fine-tune LLMs on Apple Silicon. Pure Rust, no Python, no CUDA, no ONNX"
readmeQualityOk: true
url: "https://github.com/ohdearquant/lattice"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["apple-silicon", "embeddings", "fine-tuning", "graphdb", "inference", "llm", "local-llm", "machine-learning", "quantization", "retrieval"]
stars: 34
forks: 4
openIssues: 175
closedIssues: 316
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-13T15:22:45Z"
lastCommitAt: "2026-07-22T06:10:26Z"
lastReleaseAt: "2026-06-30T02:19:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 43
maintainers: ["ohdearquant"]
openGraphImageUrl: "https://opengraph.githubassets.com/0956a7721401e237fb87b5cbea322640b6c2ad40f36814f16add91ec50b533fe/ohdearquant/lattice"
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

**A Rust inference library.** Five published crates covering embeddings, generation, quantization,
LoRA fine-tuning, and optimal transport. Use `lattice-embed` as a library dependency, or run
the `lattice` binary for interactive chat and an OpenAI-compatible HTTP server.

**Lattice Studio: a native macOS app.** A SwiftUI instrument panel that drives the Rust engine
via CLI subprocesses. Train LoRA adapters with a live loss oscilloscope, quantize models with
a before/after comparison, run multi-turn chat with persistent GPU model residency, and manage…
