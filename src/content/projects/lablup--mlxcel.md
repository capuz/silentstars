---
repo: "lablup/mlxcel"
name: "mlxcel"
description: "High-performance LLM/VLM inference runtime and server for Apple Silicon / NVIDIA CUDA devices"
readmeQualityOk: true
url: "https://github.com/lablup/mlxcel"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 310
forks: 40
openIssues: 52
closedIssues: 477
watchers: 4
contributors: 7
recentReleases: 7
createdAt: "2026-01-30T15:07:23Z"
lastCommitAt: "2026-08-17T04:19:10Z"
lastReleaseAt: "2026-05-28T15:28:05Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 97
undervaluedScore: 31
maintainers: ["inureyes"]
openGraphImageUrl: "https://opengraph.githubassets.com/09d95b4849062106e94d74a0ea3cf08e26fbefcefc0b71f5429afd3e851c23cb/lablup/mlxcel"
discussionCount: 0
---

# mlxcel

High-performance LLM/VLM inference runtime and server for Apple Silicon / NVIDIA CUDA-compatible / (experimental) OpenXLA-compatible devices. The CLI and server are implemented in Rust and execute models through native MLX C++ bindings. Linux/CUDA builds are supported as a secondary target.

## Overview

`mlxcel` provides a Rust command-line runtime and an OpenAI-compatible model server for MLX-format checkpoints. Loading, scheduling, and inference stay in one native process while model execution goes through MLX C++ bindings. It runs a broad range of text and vision-language model families directly from [mlx-community](https://huggingface.co/mlx-community) checkpoints, with no conversion step.

The project started as work on structural model fine-tuning and has grown into a general-purpose serving runtime for local and small-cluster inference.

## New in v0.5.1

- **Multi-turn prompt-cache reuse for snapshot-only families.** A second snapshot is taken during prefill at the history boundary, so the next turn of a conversation matches it by construction instead of missing on template scaffolds, dropped `<think>` blocks, or retokenized replies. On `qwen3.5-0.8b-4bit` turn…
