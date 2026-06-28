---
repo: "defai-digital/ax-engine"
name: "ax-engine"
description: "Apple Silicon LLM runtime supporting Gemma 4 and Qwen 3.6 MTP modes"
url: "https://github.com/defai-digital/ax-engine"
homepage: "https://automatosx.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [56, 27]
topics: ["ai-interface", "generative-ai", "inference-engine", "llm", "local-llm", "macos", "metal", "rust", "gemma4", "mtp"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 43
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-23T04:42:30Z"
lastCommitAt: "2026-06-28T01:46:48Z"
lastReleaseAt: "2026-03-23T10:41:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["automatosx"]
openGraphImageUrl: "https://opengraph.githubassets.com/3035a93888dfbdd1d761519c60fc202fffa419fd5cd6787366d62f789d32375f/defai-digital/ax-engine"
---

# AX Engine

AX Engine is a Mac-first LLM inference runtime for Apple Silicon developers who
want local models to be fast, inspectable, and easy to serve. It is not just a
wrapper around `mlx_lm`: for direct-support Gemma, Qwen, GLM, and
DiffusionGemma families, AX Engine owns the MLX graph path, KV/runtime behavior,
server route, model packaging, and benchmark contract.

## Why AX Engine

AX Engine is built to win the full interactive local-model path, not just report
one isolated kernel number. In the current public direct-mode matrix, AX Engine
leads `mlx_lm` on prefill and TTFT at 128 and 512 prompt tokens for every listed
model — and at 2,048 tokens for most, settling within ~2% of parity at the
largest context. Direct decode is tracked separately and is mixed by model, with
peer rows and model-specific boundaries kept visible.

- **First-class MTP:** one-command MTP package preparation through
  `ax-engine download-mtp`, including the Gemma 4 12B 4-bit quick-start target
  plus recommended 6-bit MTP benchmarking and 4-bit comparison lanes.
- **Simple local serving:** install the wheel, download or prepare a model, then
  run the printed `ax-engine serve ...` command for…
