---
repo: "m0rtus59/ComfyUI-MoonNodes"
name: "ComfyUI-MoonNodes"
description: "Multi-area regional prompting nodes featuring a layered canvas mask GUI, greedy text encoder, Gemini API persistent chat utilities and more. "
readmeQualityOk: true
url: "https://github.com/m0rtus59/ComfyUI-MoonNodes"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [52, 48]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-23T19:39:50Z"
lastCommitAt: "2026-10-31T09:53:05Z"
lastReleaseAt: "2026-07-30T16:13:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 30
maintainers: ["m0rtus59", "IrradiatedHaggis", "wanoful"]
openGraphImageUrl: "https://opengraph.githubassets.com/98e76e6a7a9a282526f8ecd2b99d33ad33524b96d9e8b9cb73ea4efeeb0f7611/m0rtus59/ComfyUI-MoonNodes"
---

# ComfyUI-MoonNodes 🌗

A collection of ComfyUI nodes focused mainly on regional prompting, masking, sampling utilities, and workflow conveniences.

> ⚠️ **Note:** This repository was developed collaboratively with AI. While it is fully functional and has been tested, there is always room for optimization. If you have ideas for improvements, contributions via Pull Requests are highly welcome!

The regional attention patching in `attention_couple.py` is based on [MultiMaskCouple](https://github.com/tumbowungus/MultiMaskCouple), which in turn is based on [ComfyCouple](https://github.com/rei-koshka/ComfyUI-ComfyCouple). The greedy text encoding feature was inspired by the regional prompter in [Omost](https://github.com/lllyasviel/Omost), via [ComfyUI_omost](https://github.com/huchenlei/ComfyUI_omost).

---

## 🛠️ Installation

### ComfyUI Manager

Search for `ComfyUI-MoonNodes` in ComfyUI Manager and install it from there.

### Manual installation

From your ComfyUI `custom_nodes` directory:

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/m0rtus59/ComfyUI-MoonNodes.git
cd ComfyUI-MoonNodes
pip install -r requirements.txt
```

Restart ComfyUI after installation.

---…
