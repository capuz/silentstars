---
repo: "AccelProf/AccelProf"
name: "AccelProf"
description: "A modular program analysis tool framework for accelerators (NVIDIA, AMD, and DL workloads)."
readmeQualityOk: true
url: "https://github.com/AccelProf/AccelProf"
homepage: "https://accelprofdocs.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["accelerators", "cuda", "dl-framework", "profiling-library", "rocm", "performance-analysis", "performance-monitoring"]
stars: 25
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-05-30T21:21:55Z"
lastCommitAt: "2026-07-04T22:51:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 47
maintainers: ["Lin-Mao", "FlagZhao"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebdb0e21af0db589836e16216213f92baf57e234b7e5ba8b2f22038a4c8ce67f/AccelProf/AccelProf"
---

------------------------------------------------------------

# AccelProf

A Modular Program Analysis Tool Framework for Emerging Accelerators.

## Overview

**AccelProf** is a modular program analysis framework for accelerator workloads spanning NVIDIA CUDA, AMD ROCm, and modern deep-learning systems. It abstracts over heterogeneous profiling APIs and deep-learning frameworks, providing a unified interface for capturing and analyzing runtime events at multiple levels. Its extensible architecture enables researchers and practitioners to rapidly prototype custom analysis tools with minimal overhead.

## Installation

```bash
# Download
git clone --recursive https://github.com/AccelProf/AccelProf.git
git submodule update --init --recursive

# Build and install
#   DEBUG=1: enable debug symbols (-g)
#   OPT_LVL=0|1|2|3: compiler optimization level
#   ENABLE_CS=1: enable Compute Sanitizer backend
#   ENABLE_NVBIT=1: enable NVBit backend
#   ENABLE_TORCH=1: enable PyTorch profiling
#   ENABLE_ROCM=1: enable ROCm backend
make \
    DEBUG=0 \
    OPT_LVL=0 \
    ENABLE_CS=0 \
    ENABLE_NVBIT=0 \
    ENABLE_TORCH=0 \
    ENABLE_ROCM=0

# Set env
export ACCEL_PROF_HOME=$(pwd)
export…
