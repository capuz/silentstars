---
repo: "SlyBase/vllm-sly-radiance"
name: "vllm-sly-radiance"
description: "Working on the fastet vllm path for AMD Radeon AI PRO R9700"
readmeQualityOk: true
url: "https://github.com/SlyBase/vllm-sly-radiance"
language: "Python"
languages: ["Python", "HIP"]
languagePcts: [55, 20]
topics: ["amd", "r9700", "rocm", "vllm"]
stars: 30
forks: 4
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-09-13T20:07:42Z"
lastCommitAt: "2026-10-02T09:59:55Z"
lastReleaseAt: "2026-10-02T07:48:56Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 42
maintainers: ["slydlake", "kore-bot", "sly-kore[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/494efcaf2a2d05a377ebf838c38142f3a511362280be157786d64966f7e93d6a/SlyBase/vllm-sly-radiance"
---

# vllm-sly-radiance

**The fastest way to run Qwen3.8-27B on one AMD Radeon AI PRO R9700.** A vLLM image for gfx1201 (RDNA4)
with hand-written MXFP4 kernels, DFlash2 speculative decoding and the full 262k context on a single
32 GB card: **~133 tok/s single-stream decode, ~3,200 tok/s prefill, 410 tok/s at 8
concurrent requests**, with every number measured and reproducible.

```bash
docker pull ghcr.io/slybase/vllm-sly-radiance:0.4.0-rocm10.0
```

## Tech stack

| Layer | Version |
|---|---|
| GPU | AMD Radeon AI PRO R9700, 32 GB, gfx1201 (RDNA4) — one card; TP 2/3/4/8 paths included but untested here |
| ROCm | 10.0 (`rocm/dev-ubuntu-24.04:10.0.0-full`, pruned to gfx1201) |
| PyTorch / Triton / torchvision | 2.14.0 / 3.8.0 / 0.29.0, built from source for gfx1201 |
| vLLM | 0.30.0 (V1 engine, V2 model runner), built from source |
| AITER / transformers | 0.1.22.post1 / 5.17.0 |
| Kernels | [libr4d](https://codeberg.org/StillDeadcode/libr4d) (attention, gated delta net, all-reduce) + this repo's MXFP4 W4A8 GEMM, fused norm/quant, attention tunes |
| Model | [`amd/Qwen3.8-27B-Quark-AWQ-MXFP4`](https://huggingface.co/amd/Qwen3.8-27B-Quark-AWQ-MXFP4) (Quark MXFP4, gated-delta-net…
