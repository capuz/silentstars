---
repo: "toro-ml/toro"
name: "toro"
description: "PyTorch semantics, idiomatic F#. Powered by TorchSharp."
readmeQualityOk: true
url: "https://github.com/toro-ml/toro"
homepage: "https://toro-ml.github.io/toro/"
language: "F#"
languages: ["F#"]
languagePcts: [93]
topics: ["dotnet", "fsharp", "graph-neural-networks", "neural-networks", "nlp", "torchsharp"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2024-03-01T08:07:58Z"
lastCommitAt: "2026-08-23T04:10:51Z"
lastReleaseAt: "2026-08-14T13:10:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 84
maintainers: ["RyushiAok"]
openGraphImageUrl: "https://opengraph.githubassets.com/79cb97c4dd28d17dac9e69c9c938bad4020b90b4d6ee22dc040430fa9a05395a/toro-ml/toro"
---

# Toro

Toro is a machine learning library for F# built on [TorchSharp](https://github.com/dotnet/TorchSharp).
Models can be defined as F# records, and Toro uses TorchSharp tensors directly.
Model structure determines stable names for parameters and buffers, which are also used for optimizer state and checkpoints.

[Documentation](https://toro-ml.github.io/toro/) · [Examples](#examples) · [NuGet packages](#packages)

> [!NOTE]
> Toro is under active development.
> Public APIs and checkpoint formats may change between releases.

## Install

Toro targets .NET 10.
Install the core tensor and neural-network packages with a TorchSharp runtime:

```bash
dotnet add package Toro
dotnet add package Toro.NN
dotnet add package TorchSharp-cpu
```

Add `Toro.GNN`, `Toro.Models`, `Toro.Text`, or `Toro.Vision` when the application needs those features.

## First model

This example defines an F# record model and trains it on XOR.
The `scoped` computation expression disposes intermediate tensors at the end of each iteration.

```fsharp
open TorchSharp
open Toro
open Toro.NN

type Classifier = {
    Fc1: Linear
    Drop: Dropout
    Fc2: Linear
} with

    member this.forward(train: bool) : Tensor…
