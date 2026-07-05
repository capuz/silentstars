---
repo: "StuartSul/gpu-experiments"
name: "gpu-experiments"
description: "A collection of GPU experiments and benchmarks for my personal understanding and research."
readmeQualityOk: true
url: "https://github.com/StuartSul/gpu-experiments"
language: "Cuda"
languages: ["Cuda", "Jupyter Notebook"]
languagePcts: [61, 25]
stars: 32
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-07-09T20:02:23Z"
lastCommitAt: "2026-07-05T20:18:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 52
maintainers: ["StuartSul"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2093965fae17c5ee8b64ea61371c233dd7f5024feecf184b8862b6cef243199/StuartSul/gpu-experiments"
---

# GPU Experiments

A collection of GPU experiments and benchmarks for my personal understanding and research.

## Requirements

- ThunderKittens
- CUDA 12.8+
- NVIDIA Hopper (H100), Blackwell (B200), or Blackwell Ultra (B300) GPUs
- Python 3.11+ with PyTorch 2.8+ and pybind11

## How to Run

1. Run `git submodule update --init --recursive`.
2. In the desired subdirectory, edit the Makefile to target the correct source file, build configuration, and run settings.
3. Run `make run`.

## Organization

- `hopper/`: Experiments targeting H100s
- `blackwell/`: Experiments targeting B200s
- `blackwell-ultra/`: Experiments targetting (G)B300s

## Note

I try my best to keep things organized, but please don’t expect perfect structure / accurate comments / fully working code / etc. Sometimes I make incorrect observations, realize the mistake later, and forget to update the code that led to it.
