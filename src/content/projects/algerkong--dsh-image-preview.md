---
repo: "algerkong/dsh-image-preview"
name: "dsh-image-preview"
description: "Image preview for DSH (DeepSeek Harness) web sessions: read_image results render as a thumbnail, click for full size in the built-in lightbox."
readmeQualityOk: true
url: "https://github.com/algerkong/dsh-image-preview"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["deepseek-harness", "deepseek-harness-plugin", "deepseek-harness-plugin-dev", "deepseek-harness-plugins", "dsh", "dsh-plugin", "dsh-plugins"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-27T02:37:59Z"
lastCommitAt: "2026-10-18T08:17:11Z"
lastReleaseAt: "2026-09-18T10:56:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 71
undervaluedScore: 27
maintainers: ["algerkong"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f6ed9c835cd16f39ca512661d4117284b730f4dc0d8c08680a36925ef60b83b/algerkong/dsh-image-preview"
---

# dsh-image-preview

> [中文版](https://github.com/algerkong/dsh-image-preview/blob/HEAD/README.zh.md)

**Image preview for the dsh session interface.** dsh 0.2.x already renders `read_image` as a collapsed image card and assistant final-output images as an official gallery. This plugin takes over all of them: `read_image` rows get a **thumbnail visible by default**, and images the user sends, plus images in the assistant's final answer — including image files in `present` delivery cards — use the same **full-size lightbox** with cross-image navigation, zoom, rotate, pan, download, and file actions (open with default/associated app, open in sidebar, reveal in folder).

## Features

| | |
| --- | --- |
| 🖼️ **Visible thumbnail** | `read_image` results render as a rounded ~240px thumbnail instead of a collapsed card, so the image is visible without expanding the row |
| 🔍 **Click for full size** | Click the thumbnail to open the original image in a lightbox — dismiss with `Esc`, clicking the backdrop, or the close button; focus is restored to the trigger on close |
| ↔️ **Cross-row navigation** | Arrow buttons / ← → keys cycle through **every image loaded in the session** (counter…
