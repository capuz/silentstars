---
repo: "dronperminov/FastMatrixMultiplication"
name: "FastMatrixMultiplication"
description: "Research of fast matrix multiplication schemes in small formats from (2, 2, 2) to (16, 16, 16)"
readmeQualityOk: true
url: "https://github.com/dronperminov/FastMatrixMultiplication"
language: "Wolfram Language"
languages: ["Wolfram Language"]
languagePcts: [81]
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-11-16T15:39:55Z"
lastCommitAt: "2026-07-04T22:19:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["dronperminov"]
openGraphImageUrl: "https://opengraph.githubassets.com/e476dd13fc3de65b89ab4935cb2ac3702c715b9e9c216f6fa9c00c9026c39b44/dronperminov/FastMatrixMultiplication"
---

# FastMatrixMultiplication

A research project investigating fast matrix multiplication algorithms for small matrix formats, from `2x2x2` to `16x16x16`. The primary goal is to discover efficient schemes
with coefficients restricted to the ternary set `{-1, 0, 1}`, focusing on all tensor shapes satisfying `max(n₁, n₂, n₃) ≤ 16`.

## Overview
This repository documents the search for fast matrix multiplication (FMM) schemes using a custom meta flip graph method. The search focuses on schemes that use only the
coefficients `-1`, `0`, and `1`, denoted as `ZT`. This constraint is significant for practical implementations where computational complexity and hardware efficiency are critical.

Key insight: several known optimal schemes originally found over the rationals (`Q`) or integers (`Z`) have been successfully rediscovered with minimal, ternary
coefficients. This can lead to more efficient and hardware-friendly implementations.

## Latest progress

For a detailed history of discoveries and improvements, see the [CHANGELOG.md](CHANGELOG.md).

## Publications

* [Fast Matrix Multiplication via Ternary Meta Flip Graphs](https://arxiv.org/abs/2511.20317) (arxiv)
* [Parallel Heuristic…
