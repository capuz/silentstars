---
repo: "Cedriceuh/freetoken-rdna3"
name: "freetoken-rdna3"
description: "Fast local LLM inference on AMD Radeon RX 7900 XTX / XT (RDNA3, ROCm): big Mixture-of-Experts models like Qwen3.8-Flash-Next on one or two consumer GPUs. Up to 4 parallel agents with 262k context each, or one 1M-token context, OpenAI/Anthropic API, NVFP4 and EXL3 checkpoints. A tuned build of FreeToken."
readmeQualityOk: true
url: "https://github.com/Cedriceuh/freetoken-rdna3"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["amd", "amd-gpu", "inference-server", "llm", "llm-inference", "local-llm", "mixture-of-experts", "moe", "multi-gpu", "nvfp4"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 25
recentReleases: 0
createdAt: "2026-09-29T13:42:02Z"
lastCommitAt: "2026-10-31T09:11:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["jason-fxz", "Cedriceuh", "void-mckenzie"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1395443611/c3ae3967-5bda-426c-a819-281647c8d13d"
discussionCount: 0
---

# freetoken-rdna3

**Run Qwen3.8-Flash-Next, a 125B-parameter Mixture-of-Experts model, on your own PC with one or two AMD Radeon RX 7900
XTX / XT cards.** You get a local server with an OpenAI- and Anthropic-compatible API: chat apps, coding agents
(OpenCode, Claude Code) and your own scripts use it like a cloud API, with 262k tokens of context per conversation (up
to 1M with `xtx-xt-1m`), while the model runs on your hardware.

It is a tuned build of the [FreeToken](https://github.com/FlashML-org/FreeToken) MoE engine for RDNA3 (ROCm). The model
does not fit in VRAM: every expert lives in system RAM and the GPUs keep the most used ones; two unequal cards share
the work.

## What you need

| | |
|---|---|
| GPUs | one or two RX 7900 XTX (24 GB) / RX 7900 XT (20 GB); other cards: [which GPUs](https://github.com/Cedriceuh/freetoken-rdna3/blob/HEAD/docs/rdna3/limits.md#which-gpus) |
| RAM | 128 GB recommended: the server locks ~52 to ~83 GiB, depending on the checkpoint and the number of cards ([table](#which-checkpoint)), more with conversations kept in RAM, and the system and your programs need ~30 GiB beside it ([how to…
