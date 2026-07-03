---
repo: "gregkseno/catsbench"
name: "catsbench"
description: " [ICLR 2026] A Benchmark for Categorical-State Schrödinger Bridges and Entropic Optimal Transport"
url: "https://github.com/gregkseno/catsbench"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [81]
topics: ["benchmark", "discrete-diffusion", "optimal-transport", "schrodinger-bridge", "entropic-optimal-transport"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-07-03T10:41:52Z"
lastCommitAt: "2026-07-03T12:40:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 43
maintainers: ["gregkseno", "LeonMeon", "Ark-130994"]
openGraphImageUrl: "https://opengraph.githubassets.com/3951b1b6bea4bdb1c5c3c8fbae3d5253304862006598f86879ec8d03f6facdf6/gregkseno/catsbench"
discussionCount: 0
---

# Entering the Era of Discrete Diffusion Models: A Benchmark for Schrödinger Bridges and Entropic Optimal Transport

[Xavier Aramayo](https://scholar.google.com/citations?user=1B9UIYoAAAAJ),
[Grigoriy Ksenofontov](https://scholar.google.com/citations?user=e0mirzYAAAAJ), [Aleksei Leonov](https://scholar.google.com/citations?user=gzj9nOcAAAAJ), [Iaroslav Koshelev](https://scholar.google.com/citations?user=gmaJRL4AAAAJ), [Alexander Korotin](https://scholar.google.ru/citations?user=1rIIvjAAAAAJ)

</div>

This repository contains the official implementation of the paper *"Entering the Era of Discrete Diffusion Models: A Benchmark for Schrödinger Bridges and Entropic Optimal Transport"*, accepted at **ICLR 2026**.

## 📌 TL;DR

This paper proposes a benchmark for entropic optimal transport (EOT) and Schrödinger Bridge (SB) methods on discrete spaces, and adapts several continuous EOT/SB approaches to the discrete setting.

## 📦 CatSBench (Package)

`catsbench` is the standalone benchmark package. It provides benchmark definitions, evaluation metrics, and reusable utilities, including a Triton-optimized log-sum-exp (LSE) matmul kernel.

### 📥 Installation

Install the benchmark package…
