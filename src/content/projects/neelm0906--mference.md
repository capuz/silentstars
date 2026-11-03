---
repo: "NeelM0906/Mference"
name: "Mference"
description: "Swift + Metal MoE inference for Apple Silicon: Qwen 3.6 35B at 23.5–29.3 tok/s decode with 2.20× faster long-prompt prefill on a 24 GB M5; Gemma 4 26B in ~2 GB, DeepSeek-V4-Flash 284B, Inkling-Small 276B, native Mac app, CLI, and OpenAI-compatible server."
readmeQualityOk: true
url: "https://github.com/NeelM0906/Mference"
language: "Swift"
languages: ["Swift"]
languagePcts: [85]
topics: ["apple-silicon", "deepseek", "gemma", "llm-inference", "macos", "metal", "mixture-of-experts", "qwen", "swift"]
stars: 122
forks: 18
openIssues: 1
closedIssues: 0
watchers: 5
contributors: 4
recentReleases: 1
createdAt: "2026-07-31T20:20:09Z"
lastCommitAt: "2026-11-03T19:05:39Z"
lastReleaseAt: "2026-09-21T19:22:10Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 24
maintainers: ["iltaren", "NeelM0906"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c179ebe69bed2f63353f66265a144934566978216d142c437b9ddfb75d7799b/NeelM0906/Mference"
---

A native Swift + Metal runtime for pinned checkpoints, with bounded-memory streaming and measured ports.

Mixture-of-experts models activate only a fraction of their parameters per
token. Mference turns that sparsity into a bounded working set: it keeps the
shared core and KV cache in memory, then streams only the experts selected for
the current token from SSD. The complete model does not have to fit in RAM.
The same fixed aperture now covers three kinds of tensor: routed experts stream
into a slot cache, long-context KV pages spill to SSD, and Flash-Next's
320-million-row n-gram embedding table is read a few rows per token. Dense
families remain fully resident but share the same native runtime, verified
installer, model contract, and serving layer.

Mference supports a curated set of pinned instruction checkpoints:

- **[Gemma 4 26B-A4B](https://ai.google.dev/gemma/docs/core/model_card_4)** —
  26B total, ~3.88B active per token, in ~2 GB of memory.
- **[Qwen 3.6 35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — 35B
  total, ~3B active per token, from ~1.45 GB of memory with the 16-slot profile.
  Installs either from the mlx-community conversion or from the vendor's…
