---
repo: "BooBSD/Tsetlin.jl"
name: "Tsetlin.jl"
description: "The Fuzzy-Pattern Tsetlin Machine library, with zero external dependencies, performs blazingly fast."
readmeQualityOk: true
url: "https://github.com/BooBSD/Tsetlin.jl"
homepage: "https://arxiv.org/pdf/2508.08350"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["julia-language", "machine-learning", "multithreading", "tsetlin-machine", "text-generation", "performance", "hyperdimensional-computing", "vector-symbolic-architecture", "hdc", "vsa"]
stars: 87
forks: 8
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2024-04-06T22:13:27Z"
lastCommitAt: "2026-09-27T09:27:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 40
maintainers: ["BooBSD"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb69951cf854aa2b4904d13261f8ef5889d4d3f78d49810c604a2cdf1f36fae0/BooBSD/Tsetlin.jl"
---

# Tsetlin Machine: Fresh Thinking in ML

> *Speed is the most important feature.*

*Fred Wilson*

This repository provides an alternative [Fuzzy-Pattern Tsetlin Machine](https://github.com/BooBSD/FuzzyPatternTM) implementation with zero external dependencies and blazingly fast performance.
Achieves **38 million** MNIST predictions per second at 98% accuracy with **4.8 GB/s** throughput on a desktop CPU and demonstrates the first Tsetlin Machine–based **text generation** example.

## Key Features

  - Up to **15× faster training** and **41× faster inference** compared to the original FPTM implementation, achieved through the use of bitwise operations, SIMD instructions, and a specialized memory layout.
  - Binary classifier.
  - Multi-class classifier.
  - Single-threaded and multi-threaded training and inference.
  - Specialized **BitSet index** over literals to improve performance on very large, sparse binary vector inputs.
  - Model compilation to reduce memory usage and increase inference speed.
  - Save and load trained models for production deployment or continued training with modified hyperparameters.
  - Automatic selection of `UInt8` or `UInt16` Tsetlin Automata based on…
