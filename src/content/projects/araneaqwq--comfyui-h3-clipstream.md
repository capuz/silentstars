---
repo: "AraneaQwQ/ComfyUI-H3-ClipStream"
name: "ComfyUI-H3-ClipStream"
description: "ComfyUI plugin: Visual Clip Bin + Motion Context chaining for MiniMax H3 long-video generation"
readmeQualityOk: true
url: "https://github.com/AraneaQwQ/ComfyUI-H3-ClipStream"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 25]
stars: 24
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-10T10:32:37Z"
lastCommitAt: "2026-11-12T11:34:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 29
maintainers: ["AraneaQwQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/a76df3561ad46d31a4b35aa1fbb307821bc7a6a24370764768014589c11307ed/AraneaQwQ/ComfyUI-H3-ClipStream"
---

# ComfyUI H3 ClipStream

**Current: ComfyUI V3 API + Nodes 2.0.** Requires ComfyUI ≥ 0.37.0. See [V3_MIGRATION.md](https://github.com/AraneaQwQ/ComfyUI-H3-ClipStream/blob/HEAD/V3_MIGRATION.md) for details.
Card deletion supported on both single & dual pickers. See [CACHE_AND_DELETION.md](https://github.com/AraneaQwQ/ComfyUI-H3-ClipStream/blob/HEAD/CACHE_AND_DELETION.md).
Long Builder stitches a project's archived shots into one film — pick the project, click cards out, and drag cards into the order you want. See [Long video assembly](#long-video-assembly).

**[English](#english)** | **[简体中文](#简体中文)**

---

## English

**Picker isolation:** the ordinary Picker only loads cards saved by the ordinary Clip Bin Saver; the Dual Picker only loads Dual Saver cards, including cards with just one pass. Galleries, counts, covers and automatic continuation follow the same rule. A manually entered clip ID cannot cross formats. Pickers load clips through the project gallery; absolute-path input is no longer available. Existing files stay in place, and a shared project may contain both types. Deleting a project still deletes the whole project, including both types.

> **One plugin, two jobs:** a…
