---
repo: "lablup/mlxcel"
name: "mlxcel"
description: "High-performance LLM, VLM, embedding, reranking, and audio inference for Apple Silicon and NVIDIA CUDA systems."
readmeQualityOk: true
url: "https://github.com/lablup/mlxcel"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 479
forks: 69
openIssues: 125
closedIssues: 1090
watchers: 6
contributors: 27
recentReleases: 0
createdAt: "2026-01-30T15:07:23Z"
lastCommitAt: "2026-10-25T09:01:33Z"
lastReleaseAt: "2026-05-28T15:28:05Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 98
undervaluedScore: 29
maintainers: ["inureyes", "hephaex", "adrysn"]
openGraphImageUrl: "https://opengraph.githubassets.com/311eef82ec5c85218842e9955227c73bc5dd52c81e3a8046afde0ffdc4fbd4b1/lablup/mlxcel"
discussionCount: 0
---

# mlxcel

High-performance LLM, VLM, embedding, reranking, and audio inference for Apple Silicon and NVIDIA CUDA systems, with experimental AMD ROCm support on Linux. The CLI and server are implemented in Rust and execute MLX SafeTensors checkpoints through native MLX C++ bindings, without Python in the request path or a checkpoint-conversion step.

## Overview

`mlxcel` is both a local inference CLI and a production-oriented model server. It runs text generation, multimodal input, embeddings, reranking, speech workloads, continuous batching, prompt caching, speculative decoding, and distributed inference in one native runtime.

Apple Silicon is the primary target. Linux/CUDA is supported as a secondary target. AMD GPUs on Linux (ROCm) are an experimental, source-build-only target, and an opt-in OpenXLA/IREE backend is available as an alpha development path.

## Current main highlights

The current `main` branch is v0.8.0-beta.1 plus unreleased work. Install from source to use features that have not reached the latest tagged release; see the [changelog](https://github.com/lablup/mlxcel/blob/HEAD/CHANGELOG.md) for the release-by-release record.

- **Experimental AMD GPU (ROCm)…
