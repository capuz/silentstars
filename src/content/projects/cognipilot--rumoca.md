---
repo: "CogniPilot/rumoca"
name: "rumoca"
description: "a rust-native Modelica compiler for fast, composable, scientific computing"
readmeQualityOk: true
url: "https://github.com/CogniPilot/rumoca"
homepage: "http://rumoca.cognipilot.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["casadi", "compiler", "jax", "julia", "modelica", "onnx", "physics", "rust", "symbolic-computing", "symbolic-math"]
stars: 153
forks: 36
openIssues: 19
closedIssues: 144
watchers: 6
contributors: 18
recentReleases: 0
createdAt: "2024-11-10T08:16:15Z"
lastCommitAt: "2026-11-12T04:39:41Z"
lastReleaseAt: "2025-12-26T03:00:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 46
maintainers: ["jgoppert", "celidur"]
openGraphImageUrl: "https://opengraph.githubassets.com/2df567d9f839badad493640a78f4dda56a2c7fb22a9b7f02830d299635c23eba/CogniPilot/rumoca"
---

# rumoca

**[Try Rumoca in your browser](https://cognipilot.github.io/rumoca/)** (no installation required).

Rumoca is a modern **Modelica compiler and symbolic interoperability platform** written in Rust.

Rumoca’s goal is not only to compile and simulate Modelica models, but to turn **real Modelica package trees** into high-quality symbolic systems that can be used across modern scientific computing, optimization, machine learning, and code generation workflows.

> **Rumoca turns Modelica package trees into modern symbolic systems.**

> **Project status:** Rumoca is in active development. You should expect bugs and rough edges; please file issues at https://github.com/cognipilot/rumoca/issues.

## Why Rumoca Exists

There is a large ecosystem of useful engineering models already written in Modelica, but many modern workflows live elsewhere:

- Julia / SciML
- Python / JAX / CasADi / PyTorch
- embedded and generated-code targets
- browser and tooling workflows via WASM

Rumoca bridges that gap.

It treats Modelica as a **semantic frontend** and compiles models into rich intermediate forms suitable for:

- robust simulation
- symbolic analysis
- optimization and differentiable…
