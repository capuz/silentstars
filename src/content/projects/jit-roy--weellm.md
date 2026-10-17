---
repo: "Jit-Roy/WeeLLM"
name: "WeeLLM"
description: "WeeLLM runs large diffusion models with as little as 4 GB of VRAM, without any quantization. It dynamically determines how many layers can fit within the available VRAM and streams the text encoder and transformer layers to the GPU layer by layer, enabling inference on hardware with limited VRAM. It supports both safetensors and GGUF models. "
readmeQualityOk: true
url: "https://github.com/Jit-Roy/WeeLLM"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["flux", "low-vram", "stable-diffusion", "z-image", "hidream", "krea2", "qwen-image", "qwen-image-edit", "sdxl", "diffusion"]
stars: 98
forks: 10
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-08-02T04:44:36Z"
lastCommitAt: "2026-10-17T07:58:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 31
maintainers: ["Jit-Roy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1319824974/73de17cf-f281-4dd3-8310-50077165a815"
---

&nbsp;

# Layer-streaming inference for large diffusion models — Under 4 GB VRAM, no quantization

WeeLLM dynamically streams text encoder and transformer layers to the GPU for massive models. Instead of forcing the entire model into VRAM, it intelligently pins as many blocks as your hardware allows, and seamlessly streams the rest layer-by-layer in the background — enabling massive models to run smoothly on budgets as low as 4GB VRAM.

> **🚀 [Official ComfyUI Extension Now Available!](https://github.com/Jit-Roy/ComfyUI-WeeLLM)**  
> *Bring WeeLLM's ultra-low VRAM layer-streaming capabilities directly into your ComfyUI workflows!*

---

## Some Benchmarks(For RTX 3050 Having <4GB Vram)

| Model                              | Parameters |   Peak VRAM |    Peak RAM | Time (1024x1024) |
| --------------------------------   | ---------: | ----------: | ----------: | ---------------: |
| `SDXL` (Juggernaut XL v9)          |      ~6.6B | **2.98 GB** | **1.50 GB** | ~120s · 20 steps |
| `SD 1.5`                           |      ~1.7B | **0.90 GB** | **1.40 GB** |  ~68s · 20 steps |
| `SD 3.5 Medium`                    |        ~8B | **3.48 GB** | **3.96 GB** | ~219s · 20 steps |
|…
