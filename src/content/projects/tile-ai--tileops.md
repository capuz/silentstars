---
repo: "tile-ai/TileOPs"
name: "TileOPs"
description: "High-performance LLM operator library built on TileLang."
url: "https://github.com/tile-ai/TileOPs"
homepage: "https://tile-ai.github.io/TileOPs.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 148
forks: 44
openIssues: 25
closedIssues: 785
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2025-06-03T07:48:40Z"
lastCommitAt: "2026-06-26T06:47:08Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 47
maintainers: ["lcy-seso", "superAngGao", "RMLYC"]
openGraphImageUrl: "https://opengraph.githubassets.com/524227f53248c36aabf71ba6d623d3d8e637757c3835a2c852b79b5d254ed2c5/tile-ai/TileOPs"
---

<h1>TileOPs</h1>
  <p><strong>Spec-driven GPU operator library for LLMs — designed for AI agents to build, evaluate, and optimize</strong></p>
  <p>Built on <a href="https://github.com/tile-ai/tilelang">TileLang</a></p>
  
  <p>
  </p>
  <p>
  </p>
</div>

> **Status**: TileOPs is under active development. APIs may change.

## Overview

TileOPs is a GPU operator library for LLM training and inference, built on [TileLang](https://github.com/tile-ai/tilelang). Beyond providing a growing collection of production-quality operators, TileOPs explores a **spec-driven development model** where AI agents can read declarative operator specifications, generate kernel implementations, and evaluate them against hardware-theoretical performance bounds — with minimal human scaffolding.

### Architecture

Every operator is split into two layers with a strict boundary:

- **Op** (L2) — stateless Python entry point. Handles validation, dtype casting, and memory layout. Compatible with CUDA-Graph and `torch.compile`.
- **Kernel** (L1) — TileLang GPU implementation with hardware-specific optimizations (Ampere, Hopper).

This separation keeps user-facing behavior independent of GPU strategy, allowing…
