---
repo: "zolotukhin/zinc"
name: "zinc"
description: "Zig INferenCe Engine — Local LLM inference on AMD GPUs and Apple Silicon"
url: "https://github.com/zolotukhin/zinc"
homepage: "https://zolotukhin.ai/zinc/"
language: "Zig"
languages: ["Zig"]
languagePcts: [64]
topics: ["amd", "amdgpu", "gpt", "gpu", "openai", "pytorch", "qwen3", "rdna3", "rdna4", "transformer"]
stars: 411
forks: 17
openIssues: 1
closedIssues: 3
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2026-03-25T01:50:17Z"
lastCommitAt: "2026-06-28T01:36:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 25
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

> Local LLM inference on consumer GPUs and Apple Silicon — no ROCm, no MLX, one binary.

  <br>
  <em>35B parameter model running locally — Zig + Vulkan/Metal, no ROCm, no MLX</em>
</p>

## Supported Platforms

| Platform | GPU | Backend | Status |
|----------|-----|---------|--------|
| **Linux** | AMD RDNA4 (RX 9070, AI PRO R9700) | Vulkan | Primary — hand-tuned shaders |
| **Linux** | AMD RDNA3 (RX 7900 XTX, etc.) | Vulkan | Supported |
| **Linux** | Intel Arc Xe2 / Battlemage | Vulkan | Experimental bring-up |
| **macOS** | Apple Silicon (M1, M2, M3, M4, M5) | Metal | Supported — native MSL shaders |

ZINC focuses on current local-inference models people are actively running:
Qwen 3.5/3.6 and Gemma 4 today, with a managed catalog that stays narrow on
purpose. Older Llama/Mistral/Gemma generations may work eventually, but broad
legacy-model coverage is not the main optimization target.

## Status vs llama.cpp

Latest checked-in benchmark artifact, same machine, same weights, same prompt:

| Platform | Compared models | Decode vs llama.cpp | Prefill vs llama.cpp | Read this as |…
