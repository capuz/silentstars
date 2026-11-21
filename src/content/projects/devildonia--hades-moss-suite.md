---
repo: "Devildonia/HaDeS-MOSS-Suite"
name: "HaDeS-MOSS-Suite"
description: "Advanced ComfyUI node suite for the MOSS image ecosystem."
readmeQualityOk: true
url: "https://github.com/Devildonia/HaDeS-MOSS-Suite"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["comfyui", "comfyui-custom-nodes", "comfyui-manager", "model", "model-merging", "moss-image"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-03T12:05:09Z"
lastCommitAt: "2026-11-21T13:29:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Devildonia"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffd9fe31990dd715f9d02ddba0b3ab6d61ff6fd2c47823abc67a8689792926ca/Devildonia/HaDeS-MOSS-Suite"
---

# HaDeS MOSS Suite

ComfyUI nodes for the **MOSS-Image** model family (OpenMOSS / Comfy Org: 42-layer single-stream DiT, `Qwen3.5-9B` text encoder, FLUX.2 VAE), in the style of the [HaDeS Anima Suite](https://github.com/Devildonia/HaDeS-Anima-Suite).

Claims about what layer groups do are measured with [`tools/moss_eval.py`](https://github.com/Devildonia/HaDeS-MOSS-Suite/blob/main/tools/moss_eval.py), not assumed.

**Models and LoRAs made with the suite** (Hugging Face, Apache 2.0):
- [HaDeS MOSS v1.0 Turbo](https://huggingface.co/DeVilDoNia/HaDeS-MOSS-v1.0-Turbo): one file, MOSS-Image Base with Turbo 8-steps v1.0 and our QwenLook LoRA (not published separately) baked in, run at 8 steps and CFG 1 with no separate LoRA; BF16 and int8 ConvRot.
- [HaDeS MOSS Turbo](https://huggingface.co/DeVilDoNia/HaDeS-MOSS-Turbo): few-step LoRAs trained from zero by DMD on one GPU, with no image dataset (rank 2, layers 24–41, about 3.5 MB each): Turbo 8-steps v1.0 for MOSS-Image Base, and Turbo, Turbo Diverse (4 steps) and Turbo 8-steps v0.7 for MOSS-Image SFT. The `turbo` input on `MOSS KSampler` applies them with their settings.
