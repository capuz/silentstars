---
repo: "CosmosYi/ReasoningShield"
name: "ReasoningShield"
description: "[NeurIPS 2026] ReasoningShield: Safety Detection over Reasoning Traces of Large Reasoning Models"
readmeQualityOk: true
url: "https://github.com/CosmosYi/ReasoningShield"
homepage: "https://cosmosyi.github.io/ReasoningShield/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [52, 42]
topics: ["ai-safety", "detection", "llm", "moderation", "reasoning-models", "safety", "neurips-2026"]
stars: 27
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-12T07:21:29Z"
lastCommitAt: "2026-11-05T11:25:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 38
maintainers: ["CosmosYi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a04f548e9979ff47c572df50173275b51209ec364bab7ab7697a8773c03cf0db/CosmosYi/ReasoningShield"
---

Jiayi Wang ·
  &nbsp;&nbsp;&nbsp;&nbsp;

  
  
  
  
    
  

## 💡 Overview

Large Reasoning Models (LRMs) may include unsafe content in intermediate reasoning steps even when their final answers appear safe. _ReasoningShield_ detects these risks in Chain-of-Thought (CoT) traces. The paper contributes:

- A taxonomy of **10 risk categories** and **3 safety levels**.
- A **9.2K-pair** benchmark with 7K training samples and 2.2K human-annotated test samples.
- **1B and 3B** moderation models trained with structured risk analysis and contrastive learning.

In the paper's evaluation, ReasoningShield-3B reaches **91.8% average F1 on open-source LRM subsets** (Table 2). Figure 4 reports **89.1% F1** in its CoT moderation comparison. These numbers summarize different evaluation scopes; see the [paper](https://arxiv.org/abs/2505.17244) for the benchmark splits and baselines.

## 📁 Project Structure

```
ReasoningShield/
├── reasoningshield/                  # Inference scripts and moderation prompt
├── reasoningshield_Dataset/
│   ├── reasoningshield-train/        # Stage 1 SFT and Stage 2 DPO data
│   └── reasoningshield-test/
│       ├── qa/test_qa.csv            # Answer moderation…
