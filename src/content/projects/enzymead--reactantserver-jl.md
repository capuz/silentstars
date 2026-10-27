---
repo: "EnzymeAD/ReactantServer.jl"
name: "ReactantServer.jl"
description: "Production inference server for Reactant-compiled models, serving KServe V2 over gRPC"
readmeQualityOk: true
url: "https://github.com/EnzymeAD/ReactantServer.jl"
homepage: "https://enzymead.github.io/ReactantServer.jl/dev/"
language: "Julia"
languages: ["Julia"]
languagePcts: [97]
topics: ["inference-server", "julia", "reactant", "xla", "mlir", "stablehlo", "grpc", "kserve"]
stars: 12
forks: 3
openIssues: 13
closedIssues: 33
watchers: 1
contributors: 15
recentReleases: 10
createdAt: "2026-06-16T16:49:02Z"
lastCommitAt: "2026-10-27T12:40:21Z"
lastReleaseAt: "2026-10-11T16:04:55Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 58
maintainers: ["csvance", "bhuvanendra1520", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77b088eb975c91c7357c847a66535411d7291c191b41761a29348854282a9c2a/EnzymeAD/ReactantServer.jl"
---

# ReactantServer.jl

A production inference server for models compiled through Reactant.jl (StableHLO via XLA today).
It speaks the KServe V2 inference API over gRPC, so standard Triton and KServe clients connect
unchanged; it scales from one GPU to many from one container; and it fits more models on each GPU
by balancing model **memory** against **compute**. It is built for workloads where many models
share a GPU, such as computer vision and scientific computing.

## Highlights

- **XLA-accelerated, Reactant-compiled.** Models are compiled ahead of time into device
  executables through Reactant's PJRT bindings. The runtime is device-agnostic (CUDA today, CPU
  for dev/fallback); supporting more accelerators is a goal, not a redesign. → [Architecture](https://enzymead.github.io/ReactantServer.jl/dev/design/architecture/), [Philosophy](https://enzymead.github.io/ReactantServer.jl/dev/design/philosophy/)
- **Julia-first pre/postprocessing.** A bundle's `model.jl` registers `preprocess`/`postprocess`
  hooks in plain Julia; they run per request, in parallel and overlapped with GPU execution. → [Bundles & model.jl](https://enzymead.github.io/ReactantServer.jl/dev/bundles/)
-…
