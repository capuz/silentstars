---
repo: "AEON-7/vllm-ultimate-dgx-spark"
name: "vllm-ultimate-dgx-spark"
description: "AEON vLLM Ultimate — vLLM 0.27.1 built from source for DGX Spark / Blackwell (sm_121a/GB10). DSpark quantized Markov heads, DFlash SWA on MRv2, Triton NVFP4-KV (NHD-safe), NVFP4_AWQ, torch 2.13 + FlashInfer 0.6.16 trio, NCCL 2.30.7, TP=2-ready. One image serves the whole AEON fleet."
readmeQualityOk: true
url: "https://github.com/AEON-7/vllm-ultimate-dgx-spark"
homepage: "https://github.com/AEON-7/vllm-ultimate-dgx-spark/pkgs/container/aeon-vllm-ultimate"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 149
forks: 16
openIssues: 4
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T05:07:43Z"
lastCommitAt: "2026-11-23T12:21:04Z"
lastReleaseAt: "2026-08-17T01:52:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 12
maintainers: ["AEON-7"]
openGraphImageUrl: "https://opengraph.githubassets.com/47ff3b490f2e9f76a519e934d83acf85cb591421883a67d2443a42ba405d9d27/AEON-7/vllm-ultimate-dgx-spark"
---

# AEON vLLM Ultimate — DGX Spark / Blackwell

**One container, the whole fleet.** A single image — `ghcr.io/aeon-7/aeon-vllm-ultimate:latest` — serves every AEON model on **NVIDIA DGX Spark (GB10, sm_121a)** and other consumer-Blackwell GPUs (RTX 50 series): **Gemma-4-26B-A4B**, **Qwen3.6-27B**, and **Qwen3.6-35B-A3B** all run on the same build, with DFlash speculative decoding, NVFP4 weights, NVFP4/FP8 KV cache, and the OpenAI-compatible gateway intact.

Built on **vLLM v0.29.0 compiled from source for sm_121a (see 0.29-omni release note)**, merged with the AEON speculative-decoding stack: **DSpark Markov-head speculation (quantized heads)** + Triton software **NVFP4 KV cache** (PR #44389, NHD-safe rewrite) + **DFlash** (SWA drafters native on Model-Runner-V2) + the **AEON DGX Spark runtime patches** + **TurboQuant**.
