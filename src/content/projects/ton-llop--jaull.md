---
repo: "Ton-Llop/Jaull"
name: "Jaull"
description: "Find LLMs that fit your hardware and validate them with reproducible local tests."
readmeQualityOk: true
url: "https://github.com/Ton-Llop/Jaull"
homepage: "https://jaull.tech"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["benchmarking", "gguf", "gguf-models", "hardware-detection", "huggingface", "llama-cpp", "llm", "local-ai", "python", "tui"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-08-02T18:28:18Z"
lastCommitAt: "2026-11-04T13:04:30Z"
lastReleaseAt: "2026-10-11T16:56:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Ton-Llop"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ccc098a020ec4c556b25bfc41606232dbc1693a138f2caed43e813605999a59/Ton-Llop/Jaull"
---

# Jaull

**From local hardware to evidence-backed LLM deployment decisions.**

Jaull tells you which open language models your machine can really run, picks the exact
file and runtime for each one, and explains the order. It can then run them, benchmark them
and score them on your own hardware. No language model writes the ranking or the
explanations.

*A real search on an older desktop (Ryzen 5 3600, 7.7 GiB RAM, RTX 2060 6 GiB, WSL2):
English general chat, Balanced priority, commercial use required. Five plans, each with its
memory fit, runtime and file format.*

**One recommendation from the same search**, shortened from the exported report:

```text
2. Qwen/Qwen2.5-0.5B-Instruct-GGUF — Safer option
   Q5_K_M · llama.cpp on CUDA · fits comfortably (1.74 GiB) · apache-2.0, commercial use OK
   llama-server --model Qwen2.5-0.5B-Instruct-GGUF.Q5_K_M.gguf --ctx-size 4096 --n-gpu-layers -1

   Why this position: placement confirmed · strong fit for chat · strong runnability ·
                      weak capability (a 0.5B model) · lots of memory headroom
   Measured on this machine, this exact file:
     IFEval, 541 prompts      25.9 % (140/541)
     tg128 generation speed   median…
