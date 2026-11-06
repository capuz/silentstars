---
repo: "rustnn/rustnn"
name: "rustnn"
description: "Rust Implementation for WebNN"
readmeQualityOk: true
url: "https://github.com/rustnn/rustnn"
homepage: "https://rustnn.github.io/rustnn/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai", "python", "rust", "webnn"]
stars: 34
forks: 11
openIssues: 62
closedIssues: 26
watchers: 2
contributors: 10
recentReleases: 1
createdAt: "2025-11-20T10:15:21Z"
lastCommitAt: "2026-11-06T12:17:32Z"
lastReleaseAt: "2026-10-16T08:54:41Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 54
maintainers: ["theHamsta", "matthargett", "shubhamg13"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed6603f8fcac0b9886b19b9c6891ee2aab061c2c923d940555d16085b5bd0b79/rustnn/rustnn"
---

# rustnn

  A Rust implementation of the W3C WebNN API with pluggable execution backends.

---

## [WARNING] EXPERIMENTAL - DO NOT USE IN PRODUCTION

rustnn is a development release (`0.6.0`). APIs change without notice.

---

## What is rustnn?

- **The WebNN API in Rust.** `MLContext`, `MLGraphBuilder`, `MLGraph`, `MLTensor` and
  `dispatch` mirror the [W3C WebNN](https://www.w3.org/TR/webnn/) JavaScript API. Every
  operation of the specification is available on the builder; rustnn-specific additions carry
  a `rustnn_` prefix.
- **Backends selected at context creation.** ONNX Runtime, NVIDIA TensorRT-RTX, Apple CoreML,
  LiteRT and Huawei CANN, chosen from the WebNN `accelerated` and power-preference hints or
  forced with a backend hint.
- **Graph interchange.** Loads `.webnn` text and JSON graphs from
  [webnn-graph](https://github.com/rustnn/webnn-graph) and
  [onnx2webnn](https://github.com/rustnn/onnx2webnn), saves graphs with `.safetensors` weights,
  exports ONNX and CoreML models and, with their features, TensorRT engines, TFLite and CANN
  models.
- **Conformance.** The upstream WebNN Web Platform Tests run in-repo against the backends on
  every pull request; the…
