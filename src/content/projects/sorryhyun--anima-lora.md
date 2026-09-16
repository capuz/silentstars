---
repo: "sorryhyun/anima_lora"
name: "anima_lora"
description: "optimized anima lora training script"
readmeQualityOk: true
url: "https://github.com/sorryhyun/anima_lora"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 115
forks: 18
openIssues: 3
closedIssues: 39
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-03-27T14:37:02Z"
lastCommitAt: "2026-09-16T08:47:25Z"
lastReleaseAt: "2026-05-07T13:12:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 32
maintainers: ["sorryhyun", "MBK-fr"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddc146d32e205fbeab3c3a2fe1c2531240f21756c34d5dca91ddd710de71d741/sorryhyun/anima_lora"
---

# anima_lora

📖 Guidebook: [English](https://github.com/sorryhyun/anima_lora/blob/HEAD/docs/guidelines/guidebook.md) · [한국어](https://github.com/sorryhyun/anima_lora/blob/HEAD/docs/guidelines/가이드북.md) · [日本語](https://github.com/sorryhyun/anima_lora/blob/HEAD/docs/guidelines/ガイドブック.md) · [中文](https://github.com/sorryhyun/anima_lora/blob/HEAD/docs/guidelines/指南书.md)

</p>

One line — installs [uv](https://astral.sh/uv), selects NVIDIA CUDA or AMD ROCm on Windows, fetches the latest release, runs `uv sync` (Python 3.13 + torch), and opens the GUI (no git required). The installer is published as a signed-by-checksum release asset:

```bash
# Linux / macOS
curl -LsSf https://github.com/sorryhyun/anima_lora/releases/latest/download/install.sh | sh
```
```powershell
# Windows (PowerShell)
irm https://github.com/sorryhyun/anima_lora/releases/latest/download/install.ps1 | iex
```

> **Requirements:** NVIDIA needs at least an Ampere GPU (RTX 3000-series / A100 or newer) and driver **≥595**. The Windows ROCm path targets RDNA 4 (`gfx1200` / `gfx1201`) and is certified for Radeon RX 9060 XT and RX 9070 XT. The CUDA path uses **Python 3.13 + PyTorch 2.12 + CUDA 13.2**; the Windows AMD path…
