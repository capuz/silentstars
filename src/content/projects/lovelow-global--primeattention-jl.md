---
repo: "LoveLow-Global/PrimeAttention.jl"
name: "PrimeAttention.jl"
description: "Sparse Attention using Number Theory"
readmeQualityOk: true
url: "https://github.com/LoveLow-Global/PrimeAttention.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-12-06T20:51:09Z"
lastCommitAt: "2026-11-26T15:22:59Z"
lastReleaseAt: "2026-11-22T12:14:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 55
maintainers: ["LoveLow-Global", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9437763ebe47aa513c7f50ab43cff5a99cca171e148ad46ce8effbe66511616/LoveLow-Global/PrimeAttention.jl"
---

# PrimeAttention.jl

A sparse, number-theoretic attention mechanism library for [Lux](https://github.com/LuxDL/Lux.jl).

Julia 1.11 required, 1.12 or higher recommended.

## Overview

**PrimeAttention.jl** provides sparse attention layers that leverage number-theoretic sequences to define connectivity patterns. By using mathematical sequences instead of dense matrices or random sparsity, these layers achieve long-range dependencies with significantly lower computational complexity than standard $O(N^2)$ Transformers.

Inspired by architectures like [BigBird](https://arxiv.org/abs/2007.14062), this package implements a hybrid mechanism that combines three strategies:
1.  **Global Tokens:** For sequence-wide context summaries.
2.  **Sliding Window:** For local syntax and immediate context.
3. **Theoretic Intervals:** Sparse long-range connections based on Primes, Squares, or the Mian-Chowla sequence.

## Usage

The package provides factory functions that return a `SparseIndexAttention` layer. Because this library is built on **Lux.jl**, it utilizes explicit parameter and state management.

Here is a simple example:
