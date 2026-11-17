---
repo: "animede/Diffusers_minimax-h3"
name: "Diffusers_minimax-h3"
description: "MiniMax-H3 (video + synchronized audio, 33B) on diffusers — 9.7s per still, 44.2s per 5s clip on 48GB, with every speedup verified byte-identical"
originalDescription: "MiniMax-H3 (video + synchronized audio, 33B) on diffusers — 9.7s per still, 44.2s per 5s clip on 48GB, with every speedup verified byte-identical"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/animede/Diffusers_minimax-h3"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["audio-to-video", "diffusers", "lip-sync", "minimax", "pytorch", "quantization", "text-to-video", "video-generation"]
stars: 25
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-06T09:33:36Z"
lastCommitAt: "2026-11-17T14:40:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 15
maintainers: ["yuzuki4251-afk"]
openGraphImageUrl: "https://opengraph.githubassets.com/f478dbba5dea6b5246eef409d27a358bf4d81502b515cca0f60b3b6d763a8f77/animede/Diffusers_minimax-h3"
---

# minimax-h3

**Japanese** | [English](https://github.com/animede/Diffusers_minimax-h3/blob/HEAD/README.en.md)

**MiniMax H3 (Hailuo 3.0) — a verification app that runs the 33B omni-modal model, which generates video + synchronized stereo audio in a single denoising pass, on mainstream GPUs.**
Generates **video + stereo audio** from text, image references, or audio references, and can also output still images only (T2I / Ref2I).
Built on diffusers' Modular Pipeline (PR #14355, pinned to commit **f37ab93**).
**Measured to run on a single 6GB card, on 8GB×2, and on a single real RTX 4060 Ti 16GB.** With a single 32GB card, it reaches real-time conversational generation (0.95× real time).

*A single-page browser UI. Five modes are switched with tabs: video: **T2VA** = text / **FL2VA** = frames / **Ref2VA** = reference; stills: **T2I** / **Ref2I**. The lower section is a gallery of generated outputs, where checked videos can be concatenated and exported. Prompts can be enhanced with a local LLM into the format of the official H3 guide, and FirstBlockCache, Sage, Turbo, quantization, low-VRAM mode, and others can be switched from this panel **without restarting**. Japanese/English…
