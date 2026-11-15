---
repo: "AcademiaSD/AcademiaSD_LoRAlab-TrainerStudio"
name: "AcademiaSD_LoRAlab-TrainerStudio"
description: "Train LoRAs for Qwen-Image 2.1, FLUX.2 Klein 9B, FLUX.3 Image Klein, Krea 2, Z-Image, MOSS-Image, ERNIE-Image, Ideogram 4, Anima, SDXL (Pony, Illustrious, NoobAI), LTX 2.3, MiniMax-H3, and more on NVIDIA GPUs from 4–8 GB VRAM. One install, one launcher, NF4 models. Windows, Linux and RunPod."
readmeQualityOk: true
url: "https://github.com/AcademiaSD/AcademiaSD_LoRAlab-TrainerStudio"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [61, 35]
topics: ["comfyui", "diffusion-models", "krea", "lora", "lora-training", "ltx-video", "minimax", "nf4", "qwen-image", "stable-diffusion"]
stars: 147
forks: 13
openIssues: 2
closedIssues: 32
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-09-28T15:01:25Z"
lastCommitAt: "2026-11-15T08:19:33Z"
status: "newborn"
tags: []
healthScore: 98
undervaluedScore: 30
maintainers: ["Synergyart", "AcademiaSD", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b7087b6c9ff625f472e6316ed5860a0d26c595b1339d9575204e7570a26ce21/AcademiaSD/AcademiaSD_LoRAlab-TrainerStudio"
---

# AcademiaSD LoRAlab Trainer Studio

## 📅 Changelog

What was added, newest first. Each entry links to its commit.

**2026-11-15**

- <img src="https://img.shields.io/badge/MAJOR%20UPDATE-7c3aed?style=for-the-badge" alt="MAJOR UPDATE" height="22"> **DoRA in 11 trainers** — a **DoRA** checkbox under LoRA Rank / Alpha in Z-Image, FLUX.1 Dev, FLUX.2 Klein 9B, FLUX.3 Image Klein, Krea 2, Qwen-Image 2.1, Qwen-Image 2512, Ming-Image, MOSS-Image, Anima and Wan 2.2. Each layer also learns the size of every output row, apart from the usual LoRA: it often follows the dataset more closely at the same rank, with slower steps. It works with rsLoRA and LoRA+, and the file loads in ComfyUI like any LoRA, with `_dora` in its name. Trained and checked so far in Z-Image, MOSS-Image and FLUX.1 Dev ([details](#️-lora-options-rslora-lora-dora-and-lokr)) [`cf599ab`](https://github.com/AcademiaSD/AcademiaSD_LoRAlab-TrainerStudio/commit/cf599ab)
- **Dataset Manager folds like the Training Chart** in every trainer: click its title to hide or show it (▶ / ▼), and the page remembers it. Closed, only the title with the image and caption counts stays…
