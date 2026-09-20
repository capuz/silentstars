---
repo: "jeffreyyu0602/voyager-compiler"
name: "voyager-compiler"
description: "A PyTorch ML compiler targeting edge accelerators generated using the Voyager Framework"
readmeQualityOk: true
url: "https://github.com/jeffreyyu0602/voyager-compiler"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-12-22T06:18:03Z"
lastCommitAt: "2026-09-20T08:32:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 64
maintainers: ["jeffreyyu0602"]
openGraphImageUrl: "https://opengraph.githubassets.com/67aabdd3d0c9c6af52eb08a4bfcbd937578b8b4d21b65658fae10a56b5db4ab7/jeffreyyu0602/voyager-compiler"
---

# Voyager Compiler

The Voyager Compiler is a hardware–software co-designed machine learning (ML) compiler that efficiently maps PyTorch models onto Voyager-generated deep neural network (DNN) accelerators.

The compiler ingests PyTorch models, extracts a static compute graph using [PyTorch 2 Export (PT2E)](https://docs.pytorch.org/docs/stable/export.html), and applies [PT2E-based quantization](https://docs.pytorch.org/ao/stable/tutorials_source/pt2e_quant_qat.html). It incorporates a custom quantization framework that provides fine-grained control over data types—including low-bitwidth integers, floating point, posit, and NormalFloat—as well as advanced techniques such as mixed-precision and codebook quantization.

After quantization, the compiler lowers models through hardware-aware operator fusion, architecture-specific optimizations, scheduling, and accelerator instruction generation. Voyager produces a hardware-oriented intermediate representation (IR) built on the PyTorch FX graph, which is serialized via [Protocol Buffers](https://github.com/protocolbuffers/protobuf) and consumed by a C-based backend to generate the final accelerator instruction bitstream.

## Getting…
