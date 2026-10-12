---
repo: "Phocinae/Phocinae-Largha-150M-v1"
name: "Phocinae-Largha-150M-v1"
description: "斑海豹 — Phocinae-Largha-150M-v1: a 144.3M bilingual decision model. Tiny model. Big decisions. 小海豹，大决断。"
readmeQualityOk: true
url: "https://github.com/Phocinae/Phocinae-Largha-150M-v1"
homepage: "https://phocinae.github.io/Phocinae-Largha-150M-v1/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bilingual", "calibration", "cpu-inference", "decision-making", "small-model", "structured-decisions", "text-classification", "typed-decisions", "option-order-invariance", "local-inference"]
stars: 50
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-08T00:22:36Z"
lastCommitAt: "2026-10-12T11:15:55Z"
lastReleaseAt: "2026-10-08T00:25:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["PerryLink"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdf5935249508034a256bf821e97780f0f47929c8c04450bb89e4092d365c7a5/Phocinae/Phocinae-Largha-150M-v1"
discussionCount: 0
---

斑海豹 **Largha**, the spotted seal: a **144.3M decision model** (en-first; zh evaluated on machine-translated cases) (150M-class) for structured decisions — one forward pass per decision, on your own hardware. Not a chat model: it takes a `state` plus a list of typed questions (`noul` yes/no · `choice` pick-one · `score` 2–10) and returns calibrated answers with confidence, robust to option reordering. Downloads: [Hugging Face](https://huggingface.co/Phocinae/Phocinae-Largha-150M-v1) · [GitHub](https://github.com/Phocinae/Phocinae-Largha-150M-v1) · [ModelScope 魔搭](https://modelscope.cn/models/PerryLink/Phocinae-Largha-150M-v1) · 中文: [FAQ 中文版](https://github.com/Phocinae/Phocinae-Largha-150M-v1/blob/HEAD/docs/faq.zh.md) · [场景演示画廊](https://github.com/Phocinae/Phocinae-Largha-150M-v1/blob/HEAD/docs/gallery/README_cn.md).

**Built on [mmBERT-small](https://huggingface.co/jhu-clsp/mmBERT-small)** (JHU CLSP, MIT) — see [Weights & license](#weights--license) for full lineage and license notes.

## TL;DR

| TL;DR | value |
|---|---|
| parameters | **144.3M** (mmBERT-small base: hidden 384 × 22 layers × 6 heads, 256k-vocab tokenizer, RoPE + sliding-window + full attention; base context 8192;…
