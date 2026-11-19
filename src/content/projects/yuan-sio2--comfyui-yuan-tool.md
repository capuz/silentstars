---
repo: "yuan-SiO2/ComfyUI-Yuan-Tool"
name: "ComfyUI-Yuan-Tool"
description: "Plugin integration for a modified version of ComfyUI. Free and open-source to use. Thanks to the original authors of the open-source plugin; a link to the original plugin is attached at the end."
originalDescription: "Comfyui改版的插件集成，免费开源使用，在此致谢开源插件原作者，末尾已附带原插件链接。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yuan-SiO2/ComfyUI-Yuan-Tool"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [53, 47]
stars: 125
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-17T08:45:16Z"
lastCommitAt: "2026-11-19T05:08:29Z"
lastReleaseAt: "2026-07-26T00:45:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 31
maintainers: ["yuan-SiO2"]
openGraphImageUrl: "https://opengraph.githubassets.com/7db25f4de9a5e1f5435068820d840804fbae7ac3cf9774384942846205392fdc/yuan-SiO2/ComfyUI-Yuan-Tool"
---

# ComfyUI-Yuan-Tool

A collection of ComfyUI custom nodes for **timeline workflows** targeting MiniMax H3 video generation. It includes nodes for images, text, audio, CLIP timelines, and guidance injection.

## Installation

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/yuan-SiO2/ComfyUI-Yuan-Tool.git
```

Dependencies (`requirements.txt`): `opencv-python`, `numpy`, `Pillow`, `color-matcher`, `nvidia-vfx`, `av`, `torchaudio`, `scenedetect` (torch is provided by ComfyUI). The "Yuan Video Save" node also requires FFmpeg. It is provided by `imageio-ffmpeg` by default, or you can use a system `ffmpeg` or the environment variable `YUAN_FFMPEG_PATH`.
