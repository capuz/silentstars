---
repo: "emmtrix/emx-onnx-cgen"
name: "emx-onnx-cgen"
description: "Deterministic ONNX-to-C compiler for embedded and safety-critical systems, generating static, auditable C code with no dynamic memory or runtime dependencies."
readmeQualityOk: true
url: "https://github.com/emmtrix/emx-onnx-cgen"
homepage: "https://www.emmtrix.com/wiki/emmtrix_ONNX-to-C_Code_Generator"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["ai", "ai-compiler", "bare-metal", "c", "code-generation", "compiler", "deep-learning", "edge-ai", "embedded", "embedded-c"]
stars: 42
forks: 7
openIssues: 2
closedIssues: 7
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-09T16:00:20Z"
lastCommitAt: "2026-11-07T16:12:14Z"
lastReleaseAt: "2026-01-23T07:17:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 33
maintainers: ["strimo378", "Copilot", "can-leh-emmtrix"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bcb7901c499c3ecaafc8ea7bf8d3487ded211b98bb8f184e51c573a2e6fe2b1/emmtrix/emx-onnx-cgen"
---

**emmtrix ONNX-to-C Code Generator (emx-onnx-cgen)** compiles ONNX models to portable, deterministic C code for deeply embedded systems. The generated code runs without operating-system services or external runtimes and can be generated fully allocation-free, making it suitable for safety-critical and resource-constrained targets.

It now targets **full standard ONNX opset 26 support** based on **ONNX v1.21.0** and supports **nearly all microsoft ONNX operators** based on **ONNX Runtime 1.27.0**.

Key characteristics:

- **Static, compile-time known memory layout** for parameters, activations, and temporaries — no allocator is needed to size buffers
- **Optional allocation-free code generation** via `--large-temp-threshold 0` (by default, temporaries above 1024 bytes use `malloc`/`free` to avoid stack overflows)
- **Deterministic control flow** (explicit loops, no hidden dispatch or callbacks)
- **No OS dependencies**, using only standard C headers (for example, `stdint.h` and `stddef.h`)
- **Single-threaded execution model**
- **Bitwise-stable code generation** for reproducible builds
- **Readable, auditable C code** suitable for certification and code reviews
- **Generated C…
