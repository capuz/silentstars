---
repo: "NVIDIA/cuCascade"
name: "cuCascade"
description: "GPU Memory Reservation Library"
readmeQualityOk: true
url: "https://github.com/NVIDIA/cuCascade"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 64
forks: 40
openIssues: 11
closedIssues: 19
watchers: 4
contributors: 25
recentReleases: 0
createdAt: "2025-12-15T17:53:16Z"
lastCommitAt: "2026-11-06T13:19:48Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 87
undervaluedScore: 48
maintainers: ["aminaramoon", "mbrobbel", "wmalpica"]
openGraphImageUrl: "https://opengraph.githubassets.com/95fac334cba6fb65793f287960e67fd83ecf562e39ed12a0fa7ff17131bfa11f/NVIDIA/cuCascade"
---

# cuCascade

A high-performance GPU memory management library for data-intensive applications requiring intelligent tiered memory allocation across GPU, host, and disk storage.

# Overview

**Key Features:**
- **Tiered Memory Management**: Seamlessly manage GPU (fastest), pinned host (medium), and disk (largest capacity) memory tiers, provides numa aware allocators
- **Memory Reservation System**: Avoid oversubscribing your GPU by making reservations and using allocators that respect reservations
- **Hardware Topology Discovery**: Automatic detection of NUMA regions and GPU-CPU affinity for optimal memory placement
- **Stream-Aware Tracking**: Per-stream memory usage tracking and reservation enforcement
- **cuDF Integration**: Native support for GPU DataFrames with batch processing capabilities and spilling to Host or Disk
- **Pluggable Policies**: Control what happens when you OOM, try to allocate more than a reservation, how you pick what data to spill, by creating policies that plug into the system.

# Getting Started

```bash
# Option A: Using Pixi (recommended)
curl -fsSL https://pixi.sh/install.sh | bash
git clone https://github.com/nvidia/cuCascade.git
cd cuCascade
pixi…
