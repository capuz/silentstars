---
repo: "sergqwer/strata-nvfp4"
name: "strata-nvfp4"
description: "Strata fork: Qwen3.8-Flash-Next 125B MoE in NVFP4 on one RTX 20-50 card (12 GB+) and 64 GB of RAM or more. Setup installs our GPTQ quants (huihui abliterated, OrcaRouter) from Hugging Face. CPU experts on AVX-512 or AVX2 (+AVX-VNNI), all experts in RAM from 92 GB, a low-RAM mode below, vision, W4A8 prompts. Windows / CUDA 13."
readmeQualityOk: true
url: "https://github.com/sergqwer/strata-nvfp4"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [64, 22]
topics: ["blackwell", "cuda", "llm-inference", "moe", "nvfp4", "qwen", "vision", "windows", "avx2", "avx512"]
stars: 138
forks: 13
openIssues: 3
closedIssues: 1
watchers: 3
contributors: 266
recentReleases: 10
createdAt: "2026-09-29T16:13:33Z"
lastCommitAt: "2026-10-14T08:57:20Z"
lastReleaseAt: "2026-10-01T15:36:54Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 85
undervaluedScore: 28
maintainers: ["Niko1221", "xrip", "BlueKingMuch"]
openGraphImageUrl: "https://opengraph.githubassets.com/7811b8a38d72784ef7eff3b5e0937763c926a6de681b54e5ad2dd76bee23b07f/sergqwer/strata-nvfp4"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/strataengine"]
---

# Strata NVFP4

**Qwen3.8-Flash-Next (125B hybrid MoE) with NVFP4 experts on one RTX 20, 30, 40 or 50 card (12 GB of VRAM or more)
and 64 GB of RAM or more, text and pictures.** A fork of [Niko1221/Strata](https://github.com/Niko1221/Strata), on
upstream 0.1.44.1. Setup installs, ready-made from Hugging Face, the original Qwen in NVFP4 (our GPTQ, or NVIDIA's
checkpoint converted), censored as Qwen ships it; on ours an opt-in switch turns the censorship off. Upstream's GGUF
models are still offered.

## Models

Accuracy against Qwen3.8-Flash-Next with every routed expert in Q8_0, speed on an RTX 5090 with 128 GB of RAM.
Setup downloads the models it names; each Hugging Face card has its measurements and how to run the
files by hand.

| Model | Same top token as Q8_0 | Decode, tokens/s | 32K prompt | RAM in use | PC for this speed | Get it |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Q8_0: every expert Q8_0 (ours, `qwen-q8`) | 100% (the reference) | 47 | 10.3 s | 106 GiB | 128 GB | [Maximilian228/Qwen3.8-Flash-Next-Q8_0-Strata](https://huggingface.co/Maximilian228/Qwen3.8-Flash-Next-Q8_0-Strata) |
| NVFP4 + Q8_0 mix (ours, `qwen-nvfp4-mix`) | 95.0% | 91 | 4.2 s | 105 GiB |…
