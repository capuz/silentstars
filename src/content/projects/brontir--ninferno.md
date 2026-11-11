---
repo: "Brontir/NInferno"
name: "NInferno"
description: "High-performance single-GPU inference for (Qwen, Gemma, Nemotron & other) checkpoints and GPUs."
readmeQualityOk: true
url: "https://github.com/Brontir/NInferno"
language: "C++"
languages: ["C++"]
languagePcts: [67]
topics: ["inference", "inference-engine", "inference-optimization", "cuda"]
stars: 6
forks: 0
openIssues: 40
closedIssues: 96
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-09-24T12:48:24Z"
lastCommitAt: "2026-11-11T11:16:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 49
maintainers: ["MichaelDementii"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2cc72060dac177df636a6fdd10bae1883c2f7fa4d85d3ea1ede66e9ac72c6da/Brontir/NInferno"
---

# NInferno

**Fast LLM inference on the NVIDIA GPU you already own.**

NInferno is an inference server for a single NVIDIA GPU, from a GeForce RTX 20 or a V100 up to an
RTX 5090. It ships with settings measured on real cards of each generation: which quantization fits,
which drafter to speculate with and how deep, which kernel runs each layer. You name a model on
Hugging Face and it starts with those settings; the GUI shows what changes if you trade context,
users or precision. On one stream, speculative decoding usually runs a model 1.2 to 2.5 times as fast as plain
decoding of the same weights (about 1.4 times on a typical page; on a V100 it can be no faster),
depending on the model and the task ([measured](https://github.com/Brontir/NInferno/blob/HEAD/docs/performance/README.md)).

**Against llama.cpp on the same GGUF and GPU:** ×1.4–1.8 one stream, ×0.9–2.1 all streams against llama.cpp with its own MTP (7 pairs); ×1.2–2.6 one stream, ×1.4–3.0 all streams where llama.cpp has no drafter file for the model and runs plain (14 pairs) ([details](https://github.com/Brontir/NInferno/blob/HEAD/docs/performance/README.md#against-llamacpp)).

- **GPUs:** NVIDIA only: GeForce RTX 20 to…
