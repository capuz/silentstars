---
repo: "rwilliamspbg-ops/Ghostlink"
name: "Ghostlink"
description: "Distributed LLM inference fabric for heterogeneous local clusters. Features zero-copy SPSC ring buffers, automated tuning, and an OpenAI-compatible API."
readmeQualityOk: true
url: "https://github.com/rwilliamspbg-ops/Ghostlink"
homepage: "https://rwilliamspbg-ops.github.io/Ghostlink/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [61, 20]
topics: ["af-xdp", "computer-networks", "deep-learning", "distributed-computing", "gpu-computing", "inference", "llm", "networking-concepts", "open-source", "rust"]
stars: 49
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-06-19T09:31:24Z"
lastCommitAt: "2026-10-05T10:46:55Z"
lastReleaseAt: "2026-08-18T01:25:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["rwilliamspbg-ops", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274209386/a310ebbf-9e44-42ac-b7a5-d75d67a77104"
fundingLinks: ["GITHUB:https://github.com/rwilliamspbg-ops"]
discussionCount: 4
---

# 👻 Ghostlink

**Distributed inference fabric for custom LLM systems.**
Route workloads across CPU, GPU, and NPU resources with explicit scheduling, hardware-aware placement, and a self-hosted open-source stack.

[Quick Start](#quick-start) · [Demo](#demo) · [Architecture](#architecture) · [API](#api-endpoints) · [Docs](https://rwilliamspbg-ops.github.io/Ghostlink/) · [Contributing](https://github.com/rwilliamspbg-ops/Ghostlink/blob/HEAD/CONTRIBUTING.md)

---

## Demo

**Install → load a model → chat**, end to end, running [Llama 3.2 1B](https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct) locally through Ghostlink Studio's native llama.cpp backend.

> The full-length recording (with audio) lives in the gitignored `demo/` folder for local viewing — it's not part of the pushed repo, so there's no link to it here.

## Table of Contents

- [What Ghostlink brings](#what-ghostlink-brings)
- [Why Ghostlink](#why-ghostlink)
- [Quick Start](#quick-start)
- [Hardware Detection & Compatibility](#hardware-detection--compatibility)
- [Comparison vs. Other Platforms](https://github.com/rwilliamspbg-ops/Ghostlink/blob/HEAD/docs/COMPARISON.md)
- [Performance](#performance)
- [Launch…
