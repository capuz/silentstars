---
repo: "kryptic-sh/infr"
name: "infr"
description: "Pure-Rust, Vulkan-first LLM inference engine"
readmeQualityOk: true
url: "https://github.com/kryptic-sh/infr"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 6
forks: 2
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-26T07:59:46Z"
lastCommitAt: "2026-07-24T06:08:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 58
maintainers: ["mxaddict", "digitaloten"]
openGraphImageUrl: "https://opengraph.githubassets.com/0dd4ba25dcc0610ec03c56a87953450ab361efe1a8b35e44d6fdd64f69b13793/kryptic-sh/infr"
fundingLinks: ["GITHUB:https://github.com/mxaddict", "KO_FI:https://ko-fi.com/mxaddict"]
---

# infr

Pure-Rust LLM inference engine. Vulkan-first, built to run on any mainstream
GPU.

> Early WIP. The only non-Rust parts are the GPU driver calls (Vulkan via `ash`)
> and the compute shaders (SPIR-V).

## Goal

A from-the-metal inference server that works across AMD / NVIDIA / Intel
(Vulkan) and Apple (MoltenVK), with native backends addable later behind a
`Compute` trait.

## Status

Runs **Llama / Qwen2 / Qwen3** (dense), **Gemma 3** (dense, sliding-window
attention + QK-norm + GeGLU), and **Gemma 4** (per-layer heterogeneous head
dims, proportional RoPE, V-norm, per-layer output scale — including the **E2B**
variant: per-layer input embeddings, per-layer FFN widths, KV-layer sharing) on
the Vulkan backend, competitive with llama.cpp at long context (`infr compare`).
**Qwen3.5 / Qwen3.6** (`qwen35` — hybrid gated-DeltaNet + attention, a sibling
of Qwen3-Next) run on the same unified runner, CPU + Vulkan (`docs/qwen35.md`).
**DiffusionGemma** (the original target — block text-diffusion MoE on a Gemma-4
backbone, entropy-bound denoise decode) runs end-to-end on CPU + Vulkan
(`docs/diffusion-gemma.md`).

```bash
infr pull   <model-ref>        # org/repo[:quant] (HuggingFace)…
