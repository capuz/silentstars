---
repo: "Devildonia/HaDeS-MOSS-Suite"
name: "HaDeS-MOSS-Suite"
description: "Advanced ComfyUI node suite for the MOSS image ecosystem."
readmeQualityOk: true
url: "https://github.com/Devildonia/HaDeS-MOSS-Suite"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [78, 22]
topics: ["comfyui", "comfyui-custom-nodes", "comfyui-manager", "model", "model-merging", "moss-image"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-03T12:05:09Z"
lastCommitAt: "2026-11-11T19:45:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Devildonia"]
openGraphImageUrl: "https://opengraph.githubassets.com/f59c77c39b5b631ca1445508a75d53c9b5f5cb68ab8966618b1f8058a2d3cbd3/Devildonia/HaDeS-MOSS-Suite"
---

# HaDeS MOSS Suite

ComfyUI nodes for the **MOSS-Image** model family (OpenMOSS / Comfy Org: 42-layer single-stream DiT, `Qwen3.5-9B` text encoder, FLUX.2 VAE), in the style of the [HaDeS Anima Suite](https://github.com/Devildonia/HaDeS-Anima-Suite).

Claims about what layer groups do are measured with [`tools/moss_eval.py`](https://github.com/Devildonia/HaDeS-MOSS-Suite/blob/main/tools/moss_eval.py), not assumed.

**Turbo (0.2.0, Turbo 8-steps in 0.3.0):** few-step LoRAs we trained for MOSS-Image SFT, [HaDeS MOSS Turbo and Turbo Diverse](https://huggingface.co/DeVilDoNia/HaDeS-MOSS-Turbo) (4 steps at CFG 1, 3.4 MB each), joined by Turbo 8-steps v0.7 (8 steps), and a `turbo` input on `MOSS KSampler` that applies them with their settings. How they were trained and measured: [`tools/RESULTS.md`](https://github.com/Devildonia/HaDeS-MOSS-Suite/blob/HEAD/tools/RESULTS.md), [`tools/moss_dmd_train.py`](https://github.com/Devildonia/HaDeS-MOSS-Suite/blob/main/tools/moss_dmd_train.py).

**New in 0.4.0:** `MOSS Loader` (model, text encoder and VAE in one node), `MOSS Multi-LoRA` (any number of LoRAs, searchable picker, strength per layer group), `MOSS Prompt Enhancer` (writes a caption or a…
