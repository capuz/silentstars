---
repo: "mattn/tensai"
name: "tensai"
description: "A tiny neural-network framework in pure Go with AVX2 SIMD kernels (GOEXPERIMENT=simd)"
readmeQualityOk: true
url: "https://github.com/mattn/tensai"
homepage: "https://mattn.github.io/tensai/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["autograd", "avx2", "deep-learning", "gguf", "golang", "llm", "machine-learning", "neural-networks", "onnx", "quantization"]
stars: 92
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-19T09:06:30Z"
lastCommitAt: "2026-09-01T08:51:58Z"
lastReleaseAt: "2026-08-28T16:42:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 35
maintainers: ["mattn"]
openGraphImageUrl: "https://opengraph.githubassets.com/43f26b749ffd3b789639f838b207642ab4b6185bd996bf3737326bfbc6ba558a/mattn/tensai"
fundingLinks: ["GITHUB:https://github.com/mattn"]
---

# tensai - a tiny machine-learning framework in Go

`tensai` is a small machine-learning framework for learning and experiments. It implements forward passes, backpropagation, and optimization in pure Go; the default build has no external dependencies (the optional `wgpu` build tag adds exactly one, cgo-free: `ebitengine/purego`).

**Documentation: [mattn.github.io/tensai](https://mattn.github.io/tensai/)** — guides for every package, in English and [日本語](https://mattn.github.io/tensai/ja/).

## Features

- **Matrix operations** - `Matrix` plus basic operations such as `Dot`, `Add`, `T`, and `AddBias`. Tensors are float32 (`tensai.Float`)
- **N-dimensional tensors** - `Tensor` generalizes `Matrix` to any rank: element-wise `Add`/`Sub`/`Mul`/`Div` with NumPy-style broadcasting, batched `MatMul` (the leading axes broadcast, the per-matrix products run on the same kernel as `Dot`, parallelized across the batch) plus its transposed forms `MatMulTN` and `MatMulNT`, so a backward pass never materializes a transposed copy, axis-permuting `Transpose`, `Reshape` with `-1` inference, and zero-copy views to and from `Matrix`
- **SIMD acceleration** - AVX2 kernels written with Go's…
