---
repo: "Brontir/NInferno"
name: "NInferno"
description: "High-performance single-GPU inference for (Qwen, Gemma, Nemotron & other) checkpoints and GPUs."
readmeQualityOk: true
url: "https://github.com/Brontir/NInferno"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [66, 23]
topics: ["inference", "inference-engine", "inference-optimization", "cuda"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-09-24T12:48:24Z"
lastCommitAt: "2026-10-26T09:17:39Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["dementiimichael", "MichaelDementii"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0b479a87e0f82ba0c6c365c17096c10f1298e4be370e39d9dee1f923e452320/Brontir/NInferno"
---

# NInferno

**Fast LLM inference on the NVIDIA GPU you already own.**

A well-tuned launch can run a model more than twice as fast as a plain one
([measured](https://github.com/Brontir/NInferno/blob/HEAD/docs/performance/README.md)). NInferno comes
already measured on nearly every GPU you can buy: it knows the best settings for each
architecture and model and starts with them, and its GUI walks you through fitting them to your
task. The aim: fast, cheap inference for everyone.

- **GPUs:** NVIDIA Volta, Turing, Ampere, Ada and Blackwell: GeForce RTX 20 to 50, V100, T4, A10,
  A100, L4, L40S, RTX PRO 6000.
- **Not the target:** ✗ H100, H200, B200, B300. The project is fast inference on affordable cards;
  these run, but get no tuning and no measurements.
- **Models:** Qwen3.5 to 3.8, Gemma 4, gpt-oss, Nemotron 3.5 and Muse Glimmer, **and every
  fine-tune, fork and version built on their architectures** (support is per architecture), as
  published on Hugging Face: GGUF, NVFP4, MXFP4, FP8, AWQ, GPTQ.
- **Speed:** speculative decoding (MTP, DFlash, DFlash2) and kernels measured per GPU, one to eight
  concurrent streams.
- **Long context:** YaRN and LongRoPE as the checkpoint…
