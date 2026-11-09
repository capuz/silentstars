---
repo: "Nynxz/ZenTrainer"
name: "ZenTrainer"
description: "Train LoRAs inside ComfyUI: image and video models, live previews, on NVIDIA or AMD."
readmeQualityOk: true
url: "https://github.com/Nynxz/ZenTrainer"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [55, 36]
stars: 54
forks: 10
openIssues: 3
closedIssues: 3
watchers: 3
contributors: 5
recentReleases: 2
createdAt: "2026-10-18T06:07:12Z"
lastCommitAt: "2026-11-09T04:35:19Z"
lastReleaseAt: "2026-10-30T15:36:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 36
maintainers: ["Nynxz", "aksugat", "astropuzzo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1424048228/a53aa3c0-a189-4370-bc5b-f4a6f6e6d213"
---

Train LoRAs inside ComfyUI, and watch them learn. ZenTrainer trains on ComfyUI's own model code,
with the models and GPU it already has.

- **Characters, styles and video**: MOSS Image, Krea 2, FLUX 3, FLUX.2 Klein, Qwen Image 2.1, Z-Image,
  Anima, Fibo 2.0, SDXL (and its finetunes) and MiniMax H3 video, each trained end to end here; more
  are listed as untested
- **Straight into ComfyUI**: trained LoRAs show up in its LoRA loaders
- **Simple or Advanced**: a recipe sets everything, or set every option yourself

## Quick start

1. Install ZenTrainer from ComfyUI Manager, restart ComfyUI and click the lotus in its top bar.
2. **New run → Simple**: pick a recipe, add 15–40 photos, name it. Missing models are downloaded
   and the photos captioned for you.
3. Watch it train. The LoRA lands in `output/zentrainer/loras/`.

## Training you can watch

Each run is one page: the newest samples beside the loss, each sample denoising as it renders, and
the numbers in a rail on the right.

- **Pause, sample, save or change the learning rate** mid-run
- **Resume** from any checkpoint
- **Validation loss** on a fixed set, and a **likeness** score for character LoRAs
- **Try a prompt** on any…
