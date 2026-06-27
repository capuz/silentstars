---
repo: "MeridianAlgo/FinAI"
name: "FinAI"
description: "We are researching and developing our own in-house LLM, which will be focused on finance-based chats and requests."
url: "https://github.com/MeridianAlgo/FinAI"
homepage: "https://huggingface.co/meridianal/FinAI"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["meridianalgo", "finance-llm", "financial-information", "huggingface", "machine-learning"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 20
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2025-11-02T21:32:58Z"
lastCommitAt: "2026-06-27T06:24:51Z"
lastReleaseAt: "2026-06-05T19:31:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 73
maintainers: ["actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1088385731/89f1d37d-faf7-441a-839f-43109b85ceda"
discussionCount: 1
---

# Meridian.AI — Continual-Learning Finance LLM

Meridian.AI is a finance-specialized language model that trains itself continuously, every hour, entirely on free GitHub Actions infrastructure. It continuously fine-tunes a **Qwen2.5-0.5B** backbone on 25+ finance and math datasets using **Elastic Weight Consolidation (EWC)** to prevent catastrophic forgetting across training sessions.

> **Status: `v1.0.0` — Production.** This is the first production-grade release. All earlier tagged builds (`v1.0.0-smollm2`, `v2.0.0-qwen`, `v5.1.0`, `v5.1.1`, `v6.0.0`) were pre-production test/research iterations and have been retired — see the [CHANGELOG](docs/CHANGELOG.md) for the full history.

**Model checkpoints:** [huggingface.co/meridianal/FinAI](https://huggingface.co/meridianal/FinAI)

> **What this is, clearly:** Qwen2.5-0.5B (a 494M-parameter causal LM from Alibaba) continuously fine-tuned on finance data via hourly GitHub Actions CI. The `meridian/` module in this repo contains a custom Sparse MoE research architecture used for experiments and smoke tests — it is **not** what is deployed in the HuggingFace checkpoint.

---

## Table of Contents

- [Why Meridian.AI](#why-meridianai)
-…
