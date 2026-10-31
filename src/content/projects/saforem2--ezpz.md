---
repo: "saforem2/ezpz"
name: "ezpz"
description: "Write once, run anywhere; ezpz 🍋 "
readmeQualityOk: true
url: "https://github.com/saforem2/ezpz"
homepage: "http://ezpz.cool/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["distributed-training", "launcher", "machine-learning", "python", "rich", "mpi", "mpi4py", "parallelism", "pytorch", "slurm"]
stars: 43
forks: 13
openIssues: 11
closedIssues: 26
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-09-12T20:23:20Z"
lastCommitAt: "2026-10-31T15:59:19Z"
lastReleaseAt: "2026-01-09T15:18:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 58
maintainers: ["saforem2", "felker"]
openGraphImageUrl: "https://opengraph.githubassets.com/c126a503d8fc4b66af93c7828d8890099a9c62b458a76a91146138a2eaff46fe/saforem2/ezpz"
discussionCount: 1
---

# 🍋 ezpz

> Write once, run anywhere.

`ezpz` makes distributed PyTorch launches portable across any supported
hardware {NVIDIA, AMD, Intel, MPS, CPU} with **zero code changes**.

## Features

- **Multi-hardware** — automatic device detection and backend selection
  (CUDA/NCCL, XPU/CCL, MPS, CPU/Gloo)
- **Zero code changes** — same script runs on a laptop, a single GPU, or a
  thousand-node supercomputer
- **HPC integration** — native PBS and SLURM support with automatic hostfile
  discovery and rank assignment
- **Metric tracking** — built-in `History` class for recording, plotting, and
  saving training metrics
- **CLI tools** — `ezpz launch`, `ezpz test`, `ezpz doctor` for launching
  jobs, smoke-testing, and diagnostics

## Quick Install

```bash
uv pip install git+https://github.com/saforem2/ezpz
```

## Quick Start

```python
import torch
import ezpz

rank = ezpz.setup_torch()           # auto-detects device + backend
device = ezpz.get_torch_device()
model = torch.nn.Linear(128, 10).to(device)
model = ezpz.wrap_model(model)       # FSDP (default)

# Multi-dim parallelism (TP/PP/CP) on XPU? Use ezpz.init_device_mesh_safe
# instead of torch's init_device_mesh — works around…
