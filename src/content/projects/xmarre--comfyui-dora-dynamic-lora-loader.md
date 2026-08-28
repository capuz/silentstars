---
repo: "xmarre/ComfyUI-DoRA-Dynamic-LoRA-Loader"
name: "ComfyUI-DoRA-Dynamic-LoRA-Loader"
description: "DoRA Dynamic LoRA Loader (fix OneTrainer/Flux keys)"
readmeQualityOk: true
url: "https://github.com/xmarre/ComfyUI-DoRA-Dynamic-LoRA-Loader"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [51, 49]
stars: 13
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-03-02T21:39:38Z"
lastCommitAt: "2026-08-28T12:23:26Z"
lastReleaseAt: "2026-08-28T11:01:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 56
maintainers: ["xmarre"]
openGraphImageUrl: "https://opengraph.githubassets.com/b126f60b255e590ca852ed663bdc15e0888c30343436bc505bf9b94291cfae07/xmarre/ComfyUI-DoRA-Dynamic-LoRA-Loader"
---

# ComfyUI-DoRA-Dynamic-LoRA-Loader

Custom ComfyUI node that loads and stacks **regular LoRAs and DoRA LoRAs**, with additional **Flux / Flux2 + Diffusers/PEFT + OneTrainer compatibility**, **Z-Image Turbo / Lumina2 attention-format compatibility**, optional **auto-strength redistribution**, and multiple **DoRA correctness / stability fixes**.

This repo contains two distinct parts:

1. **A Power LoRA Loader-style node**
   - multiple LoRAs in one node
   - per-LoRA strengths
   - stacked application in one place

2. **Targeted ComfyUI patches and transforms**
   - fixes and compatibility layers needed for Flux / Flux2 DoRA LoRAs to load and apply correctly
   - protection against several known failure modes

Auto-strength support in this loader was inspired by [Comfyui-flux2klein-Lora-loader](https://github.com/capitan01R/Comfyui-flux2klein-Lora-loader) and [Comfyui-ZiT-Lora-loader](https://github.com/capitan01R/Comfyui-ZiT-Lora-loader).

This implementation was reworked for the unified DoRA + standard LoRA path in this loader, including Flux.2 Klein and ZiT/Lumina2 compatibility handling.

---

## Runtime bypass adapters (low VRAM)

The loader includes an optional **Runtime…
