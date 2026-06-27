---
repo: "roiamiel1/Build-Deep-Learning-From-Scratch"
name: "Build-Deep-Learning-From-Scratch"
description: "A project-based curriculum that teaches PyTorch by rebuilding it from scratch. Start with scalar backpropagation, create a reverse-mode autodiff engine, expand it into tensors, then implement neural networks, optimizers, CNNs, attention, Transformers, ViTs, and a mini PyTorch framework. Every gradient is code you write and understand."
url: "https://github.com/roiamiel1/Build-Deep-Learning-From-Scratch"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-21T17:44:09Z"
lastCommitAt: "2026-06-27T06:22:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["roiamiel1"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dd2912ae61c0ad13b3f67810499dc769af7fe88d3015b9e64caf09d3f8419ec/roiamiel1/Build-Deep-Learning-From-Scratch"
---

# Build Deep Learning From Scratch

A project-based curriculum that teaches how PyTorch works *internally* by reimplementing it from the ground up. You start with scalar backpropagation, build a reverse-mode autodiff engine, grow it into an N-dimensional `Tensor`, then stack neural-network layers, optimizers, training loops, CNNs, attention, a full Transformer, a Vision Transformer, a small but real PyTorch-like framework, and finally capstone projects. The philosophy: **you are the autodiff library.** Nothing is imported that you haven't already built by hand, so every gradient and every chain-rule accumulation is code you wrote and understand.

The scalar autodiff engine in **stages 01-05** is a from-scratch reimplementation of Andrej Karpathy's [micrograd](https://github.com/karpathy/micrograd): `Value(data)` (stage 01) → computational graph (stage 02) → per-op `_backward` closures (stage 03) → the `backward()` reverse pass (stage 04) → the remaining ops `tanh`/`exp`/`relu` (stage 05). The same engine micrograd packs into one file, built up one concept per stage. Everything afterward generalizes it to tensors.

## Tool restriction

The only permitted packages are **NumPy**…
