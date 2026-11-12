---
repo: "zephel01/Abyss"
name: "Abyss"
description: "Run 50-280 GB MoE LLMs (DeepSeek V4/V4.1 Flash, GLM-5.3-Flash, Qwen3.8-Flash-Next, Ornith) on one consumer GPU: experts spread over VRAM, RAM and NVMe SSD. Browser chat + OpenAI/Anthropic APIs. CUDA, ROCm, DGX Spark."
readmeQualityOk: true
url: "https://github.com/zephel01/Abyss"
homepage: "https://huggingface.co/zephel01"
language: "C++"
languages: ["C++", "Cuda", "Python"]
languagePcts: [43, 30, 21]
topics: ["cuda", "deepseek", "dgx-spark", "gguf", "glm", "inference", "llm", "local-llm", "mixture-of-experts", "moe"]
stars: 39
forks: 6
openIssues: 15
closedIssues: 19
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-10-10T21:55:30Z"
lastCommitAt: "2026-11-12T11:41:02Z"
lastReleaseAt: "2026-10-13T13:31:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 44
maintainers: ["zephel01"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c892a4eff76742d1b7a1af470ded12bfc0e48be29a2485b1223608ded4f254/zephel01/Abyss"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/peasantsmith"]
---

# Abyss

**Run 50-280 GB mixture-of-experts models — DeepSeek V4 / V4.1 Flash, GLM-5.3-Flash, Qwen3.8-Flash-Next, Ornith-1.5 —
on one consumer GPU, with the experts spread over VRAM, RAM and the SSD.**

%20%C2%B7%20Windows-lightgrey)

-ED1C24?logo=amd&logoColor=white)
-76B900)

**English** · [日本語](https://github.com/zephel01/Abyss/blob/HEAD/README.ja.md)

[Pick a model](#pick-a-model) · [Quick start](#-quick-start) · [Disk space](#disk-space) ·
[Performance](#-performance) · [Manual](https://github.com/zephel01/Abyss/blob/HEAD/docs/MANUAL.md) · [Changelog](https://github.com/zephel01/Abyss/blob/HEAD/CHANGELOG.md) · [Credits](#-credits)

---

Abyss is an inference engine for large mixture-of-experts (MoE) models on one PC. It keeps the most-used experts in
VRAM, the next ones in pinned RAM and the rest on the NVMe SSD, and moves them as the conversation needs them - so a
model larger than your GPU runs at usable speed. You get a browser chat and OpenAI- / Anthropic-compatible APIs, with
thinking and tool calls, all on your own machine.

> [!NOTE]
> Abyss is a fork of [Project Maya](https://github.com/mw00/project-maya), which grew out of
>…
