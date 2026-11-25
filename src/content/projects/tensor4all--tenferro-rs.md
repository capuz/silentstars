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
stars: 88
forks: 10
openIssues: 31
closedIssues: 1444
watchers: 0
contributors: 17
recentReleases: 9
createdAt: "2026-02-12T21:52:03Z"
lastCommitAt: "2026-11-25T13:23:53Z"
lastReleaseAt: "2026-11-19T01:01:43Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 48
maintainers: ["shinaoka", "MartinMikkelsen", "frankebel"]
openGraphImageUrl: "https://opengraph.githubassets.com/de4508fdd25be2dbb58fbd050bfc11abbca6491bc97ffe32d834e48016834f15/tensor4all/tenferro-rs"
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
HVP-style higher-order composition. A first Metal slice (f32 and Complex32
elementwise operations behind the `metal` feature) shares memory with the CPU
engine on macOS; see
[Devices and GPU](https://tensor4all.org/tenferro-rs/guides/devices-and-gpu.html#metal).
