---
repo: "marzukia/mlx-rocm"
name: "mlx-rocm"
description: "MLX on ROCm"
readmeQualityOk: true
url: "https://github.com/marzukia/mlx-rocm"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-31T00:05:28Z"
lastCommitAt: "2026-11-01T22:59:33Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 50
maintainers: ["lifeofpiboy", "jimmyateworld", "marzukia"]
openGraphImageUrl: "https://opengraph.githubassets.com/985e9fcc17ca44bc454dff819de007315634d4e7a64f557d31691c46fe8e4cd7/marzukia/mlx-rocm"
---

# mlx-rocm

ROCm backend for [MLX](https://github.com/mlx-project/mlx) — **pre-alpha**
(first public release 0.1.0).

Purpose: a ROCm backend for MLX on AMD RDNA4 — validated on the RX 9070 XT
(**gfx1201** — *not* gfx110x) — targeting the 9B hybrid at high decode
speed. MTP spec decode and KV management are part of the MLX core path;
serving is out of scope for this repo.

Stage: **pre-alpha**. 0.1.0 is a public milestone of the current tree, not a
stability promise — expect breaking changes. The **alpha cut is planned once
decode reaches close to the card's ceiling** (9B-hybrid target: ~120 tok/s,
byte-identical vs autoregressive).

Verified toolchain: ROCm 10.1 userland on the validated guest (core at
`/opt/rocm/core-10.1`; 6.4 was the early probe validation and 7.7 the original
target — neither is the verified version).

## What this is

Three pieces:

1. **`vendor/mlx-rocm-upstream/`** — the vendored ROCm backend tree. The
   ROCm base already carries a complete `mlx/backend/rocm/` mirroring the
   CUDA backend file-for-file; we vendor the newer forward-merge of the
   vendor ref (adds GatedDeltaUpdate fallback, mxfp8 prefill GEMM,
   gfx1200/RDNA4 fixes). Provenance:…
