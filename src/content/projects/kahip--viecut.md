---
repo: "KaHIP/VieCut"
name: "VieCut"
description: "Shared-memory parallel minimum cut algorithms (inexact, exact, cactus, multiterminal)"
readmeQualityOk: true
url: "https://github.com/KaHIP/VieCut"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["minimum-cut-algorithm", "cut", "multiterminal-cuts", "graph", "graph-cut", "parallel", "algorithms", "graphs", "algorithm", "efficient-algorithm"]
stars: 49
forks: 12
openIssues: 2
closedIssues: 6
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2017-03-03T14:16:30Z"
lastCommitAt: "2026-11-17T12:20:54Z"
lastReleaseAt: "2026-03-10T13:36:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 36
maintainers: ["schulzchristian"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/83805334/7a7b94f6-8a6c-4200-8120-1a378dd22aa8"
discussionCount: 1
---

VieCut 2.00
=====

**VieCut** is a library of shared-memory parallel algorithms for the minimum cut problem on undirected edge-weighted graphs. Part of the [KaHIP](https://github.com/KaHIP) organization.

> **Python Interface:** An easy-to-use Python interface for this software is available in [CHSZLabLib](https://github.com/CHSZLab/CHSZLabLib).

| | |
|:--|:--|
| **What it solves** | Find the minimum edge cut that separates a graph into two (or more) components |
| **Algorithms** | Inexact heuristic (VieCut), exact parallel (NOI-based), cactus representation, multiterminal cut |
| **Parallelism** | Shared-memory via OpenMP; sequential versions included |
| **Interfaces** | CLI |
| **Requires** | C++17 compiler, CMake 3.9+, OpenMP, MPI (multiterminal cut only) |

## News

**November 17, 2026 — We released VieCut 2.0.** The exact minimum cut is substantially faster with no change to any computed cut: a geometric mean of 8.9x on one thread and 8.8x on 32 threads over a 53-instance benchmark, and the parallel exact path now solves large-cut instances that previously ran out of memory. The changes were produced with Agentic Algorithm Engineering; the public interface is unchanged. See…
