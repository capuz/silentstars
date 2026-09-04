---
repo: "ROCm/hip-ep"
name: "hip-ep"
description: "ROCm Execution Provider for ONNX Runtime on AMD GPUs. Compiles ONNX models through MLIR to LLVM bitcode, JIT-loads them at session creation, and dispatches to hipDNN, MIOpen, hipBLASLt, and custom HIP kernels"
readmeQualityOk: true
url: "https://github.com/ROCm/hip-ep"
language: "C++"
languages: ["C++"]
languagePcts: [52]
stars: 12
forks: 16
openIssues: 13
closedIssues: 4
watchers: 0
contributors: 72
recentReleases: 4
createdAt: "2026-01-14T22:13:14Z"
lastCommitAt: "2026-09-04T08:10:20Z"
lastReleaseAt: "2026-09-01T10:27:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 81
undervaluedScore: 65
maintainers: ["zpye", "zz002", "BoarQing"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b34feaca05bea0fa9b2d1a1834db51315656e61adff8efaa1d396dac2f21ec3/ROCm/hip-ep"
---

# ROCm hip-ep

**hip-ep** is an ONNX Runtime Execution Provider for AMD GPUs. It compiles ONNX graphs through an MLIR pipeline—from ONNX dialect operations to a custom HIP dialect and LLVM IR—and executes them with hipDNN, hipBLASLt, and custom HIP kernels.

The provider integrates with ONNX Runtime through the MorphiZen pass framework. By default, compiled models are emitted as OS-portable LLVM bitcode and JIT-loaded in-process when a session is created. Native per-model libraries remain available as an opt-in artifact format.

## Highlights

- **MLIR compiler pipeline** — lowers ONNX graphs to HIP and LLVM IR.
- **ROCm execution backends** — dispatches to hipDNN, hipBLASLt, and custom HIP kernels.
- **Dynamic shapes** — supports runtime batch/sequence dimensions, shape refinement, and runtime-sized outputs.
- **GPU memory planning** — packs transient allocations into one or more grow-on-demand pool domains and keeps host-written shape scalars in separate host-mapped scratch.
- **In-graph output allocation** — allocates graph outputs through the Execution Provider callback once their runtime shapes are known.
- **Externalized constants** — stores large model weights in a sidecar…
