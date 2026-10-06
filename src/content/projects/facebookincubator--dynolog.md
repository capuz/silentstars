---
repo: "facebookincubator/dynolog"
name: "dynolog"
description: "Dynolog is a telemetry daemon for performance monitoring and tracing. It exports metrics from different components in the system like the linux kernel, CPU, disks, Intel PT, GPUs etc. Dynolog also integrates with pytorch and can trigger traces for distributed training applications."
readmeQualityOk: true
url: "https://github.com/facebookincubator/dynolog"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 385
forks: 91
openIssues: 13
closedIssues: 24
watchers: 15
contributors: 44
recentReleases: 0
createdAt: "2022-07-26T03:33:49Z"
lastCommitAt: "2026-10-06T10:37:33Z"
lastReleaseAt: "2025-05-13T18:53:59Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 35
maintainers: ["DuoYi", "abhiShedge", "cmgrace"]
openGraphImageUrl: "https://opengraph.githubassets.com/861250120da2bb27a1d4ce7f274c9f44fd3911c8805d86a425b29f76230a8f0f/facebookincubator/dynolog"
---

# Dynolog: a performance monitoring daemon for heterogeneous CPU-GPU systems

## Introduction

Dynolog is a lightweight monitoring daemon for heterogeneous CPU-GPU systems. It supports both **always-on performance monitoring**, as well as **deep-dive profiling** modes. The latter can be activated by making a remote procedure call to the daemon.

Below are some of the key features, which we will explore in more detail later in this Readme.
* Dynolog integrates with the [PyTorch Profiler](https://pytorch.org/tutorials/recipes/recipes/profiler_recipe.html) and provides **[on-demand remote tracing features](https://pytorch.org/blog/performance-debugging-of-production-pytorch-models-at-meta/).** One can use a single command line tool (dyno CLI) to **simultaneously trace hundreds of GPUs** and examine the collected traces (available from PyTorch v1.13.0 onwards).
* It incorporates **[GPU performance monitoring](#gpu-monitoring)** for NVIDIA GPUs using [DCGM](https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/index.html#).
* Dynolog manages counters for **micro-architecture specific performance events** related to CPU Cache, TLBs etc on **Intel** and **AMD** CPUs. Additionally, it…
