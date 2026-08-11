---
repo: "NVIDIA/numba-cuda-mlir"
name: "numba-cuda-mlir"
description: "repo for Numba-CUDA-MLIR"
readmeQualityOk: true
url: "https://github.com/NVIDIA/numba-cuda-mlir"
homepage: "https://nvidia.github.io/numba-cuda-mlir/"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 53
forks: 25
openIssues: 27
closedIssues: 36
watchers: 3
contributors: 42
recentReleases: 3
createdAt: "2026-04-15T16:36:34Z"
lastCommitAt: "2026-08-11T04:49:50Z"
lastReleaseAt: "2026-07-24T03:29:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["atmnp", "tpn", "ccam80"]
openGraphImageUrl: "https://opengraph.githubassets.com/86e9ab70ce79ce34133b1dbdd880bcfff4228c128413b26b84523b3c3a4571b2/NVIDIA/numba-cuda-mlir"
---

# Numba-CUDA-MLIR

Numba-CUDA-MLIR provides a programming model similar to CUDA C++ in Python. It
is evolved from [Numba-CUDA](https://github.com/NVIDIA/numba-cuda), and is
intended to be compatible with Numba-CUDA kernels.

Numba-CUDA-MLIR aims to interoperate well with existing programming models
whilst also allowing experts sufficient control over code generation.

## Quick Start

Install with pip:

```
pip install numba-cuda-mlir[cu13]  # or [cu12] if using CUDA 12
```

Writing and executing a simple vector add kernel:

```python
import numpy as np
from numba_cuda_mlir import cuda

@cuda.jit
def vector_add(a, b, out):
    i = cuda.grid(1)
    if i < out.shape[0]:
        out[i] = a[i] + b[i]

n = 1_000_000
a = np.ones(n, dtype=np.float32)
b = np.ones(n, dtype=np.float32)
out = np.zeros(n, dtype=np.float32)

threads_per_block = 256
blocks = (n + threads_per_block - 1) // threads_per_block
vector_add[blocks, threads_per_block](a, b, out)
```

## Migration from Numba / Numba-CUDA

Change imports to use the `numba_cuda_mlir.cuda` package instead of
`numba.cuda`. For example:

```python
from numba import cuda
```

becomes:

```python
from numba_cuda_mlir import cuda
```

For the…
