---
repo: "tvolkf-star/LLM-3D-Scene-Bridge"
name: "LLM-3D-Scene-Bridge"
description: "Working direct LLM modeling in Autodesk 3ds Max from natural-language descriptions via an ~8 KB Python/pymxs bridge — no agents, no specialized 3D models"
readmeQualityOk: true
url: "https://github.com/tvolkf-star/LLM-3D-Scene-Bridge"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-09-28T06:13:07Z"
lastCommitAt: "2026-10-11T10:15:26Z"
lastReleaseAt: "2026-10-11T06:25:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 41
maintainers: ["tvolkf-star"]
openGraphImageUrl: "https://opengraph.githubassets.com/139f4e0fbf33961e2dad45bd7e1bd133ed637149cb4a004bc83a4528fdf80af3/tvolkf-star/LLM-3D-Scene-Bridge"
---

# Direct LLM Modeling in Autodesk 3ds Max

**A working experiment in direct modeling inside Autodesk 3ds Max 2024 using general-purpose ChatGPT.**

[Full research in English](https://github.com/tvolkf-star/LLM-3D-Scene-Bridge/blob/HEAD/RESEARCH_EN.md) · [Исследование на русском](https://github.com/tvolkf-star/LLM-3D-Scene-Bridge/blob/HEAD/RESEARCH_RU.md) · [Русская версия](https://github.com/tvolkf-star/LLM-3D-Scene-Bridge/blob/HEAD/README_RU.md)

## Download

**[⬇ DOWNLOAD ALL — TASY MaxBridge 0.6.1 PORTABLE](https://github.com/tvolkf-star/LLM-3D-Scene-Bridge/releases/download/v0.6.1-portable/TASY_MaxBridge_v0.6.1_PORTABLE_COMPLETE.zip)**

Portable bridge, examples, documentation, and images. [Release details](https://github.com/tvolkf-star/LLM-3D-Scene-Bridge/releases/tag/v0.6.1-portable).

## Bridge development

The approximately 8 KB Python/pymxs bridge was **developed as part of this research**, not obtained as an existing integration. It was implemented, tested and corrected against a running Autodesk 3ds Max 2024 installation.

The bridge provides the command-and-feedback channel: it accepts operations, executes them through the native 3ds Max Python/pymxs interface, and…
