---
repo: "ausboss/ComfyUI-AusBoss-Model-Downloader"
name: "ComfyUI-AusBoss-Model-Downloader"
description: "Download Civitai and Hugging Face models into ComfyUI, with AusBoss Workflow Note integration."
readmeQualityOk: true
url: "https://github.com/ausboss/ComfyUI-AusBoss-Model-Downloader"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [51, 49]
stars: 9
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-06T19:59:25Z"
lastCommitAt: "2026-11-13T05:43:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 7
maintainers: ["ausboss"]
openGraphImageUrl: "https://opengraph.githubassets.com/f41ed057e104328ab6cbd50d45ada829b248eb60fa2c34395fcc01bb1ac66e0b/ausboss/ComfyUI-AusBoss-Model-Downloader"
---

Paste a **Civitai** or **Hugging Face** link, choose the model folder, and click **Download**. Files already on your machine show as **Installed**, so you can see what a workflow is missing before you run it.

This is a separate addon for [ComfyUI-AusBoss](https://github.com/ausboss/ComfyUI-AusBoss). The downloader node works on its own; installing the main pack also adds direct downloads to its **Workflow Note** model rows.

**Version 0.2.1.** Works behind a proxy such as RunPod, counts linked model files as installed, reads `HF_TOKEN` and `CIVITAI_API_KEY` from the environment when no key is saved, and **From workflow** also collects the model links on loader nodes. Tested with real downloads on Linux in both Classic and Nodes 2.0. Registry availability depends on review; the Git and ZIP installation methods below work independently. The Registry package ID is `ausboss-model-downloader`.

## What it does

- **Downloads to the right place.** Choose a registered model folder and an optional subfolder, such as `loras/style/anime`.
- **Finds existing models.** Checks the selected model type's registered folders, including extra model paths and nested folders.
- **Lets you choose the…
