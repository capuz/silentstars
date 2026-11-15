---
repo: "Pikselkroken/pixlstash"
name: "pixlstash"
description: "Desktop image library for photographers and creators. Search by content, face or the text in a picture, get help from local AI models to tag and organise your images. Connect ComfyUI to generate and edit pictures, and AI-toolkit to train LoRAs. Also runs as a headless server."
readmeQualityOk: true
url: "https://github.com/Pikselkroken/pixlstash"
homepage: "http://pixlstash.dev/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [57, 25]
topics: ["cross-platform", "locally-hosted", "picture-management", "pictures", "python", "machine-learning", "comfyui", "cuda", "image-classification", "image-database"]
stars: 99
forks: 11
openIssues: 23
closedIssues: 884
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-10-12T14:13:17Z"
lastCommitAt: "2026-11-15T11:24:40Z"
lastReleaseAt: "2026-03-09T21:50:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["lindkvis"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1074806136/ac53e139-57fc-4feb-91c3-4500825c3dc4"
---

# PixlStash

  &nbsp;

PixlStash is an image library for photographers and creators. It searches,
tags, scores and organises large picture collections. Connect ComfyUI to
generate and edit pictures, and AI-toolkit to train LoRAs. Every model runs on
your own machine.

PixlStash is first of all a desktop app. The headless server, with the full
interface in a browser, is maintained alongside it.

## The 2.0 layout

The title bar switches between three workspaces:

- **Media**: the picture grid, with people, sets and projects in the sidebar
  and the selected pictures in the Inspector on the right.
- **Workflows**: your ComfyUI workflows as cards, their recipes, and the
  templates your ComfyUI serves.
- **Models**: the model shelf, your model folders and drives, and training
  runs.

The title bar also holds the library picker, which shows how full the
library's drive is, and a Tasks button for running work. It is the
same in the desktop app and in a browser.

## Features

### AI

- Semantic search with CLIP (OpenCLIP ViT-B-32) across the whole library,
  tagged or not. Text in documents, receipts and screenshots is read too, and
  the same search matches it.
- Face detection and…
