---
repo: "songc0a/DeepGPR"
name: "DeepGPR"
description: "A wave propagation module for PyTorch, designed for applications such as Ground Penetrating Radar (GPR) imaging and inversion"
readmeQualityOk: true
url: "https://github.com/songc0a/DeepGPR"
language: "Python"
languages: ["Python"]
languagePcts: [66]
stars: 18
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-23T12:16:49Z"
lastCommitAt: "2026-10-11T10:15:07Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 55
maintainers: ["github-actions[bot]", "llsra", "barkure"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b657361f0ae212c334b50695984533cab27c805ab9cc1cd9562f0d765cbf990/songc0a/DeepGPR"
---

# DeepGPR

**Official website / documentation:** [https://songc0a.github.io/DeepGPR/](https://songc0a.github.io/DeepGPR/)

DeepGPR provides a wave propagation module for PyTorch, designed for applications such as Ground Penetrating Radar (GPR) imaging and inversion. Its core concepts are derived from Deepwave. You can use it to perform both forward modeling and backpropagation—thereby enabling the simulation of wave propagation to generate synthetic data—as well as for Full Waveform Inversion (FWI). Furthermore, you can integrate this wave propagation functionality into a larger operational pipeline—incorporating various wavelets, loss functions, and other components—to achieve end-to-end forward and reverse propagation, powered by automatic differentiation and our high-performance operators.

## Features

- 2D and 3D forward modeling of Maxwell's equations with the Finite-Difference Time-Domain (FDTD) method, for single and multiple excitations.
- Gradients of the receiver data with respect to relative permittivity, conductivity, the initial wavefield and the source amplitudes, computed by an exact discrete adjoint.
- Automatic extension of the physical model into a CPML with an…
