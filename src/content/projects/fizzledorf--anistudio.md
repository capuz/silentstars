---
repo: "FizzleDorf/AniStudio"
name: "AniStudio"
description: "An extendable generative media application using ImGui, opencv and ggml libraries."
readmeQualityOk: true
url: "https://github.com/FizzleDorf/AniStudio"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["cross-platform", "diffusion-models", "game-development", "hot-reload", "image-processing", "imgui", "plugin-system", "ggml", "opencv", "opengl"]
stars: 36
forks: 3
openIssues: 1
closedIssues: 4
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2024-04-27T04:24:34Z"
lastCommitAt: "2026-07-17T05:57:32Z"
lastReleaseAt: "2026-02-16T21:56:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 34
maintainers: ["FizzleDorf"]
openGraphImageUrl: "https://opengraph.githubassets.com/d042e675f4143fbfa3c753f60d5a6ff32e273edbc9f08599fab9e5b16a0d02b7/FizzleDorf/AniStudio"
discussionCount: 1
---

# Anistudio
An executable engine and editor for image, video and edit diffusion models written in C/C++ utilizing the [stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) library.

## Features
- Entity Component System for modular development
- Dockable and customizable Views vie [Dear ImGui](https://github.com/ocornut/imgui)
- Cross-platform (Windows, Linux)
- standard media project management
- Included UI editor for ease of development
- Supported models:
  - Image Models
    - SD1.x, SD2.x, SD-Turbo
    - SDXL, SDXL-Turbo
      - !!!The VAE in SDXL encounters NaN issues under FP16, but unfortunately, the ggml_conv_2d only operates under FP16. Hence, a parameter is needed to specify the VAE that has fixed the FP16 NaN issue. You can find it here: [SDXL VAE FP16 Fix](https://huggingface.co/madebyollin/sdxl-vae-fp16-fix/blob/main/sdxl_vae.safetensors).
    - SD3/SD3.5
    - Flux-dev/Flux-schnell
    - Chroma
  - Image Edit Models
    - FLUX.1-Kontext-dev
  - Video Models
    - Wan2.1/Wan2.2
  - [PhotoMaker](https://github.com/TencentARC/PhotoMaker) support.
  - Control Net support with SD 1.5
  - LoRA support, same as…
