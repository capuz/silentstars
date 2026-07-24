---
repo: "void-research/onnx-extractor"
name: "onnx-extractor"
description: "Lightweight ONNX model parser for extracting tensor shapes, operations, and data"
readmeQualityOk: true
url: "https://github.com/void-research/onnx-extractor"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-17T16:33:09Z"
lastCommitAt: "2026-07-24T06:08:15Z"
lastReleaseAt: "2026-03-30T15:39:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 56
maintainers: ["PieInOblivion"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f9252df2aeb07475b45feb73809d9df866d8339ac86829c5599efd50be906e5/void-research/onnx-extractor"
---

# onnx-extractor

A tiny and lightweight ONNX model parser for extracting tensor shapes, operations, and raw data with mmap and external data loading support. Every function in this crate provides zero-copy access to the underlying tensor data.

## Model Loading

```rust
use onnx_extractor::Model;

// Load from file (uses mmap)
let model = Model::load_from_file("model.onnx")?;

// Load from bytes
let bytes = std::fs::read("model.onnx")?;
let model = Model::load_from_bytes(bytes)?;
```

## Model and Graph Functions

Global metadata is accessed from the `Model` container, while graph structure and state is accessed via `model.graph()`.

```rust
// Basic info
println!("{}", model);

let graph = model.graph();

// Tensor access
let tensor = graph.tensors().get("input_name"); // Returns Option<&Tensor>
let tensor_names = graph.tensors().keys(); // Iterator<Item = &String>
let inputs = graph.get_input_tensors(); // Iterator<Item = &Tensor>
let outputs = graph.get_output_tensors(); // Iterator<Item = &Tensor>
let weights = graph.get_weight_tensors(); // Iterator<Item = &Tensor>

// Extracting a tensor (moves out of graph so data can outlive it)
// (Note: `model` must be declared as `mut…
