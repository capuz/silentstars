---
repo: "AzallazA/RTX-PRO-6000-TP3-Inference-Recipes"
name: "RTX-PRO-6000-TP3-Inference-Recipes"
description: "AI inference recipes. Mainly focused on vLLM, TP3, with 3x RTX PRO 6000"
readmeQualityOk: true
url: "https://github.com/AzallazA/RTX-PRO-6000-TP3-Inference-Recipes"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 9
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-30T12:01:56Z"
lastCommitAt: "2026-11-21T13:27:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 51
maintainers: ["AzallazA"]
openGraphImageUrl: "https://opengraph.githubassets.com/0526c8166a00046d21e6e2b42a6749d14a4dc59da83f647fbd2ba7664fb18a0d/AzallazA/RTX-PRO-6000-TP3-Inference-Recipes"
---

#  Native TP3

**DS41 TP3 maintenance update. No re-export is needed if you already have the Nov 21 package.** The updated `flare` fixes steering access and accepts an explicit zero steering scale on Messages and Responses. Rebuild the server from `hyperflare-tp3-20261121.1` and restart it with your existing package. The update was tested on all three GPUs with `gb202-tp3-202611201530`. [Release notes](https://github.com/AzallazA/hyperflare-inference/releases/tag/hyperflare-tp3-20261121.1)

Inference recipes for 3x RTX PRO 6000 Blackwell (TP3) with vLLM and NVIDIA Hyperflare (formerly Flare). Each folder is one build:
image or export recipe, launch files, measurements and the source changes.

All builds run on 3x RTX PRO 6000 Blackwell 96 GB (PCIe), tensor parallel 3 unless a row says otherwise. Power is the
per-GPU limit the numbers were measured at. Newest first in each table.
