---
repo: "luori668/ComfyUI-Luori-Sunset"
name: "ComfyUI-Luori-Sunset"
description: "Prompt assistant for text-to-image generation."
originalDescription: "文生图的提示词助手。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/luori668/ComfyUI-Luori-Sunset"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [69, 31]
stars: 50
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-16T07:51:09Z"
lastCommitAt: "2026-11-12T11:43:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 30
maintainers: ["luori668"]
openGraphImageUrl: "https://opengraph.githubassets.com/878eb8fd54240b213715fb2dc8a9d30ed1d16329849706b8c4b145e00ac200e9/luori668/ComfyUI-Luori-Sunset"
---

# ComfyUI-Luori-Sunset

> Luori (落日) Series · Prompt Node Collection (Krea2 + Z-image)

Merges two locally used prompt plugins into one: **one word library, six nodes, zero dependencies** (no dependencies).
Native widgets are collapsed into a folding panel to keep the canvas cleaner. Search "Luori" (落日) on the canvas to find all six nodes.
# Luori Plugin Update Notes:
# Luori Plugin Update · 2026-11-12

**New**: Prompt input socket suitable for shared use with Anima-moss-krea2.

**Improved**: Word library logic, with an "open output folder" button added.

**New node "✨ Luori-Word Library Archive"**
Connect after "Save Image". If the prompt box is **left empty, it automatically reads** the positive prompt of the current generation (both words typed manually in the CLIP text encoder and words extracted by Luori nodes can be read; negative prompts are not saved). If you enter text manually, the manual input takes precedence. After generation, it automatically saves the **prompt + generated image + all generation parameters (model/steps/CFG/sampler/scheduler/seed/size/LoRA/one-, two-, and three-pass sampling)** into the word library.

**2. New "Duplicate" marker in the word library**…
