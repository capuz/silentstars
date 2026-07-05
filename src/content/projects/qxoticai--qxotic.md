---
repo: "qxoticai/qxotic"
name: "qxotic"
description: "AI sovereignty for the world's most trusted runtime."
readmeQualityOk: true
url: "https://github.com/qxoticai/qxotic"
homepage: "https://qxotic.ai"
language: "Java"
languages: ["Java"]
languagePcts: [87]
topics: ["graalvm", "hip", "java", "jax", "llama", "llm", "llm-inference", "metal", "opencl", "tinygrad"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-11T15:40:08Z"
lastCommitAt: "2026-07-05T20:57:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["mukel"]
openGraphImageUrl: "https://opengraph.githubassets.com/f72a22212d36bf98be496cceffc8f45fe6ed216c58c075e889e76d5266449c5c/qxoticai/qxotic"
---

# [Quixotic AI][website]

**AI sovereignty for the JVM.**

The JVM powers global finance, big data, and mission-critical infrastructure. Quixotic provides core building blocks for running LLM inference natively on the JVM -- model loading, tokenization, tensor operations, a native quantized matmul engine, and an LLM inference server -- with native-performance CPU/GPU backends where needed. No external services, no Python interop, no ONNX bridges.

---

## Capabilities

- **Write Once, Accelerate Everywhere** - A single Tensor API across Panama, C, CUDA, HIP, Metal, OpenCL, and Mojo. Switch backends with one line.
- **LLM Inference Engine** - Run 9+ model families with Vector API-accelerated kernels and an OpenAI-compatible server.
- **Native Quantized Matmul** - Hand-tuned SIMD kernels (x86 SSE3 through AVX-512, ARM NEON through i8mm, Apple Metal) in a single fat JAR.
- **GraalVM Native Image** - First-class support for small footprint and fast startup.
- **JVM-Native Architecture** - Built from first principles for the JVM. No Python dependencies, no external runtimes.
- **On-Device LLM Inference** - Run large language models locally with quantization and efficient memory…
