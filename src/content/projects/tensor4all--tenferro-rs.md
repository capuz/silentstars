---
repo: "tensor4all/tenferro-rs"
name: "tenferro-rs"
description: "A Rust-native tensor & autodiff stack for scientific computing"
readmeQualityOk: true
url: "https://github.com/tensor4all/tenferro-rs"
homepage: "http://tensor4all.org/tenferro-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 84
forks: 7
openIssues: 32
closedIssues: 1355
watchers: 1
contributors: 14
recentReleases: 7
createdAt: "2026-02-12T21:52:03Z"
lastCommitAt: "2026-11-07T22:50:59Z"
lastReleaseAt: "2026-11-02T03:35:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 47
maintainers: ["shinaoka", "Ryo-wtnb11"]
openGraphImageUrl: "https://opengraph.githubassets.com/11423366084e4f608c9b6e724bbb1cddf259d4b0728947e98b6a9be9d5f86928/tensor4all/tenferro-rs"
---

# tenferro-rs

> **[Where tenferro-rs fits in the tensor4all Rust stack →](https://tensor4all.org/tensor4all-meta/stack/)**
> The layer map, from the tensor-network frontends above this crate down to the
> numerical providers below it.

**A Rust-native tensor computation stack with opt-in autodiff for scientific workloads.**

tenferro-rs provides typed and dynamic dense tensors, explicit backend
dispatch, linear algebra, einsum, FFT, and extensible automatic differentiation
native to Rust. Use it as an ordinary tensor library first: direct
`TypedTensor` and `Tensor` APIs run through a chosen CPU or CUDA backend,
while `EagerTensor` and `TracedTensor` add automatic
differentiation when a workflow needs it. Both eager and traced modes support
VJP and JVP. Eager mode also supports PyTorch-style `backward()` for scalar
losses, while traced mode is the main surface for reusable graph transforms and
HVP-style higher-order composition. WebGPU, Metal execution, and the Apple
shared CPU/Metal path are not provided today.

tenferro-rs is the tensor engine behind the
[tensor4all](https://github.com/tensor4all) scientific-computing stack and is
dogfooded in its core product,…
