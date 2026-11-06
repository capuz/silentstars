---
repo: "benmaster82/Pithos"
name: "Pithos"
description: "A dependency-free C inference engine for Liquid AI's LFM2 / LFM2.5 models. Terminal chat, an OpenAI-compatible server, a web agent and a terminal agent, all in one executable."
readmeQualityOk: true
url: "https://github.com/benmaster82/Pithos"
homepage: "https://benmaster82.github.io/Pithos/"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["lfm2", "lfm25", "ai-agent", "avx2", "c", "coding-agent", "cross-platform", "gguf", "inference-engine", "liquid-ai"]
stars: 27
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-27T14:08:19Z"
lastCommitAt: "2026-11-06T13:19:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["benmaster82"]
openGraphImageUrl: "https://opengraph.githubassets.com/b23c9c495c9f44ca38b065ea0ccd17b417b50233f6ffe11cc190ace22c8bdd00/benmaster82/Pithos"
---

Terminal chat, an OpenAI-compatible server, a web agent and a terminal agent, all in one executable.

| | |
|---|---|
| **About 1.9× faster than llama.cpp** | 17–22 tok/s against 11 tok/s with CUDA, on the same laptop and model ([head-to-head](#head-to-head-with-llamacpp-v04-2026-10-24)) |
| **Runs a 13.5 GB model on 16 GB of RAM** | experts stream from disk, the hot ones live in a 4 GB GPU |
| **Agents included** | Pandora in the browser, and a terminal agent that runs commands, fixes code and checks its own work |
| **Runs on an Xbox One** | an OpenAI-compatible server for your home network, with LFM3-1.7B on the console's GPU: 29.5 tok/s generation, ~140 tok/s prompt ([Xbox One](#xbox-one)) |

Pithos is an inference engine written from scratch in C11 with **no dependencies**: no external
libraries at build time, only the operating system API (Win32 or POSIX). It runs GGUF models of
Liquid AI's LFM2 / LFM2-MoE / LFM3 architectures and is tuned for `LFM2.5-24B-A2B-Q4_K_M.gguf`
(24 billion parameters, about 2 billion active per token) on an ordinary laptop. The small
[LFM3-1.7B](#lfm3-17b-small-and-fast) runs too: about 55 tokens per second with the GPU, 20 on the CPU alone.…
