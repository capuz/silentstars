---
repo: "tensor4all/tenferro-rs"
name: "tenferro-rs"
description: "A general-purpose tensor computation library in Rust with CPU/GPU support"
url: "https://github.com/tensor4all/tenferro-rs"
homepage: "http://tensor4all.org/tenferro-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 22
forks: 1
openIssues: 11
closedIssues: 734
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-02-12T21:52:03Z"
lastCommitAt: "2026-06-28T03:10:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["shinaoka", "terasakisatoshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/88d3246dff09ee19494c3f0952d45590d20e2e23a65da497fc6429e14b151ace/tensor4all/tenferro-rs"
---

# tenferro-rs

tenferro-rs is a modular Rust tensor stack for scientific computing and
general-purpose tensor workflows.

## Why tenferro-rs Exists

`tenferro` means tensor computation with an iron/Rust flavor: `tensor` +
`ferro`.

The project aims to provide a Rust-native tensor stack for typed tensor
computation, immediate execution with optional `backward()`, traced graph
execution, automatic differentiation, linear algebra, einsum, FFT, and explicit
CPU, CUDA, and experimental WebGPU backend control.

tenferro-rs is influenced by JAX and PyTorch in its split between immediate
execution, traced graphs, and AD. It is also influenced by the Julia numerical
computing ecosystem, where operation semantics and AD rules can live outside a
single all-in-one tensor type.

tenferro-rs is Rust-native, but it should fit established numerical computing
conventions rather than replacing them with project-specific rules. It uses
Rust's type system, ownership model, and crate boundaries where those choices
help.

We also see Rust's package system — fine-grained crates, feature flags, and
semver-aware dependency composition — as a strong place for **cross-ecosystem
collaboration**. tenferro-rs…
