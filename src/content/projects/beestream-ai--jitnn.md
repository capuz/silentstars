---
repo: "beestream-ai/jitNN"
name: "jitNN"
description: "jitNN: Deep Learning in Java, powered by TornadoVM. Fast and Portable."
readmeQualityOk: true
url: "https://github.com/beestream-ai/jitNN"
language: "Java"
languages: ["Java"]
languagePcts: [92]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-30T21:50:16Z"
lastCommitAt: "2026-11-24T14:10:30Z"
lastReleaseAt: "2026-11-21T12:17:16Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["kotselidis", "stratika"]
openGraphImageUrl: "https://opengraph.githubassets.com/7797550a12337df77127c102a865b936acb997d5bb7a8a0e713cb7eb43b9928e/beestream-ai/jitNN"
---

# jitNN

**jitNN** is a machine-learning and deep-learning library for the JVM, written in Java on
[TornadoVM](https://github.com/beehive-lab/TornadoVM). Tensors, autograd, layers and optimisers
are plain Java; every operator is a Java kernel that TornadoVM JIT-compiles for the GPU it runs on.

- **Portable.** Every operator has a `KernelContext` kernel, forward and backward, so the same code
  runs on CUDA, OpenCL and Metal. Backend-specific variants (tensor-core GEMMs on NVIDIA, simdgroup
  matrices on Apple) sit behind the same operator.
- **Compiled whole.** Operators are recorded lazily. At a sync point the forward pass, the backward
  pass and the optimiser step compile into one TornadoVM task graph, which is cached by structure
  and replayed on every later step. Parameters stay on the device.
- **Validated.** Every operator is checked against PyTorch, forward and backward, on every device,
  and every gradient against finite differences. Models trained from PyTorch's initial weights end
  on PyTorch's losses; the classical estimators match scikit-learn and imported models match ONNX
  Runtime.
