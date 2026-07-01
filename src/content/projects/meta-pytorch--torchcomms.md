---
repo: "meta-pytorch/torchcomms"
name: "torchcomms"
description: "torchcomms: a modern PyTorch communications API"
url: "https://github.com/meta-pytorch/torchcomms"
homepage: "https://meta-pytorch.org/torchcomms/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [62, 25]
stars: 373
forks: 155
openIssues: 32
closedIssues: 7
watchers: 7
contributors: 101
recentReleases: 0
createdAt: "2025-10-20T20:18:00Z"
lastCommitAt: "2026-07-01T07:00:17Z"
status: "thriving"
tags: []
healthScore: 64
undervaluedScore: 28
maintainers: ["zhiyongww", "minsii", "arttianezhu"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fe3de59d346e32542e32faba8f9b60564c8eacc84d4db4a3478e0a89c30f52b/meta-pytorch/torchcomms"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="logo-dark.png">
  </picture>
</p>

# torchcomms

torchcomms is a new experimental communications API for PyTorch. This provides
both the high level collectives API as well as several out of the box backends.

* [Documentation](https://meta-pytorch.org/torchcomms/main/index.html)
* [Examples](./comms/torchcomms/examples)

## Prerequisites

torchcomms requires the following software and hardware:

- Python 3.10 or higher
- PyTorch 2.8 or higher
- CUDA-capable GPU (for NCCL/NCCLX or RCCL backends)
- Intel XPU (for XCCL backend)

## Installation

torchcomms is available on PyPI and can be installed using pip. Alternatively,
you can build torchcomms from source.

### Using pip (Stable)

You can install torchcomms and PyTorch (2.11+) using pip:

```bash
# Cuda 12.6
pip install torch torchcomms --index-url https://download.pytorch.org/whl/cu126

# Cuda 12.8
pip install torch torchcomms --index-url https://download.pytorch.org/whl/cu128

# Cuda 13.0
pip install torch torchcomms --index-url https://download.pytorch.org/whl/cu130
```

### Using pip (Nightly Builds)

You can install torchcomms and PyTorch nightly builds using…
