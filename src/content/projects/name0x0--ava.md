---
repo: "NAME0x0/AVA"
name: "AVA"
description: "Research and training stack for AVA — a tool-using, memory-aware virtual assistant targeting 4 GB VRAM. Spans custom transformers, verifier-RL, external memory, multi-domain benchmarks, and Gemma 4 inference optimization."
readmeQualityOk: true
url: "https://github.com/NAME0x0/AVA"
homepage: "https://name0x0.github.io/AVA/"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["ai", "llm", "personal-assistant", "small-language-models", "virtual-assistant", "benchmarks", "distillation", "edge-inference", "external-memory", "gemma"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-18T12:10:35Z"
lastCommitAt: "2026-07-20T06:32:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 73
maintainers: ["NAME0x0"]
openGraphImageUrl: "https://opengraph.githubassets.com/f728ec5d3588b260417deed1f35a27aea01bed84627a151ca38a176b38a89a69/NAME0x0/AVA"
---

# AVA

**Capable AI on a 4 GB laptop GPU. No cloud. No cluster. No budget.**

**[Quickstart](https://github.com/NAME0x0/AVA/blob/HEAD/docs/QUICKSTART.md)** · **[Results](https://github.com/NAME0x0/AVA/blob/HEAD/docs/RESULTS.md)** · **[Compare](https://github.com/NAME0x0/AVA/blob/HEAD/docs/COMPARE.md)** · **[Reproduce](https://github.com/NAME0x0/AVA/blob/HEAD/docs/REPRODUCE.md)** · **[Experiments](https://github.com/NAME0x0/AVA/blob/HEAD/docs/EXPERIMENTS.md)** · **[Roadmap](https://github.com/NAME0x0/AVA/blob/HEAD/docs/ROADMAP.md)**

</div>

---

## TL;DR

AVA v2 is a **42 MB QLoRA adapter** for [Qwen 3.5 2B](https://huggingface.co/Qwen/Qwen3.5-2B), trained and evaluated entirely on a single **4 GB VRAM** laptop GPU.

```
   LAPTOP GPU              AVA v2
 ┌──────────────┐         ┌──────────────────┐
 │ RTX A2000    │  QLoRA  │ ARC-C   82.0%    │
 │ 4 GB VRAM    │ ──────▶ │ MMLU    59.2%    │
 │ Single card  │ 100 min │ GSM8K   44.0%*   │
 └──────────────┘         │ 42 MB adapter    │
                          └──────────────────┘
                              *k=5 self-cons
```

**What's special**: 82% ARC-Challenge on the full 1,172-question test set beats Llama 3.2 3B-Instruct…
