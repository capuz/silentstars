---
repo: "Quantco/spox"
name: "spox"
description: "Pythonic framework for building ONNX graphs"
readmeQualityOk: true
url: "https://github.com/Quantco/spox"
homepage: "https://spox.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["machine-learning", "onnx", "python", "ndonnx"]
stars: 100
forks: 8
openIssues: 2
closedIssues: 60
watchers: 10
contributors: 34
recentReleases: 0
createdAt: "2023-02-20T14:45:10Z"
lastCommitAt: "2026-09-08T08:15:59Z"
lastReleaseAt: "2023-10-05T16:10:46Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 41
maintainers: ["dependabot[bot]", "cbourjau", "quant-ranger[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c50877cab6928fee5f093f575dcea8d816229fab72aa83708c7b79749cea0b8/Quantco/spox"
---

# Spox

Spox makes it easy to construct [ONNX](https://github.com/onnx/onnx/) models through clean and idiomatic Python code.

## Why use Spox?

A common application of ONNX is converting models from various frameworks. This requires replicating their runtime behaviour with ONNX operators.
In the past this has been a major challenge.
Based on our experience, we designed Spox from the ground up to make the process of writing converters (and ONNX models in general) as easy as possible.

Spox's features include:

- Eager operator validation and type inference
- Errors with Python tracebacks to offending operators
- First-class support for subgraphs (control flow)
- A lean and predictable API

## Installation

Spox releases are available on PyPI:

```bash
pip install spox
```

There is also a package available on conda-forge:

```bash
conda install spox
```

## Quick start

In Spox, you primarily interact with `Var` objects - **variables** - which are placeholders for runtime values.
The initial `Var` objects, which represent the _arguments_ of a model (the model inputs in ONNX nomenclature), are created with an explicit type using the `argument(Type) -> Var` function. The possible…
