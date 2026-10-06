---
repo: "software-mansion/runntime"
name: "runntime"
description: "High-performance neural networks engine for web, built on top of TypeGPU"
readmeQualityOk: true
url: "https://github.com/software-mansion/runntime"
homepage: "http://docs.swmansion.com/runntime/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ai", "computer-vision", "edge", "llm", "ml", "nlp", "on-device", "speech", "speech-to-text", "webml"]
stars: 60
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 10
recentReleases: 1
createdAt: "2026-09-14T13:28:27Z"
lastCommitAt: "2026-10-06T10:41:26Z"
lastReleaseAt: "2026-09-16T14:04:01Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 24
maintainers: ["chmjkb", "xxpopielxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/383aa01be962c029ab2e3430df4ee456de843c7613847b14768070e87ca5ba3f/software-mansion/runntime"
discussionCount: 1
---

---

**ruNNtime** is a framework for running AI models on the user's own GPU,
implemented using TypeGPU. It composes GPU kernels into the layers a model is
made of, attention, convolutions, norms, matmuls and builds common
architectures out of them. The kernels are plain TypeGPU code compiled to
WGSL at runtime, so there is no WASM binary to download, and
the same code runs anywhere WebGPU does: the browser, React Native and
Electron.

It ships as one package, `runntime`, with two entry points:

- **`runntime/zoo`** - ready-to-run model implementations for commonly used tasks: speech, vision, and natural language processing. You call a single function, and get a running model.
- **`runntime/core`** - this package is not yet exposed to the public. It is a set of pre-built kernels for building neural networks on the Web, mirroring PyTorch semantics.

## Table of Contents

- [Key Features](#key-features)
- [Quickstart](#quickstart)
  - [1. Installation](#1-installation)
  - [2. Set up the engine](#2-set-up-the-engine)
  - [3. Run a model](#3-run-a-model)
- [Models](#models)
- [Coming from transformers.js](#coming-from-transformersjs)
- [Documentation](#documentation)
- [Created by…
