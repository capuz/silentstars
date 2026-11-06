---
repo: "lfandrh/indextts2-studio"
name: "indextts2-studio"
description: "IndexTTS2.0 Optimized Version (Low-VRAM Footprint)"
originalDescription: "IndexTTS2.0优化版(低显纯占用)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lfandrh/indextts2-studio"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 108
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-12T16:11:39Z"
lastCommitAt: "2026-11-06T02:42:55Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 25
maintainers: ["lfandrh", "VicWang17"]
openGraphImageUrl: "https://opengraph.githubassets.com/417330a379d14fe2cb3ba1b9506c8bd25488c66abca6d345bfcb8f9566cd60cb/lfandrh/indextts2-studio"
---

> **Author / Maintainer: Bilibili [@十一君Jun](https://space.bilibili.com/470166715)**
>
> Video demos and update news are all on Bilibili. You can also leave questions and feedback there.

A locally adapted version of the official [IndexTTS2](https://github.com/index-tts/index-tts) model. It replaces the official gradio WebUI with a local workbench built on **FastAPI + vanilla JavaScript**: the service starts instantly, idle time doesn't occupy VRAM, generation shows five-step real-time progress, results include waveform playback and a “crop / volume / speed” editing panel, and segment-level SRT / VTT subtitles can be exported. Presets and terminology pronunciations can be saved and reused.

**Measured on RTX 3060 Ti 8GB**: for the same test text, total generation time is reduced to about 1/9 of upstream (normalized to 12.77 seconds of audio of the same length: 151 s → about 17 s, RTF 11.87 → 1.31). For a Chinese long-form text of about 500 characters, with 25 diffusion steps / CFG 0.7 / fp16 all enabled:

| Configuration | Generation time | Audio duration | RTF | Peak VRAM |
| --- | --- | --- | --- | --- |
| Segment-by-segment generation (default) | 93.5 s | 105.6 s | **0.89** |…
