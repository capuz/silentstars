---
repo: "MeridianAlgo/FinAI"
name: "FinAI"
description: "We are researching and developing our own in-house LLM, which will be focused on finance-based chats and requests."
readmeQualityOk: true
url: "https://github.com/MeridianAlgo/FinAI"
homepage: "https://huggingface.co/meridianal/FinAI"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["meridianalgo", "finance-llm", "financial-information", "huggingface", "machine-learning"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 21
watchers: 2
contributors: 3
recentReleases: 4
createdAt: "2025-11-02T21:32:58Z"
lastCommitAt: "2026-07-30T06:07:40Z"
lastReleaseAt: "2026-07-21T18:05:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 76
maintainers: ["actions-user", "MeridianAlgo-Developer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1088385731/89f1d37d-faf7-441a-839f-43109b85ceda?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T061058Z&X-Amz-Expires=300&X-Amz-Signature=57a678a5f6e627db6ecf3dbb04df48056cb330ce606e751e3d9bdec8cfcf07da&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjE1OCwibmJmIjoxNzg1MzkxODU4LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.Wu5dc-9aDXc9OcroDAykvE-Tobedu2qOTEVNLpcWjSY"
discussionCount: 1
---

# Meridian.AI — Continual-Learning Finance LLM

Meridian.AI is a finance-specialized language model that trains itself continuously, every hour, entirely on free GitHub Actions infrastructure. It continuously fine-tunes a **Qwen2.5-0.5B** backbone on 25+ finance and math datasets using **Elastic Weight Consolidation (EWC)** to prevent catastrophic forgetting across training sessions.

> **Status: `v1.0.0` — Production.** This is the first production-grade release. All earlier tagged builds (`v1.0.0-smollm2`, `v2.0.0-qwen`, `v5.1.0`, `v5.1.1`, `v6.0.0`) were pre-production test/research iterations and have been retired — see the [CHANGELOG](https://github.com/MeridianAlgo/FinAI/blob/HEAD/docs/CHANGELOG.md) for the full history.

**Model checkpoints:** [huggingface.co/meridianal/FinAI](https://huggingface.co/meridianal/FinAI)

> **What this is, clearly:** Qwen2.5-0.5B (a 494M-parameter causal LM from Alibaba) continuously fine-tuned on finance data via hourly GitHub Actions CI. The `meridian/` module in this repo contains a custom Sparse MoE research architecture used for experiments and smoke tests — it is **not** what is deployed in the HuggingFace checkpoint.

---

## Table of…
