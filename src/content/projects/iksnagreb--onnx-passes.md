---
repo: "iksnagreb/onnx-passes"
name: "onnx-passes"
description: "Collection of ONNX model graph transformation and analysis passes based on ONNX IR and ONNX Script"
readmeQualityOk: true
url: "https://github.com/iksnagreb/onnx-passes"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 3
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-06-10T15:32:28Z"
lastCommitAt: "2026-11-02T15:17:22Z"
lastReleaseAt: "2026-04-21T14:58:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 65
maintainers: ["iksnagreb"]
openGraphImageUrl: "https://opengraph.githubassets.com/054ae8532cb37d38a69ba7334472c74b16a221909f8073e29ea6c6c81aa82429/iksnagreb/onnx-passes"
---

# ONNX Passes
Collection of [ONNX](https://github.com/onnx/onnx) model graph transformation
and analysis passes based on [ONNX IR](https://github.com/onnx/ir-py) and
[ONNX Script](https://github.com/microsoft/onnxscript) for fast and
interactive prototyping of model optimizations

## Motivation
Custom ONNX compilers, such as [FINN](https://github.com/Xilinx/finn) make heavy
use of graph transformations to gradually convert and optimize the ONNX graph to
a representation understood by the compiler backend. The most prominent set of
such graph transformations in the FINN framework is the so-called streamlining
to uncover the underlying integer-only compute of a quantized neural network as
part of the optimizing compiler frontend.

Usually these transformations follow a stereotypical structure of (1) detecting
a particular pattern within the graph, (2) checking a set of conditions on this
pattern and, based on the result of these checks, (3) inserting a new or
modified pattern into the graph. However, most of the work needs to be done by
hand with only thin wrappers around the raw ONNX representation based on
[QONNX](https://github.com/fastmachinelearning/qonnx) This causes…
