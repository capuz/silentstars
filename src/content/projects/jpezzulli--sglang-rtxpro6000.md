---
repo: "jpezzulli/sglang-rtxpro6000"
name: "sglang-rtxpro6000"
description: "Optimized SGLang runtime for Qwen3.8-27B FP8 with DFlash2 and Qwen3.8 Flash-Next NVFP4 with FR-Spec on one NVIDIA RTX PRO 6000 Blackwell 96 GB GPU (SM120): 524K context, HiCache and NIXL."
readmeQualityOk: true
url: "https://github.com/jpezzulli/sglang-rtxpro6000"
homepage: "https://msoexpert.com"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["blackwell", "dflash2", "fp8", "hicache", "llm-inference", "local-llm", "long-context", "nixl", "nvfp4", "qwen"]
stars: 175
forks: 26
openIssues: 3
closedIssues: 41
watchers: 5
contributors: 1900
recentReleases: 10
createdAt: "2026-08-25T00:13:31Z"
lastCommitAt: "2026-10-23T08:47:06Z"
lastReleaseAt: "2026-09-16T22:10:23Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 36
maintainers: ["jpezzulli", "jhsmith409", "arathi-hlab"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fe9fa29afebcffac4a5f978300cc9c509cece3f85836473b57fe920fd383922/jpezzulli/sglang-rtxpro6000"
discussionCount: 1
---

# Penny Royal — Qwen3.8 on RTX PRO 6000

Run long conversations, coding agents, and tool-heavy workflows on your own
hardware. Penny Royal is an SGLang-derived runtime tuned for **NVIDIA RTX PRO
6000 Blackwell (SM120), with one card (TP1) or two (TP2)**.

**Persistent conversation caching is at the heart of Penny.** HiCache and NIXL
keep reusable state in system RAM and on NVMe, beyond what fits on the GPU,
so long-running sessions can pick up from cached history.

**524K context · HiCache + NIXL · FR-Spec · FlashInfer verification · DFlash2**

[Get started](#build-and-launch) · [Conversation cache](#hicache-and-nixl) ·
[Performance](#performance) ·
[3.1.2 release notes](https://github.com/jpezzulli/sglang-rtxpro6000/blob/HEAD/RELEASE_NOTES_3.1.2.md) · [Community results](https://github.com/jpezzulli/sglang-rtxpro6000/blob/HEAD/COMMUNITY-RESULTS.md)

**Penny Royal 3.1:** Flash-Next runs native NEXTN MTP with FR-Spec as the
maintained default profile, with automatic KV pool sizing replacing the preset
cap; Flash-Next DFlash2 with a separate draft model, fixed concurrency
width routing (block 6 for one request, block 4 for two or more) and
FlashInfer draft-token verification is an…
