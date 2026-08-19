---
repo: "Wz1h1NG/AffectAgent"
name: "AffectAgent"
description: "Official code repository for the AffectAgent"
readmeQualityOk: true
url: "https://github.com/Wz1h1NG/AffectAgent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 107
forks: 0
openIssues: 2
closedIssues: 0
watchers: 13
contributors: 1
recentReleases: 0
createdAt: "2026-04-14T12:19:50Z"
lastCommitAt: "2026-08-19T04:10:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 45
undervaluedScore: 2
maintainers: ["Wz1h1NG"]
openGraphImageUrl: "https://opengraph.githubassets.com/c872e7fe44d8d690cc61d99e79524f64d72cfe49f1dfe253fd58bf22c8f0bf87/Wz1h1NG/AffectAgent"
---

# AffectAgent

Official implementation of **AffectAgent: Collaborative Multi-Agent Reasoning for Retrieval-Augmented Multimodal Emotion Recognition** (ACM Multimedia 2026).

AffectAgent combines a shared multimodal language model with three collaborative roles (Query Planner, Evidence Filter, and Emotion Generator), a frozen dual-channel retriever, Retrieval-Augmented Adaptive Fusion (RAAF), and a Modality-Balancing Mixture of Experts (MB-MoE). The trainable components are optimized with a shared affective reward using the repository's MAPPO-style training loop.

Paper: [ACM DOI](https://doi.org/10.1145/3767308.3835848)

## Code-to-paper map

| Paper component | Implementation |
| --- | --- |
| Query Planner, Evidence Filter, Emotion Generator | `retrieval/mmoa_lite/prompts.py`, orchestrated by `MmoaOrchestrator.full_rollout` |
| Cognitive semantic retrieval | `DoubleChannelRetriever.retrieve_channel_A` |
| Perceptual audiovisual retrieval | `DoubleChannelRetriever.retrieve_channel_B` |
| RAAF | `SupportFusion` in `retrieval/mmoa_lite/fusion_modules.py` |
| MB-MoE | `ModalityMoE` in `retrieval/mmoa_lite/fusion_modules.py` |
| Shared and local affective rewards |…
