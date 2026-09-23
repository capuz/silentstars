---
repo: "tile-ai/TileOPs"
name: "TileOPs"
description: "High-performance LLM operator library built on TileLang."
readmeQualityOk: true
url: "https://github.com/tile-ai/TileOPs"
homepage: "https://tile-ai.github.io/TileOPs.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 190
forks: 61
openIssues: 18
closedIssues: 949
watchers: 3
contributors: 29
recentReleases: 0
createdAt: "2025-06-03T07:48:40Z"
lastCommitAt: "2026-09-23T08:46:50Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 46
maintainers: ["lcy-seso", "superAngGao", "michaelwithu"]
openGraphImageUrl: "https://opengraph.githubassets.com/69c49e5f6f54723ca1e894f23581d0d71361ab939b6416cfa0c523e2c0a03652/tile-ai/TileOPs"
---

<h3>Spec-driven LLM operators across backends — built by agents</h3>

<p>The spec is the source; kernels are derived from it and judged against it.</p>

<p>
    
  </p>

<p>
  </p>
</div>

## Quick Start

```python
import torch
from tileops.gemm import GemmFwdOp

gemm = GemmFwdOp()  # shapes and dtype are inferred at call time

a = torch.randn(1024, 512, device="cuda", dtype=torch.float16)
b = torch.randn(1024, 512, device="cuda", dtype=torch.float16)

d = gemm(a, b)  # equals a @ b.T
```

Operators are auto-tuned on first use, CUDA-Graph compatible, and declare their
`torch.compile(fullgraph=True)` support per op.

## Built for agents

An implementation can be regenerated from its spec; a spec cannot be recovered from an
implementation. The project is organised around the spec rather than around the kernels:

- **The spec is self-contained.** Generation reads it and nothing else, so every constraint on
  the implementation is declared rather than assumed.
- **Acceptance is decidable.** Correctness settles against a declared reference, performance
  against a modelled bound — neither is a judgement call.
- **The operator/kernel split is enforced.** The boundary is checked rather…
