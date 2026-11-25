---
repo: "tensorfish/squid5090"
name: "squid5090"
description: "Highly Optimized Inference Engine for Inkling Mini 2 on NVIDIA 5090"
readmeQualityOk: true
url: "https://github.com/tensorfish/squid5090"
language: "Cuda"
languages: ["Cuda", "Zig"]
languagePcts: [47, 42]
stars: 208
forks: 27
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-11-23T06:39:43Z"
lastCommitAt: "2026-11-25T03:14:18Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 60
undervaluedScore: 15
maintainers: ["tensorfish"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcf3f4c7343ceff740064581a5b5d9fa0bdd5d537f2116ff51342211a263393e/tensorfish/squid5090"
---

# squid5090

**A single-binary, zero-Python TigerStyle Zig + Blackwell CUDA (`sm_120a`) inference engine and OpenAI-compatible HTTP/SSE server for [`thinkingmachines/Inkling-2-Mini`](https://huggingface.co/thinkingmachines/Inkling-2-Mini) on an NVIDIA RTX 5090.**

> **Upfront Attribution:** Several core Blackwell kernel designs and features in `squid5090` — including Programmatic Dependent Launch (PDL) overlap, 16-CTA cluster DSMEM/`mbarrier` BF16 controllers & router, 1-launch cluster DSMEM decode attention (`attn_cluster_decode_kernel`), spill-free 16-column `U=3` FP8/NVFP4 `mma.m16n8k16` GEMVs & LM-head, 128-CTA multi-block stochastic LM-head sampling with 64-bit Gumbel, Top-K `1024` radix Markov drafting with a dynamic context shortlist, the `128×128×64` `cp.async` MoE prefill pipeline, device-side `{2, 4, 8}` CUDA Graph conditional switch drafting (`cudaGraphCondTypeSwitch`), and the 1.8 MB runtime-gated Fisher-LDA abliteration format & tooling — were adapted from [`satellitedown/inkling-2-mini-abliterated-ingine`](https://github.com/satellitedown/inkling-2-mini-abliterated-ingine) (Apache-2.0).
