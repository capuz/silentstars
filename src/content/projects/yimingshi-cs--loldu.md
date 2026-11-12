---
repo: "yimingshi-cs/LoLDU"
name: "LoLDU"
description: "Official implementation for LoLDU: Low-Rank Adaptation via Lower-Diag-Upper Decomposition for Parameter-Efficient Fine-Tuning"
readmeQualityOk: true
url: "https://github.com/yimingshi-cs/LoLDU"
homepage: "https://arxiv.org/abs/2410.13618"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [65, 35]
topics: ["lora", "peft", "fine-tuning"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-28T07:40:32Z"
lastCommitAt: "2026-11-12T11:39:37Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 36
maintainers: ["yimingshi-cs"]
openGraphImageUrl: "https://opengraph.githubassets.com/db75e856b3e00521c7147b140ad7784375756d779648e953abb2573d6534591d/yimingshi-cs/LoLDU"
---

# LoLDU: Low-Rank Adaptation via Lower-Diag-Upper Decomposition

LoLDU is a cutting-edge Parameter-Efficient Fine-Tuning (PEFT) technique designed to drastically reduce the number of trainable parameters while achieving performance levels comparable to full fine-tuning. This document outlines the steps required to integrate LoLDU into your projects effectively.

For further details, please refer to the paper: https://arxiv.org/pdf/2410.13618

## Table of Contents
1. [Installation](#installation)
2. [Key Features](#key-features)
3. [Quick Start](#quick-start)
4. [API Reference](#api-reference)
5. [Usage Examples](#usage-examples)
6. [Best Practices](#best-practices)

## Installation

To install LoLDU, simply use pip:

```bash
git clone https://github.com/yimingshi-cs/LoLDU
cd LoLDU
pip install -e .
```

## Key Features

- Significantly reduces the number of trainable parameters (up to 2600 times fewer than regular PEFT methods)
- Maintains performance comparable to full fine-tuning
- Leverages Lower-Diag-Upper Decomposition (LDU) for faster convergence and orthogonality
- Focuses on optimizing the diagonal matrix for scaling transformations
- Compatible with various model…
