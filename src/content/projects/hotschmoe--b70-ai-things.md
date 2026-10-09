---
repo: "hotschmoe/b70_ai_things"
name: "b70_ai_things"
description: "go team blue"
readmeQualityOk: true
url: "https://github.com/hotschmoe/b70_ai_things"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-18T06:17:45Z"
lastCommitAt: "2026-10-09T18:56:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 47
maintainers: ["hotschmoe"]
openGraphImageUrl: "https://opengraph.githubassets.com/0877e7434a42bd8e31f180bb47a7b809f5fa2fe48510449738306b85c234d5ca/hotschmoe/b70_ai_things"
---

# Intel Arc Pro B70 local inference lab

This repository is the clean working set for serving and kernel research on
two Intel Arc Pro B70 cards.

## Current scope

Primary backend: sglang.

Retained vLLM work: measured NVFP4 baselines and the recent Steve
reproduction/transfer controls.

Retained models:

- Qwen3.8-27B BF16
- Qwen3.8-27B RadixArk NVFP4
- Qwen3.8-27B compressed-tensors W8A8 GPTQ
- NVIDIA Qwen3.6-27B NVFP4
- Ornith-1.5-35B-A3B BF16+Shisa MTP, W8A8 RTN+Shisa MTP, NVFP4, and local
  GPTQ INT4 MixedCal-v2

ZML, llama.cpp, old model families, old W4 campaigns, raw historical results,
runtime build trees, and retired Docker images were moved out of the live tree
on 2026-08-26.

## Start here

- AGENTS.md: standing safety, scope, and workflow rules.
- RESEARCH_TODO.md: current clean-stack work order.
- FINDINGS.md: short current evidence ledger.
- JOURNAL.md: newest experiment window.
- docs/P2P_GPU.md: multi-GPU failure and recovery evidence.
- docs/20260825_steve_stack_component_ledger.md: exact Steve transfer ledger.
- docs/20260826_qwen36_graph_runtime_profile.md: graph/runtime boundary profile.
- docs/quant_methods.md: quantization method registry.
-…
