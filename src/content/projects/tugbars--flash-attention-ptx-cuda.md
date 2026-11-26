---
repo: "Tugbars/Flash-Attention-PTX-CUDA"
name: "Flash-Attention-PTX-CUDA"
description: "Hand-written PTX flash attention kernel reaching 218 TFLOPS FP16 on an RTX 5080: faster than vLLM 0.34's FlashAttention-2 on all 34 benchmarked shapes, without WGMMA, TMA, or datacenter hardware."
readmeQualityOk: true
url: "https://github.com/Tugbars/Flash-Attention-PTX-CUDA"
language: "Cuda"
languages: ["Cuda"]
languagePcts: [69]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T01:15:22Z"
lastCommitAt: "2026-11-26T23:31:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 28
maintainers: ["Tugbars"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9b5ecbf330f71bcbdc90b32863379179f16490d810b78cef6f96593fba60f75/Tugbars/Flash-Attention-PTX-CUDA"
---

faster than vLLM 0.34's FlashAttention-2 on all 34 benchmarked shapes · runs a real LLM end-to-end ahead of vLLM · no WGMMA, no TMA, no shortcuts

---

## What is this?

A from-scratch flash attention implementation in raw CUDA/PTX targeting consumer NVIDIA GPUs like RTX 5080 or 5090. No libraries, no CUTLASS attention wrappers, no cuDNN — just hand-written kernels optimized step by step from 2.7 TFLOPS to 218 TFLOPS, to the point of beating vLLM's FlashAttention-2 on every measured shape.

The kernel uses PTX inline assembly for `mma.sync.aligned.m16n8k16` tensor core operations with `ldmatrix` for optimal shared memory → register transfers, and performs the full softmax **in registers** using warp shuffle intrinsics, eliminating the largest shared memory bottleneck in standard flash attention implementations.

Consumer Blackwell (sm_120) lacks the datacenter features that make H100/B200 attention kernels fast: no WGMMA (warp group MMA), no TMA (tensor memory accelerator), no warp specialization barriers. This kernel achieves competitive utilization using only the tools available on consumer silicon.
