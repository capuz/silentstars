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
stars: 29
forks: 10
openIssues: 27
closedIssues: 13
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-11-20T10:15:21Z"
lastCommitAt: "2026-09-23T08:47:16Z"
lastReleaseAt: "2026-05-04T11:05:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 51
maintainers: ["theHamsta", "shubhamg13", "mtavenrath"]
openGraphImageUrl: "https://opengraph.githubassets.com/66cd05bdf1db299c567b09b34db6d3fa782f349f763d62ef0d68dc3b7bd6835f/rustnn/rustnn"
---

# rustnn

  A Rust implementation of the W3C WebNN API with pluggable execution backends.
</div>

---

## [WARNING] EXPERIMENTAL - DO NOT USE IN PRODUCTION

rustnn is a development release (`0.5.x`). APIs change without notice.

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
  every pull request;…
