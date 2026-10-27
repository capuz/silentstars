---
repo: "ruc-system/GPipeANN"
name: "GPipeANN"
description: "A low-latency, high-throughput, and billion-scale GPU-SSD vector search system."
readmeQualityOk: true
url: "https://github.com/ruc-system/GPipeANN"
language: "Cuda"
languages: ["Cuda", "C++"]
languagePcts: [46, 26]
stars: 28
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-23T09:05:47Z"
lastCommitAt: "2026-10-27T09:16:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 18
maintainers: ["w-pq"]
openGraphImageUrl: "https://opengraph.githubassets.com/0783c31a8cb1192420ade97da804724d0b5679f3616bbca26188a959e2f9e7d5/ruc-system/GPipeANN"
---

A low-latency, high-throughput, and billion-scale GPU-SSD vector search system.

For development without SPDK, see the [memory backend tests](https://github.com/ruc-system/GPipeANN/blob/HEAD/tests/memory/README.md), including host-only loader tests and GPU search correctness checks with synthetic indexes.

Paper plotting sources and saved input values are in [paper-plots](https://github.com/ruc-system/GPipeANN/blob/HEAD/paper-plots/README.md). They are maintained in [GPipeANN-paper](https://github.com/w-pq/GPipeANN-paper) and copied here; run `python3 paper-plots/build.py` to redraw them without SPDK or a GPU.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| ⚡&nbsp;**Ultra-Low&nbsp;Latency** | 2.94 ms P99 on SIFT-1B and 4.73 ms P99 on DEEP-1B (top-10, 90% recall, 4 SSDs) |
| 📈&nbsp;**High&nbsp;Throughput** | 104.5K QPS on SIFT-1B and 59.5K QPS on DEEP-1B (top-10, 90% recall, 4 SSDs) |
| 🌐&nbsp;**Billion-Scale&nbsp;Search** | Searches SIFT-1B and DEEP-1B on a single 40 GB GPU, with the billion-scale graph stored on NVMe SSDs |
| 💾&nbsp;**Memory&nbsp;Efficient** | Keeps only 32 GB PQ codes in GPU memory instead of loading the full graph into GPU memory |…
