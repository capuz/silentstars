---
repo: "defai-digital/ax-engine"
name: "ax-engine"
description: "Real speed. Multi-model LLM serving with prefix reuse, MTP acceleration — built for Apple Silicon"
readmeQualityOk: true
url: "https://github.com/defai-digital/ax-engine"
homepage: "https://ax-engine.app"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [61, 31]
topics: ["llm", "local-llm", "macos", "metal", "rust", "apple-silicon", "embeddings", "mlx", "model-serving", "multi-model"]
stars: 34
forks: 2
openIssues: 0
closedIssues: 49
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-03-23T04:42:30Z"
lastCommitAt: "2026-11-25T03:18:20Z"
lastReleaseAt: "2026-03-23T10:41:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["automatosx"]
openGraphImageUrl: "https://opengraph.githubassets.com/b99fb4ffec1baf2e0994127e653415d2df0100817842c26200765a97c838fe6f/defai-digital/ax-engine"
---

# AX Engine

AX Engine is a **Mac-first** Apple Silicon inference runtime **optimized first
for Qwen 3.8 27B AXQ**. The Qwen 3.8 27B and Flash Next product scope is
**MLX + AXQ MXFP4 / MXFP8 with MTP sidecars**, plus affine 6-bit/group64 MTP.
The generic pinned selectors load MXFP4 MTP packs; the Qwen 3.8 27B MXFP8
pack is a catalog Candidate and Flash Next MXFP8 remains an explicit preview.
Standalone affine 4-bit and 8-bit and non-MTP variants for these two models
are unsupported. MTP execution remains explicit opt-in until its gates pass.
Install the macOS app with one curl command to download models, chat and serve
OpenAI-compatible endpoints locally.

Primary optimization target. Checkpoint Tier 1. MTP Tier 2 pending. AX certification record: Candidate (gates open).

The default pack is `qwen3.8-27b:axq`
([`AutomatosX/AX-Qwen3.8-27B-MLX-AXQ-MXFP4-MTP`](https://huggingface.co/AutomatosX/AX-Qwen3.8-27B-MLX-AXQ-MXFP4-MTP)
@ `b2c5354f779e430d0c1733143db848a72b71c16e`). Additional Qwen, Gemma, GLM, and
other certified families stay supported; they are not the first-run or
qualification center. Super-class Qwen 3.8 (2.4T) is experimental only.
