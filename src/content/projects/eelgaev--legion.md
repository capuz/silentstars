---
repo: "eelgaev/Legion"
name: "Legion"
description: "Rust LLM inference engine for MoE models on NVIDIA unified memory (IBM AC922, DGX Spark). Runs GGUF and Hugging Face safetensors (NVFP4, FP8) as shipped, with speculative decoding, continuous batching and prefix caching."
readmeQualityOk: true
url: "https://github.com/eelgaev/Legion"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-04T11:44:11Z"
lastCommitAt: "2026-11-06T13:20:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 26
maintainers: ["eelgaev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f20385afa5b0bfa6ebb5702d25baf302917cd51360d9e79e47cde3547b6dff2a/eelgaev/Legion"
---

# Legion

Legion is an LLM inference engine for mixture-of-experts models on NVIDIA unified-memory systems.
It is Rust first: the host side is Rust, kernels are PTX where we can, and C/C++ only where there
is no other choice (ggml provides the quantized kernels underneath).

- **Models.** First-class: [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) (Qwen4 architecture),
  [GLM5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) and [DeepSeek4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash).
  Also supported: [Gemma 4](https://huggingface.co/google/gemma-4-31B-it), [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) and smaller
  MoEs such as [Nemotron3.5-30B-A3B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16),
  [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) and [Gemma4-26B-A4B](https://huggingface.co/google/gemma-4-26B-A4B-it).
- **Hardware.** Built for unified memory: very good support for the IBM AC922 (V100
  over NVLink 2.0 + ATS) and the DGX Spark (GB10). Models bigger than VRAM keep their
  experts in host memory, read in place or cached in VRAM by heat. Minimum GPU: sm_70 (Volta).
-…
