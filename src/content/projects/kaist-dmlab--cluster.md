---
repo: "kaist-dmlab/CluSTER"
name: "CluSTER"
description: "[EMNLP 2026] Clustering-Based Balanced Sampling and Allocation with Data Parallelism for High-Performance Fine-Tuning"
readmeQualityOk: true
url: "https://github.com/kaist-dmlab/CluSTER"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 20
forks: 16
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-24T07:59:06Z"
lastCommitAt: "2026-11-16T11:57:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 55
maintainers: ["Hyunjin1228"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3c903388473d5cf759376555d7d170519fa2a046ab0b719ded5d1fc5d74717c/kaist-dmlab/CluSTER"
---

# Clustering-Based Balanced Sampling and Allocation with Data Parallelism for High-Performance Fine-Tuning
This repository contains the official implementation of "<em>Clustering-Based Balanced Sampling and Allocation with Data Parallelism for High-Performance Fine-Tuning</em>," accepted to EMNLP 2026.

    🖇️&nbsp;<a href="#-overview">Overview</a>
    | 👀&nbsp;<a href="#-installation">Installation</a>
    | 📚&nbsp;<a href="#-dataset">Dataset</a>
    | 🚀&nbsp;<a href="#-training">Training</a>
    | 📝&nbsp;<a href="#-citation">Citation</a>
    | 🙏&nbsp;<a href="#-acknowledgements">Acknowledgements</a>

## 🖇️ Overview
**CluSTER** is a cluster-aware data reduction framework for efficient LLM instruction tuning that jointly coordinates data selection, data-parallel worker allocation, and gradient aggregation using target-model gradient structure, enabling substantial reductions in training data and computation while maintaining performance close to full-data fine-tuning.

**CluSTER** consists of three main components:
1. **Gradient-based semantic clustering**: Training samples are organized according to lightweight gradient representations obtained from the target model.
2.…
