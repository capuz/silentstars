---
repo: "FluxVLA/FluxThemis"
name: "FluxThemis"
description: "A unified benchmarking and evaluation framework for VLA policies across simulation and real-world robots."
readmeQualityOk: true
url: "https://github.com/FluxVLA/FluxThemis"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-07-30T01:59:17Z"
lastCommitAt: "2026-11-19T11:55:55Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 69
undervaluedScore: 33
maintainers: ["yinchimaoliang", "Colorfu1", "JikunR"]
openGraphImageUrl: "https://opengraph.githubassets.com/67ef1a2441b7e5364e5170578136f460921f15c36c7a208cf368b035ec08b81f/FluxVLA/FluxThemis"
---

# FluxThemis

FluxThemis runs simulation and real-environment evaluation for FluxVLA. The
model boundary is a versioned ZMQ protocol: FluxThemis owns environments and
episode scheduling, while FluxVLA owns model loading, preprocessing, inference,
action denormalization, and authoritative benchmark artifacts.

## Responsibilities

| Component | Owns |
| --- | --- |
| FluxVLA | Model config, checkpoint, inference replicas, preprocessing, statistics, action units, authoritative evaluation journal and benchmark summary |
| FluxThemis | Evaluation config, simulator assets and layouts, environment processes, episode scheduling, action execution, videos, progress, resource monitoring and resume |

Every prediction request contains the complete observation and prompt. With
the default dynamic scheduling, consecutive requests from one episode may run
on different model workers. Fixed scheduling is also available when supported
and configured on both sides.

## Installation

For development, install only the core package and ZMQ runtime:

```bash
conda create -n fluxthemis-dev python=3.10 -y
conda activate fluxthemis-dev
cd /root/projects/FluxThemis
python -m pip install -e .
```
