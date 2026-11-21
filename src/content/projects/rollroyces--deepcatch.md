---
repo: "rollroyces/deepcatch"
name: "deepcatch"
description: "DeepCatch: performance-weighted multi-modal fusion for ultra-early cfDNA cancer detection. Fragmentomics, methylation, sequence."
readmeQualityOk: true
url: "https://github.com/rollroyces/deepcatch"
homepage: "https://rollroyces.github.io/deepcatch/"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["cancer-detection", "cfdna", "deep-learning", "fragmentomics", "methylation", "multimodal", "benchmarking", "bioinformatics", "early-detection", "liquid-biopsy"]
stars: 89
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-28T13:05:46Z"
lastCommitAt: "2026-11-21T13:32:05Z"
lastReleaseAt: "2026-08-11T07:31:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 32
maintainers: ["rollroyces"]
openGraphImageUrl: "https://opengraph.githubassets.com/46746a19e1817938a85887987324e6b4e5a1c2ed8fc766caf2a6ada82ab4eec7/rollroyces/deepcatch"
fundingLinks: ["GITHUB:https://github.com/rollroyces"]
discussionCount: 0
---

> **⚠️ STATUS: research-use-only software benchmark.** NOT clinically validated. NOT a medical device. NOT FDA-approved. NOT production-ready.
> Headline: open-data cross-study AUC **0.9684 ± 0.0027** on FinaleDB publications 6+8 (n=627) with default GC correction (legacy baseline 0.9770 is inflated by ~0.009 of GC-axis proxy detection; both numbers reported in the table below). True-confound control collapses to ~0.48 — see [`docs/CROSS_STUDY_BENCHMARK.md`](https://github.com/rollroyces/deepcatch/blob/HEAD/docs/CROSS_STUDY_BENCHMARK.md).
> Publication-by-publication readiness (FinaleDB API/S3 status) in [`docs/PUBLICATION_READINESS.md`](https://github.com/rollroyces/deepcatch/blob/HEAD/docs/PUBLICATION_READINESS.md).
> External validation on held-out public publications (never trained on): **AUC 0.9444** [0.8731, 1.0] on FinaleDB publication 7 (WGS, n=31), 0.708 on publication 1 (WGS, n=52), 0.7385 pooled over the publications carrying both classes. Transfer between whole-genome studies is real but far from uniform. The pooled 0.968 is a *within-cohort* number — leave-one-study-out gives 0.6805.
