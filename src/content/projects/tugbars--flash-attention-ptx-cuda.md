---
repo: "Tugbars/Flash-Attention-PTX-CUDA"
name: "Flash-Attention-PTX-CUDA"
description: "Hand-written PTX flash attention kernel hitting 183 TFLOPS FP16 (78% of theoretical peak) on RTX 5080, matching A100's Flash Attention 2 without WGMMA, TMA, or datacenter hardware."
url: "https://github.com/Tugbars/Flash-Attention-PTX-CUDA"
language: "Cuda"
languages: ["Cuda"]
languagePcts: [82]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-21T01:15:22Z"
lastCommitAt: "2026-07-03T12:23:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 30
maintainers: ["Tugbars"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8af19a02ab884282254b55a9515473e339113e94978dd0d2a9eaa9407272efb/Tugbars/Flash-Attention-PTX-CUDA"
---

</p>

<h1 align="center">Flash Attention PTX/CUDA</h1>

  <strong>Hand-written PTX flash attention kernel achieving 170+ TFLOPS on RTX 5080</strong><br>
  up to 78% of theoretical peak · 65× faster than scalar baseline · no WGMMA, no TMA, no shortcuts
</p>

</p>

---

## What is this?

A from-scratch flash attention implementation in raw CUDA/PTX targeting consumer NVIDIA GPUs (RTX 5080, Blackwell sm_120). No libraries, no CUTLASS attention wrappers, no cuDNN — just hand-written kernels optimized step by step from 2.7 TFLOPS to 170+ TFLOPS.

The kernel uses PTX inline assembly for `mma.sync.aligned.m16n8k16` tensor core operations with `ldmatrix` for optimal shared memory → register transfers, and performs the full softmax **in registers** using warp shuffle intrinsics, eliminating the largest shared memory bottleneck in standard flash attention implementations.

Consumer Blackwell (sm_120) lacks the datacenter features that make H100/B200 attention kernels fast: no WGMMA (warp group MMA), no TMA (tensor memory accelerator), no warp specialization barriers. This kernel achieves competitive utilization using only the tools available on consumer silicon.

## Performance

</p>…
