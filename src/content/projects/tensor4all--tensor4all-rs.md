---
repo: "tensor4all/tensor4all-rs"
name: "tensor4all-rs"
description: "Rust port of tensor4all tensor network ecosystem with C-API"
readmeQualityOk: true
url: "https://github.com/tensor4all/tensor4all-rs"
homepage: "https://tensor4all.org/tensor4all-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 31
forks: 10
openIssues: 28
closedIssues: 421
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2026-01-02T00:06:29Z"
lastCommitAt: "2026-10-29T14:06:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 57
maintainers: ["shinaoka", "simonb282", "lingrui96"]
openGraphImageUrl: "https://opengraph.githubassets.com/1da1bee969ce35512d047860b0da40c3112fecea359f1da48387ceed2b701a69/tensor4all/tensor4all-rs"
---

# tensor4all-rs

A Rust implementation of tensor networks: TCI, Quantics Tensor Train, and Tree Tensor Networks.

Related project: [tenferro-rs](https://github.com/tensor4all/tenferro-rs) provides tensor backend components used by tensor4all-rs.

## Features

- **ITensors.jl-like dynamic tensors**: Flexible `Index` system with dynamic-rank `Tensor`
- **Tensor Cross Interpolation**: TCI2 primary algorithm plus legacy TCI1 compatibility for efficient high-dimensional function approximation
- **Quantics Tensor Train**: Binary encoding of continuous variables with transformation operators
- **Tree Tensor Networks**: Arbitrary topology with canonicalization, truncation, and naive, zip-up, fit, and SRC contraction
- **Experimental CUDA contraction**: Explicit upload, dense TreeTN full contraction, and download on one GPU
- **Partitioned TreeTNs**: Eagerly masked subdomains, volume-budgeted adaptive patching, reconstruction with a fixed global L2 tolerance, and level-coupled merge-refine QFT scheduling
- **C API**: Minimal Julia-facing FFI surface for indices, structured tensors, TreeTN, and quantics materialization

## Quick Start

The crates are not published to crates.io yet. Use git…
