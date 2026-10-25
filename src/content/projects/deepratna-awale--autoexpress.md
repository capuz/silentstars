---
repo: "deepratna-awale/AutoExpress"
name: "AutoExpress"
description: "Automatically creates character expressions from given image using A1111 Stable Diffusion API (with ADetailer)."
readmeQualityOk: true
url: "https://github.com/deepratna-awale/AutoExpress"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [56, 30]
topics: ["adetailer", "expressions", "sillytavern", "a1111-stable-diffusion-webui", "api", "diffusion", "expression", "face-recognition", "fastapi", "flask"]
stars: 27
forks: 2
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2023-12-29T19:51:35Z"
lastCommitAt: "2026-10-25T02:47:06Z"
lastReleaseAt: "2026-10-24T21:03:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 55
maintainers: ["deepratna-awale"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/737093628/a78708bf-d2fe-4d84-a5ea-19517741a1a7"
---

AutoExpress repaints a character's face with 28 different emotions and keeps everything else the same: pose, outfit, background and art style. It's made for expression sprites, such as [SillyTavern](https://github.com/SillyTavern/SillyTavern) character cards and visual novels.

## Features

- **Runs where you already generate images.** It works as an extension for AUTOMATIC1111, Forge, reForge and SD.Next, as custom nodes for ComfyUI (and SwarmUI), and as a node for InvokeAI. There's also a standalone app that drives any of those over their API, locally or on a remote GPU.
- **Prompts tuned per model family.** Separate expression prompts for Danbooru-tag anime models, Pony, Illustrious/NoobAI, SDXL and natural-language models such as Flux. **Auto** picks the family from the checkpoint name.
- **Expression LoRAs.** It downloads and applies the right expression LoRA for the checkpoint, reusing a Civitai key you already have set up.
- **Two ways to edit.** Face inpainting uses ADetailer or FaceDetailer. Instruction editing uses Qwen-Image-Edit on ComfyUI, which also works on photos.
- **One intensity slider** sets how far each expression is pushed.
- **Ready for sprites.** Files are…
