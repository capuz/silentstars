---
repo: "gomlx/go-xla"
name: "go-xla"
description: "OpenXLA API Bindings for Go (StableHLO and PJRT)"
readmeQualityOk: true
url: "https://github.com/gomlx/go-xla"
language: "Go"
languages: ["Go"]
languagePcts: [79]
stars: 20
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-12-06T06:52:35Z"
lastCommitAt: "2026-11-02T15:17:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["janpfeifer", "tdegris", "akhenakh"]
openGraphImageUrl: "https://opengraph.githubassets.com/015dc15af7c503b3387944faeae7a31f91b87b4e92cd2c9265b09542fa3b83ad/gomlx/go-xla"
fundingLinks: ["GITHUB:https://github.com/gomlx"]
---

# go-xla: OpenXLA APIs bindings for Go

## 🎯 Why use go-xla ?

The **go-xla** project leverages [OpenXLA's](https://openxla.org/) to (JIT-) compile, optimize, and **accelerate numeric computations**
(with large data) from Go using various [backends supported by OpenXLA](https://opensource.googleblog.com/2024/03/pjrt-plugin-to-accelerate-machine-learning.html): CPU, GPUs (Nvidia, AMD ROCm*, Intel*, Apple Metal*) and TPUs. 
It can be used to power Machine Learning frameworks (e.g. [GoMLX](https://github.com/gomlx/gomlx)), image processing, scientific 
computation, game AIs, etc. 

And because [Jax](https://docs.jax.dev/en/latest/), [TensorFlow](https://www.tensorflow.org/) and 
[optionally PyTorch](https://pytorch.org/xla/release/2.3/index.html) run on XLA, it is possible to run Jax functions in Go with **go-xla**, 
and probably TensorFlow and PyTorch as well.

The **go-xla** project aims to be minimalist and robust: it provides well-maintained, extensible Go wrappers for
[OpenXLA's StableHLO](https://openxla.org/#stablehlo) and [OpenXLA's PJRT](https://openxla.org/#pjrt). 

The APIs are not very "ergonomic" (error handling everywhere), but it's expected to be a stable building…
