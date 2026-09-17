---
repo: "star7code/minimax-h3-fp16-exact-star7"
name: "minimax-h3-fp16-exact-star7"
description: "A ComfyUI node providing an FP16 compatibility path for MiniMax H3 on NVIDIA Turing GPUs such as the RTX 2080 Ti."
readmeQualityOk: true
url: "https://github.com/star7code/minimax-h3-fp16-exact-star7"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T15:51:42Z"
lastCommitAt: "2026-09-17T08:51:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 28
maintainers: ["star7code"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c92b2f0f26473d1ae1be5dede6398b8016f88681695ca598dcc6226743dd4ab/star7code/minimax-h3-fp16-exact-star7"
---

# MiniMax H3 FP16 Exact Fix - Star7

[中文说明](#中文说明) · [English](https://github.com/star7code/minimax-h3-fp16-exact-star7/blob/HEAD/README_EN.md) · [示例工作流](https://github.com/star7code/minimax-h3-fp16-exact-star7/blob/HEAD/examples/workflows)

Native FP16 model loading and scoped numerical protection for ComfyUI MiniMax H3 on pre-BF16 architectures. On SM80+, the loader explicitly corrects H3 to native BF16 even when the launcher globally requests FP16. Quantized checkpoints retain eligible INT8/ConvRot kernels instead of being expanded into dense FP16 weights.

The overflow-protection method is derived from the MIT-licensed [Amduraznak/minimax-h3-fp16-fix](https://github.com/Amduraznak/minimax-h3-fp16-fix). This package provides a native MiniMax H3 loader, quantization-aware dispatch, architecture checks, scoped ModelPatcher integration, diagnostics, and ComfyUI workflow support.

## 中文说明

本项目为 MiniMax H3 提供原生 FP16 模型载入和数值保护，主要面向 RTX 20 系（Turing）及其他缺少原生 BF16 Tensor Core 加速的显卡；SM80+ 会自动纠正为原生 BF16。

推荐使用 `MiniMax H3 Native FP16 Loader - Star7` 载入扩散模型。它在模型创建阶段确定 FP16 计算类型，同时保留原生 MixedPrecisionOps 的 INT8/ConvRot 权重布局，并在推理前安装 MiniMax H3 的 FP16 溢出保护。

对于量化模型，保留 INT8/ConvRot…
