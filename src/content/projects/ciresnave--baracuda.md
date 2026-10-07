---
repo: "ciresnave/baracuda"
name: "baracuda"
description: "CUDA ecosystem wrappers for Rust"
readmeQualityOk: true
url: "https://github.com/ciresnave/baracuda"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 6
forks: 0
openIssues: 7
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-22T18:25:06Z"
lastCommitAt: "2026-10-07T10:30:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 47
maintainers: ["ciresnave-bot", "ciresnave"]
openGraphImageUrl: "https://opengraph.githubassets.com/20d06632a0797440e768ca7a9d474b855bae026d30871d34154ed01583c41d07/ciresnave/baracuda"
---

# baracuda

> **About the name.** Yes, we know — it's spelled **barracuda** (two Rs). That
> name was taken on crates.io, so we dropped one R and kept swimming.

A unified Rust ML-op facade over the NVIDIA CUDA ecosystem.

## What baracuda is

baracuda is a Rust workspace that exposes every primitive an ML framework
expects — the union of PyTorch (`torch.*` + `nn.functional`) and JAX
(`jax.lax.*` + `jax.numpy.*`) — through a single `Plan`-based crate surface
called [`baracuda-kernels`]. Internally each plan dispatches to:

1. The appropriate NVIDIA-library wrapper crate (cuBLAS, cuDNN, cuFFT,
   cuSOLVER, cuRAND, cuSPARSE, cuTENSOR, NPP, CV-CUDA, CUTLASS) when one
   already covers the op well, or
2. A bespoke hand-rolled `.cu` kernel shipped in [`baracuda-kernels-sys`]
   when no NVIDIA library covers the op (or covers it poorly at the shapes
   that matter for modern transformer / vision / GNN workloads).

Callers import **one** crate (`baracuda-kernels`) and reach for **one** API
style. The dispatch decision — which is observable through
`Plan::sku()` for telemetry — is otherwise invisible. Switching from a
CUTLASS-backed SKU to a bespoke-backed SKU is a layout flag, not an…
