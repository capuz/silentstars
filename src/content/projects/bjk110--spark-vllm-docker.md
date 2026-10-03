---
repo: "bjk110/spark_vllm_docker"
name: "spark_vllm_docker"
description: "DGX Spark / GB10 vLLM Docker stack for large-model serving, presets, patches, and validation notes."
readmeQualityOk: true
url: "https://github.com/bjk110/spark_vllm_docker"
homepage: "https://github.com/bjk110/spark_vllm_docker"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [66, 25]
topics: ["cuda", "deepseek", "dgx-spark", "docker", "docker-compose", "gb10", "llm-serving", "qwen", "vllm"]
stars: 58
forks: 11
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-12T05:08:17Z"
lastCommitAt: "2026-10-03T09:21:28Z"
lastReleaseAt: "2026-06-07T04:54:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 37
maintainers: ["bjk110", "Takamura94"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a542045f83b954955e0361ccbf25609befebe3916712a528d4aaeb3a7e12387/bjk110/spark_vllm_docker"
---

# spark_vllm_docker

## Overview

Unified vLLM serving configuration for NVIDIA DGX Spark (GB10), supporting two topologies from the
same repo / Dockerfile / compose file:

- **Single Spark** (default, zero RDMA setup) — one GB10 box, TP=1.
- **Dual Spark + 200 Gbps RoCE/IB** — two GB10 boxes, TP=2 (Ray or `mp`/SPMD backend).

Pick the topology with `CLUSTER_MODE=single` (default) or `CLUSTER_MODE=dual-rdma` in your `.env`.

**Start here:** the [documentation index](https://github.com/bjk110/spark_vllm_docker/blob/HEAD/docs/README.md) is the canonical map of all docs and their
status. Preset catalog and status: [`presets/README.md`](https://github.com/bjk110/spark_vllm_docker/blob/HEAD/presets/README.md). Release/patch detail:
[`CHANGELOG.md`](https://github.com/bjk110/spark_vllm_docker/blob/HEAD/CHANGELOG.md), [`PATCH_STATUS.md`](https://github.com/bjk110/spark_vllm_docker/blob/HEAD/PATCH_STATUS.md).

## Hardware and topology

| Topology | Nodes | GPU / memory | Interconnect | Backend |
|---|---|---|---|---|
| `single` | one Spark | NVIDIA GB10 (Blackwell), 119 GiB unified | n/a | direct (no Ray, no `mp`) |
| `dual-rdma` | spark01 (head) + spark02 (worker) | 2× GB10, 119 GiB…
