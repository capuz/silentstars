---
repo: "lEWFkRAD/qwen38-rtx-pro-6000"
name: "qwen38-rtx-pro-6000"
description: "Reproducible Qwen3.8 deployments on one RTX PRO 6000: Flash-Next W4 PLE, SGLang patches, benchmarks, and field reports."
readmeQualityOk: true
url: "https://github.com/lEWFkRAD/qwen38-rtx-pro-6000"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [52, 40]
topics: ["benchmarks", "blackwell", "llm-inference", "quantization", "qwen", "sglang"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-08-17T16:00:09Z"
lastCommitAt: "2026-11-04T11:27:10Z"
lastReleaseAt: "2026-11-03T22:40:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 29
maintainers: ["lEWFkRAD"]
openGraphImageUrl: "https://opengraph.githubassets.com/56e575dec91a79d216fe5f1ac5a9c2a2236733612b162b0ffe39f78fb0e85186/lEWFkRAD/qwen38-rtx-pro-6000"
---

**[Qwen3.8 · One RTX PRO 6000 project homepage](https://lewfkrad.github.io/qwen38-rtx-pro-6000/)** · [Documentation](https://github.com/lEWFkRAD/qwen38-rtx-pro-6000/blob/Cloud1/README.md)

Single-GPU inference reports, reproducibility artifacts, and experimental inspection tools.

# Qwen3.8 on a single RTX PRO 6000

Independent deployment reports, reproducibility artifacts, and benchmark
receipts for running large Qwen3.8 models and related inference experiments on one
NVIDIA RTX PRO 6000 Blackwell Workstation Edition.

## November 3 — 262K production context

The production default now configures eight 262,144-token sessions with resident
INT8 KV, all 24,576 GPU experts, matched vision and 8,192-token prefill chunks.
Seven normal production canaries passed, including a 259,999-token request and
its repeated prefix. Full eight-way deep generation remains unqualified; the
operator explicitly approved this default after those test limits were reported.
[Results, deployment and full test data](https://github.com/lEWFkRAD/qwen38-rtx-pro-6000/blob/HEAD/research/strata-context-262k/RESULTS.md).
A later credential update is approved and live; fresh recovery checks passed.
[Recovery…
