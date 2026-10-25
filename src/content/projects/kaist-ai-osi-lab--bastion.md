---
repo: "kaist-ai-osi-lab/BASTION"
name: "BASTION"
description: "BASTION: Budget-Aware Speculative Decoding with Tree-structured Block Diffusion Drafting"
readmeQualityOk: true
url: "https://github.com/kaist-ai-osi-lab/BASTION"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-05-14T06:36:57Z"
lastCommitAt: "2026-10-25T09:01:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 12
maintainers: ["SimonCao1207", "thwannbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5fb0cbc7edf556309a8fca96e687e4729eca6dd3fea1b40d7abd63ce2289057/kaist-ai-osi-lab/BASTION"
---

# BASTION: Budget-Aware Speculative Decoding with Tree-structured Block Diffusion Drafting (NeurIPS 2026)

Official code release for **BASTION: Budget-Aware Speculative Decoding with Tree-structured Block Diffusion Drafting**.

> **Up to 6.61× speedup over autoregressive decoding** — 2.45× over EAGLE-3 and 1.39× over DFlash, averaged across eight math/code/chat benchmarks on Qwen3-8B at temperature 0 (A100).

BASTION couples adaptive tree construction with a hardware-calibrated verification latency model to choose the verification budget on the fly — no per-workload, per-GPU, or per-model tuning.

## Scope

This repository is intended for experiment reproduction, not as a general serving framework. The current public release supports:

- Transformers backend, batch size 1 experiments
- multi-batch validation on SGLang (see [Multi-Batch Validation (SGLang)](#multi-batch-validation-sglang))
- Qwen3-4B, Qwen3-8B, Llama-3.1-8B-Instruct, and Qwen3-Coder-30B-A3B-Instruct (MoE) target models
- DFlash draft models released on Hugging Face
- greedy and lossless stochastic (`--temperature 1.0`) decoding
- automatic per-(GPU, target model) calibration and profiling cache creation

vLLM and…
