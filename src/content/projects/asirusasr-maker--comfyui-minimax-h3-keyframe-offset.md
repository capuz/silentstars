---
repo: "asirusasr-maker/ComfyUI-MiniMax-H3-Keyframe-Offset"
name: "ComfyUI-MiniMax-H3-Keyframe-Offset"
description: "Advanced MiniMax H3 nodes for ComfyUI — drop-in replacement for the stock MiniMax H3 Image to Video node with arbitrary keyframe frame offsets, plus an all-in-one audio generator. Place your first/last keyframes at any frame index and give the model full freedom to generate motion between them."
readmeQualityOk: true
url: "https://github.com/asirusasr-maker/ComfyUI-MiniMax-H3-Keyframe-Offset"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-08-17T16:43:56Z"
lastCommitAt: "2026-11-12T11:42:20Z"
lastReleaseAt: "2026-11-12T11:44:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 22
maintainers: ["asirusasr-maker"]
openGraphImageUrl: "https://opengraph.githubassets.com/2772eea18d2642f348c4ae111a405d83339317233653554dc2b53c16b605f6b4/asirusasr-maker/ComfyUI-MiniMax-H3-Keyframe-Offset"
---

# ComfyUI-MiniMax-H3-Keyframe-Offset

Custom nodes that extend the **MiniMax H3** workflow in ComfyUI:

- **MiniMax H3 Keyframe Offset** — place the first and last reference frames at chosen positions inside a generated clip.
- **MiniMax H3 Audio Generator (AIO)** — generate audio in one node, with optional image and audio references using the native Ref2VA conditioning path.

The current maintenance release removes the package's former global `PackedLayout` monkey patch. Keyframe offsets are now passed through ComfyUI's native `minimax_keyframes` conditioning data.

---

## Contents

- [What's new](#whats-new)
- [Features](#features)
- [Installation](#installation)
- [Requirements](#requirements)
- [Nodes](#nodes)
  - [MiniMax H3 Keyframe Offset](#1-minimax-h3-keyframe-offset)
  - [MiniMax H3 Audio Generator (AIO)](#2-minimax-h3-audio-generator-aio)
- [Example workflows](#example-workflows)
- [Technical notes](#technical-notes)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Credits](#credits)

---

## What's new

### Patch-free maintenance release

- **Removed the global `PackedLayout.__init__` monkey patch.** The package no longer replaces or wraps this ComfyUI…
