---
repo: "mw2wbyys6t-sudo/live2d-auto-pipeline"
name: "live2d-auto-pipeline"
description: "This project focuses on end‑to‑end automated production for Live2D, aiming to fully automate the generation of deployable and runnable Live2D models from source materials."
originalDescription: "本项目聚焦 Live2D 全流程自动化制作，旨在实现从素材到可部署运行的 Live2D 模型的全自动生成。    This project focuses on end‑to‑end automated production for Live2D, aiming to fully automate the generation of deployable and runnable Live2D models from source materials."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mw2wbyys6t-sudo/live2d-auto-pipeline"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["live2d"]
stars: 14
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-05-14T10:30:33Z"
lastCommitAt: "2026-10-29T12:25:12Z"
lastReleaseAt: "2026-10-24T17:43:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 42
maintainers: ["mw2wbyys6t-sudo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0267d16f6301b4ecd23ffa884c30128e1612bde7d8605c69326d5ac5fdbfcf93/mw2wbyys6t-sudo/live2d-auto-pipeline"
discussionCount: 1
---

From text description → AI character art → automatic layering → Live2D model → exportable and previewable.

---

## First, let’s be clear: what it can do now

I don’t want to make empty promises. Some parts of this project are already solid, and some are still in progress. Below is the **actual status as of v0.10.9**:

| Capability | Status | Notes |
|------|------|------|
| AI-generated character art | ✅ Available | Pollinations free cloud, works out of the box with no key; also supports paid high-quality generation via Volcano Engine/SenseTime |
| Fully offline image generation | ✅ Available | Automatically falls back to placeholder art when offline, so the pipeline doesn’t stop |
| Automatic layering (K-means) | ✅ Available | Color-clustering-based layering, pure Python, no extra models needed |
| Automatic layering (SAM semantic) | ⚠️ Requires setup | Higher-precision semantic segmentation, but requires downloading about 2 GB of model weights |
| PSD export | ✅ Available | Requires `pip install psd-tools`; if missing, it falls back to exporting a PNG package |
| Live2D moc3 export | ✅ Available | **In-house compiler, pixel-by-pixel verified against Live2D’s official Cubism…
