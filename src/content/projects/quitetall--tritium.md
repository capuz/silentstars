---
repo: "Quitetall/tritium"
name: "tritium"
description: "Foundational ternary-model inference & training library — CUDA + CPU, BitNet/TQ ternary kernels"
readmeQualityOk: true
url: "https://github.com/Quitetall/tritium"
homepage: "https://docs.rs/tritium-core"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [70, 21]
topics: ["bitnet", "cuda", "gguf", "inference-engine", "llm", "llm-inference", "machine-learning", "quantization", "rust", "ternary"]
stars: 25
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-06-15T03:02:30Z"
lastCommitAt: "2026-09-13T08:29:56Z"
lastReleaseAt: "2026-09-05T08:36:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["Quitetall", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1269712792/6470d489-179c-4fa4-bc9a-d79234e0e395"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/brand/tritium-header-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/brand/tritium-header-light.svg">
  </picture>
</p>

  <em>Ternary weights, honestly measured.</em><br>
  <code>-1</code> &nbsp;<code>0</code>&nbsp; <code>+1</code>
</p>

Tritium is Apache-2.0 infrastructure for converting dense neural networks into
compact additive-ternary models, refining or training them with PyTorch, and
executing their packed weights across native and portable runtimes.

Weights use `{-1, 0, +1}` planes. One plane is the compact base model; additional
residual planes trade physical bytes for quality. Tritium treats the recipe,
calibration evidence, ancestry, packed bytes, runtime memory, and measured model
quality as one auditable artifact lifecycle—not as an informal `bits=2` label.

> **Release status:** the repository uses the `1.1.0-rc.2` candidate version. It
> is neither `LOCAL_RC_READY` nor a public v1.1 release. Package, browser,
> flagship-model, deployment, and second-machine gates remain open. The generated
> [compatibility…
