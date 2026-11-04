---
repo: "ohdearquant/lattice"
name: "lattice"
description: "Run AI models on Apple Silicon and Raspberry Pi"
readmeQualityOk: true
url: "https://github.com/ohdearquant/lattice"
homepage: "https://khive.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["apple-silicon", "embeddings", "fine-tuning", "graphdb", "inference", "llm", "local-llm", "machine-learning", "quantization", "retrieval"]
stars: 46
forks: 5
openIssues: 142
closedIssues: 700
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-13T15:22:45Z"
lastCommitAt: "2026-11-04T08:03:21Z"
lastReleaseAt: "2026-06-30T02:19:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 39
maintainers: ["ohdearquant", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5e8b3aae03fa97d0655161cad8e61b87a86efb1eb7d8d8d6e125e986af1d56f/ohdearquant/lattice"
---

# Lattice

Pure Rust inference engine for transformer models on Apple Silicon, with a
native macOS app.

**[Quick start](#quick-start-cli)** ·
**[Lattice Studio](#lattice-studio-macos-app)** · **[Benchmarks](#benchmarks)**
· **[Roadmap](#roadmap)**

No ONNX. No Python. No CUDA. No external ML runtime. Lattice implements the full
compute graph in Rust: weight loading, tokenization, forward pass, vector
operations, quantization, and LoRA training. Hand-written Metal shaders
accelerate inference on Apple Silicon. SIMD kernels (AVX2 on x86, NEON on ARM)
handle the CPU path.

---

## What is Lattice

Lattice is two things in one repo.

**A Rust inference library.** A workspace of focused crates covering embeddings,
generation, quantization, LoRA fine-tuning, and optimal transport. The canonical
member list is in [`Cargo.toml`](https://github.com/ohdearquant/lattice/blob/HEAD/Cargo.toml). Use `lattice-embed` as a library
dependency, or run the `lattice` binary for interactive chat and an
OpenAI-compatible HTTP server.

**Lattice Studio: a native macOS app.** A SwiftUI instrument panel that drives
the Rust engine via CLI subprocesses. Train LoRA adapters with a live loss
oscilloscope,…
