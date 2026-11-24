---
repo: "beehive-lab/jitllm"
name: "jitllm"
description: "Java Inference Tornado toolkit: High performance LLM inference & serving for the JVM on GPUs"
readmeQualityOk: true
url: "https://github.com/beehive-lab/jitllm"
homepage: "https://beehive-lab.github.io/jitllm/"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["accelerators", "compilers", "gpu", "java", "java21", "llama3", "nvidia", "tornadovm", "gguf", "llm"]
stars: 301
forks: 44
openIssues: 21
closedIssues: 33
watchers: 9
contributors: 13
recentReleases: 0
createdAt: "2025-05-10T20:07:17Z"
lastCommitAt: "2026-11-24T14:04:25Z"
lastReleaseAt: "2026-07-28T07:47:21Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 38
maintainers: ["orionpapadakis", "stratika", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbbf7752c4fdf434811a616460f4b4525ffa23dc8f018b5bb8c68187bf91374e/beehive-lab/jitllm"
discussionCount: 2
---

# jitLLM: LLM inference & serving for the JVM, on any GPU

-----------

### Think vLLM — but pure Java, and it runs on **any** GPU.

**jitLLM** is a JVM-native LLM inference and serving engine. You write and ship plain Java; [**TornadoVM**](https://github.com/beehive-lab/TornadoVM) JIT-compiles the hot transformer kernels to **CUDA, OpenCL, or Apple Metal** at runtime — no JNI glue, no second toolchain, no native rebuild per GPU.

One `.jar` runs the same model on **NVIDIA, Intel, AMD, and Apple Silicon**, from a laptop to an RTX 5090.

Serve it behind an **OpenAI-compatible API**, embed it in **LangChain4j** or **Quarkus**, or run it from the CLI in one line.

-----------
