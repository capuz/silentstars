---
repo: "chaobrain/braincell"
name: "braincell"
description: "Biologically Detailed Brain Cell Modeling in JAX"
readmeQualityOk: true
url: "https://github.com/chaobrain/braincell"
homepage: "https://brainx.chaobrain.com/braincell/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dendrite", "dendrites", "multi-compartment-modeling"]
stars: 14
forks: 4
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2024-07-07T19:54:39Z"
lastCommitAt: "2026-11-09T00:53:40Z"
lastReleaseAt: "2026-10-25T03:13:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 72
maintainers: ["chaoming0625", "TLDSZ", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8707832ba677e110d1a3b4ada2365104d408fa1a3cc493345ea8a8264e5636b/chaobrain/braincell"
---

# Biologically Detailed Brain Cell Modeling in BrainX

[braincell](https://github.com/chaobrain/braincell) provides a unified interface for biophysically detailed brain cell models — from single-compartment Hodgkin-Huxley neurons to fully morphological multi-compartment cells with realistic dendrites and axons.
It is built on top of [JAX](https://github.com/jax-ml/jax) and [brainstate](https://github.com/chaobrain/brainstate), offering highly parallelized, differentiable simulation of biologically realistic neural dynamics.

## Features

- **Single-compartment neurons** — `braincell.SingleCompartment` with a rich library of ion channels (Na, K, Ca, HCN, K-Ca) and numerical integrators.
- **Multi-compartment cells** — `braincell.Cell` with declarative mechanism painting (`cell.paint`) and point-process placement (`cell.place`) onto morphological regions.
- **Morphology system** — `braincell.morph`: immutable `Branch` geometry, typed subclasses (`Soma`, `Dendrite`, `Axon`, `BasalDendrite`, `ApicalDendrite`), and the mutable `Morphology` tree.
- **IO readers** — SWC, ASC, and NeuroML2 file readers; a full [NeuroMorpho.Org](https://neuromorpho.org) client with search, download, and…
