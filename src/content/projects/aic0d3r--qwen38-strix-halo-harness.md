---
repo: "aic0d3r/qwen38-strix-halo-harness"
name: "qwen38-strix-halo-harness"
description: "Local AI coding agent harness for AMD Strix Halo (Ryzen AI Max+ 395): Qwen3.8 125B on the iGPU, NPU side-jobs, crash recovery, logged benchmarks. Works with any OpenAI-compatible engine; cloud optional."
readmeQualityOk: true
url: "https://github.com/aic0d3r/qwen38-strix-halo-harness"
homepage: "https://github.com/aic0d3r/qwen38-strix-halo-harness/blob/master/docs/local-vs-cloud-model-comparison.md"
language: "TypeScript"
languages: ["TypeScript", "Shell", "Python"]
languagePcts: [32, 31, 25]
topics: ["amd", "coding-agent", "gguf", "llama-cpp", "local-llm", "pi-agent", "qwen3", "radeon-8060s", "ryzen-ai-max", "speculative-decoding"]
stars: 36
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-23T16:32:47Z"
lastCommitAt: "2026-10-26T03:02:27Z"
lastReleaseAt: "2026-10-15T01:35:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 42
maintainers: ["aic0d3r"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1343977939/10a3c6da-107f-44ba-b35f-2986bf9d9ff6"
discussionCount: 0
---

# AI Coding Agent Harness for Any Hardware (Tuned for Strix Halo)

**Run a coding agent on whatever you have, tuned for AMD Strix Halo.** Works with any OpenAI-compatible engine or cloud
model. On a Ryzen AI Max+ 395 (Strix Halo) it runs a 125B Qwen3.8 Flash-Next on the iGPU
with **262k context**, NPU models screening and routing prompts, and a sidecar writing commits and
summaries. Guided setup for llama.cpp, vLLM, Ollama, LM Studio and more. Built on
[pi](https://github.com/earendil-works/pi).

> **Not only for Strix Halo, and not only local.** The harness (token-saving extensions, context
> management, guards, sidecar) runs on any machine, with any OpenAI-compatible engine or a cloud
> model. Only the NPU tools need Strix Halo, and they're optional. Strix Halo is just the
> reference setup.

**Get started:**
[Guided setup](#guided-setup) •
[Install](#install) •
[Model files](#model-files) •
[Quick start](#quick-start)<br>
**Why it works:**
[Efficiency](#efficiency) •
[What you get](#what-you-get) •
[The stack](#the-stack) •
[Evidence](#evidence)<br>
**Running it:**
[The NPU](#the-npu) •
[Crash recovery](#crash-recovery) •
[Upgrading halogen](#upgrading-halogen)<br>
**More:**…
