---
repo: "Uzbekunknown/dlss-nr-on-intel"
name: "dlss-nr-on-intel"
description: "DLSS 5 Neural Rendering on an Intel Xe2 iGPU: an independent reimplementation of the inference pass, running in a real game through a Vulkan layer. Code only. No NVIDIA binaries, no weights."
readmeQualityOk: true
url: "https://github.com/Uzbekunknown/dlss-nr-on-intel"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-12T15:42:08Z"
lastCommitAt: "2026-09-19T02:47:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["Uzbekunknown"]
openGraphImageUrl: "https://opengraph.githubassets.com/4973562485bb212c2329f7822a5a3f382b213ac9565c61946c4f38f0bd9a7fdb/Uzbekunknown/dlss-nr-on-intel"
---

# DLSS 5 Neural Rendering on an Intel Xe2 iGPU

NVIDIA's DLSS 5 Neural Rendering pass — the one-step pixel-space diffusion model that
re-renders a frame's detail — running on an **Intel Arc 140V (Lunar Lake, Xe2)**
integrated GPU under Linux, in a real game, through a Vulkan layer.

No NVIDIA hardware, no NGX, no CUDA. The graph runs on Intel's XMX matrix units through
`VK_KHR_cooperative_matrix`, and the pass is injected at `vkQueuePresentKHR`, so it
attaches to anything that presents with Vulkan — including a Windows game under Proton.

**This is a research port, not a product.**  
Read "What to expect" before deciding it is broken.

**All breakdowns and analysis are written by AI.**

---

## What it looks like

Stills with the model at full resolution. Left, or on top: the game's own frame. Right, or
below: the same frame through DLSS-NR on this Intel Arc 140V.

**Tekken 7** — Unreal Engine 4, D3D11, 1920x1080, crops enlarged 2x:

**Dead or Alive 5 Last Round** — D3D9, 1920x1080, a different engine and art style:

**Mortal Kombat 1** — Modified Unreal Engine 4, **D3D12** through VKD3D-Proton, 1600x900:

Measured rather than eyeballed. Texture is the high-frequency energy…
