---
repo: "zolotukhin/zinc"
name: "zinc"
description: "Zig INferenCe Engine — Local LLM inference on AMD GPUs and Apple Silicon"
readmeQualityOk: true
url: "https://github.com/zolotukhin/zinc"
homepage: "https://zolotukhin.ai/zinc/"
language: "Zig"
languages: ["Zig"]
languagePcts: [65]
topics: ["amd", "amdgpu", "gpt", "gpu", "openai", "pytorch", "qwen3", "rdna3", "rdna4", "transformer"]
stars: 445
forks: 18
openIssues: 2
closedIssues: 3
watchers: 9
contributors: 4
recentReleases: 0
createdAt: "2026-03-25T01:50:17Z"
lastCommitAt: "2026-07-04T22:55:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 24
maintainers: ["zolotukhin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1191177873/4447877a-fde7-4085-b367-3a39564dd26c"
---

</p>

# ZINC — Zig INferenCe Engine

  </a>
  </a>
  </a>
  </a>
  </a>
</p>

> Fastest measured local LLM inference for AMD GPUs. ZINC beats llama.cpp across the current five-model RDNA4 headline sweep — decode, prefill, end-to-end, and model-level overall — with no ROCm.

</p>

## AMD RDNA4: ZINC Beats llama.cpp

ZINC is the fastest measured local AI engine for AMD GPUs in our current suite.
On the Radeon AI PRO R9700, it beats llama.cpp on all five published models:
decode, prefill, end-to-end, and overall.

Same GPU. Same GGUF files. Same prompts. Same server-vs-server harness.

| Model | Decode | Prefill | Overall |
|-------|-------:|--------:|--------:|
| Qwen 3.6 35B A3B UD Q4_K_XL | **166.8** vs 108.5 tok/s (**1.54x**) | **540** vs 397 tok/s (**1.36x**) | **151%** |
| Qwen 3.5 9B Q4_K_M | **97.5** vs 85.5 tok/s (**1.14x**) | **739** vs 549 tok/s (**1.35x**) | **115%** |
| Qwen 3.6 27B Dense Q4_K_M | **32.0** vs 30.7 tok/s (**1.04x**) | **213** vs 184 tok/s (**1.16x**) | **105%** |
| Gemma 4 26B-A4B MoE Q4_K_M | **113.7** vs 102.1 tok/s (**1.11x**) | **809** vs 497 tok/s (**1.63x**) | **115%** |
| Gemma 4 31B Q4_K_M | **28.8** vs 28.5 tok/s (**1.01x**) | **249** vs 200…
