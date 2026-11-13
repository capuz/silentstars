---
repo: "ItsOdeLeo/MLX-Direct-Decider"
name: "MLX-Direct-Decider"
description: "Training-free decision engine for existing MLX models on Apple Silicon. No fine-tuning or extra decision weights. MLX-LM + experimental MLX-VLM action selection and semantic routing. Related: AnyJev."
readmeQualityOk: true
url: "https://github.com/ItsOdeLeo/MLX-Direct-Decider"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["action-selection", "apple-silicon", "local-inference", "mlx", "mlx-lm", "semantic-routing", "jev", "llm", "local-llm", "natural-language-processing"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-20T13:09:46Z"
lastCommitAt: "2026-11-13T18:08:20Z"
lastReleaseAt: "2026-11-13T18:31:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 48
maintainers: ["ItsOdeLeo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2782af3d59ffb59131ce3703feea23b0691673787f57cdd5a806acce51ee81c/ItsOdeLeo/MLX-Direct-Decider"
---

# MLX Direct Decider — MLX decision engine without fine-tuning

**MLX Direct Decider** is an open-source Python library for **training-free decisions from existing MLX models on Apple Silicon Macs**. Use it for local LLM action selection, classification, semantic routing, and enum / boolean decisions.

Reuse a compatible [MLX-LM](https://github.com/ml-explore/mlx-lm) checkpoint for text or an [MLX-VLM](https://github.com/Blaizzy/mlx-vlm) checkpoint for experimental **text + image decisions**. Supply application state, a natural-language request and allowed choices; receive a stable candidate ID, `no_match` or `abstain`. Integrate through a Python API, CLI or local text HTTP service.

**No additional fine-tuning, trained decision head or separate decision-model weights are required.** The full model processes the prompt normally; the library reads candidate logits from its unchanged original output head without generating a continuation. Compatible base-model weights are still needed.

> **JevBench public evaluation: 74.0% — 171/231 correct, without additional fine-tuning.**
> Qwen3.5-9B OptiQ mixed 4/8-bit · Apple M2 Max · evaluated Q&A prompt profile.
> Self-reported results on…
