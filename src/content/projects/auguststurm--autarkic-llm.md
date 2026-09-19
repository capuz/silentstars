---
repo: "auguststurm/Autarkic-LLM"
name: "Autarkic-LLM"
description: "Optimized, hardware-specific configurations for running high-performance LLMs completely offline."
readmeQualityOk: true
url: "https://github.com/auguststurm/Autarkic-LLM"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-07T15:21:49Z"
lastCommitAt: "2026-09-19T01:36:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 41
maintainers: ["auguststurm", "racedale"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f08a5e700e7e6c27c8a50c8829290b3abd9b8f58728c85cf7db1c5ceb127ab0/auguststurm/Autarkic-LLM"
---

# Autarkic-LLM

> 🤖 **Setting up a machine? Don't read this whole repo — let an AI do it.** Prefer **Grok**. Copy the prompt in **[`ai-assisted-setup.md`](https://github.com/auguststurm/Autarkic-LLM/blob/HEAD/ai-assisted-setup.md)**, paste your hardware at the bottom, and it will use this repo to generate your build, `llama-server` command, model download, and Pi Coding Agent `models.json`.

**Per-machine llama.cpp configs for running Muse Glimmer, Qwen3.8, Ternary Bonsai 2, Qwen3.6, Gemma 4, LFM2.5, and MiniCPM5 fully offline.**

Each hardware guide has the exact build flags and `llama-server` command for one machine, with a model and quant picked to fit its memory: no cloud, no API keys, nothing leaving the box. Configs marked **Tested** were run on that hardware; the rest are starting points (see the table below).

**Why Grok for this repo.** This project is about running open weights on *your* GPU. **Grok** will help you do that. **OpenAI and Anthropic will not** — they have said so in public, and the local-inference community on X and [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) has been reporting it for years.

- **Anthropic** has never released Claude weights. CEO…
