---
repo: "brettkoonce/lean4-mlir"
name: "lean4-mlir"
description: "Lean specification of neural architectures with verified GPU codegen."
readmeQualityOk: true
url: "https://github.com/brettkoonce/lean4-mlir"
homepage: "https://lean.brettkoonce.com/blueprint"
language: "MLIR"
languages: ["MLIR"]
languagePcts: [93]
stars: 46
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 4
createdAt: "2026-04-03T01:28:57Z"
lastCommitAt: "2026-10-26T18:04:24Z"
lastReleaseAt: "2026-10-14T16:52:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["brettkoonce", "brett-koonce", "brett-loiter"]
openGraphImageUrl: "https://opengraph.githubassets.com/d951ab9af159361d3261d69be210618f5a705f16b7386734ff16d2c3e4f407e2/brettkoonce/lean4-mlir"
---

# Lean 4 → MLIR → GPU

**The book: [Verified Deep Learning with Lean 4](https://lean.brettkoonce.com/blueprint/)**
([PDF](https://lean.brettkoonce.com/blueprint.pdf)) — the interactive proof blueprint
*is* the book: every theorem clickable, from the `pdiv` primitives to the whole-network backward
passes.

Lean 4 as a specification language for neural networks. Declare the architecture in Lean, render
one StableHLO graph — forward, loss, backward and optimizer fused — from proofs that the backward
is the Jacobian-transpose of the forward, hand the graph to a trusted lowerer, train end to end.
No Python at run time and no autograd library: the gradients are derived at codegen time, in
Lean, and machine-checked over the reals.

Companion code for *Verified Deep Learning with Lean 4*, forthcoming from Apress (Springer
Nature) as the follow-up to
[Convolutional Neural Networks with Swift for TensorFlow](https://doi.org/10.1007/978-1-4842-6168-2) (2021).

**Current version: `v0.7.2`.** Release history in [CHANGELOG.md](https://github.com/brettkoonce/lean4-mlir/blob/HEAD/CHANGELOG.md).

## Three ways in

| to | do this | needs |
|---|---|---|
| read it | the…
